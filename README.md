# Raffner.com - Site Statique

Site portfolio statique moderne inspiré du design épuré de la galerie Finds (Other Peoples Places). Créé avec HTML5 et CSS pur, optimisé pour Cloudflare Pages.

## 🎨 Caractéristiques

- **Design minimaliste** : Grille responsive inspirée de galeries modernes
- **Performance optimale** : HTML/CSS pur, pas de framework
- **Mobile-first** : Responsive de 1 à 4 colonnes selon la taille d'écran
- **SEO-friendly** : Sémantique HTML5, méta tags optimisés
- **Déploiement simple** : Compatible Cloudflare Pages

## 📁 Structure du Projet

```
RafCloudFlare/
├── index.html              # Page d'accueil avec grille de projets
├── about.html              # Page À propos
├── contact.html            # Page Contact
├── assets/
│   ├── css/
│   │   └── style.css      # Feuille de style unique (grille responsive)
│   └── img/               # Images du site
│       ├── project-01.jpg # Images de projets
│       ├── project-02.jpg
│       └── ...
├── projects/              # Dossier pour futures pages de projets détaillés
├── _headers               # Configuration cache et sécurité Cloudflare
├── _redirects             # Redirections Cloudflare Pages
└── README.md              # Documentation
```

## 🚀 Déploiement sur Cloudflare Pages

### Méthode 1 : Via GitHub (Recommandé)

1. **Initialiser le repository Git** :
   ```bash
   cd /Users/steveraffner/Desktop/RafCloudFlare
   git init
   git add .
   git commit -m "Initial commit - Site statique Raffner"
   ```

2. **Créer un repository GitHub** :
   - Allez sur [github.com/new](https://github.com/new)
   - Nom : `raffner-website`
   - Visibilité : Public ou Private
   - Ne pas initialiser avec README

3. **Pousser le code** :
   ```bash
   git remote add origin https://github.com/VOTRE_USERNAME/raffner-website.git
   git branch -M main
   git push -u origin main
   ```

4. **Connecter à Cloudflare Pages** :
   - Connectez-vous à [dash.cloudflare.com](https://dash.cloudflare.com)
   - Pages → Create a project → Connect to Git
   - Sélectionnez votre repository `raffner-website`
   - Configuration :
     - **Framework preset** : None
     - **Build command** : (laisser vide)
     - **Build output directory** : `/`
   - Cliquez sur "Save and Deploy"

### Méthode 2 : Upload Direct

1. Allez sur Cloudflare Pages
2. Cliquez sur "Create a project" → "Upload assets"
3. Glissez-déposez tout le dossier `RafCloudFlare`
4. Le site sera déployé automatiquement

### Configuration du Domaine Custom

1. Dans Cloudflare Pages, allez dans l'onglet "Custom domains"
2. Cliquez sur "Set up a custom domain"
3. Entrez `raffner.com` ou `www.raffner.com`
4. Suivez les instructions pour pointer vos DNS

## ✏️ Modifier le Contenu

### Ajouter un Nouveau Projet

1. **Ajouter l'image** :
   - Placez votre image dans `assets/img/`
   - Nommez-la de manière cohérente (ex: `project-09.jpg`)
   - Format recommandé : JPG ou WebP, max 2000px de largeur

2. **Éditer index.html** :
   Ajoutez un nouveau bloc dans la section `.grid` :
   ```html
   <article class="project-card">
       <div class="project-image">
           <img src="assets/img/project-09.jpg" alt="Titre du Projet" loading="lazy">
       </div>
       <div class="project-info">
           <h3 class="project-title">Titre du Projet</h3>
           <p class="project-description">Description courte</p>
           <span class="project-year">2026</span>
       </div>
   </article>
   ```

3. **Commit et push** (si GitHub connecté) :
   ```bash
   git add .
   git commit -m "Ajout nouveau projet"
   git push
   ```
   Le site se redéploiera automatiquement.

### Modifier les Textes

- **Page d'accueil** : Éditez `index.html`
- **À propos** : Éditez `about.html`
- **Contact** : Éditez `contact.html`

Après modification, poussez les changements sur GitHub pour déploiement automatique.

### Personnaliser les Couleurs et Styles

Ouvrez `assets/css/style.css` et modifiez les variables CSS en début de fichier :

```css
:root {
    --color-bg: #ffffff;        /* Couleur de fond */
    --color-text: #1a1a1a;      /* Couleur texte principal */
    --color-accent: #000000;     /* Couleur accent */
    /* ... */
}
```

## 🖼️ Optimisation des Images

Pour de meilleures performances, optimisez vos images avant de les ajouter :

### Avec ImageMagick (recommandé) :
```bash
# Installer ImageMagick (macOS)
brew install imagemagick

# Redimensionner et optimiser une image
magick input.jpg -resize 2000x -quality 85 output.jpg

# Convertir en WebP pour taille réduite
magick input.jpg -quality 85 output.webp
```

### Avec des outils en ligne :
- [TinyPNG](https://tinypng.com/) - Compression PNG/JPG
- [Squoosh](https://squoosh.app/) - Conversion et compression WebP

## 📱 Test en Local

Pour tester le site localement :

```bash
# Option 1 : Python (macOS/Linux)
cd /Users/steveraffner/Desktop/RafCloudFlare
python3 -m http.server 8000

# Option 2 : PHP
php -S localhost:8000

# Puis ouvrez : http://localhost:8000
```

## 🎨 Personnalisation Avancée

### Changer la Disposition de la Grille

Dans `assets/css/style.css`, section "RESPONSIVE - DESKTOP" :

```css
@media (min-width: 1024px) {
    .grid {
        grid-template-columns: repeat(3, 1fr);  /* Changer 3 en 2 ou 4 */
    }
}
```

### Ajuster l'Espacement

Modifiez les variables d'espacement :

```css
:root {
    --spacing-xs: 8px;   /* Petit espacement */
    --spacing-sm: 16px;  /* Espacement standard */
    --spacing-md: 24px;  /* Moyen */
    --spacing-lg: 48px;  /* Grand */
    --spacing-xl: 80px;  /* Très grand */
}
```

## 🔧 Maintenance

### Vérifier les Performances

1. Google PageSpeed Insights : [pagespeed.web.dev](https://pagespeed.web.dev/)
2. GTmetrix : [gtmetrix.com](https://gtmetrix.com/)

### Sauvegardes

Le code est sauvegardé sur GitHub. Pour une sauvegarde locale supplémentaire :

```bash
# Créer une archive
cd /Users/steveraffner/Desktop
tar -czf raffner-backup-$(date +%Y%m%d).tar.gz RafCloudFlare/
```

## 📋 Checklist Avant le Lancement

- [ ] Remplacer toutes les images placeholder par vos vraies images
- [ ] Mettre à jour les textes de toutes les pages (À propos, Contact)
- [ ] Vérifier tous les liens (emails, réseaux sociaux)
- [ ] Tester sur mobile, tablette et desktop
- [ ] Configurer le domaine custom sur Cloudflare
- [ ] Vérifier les headers de sécurité
- [ ] Tester les performances (PageSpeed)
- [ ] Ajouter Google Analytics (optionnel)

## 🆘 Support

### Problèmes Courants

**Les images ne s'affichent pas** :
- Vérifiez les chemins dans le HTML (`assets/img/...`)
- Assurez-vous que les images sont bien dans le bon dossier
- Vérifiez les extensions (`.jpg`, `.png`, `.webp`)

**Le CSS ne se charge pas** :
- Vérifiez le chemin dans le `<head>` : `assets/css/style.css`
- Nettoyez le cache du navigateur (Cmd+Shift+R sur macOS)

**Les modifications ne sont pas visibles sur Cloudflare** :
- Le déploiement prend 1-2 minutes
- Vérifiez que le push Git a bien été effectué
- Consultez les logs de déploiement dans Cloudflare Pages

## 📄 Licence

Tous droits réservés © 2026 Raffner

---

**Dernière mise à jour** : 11 janvier 2026
