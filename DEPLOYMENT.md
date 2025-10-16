# 🚀 Deployment Guide - UDLS Portfolio

## Quick Deploy Options

### Option 1: Vercel (Recommended) ⚡

**Easiest and Fastest**

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Navigate to your project:
```bash
cd c:\Users\LENOVO\Downloads\UDLS
```

3. Deploy:
```bash
vercel
```

4. Follow prompts:
   - Login to Vercel
   - Confirm project settings
   - Deploy!

**Your site will be live at**: `https://your-project.vercel.app`

**Benefits**:
- ✅ Free SSL certificate
- ✅ Global CDN
- ✅ Automatic deployments
- ✅ Custom domain support

---

### Option 2: Netlify 🎨

**Drag & Drop Deployment**

1. Go to [netlify.com](https://netlify.com)
2. Sign up / Log in
3. Drag the `UDLS` folder to the deploy zone
4. Wait for deployment (30 seconds)
5. Your site is live!

**Alternative - Git Integration**:
```bash
# Initialize git
git init
git add .
git commit -m "Initial commit"

# Push to GitHub
git remote add origin https://github.com/yourusername/portfolio.git
git push -u origin main

# Connect to Netlify through their dashboard
```

**Benefits**:
- ✅ Free hosting
- ✅ Instant deploys
- ✅ Form handling
- ✅ Easy domain setup

---

### Option 3: GitHub Pages 📄

**Free Hosting on GitHub**

1. Create a GitHub repository:
```bash
git init
git add .
git commit -m "Initial portfolio website"
```

2. Create repo on GitHub (e.g., `portfolio`)

3. Push code:
```bash
git remote add origin https://github.com/yourusername/portfolio.git
git push -u origin main
```

4. Enable GitHub Pages:
   - Go to repository Settings
   - Scroll to "Pages"
   - Source: Deploy from branch
   - Branch: main / root
   - Save

**Your site**: `https://yourusername.github.io/portfolio/`

**For custom domain** (e.g., `udls.dev`):
- Add `CNAME` file with your domain
- Configure DNS settings
- Enable HTTPS in settings

---

### Option 4: Firebase Hosting 🔥

**Google's Hosting Solution**

1. Install Firebase CLI:
```bash
npm install -g firebase-tools
```

2. Login and initialize:
```bash
firebase login
cd c:\Users\LENOVO\Downloads\UDLS
firebase init hosting
```

3. Configure:
   - Select: Hosting
   - Public directory: `.` (current directory)
   - Single-page app: No
   - Don't overwrite index.html

4. Deploy:
```bash
firebase deploy
```

**Benefits**:
- ✅ Fast global CDN
- ✅ Free SSL
- ✅ Generous free tier
- ✅ Easy rollbacks

---

## Before Deploying - Checklist ✅

### 1. Add Your Images
```
images/
  ├── profile.jpg          (Your profile picture)
  ├── project-1.jpg        (Optional: project screenshots)
  ├── project-2.jpg
  └── ...
```

### 2. Update Meta Tags (SEO)
Edit `index.html` (lines 5-9):
```html
<meta name="description" content="Your custom description">
<meta name="keywords" content="Your, Keywords, Here">
<meta name="author" content="U.D Lahiru Sandaruwan">
```

### 3. Add Favicon
Create and add favicon:
```html
<link rel="icon" type="image/png" href="images/favicon.png">
```

### 4. Configure Contact Form
Choose a backend service:

**Option A: Formspree**
```html
<form action="https://formspree.io/f/YOUR_ID" method="POST">
```

**Option B: EmailJS**
- Sign up at emailjs.com
- Add EmailJS script
- Update form submission code

**Option C: Netlify Forms** (if using Netlify)
```html
<form name="contact" method="POST" data-netlify="true">
```

### 5. Test Locally
```bash
# Make sure everything works
python -m http.server 8000
# Visit: http://localhost:8000
```

### 6. Optimize Images
Before deployment, optimize images:
- Use WebP format where possible
- Compress to < 200KB each
- Resize to appropriate dimensions
- Use tools like TinyPNG or Squoosh

### 7. Update Links
- Verify all GitHub links work
- Check LinkedIn profile URL
- Test email links
- Ensure portfolio link is correct

---

## Custom Domain Setup

### Buy a Domain
Recommended registrars:
- Namecheap
- Google Domains
- Cloudflare Registrar

### Configure DNS

**For Vercel**:
```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

**For Netlify**:
```
Type: A
Name: @
Value: 75.2.60.5

Type: CNAME
Name: www
Value: YOUR-SITE.netlify.app
```

**For GitHub Pages**:
```
Type: A
Name: @
Value: 185.199.108.153
      185.199.109.153
      185.199.110.153
      185.199.111.153

Type: CNAME
Name: www
Value: yourusername.github.io
```

---

## Post-Deployment Tasks

### 1. Add Google Analytics
```html
<!-- Add before </head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### 2. Submit to Search Engines
- Google Search Console
- Bing Webmaster Tools
- Submit sitemap

### 3. Create sitemap.xml
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://yourdomain.com/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

### 4. Add robots.txt
```
User-agent: *
Allow: /
Sitemap: https://yourdomain.com/sitemap.xml
```

### 5. Enable HTTPS
All platforms provide free SSL:
- Vercel: Automatic
- Netlify: Automatic
- GitHub Pages: Enable in settings
- Firebase: Automatic

---

## Performance Tips

### Speed Optimization
1. ✅ Enable Gzip compression
2. ✅ Use CDN for assets
3. ✅ Minimize CSS/JS (optional)
4. ✅ Lazy load images
5. ✅ Cache static assets

### SEO Optimization
1. ✅ Add meta descriptions
2. ✅ Use semantic HTML
3. ✅ Add alt text to images
4. ✅ Create sitemap
5. ✅ Submit to search engines

### Social Media
Add Open Graph tags:
```html
<meta property="og:title" content="U.D Lahiru Sandaruwan - Full Stack Developer">
<meta property="og:description" content="Portfolio showcasing web and mobile development projects">
<meta property="og:image" content="https://yourdomain.com/images/og-image.jpg">
<meta property="og:url" content="https://yourdomain.com">
<meta name="twitter:card" content="summary_large_image">
```

---

## Continuous Deployment

### Auto-Deploy from Git
Most platforms support automatic deployments:

**Vercel**:
- Connect GitHub repository
- Auto-deploy on push to main

**Netlify**:
- Connect repository
- Set build settings (none needed)
- Auto-deploy on push

**GitHub Pages**:
- Automatic on push to main branch

---

## Monitoring & Maintenance

### Analytics to Track
- Page views
- Visitor demographics
- Popular sections
- Contact form submissions
- Device types

### Regular Updates
- Keep projects section updated
- Add new skills as you learn
- Update education section
- Refresh testimonials (if added)

### Backup
- Keep local copy
- Regular git commits
- Export database (if using CMS)

---

## Troubleshooting

### Common Issues

**404 Errors**:
- Check file paths
- Ensure index.html is in root
- Verify deployment settings

**Images Not Loading**:
- Check image paths
- Verify images uploaded
- Check case sensitivity

**CSS Not Applied**:
- Clear browser cache
- Check CSS file paths
- Verify CSS uploaded

**Form Not Working**:
- Configure form backend
- Check form action URL
- Verify CORS settings

---

## Support Resources

### Documentation
- [Vercel Docs](https://vercel.com/docs)
- [Netlify Docs](https://docs.netlify.com)
- [GitHub Pages](https://pages.github.com)
- [Firebase Hosting](https://firebase.google.com/docs/hosting)

### Communities
- Stack Overflow
- Dev.to
- GitHub Discussions
- Reddit: r/webdev

---

## Cost Estimate

### Free Tier Limits

**Vercel Free**:
- ✅ Unlimited personal projects
- ✅ 100 GB bandwidth/month
- ✅ Custom domains

**Netlify Free**:
- ✅ 100 GB bandwidth/month
- ✅ 300 build minutes/month
- ✅ Form submissions: 100/month

**GitHub Pages**:
- ✅ 100% Free
- ✅ 1 GB storage
- ✅ 100 GB bandwidth/month

**Firebase Free**:
- ✅ 10 GB storage
- ✅ 360 MB/day bandwidth
- ✅ Custom domains

### Paid Options (Optional)
Only needed for:
- High traffic (> 100K visitors/month)
- Advanced features
- Premium support

---

## 🎉 You're Ready to Deploy!

Your portfolio is professional, modern, and ready for the world to see.

**Choose your deployment method** and launch in minutes!

**Need help?** Check the documentation or reach out to the community.

**Good luck! 🚀**
