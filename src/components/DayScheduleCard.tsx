import type { WeeklySchedule } from "../data/workouts";

interface DayScheduleCardProps {
  schedule: WeeklySchedule;
  onClick?: () => void;
}

const DayScheduleCard = ({ schedule, onClick }: DayScheduleCardProps) => {
  const getActivityColor = (activity: string) => {
    if (activity === "Rest") return "bg-slate-700/50 border-slate-600";
    if (activity === "HIIT Class") return "bg-orange-500/20 border-orange-500/50";
    return "bg-indigo-500/20 border-indigo-500/50";
  };

  const getActivityTextColor = (activity: string) => {
    if (activity === "Rest") return "text-slate-400";
    if (activity === "HIIT Class") return "text-orange-400";
    return "text-indigo-400";
  };

  return (
    <div
      onClick={onClick}
      className={`${getActivityColor(
        schedule.activity
      )} border rounded-lg p-4 cursor-pointer hover:scale-105 transition-transform ${
        onClick ? "hover:shadow-lg" : ""
      }`}
    >
      <div className="font-semibold text-slate-200 mb-1">{schedule.day}</div>
      <div className={`font-medium ${getActivityTextColor(schedule.activity)}`}>
        {schedule.activity}
      </div>
      {schedule.workout && (
        <div className="text-sm text-slate-400 mt-1">{schedule.workout}</div>
      )}
    </div>
  );
};

export default DayScheduleCard;

