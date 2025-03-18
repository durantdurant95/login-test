"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";

export default function ThemeToggle() {
  const { setTheme } = useTheme();

  return (
    <div className="flex items-center w-22 gap-2 bg-zinc-100 rounded-full p-1">
      <Button
        size="icon"
        className="rounded-full dark:bg-white"
        onClick={() => setTheme("light")}
      >
        <Sun className="w-4 h-4" />
      </Button>
      <Button
        size="icon"
        className="rounded-full dark:bg-black bg-white text-black dark:text-white"
        onClick={() => setTheme("dark")}
      >
        <Moon className="w-4 h-4" />
      </Button>
    </div>
  );
}
