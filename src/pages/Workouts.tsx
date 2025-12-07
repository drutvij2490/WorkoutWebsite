import { useState } from "react";
import WorkoutCard from "../components/WorkoutCard";
import { workoutDays } from "../data/workouts";

const Workouts = () => {
  const [activeDay, setActiveDay] = useState(0);

  const activeWorkout = workoutDays[activeDay];

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="text-center space-y-4 pb-6 border-b border-slate-700">
        <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Workout Programs
        </h1>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          Professional training programs with detailed exercise demonstrations
        </p>
      </div>

      {/* Day Tabs */}
      <div className="flex flex-wrap gap-3">
        {workoutDays.map((day, idx) => (
          <button
            key={day.id}
            onClick={() => setActiveDay(idx)}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              activeDay === idx
                ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/50 scale-105"
                : "bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700"
            }`}
          >
            {day.title}
          </button>
        ))}
      </div>

      {/* Active Workout Content */}
      {activeWorkout.description && (
        <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-xl p-6 border border-indigo-500/20">
          <p className="text-slate-300 text-lg leading-relaxed">
            {activeWorkout.description}
          </p>
        </div>
      )}

      <div className="space-y-8">
        {activeWorkout.sections.map((section, idx) => (
          <WorkoutCard key={idx} section={section} />
        ))}

        {activeWorkout.cardioFinisher && (
          <div className="bg-gradient-to-r from-slate-800/80 to-slate-800/50 rounded-xl p-8 border-2 border-indigo-500/30 shadow-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-indigo-400">
                Cardio Finisher
              </h3>
            </div>
            <p className="text-slate-300 text-lg leading-relaxed">
              {activeWorkout.cardioFinisher.description}
            </p>
            <div className="mt-4 p-4 bg-indigo-500/10 rounded-lg border border-indigo-500/20">
              <p className="text-sm text-slate-400">
                <span className="text-indigo-400 font-semibold">💡 Tip: </span>
                Maintain steady pace throughout. Focus on controlled breathing and proper form.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Workouts;
