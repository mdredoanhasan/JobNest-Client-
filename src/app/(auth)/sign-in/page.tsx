"use client";

import { useState } from "react";
import { ChevronUp, Eye, EyeOff } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import Image from "next/image";

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M23.5 12.27c0-.85-.08-1.67-.22-2.45H12v4.64h6.45a5.52 5.52 0 0 1-2.4 3.62v3h3.88c2.27-2.09 3.57-5.17 3.57-8.81Z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.95-1.07 7.93-2.91l-3.88-3a7.2 7.2 0 0 1-10.7-3.78H1.38v3.09A12 12 0 0 0 12 24Z"
      />
      <path
        fill="#FBBC05"
        d="M5.35 14.31a7.2 7.2 0 0 1 0-4.62V6.6H1.38a12 12 0 0 0 0 10.8l3.97-3.09Z"
      />
      <path
        fill="#EA4335"
        d="M12 4.75c1.76 0 3.34.61 4.59 1.8l3.44-3.44A11.5 11.5 0 0 0 12 0 12 12 0 0 0 1.38 6.6l3.97 3.09A7.15 7.15 0 0 1 12 4.75Z"
      />
    </svg>
  );
}

export default function SigninPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Connect this to your auth provider.
  // NextAuth:  signIn("google", { callbackUrl: "/dashboard" })
  // Firebase:  signInWithPopup(auth, new GoogleAuthProvider())
  // Supabase:  supabase.auth.signInWithOAuth({ provider: "google" })
  const handleGoogleSignIn = async () => {
    setLoading(true);
    try {
      // await signIn("google", { callbackUrl: "/dashboard" })
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    const form = new FormData(e.currentTarget);
    const payload = {
      email: form.get("email"),
      password: form.get("password"),
      remember,
    };
    setLoading(true);
    try {
      // const res = await fetch("/api/auth/signin", { method: "POST", body: JSON.stringify(payload) })
      // if (!res.ok) throw new Error("Wrong email or password. Try again.")
      console.log(payload);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Could not sign in. Try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-linear-to-br  from-slate-800 via-slate-700 to-slate-600 font-serif text-slate-100">
      {/* Top bar */}
      <header className="border-b border-white/10">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-3">
            <span className="grid size-9 place-items-center rounded-xl border border-white/15 bg-white/5">
              <Image
                src="/logo/logo.png"
                width={24}
                height={24}
                alt="JobNest Logo"
                className="h-6 w-6"
              />
            </span>
            <span className="text-lg font-bold tracking-tight">JobNest</span>
          </Link>
          <p className="text-sm text-slate-300">
            New to JobNest?{" "}
            <a
              href="/sign-up"
              className="font-semibold text-white underline underline-offset-4"
            >
              Create an account
            </a>
          </p>
        </div>
      </header>

      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-12 lg:grid-cols-[1fr_440px] lg:items-center lg:py-20">
        {/* Left: message */}
        <section className="hidden lg:block">
          <h1 className="text-5xl font-bold leading-[1.1] tracking-tight">
            Welcome back
            <br />
            to the <span className="text-[#8a9bb8]">nest.</span>
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-slate-300">
            Pick up where you left off: check your applications, review
            candidates, or see new jobs in your field.
          </p>
        </section>

        {/* Right: form */}
        <section className="rounded-2xl border border-white/10 bg-[#18233a]/85 p-6 shadow-2xl backdrop-blur sm:p-8">
          <h2 className="text-2xl font-bold">Sign in</h2>
          <p className="mt-1 text-sm text-slate-400">
            Use the account you signed up with.
          </p>

          <Button
            type="button"
            variant="outline"
            onClick={handleGoogleSignIn}
            disabled={loading}
            className="mt-6 h-11 w-full gap-3 border-white/20 bg-[#1b2740] text-white hover:bg-[#223050] hover:text-white"
          >
            <GoogleIcon />
            Sign in with Google
          </Button>

          <div className="my-6 flex items-center gap-4">
            <Separator className="flex-1 bg-white/10" />
            <span className="text-xs text-slate-400">or use your email</span>
            <Separator className="flex-1 bg-white/10" />
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="you@example.com"
                className="h-11 border-white/10 bg-[#1b2740] placeholder:text-slate-500"
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <a
                  href="/forgot-password"
                  className="text-sm text-slate-300 underline underline-offset-4 hover:text-white"
                >
                  Forgot password?
                </a>
              </div>
              <div className="relative">
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  autoComplete="current-password"
                  placeholder="Your password"
                  className="h-11 border-white/10 bg-[#1b2740] pr-11 placeholder:text-slate-500"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((s) => !s)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="absolute inset-y-0 right-0 grid w-11 place-items-center text-slate-400 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7d8fae]"
                >
                  {showPassword ? (
                    <EyeOff className="size-4" />
                  ) : (
                    <Eye className="size-4" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Checkbox
                id="remember"
                checked={remember}
                onCheckedChange={(c) => setRemember(c === true)}
                className="border-white/30 data-[state=checked]:border-[#7d8fae] data-[state=checked]:bg-[#7d8fae] data-[state=checked]:text-white"
              />
              <Label
                htmlFor="remember"
                className="text-sm font-normal text-slate-300"
              >
                Keep me signed in
              </Label>
            </div>

            {error && (
              <p
                role="alert"
                className="rounded-lg border border-red-400/30 bg-red-500/10 px-3 py-2 text-sm text-red-300"
              >
                {error}
              </p>
            )}

            <Button
              type="submit"
              disabled={loading}
              className="h-11 w-full bg-[#7d8fae] text-base font-semibold text-white hover:bg-[#8c9dba] disabled:opacity-50"
            >
              Sign in
            </Button>
          </form>
        </section>
      </div>
    </main>
  );
}
