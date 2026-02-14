
import { GoogleGenAI } from "@google/genai";

export const getSustainabilityAdvice = async (userMessage: string) => {
  // Initialize GoogleGenAI instance inside the function to ensure the latest API key is used for the request
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  try {
    const response = await ai.models.generateContent({
      // Use gemini-3-pro-preview for domain-specific tasks involving material science and global logistics reasoning
      model: 'gemini-3-pro-preview',
      contents: userMessage,
      config: {
        systemInstruction: "You are the AI Sustainability Consultant for '360 Global Plastic Solutions', based in Somerton, Melbourne. You are an expert in polymers (HDPE, LDPE, PP, rPET), global recycling markets, and circular economy strategies. Provide professional, encouraging, and data-driven advice about plastic waste reduction and recycling efficiency. Keep responses concise and focused on industrial sustainability.",
        temperature: 0.7,
        topP: 0.8,
      },
    });
    // Directly access the .text property from GenerateContentResponse
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm experiencing a high volume of requests at our Somerton hub. Please try again shortly.";
  }
};
