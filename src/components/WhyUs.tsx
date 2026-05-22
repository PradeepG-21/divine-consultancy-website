import { motion } from 'framer-motion';
import { fadeUp, staggerContainerSection, easeOutQuart } from '../lib/motion';
import { siteContent } from '../content/site';

const numberVariant = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: easeOutQuart },
  },
};

export const WhyUs = () => {
  return (
    <section id="why-us" className="bg-navy-900 py-16 md:py-24 scroll-mt-20">
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
            className="font-serif text-28 sm:text-40 lg:text-56 text-ivory-50 tracking-display text-center mb-12 md:mb-20"
          >
            {siteContent.whyUs.title}
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-4 mb-12">
            {siteContent.whyUs.pillars.map((pillar, index) => (
              <motion.div
                key={pillar.number}
                variants={fadeUp}
                className={`text-left px-4 py-4 md:px-6 md:py-2 ${
                  index < siteContent.whyUs.pillars.length - 1
                    ? 'md:border-r md:border-gold-500/40'
                    : ''
                }`}
              >
                <motion.div
                  variants={numberVariant}
                  className="font-serif text-28 sm:text-40 text-gold-500 tracking-display mb-4 leading-none"
                >
                  {pillar.number}
                </motion.div>
                <h3 className="font-sans font-semibold text-16 sm:text-20 text-ivory-50 mb-3">
                  {pillar.title}
                </h3>
                <p className="text-ink-600 text-14 sm:text-16 leading-relaxed text-left">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.p
            variants={fadeUp}
            className="font-serif italic text-20 sm:text-28 text-gold-300 text-center max-w-3xl mx-auto"
          >
            {siteContent.whyUs.closing}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};
