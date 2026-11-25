
import { Bell, Bookmark, CircleCheck, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const quickFilters = ["Remote", "Internship", "Part-time", "Fresh graduate"];

export default function Hero() {
 
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-slate-800 via-slate-700 to-slate-600 text-white">
      {/* soft light patch, top right */}
      <div className="pointer-events-none absolute -top-24 right-0 h-96 w-96 rounded-full bg-slate-400/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pb-32 pt-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:pb-40 lg:pt-20">
        {/* Left column */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-slate-900/30 px-3 py-1 text-xs font-medium text-slate-200">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-300" />
            Every job is admin-verified
          </span>

          <h1 className="mt-6 text-5xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl">
            Your next job is already in the{" "}
            <span className="text-slate-400">nest</span>.
          </h1>

          <p className="mt-6 max-w-md text-base leading-relaxed text-slate-300">
            Teaching, tech, banking, design, healthcare and more. One place to
            find real jobs, or the right person for your team.
          </p>

          {/* Search */}
          <form
            className="mt-8 flex max-w-xl items-stretch gap-2 rounded-2xl border border-white/10 bg-slate-900/25 p-2 backdrop-blur-sm"
          >
            <div className="flex-1 px-3 py-1">
              <label
                htmlFor="hero-keyword"
                className="block text-[11px] font-semibold text-sky-300"
              >
                Job or keyword
              </label>
              <Input
                id="hero-keyword"
                placeholder="Frontend developer"
                className="h-7 border-0 bg-transparent p-0 text-sm text-white shadow-none placeholder:text-slate-400 focus-visible:ring-0"
              />
            </div>

            <div className="my-1 w-px bg-white/15" />

            <div className="flex-1 px-3 py-1">
              <label
                htmlFor="hero-location"
                className="block text-[11px] font-semibold text-sky-300"
              >
                Location
              </label>
              <Input
                id="hero-location"
                placeholder="Dhaka"
                className="h-7 border-0 bg-transparent p-0 text-sm text-white shadow-none placeholder:text-slate-400 focus-visible:ring-0"
              />
            </div>

            <Button
              type="submit"
              className="h-auto rounded-xl bg-slate-400/80 px-6 text-white hover:bg-slate-300/90"
            >
              <Search className="mr-1.5 h-4 w-4 sm:hidden" />
              Search
            </Button>
          </form>

          {/* Quick filters */}
          <div className="mt-5 flex flex-wrap gap-2">
            {quickFilters.map((filter) => (
              <Badge
                key={filter}
                variant="outline"
                className="cursor-pointer rounded-full border-slate-400/50 bg-slate-900/20 px-3 py-1 text-xs font-medium text-slate-200 hover:bg-slate-800/60"
              >
                <button
                  type="button"
                >
                  {filter}
                </button>
              </Badge>
            ))}
          </div>

          {/* Social proof */}
          <div className="mt-8 flex items-center gap-4">
            <div className="flex -space-x-3">
              {[0, 1, 2, 3].map((i) => (
                <Avatar
                  key={i}
                  className="h-9 w-9 border-2 border-slate-700 bg-slate-300"
                >
                  <AvatarFallback className="bg-slate-300 text-slate-600">
                    <User className="h-4 w-4" />
                  </AvatarFallback>
                </Avatar>
              ))}
            </div>
            <p className="max-w-45 text-xs leading-snug text-slate-300">
              Seekers, recruiters and admins, all in one nest.
            </p>
          </div>
        </div>

        {/* Right column: floating cards (hidden on small screens) */}
        <div className="relative hidden h-110 lg:block">
          {/* Job card */}
          <div className="absolute right-12 top-4 w-85 rotate-[-4deg] rounded-2xl bg-white p-4 shadow-2xl">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-800 text-sm font-bold text-white">
                N
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-bold text-slate-900">
                  Frontend Developer
                </p>
                <p className="text-xs text-slate-500">Northwind Labs · Dhaka</p>
              </div>
              <Badge className="rounded-full bg-slate-400/70 px-2.5 text-[10px] font-semibold text-slate-800 hover:bg-slate-400/70">
                Featured
              </Badge>
            </div>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {["Full-time", "Hybrid", "৳60k – 90k"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-md bg-slate-200 px-2 py-0.5 text-[11px] font-medium text-slate-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <button
            type="button"
            aria-label="Save job"
            className="absolute right-0 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-slate-300 text-slate-700 shadow-lg transition-colors hover:bg-slate-200"
          >
            <Bookmark className="h-4 w-4" />
          </button>

          {/* Application card */}
          <div className="absolute right-0 top-40 w-52 rotate-[4deg] rounded-2xl border border-white/10 bg-slate-600/80 p-4 shadow-2xl backdrop-blur-md">
            <p className="text-[11px] text-slate-300">Your application</p>
            <p className="mt-1 text-sm font-bold text-white">
              Product Designer
            </p>
            <span className="mt-2 inline-block rounded-md bg-slate-400/70 px-2 py-0.5 text-[11px] font-semibold text-slate-900">
              Shortlisted
            </span>
          </div>

          {/* Approved pill */}
          <div className="absolute bottom-24 left-4 flex rotate-[-4deg] items-center gap-2 rounded-2xl bg-slate-500/70 px-4 py-3 shadow-2xl backdrop-blur-md">
            <CircleCheck className="h-5 w-5 text-slate-200" />
            <span className="text-sm font-semibold text-white">
              Approved by admin
            </span>
          </div>

          {/* Notification pill */}
          <div className="absolute bottom-28 right-6 flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 shadow-xl">
            <Bell className="h-4 w-4 text-slate-600" />
            <span className="text-xs font-semibold text-slate-800">
              New jobs in Design
            </span>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <svg
        className="absolute inset-x-0 bottom-0 h-16 w-full text-slate-300"
        viewBox="0 0 1440 64"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          d="M0 32C240 0 480 0 720 24s480 32 720 8v32H0z"
        />
      </svg>
    </section>
  );
}