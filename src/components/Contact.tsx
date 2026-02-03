import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: Mail,
      label: t('contact.email'),
      value: 'mambetech@gmail.com',
      href: 'mailto:mambetech@gmail.com',
    },
    {
      icon: Phone,
      label: t('contact.phone'),
      value: '+237 654779815',
      href: 'tel:654779815',
    },
    {
      icon: MapPin,
      label: t('contact.address'),
      value: 'Yaounde Mbankolo',
      href: '#',
    },
  ];

  return (
    <section id="contact" className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
            Contact Us
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h3 className="font-display text-2xl font-semibold">
              {t('contact.info.title')}
            </h3>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center group-hover:animate-pulse-glow">
                    <info.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">{info.label}</div>
                    <div className="font-medium text-foreground">{info.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-6">
              <p className="text-muted-foreground mb-4">Follow us on social media</p>
              <div className="flex gap-4">
                {['Twitter', 'LinkedIn', 'GitHub', 'Instagram'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                  >
                    <span className="text-xs font-medium">{social[0]}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Google Form Embed */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="service-card"
          >
            <div className="flex items-center gap-3 mb-6">
              <Send className="w-5 h-5 text-primary" />
              <h3 className="font-display text-xl font-semibold">Send us a message</h3>
            </div>
            
            {/* Google Form Placeholder - Replace with your actual Google Form embed URL */}
            <div className="relative rounded-lg overflow-hidden bg-muted/50 min-h-[500px]">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLScg1CtJOsm52szWcB308XBFOKReoDJdk1w-Ef1xm7HEYlMaHg/viewform?usp=publish-editor"
                width="100%"
                height="500"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                className="w-full"
                title="Contact Form"
              >
                Loading…
              </iframe>
              
              {/* Fallback content when form doesn't load */}
              <div className="absolute inset-0 flex items-center justify-center bg-muted/80 pointer-events-none opacity-0 hover:opacity-100 transition-opacity">
                <div className="text-center p-6">
                  <p className="text-muted-foreground mb-4">
                    To embed your Google Form, replace the iframe src with your form's embed URL.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Go to Google Forms → Share → Embed → Copy HTML
                  </p>
                </div>
              </div>
            </div>
            
            <p className="text-sm text-muted-foreground mt-4 text-center">
              We typically respond within 24 hours
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
