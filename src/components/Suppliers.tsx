import { motion } from 'framer-motion';
import { fadeUp } from '../lib/motion';
import { siteContent } from '../content/site';

export const Suppliers = () => {
  return (
    <section className="bg-ivory-50 py-20">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          className="max-w-4xl mx-auto"
        >
          <h2 className="font-serif text-28 sm:text-40 lg:text-56 text-navy-900 tracking-display text-center mb-12">
            {siteContent.suppliers.title}
          </h2>

          <p className="font-serif italic text-20 text-ink-600 text-center leading-relaxed mb-8">
            {siteContent.suppliers.description}
          </p>

          <div className="bg-ivory-100 p-8 rounded-lg border border-gold-500">
            <p className="text-ink-600 text-14 uppercase tracking-wide text-center">
              TODO: {siteContent.suppliers.placeholder}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
