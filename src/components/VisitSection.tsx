import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const VisitSection = () => {
  return (
    <section id="visit" className="py-14 md:py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -left-1/4 top-1/2 -translate-y-1/2 w-[200px] md:w-[400px] h-[200px] md:h-[400px] rounded-full bg-caramel/5 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-10 md:mb-14"
        >
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-4">
            Visit Us
          </h2>
          <p className="font-body text-base md:text-lg text-muted-foreground max-w-md mx-auto">
            We'd love to see you. Stop by for a coffee and a moment of calm.
          </p>
        </motion.div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto mb-8 md:mb-10">
          {/* Address */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="bg-card rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-soft text-center"
          >
            <div className="w-12 h-12 md:w-14 md:h-14 mx-auto mb-3 md:mb-4 rounded-xl md:rounded-2xl bg-caramel/10 flex items-center justify-center">
              <MapPin className="w-6 h-6 md:w-7 md:h-7 text-accent" />
            </div>
            <h3 className="font-display text-lg md:text-xl font-semibold text-foreground mb-2 md:mb-3">
              Address
            </h3>
            <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed">
              Brewline Café<br />
              24, Cedar Lane, Bandra West,<br />
              Mumbai – 400050, India
            </p>
          </motion.div>

          {/* Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="bg-card rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-soft text-center"
          >
            <div className="w-12 h-12 md:w-14 md:h-14 mx-auto mb-3 md:mb-4 rounded-xl md:rounded-2xl bg-caramel/10 flex items-center justify-center">
              <Clock className="w-6 h-6 md:w-7 md:h-7 text-accent" />
            </div>
            <h3 className="font-display text-lg md:text-xl font-semibold text-foreground mb-2 md:mb-3">
              Hours
            </h3>
            <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed">
              Mon – Fri: 8:00 AM – 10:00 PM<br />
              Sat – Sun: 9:00 AM – 11:00 PM
            </p>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="bg-card rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-soft text-center"
          >
            <div className="w-12 h-12 md:w-14 md:h-14 mx-auto mb-3 md:mb-4 rounded-xl md:rounded-2xl bg-caramel/10 flex items-center justify-center">
              <Phone className="w-6 h-6 md:w-7 md:h-7 text-accent" />
            </div>
            <h3 className="font-display text-lg md:text-xl font-semibold text-foreground mb-2 md:mb-3">
              Contact
            </h3>
            <div className="font-body text-sm md:text-base text-muted-foreground space-y-2">
              <p className="font-medium text-foreground">+91 98765 43210</p>
              <p className="flex items-center justify-center gap-1.5">
                <Mail className="w-3.5 h-3.5 md:w-4 md:h-4 text-accent" />
                hello@brewlinecafe.com
              </p>
            </div>
          </motion.div>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <Button
            variant="hero"
            size="lg"
            className="w-full sm:w-auto min-h-[52px] text-base"
            onClick={() => window.open("https://maps.google.com/?q=24+Cedar+Lane+Bandra+West+Mumbai+400050+India", "_blank")}
          >
            <MapPin className="w-5 h-5 mr-2" />
            Get Directions
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default VisitSection;
