import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import Stripe from "stripe";
import compression from "compression";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Use compression middleware for all responses
  app.use(compression());

  // Middleware to parse JSON bodies
  app.use(express.json());

  // Define API routes FIRST
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  let stripeClient: any = null;
  function getStripe(): any {
    if (!stripeClient) {
      const key = process.env.STRIPE_SECRET_KEY;
      if (!key) {
        throw new Error('STRIPE_SECRET_KEY environment variable is required');
      }
      stripeClient = new Stripe(key);
    }
    return stripeClient;
  }

  app.post("/api/create-checkout-session", async (req, res) => {
    try {
      const { items, customerDetails } = req.body;
      
      // Setup Stripe line items based on cart
      const line_items = items.map((item: any) => ({
        price_data: {
          currency: 'usd',
          product_data: {
            name: item.name,
          },
          unit_amount: Math.round(item.price * 100), // convert to cents
        },
        quantity: item.qty,
      }));

      // Try to initialize Stripe Client
      const stripe = getStripe();
      
      // In preview/dev mode, origin can be tricky. We use req.headers.origin if available, or fallback.
      const origin = req.headers.origin || `http://localhost:${PORT}`;

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items,
        mode: 'payment',
        success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${origin}/short-drama-showcase`,
        customer_email: customerDetails.email,
        metadata: {
           // Pass in some data for webhooks
           filmTitle: customerDetails.filmTitle,
           director: customerDetails.director,
           company: customerDetails.company,
        }
      });

      res.json({ url: session.url });
    } catch (e: any) {
       console.error('Checkout error:', e);
       // Check if it's the missing key error and gracefully tell the client
       if (e.message.includes('STRIPE_SECRET_KEY')) {
           res.status(500).json({ error: "missing_stripe_key", message: "Stripe API Key is missing. Check your environment variables." });
       } else {
           res.status(500).json({ error: "stripe_error", message: e.message || 'Internal Server Error' });
       }
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
      base: "/",
    });
    app.use(vite.middlewares);
  } else {
    // Serve static files in production
    const distPath = path.join(process.cwd(), 'dist');
    // Add cache headers for static assets
    app.use(express.static(distPath, {
      maxAge: '1y',
      etag: true,
      lastModified: true
    }));
    app.get('*all', (req, res) => {
      // Avoid caching index.html
      res.setHeader('Cache-Control', 'no-cache');
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
