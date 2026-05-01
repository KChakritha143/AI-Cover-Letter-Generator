# AI Cover Letter Generator

AI Cover Letter Generator is a React + Vite web application that helps users create professional, personalized cover letters in seconds. Users enter their name, job role, company name, and key skills, and the app generates a polished cover letter instantly using AI.

## Features

- Generate personalized cover letters instantly
- Clean and responsive user interface
- AI-powered content generation using Google Gemini API
- Secure API key handling with `.env`
- Prompt engineering for dynamic and relevant output
- Loading state while generating content
- Automatic fallback template when API is unavailable
- Copy to Clipboard functionality

## Tech Stack

- React
- Vite
- JavaScript
- Google Gemini API
- CSS

## How It Works

1. Enter candidate name
2. Enter job role
3. Enter company name
4. Enter key skills
5. Click **Generate Cover Letter**
6. Copy the generated letter instantly

The app first tries to generate a cover letter using Gemini AI.  
If the API is unavailable or quota is exceeded, it automatically switches to a fallback template generator.

## Environment Variables

Create a `.env` file in the root folder and add:

VITE_GEMINI_API_KEY=your_api_key_here

## Installation

git clone https://github.com/KChakritha143/AI-Cover-Letter-Generator.git
cd AI-Cover-Letter-Generator
npm install
npm run dev

## Project Structure

```
AI-Cover-Letter-Generator/
│── public/
│── src/
│   ├── assets/
│   ├── utils/
│   │   └── ai.js
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│── .env
│── .gitignore
│── package.json
│── vite.config.js
```
## Learning Outcomes

This project demonstrates:

- AI integration in frontend apps
- Prompt engineering basics
- Secure API key handling
- Error handling with fallback systems
- Building real-world AI wrapper applications

## Future Improvements

- Resume upload support
- Export cover letter as PDF
- Multiple writing tone options
- Save generated cover letters
- Support for OpenAI API

## Preview

<img width="1721" height="1072" alt="Screenshot 2026-05-01 225153" src="https://github.com/user-attachments/assets/755b5975-943d-4dc0-b220-dfd11897774c" />
##
<img width="1030" height="792" alt="Screenshot 2026-05-01 225655" src="https://github.com/user-attachments/assets/ede848b9-e170-4f46-be07-c4f081a11644" />
##
<img width="1770" height="1031" alt="Screenshot 2026-05-01 225549" src="https://github.com/user-attachments/assets/2d9fd910-2db3-4d03-9846-b1f26a396fe4" />

## Live URL

https://69f4e3234441359df9794103--aicover-lettergenerator.netlify.app/
