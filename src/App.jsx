import { useState } from "react";
import { generateCoverLetter } from "./utils/ai";

function App() {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [company, setCompany] = useState("");
  const [skills, setSkills] = useState("");
  const [letter, setLetter] = useState("");
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async (e) => {
    e.preventDefault();

    setLoading(true);
    setCopied(false);

    try {
      const result = await generateCoverLetter(name, role, company, skills);
      setLetter(result);
    } catch (error) {
      setLetter("Something went wrong. Please try again.");
      console.error(error);
    }

    setLoading(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(letter);
    setCopied(true);
  };

  return (
    <div className="container">
      <h1>AI Cover Letter Generator</h1>
      <p>Create professional cover letters in seconds</p>

      <form onSubmit={handleGenerate}>
        <input
          type="text"
          placeholder="Candidate Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Job Role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />

        <input
          type="text"
          placeholder="Company Name"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />

        <textarea
          placeholder="Key Skills"
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
        ></textarea>

        <button type="submit" disabled={loading}>
          {loading ? "Generating..." : "Generate Cover Letter"}
        </button>
      </form>

      {letter && (
        <div className="output-box">
          <h2>Generated Cover Letter</h2>
          <p>{letter}</p>

          <button onClick={copyToClipboard}>
            {copied ? "Copied!" : "Copy to Clipboard"}
          </button>
        </div>
      )}
    </div>
  );
}

export default App;