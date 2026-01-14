# 🚀 ONE-CLICK VERCEL DEPLOYMENT GUIDE

Your project is **100% ready to deploy**. Follow these steps to get live in **2 minutes**:

## Quick Setup (Choose One)

### Option A: Deploy via GitHub (Easiest - Recommended)

1. **Push your code to GitHub**
   ```bash
   cd "C:\Users\zarny\alexander-window-cleaning"
   git remote add origin https://github.com/YOUR_USERNAME/alexander-window-cleaning.git
   git branch -M main
   git push -u origin main
   ```

2. **Go to https://vercel.com/new**

3. **Select "Import Git Repository"** and authorize GitHub

4. **Find and click on** `alexander-window-cleaning` repository

5. **Environment Variables:**
   Click "Add Environment Variable" and enter:
   ```
   NEXT_PUBLIC_SUPABASE_URL: https://swsamydspmzmscfsrpqp.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN3c2FteWRzcG16bXNjZnNycHFwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY1MDgxMDUsImV4cCI6MjA4MjA4NDEwNX0.CQySJvQnlJLPgSQKJZj5d9kcq1BfWRqIUuRmz41n_EQ
   SUPABASE_SERVICE_ROLE_KEY: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN3c2FteWRzcG16bXNjZnNycHFwIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2NjUwODEwNSwiZXhwIjoyMDgyMDg0MTA1fQ.yWpL8h99aEYRzGA9LmlVCc7JUxSYP1NBjdNAlS7zgS8
   NEXT_PUBLIC_SITE_URL: https://windowcleaning.sbs
   RESEND_API_KEY: re_WbL8VAqJ_Eb9pS29V2YmRjgTBS3B8H1Bd
   NOTIFICATION_EMAIL: zarnoffk@gmail.com
   ```

6. **Click "Deploy"** - Done! ✅

---

### Option B: Deploy via Vercel CLI (Local Authentication)

1. **Log in to Vercel**
   ```bash
   vercel login
   ```
   This will open a browser window for authentication

2. **Deploy to production**
   ```bash
   cd "C:\Users\zarny\alexander-window-cleaning"
   vercel deploy --prod --yes
   ```

---

### Option C: Connect Existing Vercel Account

If you already have a Vercel account:

1. **Visit**: https://vercel.com/teams/YOUR_TEAM/settings/tokens

2. **Create a new token** (give it any name)

3. **Copy the token** and set it as an environment variable:
   ```bash
   $env:VERCEL_TOKEN = "your_token_here"
   ```

4. **Deploy**:
   ```bash
   vercel deploy --prod --yes
   ```

---

## What Happens Next

After deployment:

✅ Your site will be live at: `https://alexander-window-cleaning.vercel.app`

✅ You can set up a custom domain (`windowcleaning.sbs`) in Vercel dashboard

✅ Environment variables will be automatically configured

✅ Quote form will start capturing leads

✅ Email notifications will go to: zarnoffk@gmail.com

✅ Analytics and logs available in Vercel dashboard

---

## Custom Domain Setup (After Deployment)

1. Go to Vercel Dashboard → Project Settings → Domains
2. Add domain: `windowcleaning.sbs`
3. Follow DNS configuration instructions
4. Update your domain registrar DNS settings
5. SSL certificate auto-provisioned by Vercel

---

## Post-Deployment Verification

After you see "Deployed Successfully" message:

1. **Visit your live site:**
   - https://alexander-window-cleaning.vercel.app (or your custom domain)

2. **Test the form:**
   - Fill out a quote request
   - Check email (zarnoffk@gmail.com) for notification
   - Verify it appears in Supabase database

3. **Check all pages load:**
   - Homepage
   - All 5 service pages
   - All 13 location pages
   - About page

4. **Verify SEO:**
   - https://your-domain.com/sitemap.xml
   - https://your-domain.com/robots.txt

---

## Need Help?

- **Deployment failed?** Check Vercel Deployments tab for error logs
- **Form not working?** Verify environment variables in Project Settings
- **Emails not sending?** Check Resend API key and notification email
- **Domain issues?** Check DNS records in domain registrar

---

**Status**: ✅ Ready for Production
**Estimated Time**: 2-3 minutes
**Complexity**: Easy

**Let's go! 🚀**
