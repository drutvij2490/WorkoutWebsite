const Home = () => {
  return (
    <div className="relative min-h-[calc(100vh-8rem)] overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated gradient orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-10 grid-pattern"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] px-4 py-16">
        {/* Hero Section */}
        <div className="text-center space-y-8 max-w-5xl mx-auto">
          {/* Main Title with Animation */}
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold">
              <span className="block bg-gradient-to-r from-indigo-400 via-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                Fitness Training Hub
              </span>
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mx-auto rounded-full animate-pulse"></div>
          </div>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl lg:text-3xl text-slate-300 font-light max-w-3xl mx-auto leading-relaxed">
            Transform your body. <span className="text-indigo-400 font-medium">Elevate your mind.</span> Achieve your goals.
          </p>

          {/* Motivational Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            {/* Card 1 - Strength */}
            <div className="group relative bg-slate-800/60 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/20">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <div className="text-5xl mb-4 animate-bounce">💪</div>
                <h3 className="text-2xl font-bold text-indigo-400 mb-3">Build Strength</h3>
                <p className="text-slate-400 leading-relaxed">
                  Progressive overload and structured training programs designed for maximum gains.
                </p>
              </div>
            </div>

            {/* Card 2 - Recovery */}
            <div className="group relative bg-slate-800/60 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <div className="text-5xl mb-4 animate-pulse">🧘</div>
                <h3 className="text-2xl font-bold text-purple-400 mb-3">Optimize Recovery</h3>
                <p className="text-slate-400 leading-relaxed">
                  Science-backed recovery strategies for sleep, HRV, and digestive health.
                </p>
              </div>
            </div>

            {/* Card 3 - Progress */}
            <div className="group relative bg-slate-800/60 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-pink-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/20">
              <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/10 rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <div className="text-5xl mb-4 animate-pulse delay-1000">📈</div>
                <h3 className="text-2xl font-bold text-pink-400 mb-3">Track Progress</h3>
                <p className="text-slate-400 leading-relaxed">
                  Monitor your journey with detailed analytics and performance metrics.
                </p>
              </div>
            </div>
          </div>

          {/* Motivational Quote Section */}
          <div className="mt-20 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-xl"></div>
            <div className="relative bg-slate-800/40 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-slate-700/50">
              <div className="text-6xl text-indigo-400/30 mb-4">"</div>
              <p className="text-2xl sm:text-3xl lg:text-4xl font-light text-slate-200 italic leading-relaxed">
                The only bad workout is the one that didn't happen
              </p>
              <div className="text-6xl text-indigo-400/30 mt-4 text-right">"</div>
            </div>
          </div>

          {/* Animated Stats or Features */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {[
              { label: "Workout Programs", value: "3", icon: "🏋️" },
              { label: "Recovery Tips", value: "3", icon: "💤" },
              { label: "Weekly Schedule", value: "7", icon: "📅" },
              { label: "Exercise Demos", value: "20+", icon: "🎥" },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="text-center p-6 bg-slate-800/40 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-300 hover:scale-110"
              >
                <div className="text-4xl mb-2 animate-bounce" style={{ animationDelay: `${idx * 200}ms` }}>
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-indigo-400 mb-1">{stat.value}</div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Action Elements */}
      <div className="absolute bottom-10 left-10 animate-bounce">
        <div className="w-3 h-3 bg-indigo-400 rounded-full"></div>
      </div>
      <div className="absolute top-20 right-20 animate-pulse delay-1000">
        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
      </div>
      <div className="absolute bottom-32 right-32 animate-bounce delay-2000">
        <div className="w-4 h-4 bg-pink-400 rounded-full"></div>
      </div>
    </div>
  );
};

export default Home;
