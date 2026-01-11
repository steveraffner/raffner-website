// Système de gestion multilingue
const translations = {
    fr: {
        // Navigation
        'nav.inventions': 'Inventions',
        'nav.making-of': 'Making-of',
        'nav.about': 'À propos',
        
        // Hero section
        'hero.title': 'Transformer des idées en produits tangibles et impactants depuis 1969',
        'hero.description': 'Obtenez des insights d\'experts et des solutions sur mesure pour propulser votre projet/entreprise. Lors de notre consultation, nous explorerons vos défis et objectifs uniques, en offrant des conseils précieux et des stratégies actionnables. Que vous ayez besoin d\'aide en design, développement de produits, branding ou croissance commerciale, notre session individuelle vous apportera la clarté et la direction dont vous avez besoin.',
        'hero.cta.title': 'Prêt à faire passer votre projet/entreprise au niveau supérieur ?',
        'hero.cta.button': 'Réservez votre consultation',
        
        // Projects
        'project.mobicapsule.desc': '5 prototypes fabriqués',
        'project.eldorajob.desc': 'Un démarrage qui a nécessité 110000 CHF',
        'project.hatlamp.desc': '195 fabriquées',
        'project.scalorie.desc': '5 prototypes fabriqués',
        'project.timebomb.desc': '5 prototypes fabriqués',
        'project.hausbird.desc': '3 vendues / construites',
        'project.cento.desc': '10 prototypes',
        'project.chatinvitation.desc': '2000 distribués',
        
        // Bio
        'bio.p1': 'Je m\'appelle Steve Raffner et je suis inventeur. Depuis mon enfance, je suis fasciné par le pouvoir de l\'innovation, et j\'ai passé ma vie à créer des choses qui inspirent et enchantent. J\'ai conçu tout, d\'une balance de cuisine qui compte les calories à une lampe LED qui sert aussi d\'accessoire de mode, en passant par un logiciel révolutionnaire qui exploite l\'IA pour révolutionner la recherche d\'emploi. Mon travail a été salué par des PDG, des artistes et des entrepreneurs.',
        'bio.p2': 'Je comprends que le succès nécessite non seulement de la créativité mais aussi de la stratégie et de l\'exécution, et j\'ai un palmarès éprouvé de résultats concrets. Rejoignez-moi dans un voyage pour explorer les possibilités infinies de l\'innovation, et créons ensemble quelque chose de vraiment extraordinaire.',
        
        // Footer
        'footer.rights': 'Tous droits réservés.',
        
        // About page
        'about.title': 'À propos',
        'about.subtitle': 'Inventeur & Entrepreneur',
        'about.p1': 'En tant qu\'artiste fonctionnel avec plus de deux décennies d\'expérience, j\'ai une passion pour l\'innovation et la créativité qui me pousse à avoir un impact positif à travers mon travail. Ma solide base en design thinking et résolution de problèmes, affinée au fil des années de développement de produits, me permet de collaborer et communiquer efficacement avec les autres pour concrétiser ma vision.',
        'about.p2': 'J\'ai dirigé des projets réussis en développement logiciel, notamment des logiciels de matching d\'emploi pilotés par l\'IA et le développement de dispositifs IoT, ainsi que le développement de produits physiques, comme une balance de cuisine électronique révolutionnaire qui compte les calories et une capsule médicale pour transporter les patients infectés.',
        'about.p3': 'Mais le développement de produits est plus qu\'un simple travail pour moi ; c\'est un mode de vie. Je m\'immerge dans le monde de l\'art et de la littérature, visitant galeries, musées et bibliothèques pour trouver de nouvelles idées et inspirations. Je crois fermement que l\'esthétique et l\'ingéniosité sont les pierres angulaires d\'un grand design, et ces principes guident mon approche du développement de produits.',
        'about.p4': 'Tout au long de ma carrière, j\'ai travaillé avec une gamme diversifiée de clients et d\'industries, me procurant une compréhension approfondie de l\'innovation et de ce qu\'il faut pour réussir dans le paysage commercial en constante évolution d\'aujourd\'hui. Mon expertise, ma créativité et ma passion sont à votre disposition, et je suis convaincu que je peux vous aider à atteindre vos objectifs et faire passer votre entreprise au niveau supérieur.',
        'about.p5': 'Merci de me considérer pour votre prochain projet. Travaillons ensemble pour créer quelque chose de vraiment extraordinaire.',
        'about.description': 'Passionné par l\'innovation et le design, je crée des produits qui combinent fonctionnalité et esthétique. Mon parcours entrepreneurial m\'a amené à développer des solutions dans divers domaines, de l\'IoT au design industriel.',
        'about.journey.title': 'Mon Parcours',
        'about.journey.p1': 'Depuis mon enfance, j\'ai été fasciné par la façon dont les choses fonctionnent. Cette curiosité m\'a conduit à une carrière dédiée à l\'invention et à l\'innovation. Au fil des années, j\'ai développé de nombreux produits, certains ayant atteint une production commerciale, d\'autres servant de prototypes pour tester de nouvelles idées.',
        'about.journey.p2': 'Chaque projet est une opportunité d\'apprendre, d\'expérimenter et de repousser les limites de ce qui est possible. Je crois fermement que l\'innovation naît de la combinaison de la créativité, de la technologie et d\'une compréhension approfondie des besoins humains.',
        'about.approach.title': 'Mon Approche',
        'about.approach.p1': 'Mon processus créatif commence toujours par l\'identification d\'un problème réel. Je crois que les meilleures innovations sont celles qui résolvent des problèmes authentiques de manière élégante et efficace.',
        'about.approach.p2': 'Je travaille avec une méthodologie qui allie design thinking, prototypage rapide et itération continue. Cette approche me permet de transformer des concepts en produits tangibles qui peuvent être testés, améliorés et finalement commercialisés.',
        
        // Making-of page
        'making-of.title': 'Making-of',
        'making-of.subtitle': 'Découvrez les coulisses de mes projets',
        'making-of.hatlamp.title': 'Hatlamp - Lampe LED sans fil',
        'making-of.hatlamp.intro': 'La création de Hatlamp a été un voyage fascinant dans le design d\'objet et l\'électronique.',
        'making-of.hatlamp.concept.title': 'Le Concept',
        'making-of.hatlamp.concept.desc': 'L\'idée était de créer une lampe portable qui puisse être portée comme un accessoire de mode. Inspirée par l\'héritage britannique, Hatlamp combine fonctionnalité et esthétique dans un design compact.',
        'making-of.hatlamp.technical.title': 'Développement Technique',
        'making-of.hatlamp.technical.desc': 'Le plus grand défi était de miniaturiser tous les composants électroniques tout en maintenant une autonomie suffisante. Après plusieurs itérations, nous avons réussi à créer un système LED efficace avec une batterie rechargeable intégrée.',
        'making-of.hatlamp.production.title': 'Production',
        'making-of.hatlamp.production.desc': '195 unités ont été produites et vendues, principalement via Etsy. Le feedback des utilisateurs a été extrêmement positif, beaucoup appréciant le design unique et la qualité de fabrication.',
        'making-of.drawerwallet.title': 'DrawerWallet - Portefeuille minimaliste',
        'making-of.drawerwallet.intro': 'DrawerWallet est né de mon besoin personnel d\'un portefeuille minimaliste et fonctionnel.',
        'making-of.drawerwallet.design.title': 'Design & Prototypage',
        'making-of.drawerwallet.design.desc': 'Le concept repose sur un mécanisme de tiroir qui permet d\'accéder facilement aux cartes tout en maintenant un profil ultra-fin. Plusieurs prototypes ont été réalisés en impression 3D avant de finaliser le design.'
    },
    en: {
        // Navigation
        'nav.inventions': 'Inventions',
        'nav.making-of': 'Making-of',
        'nav.about': 'About',
        
        // Hero section
        'hero.title': 'Transforming ideas into tangible and impactful products since 1969',
        'hero.description': 'Gain expert insights and tailored solutions to propel your project/business forward. During our consultation, we\'ll delve into your unique challenges and goals, offering valuable guidance and actionable strategies. Whether you need assistance with design, product development, branding, or business growth, our one-on-one session will provide you with the clarity and direction you need.',
        'hero.cta.title': 'Ready to take your project/business to the next level?',
        'hero.cta.button': 'Book your consultation',
        
        // Projects
        'project.mobicapsule.desc': '5 prototypes made',
        'project.eldorajob.desc': 'A startup that required 110000 CHF',
        'project.hatlamp.desc': '195 made',
        'project.scalorie.desc': '5 prototypes made',
        'project.timebomb.desc': '5 prototypes made',
        'project.hausbird.desc': '3 sold / built',
        'project.cento.desc': '10 prototypes',
        'project.chatinvitation.desc': '2000 distributed',
        
        // Bio
        'bio.p1': 'My name is Steve Raffner, and I\'m an inventor. Ever since I was a kid, I\'ve been fascinated by the power of innovation, and I\'ve spent my life creating things that inspire and delight. I\'ve designed everything from a kitchen scale that counts calories to a LED lamp that doubles as a fashion accessory, to a revolutionary software that leverages AI to revolutionize the job search process. My work has been praised by CEOs, artists and entrepreneurs alike.',
        'bio.p2': 'I understand that success requires not just creativity but also strategy and execution, and I have a proven track record of delivering results. Join me on a journey to explore the infinite possibilities of innovation, and let\'s make something truly extraordinary.',
        
        // Footer
        'footer.rights': 'All rights reserved.',
        
        // About page
        'about.title': 'About',
        'about.subtitle': 'Inventor & Entrepreneur',
        'about.p1': 'As a functional artist with over two decades of experience, I have a passion for innovation and creativity that drives me to make a positive impact through my work. My strong foundation in design thinking and problem solving, honed through years of product development, allows me to collaborate and communicate effectively with others to execute my vision.',
        'about.p2': 'I\'ve led successful projects in software development, including AI-driven job matching software and IoT device development, as well as physical product development, such as a revolutionary electronic kitchen scale that counts calories and a medical capsule for transporting infected patients.',
        'about.p3': 'But product development is more than just a job for me; it\'s a way of life. I immerse myself in the world of art and literature, visiting galleries, museums, and libraries to find new ideas and inspiration. I firmly believe that aesthetics and ingenuity are the cornerstones of great design, and these principles guide my approach to product development.',
        'about.p4': 'Throughout my career, I\'ve worked with a diverse range of clients and industries, providing me with a deep understanding of innovation and what it takes to succeed in today\'s ever-changing business landscape. My expertise, creativity, and passion are at your disposal, and I am confident that I can help you achieve your goals and take your business to the next level.',
        'about.p5': 'Thank you for considering me for your next project. Let\'s work together to create something truly extraordinary.',
        'about.description': 'Passionate about innovation and design, I create products that combine functionality and aesthetics. My entrepreneurial journey has led me to develop solutions in various fields, from IoT to industrial design.',
        'about.journey.title': 'My Journey',
        'about.journey.p1': 'Since childhood, I\'ve been fascinated by how things work. This curiosity led me to a career dedicated to invention and innovation. Over the years, I\'ve developed numerous products, some reaching commercial production, others serving as prototypes to test new ideas.',
        'about.journey.p2': 'Each project is an opportunity to learn, experiment, and push the boundaries of what\'s possible. I firmly believe that innovation is born from the combination of creativity, technology, and a deep understanding of human needs.',
        'about.approach.title': 'My Approach',
        'about.approach.p1': 'My creative process always starts with identifying a real problem. I believe the best innovations are those that solve authentic problems in an elegant and efficient way.',
        'about.approach.p2': 'I work with a methodology that combines design thinking, rapid prototyping, and continuous iteration. This approach allows me to transform concepts into tangible products that can be tested, improved, and ultimately commercialized.',
        
        // Making-of page
        'making-of.title': 'Making-of',
        'making-of.subtitle': 'Discover the behind-the-scenes of my projects',
        'making-of.hatlamp.title': 'Hatlamp - Wireless LED Lamp',
        'making-of.hatlamp.intro': 'Creating Hatlamp was a fascinating journey into object design and electronics.',
        'making-of.hatlamp.concept.title': 'The Concept',
        'making-of.hatlamp.concept.desc': 'The idea was to create a portable lamp that could be worn as a fashion accessory. Inspired by British heritage, Hatlamp combines functionality and aesthetics in a compact design.',
        'making-of.hatlamp.technical.title': 'Technical Development',
        'making-of.hatlamp.technical.desc': 'The biggest challenge was miniaturizing all electronic components while maintaining sufficient battery life. After several iterations, we succeeded in creating an efficient LED system with an integrated rechargeable battery.',
        'making-of.hatlamp.production.title': 'Production',
        'making-of.hatlamp.production.desc': '195 units were produced and sold, mainly via Etsy. User feedback was extremely positive, with many appreciating the unique design and build quality.',
        'making-of.drawerwallet.title': 'DrawerWallet - Minimalist Wallet',
        'making-of.drawerwallet.intro': 'DrawerWallet was born from my personal need for a minimalist and functional wallet.',
        'making-of.drawerwallet.design.title': 'Design & Prototyping',
        'making-of.drawerwallet.design.desc': 'The concept relies on a drawer mechanism that allows easy access to cards while maintaining an ultra-thin profile. Several prototypes were made using 3D printing before finalizing the design.'
    }
};

// Langue par défaut
let currentLang = localStorage.getItem('language') || 'fr';

// Fonction pour traduire la page
function translatePage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);
    
    // Traduire tous les éléments avec data-i18n
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            // Utiliser innerHTML si l'élément contient des balises HTML, sinon textContent
            if (element.innerHTML.includes('<')) {
                element.innerHTML = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
    
    // Mettre à jour les boutons de langue
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`.lang-btn[data-lang="${lang}"]`)?.classList.add('active');
    
    // Mettre à jour l'attribut lang du HTML
    document.documentElement.lang = lang;
}

// Initialiser la langue au chargement
document.addEventListener('DOMContentLoaded', () => {
    // Attendre un court instant pour s'assurer que tout le DOM est chargé
    setTimeout(() => {
        translatePage(currentLang);
    }, 50);
    
    // Ajouter les événements aux boutons de langue
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            translatePage(lang);
        });
    });
});
