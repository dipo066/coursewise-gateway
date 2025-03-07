
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  GraduationCap, 
  MenuIcon, 
  Search, 
  X,
  BookOpen,
  BarChart,
  User 
} from "lucide-react";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "py-3 bg-white/80 backdrop-blur-md dark:bg-gray-900/80 shadow-sm" 
          : "py-4 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link 
          to="/" 
          className="flex items-center gap-2 text-primary"
        >
          <GraduationCap className="w-8 h-8" />
          <span className="font-display font-bold text-xl tracking-tight">CourseWise</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          <Link 
            to="/courses" 
            className={`px-4 py-2 rounded-md transition-colors ${
              isActive("/courses") 
                ? "text-primary font-semibold" 
                : "text-foreground/80 hover:text-foreground hover:bg-muted"
            }`}
          >
            Courses
          </Link>
          <Link 
            to="/dashboard" 
            className={`px-4 py-2 rounded-md transition-colors ${
              isActive("/dashboard") 
                ? "text-primary font-semibold" 
                : "text-foreground/80 hover:text-foreground hover:bg-muted"
            }`}
          >
            Dashboard
          </Link>
          <Link 
            to="/about" 
            className={`px-4 py-2 rounded-md transition-colors ${
              isActive("/about") 
                ? "text-primary font-semibold" 
                : "text-foreground/80 hover:text-foreground hover:bg-muted"
            }`}
          >
            About
          </Link>
        </nav>

        {/* Search & Login Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="text-muted-foreground">
            <Search className="h-5 w-5" />
          </Button>
          <Link to="/login">
            <Button variant="outline" size="sm">Log in</Button>
          </Link>
          <Link to="/signup">
            <Button size="sm">Sign up</Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <MenuIcon className="h-6 w-6" />
          )}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b animate-fade-in">
          <div className="container mx-auto p-4 flex flex-col space-y-4">
            <Link 
              to="/courses" 
              className="flex items-center gap-2 p-3 rounded-md hover:bg-muted"
            >
              <BookOpen className="h-5 w-5" />
              <span>Courses</span>
            </Link>
            <Link 
              to="/dashboard" 
              className="flex items-center gap-2 p-3 rounded-md hover:bg-muted"
            >
              <BarChart className="h-5 w-5" />
              <span>Dashboard</span>
            </Link>
            <Link 
              to="/about" 
              className="flex items-center gap-2 p-3 rounded-md hover:bg-muted"
            >
              <User className="h-5 w-5" />
              <span>About</span>
            </Link>
            <div className="pt-2 flex flex-col space-y-2">
              <Link to="/login">
                <Button variant="outline" className="w-full">Log in</Button>
              </Link>
              <Link to="/signup">
                <Button className="w-full">Sign up</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
