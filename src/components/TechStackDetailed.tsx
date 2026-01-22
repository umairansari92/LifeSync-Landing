"use client";

import { Code, Database, Cloud, Lock, Zap, Palette } from "lucide-react";

const techStack = {
  frontend: {
    title: "Frontend (Client)",
    icon: Code,
    color: "blue",
    deployment: "Vercel",
    deploymentUrl: "https://app-lifesynchub.vercel.app",
    technologies: [
      { name: "React 19.2", description: "Latest React with improved performance" },
      { name: "Vite 7.2", description: "Lightning-fast build tool" },
      { name: "TailwindCSS 4", description: "Custom design system" },
      { name: "React Router v7", description: "Client-side routing" },
      { name: "TipTap", description: "Rich text editor" },
      { name: "Recharts", description: "Data visualization" },
      { name: "React Hook Form", description: "Form management" },
      { name: "Yup", description: "Schema validation" },
      { name: "Axios", description: "HTTP client" },
      { name: "SweetAlert2", description: "Beautiful alerts" },
      { name: "Adhan.js", description: "Islamic prayer times" }
    ]
  },
  backend: {
    title: "Backend (Server)",
    icon: Database,
    color: "green",
    deployment: "Render",
    deploymentUrl: "API hosted on Render",
    technologies: [
      { name: "Node.js", description: "JavaScript runtime" },
      { name: "Express.js 5", description: "Web application framework" },
      { name: "MongoDB", description: "NoSQL database (Cloud)" },
      { name: "Mongoose", description: "ODM for MongoDB" },
      { name: "JWT", description: "Authentication tokens" },
      { name: "bcrypt", description: "Password hashing" },
      { name: "SendGrid", description: "Email service" },
      { name: "Cloudinary", description: "Image hosting" },
      { name: "Node-Cron", description: "Job scheduling" },
      { name: "CORS", description: "Security middleware" },
      { name: "Adhan.js", description: "Prayer calculations" }
    ]
  },
  landing: {
    title: "Landing Page",
    icon: Palette,
    color: "purple",
    deployment: "Vercel",
    deploymentUrl: "https://lifesynchub.vercel.app",
    technologies: [
      { name: "Next.js 16", description: "React framework (App Router)" },
      { name: "TailwindCSS 4", description: "Utility-first CSS" },
      { name: "TypeScript 5", description: "Type safety" },
      { name: "Lucide React", description: "Icon library" },
      { name: "SEO Optimized", description: "Meta tags & OpenGraph" }
    ]
  }
};

const cloudServices = [
  {
    icon: Cloud,
    name: "Vercel",
    description: "Frontend & Landing page hosting with automatic deployments",
    features: ["Global CDN", "Instant deployments", "99.99% uptime", "Edge network"]
  },
  {
    icon: Database,
    name: "Render",
    description: "Backend API hosting with scalable infrastructure",
    features: ["Auto-scaling", "Health checks", "SSL certificates", "Persistent storage"]
  },
  {
    icon: Cloud,
    name: "MongoDB Atlas",
    description: "Cloud database with automatic backups and monitoring",
    features: ["Automatic backups", "Real-time monitoring", "Global clusters", "Security"]
  },
  {
    icon: Cloud,
    name: "Cloudinary",
    description: "Image hosting with automatic optimization and CDN delivery",
    features: ["Auto optimization", "CDN delivery", "Transformations", "Analytics"]
  }
];

const security = [
  {
    icon: Lock,
    feature: "JWT Authentication",
    description: "Secure token-based authentication with httpOnly cookies"
  },
  {
    icon: Lock,
    feature: "Email Verification",
    description: "OTP-based email verification for all new accounts"
  },
  {
    icon: Lock,
    feature: "Password Encryption",
    description: "bcrypt hashing with salt rounds for maximum security"
  },
  {
    icon: Lock,
    feature: "Rate Limiting",
    description: "Protection against brute-force and DDoS attacks"
  },
  {
    icon: Lock,
    feature: "CORS Protection",
    description: "Configured cross-origin resource sharing for security"
  },
  {
    icon: Lock,
    feature: "Input Validation",
    description: "Client and server-side validation for all inputs"
  }
];

export default function TechStackDetailed() {
  return (
    <section className="py-20 px-4 bg-slate-900" id="tech-stack">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-amber-200 mb-4">
            Built with Modern Technology
          </h2>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            A production-ready full-stack application using industry-standard tools and best practices
          </p>
        </div>

        {/* Architecture Diagram */}
        <div className="mb-16 bg-slate-800/30 border border-amber-500/20 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">System Architecture</h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center">
            <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 flex-1">
              <Code className="text-blue-400 mx-auto mb-2" size={32} />
              <p className="text-white font-semibold">React App</p>
              <p className="text-slate-400 text-sm">(Vercel)</p>
            </div>
            <div className="text-amber-400 text-2xl">→</div>
            <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 flex-1">
              <Database className="text-green-400 mx-auto mb-2" size={32} />
              <p className="text-white font-semibold">Node API</p>
              <p className="text-slate-400 text-sm">(Render)</p>
            </div>
            <div className="text-amber-400 text-2xl">→</div>
            <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4 flex-1">
              <Database className="text-purple-400 mx-auto mb-2" size={32} />
              <p className="text-white font-semibold">MongoDB</p>
              <p className="text-slate-400 text-sm">(Atlas)</p>
            </div>
          </div>
          <div className="mt-4 text-center">
            <div className="text-amber-400 text-2xl mb-4">↓</div>
            <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4 inline-block">
              <Cloud className="text-amber-400 mx-auto mb-2" size={32} />
              <p className="text-white font-semibold">Cloudinary</p>
              <p className="text-slate-400 text-sm">(Image CDN)</p>
            </div>
          </div>
        </div>

        {/* Tech Stack Sections */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {Object.values(techStack).map((stack, index) => {
            const IconComponent = stack.icon;
            return (
              <div
                key={index}
                className="bg-slate-800/50 border border-amber-500/20 rounded-xl p-6 hover:border-amber-400/50 transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <IconComponent className="text-amber-400" size={28} />
                  <h3 className="text-xl font-bold text-white">{stack.title}</h3>
                </div>
                
                <div className="mb-4 p-3 bg-amber-500/10 rounded-lg">
                  <p className="text-amber-400 font-semibold text-sm mb-1">Deployed on:</p>
                  <p className="text-white font-bold">{stack.deployment}</p>
                  {stack.deploymentUrl.startsWith('http') ? (
                    <a 
                      href={stack.deploymentUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-amber-300 text-xs hover:underline"
                    >
                      {stack.deploymentUrl}
                    </a>
                  ) : (
                    <p className="text-slate-400 text-xs">{stack.deploymentUrl}</p>
                  )}
                </div>

                <ul className="space-y-2">
                  {stack.technologies.map((tech, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Zap className="text-amber-400 mt-1 flex-shrink-0" size={14} />
                      <div>
                        <p className="text-white font-semibold text-sm">{tech.name}</p>
                        <p className="text-slate-400 text-xs">{tech.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Cloud Services */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Cloud Infrastructure</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cloudServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-amber-500/20 rounded-xl p-6 hover:border-amber-400/50 transition-all"
                >
                  <IconComponent className="text-amber-400 mb-3" size={32} />
                  <h4 className="text-white font-bold mb-2">{service.name}</h4>
                  <p className="text-slate-400 text-sm mb-4">{service.description}</p>
                  <ul className="space-y-1">
                    {service.features.map((feature, i) => (
                      <li key={i} className="text-amber-300 text-xs flex items-center gap-2">
                        <span className="text-amber-400">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* Security Features */}
        <div>
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Security & Best Practices</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {security.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  className="bg-red-500/5 border border-red-500/20 rounded-xl p-6 hover:border-red-400/50 transition-all"
                >
                  <IconComponent className="text-red-400 mb-3" size={28} />
                  <h4 className="text-white font-bold mb-2">{item.feature}</h4>
                  <p className="text-slate-400 text-sm">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Performance Stats */}
        <div className="mt-16 grid md:grid-cols-4 gap-6">
          {[
            { label: "Load Time", value: "< 2s", desc: "Average page load" },
            { label: "Uptime", value: "99.9%", desc: "Server availability" },
            { label: "API Response", value: "< 200ms", desc: "Average latency" },
            { label: "Lighthouse", value: "95+", desc: "Performance score" }
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-gradient-to-br from-amber-500/10 to-transparent border border-amber-500/20 rounded-xl p-6 text-center"
            >
              <p className="text-3xl font-bold text-amber-400 mb-2">{stat.value}</p>
              <p className="text-white font-semibold mb-1">{stat.label}</p>
              <p className="text-slate-400 text-xs">{stat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
