import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Menu", href: "#drinks" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#visit" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-soft border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => scrollToSection(e, "#home")}
            className="flex items-center gap-1.5"
          >
            <span className="font-display text-2xl md:text-3xl font-bold text-primary">
              Brewline
            </span>
            <span className="font-display text-lg md:text-xl text-coffee-light">
              Café
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="font-body font-medium text-foreground hover:text-accent transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
            <Button
              variant="hero"
              size="default"
              onClick={() => {
                const element = document.querySelector("#visit");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Visit Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground rounded-full hover:bg-secondary transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden bg-background/95 backdrop-blur-md rounded-2xl mb-4 shadow-card"
            >
              <div className="py-4 px-4 space-y-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="block font-body font-medium text-foreground hover:text-accent hover:bg-secondary transition-colors duration-200 py-3 px-4 rounded-xl"
                  >
                    {link.name}
                  </a>
                ))}
                <Button
                  variant="hero"
                  size="lg"
                  className="w-full mt-2"
                  onClick={() => {
                    const element = document.querySelector("#visit");
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                    setIsOpen(false);
                  }}
                >
                  Visit Us
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
