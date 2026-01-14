# 🚀 VERCEL DEPLOYMENT - STEP-BY-STEP GUIDE

**Alexander's Cleaning Service - Production Deployment**
**Status:** Code ready, environment variables prepared, ready to deploy

---

## ⚡ QUICK START (5 minutes)

### Step 1: Go to Vercel Dashboard
1. Visit: https://vercel.com/dashboard
2. Sign in with GitHub account
3. Click **"Add New"** → **"Project"**

### Step 2: Import GitHub Repository
1. Search for: `ACS.website` (or `zarnoffk-jpg/ACS.website`)
2. Click **"Import"**
3. Click **"Continue"** (default settings are fine)

### Step 3: Add Environment Variables
**BEFORE CLICKING DEPLOY**, scroll down to **"Environment Variables"**

Add all 8 variables below (copy from sections below):

1. `NEXT_PUBLIC_SUPABASE_URL`
2. `NEXT_PUBLIC_SUPABASE_ANON_KEY`
3. `SUPABASE_SERVICE_ROLE_KEY`
4. `NEXT_PUBLIC_SITE_URL`
5. `RESEND_API_KEY`
6. `NOTIFICATION_EMAIL`
7. `GOOGLE_GEMINI_API_KEY`
8. `NEXT_PUBLIC_WEB3FORMS_KEY`

### Step 4: Deploy
Click **"Deploy"** button

✅ Deployment will start automatically
✅ Takes ~2-3 minutes
✅ You'll get a production URL

---

## 📋 ENVIRONMENT VARIABLES - COPY THESE

### VAR #1: Supabase URL
```
Name:  NEXT_PUBLIC_SUPABASE_URL
Value: https://swsamydspmzmscfsrpqp.supabase.co
Env:   Production
```

### VAR #2: Supabase Anon Key
```
Name:  NEXT_PUBLIC_SUPABASE_ANON_KEY
Value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN3c2FteWRzcG16bXNjZnNycHFwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY1MDgxMDUsImV4cCI6MjA4MjA4NDEwNX0.CQySJvQnlJLPgSQKJZj5d9kcq1BfWRqIUuRmz41n_EQ
Env:   Production
```

### VAR #3: Supabase Service Role Key ⚠️
```
Name:  SUPABASE_SERVICE_ROLE_KEY
Value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN3c2FteWRzcG16bXNjZnNycHFwIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2NjUwODEwNSwiZXhwIjoyMDgyMDg0MTA1fQ.yWpL8h99aEYRzGA9LmlVCc7JUxSYP1NBjdNAlS7zgS8
Env:   Production (server-side only)
```

### VAR #4: Site URL
```
Name:  NEXT_PUBLIC_SITE_URL
Value: https://yoursite.com
Env:   Production

NOTE: Replace "yoursite.com" with your actual Vercel domain
      OR your custom domain when you set it up
      Default Vercel domain: acs-website-*.vercel.app
```

### VAR #5: Resend API Key ⚠️
```
Name:  RESEND_API_KEY
Value: re_WbL8VAqJ_Eb9pS29V2YmRjgTBS3B8H1Bd
Env:   Production
```

### VAR #6: Notification Email
```
Name:  NOTIFICATION_EMAIL
Value: zarnoffk@gmail.com
Env:   Production

NOTE: Change to your actual business email
```

### VAR #7: Google Gemini API Key ⚠️
```
Name:  GOOGLE_GEMINI_API_KEY
Value: AIzaSyAO5oLXD847iG_MkubuI9iVV53Fuhghi9I
Env:   Production
```

### VAR #8: Web3Forms Access Key
```
Name:  NEXT_PUBLIC_WEB3FORMS_KEY
Value: ab814df1-2bbb-4df6-ab0c-5acf8c34f6c4
Env:   Production
```

---

## 🎯 DETAILED VERCEL STEPS

### Option A: Via Vercel UI (Easiest)

**Step 1: Create New Project**
```
1. Go: https://vercel.com/dashboard
2. Click: "Add New" → "Project"
3. Select: "Continue with GitHub"
4. Search: "ACS.website"
5. Click: "Import"
```

**Step 2: Configure Project**
```
Framework Preset:      Next.js ✓ (auto-detected)
Root Directory:        ./ (default)
Build Command:         (keep default)
Output Directory:      (keep default)
Install Command:       (keep default)
```

**Step 3: Add Environment Variables**
```
1. Scroll to "Environment Variables" section
2. For each of the 8 variables above:
   a. Click "Add New"
   b. Paste Name (e.g., "NEXT_PUBLIC_SUPABASE_URL")
   c. Paste Value
   d. Set Env to "Production"
   e. Click "Add"
3. Repeat for all 8 variables
```

**Step 4: Deploy**
```
1. Click "Deploy" button
2. Wait for build to complete (~2-3 min)
3. Get your live URL
```

---

### Option B: Via Vercel CLI (If you prefer command line)

**Step 1: Login to Vercel**
```bash
vercel login
# Opens browser to authenticate
```

**Step 2: Link Project**
```bash
cd C:\Users\zarny\alexander-window-cleaning
vercel link
# Follow prompts to select/create project
```

**Step 3: Add Environment Variables**
```bash
# Run one command for each variable:
vercel env add NEXT_PUBLIC_SUPABASE_URL
vercel env add NEXT_PUBLIC_SUPABASE_ANON_KEY
vercel env add SUPABASE_SERVICE_ROLE_KEY
vercel env add NEXT_PUBLIC_SITE_URL
vercel env add RESEND_API_KEY
vercel env add NOTIFICATION_EMAIL
vercel env add GOOGLE_GEMINI_API_KEY
vercel env add NEXT_PUBLIC_WEB3FORMS_KEY
```

**Step 4: Deploy**
```bash
vercel --prod
# Deploys to production
```

---

## ✅ POST-DEPLOYMENT CHECKLIST

After deployment completes:

```
[ ] Visit your Vercel URL in browser
[ ] Homepage loads correctly
[ ] Navigation works
[ ] /pricing page loads (main calculator page)
[ ] Calculator steps work (ZIP → Condition → Contact → Results)
[ ] Health score displays and varies with inputs
[ ] "LET'S DO THIS" button opens contact modal
[ ] Call button works (tel: link)
[ ] Text button works (SMS link)
[ ] Submit quote and verify email sent
[ ] Check email notifications arrive within 5 seconds
[ ] Verify quote saved to Supabase
```

---

## 🔍 VERIFY DEPLOYMENT

### Check Build Status
1. Go to Vercel project
2. Click "Deployments" tab
3. Look for your latest deployment
4. Status should show ✅ (green checkmark)

### Check Environment Variables
1. Go to Vercel project
2. Click "Settings" tab
3. Click "Environment Variables"
4. Verify all 8 variables are listed
5. Values should be hidden (security)

### Test Live Site
```
1. Click the "Visit" button or use your URL
2. Test all calculator steps
3. Test form submission
4. Monitor browser console for errors
```

---

## 📊 DEPLOYMENT DETAILS

**Repository:** https://github.com/zarnoffk-jpg/ACS.website
**Branch:** main
**Framework:** Next.js 16.1.1
**Runtime:** Node.js
**Package Manager:** npm

**Build Settings:**
- Build Command: `npm run build`
- Output Directory: `.next`
- Install Command: `npm install`

---

## 🆘 TROUBLESHOOTING

### Build Fails
```
Check:
1. GitHub repo is connected correctly
2. All environment variables are added
3. Environment variables don't have extra spaces
4. Vercel has access to GitHub repo
```

### White Screen of Death (WSOD)
```
Check:
1. All 8 environment variables are set
2. Environment variables have correct values
3. Browser console for errors (F12 → Console)
4. Vercel logs for build errors
```

### Environment Variables Not Working
```
Check:
1. Variable names spelled correctly (case-sensitive)
2. Values pasted completely (no truncation)
3. Redeploy after adding variables
4. Check "Production" environment selected
```

### Emails Not Sending
```
Check:
1. RESEND_API_KEY is correct
2. NOTIFICATION_EMAIL is set
3. NEXT_PUBLIC_WEB3FORMS_KEY is correct
4. Check Resend dashboard for delivery
5. Check Web3Forms dashboard for submissions
```

### Database Connection Fails
```
Check:
1. SUPABASE_SERVICE_ROLE_KEY is correct
2. NEXT_PUBLIC_SUPABASE_URL is correct
3. Network tab shows successful requests
4. Supabase dashboard shows new records
```

---

## 📞 HELPFUL LINKS

- **Vercel Dashboard:** https://vercel.com/dashboard
- **Vercel Docs:** https://vercel.com/docs
- **GitHub Integration:** https://vercel.com/docs/git
- **Environment Variables:** https://vercel.com/docs/environment-variables

---

## ⏱️ TIMELINE

```
5 min    → Complete Vercel UI steps
2-3 min  → Build & deploy
1 min    → Verify deployment
1 min    → Test live site
─────────
~10 min  → TOTAL TIME TO LIVE
```

---

## 🎉 SUCCESS

Once deployment completes:

✅ You'll have a live URL
✅ All 8 environment variables configured
✅ Calculator fully functional
✅ Lead notifications working
✅ Database connected
✅ Emails sending

**Your site is now LIVE!** 🚀

---

**Questions?** Check PRODUCTION_DEPLOYMENT.md for more details.
**Need help?** See troubleshooting section above.

---

Generated: January 14, 2026
Ready to Deploy: ✅ YES
