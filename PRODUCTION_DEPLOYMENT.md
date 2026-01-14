# 🚀 Production Deployment Guide
**Alexander's Cleaning Service - Environment Setup**

---

## ✅ GIT SAFETY VERIFICATION

### .gitignore Status
```
✅ VERIFIED SAFE - Lines 25-27:
   .env*.local    ← Catches .env.local and all env*.local files
   .env           ← Catches any .env file
```

**What This Protects:**
- ✅ `.env.local` (development) - NOT committed to git
- ✅ `.env.production.local` (if created) - NOT committed
- ✅ All sensitive API keys, passwords, database URLs

**Safe to Push:**
- ✅ `.env.example` (contains ONLY placeholders) - SAFE to commit
- ✅ Source code with no hardcoded secrets
- ✅ All other configuration files

### Pre-Push Checklist
```bash
# BEFORE pushing to GitHub:
git status  # Make sure NO .env.local appears in staged files
git diff    # Verify no secrets in diff

# Should show:
# On branch main
# nothing to commit, working tree clean
```

---

## 📋 PRODUCTION ENVIRONMENT VARIABLES

Copy each variable below into your production hosting provider (Vercel, Netlify, etc.).

### Group 1: Supabase (Database)

```
KEY:   NEXT_PUBLIC_SUPABASE_URL
TYPE:  Public (safe to expose)
VALUE: https://swsamydspmzmscfsrpqp.supabase.co
NOTES: Get from: Supabase Project Settings → API
```

```
KEY:   NEXT_PUBLIC_SUPABASE_ANON_KEY
TYPE:  Public (safe to expose - limited permissions)
VALUE: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN3c2FteWRzcG16bXNjZnNycHFwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY1MDgxMDUsImV4cCI6MjA4MjA4NDEwNX0.CQySJvQnlJLPgSQKJZj5d9kcq1BfWRqIUuRmz41n_EQ
NOTES: Public key with read-only access
       Get from: Supabase Project Settings → API
```

```
KEY:   SUPABASE_SERVICE_ROLE_KEY
TYPE:  🔐 SECRET (server-side only - DO NOT expose publicly)
VALUE: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN3c2FteWRzcG16bXNjZnNycHFwIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2NjUwODEwNSwiZXhwIjoyMDgyMDg0MTA1fQ.yWpL8h99aEYRzGA9LmlVCc7JUxSYP1NBjdNAlS7zgS8
NOTES: Used ONLY in server-side API routes (lib/supabase.ts)
       Used for admin operations (inserting quotes into database)
       Get from: Supabase Project Settings → API
⚠️  SECURITY: Only used in /api/quote route (server-side)
              Never exposed to client browser
```

### Group 2: Site Configuration

```
KEY:   NEXT_PUBLIC_SITE_URL
TYPE:  Public
VALUE: https://yoursite.com  (PRODUCTION domain)
NOTES: Change from http://localhost:3000
       Used for meta tags, canonical URLs, SEO
       Examples:
         - Development: http://localhost:3000
         - Staging: https://staging.yoursite.com
         - Production: https://windowcleaning.sbs (or your domain)
```

### Group 3: Email Notifications (Resend)

```
KEY:   RESEND_API_KEY
TYPE:  🔐 SECRET (server-side only)
VALUE: re_WbL8VAqJ_Eb9pS29V2YmRjgTBS3B8H1Bd
NOTES: Used in lib/email.ts to send quote notifications
       Get from: https://resend.com/api-keys
⚠️  SECURITY: Keep this SECRET
              Only used server-side
              If compromised, regenerate immediately
```

```
KEY:   NOTIFICATION_EMAIL
TYPE:  Public (can be exposed)
VALUE: zarnoffk@gmail.com  (or your email)
NOTES: Where quote notifications are sent
       Used in lib/email.ts as recipient
```

### Group 4: AI Services (Google Gemini)

```
KEY:   GOOGLE_GEMINI_API_KEY
TYPE:  🔐 SECRET (server-side only)
VALUE: AIzaSyAO5oLXD847iG_MkubuI9iVV53Fuhghi9I
NOTES: Used in lib/gemini-service.ts for AI property insights
       Get from: https://aistudio.google.com/app/apikey
       Pricing: Free tier available (with limits)
⚠️  SECURITY: Keep this SECRET
              Used on server to call Google API
              Implements request throttling to prevent abuse
```

### Group 5: Lead Notifications (Web3Forms)

```
KEY:   NEXT_PUBLIC_WEB3FORMS_KEY
TYPE:  Public (client-accessible, but limited quota)
VALUE: ab814df1-2bbb-4df6-ab0c-5acf8c34f6c4
NOTES: Used in lib/lead-notification.ts for email alerts
       Get from: https://web3forms.com/dashboard
       RECENTLY MOVED TO ENV VAR (was hardcoded - now fixed!)
⚠️  SECURITY: Can be public (limited to Web3Forms)
              Rate limited to prevent abuse
              If abuse occurs, regenerate key and update this value
```

---

## 🔐 SECURITY CLASSIFICATION

### Safe to Expose (NEXT_PUBLIC_ prefix)
```
✅ NEXT_PUBLIC_SUPABASE_URL
✅ NEXT_PUBLIC_SUPABASE_ANON_KEY (limited permissions)
✅ NEXT_PUBLIC_SITE_URL
✅ NEXT_PUBLIC_WEB3FORMS_KEY (rate limited)
```

Why: Limited permissions, rate-limited, or metadata only

### 🔐 MUST KEEP SECRET (No NEXT_PUBLIC_ prefix)
```
🔐 SUPABASE_SERVICE_ROLE_KEY (full database access)
🔐 RESEND_API_KEY (email service)
🔐 GOOGLE_GEMINI_API_KEY (AI service)
🔐 NOTIFICATION_EMAIL (can infer ownership)
```

Why: Full access, billing tied to these keys, email exposure risk

---

## 📝 DEPLOYMENT INSTRUCTIONS

### For Vercel (Recommended)

1. **Go to Project Settings**
   - https://vercel.com/dashboard → Select Project → Settings → Environment Variables

2. **Add Each Variable**
   ```
   For each of the 8 variables above:
   - Click "Add New"
   - Enter KEY name
   - Enter VALUE
   - Select which environments (Production, Preview, Development)
   ```

3. **Environment Settings:**
   ```
   NEXT_PUBLIC_SUPABASE_URL         → Production, Preview
   NEXT_PUBLIC_SUPABASE_ANON_KEY    → Production, Preview
   SUPABASE_SERVICE_ROLE_KEY        → Production, Preview
   NEXT_PUBLIC_SITE_URL             → Production, Preview
   RESEND_API_KEY                   → Production, Preview
   NOTIFICATION_EMAIL               → Production, Preview
   GOOGLE_GEMINI_API_KEY            → Production, Preview
   NEXT_PUBLIC_WEB3FORMS_KEY        → Production, Preview
   ```

4. **Redeploy**
   - Visit: https://vercel.com/dashboard → Select Project → Deployments
   - Click "Redeploy" on latest deployment
   - Or push code to trigger auto-deploy

### For Other Hosting (Netlify, Railway, etc.)

1. **Find Environment Variables Section**
   - Netlify: Site Settings → Build & Deploy → Environment
   - Railway: Project → Variables
   - Render: Environment

2. **Add Variables** (copy-paste from above)

3. **Redeploy** trigger

---

## ✅ POST-DEPLOYMENT VERIFICATION

### 1. Verify Secrets Are NOT Exposed

```bash
# Check git history (make sure keys aren't committed)
git log --all --full-history -- ".env.local"
# Should return: "No commits found"

# Verify .env.local not in repo
git ls-files | grep ".env"
# Should only show: .env.example
```

### 2. Test Quote Submission

1. Visit: https://yoursite.com/pricing
2. Fill out calculator form
3. Complete submission
4. ✅ Verify:
   - Quote notification email received
   - No errors in browser console
   - Data saved to Supabase database

### 3. Monitor First 24 Hours

- [ ] Check server logs for errors
- [ ] Verify email notifications arriving
- [ ] Monitor API rate limits (especially Gemini)
- [ ] Check for any security warnings

### 4. Test Each API Key

```bash
# Supabase (verify connection)
curl -X GET "https://swsamydspmzmscfsrpqp.supabase.co/auth/v1/health" \
  -H "apikey: YOUR_ANON_KEY"
# Should return: {"name":"PostgreSQL","version":"..."}

# Resend (check API)
curl -X GET "https://api.resend.com/emails" \
  -H "Authorization: Bearer YOUR_RESEND_KEY"
# Should return: email list

# Web3Forms (test submission)
# Verify via form submission (already in pricing calculator)
```

---

## 🚨 EMERGENCY: IF KEYS ARE COMPROMISED

### Immediate Actions

1. **STOP deployments** (pause auto-deploy if enabled)

2. **Identify which key was leaked:**
   - Supabase? Google Gemini? Resend? Web3Forms?

3. **Regenerate the key immediately**
   - Go to service dashboard
   - Regenerate/rotate the key
   - Update to new value

4. **Update Environment Variables**
   - Go to your hosting provider
   - Update the compromised key with new value
   - Redeploy

5. **Rotate Keys Best Practice**
   ```
   Supabase  → Settings → API → Regenerate Keys
   Resend    → API Keys → Create New → Delete Old
   Google    → https://aistudio.google.com → API Keys → Delete compromised key
   Web3Forms → Dashboard → Access Keys → Regenerate
   ```

6. **Monitor for Abuse**
   - Check API usage quotas
   - Monitor email logs (Resend)
   - Check database activity (Supabase)
   - Watch for spam (Web3Forms)

---

## 📊 ENVIRONMENT VARIABLE SUMMARY TABLE

| Variable | Type | Environment | Required | Secret | Used In |
|----------|------|-------------|----------|--------|---------|
| NEXT_PUBLIC_SUPABASE_URL | String | Prod | ✅ | ❌ | Client + Server |
| NEXT_PUBLIC_SUPABASE_ANON_KEY | JWT Token | Prod | ✅ | ❌ | Client |
| SUPABASE_SERVICE_ROLE_KEY | JWT Token | Prod | ✅ | 🔐 | Server API Only |
| NEXT_PUBLIC_SITE_URL | URL | Prod | ✅ | ❌ | Client + Meta |
| RESEND_API_KEY | String | Prod | ✅ | 🔐 | Server Email |
| NOTIFICATION_EMAIL | Email | Prod | ✅ | ❌ | Server Email |
| GOOGLE_GEMINI_API_KEY | String | Prod | ✅ | 🔐 | Server AI |
| NEXT_PUBLIC_WEB3FORMS_KEY | String | Prod | ✅ | ❌ | Client Forms |

---

## 🎯 CHECKLIST: READY FOR PRODUCTION

Before going live, verify:

```
[ ] All 8 environment variables added to hosting provider
[ ] .env.local NOT committed to git
[ ] .env.example file contains only placeholders
[ ] git status shows no .env files ready to commit
[ ] Build succeeds: npm run build
[ ] Quote form works end-to-end
[ ] Emails send to notification address
[ ] No API errors in production logs
[ ] SSL/HTTPS working on domain
[ ] Rate limiting active (5 requests/60sec)
[ ] CSRF protection enabled
[ ] No sensitive data in console logs
[ ] Load test completed
[ ] Monitoring/alerting configured
```

---

## 📞 Support

If you encounter issues:

1. **Supabase:** https://supabase.com/docs
2. **Resend:** https://resend.com/docs
3. **Google Gemini:** https://ai.google.dev/docs
4. **Web3Forms:** https://docs.web3forms.com

---

**Status:** ✅ Ready for production deployment
**Last Updated:** January 14, 2026
**Version:** 1.0
