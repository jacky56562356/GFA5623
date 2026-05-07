import { GoogleGenAI } from '@google/genai';
import fs from 'fs';
import path from 'path';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });

const images = [
  {
    filename: 'gfa-hero-camp.png',
    prompt: 'Cinematic high quality photo of diverse group of 8-14 year old children at a professional outdoor film set, wearing lanyards, gathered around a professional cinema camera on a tripod, looking excited and engaged, golden hour sunlight, shallow depth of field, photorealistic, editorial quality, no text',
  },
  {
    filename: 'gfa-clapperboard.png',
    prompt: 'Cinematic close-up photo of a young child around 10 years old holding a film clapperboard on a movie set outdoors, other children and cameras visible in background, warm natural sunlight, shallow depth of field, photorealistic, editorial quality, no text',
  },
  {
    filename: 'gfa-sunset-crew.png',
    prompt: 'Cinematic silhouette photo of five teenage youth filmmakers standing on a hilltop at golden sunset, one holds a camera on tripod, one holds a boom microphone, others look at scripts or phones, warm orange sky background, inspirational and cinematic, photorealistic, no text',
  },
  {
    filename: 'gfa-campfire.png',
    prompt: 'Cinematic photo of diverse group of 8 teenagers sitting around a campfire at night outdoors with string lights in trees, one teenager films them with a handheld camera, warm firelight, summer camp atmosphere, joyful expressions, photorealistic, editorial quality, no text',
  },
  {
    filename: 'gfa-community-screening.png',
    prompt: 'Cinematic photo of families and children sitting on blankets outdoors at a free community film screening event, large projection screen in background showing a children\'s film, warm evening light with fairy lights, diverse multicultural audience, joyful atmosphere, photorealistic, no text',
  },
  {
    filename: 'gfa-awards-ceremony.png',
    prompt: 'Cinematic photo of a young teenager around 13 years old receiving a film award trophy on stage at an elegant ceremony, spotlight on them, proud smile, audience visible in background clapping, red carpet style event, photorealistic, editorial quality, no text',
  },
  {
    filename: 'gfa-workshop-classroom.png',
    prompt: 'Cinematic photo of diverse group of children ages 10-15 in a professional film production workshop, some looking at monitors, one child behind camera, instructor visible in background, bright indoor studio lighting, photorealistic, educational setting, no text',
  },
  {
    filename: 'gfa-talent-stage.png',
    prompt: 'Cinematic photo of a young Asian girl around 12 performing on a grand theatre stage under dramatic spotlights, beautiful stage costumes, elegant performance, wide shot showing large audience in seats, Hollywood theatre interior, photorealistic, no text',
  },
  {
    filename: 'gfa-filmmakers-team.png',
    prompt: 'Cinematic photo of a diverse team of four teenage filmmakers working together outdoors, one operating a camera on shoulder, one directing, one holding reflector, one taking notes, lush green park setting, golden sunlight, photorealistic, no text',
  },
  {
    filename: 'gfa-graduate-support.png',
    prompt: 'Cinematic photo of a young adult filmmaker around 21 years old on an outdoor film set reviewing footage on a monitor, professional crew around them, director\'s chair visible, confident expression, photorealistic, editorial quality, no text',
  },
  {
    filename: 'gfa-youth-director.png',
    prompt: 'Cinematic close-up photo of a young boy age 11 looking through a professional cinema camera viewfinder, focused expression, outdoor set, film crew visible in background, warm sunlight, shallow depth of field, photorealistic, no text',
  },
  {
    filename: 'gfa-diversity-group.png',
    prompt: 'Cinematic group photo of diverse multiethnic children ages 8-16 smiling together holding small cameras and film equipment outdoors in California, sunny day, joyful and energetic, photorealistic, editorial quality, no text',
  },
];

async function generate(img) {
  console.log(`Generating: ${img.filename}...`);
  try {
    const response = await ai.models.generateImages({
      model: 'imagen-3.0-generate-002',
      prompt: img.prompt,
      config: {
        numberOfImages: 1,
        outputMimeType: 'image/png',
        aspectRatio: '16:9',
      },
    });

    if (response.generatedImages?.[0]?.image?.imageData) {
      const data = response.generatedImages[0].image.imageData;
      const buf = Buffer.from(data, 'base64');
      const outPath = path.join('/tmp/cc-agent/66463477/project/public/images', img.filename);
      fs.writeFileSync(outPath, buf);
      console.log(`  Saved: ${outPath}`);
    } else {
      console.log(`  No image data returned for ${img.filename}`);
    }
  } catch (err) {
    console.error(`  Error for ${img.filename}:`, err.message || err);
  }
}

async function main() {
  for (const img of images) {
    await generate(img);
    await new Promise(r => setTimeout(r, 1000));
  }
  console.log('Done.');
}

main();
