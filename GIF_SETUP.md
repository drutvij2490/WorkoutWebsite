# Exercise GIF Setup Guide

## Current Implementation

The workout website displays GIF demonstrations for each exercise. Currently, placeholder URLs are used in `src/data/workouts.ts`.

## How to Add Real Exercise GIFs

### Option 1: Use Giphy (Recommended)

1. Go to [Giphy.com](https://giphy.com)
2. Search for your exercise (e.g., "chest press exercise")
3. Find a suitable GIF
4. Right-click the GIF and select "Copy Image Address" or get the direct GIF URL
5. Replace the `gifUrl` in `src/data/workouts.ts`

Example Giphy URL format:
```
https://media.giphy.com/media/[ID]/giphy.gif
```

### Option 2: Use ExerciseDB API

The ExerciseDB API provides free exercise data including GIFs:
- API: https://api.api-ninjas.com/v1/exercises
- Or use: https://exercisedb.p.rapidapi.com/

### Option 3: Host Your Own GIFs

1. Create or download exercise GIFs
2. Host them on your server or CDN
3. Update the `gifUrl` field in `src/data/workouts.ts`

### Option 4: Use YouTube Thumbnails

For a quick solution, you can use YouTube video thumbnails:
```
https://img.youtube.com/vi/[VIDEO_ID]/maxresdefault.jpg
```

## Current GIF URLs Structure

Each exercise in `src/data/workouts.ts` has a `gifUrl` field. Replace these with actual exercise demonstration GIFs.

Example:
```typescript
{
  name: "Machine Chest Press",
  sets: "3",
  reps: "10–12",
  weight: "50–70 lb stack",
  gifUrl: "https://your-gif-url-here.gif", // Replace this
  tips: "Keep your back flat against the pad..."
}
```

## Fallback Behavior

If a GIF fails to load, the component automatically shows a placeholder image with the exercise name.

