import { Link } from "react-router-dom";
import { CitySearch } from "./City-search";
import { ThemeToggle } from "./Theme-toggle";
import { useTheme } from "../context/theme-provider";

export function Header() {
  const { theme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 py-2">
      <div className="container mx-auto flex h-16 items-center justify-between gap-4 px-4">
        <Link to={"/"} className="flex-shrink-0">
          <img
            src={theme === "dark" ? "/logoDark.png" : "/logoWhite.png"}
            alt="Live Weather"
            className="h-12 sm:h-14"
          />
        </Link>

        <div className="flex items-center gap-2 sm:gap-4">
          <div className="w-full sm:w-auto">
            <CitySearch />
          </div>
          <div className="flex-shrink-0">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
