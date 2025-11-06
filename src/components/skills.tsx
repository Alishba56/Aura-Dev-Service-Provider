"use client"

export default function Skills() {

  return (
    <section className=" relative py-20 px-4 sm:px-10 lg:px-40 max-w-7xl mx-auto overflow-hidden">
              <div className="absolute bottom-0    w-[400px] h-[400px] bg-accent/20 rounded-full mix-blend-screen blur-3xl animate-blob animation-delay-4000"></div>
     <div className="text-center mb-20 animate-fade-in-u" style={{ animationDelay: "0.4s" }}>
            <h2 className="text-4xl md:text-5xl font-bold  mb-4"> <span className="gradient-text"> Key </span> Skills </h2>
            <div className="space-y-4">
              {[
                { skill: "React & Next.js", percentage: 95 },
                { skill: "Sanity CMS", percentage: 95 },

                { skill: "MangoDB", percentage: 70 },
                { skill: "TypeScript & JavaScript", percentage: 85 },
                { skill: "Tailwind CSS & UI", percentage: 90 },
                { skill: "UI/UX Design", percentage: 90 },
                { skill: "Python", percentage: 65 },
                { skill: "Motion", percentage: 95 },
                { skill: "GSAP", percentage: 70 },

              ].map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-semibold text-gray-300">{item.skill}</span>
                    <span className="text-sm font-semibold text-secondary">{item.percentage}%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: `${item.percentage}%`,
                        animation: `slideInUp 1s ease-out ${0.5 + index * 0.1}s both`,
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div> 
    </section>
  )
}
