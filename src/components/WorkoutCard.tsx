import { useState } from "react";
import type { Exercise, WorkoutSection } from "../data/workouts";

interface WorkoutCardProps {
  section: WorkoutSection;
}

const WorkoutCard = ({ section }: WorkoutCardProps) => {
  const [expandedExercise, setExpandedExercise] = useState<number | null>(null);

  return (
    <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 shadow-lg">
      <h3 className="text-2xl font-bold text-indigo-400 mb-6 pb-3 border-b border-slate-700">
        {section.title}
      </h3>
      <div className="space-y-4">
        {section.exercises.map((exercise: Exercise, idx: number) => (
          <div
            key={idx}
            className="bg-slate-900/50 rounded-lg border border-slate-700/50 overflow-hidden hover:border-indigo-500/50 transition-all duration-300"
          >
            <div
              className="p-4 cursor-pointer"
              onClick={() => setExpandedExercise(expandedExercise === idx ? null : idx)}
            >
              <div className="flex items-start gap-4">
                {/* Exercise GIF */}
                <div className="flex-shrink-0 w-32 h-32 sm:w-40 sm:h-40 rounded-lg overflow-hidden border border-slate-700 bg-slate-800 relative group">
                  <img
                    src={exercise.gifUrl}
                    alt={`${exercise.name} demonstration`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      // Fallback if GIF fails to load
                      const target = e.target as HTMLImageElement;
                      target.src = `https://via.placeholder.com/200x200/1e293b/6366f1?text=${encodeURIComponent(exercise.name.split(' ')[0])}`;
                      target.classList.add('opacity-50');
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>

                {/* Exercise Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-slate-200 mb-2">
                        {exercise.name}
                      </h4>
                      <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center gap-2">
                          <span className="text-indigo-400 font-medium">Sets:</span>
                          <span className="text-slate-300">{exercise.sets}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-indigo-400 font-medium">Reps:</span>
                          <span className="text-slate-300">{exercise.reps}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-indigo-400 font-medium">Weight:</span>
                          <span className="text-slate-300">{exercise.weight}</span>
                        </div>
                      </div>
                    </div>
                    <button
                      className="text-indigo-400 hover:text-indigo-300 transition-colors flex-shrink-0"
                      onClick={(e) => {
                        e.stopPropagation();
                        setExpandedExercise(expandedExercise === idx ? null : idx);
                      }}
                    >
                      {expandedExercise === idx ? (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                        </svg>
                      ) : (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Expanded Tips Section */}
            {expandedExercise === idx && exercise.tips && (
              <div className="px-4 pb-4 pt-2 border-t border-slate-700 bg-slate-800/30">
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    <span className="font-semibold text-indigo-400">Tip: </span>
                    {exercise.tips}
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkoutCard;
