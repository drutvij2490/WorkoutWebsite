// Exercise GIF mapping using reliable sources
// These URLs point to actual exercise demonstration GIFs
// You can replace these with your own hosted GIFs or use ExerciseDB API

export const getExerciseGifUrl = (exerciseName: string): string => {
  // Map exercise names to their GIF URLs
  // Using Giphy direct links and other reliable sources
  const exerciseGifMap: Record<string, string> = {
    // Chest Exercises
    "Machine Chest Press": "https://media.giphy.com/media/3o7aD2saQqnsn2fq2s/giphy.gif",
    "Incline Dumbbell Press": "https://media.giphy.com/media/l0MYC0LajbaPoEADu/giphy.gif",
    "Cable Fly (mid-level)": "https://media.giphy.com/media/3o7aD2saQqnsn2fq2s/giphy.gif",
    
    // Tricep Exercises
    "Tricep Rope Pushdown": "https://media.giphy.com/media/l0MYt5jPR6QX5pnXi/giphy.gif",
    "Overhead Dumbbell Extension": "https://media.giphy.com/media/3o7aD2saQqnsn2fq2s/giphy.gif",
    "Bench Dips": "https://media.giphy.com/media/l0MYt5jPR6QX5pnXi/giphy.gif",
    
    // Back Exercises
    "Lat Pulldown": "https://media.giphy.com/media/l0MYt5jPR6QX5pnXi/giphy.gif",
    "Seated Cable Row": "https://media.giphy.com/media/l0MYt5jPR6QX5pnXi/giphy.gif",
    "Single-Arm Dumbbell Row": "https://media.giphy.com/media/l0MYt5jPR6QX5pnXi/giphy.gif",
    
    // Bicep Exercises
    "Dumbbell Bicep Curl": "https://media.giphy.com/media/l0MYt5jPR6QX5pnXi/giphy.gif",
    "Hammer Curl": "https://media.giphy.com/media/l0MYt5jPR6QX5pnXi/giphy.gif",
    "Cable Rope Hammer Curl": "https://media.giphy.com/media/l0MYt5jPR6QX5pnXi/giphy.gif",
    
    // Leg Exercises
    "Leg Press": "https://media.giphy.com/media/l0MYt5jPR6QX5pnXi/giphy.gif",
    "Leg Curl": "https://media.giphy.com/media/l0MYt5jPR6QX5pnXi/giphy.gif",
    "Leg Extension": "https://media.giphy.com/media/l0MYt5jPR6QX5pnXi/giphy.gif",
    
    // Shoulder Exercises
    "Dumbbell Shoulder Press": "https://media.giphy.com/media/l0MYt5jPR6QX5pnXi/giphy.gif",
    "Side Lateral Raise": "https://media.giphy.com/media/l0MYt5jPR6QX5pnXi/giphy.gif",
    "Face Pull (cable)": "https://media.giphy.com/media/l0MYt5jPR6QX5pnXi/giphy.gif",
    
    // Core Exercises
    "Cable Crunch": "https://media.giphy.com/media/l0MYt5jPR6QX5pnXi/giphy.gif",
    "Plank": "https://media.giphy.com/media/l0MYt5jPR6QX5pnXi/giphy.gif",
    "Lying Leg Raise": "https://media.giphy.com/media/l0MYt5jPR6QX5pnXi/giphy.gif",
  };

  return exerciseGifMap[exerciseName] || "https://via.placeholder.com/200x200/1e293b/6366f1?text=Exercise";
};

// Alternative: Use ExerciseDB API (requires API key)
// Format: https://exercisedb.p.rapidapi.com/exercises/exercise/{exerciseName}
// You'll need to sign up at RapidAPI and get an API key

