import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

function fallbackCoverLetter(name, role, company, skills) {
  return `Dear Hiring Manager,

I am excited to apply for the ${role} position at ${company}. With skills in ${skills}, I am eager to begin my professional journey by contributing to your team and building practical, efficient solutions.

I have developed a strong interest in software development and problem-solving, and I am confident that my technical foundation, willingness to learn, and dedication make me a strong candidate for this role. I am especially interested in the opportunity to grow my skills while contributing meaningfully to ${company}.

I would welcome the opportunity to contribute to your team and further discuss how I can add value to this role.

Sincerely,
${name}`;
}

export async function generateCoverLetter(name, role, company, skills) {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    const prompt = `
Write a professional cover letter using ONLY the details provided below.

Candidate Name: ${name}
Job Role: ${role}
Company Name: ${company}
Skills: ${skills}

Strict Instructions:
- Do NOT add placeholders like [Your Address], [Date], [Phone Number], [Email]
- Do NOT add fake details
- Do NOT invent experience
- Use only the provided name, role, company, and skills
- Write only the cover letter body
- Start directly with: Dear Hiring Manager,
- End with: Sincerely, ${name}
- Keep it professional, concise, and personalized
- Highlight the provided skills naturally
- Make it sound like a real fresher/job applicant
`;

    const result = await model.generateContent(prompt);
    return result.response.text();
  } catch (error) {
    console.warn("Gemini unavailable, using fallback mode:", error.message);
    return fallbackCoverLetter(name, role, company, skills);
  }
}