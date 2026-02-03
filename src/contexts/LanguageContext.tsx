import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'fr';

interface Translations {
  [key: string]: {
    en: string;
    fr: string;
  };
}

export const translations: Translations = {
  // Navbar
  'nav.home': { en: 'Home', fr: 'Accueil' },
  'nav.services': { en: 'Services', fr: 'Services' },
  'nav.about': { en: 'About', fr: 'À propos' },
  'nav.portfolio': { en: 'Portfolio', fr: 'Portfolio' },
  'nav.contact': { en: 'Contact', fr: 'Contact' },
  'nav.getStarted': { en: 'Get Started', fr: 'Commencer' },
  // Navbar
   'nav.faq': { en: 'FAQ',fr: 'FAQ',
},

  
  // Hero
  'hero.title1': { en: 'Building Digital', fr: 'Construire des' },
  'hero.title2': { en: 'Experiences', fr: 'Expériences' },
  'hero.title3': { en: 'That Matter', fr: 'Numériques' },
  'hero.subtitle': { 
    en: 'We craft innovative web solutions that transform ideas into powerful digital realities. From stunning websites to complex applications.', 
    fr: 'Nous créons des solutions web innovantes qui transforment vos idées en réalités numériques puissantes. Des sites web impressionnants aux applications complexes.' 
  },
  'hero.cta1': { en: 'Start Your Project', fr: 'Démarrer Votre Projet' },
  'hero.cta2': { en: 'View Our Work', fr: 'Voir Nos Réalisations' },
  'hero.stats.projects': { en: 'Projects Delivered', fr: 'Projets Livrés' },
  'hero.stats.clients': { en: 'Happy Clients', fr: 'Clients Satisfaits' },
  'hero.stats.experience': { en: 'Years Experience', fr: 'Ans d\'Expérience' },
  
  // Services
  'services.title': { en: 'Our Services', fr: 'Nos Services' },
  'services.subtitle': { 
    en: 'Comprehensive web development solutions tailored to your business needs', 
    fr: 'Solutions de développement web complètes adaptées à vos besoins' 
  },
  'services.web.title': { en: 'Web Development', fr: 'Développement Web' },
  'services.web.desc': { 
    en: 'Custom websites and web applications built with cutting-edge technologies for optimal performance and scalability.', 
    fr: 'Sites web et applications personnalisés construits avec les technologies de pointe pour des performances optimales.' 
  },
  'services.mobile.title': { en: 'Mobile Apps', fr: 'Applications Mobiles' },
  'services.mobile.desc': { 
    en: 'Cross-platform mobile applications that deliver seamless user experiences on iOS and Android devices.', 
    fr: 'Applications mobiles multiplateformes offrant des expériences utilisateur fluides sur iOS et Android.' 
  },
  'services.uiux.title': { en: 'UI/UX Design', fr: 'Design UI/UX' },
  'services.uiux.desc': { 
    en: 'User-centered design solutions that combine aesthetics with functionality to create engaging interfaces.', 
    fr: 'Solutions de design centrées sur l\'utilisateur combinant esthétique et fonctionnalité.' 
  },
  'services.ecommerce.title': { en: 'E-Commerce', fr: 'E-Commerce' },
  'services.ecommerce.desc': { 
    en: 'Complete online store solutions with secure payments, inventory management, and analytics.', 
    fr: 'Solutions de boutique en ligne complètes avec paiements sécurisés et gestion des stocks.' 
  },
  'services.cloud.title': { en: 'Cloud Solutions', fr: 'Solutions Cloud' },
  'services.cloud.desc': { 
    en: 'Scalable cloud infrastructure and DevOps services to power your applications reliably.', 
    fr: 'Infrastructure cloud évolutive et services DevOps pour alimenter vos applications de manière fiable.' 
  },
  'services.api.title': { en: 'API Development', fr: 'Développement API' },
  'services.api.desc': { 
    en: 'Robust RESTful and GraphQL APIs that connect your systems and enable seamless data flow.', 
    fr: 'APIs robustes RESTful et GraphQL connectant vos systèmes pour un flux de données fluide.' 
  },
  
  // About
'about.title': { 
  en: 'About MambeTech', 
  fr: 'À Propos de MambeTech' 
},

'about.subtitle': { 
  en: 'MambeTech was founded on February 3, 2026 by Noudje Mambe Ronny, a Software Engineering Bachelor student at ESBAFIM, together with a small group of passionate innovators. As the founder, our mission is to promote innovation and develop impactful technological solutions.', 
  fr: 'MambeTech a été fondée le 3 février 2026 par Noudje Mambe Ronny, étudiant en génie logiciel au niveau Licence à ESBAFIM, avec un petit groupe de passionnés. En tant que fondateur, notre mission est de promouvoir l’innovation et de développer des solutions technologiques à fort impact.' 
},

'about.mission.title': { 
  en: 'Our Mission', 
  fr: 'Notre Mission' 
},

'about.mission.desc': { 
  en: 'To promote innovation and empower businesses and individuals through modern, reliable, and scalable digital solutions that create real value.', 
  fr: 'Promouvoir l’innovation et accompagner les entreprises et les individus grâce à des solutions numériques modernes, fiables et évolutives qui créent une réelle valeur.' 
},

'about.vision.title': { 
  en: 'Our Vision', 
  fr: 'Notre Vision' 
},

'about.vision.desc': { 
  en: 'To become a trusted technology partner recognized for creativity, technical excellence, and the ability to turn ideas into powerful digital products.', 
  fr: 'Devenir un partenaire technologique de confiance reconnu pour sa créativité, son excellence technique et sa capacité à transformer les idées en produits numériques performants.' 
},

  // Contact
  'contact.title': { en: 'Get In Touch', fr: 'Contactez-Nous' },
  'contact.subtitle': { 
    en: 'Have a project in mind? We\'d love to hear from you. Send us a message and we\'ll respond as soon as possible.', 
    fr: 'Vous avez un projet en tête? Nous serions ravis de vous entendre. Envoyez-nous un message et nous vous répondrons rapidement.' 
  },
  'contact.info.title': { en: 'Contact Information', fr: 'Informations de Contact' },
  'contact.email': { en: 'Email', fr: 'Email' },
  'contact.phone': { en: 'Phone', fr: 'Téléphone' },
  'contact.address': { en: 'Address', fr: 'Adresse' },
  
  // Footer
  'footer.description': { 
    en: 'Building the future of web, one project at a time.', 
    fr: 'Construire l\'avenir du web, un projet à la fois.' 
  },
  'footer.services': { en: 'Services', fr: 'Services' },
  'footer.company': { en: 'Company', fr: 'Entreprise' },
  'footer.legal': { en: 'Legal', fr: 'Légal' },
  'footer.privacy': { en: 'Privacy Policy', fr: 'Politique de confidentialité' },
  'footer.terms': { en: 'Terms of Service', fr: 'Conditions d\'utilisation' },
  'footer.rights': { en: 'All rights reserved.', fr: 'Tous droits réservés.' },

  // FAQ
'faq.title': {
  en: 'Frequently Asked Questions',
  fr: 'Questions Fréquemment Posées',
},

'faq.subtitle': {
  en: 'Everything you need to know about working with MambeTech',
  fr: 'Tout ce que vous devez savoir pour travailler avec MambeTech',
},

'faq.q1': {
  en: 'What services does MambeTech provide?',
  fr: 'Quels services propose MambeTech ?',
},
'faq.a1': {
  en: 'We offer web development, mobile applications, UI/UX design, e-commerce solutions, cloud services, and custom API development tailored to your business needs.',
  fr: 'Nous proposons le développement web, les applications mobiles, le design UI/UX, les solutions e-commerce, les services cloud et le développement d’API sur mesure.',
},

'faq.q2': {
  en: 'How long does it take to complete a project?',
  fr: 'Combien de temps faut-il pour réaliser un projet ?',
},
'faq.a2': {
  en: 'Project timelines vary based on complexity, but most projects are delivered between 2 to 8 weeks with clear milestones and regular updates.',
  fr: 'La durée dépend de la complexité, mais la plupart des projets sont livrés entre 2 et 8 semaines avec des étapes claires et des mises à jour régulières.',
},

'faq.q3': {
  en: 'Do you offer custom solutions?',
  fr: 'Proposez-vous des solutions personnalisées ?',
},
'faq.a3': {
  en: 'Absolutely. Every solution we build is customized to match your goals, brand identity, and business requirements.',
  fr: 'Absolument. Chaque solution est conçue sur mesure pour répondre à vos objectifs, à votre identité de marque et à vos besoins.',
},

'faq.q4': {
  en: 'Will my website be mobile-friendly?',
  fr: 'Mon site sera-t-il adapté aux mobiles ?',
},
'faq.a4': {
  en: 'Yes. All our websites and applications are fully responsive and optimized for mobile, tablet, and desktop devices.',
  fr: 'Oui. Tous nos sites et applications sont entièrement responsives et optimisés pour mobile, tablette et ordinateur.',
},

'faq.q5': {
  en: 'Do you provide maintenance and support?',
  fr: 'Proposez-vous la maintenance et le support ?',
},
'faq.a5': {
  en: 'Yes, we offer ongoing maintenance, updates, and technical support to ensure your product remains secure and up to date.',
  fr: 'Oui, nous proposons la maintenance continue, les mises à jour et le support technique pour garantir la sécurité et la performance de votre produit.',
},

'faq.q6': {
  en: 'How do I get started with MambeTech?',
  fr: 'Comment démarrer avec MambeTech ?',
},
'faq.a6': {
  en: 'Simply contact us through our website. We will discuss your project, provide guidance, and help you bring your ideas to life.',
  fr: 'Contactez-nous simplement via notre site. Nous discuterons de votre projet et vous accompagnerons pour concrétiser vos idées.',
},

};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
