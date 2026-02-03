import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Users, Zap } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Users,
      title: 'Expert Team',
      description: 'A small but passionate team of developers and designers driven by innovation.',
    },
    {
      icon: Zap,
      title: 'Innovation First',
      description: 'We focus on modern technologies and creative solutions to solve real problems.',
    },
  ];

  return (
    <section
      id="about"
      className="relative w-full py-24 lg:py-32 bg-secondary/30"
    >
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-24 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-5 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              About Us
            </span>

            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              {t('about.title')}
            </h2>

            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              {t('about.subtitle')}
            </p>

            {/* Mission */}
            <div className="space-y-8">
              <div className="flex gap-5 items-start">
                <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center shrink-0">
                  <Target className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold mb-2">
                    {t('about.mission.title')}
                  </h3>
                  <p className="text-muted-foreground">
                    {t('about.mission.desc')}
                  </p>
                </div>
              </div>

              {/* Vision */}
              <div className="flex gap-5 items-start">
                <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center shrink-0">
                  <Eye className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold mb-2">
                    {t('about.vision.title')}
                  </h3>
                  <p className="text-muted-foreground">
                    {t('about.vision.desc')}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Feature Cards */}
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="service-card"
              >
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* STATS */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="service-card gradient-bg"
            >
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="font-display text-4xl font-bold text-primary-foreground mb-1">
                    2026
                  </div>
                  <div className="text-sm text-primary-foreground/80">
                    Founded
                  </div>
                </div>
                <div>
                  <div className="font-display text-4xl font-bold text-primary-foreground mb-1">
                    ESBAFIM
                  </div>
                  <div className="text-sm text-primary-foreground/80">
                    Academic Roots
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
