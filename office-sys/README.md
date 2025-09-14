# Full Website Project (Starter)
This project is a working starter for your management system using **React (Vite)** frontend and **Supabase** for auth & database.
It includes:
- Login with Supabase Auth.
- Protected routes and role-based UI gating (client-side checks).
- CRUD pages for: Tasks, Clients, Offices (Tax/VAT/Commercial), Priorities, Users meta & Roles.
- Reports page with filters and PDF export (basic client-side generation).
- Full SQL schema in `sql/schema.sql` to run in Supabase SQL editor.

## Quick setup
1. Create a Supabase project.
2. In the Supabase SQL editor, run `sql/schema.sql` to create tables.
3. Create an "anon" key in Project Settings → API.
4. Copy `.env.example` -> `.env.local` and fill the two variables.
5. Install and run locally:
   ```bash
   npm install
   npm run dev
   ```
6. For deployment: push to GitHub and connect repo to Netlify. Set the same env vars on Netlify.
