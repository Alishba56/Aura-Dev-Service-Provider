"use client";

export default function Stats() {
  const stats = [
    { icon: "📝", value: "2+", label: "Years Coding" },
    { icon: "🎯", value: "50+", label: "Projects Completed" },
    { icon: "✨", value: "70%", label: "Code Quality" },
  ];

  return (
    <section className=" relative py-20 px-4 sm:px-6 lg:px-20 max-w-7xl mx-auto overflow-hidden">
      <div className="absolute bottom-0  w-[400px] h-[400px] bg-accent/20 rounded-full mix-blend-screen blur-3xl animate-blob animation-delay-4000"></div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="grid grid-cols-2 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="border border-primary/30 rounded-xl p-6 hover:border-primary/60 transition duration-300 hover:bg-primary/5 transform hover:scale-105 hover:shadow-lg hover:shadow-primary/20 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-3xl font-bold text-primary mb-2 animate-pulse-glow">
                {stat.value}
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="border border-secondary/30 rounded-xl p-6 bg-card/50 font-mono text-sm overflow-x-auto animate-fade-in-right hover:border-secondary/60 transition duration-300 hover:shadow-lg hover:shadow-secondary/20">
          <pre className="text-gray-300">
            {`class Aurahubs {
  name: "Aura Hub",
  role: "Full Stack Developer",
  Frontend_skills: [
    "React & Next.js",
    "TypeScript & JavaScript",
    "Tailwind CSS",
  ],
  backend_skills: [
    "Node.js & Express",
    "MongoDB & Sanity CMS",
}`}
          </pre>
        </div>
      </div>
    </section>
  );
}
