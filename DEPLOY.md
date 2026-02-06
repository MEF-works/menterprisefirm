# Deploy to Vercel + GitHub

## 1. Push to GitHub

From the project root:

```bash
git init
git add .
git commit -m "Initial commit: MEnterprise Firm Inc site"
git branch -M main
git remote add origin https://github.com/MEF-works/menterprisefirm.git
git push -u origin main
```

If the repo already has content (e.g. a README), pull first then push:

```bash
git remote add origin https://github.com/MEF-works/menterprisefirm.git
git pull origin main --allow-unrelated-histories
git push -u origin main
```

## 2. Connect to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in (GitHub).
2. **Add New Project** → Import `MEF-works/menterprisefirm`.
3. **Root Directory:** click **Edit** and set to `app` (the Vite app lives in `app/`).
4. Leave **Framework Preset** as Vite and **Build Command** as `npm run build`. Output is `dist`.
5. Click **Deploy**.

Vercel will build from `app/`, run `npm run build`, and serve `app/dist`. Future pushes to `main` will trigger automatic deploys.

## 3. Custom domain (optional)

In the Vercel project → **Settings** → **Domains**, add your domain and follow the DNS instructions.
