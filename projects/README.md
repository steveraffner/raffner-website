# Projets Détaillés (Optionnel)

Ce dossier peut contenir des pages détaillées pour chaque projet.

## Structure Exemple

```
projects/
├── installation-lumineuse.html
├── serie-graphique.html
├── architecture-minimaliste.html
└── ...
```

## Template de Page Projet

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nom du Projet - Raffner</title>
    <link rel="stylesheet" href="../assets/css/style.css">
</head>
<body>
    <header class="site-header">
        <div class="container">
            <h1 class="site-title"><a href="../index.html">Raffner</a></h1>
            <nav class="main-nav">
                <ul>
                    <li><a href="../index.html">Projets</a></li>
                    <li><a href="../about.html">À propos</a></li>
                    <li><a href="../contact.html">Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <main class="main-content">
        <section class="project-detail">
            <div class="container-narrow">
                <h2>Nom du Projet</h2>
                <p class="lead">Description du projet...</p>
                
                <!-- Images du projet -->
                <img src="../assets/img/project-detail-01.jpg" alt="Description">
                
                <!-- Contenu détaillé -->
            </div>
        </section>
    </main>

    <footer class="site-footer">
        <!-- Footer identique -->
    </footer>
</body>
</html>
```
