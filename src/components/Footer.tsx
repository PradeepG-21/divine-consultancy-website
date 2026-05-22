import { motion } from 'framer-motion';
import { fadeUp } from '../lib/motion';
import { siteContent } from '../content/site';

export const Footer = () => {
  return (
    <footer className="bg-navy-900 py-8">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          className="flex flex-col items-center"
        >
          <p className="text-ink-600 text-14 uppercase tracking-wide">
            {siteContent.footer.copyright}
          </p>
        </motion.div>
      </div>
    </footer>
  );
};
