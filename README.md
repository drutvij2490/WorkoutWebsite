# Fitness Training Hub

A professional, mobile-first React website for managing workout programs, schedules, and recovery tips.

## Features

- 🏋️ **3-Day Workout Split** - Comprehensive workout programs with exercise demonstrations
- 📅 **Weekly Schedule** - Interactive weekly training schedule
- 💤 **Recovery Tips** - Sleep, HRV, and digestion optimization guides
- 🔐 **Authentication** - Secure login system to protect workout content
- 📱 **Mobile-First Design** - Responsive design that works on all devices
- 🎨 **Modern UI** - Dark theme with beautiful gradients and animations

## Tech Stack

- **React 19** with **TypeScript**
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **React Router** for navigation
- **GitHub Pages** for hosting

## Getting Started

### Prerequisites

- Node.js 20 or higher
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment to GitHub Pages

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Setup Instructions

1. **Create a GitHub Repository**
   - Go to [GitHub](https://github.com/new)
   - Create a new repository (e.g., `WorkoutWebsite`)
   - **Don't** initialize with README, .gitignore, or license

2. **Update Base Path** (if needed)
   - If your repository name is different from `WorkoutWebsite`, update the `base` path in `vite.config.ts`
   - Change `/WorkoutWebsite/` to match your repository name

3. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

4. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**
   - The site will automatically deploy on every push to `main`

5. **Access Your Site**
   - Your site will be available at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

## Project Structure

```
WorkoutWebsite/
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/          # Page components
│   ├── layouts/        # Layout components
│   ├── contexts/       # React contexts (Auth)
│   ├── data/           # Workout data
│   └── utils/          # Utility functions
├── .github/
│   └── workflows/      # GitHub Actions workflows
└── public/             # Static assets
```

## Customization

### Adding Exercise GIFs

1. Find exercise GIFs on [Giphy](https://giphy.com) or use the ExerciseDB API
2. Update `gifUrl` in `src/data/workouts.ts` with your GIF URLs
3. See `EXERCISE_GIFS_GUIDE.md` for detailed instructions

### Updating Workout Data

Edit `src/data/workouts.ts` to customize:
- Exercise names, sets, reps, weights
- Workout schedules
- Exercise tips and descriptions

## License

This project is open source and available for personal use.

## Contributing

Feel free to fork this project and customize it for your own fitness journey!
