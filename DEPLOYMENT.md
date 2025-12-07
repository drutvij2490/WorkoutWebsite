# Deployment Guide - GitHub Pages

## Step-by-Step Instructions

### 1. Create GitHub Repository

1. Go to [GitHub](https://github.com/new)
2. Repository name: `WorkoutWebsite` (or your preferred name)
3. Description: "Fitness Training Hub - Workout Management Website"
4. Choose **Public** or **Private**
5. **DO NOT** check "Add a README file" (we already have one)
6. Click **Create repository**

### 2. Update Base Path (IMPORTANT!)

**Before pushing**, update the base path in `vite.config.ts` to match your repository name:

```typescript
// If your repo is named "WorkoutWebsite"
base: process.env.NODE_ENV === 'production' ? '/WorkoutWebsite/' : '/',

// If your repo is named "workout-website"  
base: process.env.NODE_ENV === 'production' ? '/workout-website/' : '/',

// If your repo is named "my-workout-site"
base: process.env.NODE_ENV === 'production' ? '/my-workout-site/' : '/',
```

**The base path must match your repository name exactly!**

### 3. Push to GitHub

Run these commands (replace with your GitHub username and repo name):

```bash
# Add remote repository
git remote add origin https://github.com/YOUR_USERNAME/WorkoutWebsite.git

# Push to GitHub
git push -u origin main
```

**Example:**
```bash
git remote add origin https://github.com/johndoe/WorkoutWebsite.git
git push -u origin main
```

### 4. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top menu)
3. Scroll down to **Pages** (left sidebar)
4. Under **Source**, select **GitHub Actions**
5. Save the settings

### 5. Wait for Deployment

1. Go to the **Actions** tab in your repository
2. You should see a workflow run called "Deploy to GitHub Pages"
3. Wait for it to complete (usually 2-3 minutes)
4. Once it shows a green checkmark ✅, your site is deployed!

### 6. Access Your Website

Your website will be available at:
```
https://YOUR_USERNAME.github.io/REPOSITORY_NAME/
```

**Example:**
```
https://johndoe.github.io/WorkoutWebsite/
```

## Troubleshooting

### Site shows 404 or blank page

1. **Check base path** - Make sure `vite.config.ts` base path matches your repo name
2. **Check Actions** - Go to Actions tab and see if deployment failed
3. **Wait a few minutes** - GitHub Pages can take 5-10 minutes to propagate

### Routing doesn't work

If direct links to pages don't work:
1. Make sure you're using `HashRouter` or the base path is correct
2. GitHub Pages needs the base path for React Router to work

### Build fails

1. Check the Actions tab for error messages
2. Make sure all dependencies are in `package.json`
3. Try running `npm run build` locally to test

## Custom Domain (Optional)

If you want to use a custom domain:

1. Add a `CNAME` file in the `public/` folder with your domain
2. Update DNS settings to point to GitHub Pages
3. Update `vite.config.ts` base to `/` (root)

## Updating Your Site

Every time you push to the `main` branch, GitHub Actions will automatically:
1. Build your site
2. Deploy it to GitHub Pages
3. Your changes will be live in 2-3 minutes!

## Need Help?

- Check GitHub Actions logs in the **Actions** tab
- Verify your `vite.config.ts` base path
- Make sure GitHub Pages is enabled in Settings

