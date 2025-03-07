
import { Link } from "react-router-dom";
import { GraduationCap, Twitter, Facebook, Instagram, Linkedin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-secondary pt-16 pb-8 border-t">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 text-primary">
              <GraduationCap className="w-7 h-7" />
              <span className="font-display font-bold text-lg">CourseWise</span>
            </Link>
            <p className="text-muted-foreground text-sm mt-4 max-w-xs">
              Transforming education with high-quality courses designed for optimal learning and career growth.
            </p>
            <div className="flex space-x-4 pt-2">
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                <Linkedin className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/courses" className="text-muted-foreground hover:text-foreground text-sm transition">
                  All Courses
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-muted-foreground hover:text-foreground text-sm transition">
                  Learning Blog
                </Link>
              </li>
              <li>
                <Link to="/help" className="text-muted-foreground hover:text-foreground text-sm transition">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/tutorials" className="text-muted-foreground hover:text-foreground text-sm transition">
                  Tutorials
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-foreground text-sm transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-muted-foreground hover:text-foreground text-sm transition">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/partners" className="text-muted-foreground hover:text-foreground text-sm transition">
                  Partners
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-foreground text-sm transition">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Stay Updated</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Subscribe to our newsletter for the latest course releases and educational insights.
            </p>
            <div className="flex">
              <Input 
                type="email" 
                placeholder="Email address" 
                className="rounded-r-none"
              />
              <Button className="rounded-l-none">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} CourseWise. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4 md:gap-6 justify-center">
            <Link to="/terms" className="text-muted-foreground hover:text-foreground text-sm transition">
              Terms
            </Link>
            <Link to="/privacy" className="text-muted-foreground hover:text-foreground text-sm transition">
              Privacy
            </Link>
            <Link to="/cookies" className="text-muted-foreground hover:text-foreground text-sm transition">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
