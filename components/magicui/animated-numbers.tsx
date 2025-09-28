'use client';
import { useEffect, useState, useRef } from 'react';
import { NumberTicker } from '../ui/number-ticker';
import { useIntersectionObserver } from '@/lib/hooks/use-intersection-observer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 200, damping: 20 } },
};

export function AnimatedNumberBasic() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const entry = useIntersectionObserver(ref, {});
  const isVisible = !!entry?.isIntersecting;

  useEffect(() => {
    if (isVisible && !hasAnimated) setHasAnimated(true);
  }, [isVisible, hasAnimated]);

  const items = [
    { initialValue: 100, suffix: 'K+', label: 'AI Portraits Generated' },
    { initialValue: 50, suffix: 'K+', label: 'Happy Users' },
    { initialValue: 98, suffix: '%', label: 'Satisfaction Rate' },
    { initialValue: '24/7', suffix: '', label: 'AI Support' },
  ];

  return (
    <section className="relative w-full py-20 bg-black">
      <div ref={ref} className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white"
        >
          Trusted by Thousands Worldwide
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4"
        >
          {items.map((item, i) => (
            <motion.div key={i} variants={itemVariants}>
              <Card
                className="group w-full min-h-[200px] flex flex-col items-center justify-center rounded-2xl 
                           border border-white/10 bg-neutral-900/50 backdrop-blur-xl shadow-xl 
                           transition-transform duration-300 hover:scale-[1.04] hover:shadow-2xl"
              >
                <CardHeader className="p-0 mb-3">
                  <CardTitle className="flex items-baseline justify-center gap-2">
                    {hasAnimated && typeof item.initialValue === 'number' ? (
                      <NumberTicker
                        value={item.initialValue}
                        springOptions={{ bounce: 0, duration: 1400 }}
                        className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight"
                      />
                    ) : (
                      <span className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight">
                        {item.initialValue}
                      </span>
                    )}
                    <span className="text-2xl sm:text-3xl font-semibold text-white/60">
                      {item.suffix}
                    </span>
                  </CardTitle>
                </CardHeader>

                <CardContent className="p-0">
                  <CardDescription className="mt-2 text-center text-sm sm:text-base text-white/70 group-hover:text-white/90 transition-colors">
                    {item.label}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}