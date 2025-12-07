const Recovery = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl sm:text-4xl font-bold text-indigo-400">
        Recovery Tips
      </h1>

      <div className="space-y-6">
        {/* Sleep Section */}
        <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
          <h2 className="text-2xl font-semibold text-indigo-400 mb-4">
            Sleep Habits
          </h2>
          <ul className="space-y-2 text-slate-300 list-disc list-inside">
            <li>Go to bed earlier to ensure 7-9 hours of quality sleep</li>
            <li>Have a lighter dinner, especially in the evening</li>
            <li>Consider taking magnesium supplements at night to support relaxation</li>
            <li>Maintain a consistent sleep schedule, even on weekends</li>
            <li>Create a dark, cool, and quiet sleep environment</li>
            <li>Avoid screens and blue light exposure 1-2 hours before bed</li>
          </ul>
        </div>

        {/* HRV Section */}
        <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
          <h2 className="text-2xl font-semibold text-indigo-400 mb-4">
            HRV (Heart Rate Variability) Basics
          </h2>
          <ul className="space-y-2 text-slate-300 list-disc list-inside">
            <li>Reduce high-intensity interval training (HIIT) frequency if HRV is consistently low</li>
            <li>Incorporate more walking and low-intensity steady-state cardio</li>
            <li>Practice stress management techniques like meditation or deep breathing</li>
            <li>Monitor HRV trends over time to understand recovery patterns</li>
            <li>Allow adequate recovery between intense training sessions</li>
            <li>Consider factors like sleep quality, hydration, and nutrition when interpreting HRV data</li>
          </ul>
        </div>

        {/* Digestion Section */}
        <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
          <h2 className="text-2xl font-semibold text-indigo-400 mb-4">
            Digestion Notes
          </h2>
          <ul className="space-y-2 text-slate-300 list-disc list-inside">
            <li>Avoid overly strong herbal drinks in the morning that may upset digestion</li>
            <li>Eat balanced meals with adequate protein, fiber, and healthy fats</li>
            <li>Stay hydrated throughout the day, especially around workouts</li>
            <li>Consider meal timing around training sessions for optimal performance</li>
            <li>Listen to your body and adjust portion sizes based on activity levels</li>
            <li>Include probiotic-rich foods to support gut health</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Recovery;

