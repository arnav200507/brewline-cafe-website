import { motion } from "framer-motion";

interface MenuCardProps {
  image: string;
  name: string;
  description: string;
  price: string;
  index: number;
}

const MenuCard = ({ image, name, description, price, index }: MenuCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group bg-gradient-card rounded-3xl overflow-hidden shadow-soft hover:shadow-card transition-all duration-300"
    >
      {/* Image Container */}
      <div className="relative overflow-hidden aspect-square">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Price Badge */}
        <div className="absolute top-4 right-4 bg-card/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-soft">
          <span className="font-display text-lg font-semibold text-primary">
            {price}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-display text-xl font-semibold text-foreground mb-2">
          {name}
        </h3>
        <p className="font-body text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default MenuCard;
