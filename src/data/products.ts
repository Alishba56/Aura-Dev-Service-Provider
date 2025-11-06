import img from '@/public/landingpage.png'
import ecom from '@/public/Ecom.png'
import ai from '@/public/ai-model.png'
import blog from '@/public/blog.png'  
  
  
  
 export const projects = [
    {
      id: 1,
      title: "AI-ChatBot",
      description: "An AI-powered chatbot web application with conversational interface and natural language processing capabilities.",
      longDescription:
        "This project appears to be an AI-powered chatbot web application built using Next.js (a React framework) — the name suggests “AI_CHATBOT_NEXT.JS”. The goal is likely to allow users to engage in a conversational interface backed by some AI (e.g., an LLM) with a modern web front-end.",
      image: ai,
      tags: ["Next.js", "AI", "Chatbot", "OpenAI"],
      liveLink: "https://ai-chatbot-next-js-eta.vercel.app/",
      githubLink: "https://github.com/Alishba56/AI_CHATBOT_NEXT.JS",
      featured: true,
    },
    {
      id: 2,
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform with product listings, shopping cart, and payment integration.",
      longDescription:
        "The repository represents a Next.js marketplace project titled “Honest Bazar”, created for the Next.js Design Jam 2024.It’s an e-commerce web app that allows users to browse, view, and add products to the cart, aiming to combine clean design, responsive UI, and modern frontend technologies.",
      image: ecom,
      tags: ["Next.js", "React", "Sanity CMS"],
      liveLink: "https://honest-bazar.vercel.app/",
      githubLink: "https://github.com/Alishba56/Next.js_Design_Jam_2024",
      featured: true,
    },
    {
      id: 3,
      title: "Blog-Website",
      description: "A content-rich blog website with user authentication, post creation, and commenting features.",
      longDescription:
        "This project appears to be a blog website developed as “Milestone Three” of a larger series of projects. Its aim is to build a web platform for publishing and viewing blog posts. The focus is on content creation, display of articles, and delivering a readable, user-friendly blog experience.",
      image: blog,
      tags: ["React", "Tailwind CSS"],
      liveLink: "https://milestone-three-blogs-web-n4hc.vercel.app/ ",
      githubLink: "https://github.com/Alishba56/milestone-three-blogs-web",
      featured: false,
    },
    {
      id: 4,
      title: "business landing-page",
    description:"A sleek and modern landing page for a startup, designed to showcase products and capture leads.",   
      longDescription:"This repository appears to be a business landing-page website built to showcase a product/service, company, or startup via a clean and focused single (or few) page layout. The purpose is likely to serve as a promotional site that communicates value, features, call-to-action, and contact information.",
      image: img,
      tags: ["React", "Node.js", "MongoDB", "Socket.io"],
      liveLink: "https://business-landing-page-liart.vercel.app/",
      githubLink: "https://github.com/Alishba56/Business_Landing_Page",
      featured: false,
    },
    // {
    //   id: 5,
    //   title: "Weather App",
    //   description: "A real-time weather application with location-based forecasts and alerts.",
    //   longDescription:
    //     "Built with React and OpenWeather API. Features include current weather, 7-day forecast, location search, and weather alerts.",
    //   image: "/weather-scene.png",
    //   tags: ["React", "API", "Geolocation", "Real-time"],
    //   liveLink: "https://example.com",
    //   githubLink: "https://github.com",
    //   featured: false,
    // },
    {
      id: 5,
      title: "Portfolio Website",
      description: "A modern portfolio website showcasing projects and skills with smooth animations.",
      longDescription:
        "Developed with Next.js, Tailwind CSS, and Framer Motion. Features include smooth animations, responsive design, and SEO optimization.",
      image: "/creative-portfolio-layout.png",
      tags: ["Next.js", "Tailwind CSS", "Framer Motion", "SEO"],
      liveLink: "https://my-personal-protfolio-two.vercel.app/",
      githubLink: "https://github.com/Alishba56/my-personal",
      featured: false,
    },
  ]