"use client";
import { useState, useEffect } from "react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState<string | null>(null);

  useEffect(() => {
    // Check if the user has a saved theme in localStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    } else {
      // Set default theme based on system preference
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setTheme(prefersDark ? "dark" : "light");
      document.documentElement.classList.toggle("dark", prefersDark);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  return (
    <>
      <div className="flex items-center space-x-2 ">
        <Switch
          className="dark:bg-white"
          onClick={toggleTheme}
          id="theme-mode"
        />
        <Label className="lg:hidden dark:text-white" htmlFor="theme-mode">
          Toggle to {theme === "dark" ? "Light" : "Dark"} Mode
        </Label>
        <Label className="hidden lg:flex dark:text-white" htmlFor="theme-mode">
          {theme === "dark" ? "Light" : "Dark"} Mode
        </Label>
      </div>
    </>
  );
}
