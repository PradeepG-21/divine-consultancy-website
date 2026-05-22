import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '../lib/motion';
import { siteContent } from '../content/site';
import { ServiceCard } from './ServiceCard';

export const Services = () => {
  return (
    <section id="services" className="bg-ivory-50 py-16 md:py-24 scroll-mt-20">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto"
        >
          <motion.h2
            variants={fadeUp}
            className="font-serif text-28 sm:text-40 lg:text-56 text-navy-900 tracking-display text-center mb-12 md:mb-20"
          >
            Our Services
          </motion.h2>

          {/* Grid with varied sizes - top row wide, bottom row narrower */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {siteContent.services.slice(0, 2).map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {siteContent.services.slice(2).map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
