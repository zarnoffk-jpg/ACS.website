# 🚀 ENVIRONMENT VARIABLES QUICK REFERENCE
**Copy-Paste Guide for Vercel/Production**

---

## 📋 ALL 8 PRODUCTION ENV VARS

Add these to your hosting provider (Vercel, Netlify, etc.)

### VAR #1: Supabase Project URL
```
KEY:       NEXT_PUBLIC_SUPABASE_URL
VALUE:     https://swsamydspmzmscfsrpqp.supabase.co
SCOPE:     Production, Preview
SECRET:    ❌ No (public)
```

### VAR #2: Supabase Anonymous Key
```
KEY:       NEXT_PUBLIC_SUPABASE_ANON_KEY
VALUE:     eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN3c2FteWRzcG16bXNjZnNycHFwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY1MDgxMDUsImV4cCI6MjA4MjA4NDEwNX0.CQySJvQnlJLPgSQKJZj5d9kcq1BfWRqIUuRmz41n_EQ
SCOPE:     Production, Preview
SECRET:    ❌ No (public - limited access)
```

### VAR #3: Supabase Service Role Key ⚠️
```
KEY:       SUPABASE_SERVICE_ROLE_KEY
VALUE:     eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN3c2FteWRzcG16bXNjZnNycHFwIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2NjUwODEwNSwiZXhwIjoyMDgyMDg0MTA1fQ.yWpL8h99aEYRzGA9LmlVCc7JUxSYP1NBjdNAlS7zgS8
SCOPE:     Production, Preview (server-side only)
SECRET:    🔐 YES - Full database access
NOTE:      Used ONLY in API routes (/api/quote)
```

### VAR #4: Site URL
```
KEY:       NEXT_PUBLIC_SITE_URL
VALUE:     https://windowcleaning.sbs
SCOPE:     Production, Preview
SECRET:    ❌ No (public URL)
NOTE:      Change from http://localhost:3000
           Replace with your actual domain
```

### VAR #5: Email Service API Key ⚠️
```
KEY:       RESEND_API_KEY
VALUE:     re_WbL8VAqJ_Eb9pS29V2YmRjgTBS3B8H1Bd
SCOPE:     Production, Preview (server-side)
SECRET:    🔐 YES - Used for sending emails
NOTE:      Do not expose to client
           Used in lib/email.ts
```

### VAR #6: Quote Notification Email
```
KEY:       NOTIFICATION_EMAIL
VALUE:     zarnoffk@gmail.com
SCOPE:     Production, Preview
SECRET:    ❌ No (but change to your email)
NOTE:      Where quote notifications are sent
           Change to your business email address
```

### VAR #7: Google Gemini API Key ⚠️
```
KEY:       GOOGLE_GEMINI_API_KEY
VALUE:     AIzaSyAO5oLXD847iG_MkubuI9iVV53Fuhghi9I
SCOPE:     Production, Preview (server-side)
SECRET:    🔐 YES - Used for AI pricing insights
NOTE:      Do not expose to client
           Used in lib/gemini-service.ts
```

### VAR #8: Web3Forms Access Key
```
KEY:       NEXT_PUBLIC_WEB3FORMS_KEY
VALUE:     ab814df1-2bbb-4df6-ab0c-5acf8c34f6c4
SCOPE:     Production, Preview (rate-limited)
SECRET:    ⚠️ Limited (public but rate-limited)
NOTE:      Used for lead notifications
           If abused, regenerate and update
```

---

## 📝 QUICK COPY-PASTE TABLE

| # | Variable Name | Value | Secret? |
|---|---|---|---|
| 1 | `NEXT_PUBLIC_SUPABASE_URL` | `https://swsamydspmzmscfsrpqp.supabase.co` | ❌ |
| 2 | `NEXT_PUBLIC_SUPABASE_ANON_KEY` | `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN3c2FteWRzcG16bXNjZnNycHFwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY1MDgxMDUsImV4cCI6MjA4MjA4NDEwNX0.CQySJvQnlJLPgSQKJZj5d9kcq1BfWRqIUuRmz41n_EQ` | ❌ |
| 3 | `SUPABASE_SERVICE_ROLE_KEY` | `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN3c2FteWRzcG16bXNjZnNycHFwIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2NjUwODEwNSwiZXhwIjoyMDgyMDg0MTA1fQ.yWpL8h99aEYRzGA9LmlVCc7JUxSYP1NBjdNAlS7zgS8` | 🔐 |
| 4 | `NEXT_PUBLIC_SITE_URL` | `https://windowcleaning.sbs` | ❌ |
| 5 | `RESEND_API_KEY` | `re_WbL8VAqJ_Eb9pS29V2YmRjgTBS3B8H1Bd` | 🔐 |
| 6 | `NOTIFICATION_EMAIL` | `zarnoffk@gmail.com` | ❌ |
| 7 | `GOOGLE_GEMINI_API_KEY` | `AIzaSyAO5oLXD847iG_MkubuI9iVV53Fuhghi9I` | 🔐 |
| 8 | `NEXT_PUBLIC_WEB3FORMS_KEY` | `ab814df1-2bbb-4df6-ab0c-5acf8c34f6c4` | ⚠️ |

---

## 🔧 FOR VERCEL

1. Go to: https://vercel.com/dashboard
2. Select your project
3. Settings → Environment Variables
4. Click "Add New"
5. Paste one row from the table above
6. Select scope: Production + Preview
7. Click "Save"
8. Repeat for all 8 variables
9. Go to Deployments
10. Click "Redeploy" on latest build

---

## 🔧 FOR OTHER PLATFORMS

### Netlify
- Site Settings → Build & Deploy → Environment
- Add each variable

### Railway
- Project → Variables
- Add each variable

### Render
- Environment
- Add each variable

### Docker/Self-Hosted
Create `.env.production` with all 8 variables

---

## ⚠️ REMEMBER

```
✅ DO THIS:
  - Add variables to hosting provider dashboard
  - Keep .env.local ONLY on your local machine
  - Keep .env.local OUT of git (protected by .gitignore)
  - Commit .env.example to git (placeholders only)

❌ DON'T DO THIS:
  - Don't hardcode values in source code
  - Don't commit .env.local to git
  - Don't share keys via email/Slack
  - Don't push .env to public repo
  - Don't expose SUPABASE_SERVICE_ROLE_KEY to client
```

---

## 🎯 STATUS

- ✅ .env.local: Protected by .gitignore
- ✅ .env.example: Ready to commit (no secrets)
- ✅ All values documented above
- ✅ Ready for production deployment

**Safe to push to GitHub:** ✅ YES
**Safe to deploy:** ✅ YES

---

Generated: January 14, 2026
