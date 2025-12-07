import { useState } from "react";
import DayScheduleCard from "../components/DayScheduleCard";
import { weeklySchedule } from "../data/workouts";

const Schedule = () => {
  const [selectedDay, setSelectedDay] = useState<number | null>(null);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl sm:text-4xl font-bold text-indigo-400">
        Weekly Schedule
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-7 gap-4">
        {weeklySchedule.map((day, idx) => (
          <DayScheduleCard
            key={idx}
            schedule={day}
            onClick={() => setSelectedDay(selectedDay === idx ? null : idx)}
          />
        ))}
      </div>

      {selectedDay !== null && (
        <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700 mt-6">
          <h2 className="text-xl font-semibold text-indigo-400 mb-2">
            {weeklySchedule[selectedDay].day} Details
          </h2>
          <p className="text-slate-300 mb-2">
            <span className="font-medium">Activity:</span>{" "}
            {weeklySchedule[selectedDay].activity}
          </p>
          {weeklySchedule[selectedDay].workout && (
            <p className="text-slate-300">
              <span className="font-medium">Workout:</span>{" "}
              {weeklySchedule[selectedDay].workout}
            </p>
          )}
          {weeklySchedule[selectedDay].activity === "Rest" && (
            <p className="text-slate-400 italic mt-2">
              Recovery day - rest and recharge!
            </p>
          )}
          {weeklySchedule[selectedDay].activity === "HIIT Class" && (
            <p className="text-slate-400 italic mt-2">
              High-intensity interval training (HIIT) session
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default Schedule;

