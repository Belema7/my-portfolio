# Belema Girma - Personal Portfolio

A modern, responsive personal portfolio website built with Next.js, tailored to showcase projects, skills, and experience for a Frontend Software Engineer.

## 🚀 Features

- **Modern Tech Stack**: Built with Next.js 16 (App Router), React 19, and TypeScript.
- **Styling**: Tailored design featuring a sleek light/dark mode aesthetic, built using Tailwind CSS v4 and `next-themes`.
- **UI Components**: Integrating Radix UI / Base UI for accessible, high-quality components.
- **Dynamic Contact Form**: Integrated with EmailJS for direct messaging without a backend server.
- **Responsive Layout**: Designed to look great on desktop, tablet, and mobile devices.

## 💻 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Components**: [shadcn/ui](https://ui.shadcn.com/) / Base UI
- **Icons**: [Lucide React](https://lucide.dev/)
- **Email Service**: [EmailJS](https://www.emailjs.com/)

## 🛠️ Getting Started

### Prerequisites

Ensure you have Node.js (version 20 or higher) installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd belema-portfolio
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Set up the environment variables. Create a `.env.local` file in the root directory and add your EmailJS credentials:
   ```env
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the portfolio.

## 📁 Project Structure

- `/app`: Next.js 16 App Router configuration and global layouts (`layout.tsx`, `page.tsx`).
- `/components`: Reusable UI components (like buttons, input fields, etc.).
- `/sections`: Main page sections (Hero, About, Skills, Projects, Contact).
- `/data`: Static data files containing personal information, project lists, and skills structure (`personal.ts`).
- `/lib`: Helper functions and utilities (e.g., `email-service.ts`).

## 🖌️ Theme Customization

The project uses `next-themes` and relies heavily on CSS variables for styling. The default theme is currently set to `light`. It features a custom "chocolate/neutral" palette replacing traditional blue accents. You can find key style definitions and CSS variables in `/app/globals.css`.

## 🤝 Contact / Connect

- **GitHub**: [github.com/belema7](https://github.com/belema7)
- **LinkedIn**: [linkedin.com/in/belemagirma](https://linkedin.com/in/belemagirma)
- **X / Twitter**: [x.com/BelemaGr](https://x.com/BelemaGr)
- **Telegram**: [t.me/BelemaBuilds](https://t.me/BelemaBuilds)

