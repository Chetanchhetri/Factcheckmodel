import { GoogleGenAI }  from "@google/genai";


// let ques = document.querySelector("#but");
// but.addEventListener("click", () => {
//     console.log("Button clicked!");});



const ai = new GoogleGenAI({ apiKey: "AIzaSyBmT9ATUCeYc2x11laPQ3xm-cCigTLHiLc" });

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: "Jahangir was a secular ruler"+"check the fact if not true correct it if possible",
  });
  console.log(response.text);
}

await main();