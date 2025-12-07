export interface Exercise {
  name: string;
  sets: string;
  reps: string;
  weight: string;
  gifUrl: string; // GIF URL for exercise demonstration
  tips?: string; // Optional tips for the exercise
}

export interface WorkoutSection {
  title: string;
  exercises: Exercise[];
}

export interface WorkoutDay {
  id: string;
  title: string;
  description?: string;
  sections: WorkoutSection[];
  cardioFinisher?: {
    description: string;
  };
}

export const workoutDays: WorkoutDay[] = [
  {
    id: "day1",
    title: "Day 1 – Chest + Triceps",
    description: "Focus on building upper body strength with chest and tricep exercises",
    sections: [
      {
        title: "Chest",
        exercises: [
          {
            name: "Machine Chest Press",
            sets: "3",
            reps: "10–12",
            weight: "50–70 lb stack",
            gifUrl: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExamNqcGdyNDE3azJsZGo5YW40dzVsNjZ4aTUwb2lmZzM0aHMxZ2N4cCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/z1Suqc2f0GCPReDgUB/giphy.gif",
            tips: "Keep your back flat against the pad, control the weight on the negative portion",
          },
          {
            name: "Incline Dumbbell Press",
            sets: "3",
            reps: "10",
            weight: "20 lb dumbbells",
            gifUrl: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGVuN2V4cnlpNzRtc3ZicjBhaGhzbXA0OGNiNjVsN2U3MXpndDZ3MSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/jLFMDwtmRBrTQVVIDH/giphy.gif",
            tips: "Set bench to 30-45 degree angle, lower weights to chest level",
          },
          {
            name: "Cable Fly (mid-level)",
            sets: "3",
            reps: "12",
            weight: "10–15 lb each side",
            gifUrl: "https://media.giphy.com/media/3o7aD2saQqnsn2fq2s/giphy.gif",
            tips: "Maintain slight bend in elbows, squeeze chest at peak contraction",
          },
        ],
      },
      {
        title: "Triceps",
        exercises: [
          {
            name: "Tricep Rope Pushdown",
            sets: "3",
            reps: "12–15",
            weight: "20–30 lb",
            gifUrl: "https://media.giphy.com/media/l0MYt5jPR6QX5pnXi/giphy.gif",
            tips: "Keep elbows tight to body, extend fully at bottom",
          },
          {
            name: "Overhead Dumbbell Extension",
            sets: "3",
            reps: "12",
            weight: "20 lb dumbbell",
            gifUrl: "https://media.giphy.com/media/3o7aD2saQqnsn2fq2s/giphy.gif",
            tips: "Keep core engaged, lower weight behind head with control",
          },
          {
            name: "Bench Dips",
            sets: "2",
            reps: "12–15",
            weight: "bodyweight",
            gifUrl: "https://media.giphy.com/media/l0MYt5jPR6QX5pnXi/giphy.gif",
            tips: "Keep body close to bench, lower until elbows reach 90 degrees",
          },
        ],
      },
    ],
    cardioFinisher: {
      description: "Treadmill: incline 7%, speed 2.8–3.2 mph, 15–20 min.",
    },
  },
  {
    id: "day2",
    title: "Day 2 – Back + Biceps",
    description: "Develop a strong back and powerful biceps with these compound and isolation movements",
    sections: [
      {
        title: "Back",
        exercises: [
          {
            name: "Lat Pulldown",
            sets: "3",
            reps: "10–12",
            weight: "55–70 lb",
            gifUrl: "https://media.giphy.com/media/l0MYt5jPR6QX5pnXi/giphy.gif",
            tips: "Pull to upper chest, squeeze lats at bottom, control the weight up",
          },
          {
            name: "Seated Cable Row",
            sets: "3",
            reps: "10–12",
            weight: "55–70 lb",
            gifUrl: "https://media.giphy.com/media/l0MYt5jPR6QX5pnXi/giphy.gif",
            tips: "Keep back straight, pull to lower chest/upper abs, squeeze shoulder blades",
          },
          {
            name: "Single-Arm Dumbbell Row",
            sets: "3",
            reps: "10 each side",
            weight: "20–25 lb",
            gifUrl: "https://media.giphy.com/media/l0MYt5jPR6QX5pnXi/giphy.gif",
            tips: "Brace on bench, pull elbow back, focus on lat contraction",
          },
        ],
      },
      {
        title: "Biceps",
        exercises: [
          {
            name: "Dumbbell Bicep Curl",
            sets: "3",
            reps: "12",
            weight: "12–15 lb",
            gifUrl: "https://media.giphy.com/media/l0MYt5jPR6QX5pnXi/giphy.gif",
            tips: "Keep elbows stationary, curl to full contraction, control the negative",
          },
          {
            name: "Hammer Curl",
            sets: "3",
            reps: "12",
            weight: "12–15 lb",
            gifUrl: "https://media.giphy.com/media/l0MYt5jPR6QX5pnXi/giphy.gif",
            tips: "Neutral grip targets brachialis, keep wrists straight throughout",
          },
          {
            name: "Cable Rope Hammer Curl",
            sets: "2",
            reps: "12–15",
            weight: "20–25 lb",
            gifUrl: "https://media.giphy.com/media/l0MYt5jPR6QX5pnXi/giphy.gif",
            tips: "Constant tension from cable, squeeze at peak contraction",
          },
        ],
      },
    ],
    cardioFinisher: {
      description: "Treadmill: incline 8%, speed 2.7–3.0 mph, 15–20 min.",
    },
  },
  {
    id: "day3",
    title: "Day 3 – Legs + Shoulders + Core",
    description: "Complete lower body and core workout for strength and stability",
    sections: [
      {
        title: "Legs",
        exercises: [
          {
            name: "Leg Press",
            sets: "3",
            reps: "12",
            weight: "90–140 lb",
            gifUrl: "https://media.giphy.com/media/l0MYt5jPR6QX5pnXi/giphy.gif",
            tips: "Lower until knees reach 90 degrees, drive through heels, don't lock knees",
          },
          {
            name: "Leg Curl",
            sets: "3",
            reps: "12",
            weight: "40–60 lb",
            gifUrl: "https://media.giphy.com/media/l0MYt5jPR6QX5pnXi/giphy.gif",
            tips: "Control the weight, squeeze hamstrings at peak contraction",
          },
          {
            name: "Leg Extension",
            sets: "3",
            reps: "12",
            weight: "40–60 lb",
            gifUrl: "https://media.giphy.com/media/l0MYt5jPR6QX5pnXi/giphy.gif",
            tips: "Extend fully, pause at top, control the negative portion",
          },
        ],
      },
      {
        title: "Shoulders",
        exercises: [
          {
            name: "Dumbbell Shoulder Press",
            sets: "3",
            reps: "10",
            weight: "15–20 lb",
            gifUrl: "https://media.giphy.com/media/l0MYt5jPR6QX5pnXi/giphy.gif",
            tips: "Press straight up, don't arch back excessively, control the descent",
          },
          {
            name: "Side Lateral Raise",
            sets: "3",
            reps: "12",
            weight: "8–10 lb",
            gifUrl: "https://media.giphy.com/media/l0MYt5jPR6QX5pnXi/giphy.gif",
            tips: "Slight forward lean, raise to shoulder height, control the negative",
          },
          {
            name: "Face Pull (cable)",
            sets: "3",
            reps: "12",
            weight: "20–25 lb",
            gifUrl: "https://media.giphy.com/media/l0MYt5jPR6QX5pnXi/giphy.gif",
            tips: "Pull to face level, focus on rear delts and upper back",
          },
        ],
      },
      {
        title: "Core",
        exercises: [
          {
            name: "Cable Crunch",
            sets: "2",
            reps: "15",
            weight: "N/A",
            gifUrl: "https://media.giphy.com/media/l0MYt5jPR6QX5pnXi/giphy.gif",
            tips: "Crunch down, don't pull with arms, focus on abs",
          },
          {
            name: "Plank",
            sets: "1",
            reps: "30–45 sec",
            weight: "bodyweight",
            gifUrl: "https://media.giphy.com/media/l0MYt5jPR6QX5pnXi/giphy.gif",
            tips: "Keep body in straight line, engage core, breathe normally",
          },
          {
            name: "Lying Leg Raise",
            sets: "1",
            reps: "12–15",
            weight: "bodyweight",
            gifUrl: "https://media.giphy.com/media/l0MYt5jPR6QX5pnXi/giphy.gif",
            tips: "Keep lower back pressed to floor, control the movement",
          },
        ],
      },
    ],
    cardioFinisher: {
      description: "Treadmill: incline 5%, speed 3.0–3.3 mph, 15–20 min.",
    },
  },
];

export interface WeeklySchedule {
  day: string;
  activity: string;
  workout?: string;
}

export const weeklySchedule: WeeklySchedule[] = [
  {
    day: "Monday",
    activity: "Gym",
    workout: "Day 1 (Chest + Triceps)",
  },
  {
    day: "Tuesday",
    activity: "HIIT Class",
  },
  {
    day: "Wednesday",
    activity: "Gym",
    workout: "Day 2 (Back + Biceps)",
  },
  {
    day: "Thursday",
    activity: "HIIT Class",
  },
  {
    day: "Friday",
    activity: "Rest",
  },
  {
    day: "Saturday",
    activity: "Rest",
  },
  {
    day: "Sunday",
    activity: "Gym",
    workout: "Day 3 (Legs + Shoulders + Core)",
  },
];
