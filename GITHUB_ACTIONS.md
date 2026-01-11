# Configuration GitHub Actions

Le workflow GitHub Actions a été ajouté pour déployer automatiquement le site sur Cloudflare Pages à chaque push sur `main`.

## Configuration Requise

Pour que le workflow fonctionne, vous devez ajouter deux secrets dans votre repository GitHub :

### 1. Obtenir votre Account ID Cloudflare

1. Connectez-vous à [dash.cloudflare.com](https://dash.cloudflare.com)
2. Dans la barre latérale, cliquez sur **Workers & Pages**
3. Votre **Account ID** est visible dans l'URL ou dans les paramètres du compte

### 2. Créer un API Token Cloudflare

1. Allez sur [dash.cloudflare.com/profile/api-tokens](https://dash.cloudflare.com/profile/api-tokens)
2. Cliquez sur **Create Token**
3. Utilisez le template **"Edit Cloudflare Workers"** ou créez un custom token avec :
   - **Permissions** :
     - Account → Cloudflare Pages → Edit
   - **Account Resources** :
     - Include → Votre compte
4. Cliquez sur **Continue to summary** puis **Create Token**
5. **Copiez le token** (il ne sera affiché qu'une fois)

### 3. Ajouter les Secrets dans GitHub

1. Allez sur https://github.com/steveraffner/raffner-website/settings/secrets/actions
2. Cliquez sur **New repository secret**
3. Ajoutez ces deux secrets :

   **Secret 1 :**
   - Name : `CLOUDFLARE_ACCOUNT_ID`
   - Value : Votre Account ID (ex: `abc123def456...`)

   **Secret 2 :**
   - Name : `CLOUDFLARE_API_TOKEN`
   - Value : Le token API créé précédemment

### 4. Vérifier le Déploiement

Une fois les secrets configurés :

1. Allez sur https://github.com/steveraffner/raffner-website/actions
2. Le workflow devrait se lancer automatiquement au prochain push
3. Vous verrez l'état du déploiement en temps réel

## Fonctionnement

- **Push sur `main`** : Déploie automatiquement en production
- **Pull Request** : Crée un environnement de preview pour tester les changements

Chaque déploiement prend environ 1-2 minutes.
