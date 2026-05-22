import { motion } from 'framer-motion';
import { fadeUp, staggerContainerSection } from '../lib/motion';
import { siteContent } from '../content/site';

export const Clients = () => {
  return (
    <section id="clients" className="bg-ivory-50 py-16 md:py-24 scroll-mt-20">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainerSection}
          className="max-w-6xl mx-auto"
        >
          <motion.h2
            variants={fadeUp}
            className="font-serif text-28 sm:text-40 lg:text-56 text-navy-900 tracking-display text-center mb-4"
          >
            {siteContent.clients.title}
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-ink-600 text-16 text-center mb-12 md:mb-20"
          >
            Real businesses. Real loans sanctioned.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {siteContent.clients.categories.map((category) => (
              <motion.div
                key={category.name}
                variants={fadeUp}
                className="space-y-4"
              >
                <h3 className="font-serif text-20 sm:text-28 text-gold-500 tracking-display pb-3 border-b border-gold-500 text-center">
                  {category.name}
                </h3>

                <motion.div variants={fadeUp} className="flex flex-col gap-3">
                  {category.clients.map((client) => (
                    <p
                      key={client}
                      className="font-sans font-medium text-14 text-ink-900 text-center"
                    >
                      {client}
                    </p>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
