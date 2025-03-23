# MailWizard Website

The **MailWizard Website** is the official landing page for the **MailWizard Chrome Extension**. It provides essential details about the extension, including documentation, tutorials, and user feedback. This project is built using **Next.js**, **TypeScript**, and **Tailwind CSS**, with a backend powered by **Next.js API routes** and authentication handled via **NextAuth**. User feedback is stored in a **PostgreSQL database**.

## 🚀 Features

### 🌐 Main Website

- A modern, sleek landing page for the MailWizard Chrome Extension.
- Animated, scroll-triggered design with a purplish theme inspired by mailing aesthetics.

### 📄 Documentation Page

- Provides detailed instructions on installing, setting up, and using the extension.
- Includes API setup and configuration details.

### 🎥 Tutorial Section

- Embedded YouTube video tutorial explaining how to use MailWizard.
- Easily accessible for first-time users.

### ⭐ Feedback System

- Users can submit feedback that gets stored in a **PostgreSQL database**.
- Feedback is dynamically displayed on the main page.

### 🔐 Authentication (NextAuth)

- Secure user authentication using **NextAuth.js**.
- Supports multiple authentication providers.

### ⚡ Backend API (Next.js API Routes)

- Handles feedback submission and retrieval.
- Ensures seamless integration between the frontend and the database.

## 🛠️ Tech Stack

- **Frontend:** Next.js, TypeScript, Tailwind CSS
- **Backend:** Next.js API Routes
- **Database:** PostgreSQL
- **Authentication:** NextAuth.js
- **Hosting:** Vercel

## 📦 Installation & Setup

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/mailwizard-website.git
   cd mailwizard-website
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Set up environment variables:**
   Create a `.env.local` file and add the necessary variables:
   ```sh
   NEXTAUTH_URL=http://localhost:3000
   DATABASE_URL=your_postgresql_database_url
   NEXTAUTH_SECRET=your_secret_key
   ```
4. **Run the development server:**
   ```sh
   npm run dev
   ```
   The website will be available at `http://localhost:3000`.

## 📜 License

This project is open-source and available under the **MIT License**.
