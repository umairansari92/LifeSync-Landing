"use client";

export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Sign Up",
      description: "Create account with email and password (2 minutes)",
      details: ["Enter basic info", "Upload profile photo", "Set preferences"],
    },
    {
      number: "2",
      title: "Setup Profile",
      description: "Complete your profile for personalized experience",
      details: [
        "Add date of birth",
        "Set your location",
        "Choose your themes",
      ],
    },
    {
      number: "3",
      title: "Start Tracking",
      description: "Begin adding expenses, tasks, notes, and more",
      details: [
        "Add first expense",
        "Create your tasks",
        "Log prayers",
      ],
    },
    {
      number: "4",
      title: "Sync & Enjoy",
      description: "All data syncs instantly across devices",
      details: [
        "Real-time updates",
        "Cross-device sync",
        "Always backup",
      ],
    },
  ];

  return (
    <section className="py-20 px-4 bg-slate-900/50" id="how-it-works">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-amber-200 mb-4">
            How It Works
          </h2>
          <p className="text-slate-400 text-lg">
            Get started in 4 simple steps
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Step Card */}
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-amber-500/20 rounded-xl p-6">
                {/* Step Number */}
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-amber-400 to-amber-500 text-black rounded-full font-bold text-lg mb-4">
                  {step.number}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-2">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-slate-400 text-sm mb-4">{step.description}</p>

                {/* Details */}
                <ul className="space-y-2">
                  {step.details.map((detail, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs">
                      <span className="text-amber-400">→</span>
                      <span className="text-slate-300">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Arrow Connector */}
              {index < steps.length - 1 && (
                <div className="hidden md:flex absolute -right-3 top-1/2 transform -translate-y-1/2">
                  <div className="text-amber-400 text-2xl">→</div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Benefits Overview */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {[
            {
              title: "🚀 Fast Setup",
              desc: "Get started in just 2 minutes",
            },
            {
              title: "🔒 Secure & Private",
              desc: "Your data is encrypted and safe",
            },
            {
              title: "📱 Works Everywhere",
              desc: "Desktop, tablet, and mobile",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-6 text-center"
            >
              <p className="text-2xl mb-2">{item.title.split(" ")[0]}</p>
              <p className="text-white font-semibold mb-1">
                {item.title.split(" ").slice(1).join(" ")}
              </p>
              <p className="text-slate-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
