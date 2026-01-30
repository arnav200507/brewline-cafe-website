import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import flatwhite from "@/assets/flatwhite.jpg";
import cappuccino from "@/assets/cappuccino.jpg";
import icedLatte from "@/assets/iced-latte.jpg";
import espresso from "@/assets/espresso.jpg";
import matchaLatte from "@/assets/matcha-latte.jpg";
import hotChocolate from "@/assets/hot-chocolate.jpg";

const drinks = [
  {
    image: espresso,
    name: "Espresso",
    price: "$3.50",
    bgColor: "bg-[hsl(25_30%_92%)]",
  },
  {
    image: flatwhite,
    name: "Flat White",
    price: "$4.50",
    bgColor: "bg-[hsl(35_35%_93%)]",
  },
  {
    image: cappuccino,
    name: "Cappuccino",
    price: "$4.00",
    bgColor: "bg-[hsl(30_25%_91%)]",
  },
  {
    image: icedLatte,
    name: "Iced Caramel Latte",
    price: "$5.50",
    bgColor: "bg-[hsl(32_40%_94%)]",
  },
  {
    image: matchaLatte,
    name: "Matcha Latte",
    price: "$5.00",
    bgColor: "bg-[hsl(80_20%_92%)]",
  },
  {
    image: hotChocolate,
    name: "Hot Chocolate",
    price: "$4.50",
    bgColor: "bg-[hsl(20_30%_92%)]",
  },
];

const DrinkCard = ({
  image,
  name,
  price,
  bgColor,
  index,
}: {
  image: string;
  name: string;
  price: string;
  bgColor: string;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.08,
        ease: [0.25, 0.1, 0.25, 1]
      }}
      whileHover={{ y: -4, transition: { duration: 0.25 } }}
      className={`group ${bgColor} rounded-2xl md:rounded-3xl overflow-hidden shadow-soft active:scale-[0.98] transition-shadow duration-300`}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden aspect-square p-3 md:p-4">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-xl md:rounded-2xl transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="px-3 md:px-5 pb-4 md:pb-5 pt-0 flex items-center justify-between gap-2">
        <h3 className="font-display text-sm md:text-lg font-semibold text-foreground leading-tight">
          {name}
        </h3>
        <span className="font-display text-sm md:text-lg font-bold text-accent whitespace-nowrap">
          {price}
        </span>
      </div>
    </motion.div>
  );
};

const DrinksSection = () => {
  return (
    <section id="drinks" className="py-14 md:py-20 bg-background relative">
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-[300px] md:w-[600px] h-[200px] md:h-[400px] bg-caramel/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center max-w-2xl mx-auto mb-10 md:mb-14"
        >
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-4">
            Our Drinks
          </h2>
          <p className="font-body text-base md:text-lg text-muted-foreground px-2">
            Handcrafted beverages made with care, using the finest ingredients and a whole lot of love.
          </p>
        </motion.div>

        {/* Drinks Grid - Single column on smallest screens, 2 on mobile, scales up */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-6">
          {drinks.map((drink, index) => (
            <DrinkCard key={drink.name} {...drink} index={index} />
          ))}
        </div>

        {/* View Full Menu Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-10 md:mt-12"
        >
          <a
            href="#menu"
            className="inline-flex items-center gap-2 font-body text-base md:text-lg font-medium text-primary hover:text-accent transition-colors group py-2"
          >
            View Full Menu
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default DrinksSection;
