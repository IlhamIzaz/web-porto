"use client";

import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";
import { Sun, Moon } from "lucide-react";

const emptySubscribe = () => () => {};

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(emptySubscribe, () => true, () => false);

  if (!mounted) {
    return (
      <div className="w-9 h-9 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/60 flex items-center justify-center opacity-60">
        <span className="w-4 h-4" />
      </div>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle visual theme"
      className="w-9 h-9 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-100 hover:bg-zinc-200/80 dark:bg-zinc-900/70 dark:hover:bg-zinc-800 transition-colors flex items-center justify-center text-zinc-700 dark:text-zinc-300 cursor-pointer"
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? (
        <Sun className="w-4 h-4 text-amber-400 transition-transform hover:rotate-45" />
      ) : (
        <Moon className="w-4 h-4 text-zinc-700 transition-transform hover:-rotate-12" />
      )}
    </button>
  );
}
