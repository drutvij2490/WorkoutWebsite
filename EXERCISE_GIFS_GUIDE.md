# How to Get Real Exercise GIFs

The workout website is set up to display GIFs for each exercise, but you need to replace the placeholder URLs with actual exercise demonstration GIFs.

## Quick Solution: Use Giphy Search

1. Go to [Giphy.com](https://giphy.com)
2. Search for each exercise (e.g., "chest press exercise", "bicep curl")
3. Find a suitable GIF that shows proper form
4. Right-click the GIF → "Copy Image Address" or "Open Image in New Tab"
5. Copy the direct GIF URL (should end in `.gif`)
6. Replace the `gifUrl` in `src/data/workouts.ts`

**Giphy URL Format:**
```
https://media.giphy.com/media/[GIF_ID]/giphy.gif
```

## Better Solution: Use ExerciseDB API (Free)

The ExerciseDB API provides free exercise data including GIFs:

1. **Sign up for RapidAPI** (free tier available):
   - Go to [RapidAPI](https://rapidapi.com/)
   - Search for "ExerciseDB"
   - Subscribe to the free plan

2. **Get your API key**

3. **Use the API endpoint:**
   ```
   GET https://exercisedb.p.rapidapi.com/exercises/exercise/{exerciseName}
   ```

4. **The response includes a `gifUrl` field** with the exercise GIF

5. **Update your workout data** with the GIF URLs from the API

## Alternative: Host Your Own GIFs

1. Download or create exercise GIFs
2. Upload them to:
   - Your own server
   - Cloud storage (AWS S3, Google Cloud Storage)
   - CDN (Cloudinary, Imgur)
3. Update the `gifUrl` fields with your hosted URLs

## Current Status

The website is fully functional with placeholder GIF URLs. The component includes:
- ✅ Error handling (shows placeholder if GIF fails to load)
- ✅ Lazy loading for performance
- ✅ Responsive design
- ✅ All structure in place

**You just need to replace the GIF URLs in `src/data/workouts.ts` with real exercise GIFs!**

## Recommended Sources

1. **Giphy** - https://giphy.com (search for exercise names)
2. **ExerciseDB API** - https://rapidapi.com/justin-WfnsXH_t6/api/exercisedb (free tier)
3. **GymVisual** - https://gymvisual.com (premium service)
4. **AnimatedExerciseGif** - https://animatedexercisegif.com (some free GIFs)

## Example: Finding a GIF for "Chest Press"

1. Go to Giphy.com
2. Search: "chest press machine exercise"
3. Find a GIF showing proper form
4. Copy the direct GIF URL
5. In `src/data/workouts.ts`, find "Machine Chest Press"
6. Replace the `gifUrl` value with your copied URL

The website will automatically display the new GIF!

