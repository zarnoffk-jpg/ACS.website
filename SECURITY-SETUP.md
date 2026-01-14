# 🔒 Security Fixes - Setup Guide

## Critical Issues Fixed ✅

This update addresses **2 CRITICAL** and **4 HIGH** severity security vulnerabilities:

### ✅ Fixed Issues:
1. **CRIT-001**: Removed insecure file storage, replaced with encrypted Supabase database
2. **CRIT-002**: Added CSRF protection with origin validation
3. **HIGH-001**: Implemented Content Security Policy headers
4. **HIGH-002**: Removed PII from production logging
5. **HIGH-003**: Added rate limiting (5 requests per minute per IP)
6. **HIGH-004**: Implemented strong input validation with Zod

---

## 🚀 Setup Instructions

### Step 1: Create Supabase Project

1. Go to [https://app.supabase.com](https://app.supabase.com)
2. Click "New Project"
3. Choose your organization or create one
4. Fill in project details:
   - **Name**: `alexander-cleaning-service`
   - **Database Password**: (generate a strong password - save it!)
   - **Region**: Choose closest to your location
   - **Pricing Plan**: Free tier is fine to start

5. Wait 2-3 minutes for project to be created

### Step 2: Run Database Schema

1. In your Supabase project, click on **SQL Editor** in the left sidebar
2. Click "New Query"
3. Copy the contents of `supabase-schema.sql` from your project root
4. Paste into the SQL editor
5. Click **Run** (or press `Ctrl+Enter`)
6. You should see: "Success. No rows returned"

### Step 3: Get Your API Credentials

1. Click on **Project Settings** (gear icon) in the left sidebar
2. Click on **API** in the settings menu
3. You'll see three important values:

   **Project URL**:
   ```
   https://xxxxxxxxxxxxx.supabase.co
   ```

   **Anon (public) key**:
   ```
   eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS...
   ```

   **Service Role key** (click "Reveal" to see it):
   ```
   eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS...
   ```

### Step 4: Update Environment Variables

1. Open `.env.local` in your project root
2. Replace the placeholder values:

```env
# Replace these with your actual values from Step 3
NEXT_PUBLIC_SUPABASE_URL=https://xxxxxxxxxxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

# Keep this as-is for local development
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

3. **IMPORTANT**: Never commit `.env.local` to Git!
   - It's already in `.gitignore`
   - Check by running: `git status`
   - You should NOT see `.env.local` in the list

### Step 5: Test Locally

1. Restart your development server:
   ```bash
   # Stop the current server (Ctrl+C)
   npm run dev
   ```

2. Open [http://localhost:3000](http://localhost:3000)

3. Fill out the quote form and submit

4. Check Supabase to confirm it worked:
   - Go to **Table Editor** in Supabase
   - Click on `quotes` table
   - You should see your test submission!

### Step 6: Verify Security Features

Test that security is working:

#### Test Rate Limiting:
1. Submit the quote form 6 times rapidly
2. The 6th submission should return: "Too many requests. Please wait..."
3. ✅ Rate limiting works!

#### Test Input Validation:
1. Try entering "123" in the Name field
2. Submit the form
3. You should see: "Name contains invalid characters"
4. ✅ Validation works!

#### Test CSRF Protection:
1. Open browser console (F12)
2. Try: `fetch('/api/quote', {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({name: 'Test', contact: 'test@example.com', service: 'residential'})})`
3. From same origin: Should work ✅
4. From external site: Should return 403 Forbidden ✅

### Step 7: Deploy to Production

When deploying to Vercel/Netlify/etc:

1. Add environment variables in your hosting dashboard:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`
   - `NEXT_PUBLIC_SITE_URL` (e.g., `https://alexanderscleaning.com`)

2. Update `next.config.js` if needed:
   - Add your production domain to allowed origins

3. In Supabase, verify your Row Level Security policies are enabled:
   - Go to **Authentication** → **Policies**
   - Confirm policies are active for `quotes` table

---

## 📊 Accessing Quote Submissions

### View Quotes in Supabase:

1. Go to **Table Editor** → `quotes`
2. You'll see all submissions with:
   - Name, contact, service, message
   - IP address, user agent (for abuse prevention)
   - Timestamps

### Export Quotes:

1. In Table Editor, click the three dots (⋯) menu
2. Select "Download as CSV"
3. Open in Excel or Google Sheets

### Query via API (Advanced):

```typescript
import { supabaseAdmin } from '@/lib/supabase';

// Get all quotes
const { data } = await supabaseAdmin
  .from('quotes')
  .select('*')
  .order('created_at', { ascending: false });

// Get quotes from last 7 days
const { data } = await supabaseAdmin
  .from('quotes')
  .select('*')
  .gte('created_at', new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString());

// Get residential quotes only
const { data } = await supabaseAdmin
  .from('quotes')
  .select('*')
  .eq('service', 'residential');
```

---

## 🔐 Security Best Practices

### DO:
✅ Keep `.env.local` file secure and never commit it
✅ Use different API keys for development and production
✅ Regularly review quote submissions for spam/abuse
✅ Monitor rate limit logs for potential attacks
✅ Keep dependencies updated: `npm audit` and `npm update`

### DON'T:
❌ Share your SUPABASE_SERVICE_ROLE_KEY publicly
❌ Commit `.env.local` to Git
❌ Disable rate limiting or CSRF protection
❌ Remove input validation
❌ Log PII (names, emails, phones) to console in production

---

## 🚨 Old Files to Delete

These files are no longer needed and should be removed:

```bash
# Delete the old quotes directory with unencrypted data
rm -rf quotes/

# Or on Windows:
rmdir /s /q quotes
```

**IMPORTANT**: If there are customer quotes in the `quotes/` folder:
1. First migrate them to Supabase manually
2. Then delete the folder
3. Add to `.gitignore` to prevent recreation

---

## 📈 Next Steps (Optional Enhancements)

### Add Email Notifications:

1. Install Resend:
   ```bash
   npm install resend
   ```

2. Get API key from [https://resend.com](https://resend.com)

3. Add to `.env.local`:
   ```env
   RESEND_API_KEY=re_xxxxxxxxxxxxx
   NOTIFICATION_EMAIL=your@email.com
   ```

4. Uncomment email code in `app/api/quote/route.ts` (lines 117-124)

### Add Admin Dashboard:

Create a simple admin page to view quotes:
- `/admin/quotes` - Protected page to view all submissions
- Use Supabase Auth for login
- Display quotes in a table with filters

### Upgrade Rate Limiting (Production):

For multi-server deployments, replace in-memory rate limiter with Redis:

```bash
npm install @upstash/ratelimit @upstash/redis
```

---

## ✅ Verification Checklist

Before going to production, verify:

- [ ] Supabase project created
- [ ] Database schema run successfully
- [ ] `.env.local` configured with real credentials
- [ ] Test form submission works
- [ ] Quote appears in Supabase
- [ ] Rate limiting tested (6+ rapid submissions)
- [ ] Input validation tested (invalid names, contacts)
- [ ] Old `quotes/` folder deleted
- [ ] Environment variables added to hosting platform
- [ ] Production URL updated in `NEXT_PUBLIC_SITE_URL`

---

## 🆘 Troubleshooting

### "Service temporarily unavailable"
- Check `.env.local` has correct Supabase credentials
- Verify `SUPABASE_SERVICE_ROLE_KEY` is set (not just anon key)
- Restart dev server after changing `.env.local`

### "Failed to save quote request"
- Check Supabase project is active (not paused)
- Run `supabase-schema.sql` in SQL Editor
- Verify Row Level Security policies are enabled

### "Too many requests" immediately
- Clear your rate limit: Restart dev server
- Check if another tab/window is sending requests

### Quotes not appearing in Supabase
- Check **Table Editor** → `quotes` table
- Verify RLS policy allows inserts: `Allow public quote submissions`
- Check browser console for errors

---

## 📝 Summary

Your website now has:
- ✅ Secure database storage (Supabase)
- ✅ CSRF protection
- ✅ Rate limiting (5 req/min)
- ✅ Input validation (Zod)
- ✅ Content Security Policy
- ✅ No PII logging
- ✅ Enhanced accessibility

**Estimated setup time**: 10-15 minutes

Need help? Check the Supabase docs: https://supabase.com/docs
