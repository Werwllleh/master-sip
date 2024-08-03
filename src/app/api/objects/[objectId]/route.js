import { NextResponse } from "next/server";
import fs from 'fs';
import path from 'path';

export async function GET(request, context) {

  const {params} = context;

  const imagesDir = path.join(process.cwd(), 'public', `assets/images/objects/${params.objectId}`);
  const imageFiles = fs.readdirSync(imagesDir);

  return NextResponse.json({
    images: imageFiles,
  })
}
