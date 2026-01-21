"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "experience", "skills", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-screen w-80 bg-[#1a1a1a] border-r border-gray-800 p-8 flex flex-col justify-between overflow-y-auto z-40 hidden lg:flex">
        <div className="animate-fadeIn">
          {/* Profile Image */}
          <div className="mb-6">
            <div className="w-32 h-32 rounded-2xl overflow-hidden mb-4 border-2 border-gray-700 bg-[#1a1a1a]">
              <Image
                src="/profile.png"
                alt="Ayman Zein"
                width={128}
                height={128}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <h2 className="text-2xl font-bold mb-1">
              Ayman<span className="text-emerald-500">®</span>
            </h2>
            <p className="text-sm text-gray-400 mb-1">
              Senior Front-End Engineer
            </p>
            <p className="text-xs text-emerald-500 mb-4">Cairo, Egypt</p>

            <div className="text-sm text-gray-400 space-y-2 mb-6">
              <p>ayman.zein.elbehairy@gmail.com</p>
              <p>+201148131269</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex gap-3 mb-8">
            <a
              href="https://www.linkedin.com/in/ayman-zein/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#2a2a2a] hover:bg-emerald-500 transition-colors flex items-center justify-center"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="https://github.com/Ayman-Zein/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#2a2a2a] hover:bg-emerald-500 transition-colors flex items-center justify-center"
              aria-label="GitHub"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="mailto:ayman.zein.elbehairy@gmail.com"
              className="w-10 h-10 rounded-full bg-[#2a2a2a] hover:bg-emerald-500 transition-colors flex items-center justify-center"
              aria-label="Email"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </a>
            <a
              href="tel:+201148131269"
              className="w-10 h-10 rounded-full bg-[#2a2a2a] hover:bg-emerald-500 transition-colors flex items-center justify-center"
              aria-label="Phone"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </a>
          </div>

          {/* CTA Button */}
          <a
            href="mailto:ayman.zein.elbehairy@gmail.com"
            className="w-full py-3 px-6 bg-emerald-500 hover:bg-emerald-600 rounded-full text-center font-medium transition-colors flex items-center justify-center gap-2"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            HIRE ME!
          </a>
        </div>

        {/* Footer */}
        <div className="text-xs text-gray-500 text-center pt-6 border-t border-gray-800">
          © 2026 Ayman Zein. All Rights Reserved
        </div>
      </aside>

      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 bg-[#1a1a1a] border-b border-gray-800 p-4 z-50">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg overflow-hidden border border-gray-700 bg-[#1a1a1a]">
              <Image
                src="/profile.png"
                alt="Ayman Zein"
                width={40}
                height={40}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="font-bold">
                Ayman<span className="text-emerald-500">®</span>
              </h2>
              <p className="text-xs text-gray-400">Senior Frontend Engineer</p>
            </div>
          </div>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="w-10 h-10 flex items-center justify-center"
            aria-label="Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-[#1a1a1a] border-b border-gray-800 p-4">
            <nav className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("home")}
                className="text-left hover:text-emerald-500 transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-left hover:text-emerald-500 transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="text-left hover:text-emerald-500 transition-colors"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-left hover:text-emerald-500 transition-colors"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left hover:text-emerald-500 transition-colors"
              >
                Contact
              </button>
            </nav>
            <div className="flex gap-3 mt-6">
              <a
                href="https://www.linkedin.com/in/ayman-zein/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#2a2a2a] hover:bg-emerald-500 transition-colors flex items-center justify-center"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://github.com/Ayman-Zein/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#2a2a2a] hover:bg-emerald-500 transition-colors flex items-center justify-center"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Navigation Dots */}
      <nav className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 hidden xl:block">
        <div className="flex flex-col gap-4">
          {[
            { id: "home", label: "Home" },
            { id: "about", label: "About" },
            { id: "experience", label: "Experience" },
            { id: "skills", label: "Skills" },
            { id: "contact", label: "Contact" },
          ].map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="group relative"
              aria-label={section.label}
            >
              <div
                className={`w-3 h-3 rounded-full border-2 transition-all ${
                  activeSection === section.id
                    ? "bg-emerald-500 border-emerald-500"
                    : "border-gray-600 hover:border-emerald-500"
                }`}
              />
              <span className="absolute right-6 top-1/2 -translate-y-1/2 bg-[#1a1a1a] px-3 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                {section.label}
              </span>
            </button>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <main className="lg:ml-80 pt-20 lg:pt-0">
        {/* Hero Section */}
        <section
          id="home"
          className="min-h-screen flex items-center justify-center px-6 md:px-12 relative overflow-hidden"
        >
          <div className="absolute top-10 right-10 text-xs text-gray-600 border border-gray-800 px-3 py-1 rounded-full hidden md:block">
            INTRODUCE
          </div>

          <div className="max-w-4xl animate-fadeInUp">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              Say Hi from <span className="text-emerald-500">Ayman</span>,<br />
              Senior Front-End
              <br />
              Engineer
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mb-8">
              Architecting scalable, high-performance web applications with 5+
              years of expertise. Just simple like that!
            </p>

            {/* Scroll Indicator - Mobile */}
            <button
              onClick={() => scrollToSection("about")}
              className="flex md:hidden items-center gap-6 mt-16 group cursor-pointer transition-all duration-300 hover:gap-8"
              aria-label="Scroll to next section"
            >
              <div className="flex flex-col items-center">
                <div className="w-6 h-10 border-2 border-gray-600 group-hover:border-emerald-500 rounded-full flex items-start justify-center p-1 transition-colors duration-300">
                  <div className="w-1.5 h-2 bg-emerald-500 rounded-full animate-bounce" />
                </div>
                <div className="h-20 w-px bg-gradient-to-b from-emerald-500 to-transparent mt-2 opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-xs text-gray-400 uppercase tracking-wider">
                  Scroll Down
                </p>
                <p className="text-sm text-emerald-500 font-medium">
                  Explore My Work
                </p>
              </div>
            </button>
          </div>

          {/* Scroll Indicator - Desktop (Right Side) */}
          <button
            onClick={() => scrollToSection("about")}
            className="hidden md:flex absolute right-8 lg:right-16 bottom-24 items-center gap-6 group cursor-pointer transition-all duration-300 hover:gap-8"
            aria-label="Scroll to next section"
          >
            <div className="flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 items-end">
              <p className="text-xs text-gray-400 uppercase tracking-wider">
                Scroll Down
              </p>
              <p className="text-sm text-emerald-500 font-medium">
                Explore My Work
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-6 h-10 border-2 border-gray-600 group-hover:border-emerald-500 rounded-full flex items-start justify-center p-1 transition-colors duration-300">
                <div className="w-1.5 h-2 bg-emerald-500 rounded-full animate-bounce" />
              </div>
              <div className="h-20 w-px bg-gradient-to-b from-emerald-500 to-transparent mt-2 opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </button>

          {/* Stats */}
          <div className="absolute bottom-20 left-6 md:left-12 flex gap-12 animate-slideInLeft">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-emerald-500">
                5+
              </div>
              <div className="text-sm text-gray-500 mt-1">YEARS OF</div>
              <div className="text-sm text-gray-500">EXPERIENCE</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-emerald-500">
                10+
              </div>
              <div className="text-sm text-gray-500 mt-1">
                PROJECTS COMPLETED ON
              </div>
              <div className="text-sm text-gray-500">4 COUNTRIES</div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="min-h-screen flex items-center px-6 md:px-12 py-20"
        >
          <div className="max-w-4xl">
            <div className="text-xs text-gray-600 border border-gray-800 px-3 py-1 rounded-full inline-block mb-8">
              A. ABOUT
            </div>

            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              Every great design begin with
              <br />
              an even <span className="text-emerald-500">better story</span>
            </h2>

            <div className="text-gray-400 space-y-4 text-lg leading-relaxed">
              <p>
                Results-driven Senior Front-End Engineer with over 5 years of
                experience architecting scalable, high-performance web
                applications. Specialist in{" "}
                <span className="text-white font-medium">Micro Frontends</span>,
                <span className="text-white font-medium"> Design Systems</span>,
                and{" "}
                <span className="text-white font-medium">
                  Performance Optimization
                </span>
                .
              </p>
              <p>
                Adept at cross-functional leadership and independent
                decision-making to deliver pixel-perfect, SEO-friendly digital
                solutions that align with business strategies. I transform
                complex requirements into elegant, user-centric interfaces that
                drive results.
              </p>
              <p>
                From architecting Micro Frontend systems to optimizing
                performance at scale, I bring a unique blend of technical
                expertise and strategic thinking to every project. My approach
                combines cutting-edge technologies with proven architectural
                patterns to build solutions that stand the test of time.
              </p>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="min-h-screen px-6 md:px-12 py-20">
          <div className="max-w-5xl">
            <div className="text-xs text-gray-600 border border-gray-800 px-3 py-1 rounded-full inline-block mb-8">
              B. EXPERIENCE
            </div>

            <h2 className="text-3xl md:text-5xl font-bold mb-12">
              Professional <span className="text-emerald-500">Journey</span>
            </h2>

            <div className="space-y-8">
              {/* BitBang */}
              <div className="border border-gray-800 rounded-2xl p-6 md:p-8 hover:border-emerald-500/50 transition-colors bg-[#1a1a1a]">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-emerald-500">
                      BitBang
                    </h3>
                    <p className="text-gray-400">Senior Front-End Engineer</p>
                  </div>
                  <span className="text-sm text-gray-500 mt-2 md:mt-0">
                    Mar 2025 – Present
                  </span>
                </div>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex gap-2">
                    <span className="text-emerald-500 mt-1">▹</span>
                    <span>
                      Reduced feature development time by{" "}
                      <span className="text-white font-medium">20%</span> by
                      architecting a high-performance Calendar component
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-500 mt-1">▹</span>
                    <span>
                      Maintained{" "}
                      <span className="text-white font-medium">
                        100% design fidelity
                      </span>{" "}
                      while collaborating with designers on responsive
                      interfaces using Ant Design
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-500 mt-1">▹</span>
                    <span>
                      Streamlined user data collection with complex, multi-step
                      forms using React Hook Form
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-500 mt-1">▹</span>
                    <span>
                      Engineered secure and scalable Role Management Module for
                      multi-tier user permissions
                    </span>
                  </li>
                </ul>
              </div>

              {/* Thiqah */}
              <div className="border border-gray-800 rounded-2xl p-6 md:p-8 hover:border-emerald-500/50 transition-colors bg-[#1a1a1a]">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-emerald-500">
                      Thiqah
                    </h3>
                    <p className="text-gray-400">Senior Front-End Engineer</p>
                  </div>
                  <span className="text-sm text-gray-500 mt-2 md:mt-0">
                    Nov 2023 – Jan 2025
                  </span>
                </div>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex gap-2">
                    <span className="text-emerald-500 mt-1">▹</span>
                    <span>
                      Conducted technical assessments for multiple projects,
                      providing mentorship to junior developers
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-500 mt-1">▹</span>
                    <span>
                      Increased front-end team velocity by{" "}
                      <span className="text-white font-medium">30%</span>{" "}
                      through robust Angular-based design systems
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-500 mt-1">▹</span>
                    <span>
                      Built dynamic applications using ABP Framework and SMACSS
                      for long-term maintainability
                    </span>
                  </li>
                </ul>
              </div>

              {/* Qeema */}
              <div className="border border-gray-800 rounded-2xl p-6 md:p-8 hover:border-emerald-500/50 transition-colors bg-[#1a1a1a]">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-emerald-500">
                      Qeema
                    </h3>
                    <p className="text-gray-400">Senior Front-End Engineer</p>
                  </div>
                  <span className="text-sm text-gray-500 mt-2 md:mt-0">
                    Dec 2022 – Nov 2023
                  </span>
                </div>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex gap-2">
                    <span className="text-emerald-500 mt-1">▹</span>
                    <span>
                      Optimized development workflows for{" "}
                      <span className="text-white font-medium">3+ teams</span>{" "}
                      by migrating projects to Nx Monorepos
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-500 mt-1">▹</span>
                    <span>
                      Reduced server load by{" "}
                      <span className="text-white font-medium">25%</span>{" "}
                      implementing caching strategies with React Query
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-500 mt-1">▹</span>
                    <span>
                      Integrated complex Google Maps API features including
                      clustering and location-based search
                    </span>
                  </li>
                </ul>
              </div>

              {/* Link Development */}
              <div className="border border-gray-800 rounded-2xl p-6 md:p-8 hover:border-emerald-500/50 transition-colors bg-[#1a1a1a]">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-emerald-500">
                      Link Development
                    </h3>
                    <p className="text-gray-400">Senior Front-End Engineer</p>
                  </div>
                  <span className="text-sm text-gray-500 mt-2 md:mt-0">
                    Jul 2022 – Dec 2022
                  </span>
                </div>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex gap-2">
                    <span className="text-emerald-500 mt-1">▹</span>
                    <span>
                      Spearheaded transition to Micro Frontend architecture for{" "}
                      <span className="text-white font-medium">
                        4+ product modules
                      </span>
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-500 mt-1">▹</span>
                    <span>
                      Enabled independent deployment and reduced release cycles
                      significantly
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-500 mt-1">▹</span>
                    <span>
                      Optimized data communication by integrating GraphQL
                      endpoints with Apollo Client
                    </span>
                  </li>
                </ul>
              </div>

              {/* E-bling */}
              <div className="border border-gray-800 rounded-2xl p-6 md:p-8 hover:border-emerald-500/50 transition-colors bg-[#1a1a1a]">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-emerald-500">
                      E-bling
                    </h3>
                    <p className="text-gray-400">Front-End Engineer</p>
                  </div>
                  <span className="text-sm text-gray-500 mt-2 md:mt-0">
                    Oct 2018 – Jun 2022
                  </span>
                </div>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex gap-2">
                    <span className="text-emerald-500 mt-1">▹</span>
                    <span>
                      Boosted organic traffic by{" "}
                      <span className="text-white font-medium">20%</span>{" "}
                      through comprehensive SEO strategy using Next.js
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-500 mt-1">▹</span>
                    <span>
                      Enabled data-driven decision-making by integrating GTM,
                      Facebook Pixel, and TikTok Pixel
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-500 mt-1">▹</span>
                    <span>
                      Collaborated with marketing team to deliver
                      high-converting landing pages with modern animations
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-500 mt-1">▹</span>
                    <span>
                      Engineered interactive B2B Dashboard with real-time data
                      visualization and charts
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="min-h-screen px-6 md:px-12 py-20">
          <div className="max-w-5xl">
            <div className="text-xs text-gray-600 border border-gray-800 px-3 py-1 rounded-full inline-block mb-8">
              C. SKILLS
            </div>

            <h2 className="text-3xl md:text-5xl font-bold mb-12">
              Technical <span className="text-emerald-500">Arsenal</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Core Technologies */}
              <div className="border border-gray-800 rounded-2xl p-6 md:p-8 bg-[#1a1a1a]">
                <h3 className="text-xl font-bold text-emerald-500 mb-4">
                  Core Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "React.js",
                    "Next.js",
                    "Angular",
                    "TypeScript",
                    "JavaScript (ES6+)",
                    "HTML5",
                    "CSS3",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-[#2a2a2a] rounded-full text-sm border border-gray-700 hover:border-emerald-500 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Architecture */}
              <div className="border border-gray-800 rounded-2xl p-6 md:p-8 bg-[#1a1a1a]">
                <h3 className="text-xl font-bold text-emerald-500 mb-4">
                  Architecture
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Micro Frontends",
                    "single-spa",
                    "Nx Monorepos",
                    "GraphQL",
                    "Apollo",
                    "RESTful APIs",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-[#2a2a2a] rounded-full text-sm border border-gray-700 hover:border-emerald-500 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* State Management */}
              <div className="border border-gray-800 rounded-2xl p-6 md:p-8 bg-[#1a1a1a]">
                <h3 className="text-xl font-bold text-emerald-500 mb-4">
                  State & Data Management
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["Redux Toolkit", "React Query", "Zustand", "SWR"].map(
                    (skill) => (
                      <span
                        key={skill}
                        className="px-4 py-2 bg-[#2a2a2a] rounded-full text-sm border border-gray-700 hover:border-emerald-500 transition-colors"
                      >
                        {skill}
                      </span>
                    )
                  )}
                </div>
              </div>

              {/* UI/UX */}
              <div className="border border-gray-800 rounded-2xl p-6 md:p-8 bg-[#1a1a1a]">
                <h3 className="text-xl font-bold text-emerald-500 mb-4">
                  UI/UX Libraries
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Ant Design",
                    "Material UI",
                    "Tailwind CSS",
                    "shadcn/ui",
                    "Styled Components",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-[#2a2a2a] rounded-full text-sm border border-gray-700 hover:border-emerald-500 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Testing & Tools */}
              <div className="border border-gray-800 rounded-2xl p-6 md:p-8 bg-[#1a1a1a] md:col-span-2">
                <h3 className="text-xl font-bold text-emerald-500 mb-4">
                  Testing & Development Tools
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Jest",
                    "React Testing Library",
                    "Webpack",
                    "Git",
                    "ABP Framework",
                    "SMACSS",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-[#2a2a2a] rounded-full text-sm border border-gray-700 hover:border-emerald-500 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="min-h-screen flex items-center px-6 md:px-12 py-20"
        >
          <div className="max-w-4xl w-full">
            <div className="text-xs text-gray-600 border border-gray-800 px-3 py-1 rounded-full inline-block mb-8">
              D. CONTACT
            </div>

            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              Let&apos;s build something{" "}
              <span className="text-emerald-500">amazing</span> together
            </h2>

            <p className="text-gray-400 text-lg mb-12">
              I&apos;m always interested in hearing about new projects and
              opportunities. Whether you have a question or just want to say hi,
              feel free to reach out!
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <a
                href="mailto:ayman.zein.elbehairy@gmail.com"
                className="border border-gray-800 rounded-2xl p-6 bg-[#1a1a1a] hover:border-emerald-500 transition-colors flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-emerald-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold mb-1">Email</h3>
                  <p className="text-sm text-gray-400">
                    ayman.zein.elbehairy@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="tel:+201148131269"
                className="border border-gray-800 rounded-2xl p-6 bg-[#1a1a1a] hover:border-emerald-500 transition-colors flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-emerald-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold mb-1">Phone</h3>
                  <p className="text-sm text-gray-400">+201148131269</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/ayman-zein/"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gray-800 rounded-2xl p-6 bg-[#1a1a1a] hover:border-emerald-500 transition-colors flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-emerald-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold mb-1">LinkedIn</h3>
                  <p className="text-sm text-gray-400">
                    linkedin.com/in/ayman-zein
                  </p>
                </div>
              </a>

              <a
                href="https://github.com/Ayman-Zein/"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gray-800 rounded-2xl p-6 bg-[#1a1a1a] hover:border-emerald-500 transition-colors flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-emerald-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold mb-1">GitHub</h3>
                  <p className="text-sm text-gray-400">github.com/Ayman-Zein</p>
                </div>
              </a>
            </div>

            <div className="text-center">
              <a
                href="/CV/Ayman-Senior-Frontend.pdf"
                download="Ayman-Senior-Frontend.pdf"
                className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-500 hover:bg-emerald-600 rounded-full text-lg font-medium transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Download CV
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-gray-800 px-6 md:px-12 py-8">
          <div className="max-w-5xl flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              © 2026 Ayman Zein. All Rights Reserved
            </p>
            <div className="flex gap-6">
              <a
                href="https://www.linkedin.com/in/ayman-zein/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-emerald-500 transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/Ayman-Zein/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-emerald-500 transition-colors"
              >
                GitHub
              </a>
              <a
                href="mailto:ayman.zein.elbehairy@gmail.com"
                className="text-gray-500 hover:text-emerald-500 transition-colors"
              >
                Email
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
