import { motion } from 'framer-motion';
import { HiPhone, HiMail } from 'react-icons/hi';
import { fadeUp, staggerContainerSection, easeOutQuart } from '../lib/motion';
import { siteContent } from '../content/site';

export const Contact = () => {
  return (
    <section id="contact" className="bg-navy-900 py-16 md:py-24 scroll-mt-20">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainerSection}
          className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center"
        >
          <motion.h2
            variants={fadeUp}
            className="font-serif text-28 sm:text-40 lg:text-56 text-ivory-50 tracking-display leading-tight text-center"
          >
            {siteContent.contact.title}
          </motion.h2>

          <div className="flex flex-col gap-6">
            <motion.a
              variants={fadeUp}
              href={`tel:${siteContent.contact.phone.number}`}
              className="group flex items-center gap-4 transition-colors duration-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900 rounded"
            >
              <motion.span
                whileHover={{ scale: 1.15 }}
                transition={{ duration: 0.15, ease: easeOutQuart }}
                className="shrink-0"
              >
                <HiPhone className="text-gold-500 text-28" />
              </motion.span>
              <span className="font-serif text-20 sm:text-28 text-ivory-50 tracking-display group-hover:text-gold-300 transition-colors duration-base relative">
                {siteContent.contact.phone.display}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gold-500 group-hover:w-full transition-[width] duration-[250ms] ease-out-quart"></span>
              </span>
            </motion.a>

            <motion.a
              variants={fadeUp}
              href={`mailto:${siteContent.contact.email.address}`}
              className="group flex items-center gap-4 transition-colors duration-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900 rounded"
            >
              <motion.span
                whileHover={{ scale: 1.15 }}
                transition={{ duration: 0.15, ease: easeOutQuart }}
                className="shrink-0"
              >
                <HiMail className="text-gold-500 text-28" />
              </motion.span>
              <span className="font-sans text-16 sm:text-20 text-ivory-50 group-hover:text-gold-300 transition-colors duration-base break-words relative">
                {siteContent.contact.email.address}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gold-500 group-hover:w-full transition-[width] duration-[250ms] ease-out-quart"></span>
              </span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
