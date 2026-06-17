"use client";

import React from "react";
import ThemeSwitcher from "../../ThemeSwitcher.tsx";
import MenuButton from "../../components/MenuButton.tsx";

export default function Integration() {
  return (
    <main className="w-full min-h-screen bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 flex flex-col items-center">
      <div id="menuContainer" className="relative w-full flex justify-end">
        <MenuButton onMenuClick={() => undefined} />
        <div className="absolute top-0 right-16 z-20 mt-5 mr-5">
          <ThemeSwitcher />
        </div>
      </div>
      <section className="w-full max-w-3xl px-6 py-24">
        <p className="text-sm font-semibold text-red-500 mb-3">
          Jivan Karlapudi
        </p>
        <h1 className="text-4xl 3xs:text-5xl font-bold mb-5">
          Full Stack Developer
        </h1>
        <p className="text-lg leading-relaxed text-neutral-600 dark:text-neutral-300 mb-8">
          I build responsive React interfaces and Java Spring Boot REST APIs,
          with a focus on clean integration, MySQL-backed data flows, and
          maintainable project structure.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="mailto:jivank1110@gmail.com"
            className="rounded-xl bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900 px-5 py-3 font-medium hover:opacity-90 transition-opacity"
          >
            Email Me
          </a>
          <a
            href="https://github.com/jivank111"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-neutral-200 dark:bg-neutral-800 px-5 py-3 font-medium hover:opacity-90 transition-opacity"
          >
            GitHub
          </a>
        </div>
      </section>
    </main>
  );
}
