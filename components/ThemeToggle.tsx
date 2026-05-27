"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ModeToggle() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className="relative inline-flex h-8 w-8 items-center justify-center border border-[var(--color-border-strong)] bg-transparent text-[var(--color-text-primary)] transition hover:bg-[var(--color-primary)]/5 focus:outline-none focus-visible:ring-1 focus-visible:ring-[var(--color-primary)]/40"
        aria-label="Select theme"
        style={{ borderRadius: 0 }}
      >
        <Sun className="h-[1rem] w-[1rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
        <Moon className="absolute h-[1rem] w-[1rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
        <span className="sr-only">Toggle theme</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        style={{ borderRadius: 0 }}
        className="border-[var(--color-border-strong)] bg-[var(--color-bg)]"
      >
        <DropdownMenuItem
          onClick={() => setTheme("light")}
          className="font-mono text-[10px] uppercase tracking-[0.1em]"
        >
          Light
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("dark")}
          className="font-mono text-[10px] uppercase tracking-[0.1em]"
        >
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("system")}
          className="font-mono text-[10px] uppercase tracking-[0.1em]"
        >
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
