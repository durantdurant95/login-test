"use client";

import { SheetMenu } from "@/components/SheetMenu";
import ThemeToggle from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Lock, Mail } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [language, setLanguage] = useState("En");
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col justify-between w-full p-4">
      {/* Header */}
      <header className="flex items-center justify-between p-4 md:p-6">
        <div className="flex items-center gap-8">
          <SheetMenu />
          <h1 className="text-xl font-bold">DirectCodes</h1>

          {/* Only visible on desktop */}
          <div className="hidden md:flex items-center gap-8">
            <ThemeToggle />
            <Link href="#">Product page</Link>
          </div>
        </div>

        {/* Only visible on desktop */}
        <div className="hidden md:flex items-center gap-4">
          <DropdownMenu
            open={isLanguageDropdownOpen}
            onOpenChange={setIsLanguageDropdownOpen}
          >
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full overflow-hidden flex items-center justify-center bg-red-100 dark:bg-red-900">
                  <span className="text-red-500 dark:text-red-300 text-xs">
                    🇬🇧
                  </span>
                </div>
                {language}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem onClick={() => setLanguage("English")}>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full overflow-hidden flex items-center justify-center bg-red-100 dark:bg-red-900">
                    <span className="text-red-500 dark:text-red-300 text-xs">
                      🇬🇧
                    </span>
                  </div>
                  English
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLanguage("Deutsch")}>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full overflow-hidden flex items-center justify-center bg-yellow-100 dark:bg-yellow-900">
                    <span className="text-yellow-500 dark:text-yellow-300 text-xs">
                      🇩🇪
                    </span>
                  </div>
                  Deutsch
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLanguage("Polish")}>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full overflow-hidden flex items-center justify-center bg-red-100 dark:bg-red-900">
                    <span className="text-red-500 dark:text-red-300 text-xs">
                      🇵🇱
                    </span>
                  </div>
                  Polish
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLanguage("Portugues")}>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full overflow-hidden flex items-center justify-center bg-green-100 dark:bg-green-900">
                    <span className="text-green-500 dark:text-green-300 text-xs">
                      🇵🇹
                    </span>
                  </div>
                  Portugues
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLanguage("Русский")}>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full overflow-hidden flex items-center justify-center bg-blue-100 dark:bg-blue-900">
                    <span className="text-blue-500 dark:text-blue-300 text-xs">
                      🇷🇺
                    </span>
                  </div>
                  Русский
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLanguage("Espanol")}>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full overflow-hidden flex items-center justify-center bg-yellow-100 dark:bg-yellow-900">
                    <span className="text-yellow-500 dark:text-yellow-300 text-xs">
                      🇪🇸
                    </span>
                  </div>
                  Espanol
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button variant="outline" className="rounded-full">
            Log In
          </Button>

          <Link href="/sign-up">
            <Button className="bg-gradient-to-br from-0% text-black dark:text-white via-50% to-100% from-purple-500 via-white dark:via-zinc-800 to-orange-500 font-bold rounded-full shadow-lg transform transition duration-300 hover:scale-105">
              Sign Up
            </Button>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-col items-center">
        {/* Login Form */}
        <div className="md:w-1/2 rounded-2xl flex items-center justify-center p-6 shadow-2xl dark:bg-zinc-800">
          <div className="w-full max-w-md p-8">
            <h2 className="text-2xl font-bold text-center mb-2">
              Welcome Back!
            </h2>
            <p className="text-center text-zinc-500 dark:text-zinc-300 mb-6">
              Welcome Back! Please enter your details.
            </p>

            <form className="space-y-4">
              <div className="relative">
                <Mail className="absolute left-4 top-4 h-5 w-5 text-zinc-400" />
                <Input
                  type="text"
                  placeholder="Email or username"
                  className="pl-10 py-6 bg-[#e0e0e0] dark:bg-zinc-900 border-0 rounded-full"
                />
              </div>

              <div className="relative">
                <Lock className="absolute left-4 top-4 h-5 w-5 text-zinc-400" />
                <Input
                  type="password"
                  placeholder="Password"
                  className="pl-10 py-6 bg-zinc-100 dark:bg-zinc-700 border-0 rounded-full"
                />
              </div>

              <div className="flex items-center justify-between">
                <Link
                  href="#"
                  className="text-sm text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white"
                >
                  Forgot password?
                </Link>
              </div>

              <Button className="w-full py-6 bg-orange-400 hover:bg-orange-500 text-white rounded-full">
                Log In
              </Button>

              <div className="relative flex items-center justify-center">
                <div className="border-t border-zinc-200 dark:border-zinc-600 w-full"></div>
                <span className="bg-white dark:bg-zinc-800 px-2 text-sm text-zinc-500 dark:text-zinc-300 absolute">
                  OR
                </span>
              </div>

              <Button
                variant="outline"
                className="w-full py-6 rounded-full flex items-center justify-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                >
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Continue with Google
              </Button>

              <Button
                variant="outline"
                className="w-full py-6 rounded-full flex items-center justify-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-5 h-5 text-blue-600 fill-current"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                Continue with Facebook
              </Button>

              <p className="text-center text-sm text-zinc-600 dark:text-zinc-300">
                Don&apos;t have an account?{" "}
                <Link
                  href="/sign-up"
                  className="text-black dark:text-white font-medium"
                >
                  Create new Account
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="p-6 flex flex-col md:flex-row justify-between items-center">
        <div className="flex gap-6 mb-4 md:mb-0">
          <Link
            href="#"
            className="text-sm text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white"
          >
            Terms & Conditions
          </Link>
          <Link
            href="#"
            className="text-sm text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white"
          >
            Privacy Policy
          </Link>
          <Link
            href="#"
            className="text-sm text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white"
          >
            Contact us
          </Link>
        </div>

        <div className="flex items-center w-full max-w-md">
          <div className="relative flex-1">
            <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-zinc-400" />
            <Input
              type="email"
              placeholder="E-mail address"
              className="pl-12 py-3 bg-zinc-100 dark:bg-zinc-700 border-0 rounded-full w-full"
            />
            <Button className="absolute right-0 top-0 h-full py-3 px-6 rounded-full bg-zinc-900 dark:bg-zinc-700 text-white hover:bg-zinc-800 dark:hover:bg-zinc-600">
              Subscribe
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
}
