import { motion } from "framer-motion";
import cafeInterior from "@/assets/cafe-interior.jpg";
import baristaPour from "@/assets/barista-pour.jpg";
import coffeeBeans from "@/assets/coffee-beans.jpg";
import cafeCorner from "@/assets/cafe-corner.jpg";

const galleryItems = [
  {
    image: baristaPour,
    alt: "Barista crafting latte art",
    caption: "Crafted",
    subtitle: "with intention",
  },
  {
    image: coffeeBeans,
    alt: "Fresh roasted coffee beans",
    caption: "Sourced",
    subtitle: "with care",
  },
  {
    image: cafeCorner,
    alt: "Cozy reading corner",
    caption: "Designed",
    subtitle: "for you",
  },
];

const AmbienceSection = () => {
  return (
    <section className="py-10 md:py-16 bg-background overflow-hidden">
      {/* Hero Image - Full Width */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        className="relative w-full h-[40vh] sm:h-[50vh] md:h-[70vh] mb-6 md:mb-8"
      >
        <img
          src={cafeInterior}
          alt="Brewline Café warm interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
        
        {/* Centered text overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-center px-4"
          >
            <p className="font-display text-lg sm:text-xl md:text-2xl text-primary-foreground/80 tracking-wide mb-2">
              More than coffee
            </p>
            <h3 className="font-display text-2xl sm:text-3xl md:text-5xl text-primary-foreground font-medium">
              A moment to breathe
            </h3>
          </motion.div>
        </div>
      </motion.div>

      {/* Gallery Grid */}
      <div className="container mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.caption}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative aspect-[4/3] sm:aspect-square rounded-2xl md:rounded-3xl overflow-hidden group cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-coffee-dark/70 via-coffee-dark/20 to-transparent" />
              
              {/* Text overlay - centered and minimal */}
              <div className="absolute inset-0 flex flex-col items-center justify-end pb-6 md:pb-8 px-4">
                <p className="font-display text-xl md:text-2xl text-primary-foreground font-medium tracking-wide">
                  {item.caption}
                </p>
                <p className="font-body text-sm md:text-base text-primary-foreground/70 tracking-wider uppercase mt-1">
                  {item.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AmbienceSection;
