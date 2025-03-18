import ThemeToggle from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function SheetMenu() {
  const [language, setLanguage] = useState("En");
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="rounded-full h-10" variant="outline">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="px-4">
        <SheetHeader>
          <SheetTitle className="text-xl font-bold">DirectCodes</SheetTitle>
        </SheetHeader>

        <div className="flex flex-col gap-4 py-4">
          <ThemeToggle />

          <Link href="#" className="flex items-center py-2">
            Product page
          </Link>

          <div className="py-2">
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
          </div>

          <Button variant="outline" className="rounded-full">
            Log In
          </Button>

          <Link href="/sign-up" className="mt-2">
            <Button className="w-full bg-gradient-to-br from-0% text-black dark:text-white via-50% to-100% from-purple-500 via-white dark:via-zinc-800 to-orange-500 font-bold rounded-full shadow-lg transform transition duration-300 hover:scale-105">
              Sign Up
            </Button>
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}
