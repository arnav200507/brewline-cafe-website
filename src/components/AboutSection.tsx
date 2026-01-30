import { motion } from "framer-motion";
import { Coffee, Users, Sparkles } from "lucide-react";

const values = [
  {
    icon: Coffee,
    title: "Quality First",
    text: "Carefully sourced. Freshly roasted.",
  },
  {
    icon: Sparkles,
    title: "Calm Always",
    text: "Your quiet escape.",
  },
  {
    icon: Users,
    title: "Community Built",
    text: "Neighbors become friends.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-14 md:py-20 bg-secondary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -right-1/4 top-1/2 -translate-y-1/2 w-[250px] md:w-[500px] h-[250px] md:h-[500px] rounded-full bg-caramel/5 blur-3xl pointer-events-none" />
      <div className="absolute -left-1/4 bottom-0 w-[200px] md:w-[400px] h-[200px] md:h-[400px] rounded-full bg-blush/20 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center max-w-2xl mx-auto mb-10 md:mb-14"
        >
          <p className="font-body text-sm md:text-base text-accent uppercase tracking-widest mb-3 md:mb-4">
            Our Story
          </p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            About Brewline
          </h2>
        </motion.div>

        {/* Story - Editorial style with increased line spacing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-2xl mx-auto text-center mb-12 md:mb-16 space-y-6 md:space-y-8"
        >
          <p className="font-body text-base md:text-lg lg:text-xl text-muted-foreground leading-loose">
            Good coffee doesn't need to be complicated.
          </p>
          <p className="font-body text-base md:text-lg lg:text-xl text-muted-foreground leading-loose">
            We started with a simple idea: create a space where you can slow down, breathe, and enjoy the moment.
          </p>
          <p className="font-body text-base md:text-lg lg:text-xl text-foreground leading-loose font-medium">
            That's Brewline.
          </p>
        </motion.div>

        {/* Values */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5 max-w-3xl mx-auto">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-center p-5 md:p-6 bg-card/80 backdrop-blur-sm rounded-3xl md:rounded-[2rem] border border-border/50 shadow-sm hover:shadow-soft transition-shadow duration-300"
            >
              <div className="w-10 h-10 md:w-11 md:h-11 mx-auto mb-3 rounded-xl bg-accent/10 flex items-center justify-center">
                <value.icon className="w-5 h-5 md:w-5 md:h-5 text-accent" strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-lg md:text-xl font-semibold text-foreground tracking-tight mb-1">
                {value.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground">
                {value.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
