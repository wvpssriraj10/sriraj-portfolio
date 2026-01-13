# Deployment Checklist

## ✅ Steps to Verify Changes on Vercel

### 1. Check Vercel Deployment Status
1. Go to https://vercel.com/dashboard
2. Find your `sriraj-portfolio` project
3. Check the latest deployment:
   - Should show commit `4477798` or later
   - Status should be "Ready" (green)
   - If "Building" or "Error", check the logs

### 2. Force Browser Cache Clear
**Chrome/Edge:**
- Press `Ctrl + Shift + Delete` (Windows) or `Cmd + Shift + Delete` (Mac)
- Select "Cached images and files"
- Time range: "All time"
- Click "Clear data"

**Or Hard Refresh:**
- Windows: `Ctrl + F5` or `Ctrl + Shift + R`
- Mac: `Cmd + Shift + R`

### 3. Verify Build Settings in Vercel Dashboard
Go to Project Settings → General → Build & Development Settings:

- **Framework Preset:** Vite
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Install Command:** `npm install`
- **Node.js Version:** 18.x or 20.x

### 4. Check What Should Be Visible

**About Section:**
- ✅ Interactive 3D icon cloud with 24 tech icons rotating
- ✅ Icons should respond to hover

**Credentials Section:**
- ✅ 3D parallax card carousel at the top
- ✅ Cards should auto-rotate every 4 seconds
- ✅ Hover effects with 3D rotation
- ✅ Navigation buttons (prev/next)
- ✅ Dots indicator showing active card
- ✅ Grid view below carousel

### 5. If Still Not Working

**Option A: Trigger Manual Redeploy**
1. Go to Vercel Dashboard
2. Click on your project
3. Go to "Deployments" tab
4. Click "..." on latest deployment
5. Select "Redeploy"

**Option B: Check Browser Console**
1. Open DevTools (F12)
2. Go to Console tab
3. Look for errors (red messages)
4. Check Network tab for failed resources

**Option C: Verify Files Are in GitHub**
1. Go to https://github.com/wvpssriraj10/sriraj-portfolio
2. Check that these files exist:
   - `src/components/ui/interactive-icon-cloud.tsx`
   - `src/components/ui/3d-cards-slider.tsx`
   - `src/components/About.tsx` (should have IconCloud)
   - `src/components/Credentials.tsx` (should have ParallaxCardCarousel)

### 6. Test Locally First
```bash
npm run build
npm run preview
```
Visit http://localhost:4173 and verify changes work locally.

## Common Issues

### Issue: "Changes not showing"
**Solution:** Clear browser cache + hard refresh

### Issue: "Build failing on Vercel"
**Solution:** Check build logs in Vercel dashboard for specific errors

### Issue: "Components not loading"
**Solution:** Check browser console for JavaScript errors

### Issue: "Styling broken"
**Solution:** Verify Tailwind CSS is building correctly

## Current Configuration

- **Framework:** Vite + React
- **Build Output:** `dist/` folder
- **API Route:** `/api/contact` → `api/contact.js`
- **SPA Routing:** All routes → `/index.html`
