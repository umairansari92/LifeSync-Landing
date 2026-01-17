"use client";

export default function TechStack() {
  const frontend = [
    { name: "React 19", icon: "⚛️", desc: "Modern UI Library" },
    { name: "Next.js", icon: "▲", desc: "Full-stack Framework" },
    { name: "TypeScript", icon: "🔷", desc: "Type Safety" },
    { name: "Tailwind CSS", icon: "🎨", desc: "Styling" },
    { name: "React Hook Form", icon: "📋", desc: "Form Management" },
    { name: "Recharts", icon: "📊", desc: "Analytics Charts" },
  ];

  const backend = [
    { name: "Node.js", icon: "🟩", desc: "Runtime" },
    { name: "Express.js", icon: "🚂", desc: "Web Framework" },
    { name: "MongoDB", icon: "🍃", desc: "Database" },
    { name: "JWT", icon: "🔐", desc: "Authentication" },
    { name: "Cloudinary", icon: "☁️", desc: "Image Storage" },
    { name: "SendGrid", icon: "📧", desc: "Email Service" },
  ];

  const libraries = [
    { name: "Adhan.js", icon: "🕋", desc: "Prayer Times" },
    { name: "Mongoose", icon: "🗂️", desc: "ODM" },
    { name: "Bcrypt", icon: "🔒", desc: "Encryption" },
    { name: "Node-Cron", icon: "⏰", desc: "Scheduling" },
    { name: "Lucide Icons", icon: "✨", desc: "Icons" },
    { name: "SweetAlert2", icon: "🎉", desc: "Notifications" },
  ];

  return (
    <section className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-amber-200 mb-4">
            Built with Modern Technology
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            LifeSync uses cutting-edge technologies for performance, security, and scalability
          </p>
        </div>

        {/* Tech Stack Grid */}
        <div className="space-y-12">
          {/* Frontend Stack */}
          <div>
            <h3 className="text-2xl font-bold text-amber-300 mb-6 flex items-center gap-2">
              <span>💻</span> Frontend Technologies
            </h3>
            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
              {frontend.map((tech, i) => (
                <div
                  key={i}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-amber-500/20 hover:border-amber-400/50 rounded-lg p-4 text-center transition-all hover:shadow-lg hover:shadow-amber-500/10"
                >
                  <p className="text-3xl mb-2">{tech.icon}</p>
                  <p className="font-bold text-white text-sm mb-1">{tech.name}</p>
                  <p className="text-xs text-slate-400">{tech.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Backend Stack */}
          <div>
            <h3 className="text-2xl font-bold text-amber-300 mb-6 flex items-center gap-2">
              <span>🔧</span> Backend & Database
            </h3>
            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
              {backend.map((tech, i) => (
                <div
                  key={i}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-amber-500/20 hover:border-amber-400/50 rounded-lg p-4 text-center transition-all hover:shadow-lg hover:shadow-amber-500/10"
                >
                  <p className="text-3xl mb-2">{tech.icon}</p>
                  <p className="font-bold text-white text-sm mb-1">{tech.name}</p>
                  <p className="text-xs text-slate-400">{tech.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Libraries & Services */}
          <div>
            <h3 className="text-2xl font-bold text-amber-300 mb-6 flex items-center gap-2">
              <span>📦</span> Libraries & Services
            </h3>
            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
              {libraries.map((tech, i) => (
                <div
                  key={i}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-amber-500/20 hover:border-amber-400/50 rounded-lg p-4 text-center transition-all hover:shadow-lg hover:shadow-amber-500/10"
                >
                  <p className="text-3xl mb-2">{tech.icon}</p>
                  <p className="font-bold text-white text-sm mb-1">{tech.name}</p>
                  <p className="text-xs text-slate-400">{tech.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Architecture Diagram */}
        <div className="mt-16 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-amber-500/20 rounded-xl p-8">
          <h3 className="text-xl font-bold text-white mb-6">Application Architecture</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="flex-1 bg-slate-700/50 rounded p-4 border border-amber-500/30 text-center">
                <p className="font-semibold text-amber-300">🎨 Frontend</p>
                <p className="text-xs text-slate-400 mt-2">React + Next.js + Tailwind</p>
              </div>
              <div className="text-amber-400 font-bold">↔️</div>
              <div className="flex-1 bg-slate-700/50 rounded p-4 border border-amber-500/30 text-center">
                <p className="font-semibold text-amber-300">⚙️ API</p>
                <p className="text-xs text-slate-400 mt-2">Express.js REST API</p>
              </div>
              <div className="text-amber-400 font-bold">↔️</div>
              <div className="flex-1 bg-slate-700/50 rounded p-4 border border-amber-500/30 text-center">
                <p className="font-semibold text-amber-300">🗄️ Database</p>
                <p className="text-xs text-slate-400 mt-2">MongoDB + Cloudinary</p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {[
            {
              icon: "⚡",
              title: "High Performance",
              desc: "Optimized for speed with caching and lazy loading"
            },
            {
              icon: "🔒",
              title: "Enterprise Security",
              desc: "JWT authentication, encrypted data, secure API"
            },
            {
              icon: "📈",
              title: "Scalable Design",
              desc: "Modular architecture for easy feature additions"
            }
          ].map((benefit, i) => (
            <div key={i} className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-6">
              <p className="text-3xl mb-3">{benefit.icon}</p>
              <h4 className="font-bold text-white mb-2">{benefit.title}</h4>
              <p className="text-slate-400 text-sm">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
