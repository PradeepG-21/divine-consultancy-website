import { motion } from 'framer-motion';
import { fadeUp } from '../lib/motion';

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  wide?: boolean;
}

export const ServiceCard = ({ id, title, description, image, wide }: ServiceCardProps) => {
  return (
    <motion.div
      variants={fadeUp}
      className={`group relative bg-ivory-50 border border-ivory-100 rounded-lg overflow-hidden transition-[transform,box-shadow] duration-200 ease-out-quart hover:shadow-lg hover:-translate-y-1 ${
        wide ? 'col-span-1 md:col-span-1' : ''
      }`}
    >
      <div className="aspect-[16/9] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 ease-out-quart group-hover:scale-105"
        />
      </div>

      <div className="p-5 md:p-8">
        <div className="font-serif text-28 md:text-40 text-gold-500 tracking-display mb-4">
          {id}
        </div>

        <h3 className="font-serif text-20 md:text-28 text-navy-900 tracking-display mb-4">
          {title}
        </h3>

        <p className="text-ink-600 text-16 leading-relaxed">
          {description}
        </p>
      </div>

      {/* Gold rule hover effect */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out-quart origin-left"></div>
    </motion.div>
  );
};
