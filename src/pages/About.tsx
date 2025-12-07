const About = () => {
  return (
    <div className="space-y-6 max-w-3xl">
      <h1 className="text-3xl sm:text-4xl font-bold text-indigo-400">About</h1>

      <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700 space-y-4">
        <h2 className="text-2xl font-semibold text-indigo-400">Training Dashboard</h2>
        <p className="text-slate-300 leading-relaxed">
          This fitness training hub is designed to help you organize and track your workout
          routines, manage your weekly training schedule, and optimize recovery through
          evidence-based practices. The platform provides a structured approach to fitness
          with a focus on balanced training, recovery optimization, and performance tracking.
        </p>
        <p className="text-slate-300 leading-relaxed">
          The dashboard includes comprehensive workout programs, weekly schedule management,
          and recovery resources covering sleep optimization, HRV (Heart Rate Variability)
          monitoring, and digestive health. Customize the workouts, schedules, and content
          to match your personal fitness goals and preferences.
        </p>
        <p className="text-slate-300 leading-relaxed">
          Future enhancements may include workout logging, progress tracking, detailed
          analytics, and integration with fitness wearables for comprehensive health monitoring.
        </p>
      </div>
    </div>
  );
};

export default About;

