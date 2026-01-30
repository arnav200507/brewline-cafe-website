import { motion } from "framer-motion";
import MenuCard from "./MenuCard";
import flatwhite from "@/assets/flatwhite.jpg";
import cappuccino from "@/assets/cappuccino.jpg";
import icedLatte from "@/assets/iced-latte.jpg";
import croissant from "@/assets/croissant.jpg";

const menuItems = [
  {
    image: flatwhite,
    name: "Flat White",
    description: "Silky smooth microfoam over a double shot of our house espresso.",
    price: "$4.50",
  },
  {
    image: cappuccino,
    name: "Cappuccino",
    description: "Classic Italian espresso with perfectly frothed milk and cocoa dusting.",
    price: "$4.00",
  },
  {
    image: icedLatte,
    name: "Caramel Iced Latte",
    description: "Chilled espresso with creamy milk and house-made caramel drizzle.",
    price: "$5.50",
  },
  {
    image: croissant,
    name: "Butter Croissant",
    description: "Flaky, golden layers of buttery French pastry, baked fresh daily.",
    price: "$3.50",
  },
];

const MenuSection = () => {
  return (
    <section id="menu" className="py-20 md:py-32 bg-background relative">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-caramel/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block font-body text-sm md:text-base text-accent font-medium tracking-wider uppercase mb-4">
            Our Offerings
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Crafted with Care
          </h2>
          <p className="font-body text-lg text-muted-foreground">
            From our signature espresso drinks to fresh-baked pastries, every item
            is crafted with the finest ingredients and served with love.
          </p>
        </motion.div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {menuItems.map((item, index) => (
            <MenuCard key={item.name} {...item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
