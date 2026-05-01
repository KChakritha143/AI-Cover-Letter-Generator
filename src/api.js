import axios from "axios";

export const generateCoverLetterAI = async (form) => {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

  const prompt = `
Write a professional cover letter.

Name: ${form.name}
Role: ${form.role}
Company: ${form.company}
Skills: ${form.skills}

Make it 3 paragraphs, formal tone.
`;

  const res = await axios.post(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`,
    {
      contents: [
        {
          parts: [{ text: prompt }]
        }
      ]
    }
  );

  return res.data.candidates[0].content.parts[0].text;
};