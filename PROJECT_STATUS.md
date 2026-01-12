# État du Projet raffner.com - Janvier 2026

## 📋 Vue d'ensemble

Site portfolio personnel de Steve Raffner présentant ses projets d'innovation et inventions.
- **URL**: https://raffner.com (+ www.raffner.com)
- **Hébergement**: Cloudflare Pages
- **Repository**: https://github.com/steveraffner/raffner-website
- **Branch principale**: main
- **Déploiement**: Automatique via GitHub push

## 🌐 Structure du site (12 pages)

### Pages principales
1. **index.html** - Page d'accueil avec hero et grille de 8 projets
2. **about.html** - À propos
3. **contact.html** - Contact
4. **making-of.html** - Coulisses de HatLamp et DrawerWallet

### Pages projets (sous-dossier /projects/)
5. **mobicapsule.html** - Prototype médical (5 prototypes)
6. **eldorajob.html** - App de profilage (Testé par Cern et Kelly Service)
7. **hatlamp.html** - Lampe accessoire mode (195 fabriquées)
8. **scalorie.html** - Balance IoT (5 prototypes)
9. **timebomb.html** - IoT TimeBomb (5 prototypes)
10. **hausbird.html** - Cabines modulaires (3 vendues)
11. **cento.html** - Cento by UNADrinkWare (10 prototypes)
12. **chatinvitation.html** - ChatInvitation (2000 distribués)

## 🌍 Système d'internationalisation (FR/EN)

### Architecture
- **Fichier principal**: `/assets/js/lang.js` (509 lignes, ~274 clés de traduction)
- **Mécanisme**: Attributs `data-i18n="clé"` sur les éléments HTML
- **Stockage**: `localStorage.setItem('language', 'fr'/'en')`
- **Sélecteur**: Drapeaux cliquables dans le header (🇫🇷/🇬🇧)

### Convention de nommage des clés
```javascript
'hero.title': 'Titre du hero'
'hero.description': 'Paragraphe description'
'hero.cta.title': 'Titre CTA'
'hero.cta.button': 'Texte bouton'
'project.mobicapsule.desc': 'Description projet'
'makingof.hatlamp.task1': 'Tâche 1'
'footer.rights': '© 2026 Raffner. Tous droits réservés.'
```

### Contenu par page
- **index.html**: hero.*, hero.cta.*, project.*.desc, footer.rights
- **making-of.html**: makingof.page.title, makingof.hatlamp.task1-9, makingof.hatlamp.badge/link, makingof.drawerwallet.*
- **projects/*.html**: nom_projet.* (~3-20 clés par projet selon complexité)

## 🎨 Design & Styling

### Technologies
- **CSS**: `/assets/css/style.css` (1358 lignes)
- **Fonts**: 
  - Archivo (Google Fonts) - Titre hero uniquement, font-weight: 400
  - Inconsolata - Corps de texte
  - Bebas Neue - Autres titres
- **Icônes**: Icône jaune ronde dans le header

### Variables CSS principales
```css
--color-primary: #ffd700;    /* Jaune */
--color-secondary: #1a1a1a;  /* Noir foncé */
--color-text: #000000;       /* Noir pur pour titres/sous-titres */
--color-bg: #f5f3ed;         /* Beige clair background */
```

### Section Hero (index.html)
- **Titre h2**: Archivo font-weight 400, 29px (mobile: 20px), noir pur
- **Description p**: 21px, line-height 1.6, **couleur grise #5b5a59**
- **CTA bar**: Bordure jaune 3px, background transparent, layout horizontal (titre gauche, bouton droite)
- **Layout**: Full-width, CTA bar positionnée entre texte et grille projets

### Grille projets
- **Responsive**: 1 colonne (mobile) → 2 colonnes (@768px) → 4 colonnes (@1024px)
- **Images**: max-width 100%, display: block, aspect-ratio 4/3, object-fit: cover
- **Cards**: Hover avec scale 1.02 et box-shadow

### Header responsive
- **Mobile** (@max-width: 767px):
  - Logo: 36px
  - Badge: 10px padding, font-size 12px
  - Nav: 14px
  - Drapeaux: 16px

## 📁 Architecture des fichiers

```
/
├── index.html
├── about.html
├── contact.html
├── making-of.html
├── projects/
│   ├── mobicapsule.html
│   ├── eldorajob.html
│   ├── hatlamp.html
│   ├── scalorie.html
│   ├── timebomb.html
│   ├── hausbird.html
│   ├── cento.html
│   └── chatinvitation.html
├── assets/
│   ├── css/
│   │   └── style.css (1358 lignes)
│   ├── js/
│   │   └── lang.js (509 lignes, ~274 clés)
│   └── img/
│       ├── logo-jaune-rond.png
│       ├── mobicapsule.jpg
│       ├── eldorajob.jpg
│       └── [autres images projets...]
└── PROJECT_STATUS.md (ce fichier)
```

## 🔧 Comment modifier le contenu

### Ajouter une traduction
1. Ouvrir `/assets/js/lang.js`
2. Ajouter la clé dans l'objet `fr: { ... }` ET `en: { ... }`
3. Dans le HTML, ajouter `data-i18n="votre.cle"` sur l'élément
4. La valeur par défaut dans le HTML sera en français

### Modifier une description de projet
1. Chercher la clé dans `lang.js` (ex: `'project.eldorajob.desc'`)
2. Modifier les versions FR et EN
3. Modifier aussi le HTML par défaut dans `index.html`

### Ajouter un nouveau projet
1. Créer `/projects/nouveau-projet.html` (copier une page existante)
2. Ajouter les clés de traduction dans `lang.js`:
   - `'nouveau-projet.title'`
   - `'nouveau-projet.lead'`
   - `'nouveau-projet.section1.title'`
   - etc.
3. Ajouter la card dans `index.html`:
   ```html
   <article class="project-card">
       <a href="projects/nouveau-projet.html">
           <div class="project-image">
               <img src="assets/img/nouveau-projet.jpg" alt="Titre">
           </div>
           <div class="project-info">
               <h3 class="project-title">Titre</h3>
               <p class="project-description" data-i18n="project.nouveau-projet.desc">Description FR</p>
               <span class="project-year">#SR©ANNÉE-XX-X</span>
           </div>
       </a>
   </article>
   ```

### Changer les couleurs
Modifier les variables CSS au début de `/assets/css/style.css` (lignes 81-90)

## 📝 Dernières modifications (Janvier 2026)

### Commits récents (dans l'ordre)
1. **b53fabc** - Description Eldorajob: "Testé par le Cern et Kelly Service Suisse" (FR/EN)
2. **477b6da** - Titre hero en font-weight 400 (plus fin, au lieu de 600)
3. **768aa2d** - Texte description hero en gris #5b5a59 (au lieu de noir)
4. **bc5df22** - Titre hero sans uppercase (casse normale)
5. **3801271** - Police Archivo Google Font pour titre hero
6. **9bb7521** - Images grille responsive uniformes (max-width 100%)
7. **7b651a3** - Couleur texte en noir pur #000000 (au lieu de #1a1a1a)
8. **bbfcf34** - Footer index.html avec data-i18n (internationalisation complète)

### Fonctionnalités complétées
✅ Responsive mobile/tablet/desktop optimisé
✅ Internationalisation FR/EN complète (12 pages, ~274 clés)
✅ Header responsive avec drapeaux switcher
✅ Hero section redesignée (CTA bar horizontale, bordure jaune)
✅ Grille 4 colonnes responsive
✅ Images uniformes avec aspect-ratio
✅ Polices Archivo (hero), Inconsolata (body), Bebas Neue (headings)
✅ Couleurs harmonisées (noir pur, gris texte, jaune primaire)
✅ Déploiement Cloudflare Pages automatique
✅ Custom domains (raffner.com + www)

## 🚀 Workflow de développement

### Tester localement
```bash
# Ouvrir index.html dans un navigateur
# ou utiliser un serveur local
python3 -m http.server 8000
# Puis ouvrir http://localhost:8000
```

### Déployer sur production
```bash
cd /Users/steveraffner/Desktop/RafCloudFlare
git add .
git commit -m "Description des changements"
git push
# Le site se met à jour automatiquement sur raffner.com en ~1-2 min
```

### Vérifier le déploiement
- Dashboard Cloudflare: Workers & Pages > raffner-website
- Vérifier que le dernier commit apparaît dans "Deployments"
- Status doit être "Success" et "Active"

## 🔍 Points d'attention

### Ne pas oublier
- Toujours ajouter les traductions FR **ET** EN dans `lang.js`
- Mettre `data-i18n="cle"` sur chaque élément traduit
- Garder la valeur par défaut en français dans le HTML
- Les images doivent avoir `max-width: 100%` pour le responsive
- Footer utilise `<span data-i18n="footer.rights">` (pas de `<p>`)

### Cache Cloudflare
Si les changements ne s'affichent pas immédiatement:
- Hard refresh: `Cmd+Shift+R` (Mac) ou `Ctrl+Shift+R` (Windows)
- Tester en navigation privée
- Attendre 1-2 minutes pour la propagation

### Debug traductions
- Console JavaScript affiche les logs de `translatePage()`
- Vérifier que la clé existe dans les deux langues
- Vérifier l'attribut `data-i18n` est correct (pas de typo)

## 📞 Contact & Infos

- **Propriétaire**: Steve Raffner
- **Email**: contact@raffner.com
- **GitHub**: steveraffner
- **Repository**: steveraffner/raffner-website
- **Workspace local**: `/Users/steveraffner/Desktop/RafCloudFlare`

---

**Dernière mise à jour**: 12 janvier 2026
**Version**: 1.0 - Site en production
