import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroCoffee from "@/assets/hero-coffee.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-[90vh] md:min-h-screen pt-20 md:pt-24 overflow-hidden bg-gradient-hero"
    >
      {/* Organic Shape Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -right-1/4 top-1/4 w-[300px] h-[300px] md:w-[800px] md:h-[800px] rounded-full bg-caramel/10 blur-3xl" />
        <div className="absolute -left-1/4 bottom-0 w-[250px] h-[250px] md:w-[500px] md:h-[500px] rounded-full bg-blush/30 blur-3xl" />
        <div className="absolute right-1/4 bottom-1/4 w-[150px] h-[150px] md:w-[300px] md:h-[300px] rounded-full bg-cream-dark/50 blur-2xl" />
      </div>

      <div className="container mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 min-h-[calc(100vh-5rem)] py-8 lg:py-0">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex-1 text-center lg:text-left order-2 lg:order-1"
          >
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-foreground leading-[1.1] mb-3 md:mb-4">
              Brewline
              <span className="block text-primary">Café</span>
            </h1>
            <p className="font-display text-lg sm:text-xl md:text-2xl lg:text-3xl text-coffee-light font-medium mb-4 md:mb-6">
              Crafted coffee. Calm moments.
            </p>
            <p className="font-body text-base md:text-lg lg:text-xl text-muted-foreground max-w-md mx-auto lg:mx-0 mb-8 md:mb-10 leading-relaxed">
              A modern café serving thoughtfully brewed coffee and handcrafted drinks in a warm, welcoming space.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <Button
                variant="hero"
                size="lg"
                className="w-full sm:w-auto min-h-[52px] text-base"
                onClick={() => scrollToSection("#drinks")}
              >
                View Menu
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto min-h-[52px] text-base"
                onClick={() => scrollToSection("#visit")}
              >
                Visit Us
              </Button>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex-1 relative order-1 lg:order-2 w-full max-w-[280px] sm:max-w-sm md:max-w-md lg:max-w-xl"
          >
            <div className="relative w-full mx-auto">
              {/* Decorative rings - hidden on mobile for cleaner look */}
              <div className="hidden md:block absolute inset-0 -m-8 rounded-full border-2 border-caramel/20" />
              <div className="hidden md:block absolute inset-0 -m-16 rounded-full border border-caramel/10" />
              
              {/* Main Image */}
              <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-card md:shadow-elevated">
                <img
                  src={heroCoffee}
                  alt="Artisan latte with beautiful latte art"
                  className="w-full h-auto object-cover aspect-[4/3]"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-coffee-dark/20 to-transparent" />
              </div>

              {/* Floating badge - smaller on mobile */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                className="absolute -bottom-3 -left-2 md:-bottom-6 md:-left-6 bg-card rounded-xl md:rounded-2xl p-3 md:p-6 shadow-card"
              >
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-caramel/20 flex items-center justify-center">
                    <span className="text-xl md:text-3xl">☕</span>
                  </div>
                  <div>
                    <p className="font-display text-base md:text-xl font-semibold text-foreground">
                      100%
                    </p>
                    <p className="font-body text-xs md:text-sm text-muted-foreground">
                      Arabica Beans
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
