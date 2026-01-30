import { MapPin, Phone, Clock, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground py-10 md:py-16">
      <div className="container mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a href="#home" className="inline-block mb-3 md:mb-4">
              <span className="font-display text-xl md:text-3xl font-bold">
                Brewline
              </span>
              <span className="font-display text-base md:text-xl opacity-70 ml-1.5 md:ml-2">
                Café
              </span>
            </a>
            <p className="font-body text-sm md:text-base text-primary-foreground/80 leading-relaxed">
              Crafting exceptional coffee experiences since 2018. Every cup tells a story.
            </p>
          </div>

          {/* Location */}
          <div>
            <h4 className="font-display text-base md:text-lg font-semibold mb-3 md:mb-4">Visit Us</h4>
            <div className="space-y-2 md:space-y-3">
              <div className="flex items-start gap-2 md:gap-3">
                <MapPin className="w-4 h-4 md:w-5 md:h-5 mt-0.5 opacity-70 flex-shrink-0" />
                <p className="font-body text-sm md:text-base text-primary-foreground/80">
                  24, Cedar Lane, Bandra West,<br />
                  Mumbai – 400050, India
                </p>
              </div>
              <div className="flex items-center gap-2 md:gap-3">
                <Phone className="w-4 h-4 md:w-5 md:h-5 opacity-70 flex-shrink-0" />
                <p className="font-body text-sm md:text-base text-primary-foreground/80">
                  +91 98765 43210
                </p>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-display text-base md:text-lg font-semibold mb-3 md:mb-4">Hours</h4>
            <div className="flex items-start gap-2 md:gap-3">
              <Clock className="w-4 h-4 md:w-5 md:h-5 mt-0.5 opacity-70 flex-shrink-0" />
              <div className="font-body text-sm md:text-base text-primary-foreground/80 space-y-0.5 md:space-y-1">
                <p>Mon – Fri: 8:00 AM – 10:00 PM</p>
                <p>Sat – Sun: 9:00 AM – 11:00 PM</p>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display text-base md:text-lg font-semibold mb-3 md:mb-4">Follow Us</h4>
            <div className="flex gap-3 md:gap-4">
              <a
                href="#"
                className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 active:bg-primary-foreground/30 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 active:bg-primary-foreground/30 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 md:mt-12 pt-6 md:pt-8 border-t border-primary-foreground/10">
          <p className="font-body text-xs md:text-sm text-primary-foreground/60 text-center">
            © 2025 Brewline Café. All rights reserved. Made with ☕ and ❤️
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
