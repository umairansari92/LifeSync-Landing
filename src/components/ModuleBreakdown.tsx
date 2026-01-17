"use client";

export default function ModuleBreakdown() {
  const modules = [
    {
      icon: "💰",
      title: "Expense Tracker",
      description: "Real-time expense and income management",
      components: [
        "Frontend: ExpensesPage.jsx",
        "API: /api/expenses",
        "Backend: expenseController.js",
        "Database: expenseModel.js",
      ],
      features: [
        "Monthly filtering",
        "Category-wise breakdown",
        "Income tracking",
        "Balance calculation",
        "Yearly summaries",
      ],
    },
    {
      icon: "📋",
      title: "Daily Planner",
      description: "Task management with priorities and categories",
      components: [
        "Frontend: TasksPage.jsx",
        "API: /api/tasks",
        "Backend: taskController.js",
        "Database: taskModel.js",
      ],
      features: [
        "Priority levels",
        "Category tags",
        "Repeat scheduling",
        "Status tracking",
        "Date & time",
      ],
    },
    {
      icon: "🕋",
      title: "Prayer Tracker",
      description: "Namaz times and prayer tracking",
      components: [
        "Frontend: NamazPage.jsx",
        "API: /api/namaz",
        "Backend: namazController.js",
        "Database: namazModel.js",
      ],
      features: [
        "Accurate prayer times",
        "Prayer marking",
        "History tracking",
        "Hijri calendar",
        "Quran progress",
      ],
    },
    {
      icon: "📝",
      title: "Notes Manager",
      description: "Rich text notes with organization",
      components: [
        "Frontend: NotePage.jsx",
        "API: /api/notes",
        "Backend: noteController.js",
        "Database: note.js",
      ],
      features: [
        "Rich text editor",
        "Pin & Archive",
        "Tag system",
        "Trash management",
        "Full-text search",
      ],
    },
    {
      icon: "🛒",
      title: "Shopping List",
      description: "Shopping management with sharing",
      components: [
        "Frontend: ShoppingListPage.jsx",
        "API: /api/shopping",
        "Backend: shoppingListController.js",
        "Database: shoppingList.js",
      ],
      features: [
        "Category filter",
        "Item tracking",
        "Share lists",
        "Receipt tracking",
        "Price tracking",
      ],
    },
    {
      icon: "💳",
      title: "Loan Manager",
      description: "Track lending and borrowing",
      components: [
        "Frontend: LoansPage.jsx",
        "API: /api/contacts",
        "Backend: loanController.js",
        "Database: loanModel.js",
      ],
      features: [
        "Transaction tracking",
        "Settlement tracking",
        "Balance calculation",
        "WhatsApp links",
        "Contact management",
      ],
    },
  ];

  return (
    <section className="py-20 px-4 bg-slate-950" id="modules">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-amber-200 mb-4">
            Module Architecture
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Each module is independently managed with dedicated frontend, backend,
            and database components for scalability.
          </p>
        </div>

        {/* Modules Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-amber-500/20 hover:border-amber-400/50 rounded-xl p-6 transition-all hover:shadow-lg hover:shadow-amber-500/10"
            >
              {/* Icon & Title */}
              <div className="flex items-start gap-3 mb-4">
                <span className="text-3xl">{module.icon}</span>
                <div>
                  <h3 className="text-lg font-bold text-white">
                    {module.title}
                  </h3>
                  <p className="text-slate-400 text-sm">{module.description}</p>
                </div>
              </div>

              {/* Components */}
              <div className="mb-4 pb-4 border-b border-amber-500/20">
                <p className="text-xs font-semibold text-amber-400 mb-2">
                  COMPONENTS
                </p>
                <ul className="space-y-1">
                  {module.components.map((comp, i) => (
                    <li key={i} className="text-xs text-slate-400 font-mono">
                      {comp}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Features */}
              <div>
                <p className="text-xs font-semibold text-amber-400 mb-2">
                  KEY FEATURES
                </p>
                <ul className="space-y-1">
                  {module.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs">
                      <span className="text-amber-300">✓</span>
                      <span className="text-slate-300">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Architecture Highlight */}
        <div className="mt-16 bg-gradient-to-r from-amber-500/10 to-amber-400/10 border border-amber-500/30 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-white mb-4">
            Tech Stack Overview
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-amber-400 font-semibold mb-3">
                Frontend Stack
              </h4>
              <ul className="space-y-2 text-slate-300">
                <li>✨ React 19 - Modern UI</li>
                <li>🎨 Tailwind CSS - Beautiful styling</li>
                <li>🔀 React Router - Navigation</li>
                <li>📡 Axios - API calls</li>
                <li>📊 Recharts - Analytics charts</li>
              </ul>
            </div>
            <div>
              <h4 className="text-amber-400 font-semibold mb-3">
                Backend Stack
              </h4>
              <ul className="space-y-2 text-slate-300">
                <li>🚀 Node.js + Express - Server</li>
                <li>🗄️ MongoDB - Database</li>
                <li>🔐 JWT - Authentication</li>
                <li>📸 Cloudinary - Image storage</li>
                <li>🕌 Adhan - Prayer times</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
