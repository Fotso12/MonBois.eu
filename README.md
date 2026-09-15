# MonBois.eu - Site Vitrine & Exportation de Bois Noble

Site vitrine officiel de **MonBois.eu**, entreprise spécialisée dans le négoce et l'exportation internationale de bois nobles et de construction vers l'Union Européenne et l'Amérique du Nord.

---

## 🌟 Fonctionnalités du Site

- **Multilingue Intégré (FR 🇫🇷 / EN 🇬🇧)** : Bouton / icône de bascule instantanée de la langue dans la navbar.
- **Multi-devises (EUR € / USD $)** : Affichage des tarifs indicatifs en Euro ou Dollar selon la région du client.
- **Barre de Navigation Complète** :
  - Logo MonBois.eu avec design artisanal
  - Liens : Accueil, Catalogue, À propos de nous, Contact
  - Bouton d'action Email direct (`contact@monbois.eu`)
  - Sélecteurs de Langue et Devise
- **Barre de Recherche & Filtrage Avancé** : Recherche par nom d'essence, provenance ou utilisation + filtres rapides par catégorie (*Feuillus, Résineux, Tropicaux, Construction*).
- **Catalogue & Modale Technique** : Cartes illustrées et modale avec caractéristiques techniques exhaustives (*densité, dureté, origine, certification FSC, utilisations*).
- **Section À Propos** : Histoire, certifications écologiques, séchage KD (Kiln Dried), logistique internationale.
- **Formulaire de Contact & Devis** : Demande de devis avec choix du bois et région de livraison.

---

## 🛠️ Stack Technique

- **Framework** : Next.js 15 (React 19)
- **Styles** : Tailwind CSS (Thème personnalisé tons bois et forêt)
- **Icônes** : Lucide React
- **Langage** : TypeScript

---

## 🚀 Guide d'Installation & Déploiement Local

### 1. Cloner ou Ouvrir le Projet
```bash
cd MonBois.eu
```

### 2. Installer les Dépendances
```bash
npm install
```

### 3. Lancer en Mode Développement
```bash
npm run dev
```
Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

### 4. Tester le Build de Production
```bash
npm run build
npm run start
```

---

## 📦 Guide Déploiement Vercel & GitHub CI/CD

### Étape 1 : Initialiser le Dépôt Git & Pousser sur GitHub

Exécutez les commandes suivantes dans votre terminal :

```bash
git init
git add .
git commit -m "feat: Initial commit MonBois.eu vitrine"
git branch -M main

# Remplacez <votre-pseudo-github> par votre nom d'utilisateur GitHub
git remote add origin https://github.com/<votre-pseudo-github>/MonBois.eu.git
git push -u origin main
```

---

### Étape 2 : Créer le Projet sur Vercel

Il existe **2 méthodes** simples pour connecter le site à Vercel :

#### Méthode A (La plus simple - Déploiement Automatique par Vercel)
1. Allez sur [vercel.com](https://vercel.com) et connectez-vous.
2. Cliquez sur **"Add New..."** > **"Project"**.
3. Importez votre dépôt GitHub **`MonBois.eu`**.
4. Laissez les paramètres par défaut (Framework: Next.js).
5. Cliquez sur **"Deploy"**.
👉 *Dès que le projet est importé, chaque `git push` sur GitHub redéploiera automatiquement le site sur Vercel sans aucune configuration supplémentaire !*

---

### Étape 3 : Configurer le Pipeline CI/CD GitHub Actions (Optionnel)

Si vous souhaitez utiliser le fichier `.github/workflows/deploy.yml` inclus dans le projet, vous devez copier 3 **Secrets** dans GitHub :

#### 🔑 Récupérer les Secrets :

1. **`VERCEL_TOKEN`** :
   - Allez dans votre compte Vercel > **Account Settings** > **Tokens** ([vercel.com/account/tokens](https://vercel.com/account/tokens)).
   - Cliquez sur **"Create"**, nommez le token (`GitHub Actions`), et copiez la clé générée.

2. **`VERCEL_ORG_ID`** :
   - Dans le dossier du projet, exécutez `npx vercel link` (ou consultez les paramètres de votre équipe sur Vercel dans `.vercel/project.json`).

3. **`VERCEL_PROJECT_ID`** :
   - Dans Vercel, allez sur votre projet **MonBois.eu** > **Settings** > **General** > Copiez l'**Project ID** (`prj_...`).

#### 🔒 Ajouter les Secrets dans GitHub :
1. Allez sur votre dépôt GitHub : `https://github.com/<votre-pseudo-github>/MonBois.eu`.
2. Allez dans **Settings** > **Secrets and variables** > **Actions**.
3. Cliquez sur **"New repository secret"** et ajoutez :
   - Nom : `VERCEL_TOKEN` | Valeur : *(votre token Vercel)*
   - Nom : `VERCEL_ORG_ID` | Valeur : *(votre Org ID)*
   - Nom : `VERCEL_PROJECT_ID` | Valeur : *(votre Project ID)*

---

## 🌍 Migration Future vers Ionos ou Hostinger

Lorsque vous souhaiterez migrer de Vercel vers **Ionos** ou **Hostinger** :

### Option 1 : Exportation Statique (HTML/CSS/JS)
1. Dans `next.config.mjs`, ajoutez :
   ```js
   const nextConfig = {
     output: 'export',
     // ...
   };
   ```
2. Exécutez :
   ```bash
   npm run build
   ```
3. Un dossier `out/` sera généré. Copiez simplement l'intégralité du contenu du dossier `out/` sur votre espace FTP/SFTP Ionos ou Hostinger (dossier `public_html` ou `htdocs`).

### Option 2 : Hébergement Node.js (Ionos / Hostinger VPS / Cloud)
1. Transférez les fichiers du projet sur votre serveur FTP/SSH Ionos ou Hostinger.
2. Exécutez sur le serveur :
   ```bash
   npm install
   npm run build
   npm run start
   ```
3. Configurez le nom de domaine **MonBois.eu** pour pointer vers le port ou le serveur Web (Nginx / Apache / Passenger).

---

## ✉️ Contact & Support
- **Email** : contact@monbois.eu
- **Site Web** : https://monbois.eu
