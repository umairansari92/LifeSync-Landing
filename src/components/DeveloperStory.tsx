"use client";

import { GraduationCap, Heart, Code, Rocket, Target, Users } from "lucide-react";

export default function DeveloperStory() {
  return (
    <section className="py-20 px-4 bg-slate-950" id="developer-story">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-amber-200 mb-4">
            The Story Behind LifeSync
          </h2>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            A journey of learning, building, and growing as a full-stack developer
          </p>
        </div>

        {/* Main Story */}
        <div className="bg-gradient-to-br from-amber-500/5 to-purple-500/5 border border-amber-500/20 rounded-2xl p-8 md:p-12 mb-12">
          <div className="flex items-start gap-4 mb-6">
            <Heart className="text-red-400 flex-shrink-0" size={32} />
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Building with Purpose</h3>
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  LifeSync started as a learning project but evolved into something much bigger - 
                  a comprehensive platform that solves real-world problems. As a developer in training, 
                  I wanted to build something that wasn't just a portfolio piece, but an actual tool 
                  that people could use daily.
                </p>
                <p>
                  The idea came from observing how people (including myself) struggle to manage multiple 
                  apps for budgeting, task management, prayer times, and notes. Why not combine everything 
                  into one beautiful, cohesive experience? That's how LifeSync was born.
                </p>
                <p>
                  This project represents <strong className="text-amber-400">3+ months</strong> of dedicated 
                  learning, coding, problem-solving, and iterating. Every feature, every line of code, 
                  and every design decision was carefully thought through and implemented with best practices in mind.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Learning Journey */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap className="text-amber-400" size={32} />
            <h3 className="text-2xl font-bold text-white">Learning Journey</h3>
          </div>
          
          <div className="bg-slate-800/50 border border-amber-500/20 rounded-xl p-8">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-amber-400 mb-2">3+</div>
                <p className="text-slate-300">Months of Development</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-amber-400 mb-2">10,000+</div>
                <p className="text-slate-300">Lines of Code Written</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-amber-400 mb-2">50+</div>
                <p className="text-slate-300">Features Implemented</p>
              </div>
            </div>

            <div className="border-t border-slate-700 pt-6">
              <h4 className="text-white font-bold mb-4">Training at Saylani Mass IT Training</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-amber-400 font-semibold mb-2">📍 Location</p>
                  <p className="text-slate-300">Zaitoon Ashraf IT Park, Karachi</p>
                </div>
                <div>
                  <p className="text-amber-400 font-semibold mb-2">👨‍🏫 Instructor</p>
                  <p className="text-slate-300">Sir Jaffar Aman</p>
                </div>
              </div>
              <div className="mt-4 p-4 bg-amber-500/10 rounded-lg border border-amber-500/20">
                <p className="text-slate-300">
                  <strong className="text-amber-400">Special Thanks:</strong> This project wouldn't 
                  have been possible without the exceptional mentorship and guidance from Sir Jaffar Aman. 
                  His teaching methodology, real-world insights, and constant support helped me understand 
                  not just <em>how</em> to code, but <em>why</em> we code the way we do.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* What I Learned */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Code className="text-amber-400" size={32} />
            <h3 className="text-2xl font-bold text-white">Skills Acquired</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                category: "Frontend Development",
                skills: [
                  "React 19 with modern hooks and patterns",
                  "State management and component architecture",
                  "Responsive design with TailwindCSS",
                  "Form handling and validation",
                  "Rich text editors and complex UIs",
                  "Performance optimization techniques"
                ]
              },
              {
                category: "Backend Development",
                skills: [
                  "RESTful API design and implementation",
                  "MongoDB database design and aggregation",
                  "JWT authentication and security",
                  "File uploads and cloud storage",
                  "Email integration and notifications",
                  "Cron jobs and automated tasks"
                ]
              },
              {
                category: "DevOps & Deployment",
                skills: [
                  "Cloud deployment (Vercel & Render)",
                  "Environment variables management",
                  "CI/CD pipeline understanding",
                  "DNS and domain configuration",
                  "Performance monitoring",
                  "Error logging and debugging"
                ]
              },
              {
                category: "Best Practices",
                skills: [
                  "Git version control and collaboration",
                  "Code organization and modularity",
                  "Security best practices",
                  "Error handling and user feedback",
                  "Documentation and comments",
                  "Testing and quality assurance"
                ]
              }
            ].map((section, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-amber-500/20 rounded-xl p-6"
              >
                <h4 className="text-amber-400 font-bold mb-4">{section.category}</h4>
                <ul className="space-y-2">
                  {section.skills.map((skill, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate-300 text-sm">
                      <span className="text-amber-400 mt-1">✓</span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Challenges & Solutions */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Target className="text-amber-400" size={32} />
            <h3 className="text-2xl font-bold text-white">Challenges Overcome</h3>
          </div>
          
          <div className="space-y-4">
            {[
              {
                challenge: "Prayer Time Calculations",
                solution: "Integrated Adhan.js library with geolocation API to provide accurate prayer times based on user's location. Learned about Islamic calculation methods and timezone handling."
              },
              {
                challenge: "Complex State Management",
                solution: "Implemented Context API and custom hooks to manage global state efficiently. Learned when to lift state up and when to keep it local."
              },
              {
                challenge: "File Upload Optimization",
                solution: "Integrated Cloudinary for automatic image optimization and CDN delivery. Reduced load times by 60% compared to direct server uploads."
              },
              {
                challenge: "Authentication Flow",
                solution: "Built a complete auth system with JWT tokens, email verification, and secure password handling. Implemented proper error handling and user feedback."
              },
              {
                challenge: "Responsive Design",
                solution: "Used TailwindCSS mobile-first approach and extensively tested on different devices. Created reusable components that adapt to screen sizes."
              }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-slate-800/30 border border-amber-500/20 rounded-xl p-6 hover:border-amber-400/50 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-red-500/10 p-2 rounded-lg flex-shrink-0">
                    <span className="text-red-400 text-lg">🔴</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-bold mb-2">Challenge: {item.challenge}</h4>
                    <div className="flex items-start gap-4">
                      <div className="bg-green-500/10 p-2 rounded-lg flex-shrink-0">
                        <span className="text-green-400 text-lg">🟢</span>
                      </div>
                      <p className="text-slate-300 text-sm">{item.solution}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Future Plans */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <Rocket className="text-amber-400" size={32} />
            <h3 className="text-2xl font-bold text-white">What's Next?</h3>
          </div>
          
          <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-xl p-8">
            <p className="text-slate-300 mb-6">
              LifeSync is just the beginning. I'm planning several exciting features and improvements:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "📱 Progressive Web App (PWA) support for offline functionality",
                "🔔 Push notifications for prayers, tasks, and reminders",
                "📊 Advanced analytics and financial reports",
                "🌍 Multi-language support (Urdu, Arabic, English)",
                "👥 Family account sharing and collaboration",
                "📱 Native mobile app using React Native",
                "🤖 AI-powered expense categorization",
                "📈 Investment tracking and portfolio management",
                "🎯 Habit tracking with streak monitoring",
                "☁️ Cloud sync across multiple devices"
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-2 text-slate-300">
                  <Rocket className="text-purple-400 flex-shrink-0" size={16} />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Connect Section */}
        <div className="mt-12 bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/30 rounded-xl p-8 text-center">
          <Users className="text-amber-400 mx-auto mb-4" size={48} />
          <h3 className="text-2xl font-bold text-white mb-4">Let's Connect!</h3>
          <p className="text-slate-300 max-w-2xl mx-auto mb-6">
            I'm always eager to learn, collaborate, and discuss web development. Whether you want to 
            talk about this project, share feedback, or explore opportunities, I'd love to connect!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://www.linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-500 hover:bg-amber-600 text-black font-bold px-6 py-3 rounded-lg transition-all"
            >
              Connect on LinkedIn
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-700 hover:bg-slate-600 text-white font-bold px-6 py-3 rounded-lg transition-all"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
