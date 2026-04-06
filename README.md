# Azizullah Samejo Portfolio

This repo contains a modern one-page portfolio (frontend) and an Express + MongoDB backend (API) to power contact submissions and project data.

## ✅ What’s included

- **Frontend**: Static HTML/CSS/JS (in the repo root)
- **Backend**: Express API (in `/server`)
- **MongoDB**: Stores contact form submissions and projects
- **Cloudinary (optional)**: Can be used for image uploads

---

## Local Setup (Backend)

1. **Install dependencies**

```bash
cd server
npm install
```

2. **Configure environment**

Copy `.env.example` to `.env` and fill in your MongoDB + Cloudinary values.

3. **Run the server**

```bash
npm run dev
```

The backend will run on `http://localhost:5000` by default.

---

## API Endpoints

- **POST** `/api/contact` — store contact form submissions
- **GET** `/api/projects` — return saved projects
- **POST** `/api/projects` — create a new project (use in admin tools)

---

## Frontend Integration

In `script.js`, tweak the contact form submission to POST to `/api/contact`.

---

## Deploying

### Vercel (recommended)
1. Create a new Vercel project linked to this GitHub repo.
2. Add environment variables (from `.env.example`) to the Vercel dashboard.
3. Set the root to `/server` if you want the backend to be the main deploy target, or deploy the static site separately and point API calls to the backend.

---

## Notes
- This backend is built in plain Express so you can expand it with authentication, admin routes, S3/Cloudinary uploads, etc.
