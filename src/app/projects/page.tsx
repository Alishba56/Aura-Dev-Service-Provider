"use client"
import { ExternalLink, Github } from "lucide-react"
import { projects } from "@/src/data/products"
import Link from "next/link"
import Image from "next/image"


export default function ProjectsPage() {

  const featuredProjects = projects.filter((p) => p.featured)
  const otherProjects = projects.filter((p) => !p.featured)

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-38 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
    
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">My Projects</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Explore my latest work and see what I've been building. Each project showcases my skills and expertise.
          </p>
        </div>
      </section>

      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 gradient-text">Featured Projects</h2>
            <div className="space-y-12">
              {featuredProjects.map((project, index) => (
                <div
                  key={project.id}
                  className="group bg-card sm:h-[350px] h-auto pl-3 border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="grid  grid-cols-1 md:grid-cols-2 gap-0">
                    {/* Project Image */}
                    <div className="relative  h-52 sm:h-64 mr-2 sm:mr-0 md:h-auto overflow-hidden my-2  sm:my-5 bg-gradient-to-br from-primary/20 to-secondary/20">
                      <Image

                          width={500}
                          height={500}

                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full  object-fill group-hover:scale-110 transition-transform  duration-300"
                      />
                    </div>

                    {/* Project Content */}
                    <div className="p-8 flex flex-col justify-between">
                      <div>
                        <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground mb-0 sm:mb-4">{project.longDescription}</p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-sm bg-primary/20 text-primary px-3 py-1 rounded-full group-hover:bg-primary/30 transition-colors"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Links */}
                      <div className="flex flex-wrap gap-4">
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105 transform"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </a>
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 border border-primary text-primary px-6 py-2 rounded-lg font-semibold hover:bg-primary/10 transition-all duration-300 hover:scale-105 transform"
                        >
                          <Github className="w-4 h-4" />
                          Code
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Projects Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 gradient-text">All Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project, index) => (
              <div
                key={project.id}
                className="group bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 animate-fade-in-up hover:scale-105 transform"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20">
                  <Image

                          width={500}
                          height={500}

                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2">{project.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 pt-4 border-t border-border">
                    <Link
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 bg-primary/20 text-primary hover:bg-primary/30 px-3 py-2 rounded-lg font-semibold transition-all duration-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live
                    </Link>
                    <Link
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 bg-primary/20 text-primary hover:bg-primary/30 px-3 py-2 rounded-lg font-semibold transition-all duration-300"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
