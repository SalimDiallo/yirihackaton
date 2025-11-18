import { GoogleGenAI } from "@google/genai";

// Initialize the client with the API key from the environment
// IMPORTANT: In a real production app, you'd likely proxy this through a backend
// to avoid exposing the key, but for this demo/hackathon context, we use it directly.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const generateHackathonIdea = async (theme: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Tu es un mentor pour le hackathon "Hack Code" organisé à Fès, Maroc par YIRI TECH AFRICA et ASEGUIM FÈS.
      Génère une idée de projet innovante, utilisant l'IA ou les nouvelles technologies, réalisable en 48h sur le thème : "${theme}".
      
      Format de la réponse :
      **Nom du Projet**: [Nom Cool]
      **Pitch**: [Une phrase d'accroche]
      **Tech Stack**: [Liste de 3 technologies, incluant IA/Data]
      **Impact**: [Impact sur l'écosystème local ou technologique]
      
      Sois bref, inspirant et professionnel.`,
    });
    
    return response.text || "Erreur de génération. Réessayez.";
  } catch (error) {
    console.error("Error generating idea:", error);
    return "Impossible de contacter l'IA. Vérifiez votre connexion ou votre clé API.";
  }
};