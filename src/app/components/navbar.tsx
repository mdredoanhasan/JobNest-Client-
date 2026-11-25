"use client";

import Link from "next/link";
import { ChevronUp, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const links = [
  { label: "Jobs", href: "/jobs" },
  { label: "Fields", href: "/fields" },
  { label: "Why JobNest", href: "/#why-jobnest" },
  { label: "How it works", href: "/#how-it-works" },
];

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5">
      <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-slate-100 shadow-inner">
        <ChevronUp className="h-5 w-5" strokeWidth={2.5} />
      </span>
      <span className="text-[17px] font-bold tracking-tight text-white">
        JobNest
      </span>
    </Link>
  );
}

export default function Navbar() {
  return (
    <header className="sticky pl-80 top-0 z-50 w-full border-b border-white/10 bg-linear-to-r from-slate-900/70 via-slate-800/60 to-slate-700/50 backdrop-blur-xl supports-[backdrop-filter]:bg-slate-900/50">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="text-sm font-medium text-slate-200 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 rounded-sm"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop actions */}
        <div className="hidden items-center gap-3 md:flex">
          <Button
            variant="outline"
            className="rounded-xl border-slate-500/60 bg-slate-900/40 px-5 text-slate-100 hover:bg-slate-800/70 hover:text-white"
          >
            <Link href="/sign-in">Sign in</Link>
          </Button>
          <Button
            
            className="rounded-xl bg-slate-400/80 px-5 text-white hover:bg-slate-300/90"
          >
            <Link href="/get-started">Get started</Link>
          </Button>
        </div>

        {/* Mobile menu */}
        <Sheet>
          <SheetTrigger >
            <Button
              variant="ghost"
              size="icon"
              className="text-slate-100 hover:bg-white/10 hover:text-white md:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-72 border-white/10 bg-slate-900/80 backdrop-blur-xl"
          >
            <SheetTitle className="sr-only">Menu</SheetTitle>
            <div className="mt-8 flex flex-col gap-5">
              {links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-base font-medium text-slate-200 hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-4 flex flex-col gap-3">
                <Button
                  variant="outline"
                  className="rounded-xl border-slate-500/60 bg-slate-900/40 text-slate-100 hover:bg-slate-800/70 hover:text-white"
                >
                  <Link href="/sign-in">Sign in</Link>
                </Button>
                <Button
                  className="rounded-xl bg-slate-400/80 text-white hover:bg-slate-300/90"
                >
                  <Link href="/get-started">Get started</Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}