import { motion } from 'framer-motion';
import { fadeUp, drawLine, staggerContainerSection, easeOutQuart } from '../lib/motion';
import { siteContent } from '../content/site';

const stepContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.1,
    },
  },
};

const stepFadeIn = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: easeOutQuart,
    },
  },
};

export const Process = () => {
  return (
    <section id="process" className="bg-ivory-100 py-16 md:py-24 scroll-mt-20">
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
            className="font-serif text-28 sm:text-40 lg:text-56 text-navy-900 tracking-display text-center mb-12 md:mb-20"
          >
            {siteContent.process.title}
          </motion.h2>

          {/* Desktop: Horizontal timeline */}
          <motion.div
            className="hidden lg:block relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={stepContainer}
          >
            <motion.div
              variants={drawLine}
              className="absolute top-12 left-0 right-0 h-0.5 bg-gold-500 origin-left"
            />

            <div className="grid grid-cols-5 gap-8 relative">
              {siteContent.process.steps.map((step) => (
                <motion.div
                  key={step.number}
                  variants={stepFadeIn}
                  className="flex flex-col items-center text-center pt-16"
                >
                  <div className="font-serif text-56 text-gold-500 tracking-display mb-4">
                    {step.number}
                  </div>
                  <h3 className="font-sans font-semibold text-20 text-navy-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-ink-600 text-16 leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Mobile: Vertical stack */}
          <motion.div
            className="lg:hidden space-y-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={stepContainer}
          >
            {siteContent.process.steps.map((step) => (
              <motion.div
                key={step.number}
                variants={stepFadeIn}
                className="flex gap-6"
              >
                <div className="flex-shrink-0">
                  <div className="font-serif text-28 text-gold-500 tracking-display">
                    {step.number}
                  </div>
                </div>

                <div className="flex-1 pt-2">
                  <h3 className="font-sans font-semibold text-20 text-navy-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-ink-600 text-16 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
