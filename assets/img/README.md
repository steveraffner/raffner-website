# Images Placeholder

Ce dossier contient les images du site.

## Structure Recommandée

```
img/
├── project-01.jpg       # Image projet 1
├── project-02.jpg       # Image projet 2
├── project-03.jpg       # Image projet 3
├── ...
└── about.jpg           # Photo page À propos
```

## Formats Recommandés

- **Format** : JPG pour photos, PNG pour logos/icônes, WebP pour taille optimale
- **Dimensions** : Max 2000px de largeur pour projets
- **Poids** : Idéalement < 500 KB par image
- **Ratio** : 4:3 pour les projets (ex: 1600x1200px)

## Optimisation

Utilisez des outils comme ImageMagick, TinyPNG ou Squoosh pour optimiser vos images avant de les ajouter.

```bash
# Exemple avec ImageMagick
magick input.jpg -resize 2000x -quality 85 output.jpg
```
