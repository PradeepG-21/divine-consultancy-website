import { motion } from 'framer-motion';
import { fadeUp, staggerContainerSection, easeOutQuart } from '../lib/motion';
import { siteContent } from '../content/site';

const photoReveal = {
  hidden: { clipPath: 'inset(100% 0 0 0)', opacity: 0 },
  visible: {
    clipPath: 'inset(0% 0 0 0)',
    opacity: 1,
    transition: { duration: 0.7, ease: easeOutQuart },
  },
};

export const About = () => {
  return (
    <section id="about" className="bg-ivory-100 py-16 md:py-24 scroll-mt-20">
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
            About the Founder
          </motion.h2>

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Founder photo */}
            <motion.div
              variants={photoReveal}
              className="lg:col-span-2"
            >
              <div className="aspect-[4/5] max-h-80 sm:max-h-96 lg:aspect-auto lg:h-full lg:min-h-[320px] rounded-2xl overflow-hidden mx-auto max-w-xs sm:max-w-sm lg:max-w-none">
                <img
                  src="/Founder Picture.png"
                  alt={siteContent.founder.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              variants={fadeUp}
              className="lg:col-span-3 space-y-8"
            >
              <div className="space-y-6">
                {siteContent.founder.bio.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-ink-900 text-16 leading-relaxed max-w-prose"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
