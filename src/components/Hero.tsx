import { useEffect, useState } from 'react';
import { motion, useInView, animate, useMotionValue } from 'framer-motion';
import { fadeUp, drawLine, staggerContainerSection, easeOutQuart } from '../lib/motion';
import { siteContent } from '../content/site';
import { useRef } from 'react';

const AnimatedCounter = ({ value, prefix = '', suffix = '' }: { value: number; prefix?: string; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const motionVal = useMotionValue(0);

  useEffect(() => {
    if (!isInView || value === 0) return;

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setCount(value);
      return;
    }

    motionVal.set(0);
    const controls = animate(motionVal, value, {
      duration: 1.5,
      ease: easeOutQuart as [number, number, number, number],
      onUpdate: (latest) => setCount(Math.floor(latest)),
      onComplete: () => setCount(value),
    });

    return () => controls.stop();
  }, [isInView, value, motionVal]);

  return (
    <div ref={ref} className="font-serif text-28 sm:text-40 lg:text-56 text-gold-500 tracking-display whitespace-nowrap">
      {prefix}{value === 0 ? '—' : count}{suffix}
    </div>
  );
};

export const Hero = () => {
  return (
    <section className="bg-ivory-50 min-h-[85dvh] lg:h-auto lg:min-h-[90vh] flex flex-col relative w-full">
      <div className="container mx-auto px-6 lg:px-12 flex-1 flex items-center py-8 lg:py-32">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainerSection}
          className="grid lg:grid-cols-12 gap-12 items-center w-full max-w-7xl mx-auto"
        >
          {/* Left column */}
          <div className="hidden lg:block lg:col-span-7 space-y-8">
            <motion.div
              variants={fadeUp}
              className="text-gold-500 text-14 uppercase tracking-wider font-medium text-center lg:text-left"
            >
              {siteContent.hero.eyebrow}
            </motion.div>

            {/* Headline with word-by-word stagger */}
            <motion.h1
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.04,
                  },
                },
              }}
              className="font-serif text-40 sm:text-56 lg:text-76 text-navy-900 tracking-display leading-tight text-center lg:text-left"
            >
              {siteContent.hero.headline.split(' ').map((word, index) => (
                <motion.span
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 12 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.4,
                        ease: easeOutQuart,
                      },
                    },
                  }}
                  className="inline-block mr-[0.25em]"
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-ink-600 text-16 sm:text-20 leading-relaxed max-w-prose text-center lg:text-left"
            >
              {siteContent.hero.subline}
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap gap-4 pt-4 justify-center lg:justify-start"
            >
              <a
                href={siteContent.hero.primaryCta.anchor}
                className="px-6 sm:px-8 py-4 bg-gold-500 text-ivory-50 font-medium text-14 sm:text-16 uppercase tracking-wide rounded transition-all duration-base hover:bg-gold-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2"
              >
                {siteContent.hero.primaryCta.text}
              </a>

              <a
                href={siteContent.hero.secondaryCta.anchor}
                className="px-6 sm:px-8 py-4 border-2 border-navy-900 text-navy-900 font-medium text-14 sm:text-16 uppercase tracking-wide rounded transition-all duration-base hover:bg-navy-900 hover:text-ivory-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy-900 focus-visible:ring-offset-2"
              >
                {siteContent.hero.secondaryCta.text}
              </a>
            </motion.div>

          </div>

          {/* Right column - Logo on navy disc with gold rule */}
          <div className="flex flex-col items-center justify-center gap-4 lg:gap-6 lg:col-span-5 order-first lg:order-none">
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 12, scale: 0.92 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { duration: 0.6, ease: easeOutQuart },
                },
              }}
              className="relative w-full max-w-[180px] sm:max-w-[240px] lg:max-w-md"
            >
              <div className="relative aspect-square bg-navy-900 rounded-full flex items-center justify-center shadow-[0_25px_70px_-20px_rgba(10,26,47,0.45)]">
                {/* Gold hairline ring */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, rotate: -10 },
                    visible: {
                      opacity: 1,
                      rotate: 0,
                      transition: { duration: 0.7, ease: easeOutQuart, delay: 0.15 },
                    },
                  }}
                  className="absolute inset-4 rounded-full border border-gold-500/40"
                />
                <img
                  src="/logo-transparent.png"
                  alt="Divine Consultancy Services"
                  className="relative w-[82%]"
                />
              </div>

              {/* Gold rule underneath */}
              <motion.div
                variants={drawLine}
                className="hidden lg:block h-0.5 bg-gold-500 mt-8 origin-left"
              ></motion.div>
            </motion.div>

            {/* Mobile-only tagline */}
            <motion.p
              variants={fadeUp}
              className="lg:hidden text-center font-serif text-20 sm:text-28 text-navy-900 tracking-display"
            >
              {siteContent.hero.headline}
            </motion.p>

            {/* Mobile-only stats */}
            <motion.div variants={fadeUp} className="lg:hidden w-full">
              <div className="flex items-start justify-center gap-0 w-full">
                {siteContent.stats.map((stat, i) => (
                  <div key={stat.label} className={`flex-1 text-center ${i > 0 ? 'border-l border-gold-500/20' : ''}`}>
                    <AnimatedCounter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                    <div className="text-ink-600 text-12 uppercase tracking-wide mt-1 leading-tight px-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Mobile-only CTAs */}
            <motion.div variants={fadeUp} className="lg:hidden flex flex-wrap gap-3 justify-center mt-3">
              <a
                href={siteContent.hero.primaryCta.anchor}
                className="px-6 py-3 bg-gold-500 text-ivory-50 font-medium text-14 uppercase tracking-wide rounded transition-all duration-base hover:bg-gold-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2"
              >
                {siteContent.hero.primaryCta.text}
              </a>
              <a
                href={siteContent.hero.secondaryCta.anchor}
                className="px-6 py-3 border-2 border-navy-900 text-navy-900 font-medium text-14 uppercase tracking-wide rounded transition-all duration-base hover:bg-navy-900 hover:text-ivory-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy-900 focus-visible:ring-offset-2"
              >
                {siteContent.hero.secondaryCta.text}
              </a>
            </motion.div>

          </div>
        </motion.div>
      </div>

      {/* Scroll cue — mobile only */}
      <motion.div
        className="lg:hidden absolute bottom-4 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden="true"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold-500">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </motion.div>

      {/* Stats band — desktop only */}
      <div className="hidden lg:block bg-ivory-100 py-12">
        <div className="container mx-auto px-12">
          <div className="grid grid-cols-3 gap-8 max-w-5xl mx-auto">
            {siteContent.stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <AnimatedCounter
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                />
                <div className="text-ink-600 text-14 uppercase tracking-wide mt-2">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
