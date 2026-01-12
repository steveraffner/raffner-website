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
        'project.eldorajob.desc': 'Testé par le Cern et Kelly Service Suisse',
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
        'making-of.drawerwallet.design.desc': 'Le concept repose sur un mécanisme de tiroir qui permet d\'accéder facilement aux cartes tout en maintenant un profil ultra-fin. Plusieurs prototypes ont été réalisés en impression 3D avant de finaliser le design.',
        
        // Contact page
        'contact.title': 'Contact',
        'contact.intro': 'Intéressé par une collaboration, une commande ou simplement envie d\'échanger ? N\'hésitez pas à me contacter.',
        'contact.email.note': 'Pour toute demande professionnelle',
        'contact.social.title': 'Réseaux sociaux',
        'contact.social.note': 'Suivez mes derniers projets',
        'contact.studio.title': 'Atelier',
        'contact.studio.location': 'Genève, Suisse',
        'contact.studio.appointment': 'Sur rendez-vous uniquement',
        'contact.studio.note': 'Les visites d\'atelier sont possibles après arrangement préalable',
        'contact.collab.title': 'Collaborations',
        'contact.collab.intro': 'Je suis ouvert aux projets suivants :',
        'contact.collab.item1': 'Développement de produits IoT',
        'contact.collab.item2': 'Conseil en innovation',
        'contact.collab.item3': 'Design industriel',
        'contact.collab.item4': 'Prototypage rapide',
        'contact.collab.item5': 'Projets sur mesure',
        'contact.response': 'Je réponds généralement sous 48 heures.',
        
        // Making-of page content
        'makingof.page.title': 'LE MAKING-OF DE LA CRÉATION DE NOUVEAUX PRODUITS.',
        'makingof.hatlamp.task1': 'Mood book',
        'makingof.hatlamp.task2': 'Ideation',
        'makingof.hatlamp.task3': 'Research',
        'makingof.hatlamp.task4': 'Intellectual property',
        'makingof.hatlamp.task5': 'Design',
        'makingof.hatlamp.task6': 'PCB Electronics',
        'makingof.hatlamp.task7': 'Packaging',
        'makingof.hatlamp.task8': 'Project management',
        'makingof.hatlamp.task9': 'Onemanshow',
        'makingof.hatlamp.badge': 'Hatlamp',
        'makingof.hatlamp.link': '→ HatLamp Product page',
        'makingof.drawerwallet.badge': 'DrawerWallet',
        'makingof.drawerwallet.hashtags': '#ideation #modelization #solidworks #CNC #branding #packaging #sourcing #semi-industrialization #distribution #marketing',
        
        // Mobicapsule project
        'mobicapsule.title': 'Mobicapsule Medical Proto',
        'mobicapsule.lead': 'Transformer un coffre de toit en capsule de transport COVID-19',
        'mobicapsule.video.error': 'Votre navigateur ne supporte pas la lecture de vidéos HTML5.',
        'mobicapsule.intro': 'Les médias nationaux ont couvert mon invention et mon prototype, et je suis reconnaissant pour l\'attention et le soutien. Vous trouverez ci-dessous des liens vers certains articles.',
        'mobicapsule.media.title': 'Couverture médiatique',
        'mobicapsule.media.bfm': 'Coronavirus: un coffre de toit transformé en capsule pour transporter les malades',
        'mobicapsule.media.lematin': 'Des coffres de toit pour transporter les patients Covid-19',
        'mobicapsule.industry.title': 'Soutien de l\'industrie',
        'mobicapsule.industry.norauto': 'Norauto apporte son aide dans le test de Mobicapsule',
        'mobicapsule.industry.somfy': 'Covid-19: Somfy fabrique une Mobicapsule pour transporter les malades',
        'mobicapsule.p1': 'Alors que la pandémie de COVID-19 ravageait le monde, j\'ai reconnu le besoin de méthodes plus sûres et plus efficaces pour transporter les patients infectés vers les établissements médicaux.',
        'mobicapsule.p2': 'C\'est alors que j\'ai eu l\'idée de transformer un coffre de toit de voiture en capsule de transport pouvant transporter un patient à la fois. Équipée d\'un apport d\'oxygène et d\'un système de ventilation pour empêcher la propagation du virus, cette capsule de toit est conçue pour s\'adapter sur le dessus d\'une voiture et peut être facilement désinfectée après chaque utilisation.',
        'mobicapsule.p3': 'Bien que la capsule n\'ait pas encore été testée sur de vrais patients et nécessite l\'approbation des autorités sanitaires, je suis fier d\'avoir développé une solution potentielle pour aider au transport des patients COVID-19 dans les zones ayant un accès limité aux transports médicaux. Cette invention démontre ma créativité, mes compétences en résolution de problèmes et mon dévouement à avoir un impact positif sur la société en temps de crise.',
        'mobicapsule.technical.title': 'Caractéristiques techniques',
        'mobicapsule.technical.p1': 'Un entrepreneur franco-suisse a conçu un coffre de toit pour voitures afin de transporter les patients Covid-19 en toute sécurité et limiter la contamination lors des transferts inter-hospitaliers. La Mobicapsule, un nouveau module de transport pour patients, a été accessoirisée à l\'intérieur du coffre de toit avec un matelas pour assurer le confort du patient et des gants intégrés dans la boîte pour permettre une intervention à tout moment.',
        'mobicapsule.technical.p2': 'Le prototype est résistant aux hautes et basses températures, léger et possède des qualités imperméables. La Mobicapsule comporte également des trous hermétiques sur les côtés pour un accès facile au patient, ainsi que des sorties pour l\'équipement médical, tels que respirateurs, câbles, poches de perfusion, bouteilles d\'oxygène, et plus encore. L\'initiateur du projet vise à obtenir un financement pour la production industrielle de la Mobicapsule via une campagne de financement participatif. Une deuxième version, pour les patients conscients, est déjà à l\'étude.',
        'mobicapsule.team.title': 'Collaboration d\'équipe',
        'mobicapsule.team.p1': 'Pour transporter les patients COVID-19 en toute sécurité, une équipe d\'ingénieurs et de travailleurs de la santé en Haute-Savoie, France, a transformé un coffre de toit de voiture en capsule. L\'équipe, qui comprenait un médecin hospitalier et urgentiste nommé Frédéric Champly et un entrepreneur franco-suisse et consultant en innovation nommé Steve Raffner, a eu l\'idée de la capsule pour protéger les patients et ceux qui les transfèrent vers d\'autres hôpitaux pendant ce qui a été décrit comme "l\'une des plus grandes opérations de transfert de patients depuis la Seconde Guerre mondiale".',
        'mobicapsule.team.p2': 'La capsule, appelée "Mobicapsule", a été conçue à l\'aide d\'un grand coffre de toit de voiture, qui a été jugé facilement disponible et optimalement conçu pour le projet. Raffner explique que la bataille contre le COVID-19 est une course contre la montre et qu\'il était inconcevable de regarder les transferts médicaux se dérouler en plein air. La Mobicapsule a été créée pour fournir une solution robuste, simple et reproductible pour protéger les travailleurs de la santé tout en réduisant l\'utilisation de consommables.',
        
        // HatLamp project
        'hatlamp.title': 'HatLamp',
        'hatlamp.lead': 'Lampe LED sans fil inspirée du patrimoine britannique',
        'hatlamp.specs.title': 'Spécifications techniques',
        'hatlamp.specs.dimensions': 'Dimensions:',
        'hatlamp.specs.dimensions.value': 'H:38cm x L:12cm (4.7×4.7×14.9)',
        'hatlamp.specs.weight': 'Poids:',
        'hatlamp.specs.weight.value': '1,2 Kg',
        'hatlamp.specs.charge': 'Charge complète:',
        'hatlamp.specs.charge.value': '<5 heures',
        'hatlamp.specs.runtime': 'Autonomie:',
        'hatlamp.specs.runtime.value': '16-24 heures selon la luminosité',
        'hatlamp.specs.limited': 'Édition limitée:',
        'hatlamp.specs.limited.value': '50 or / 150 noir',
        'hatlamp.specs.patent': 'Brevet:',
        'hatlamp.specs.patent.value': '#SR©2021 /EUIPO Patent #008406516-0001',
        'hatlamp.about.title': 'À propos de HatLamp',
        'hatlamp.about.p1': 'La hatlamp est fabriquée avec des matériaux solides, durables et de qualité supérieure et combine tradition et technologie.',
        'hatlamp.about.p2': 'Elle peut durer jusqu\'à 24 heures sur une charge complète et est facilement transportable. La lampe crée une atmosphère chaleureuse et peut être utilisée dans divers contextes tels que salons, cafés, terrasses et balcons.',
        'hatlamp.about.p3': 'C\'est une lampe fonctionnelle avec des détails de design de qualité et de la praticité, et son confort moderne est alimenté par une charge USB. Dans l\'ensemble, c\'est une pièce belle et unique qui ajoute une touche de patrimoine britannique à toute collection d\'intérieur.',
        'hatlamp.btn.buy': 'ACHETER ICI',
        'hatlamp.btn.makingof': 'Making-of HatLamp',
        
        // Scalorie project
        'scalorie.title': 'Scalorie® iOT Scale',
        'scalorie.lead': 'Balance de cuisine compte-calories',
        'scalorie.problem.title': 'Le problème',
        'scalorie.problem.p1': 'Manger sainement peut être un défi, surtout quand on ne sait pas combien de calories on consomme. Les balances de cuisine traditionnelles ne fournissent que des mesures de poids, laissant les utilisateurs deviner la valeur nutritionnelle de leurs aliments.',
        'scalorie.problem.p2': 'Ce manque d\'information peut entraîner une suralimentation, une sous-alimentation et des objectifs de santé manqués.',
        'scalorie.solution.title': 'La solution',
        'scalorie.solution.p1': 'Scalorie est une balance de cuisine IoT innovante qui compte non seulement les calories, mais fournit également des informations nutritionnelles détaillées pour les aliments que vous pesez. En se connectant à une vaste base de données d\'informations nutritionnelles, Scalorie peut vous dire exactement combien de calories, de protéines, de glucides et de graisses se trouvent dans votre nourriture.',
        'scalorie.solution.p2': 'Avec son design élégant et son interface conviviale, Scalorie facilite le suivi de votre apport calorique et la prise de décisions éclairées sur votre alimentation.',
        'scalorie.control.title': 'Prenez le contrôle de votre santé',
        'scalorie.control.p1': 'Que vous essayiez de perdre du poids, de développer vos muscles ou simplement de manger plus sainement, Scalorie peut vous aider à atteindre vos objectifs. En fournissant des informations précises et en temps réel sur votre nourriture, Scalorie vous donne les connaissances dont vous avez besoin pour prendre des décisions éclairées sur votre alimentation.',
        'scalorie.control.p2': 'Dites adieu aux conjectures et bonjour à un vous plus sain avec Scalorie.',
        
        // TimeBomb project
        'timebomb.title': 'TimeBomb - iOT',
        'timebomb.lead': 'Prototype de capsule temporelle - Système de verrouillage numérique',
        'timebomb.overview.title': 'Aperçu du projet',
        'timebomb.overview.p1': 'TimeBomb est un prototype de capsule temporelle innovant équipé d\'un système de verrouillage numérique qui s\'ouvre automatiquement à une date prédéterminée. Ce dispositif IoT combine l\'artisanat traditionnel avec la technologie moderne pour créer une expérience unique de préservation de souvenirs.',
        'timebomb.overview.p2': 'Le projet démontre l\'intégration du matériel, des logiciels et du design pour créer un produit fonctionnel qui capture l\'imagination et préserve les souvenirs pour les générations futures.',
        'timebomb.specs.title': 'Spécifications techniques',
        'timebomb.specs.lock': 'Système de verrouillage:',
        'timebomb.specs.lock.value': 'Mécanisme de verrouillage électronique avec minuterie programmable',
        'timebomb.specs.power': 'Alimentation:',
        'timebomb.specs.power.value': 'Batterie rechargeable longue durée avec système de sauvegarde',
        'timebomb.specs.connectivity': 'Connectivité:',
        'timebomb.specs.connectivity.value': 'WiFi et Bluetooth pour configuration et surveillance',
        'timebomb.specs.material': 'Matériau:',
        'timebomb.specs.material.value': 'Boîtier en bois premium avec composants électroniques scellés',
        'timebomb.specs.security': 'Sécurité:',
        'timebomb.specs.security.value': 'Cryptage de bout en bout et mécanisme de verrouillage inviolable',
        'timebomb.howitworks.title': 'Comment ça marche',
        'timebomb.howitworks.p1': 'Les utilisateurs configurent la date de déverrouillage via une application mobile dédiée. Une fois verrouillé, le système ne peut pas être ouvert jusqu\'à la date programmée, créant un véritable sentiment d\'anticipation et de préservation.',
        'timebomb.howitworks.p2': 'Le dispositif maintient l\'intégrité des contenus grâce à un contrôle environnemental et peut alerter les utilisateurs via l\'application de tout problème potentiel nécessitant une attention.',
        'timebomb.usecases.title': 'Cas d\'utilisation',
        'timebomb.usecases.personal': 'Capsules temporelles personnelles pour jalons de vie',
        'timebomb.usecases.corporate': 'Capsules d\'entreprise pour anniversaires d\'entreprise',
        'timebomb.usecases.educational': 'Projets éducatifs pour les écoles et musées',
        'timebomb.usecases.family': 'Héritages familiaux et traditions',
        
        // Eldorajob project
        'eldorajob.title': 'Eldorajob Profiling App',
        'eldorajob.lead': 'Incorporé / vendu',
        'eldorajob.intro.p1': 'Eldorajob était une startup ambitieuse visant à révolutionner le processus de recrutement grâce à un profilage avancé piloté par l\'IA et à la mise en relation. Le projet nécessitait un investissement de 110 000 CHF et a été développé avec l\'objectif de combler l\'écart entre les chercheurs d\'emploi et les employeurs.',
        'eldorajob.intro.p2': 'La plateforme utilisait des algorithmes sophistiqués pour analyser les profils des candidats et les faire correspondre avec des opportunités d\'emploi appropriées basées non seulement sur les compétences, mais aussi sur les traits de personnalité et l\'adéquation culturelle.',
        'eldorajob.partners.title': 'Partenaires & Reconnaissance',
        'eldorajob.partners.p1': 'Au cours de son développement, Eldorajob a obtenu un soutien et une reconnaissance importants de divers partenaires de l\'industrie et organisations. Le projet a démontré un potentiel innovant dans l\'espace de la technologie des ressources humaines.',
        'eldorajob.partners.p2': 'Bien que la startup ait finalement été incorporée et vendue, les technologies et méthodologies développées au cours de ce projet continuent d\'influencer les pratiques modernes de recrutement.',
        'eldorajob.solution.title': 'Solution innovante',
        'eldorajob.solution.p1': 'Le cœur d\'Eldorajob était son moteur de profilage propriétaire qui allait au-delà du simple matching de mots-clés. Le système analysait les parcours professionnels, les compétences, les traits de personnalité et les préférences culturelles pour créer des correspondances vraiment compatibles.',
        'eldorajob.solution.p2': 'Cette approche a considérablement réduit le temps d\'embauche et amélioré les taux de satisfaction des employés en garantissant de meilleures correspondances dès le départ.',
        'eldorajob.recruitment.title': 'Recrutement rationalisé',
        'eldorajob.recruitment.p1': 'Le processus de recrutement a été rationalisé grâce à des interviews vidéo automatisées, des évaluations de compétences et des vérifications d\'antécédents, tous intégrés dans une plateforme unique.',
        'eldorajob.recruitment.p2': 'Les employeurs pouvaient gérer l\'ensemble du pipeline de recrutement depuis la publication d\'emploi jusqu\'à l\'embauche via une interface intuitive, économisant d\'innombrables heures de travail administratif.',
        
        // Hausbird project  
        'hausbird.title': 'Hausbird',
        'hausbird.lead': 'Briser les frontières dans le design de logements modulaires haut de gamme',
        'hausbird.clients': 'Clients:',
        'hausbird.clients.value': 'Privés',
        'hausbird.partners': 'Partenaires:',
        'hausbird.partners.value': 'Divers',
        'hausbird.yourproject': 'Votre projet:',
        'hausbird.yourproject.value': 'Sur demande',
        'hausbird.study': 'Notre projet a donné lieu à une étude d\'un an sur le logement modulaire de luxe.',
        'hausbird.intro': 'Nous avons reconnu le manque d\'options pour les maisons modulaires haut de gamme, nous avons donc entrepris de développer des solutions innovantes pouvant offrir à la fois polyvalence et luxe. Nos recherches approfondies ont abouti à une gamme de maisons modulaires haut de gamme personnalisables qui maximisent l\'utilisation de l\'espace tout en offrant qualité et savoir-faire premium.',
        'hausbird.left.title': 'Hausbird',
        'hausbird.left.p1': 'Présentation de HausBird - une cabane modulaire et haut de gamme conçue pour un concours d\'architecture. Nous avons remarqué que les maisons de luxe privilégient souvent les vastes espaces, laissant peu ou pas de place à une vie minimaliste et compacte.',
        'hausbird.left.p2': 'Pour résoudre ce problème, nous avons créé un habitat multifonctionnel qui maximise chaque centimètre carré tout en maintenant une qualité et une ingéniosité de premier ordre.',
        'hausbird.right.title': 'Design innovant',
        'hausbird.right.intro': 'Notre design innovant a été prototypé comme :',
        'hausbird.right.use1': 'Un pool house',
        'hausbird.right.use2': 'Un cube social pour un cabinet d\'avocats',
        'hausbird.right.use3': 'Une cabane de relaxation dans un parc privé',
        'hausbird.right.conclusion': 'Avec HausBird©, vous pouvez expérimenter la vie de luxe dans un espace minimaliste et compact.',
        
        // Cento project
        'cento.title': 'Cento',
        'cento.lead': '10 prototypes',
        'cento.intro': 'Cento est un projet de design développé en collaboration avec des partenaires industriels pour explorer de nouvelles approches de conception de produits. Le projet a abouti à 10 prototypes fonctionnels démontrant différentes applications du concept.',
        
        // ChatInvitation project
        'chatinvitation.title': 'ChatInvitation',
        'chatinvitation.lead': '2000 distribués',
        'chatinvitation.intro': 'ChatInvitation est un projet de 2012 qui a exploré de nouvelles façons de connecter les gens à travers des invitations numériques innovantes. Le projet a abouti à 2000 unités distribuées et a démontré le potentiel des technologies de communication émergentes.'
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
        'project.eldorajob.desc': 'Tested by Cern and Kelly Service Switzerland',
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
        'making-of.drawerwallet.design.desc': 'The concept relies on a drawer mechanism that allows easy access to cards while maintaining an ultra-thin profile. Several prototypes were made using 3D printing before finalizing the design.',
        
        // Contact page
        'contact.title': 'Contact',
        'contact.intro': 'Interested in a collaboration, a commission or just want to chat? Feel free to contact me.',
        'contact.email.note': 'For any professional inquiry',
        'contact.social.title': 'Social Networks',
        'contact.social.note': 'Follow my latest projects',
        'contact.studio.title': 'Studio',
        'contact.studio.location': 'Geneva, Switzerland',
        'contact.studio.appointment': 'By appointment only',
        'contact.studio.note': 'Studio visits are possible after prior arrangement',
        'contact.collab.title': 'Collaborations',
        'contact.collab.intro': 'I am open to the following projects:',
        'contact.collab.item1': 'IoT product development',
        'contact.collab.item2': 'Innovation consulting',
        'contact.collab.item3': 'Industrial design',
        'contact.collab.item4': 'Rapid prototyping',
        'contact.collab.item5': 'Custom projects',
        'contact.response': 'I typically respond within 48 hours.',
        
        // Making-of page content
        'makingof.page.title': 'THE MAKING-OF OF CREATING NEW PRODUCTS.',
        'makingof.hatlamp.task1': 'Mood book',
        'makingof.hatlamp.task2': 'Ideation',
        'makingof.hatlamp.task3': 'Research',
        'makingof.hatlamp.task4': 'Intellectual property',
        'makingof.hatlamp.task5': 'Design',
        'makingof.hatlamp.task6': 'PCB Electronics',
        'makingof.hatlamp.task7': 'Packaging',
        'makingof.hatlamp.task8': 'Project management',
        'makingof.hatlamp.task9': 'Onemanshow',
        'makingof.hatlamp.badge': 'Hatlamp',
        'makingof.hatlamp.link': '→ HatLamp Product page',
        'makingof.drawerwallet.badge': 'DrawerWallet',
        'makingof.drawerwallet.hashtags': '#ideation #modelization #solidworks #CNC #branding #packaging #sourcing #semi-industrialization #distribution #marketing',
        
        // Mobicapsule project
        'mobicapsule.title': 'Mobicapsule Medical Proto',
        'mobicapsule.lead': 'Transforming a Car Roof Box into a COVID-19 Transport Capsule',
        'mobicapsule.video.error': 'Your browser does not support HTML5 video playback.',
        'mobicapsule.intro': 'National media outlets have covered my invention and prototype, and I\'m grateful for the attention and support. Below are links to some of the articles.',
        'mobicapsule.media.title': 'Media Coverage',
        'mobicapsule.media.bfm': 'Coronavirus: a roof box transformed into a capsule to transport patients',
        'mobicapsule.media.lematin': 'Roof boxes to transport Covid-19 patients',
        'mobicapsule.industry.title': 'Industry Support',
        'mobicapsule.industry.norauto': 'Norauto provides assistance in testing Mobicapsule',
        'mobicapsule.industry.somfy': 'Covid-19: Somfy manufactures a Mobicapsule to transport patients',
        'mobicapsule.p1': 'As the COVID-19 pandemic ravaged the world, I recognized the need for safer and more efficient methods of transporting infected patients to medical facilities.',
        'mobicapsule.p2': 'That\'s when I had the idea to transform a car roof box into a transport capsule that could carry one patient at a time. Equipped with an oxygen supply and a ventilation system to prevent the spread of the virus, this rooftop capsule is designed to fit on top of a car and can be easily disinfected after each use.',
        'mobicapsule.p3': 'Although the capsule has not yet been tested on actual patients and requires approval from health authorities, I am proud to have developed a potential solution to help transport COVID-19 patients in areas with limited access to medical transport. This invention showcases my creativity, problem-solving skills, and dedication to making a positive impact on society during times of crisis.',
        'mobicapsule.technical.title': 'Technical Features',
        'mobicapsule.technical.p1': 'A French-Swiss serial entrepreneur has designed a roof box for cars to transport Covid-19 patients safely and limit contamination during inter-hospital transfers. The Mobicapsule, a new transport module for patients, has been accessorised inside the roof box with a mattress to ensure patient comfort and gloves integrated into the box to allow intervention at any time.',
        'mobicapsule.technical.p2': 'The prototype is resistant to high and low temperatures, lightweight and has waterproof qualities. The Mobicapsule also features hermetic holes on the sides for easy access to the patient, as well as outlets for medical equipment, such as respirators, cables, infusion bags, oxygen bottles, and more. The project initiator aims to obtain funding for industrial production of the Mobicapsule through a crowdfunding campaign. A second version, for conscious patients, is already being studied.',
        'mobicapsule.team.title': 'Team Collaboration',
        'mobicapsule.team.p1': 'To transport COVID-19 patients safely, a team of engineers and healthcare workers in Haute-Savoie, France, transformed a car roof box into a capsule. The team, which included a hospital practitioner and emergency doctor named Frédéric Champly and a French-Swiss entrepreneur and innovation consultant named Steve Raffner, came up with the idea for the capsule to protect patients and those transferring them to other hospitals during what has been described as "one of the largest patient transfer operations since World War II".',
        'mobicapsule.team.p2': 'The capsule, called "Mobicapsule", was designed using a large car roof box, which was deemed easily available and optimally designed for the project. Raffner explains that the battle against COVID-19 is a race against time and that it was inconceivable to watch medical transfers take place outdoors. The Mobicapsule was created to provide a robust, simple, and replicable solution to protect healthcare workers while reducing the use of consumables.',
        
        // HatLamp project
        'hatlamp.title': 'HatLamp',
        'hatlamp.lead': 'Wireless LED Lamp inspired by British Heritage',
        'hatlamp.specs.title': 'Technical Specifications',
        'hatlamp.specs.dimensions': 'Dimensions:',
        'hatlamp.specs.dimensions.value': 'H:38cm x W:12cm (4.7×4.7×14.9)',
        'hatlamp.specs.weight': 'Weight:',
        'hatlamp.specs.weight.value': '1.2 Kg',
        'hatlamp.specs.charge': 'Full charge:',
        'hatlamp.specs.charge.value': '<5 hours',
        'hatlamp.specs.runtime': 'Runtime:',
        'hatlamp.specs.runtime.value': '16-24 hours depending brightness',
        'hatlamp.specs.limited': 'Limited edition:',
        'hatlamp.specs.limited.value': '50 gold / 150 black',
        'hatlamp.specs.patent': 'Patent:',
        'hatlamp.specs.patent.value': '#SR©2021 /EUIPO Patent #008406516-0001',
        'hatlamp.about.title': 'About HatLamp',
        'hatlamp.about.p1': 'The hatlamp is made of strong, durable, and premium materials and combines both tradition and technology.',
        'hatlamp.about.p2': 'It can last up to 24 hours on a full charge and is easily transportable. The lamp provides a warm atmosphere and can be used in various settings such as lounges, cafes, terraces, and balconies.',
        'hatlamp.about.p3': 'It is a functional lamp with quality design details and practicality, and its modern comfort is fueled by USB charging. Overall, it is a beautiful and unique piece that adds a touch of British heritage to any interior collection.',
        'hatlamp.btn.buy': 'GET IT HERE',
        'hatlamp.btn.makingof': 'Making-of HatLamp',
        
        // Scalorie project
        'scalorie.title': 'Scalorie® iOT Scale',
        'scalorie.lead': 'Calorie counter kitchen scale',
        'scalorie.problem.title': 'The Problem',
        'scalorie.problem.p1': 'Eating healthy can be a challenge, especially when you don\'t know how many calories you\'re consuming. Traditional kitchen scales only provide weight measurements, leaving users to guess at the nutritional value of their food.',
        'scalorie.problem.p2': 'This lack of information can lead to overeating, undereating, and missed health goals.',
        'scalorie.solution.title': 'The Solution',
        'scalorie.solution.p1': 'Scalorie is an innovative IoT kitchen scale that not only counts calories but also provides detailed nutritional information for the food you weigh. By connecting to a vast database of nutritional information, Scalorie can tell you exactly how many calories, protein, carbs, and fat are in your food.',
        'scalorie.solution.p2': 'With its sleek design and user-friendly interface, Scalorie makes it easy to track your calorie intake and make informed decisions about your diet.',
        'scalorie.control.title': 'Take Control of Your Health',
        'scalorie.control.p1': 'Whether you\'re trying to lose weight, build muscle, or simply eat healthier, Scalorie can help you reach your goals. By providing accurate, real-time information about your food, Scalorie gives you the knowledge you need to make informed decisions about your diet.',
        'scalorie.control.p2': 'Say goodbye to guesswork and hello to a healthier you with Scalorie.',
        
        // TimeBomb project
        'timebomb.title': 'TimeBomb - iOT',
        'timebomb.lead': 'Time Capsule Prototype - Digital Lock System',
        'timebomb.overview.title': 'Project Overview',
        'timebomb.overview.p1': 'TimeBomb is an innovative time capsule prototype equipped with a digital lock system that automatically opens at a predetermined date. This IoT device combines traditional craftsmanship with modern technology to create a unique memory preservation experience.',
        'timebomb.overview.p2': 'The project demonstrates the integration of hardware, software, and design to create a functional product that captures the imagination and preserves memories for future generations.',
        'timebomb.specs.title': 'Technical Specifications',
        'timebomb.specs.lock': 'Lock System:',
        'timebomb.specs.lock.value': 'Electronic locking mechanism with programmable timer',
        'timebomb.specs.power': 'Power:',
        'timebomb.specs.power.value': 'Long-life rechargeable battery with backup system',
        'timebomb.specs.connectivity': 'Connectivity:',
        'timebomb.specs.connectivity.value': 'WiFi and Bluetooth for setup and monitoring',
        'timebomb.specs.material': 'Material:',
        'timebomb.specs.material.value': 'Premium wood casing with sealed electronic components',
        'timebomb.specs.security': 'Security:',
        'timebomb.specs.security.value': 'End-to-end encryption and tamper-proof locking mechanism',
        'timebomb.howitworks.title': 'How It Works',
        'timebomb.howitworks.p1': 'Users set the unlock date through a dedicated mobile app. Once locked, the system cannot be opened until the programmed date, creating a true sense of anticipation and preservation.',
        'timebomb.howitworks.p2': 'The device maintains the integrity of contents through environmental control and can alert users via the app of any potential issues requiring attention.',
        'timebomb.usecases.title': 'Use Cases',
        'timebomb.usecases.personal': 'Personal time capsules for life milestones',
        'timebomb.usecases.corporate': 'Corporate capsules for company anniversaries',
        'timebomb.usecases.educational': 'Educational projects for schools and museums',
        'timebomb.usecases.family': 'Family heirlooms and traditions',
        
        // Eldorajob project
        'eldorajob.title': 'Eldorajob Profiling App',
        'eldorajob.lead': 'Incorporated / sold',
        'eldorajob.intro.p1': 'Eldorajob was an ambitious startup aiming to revolutionize the recruitment process through advanced AI-driven profiling and matching. The project required an investment of 110,000 CHF and was developed with the goal of bridging the gap between job seekers and employers.',
        'eldorajob.intro.p2': 'The platform used sophisticated algorithms to analyze candidate profiles and match them with appropriate job opportunities based not only on skills but also on personality traits and cultural fit.',
        'eldorajob.partners.title': 'Partners & Recognition',
        'eldorajob.partners.p1': 'During its development, Eldorajob secured significant support and recognition from various industry partners and organizations. The project demonstrated innovative potential in the HR technology space.',
        'eldorajob.partners.p2': 'While the startup was ultimately incorporated and sold, the technologies and methodologies developed during this project continue to influence modern recruitment practices.',
        'eldorajob.solution.title': 'Innovative Solution',
        'eldorajob.solution.p1': 'The heart of Eldorajob was its proprietary profiling engine that went beyond simple keyword matching. The system analyzed career paths, skills, personality traits, and cultural preferences to create truly compatible matches.',
        'eldorajob.solution.p2': 'This approach significantly reduced hiring time and improved employee satisfaction rates by ensuring better matches from the start.',
        'eldorajob.recruitment.title': 'Streamlined Recruitment',
        'eldorajob.recruitment.p1': 'The recruitment process was streamlined through automated video interviews, skills assessments, and background checks, all integrated into a single platform.',
        'eldorajob.recruitment.p2': 'Employers could manage the entire recruitment pipeline from job posting to hiring through an intuitive interface, saving countless hours of administrative work.',
        
        // Hausbird project
        'hausbird.title': 'Hausbird',
        'hausbird.lead': 'Breaking Boundaries in High-End Modular Housing Design',
        'hausbird.clients': 'Clients:',
        'hausbird.clients.value': 'Private',
        'hausbird.partners': 'Partners:',
        'hausbird.partners.value': 'Various',
        'hausbird.yourproject': 'Your project:',
        'hausbird.yourproject.value': 'On request',
        'hausbird.study': 'Our project led to a year-long study on luxury modular housing.',
        'hausbird.intro': 'We recognized the lack of options for high-end modular homes, so we set out to develop innovative solutions that could offer both versatility and luxury. Our extensive research resulted in a range of customizable, high-end modular homes that maximize the use of space while offering premium quality and craftsmanship.',
        'hausbird.left.title': 'Hausbird',
        'hausbird.left.p1': 'Introducing HausBird - a modular and high-end cabin designed for an architecture competition. We noticed that luxury homes often prioritize vast spaces, leaving little to no room for minimalist and compact living.',
        'hausbird.left.p2': 'To solve this problem, we created a multifunctional habitat that maximizes every inch of space while maintaining top-notch quality and ingenuity.',
        'hausbird.right.title': 'Innovative Design',
        'hausbird.right.intro': 'Our innovative design has been prototyped as:',
        'hausbird.right.use1': 'A pool house',
        'hausbird.right.use2': 'A social cube for a law firm',
        'hausbird.right.use3': 'A relaxation cabin in a private park',
        'hausbird.right.conclusion': 'With HausBird©, you can experience luxury living in a minimalistic and compact space.',
        
        // Cento project
        'cento.title': 'Cento',
        'cento.lead': '10 prototypes',
        'cento.intro': 'Cento is a design project developed in collaboration with industrial partners to explore new approaches to product design. The project resulted in 10 functional prototypes demonstrating different applications of the concept.',
        
        // ChatInvitation project
        'chatinvitation.title': 'ChatInvitation',
        'chatinvitation.lead': '2000 distributed',
        'chatinvitation.intro': 'ChatInvitation is a 2012 project that explored new ways of connecting people through innovative digital invitations. The project resulted in 2000 units distributed and demonstrated the potential of emerging communication technologies.'
    }
};

// Langue par défaut
let currentLang = localStorage.getItem('language') || 'fr';

// Fonction pour traduire la page
function translatePage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);
    
    console.log('Translating to:', lang); // Debug
    
    // Traduire tous les éléments avec data-i18n
    const elements = document.querySelectorAll('[data-i18n]');
    console.log('Found elements:', elements.length); // Debug
    
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            // Utiliser innerHTML si l'élément contient des balises HTML, sinon textContent
            if (element.innerHTML.includes('<')) {
                element.innerHTML = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
            console.log('Translated:', key, '→', translations[lang][key]); // Debug
        } else {
            console.warn('Missing translation for:', key, 'in', lang); // Debug
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
