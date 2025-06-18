# 🎓 THPT 2024 Score Lookup - Admin Dashboard (React + TailAdmin)

This is the **admin dashboard frontend** for the THPT 2024 score lookup system, built using [TailAdmin React Template](https://tailadmin.com) with **ReactJS**, **Tailwind CSS**, and **TypeScript**. It connects to a Ruby on Rails API for managing and visualizing exam score data.

![TailAdmin React.js Dashboard Preview](./banner.png)

---

## ⚙️ Tech Stack

- React 19
- Tailwind CSS 4
- TypeScript
- Vite
- ApexCharts
- React Router
- TailAdmin UI Template

---

## 🚀 Getting Started

### 1. Prerequisites

Make sure you have the following installed:

- [Node.js (>=18)](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/) or `npm`
- [Git](https://git-scm.com/)

### 2. Clone the repository

```bash
git clone https://github.com/minhtri2908/Test-FE-Ruby.git
cd Test-FE-Ruby
```

### 3. Install dependencies

```bash
npm install
```

### 4. Setup environment variables

Create a `.env` file in the root directory and set the backend API base URL:

```
VITE_API_BASE_URL=http://localhost:3000/api
```

> ⚠️ Make sure this matches the URL of your running Ruby on Rails backend.

### 5. Run development server

```bash
npm run dev
```

Open in browser: [http://localhost:5173](http://localhost:5173)

---

## 📁 Project Structure

```
src/
├── api.ts              # API services (Axios, endpoints)
├── components/       # Reusable components (charts, tables, etc.)
├── pages/            # Dashboard pages
   ├── Lookup/LookupPage.tsx # Check score from registration number input
   ├── Report/StatisticsPage.tsx # Score classification (>=8, 6–8, 4–6, <4)
   ├── TopGroupA/Top10Page.tsx # Top 10 students in Group A (Math, Physics, Chemistry)
├── App.tsx           # Main app component
├── main.tsx          # Entry point
└── ...
.env
```

---

## 📊 Features

- Admin dashboard UI (based on TailAdmin)
- Check score from registration number input
- Score classification (>=8, 6–8, 4–6, <4)
- Statistics per subject with bar charts (using ApexCharts)
- Top 10 students in Group A (Math, Physics, Chemistry)
- Fully responsive design

---

## 📦 Build for production

```bash
npm run build
```

Then deploy the `dist/` folder to your preferred hosting platform (e.g., Vercel, Netlify).

---

## 📘 Credits

This project is based on the [TailAdmin React Template](https://tailadmin.com), a free admin dashboard UI built with React and Tailwind CSS.

---

