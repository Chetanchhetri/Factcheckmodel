import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: "AIzaSyB6sySH2YxPSzROFGCvRgXz6ZcgpiCfd8A" });

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: "Who is the Prime Minister of India",
  });
  console.log(response.text);
}

await main();