# Portfolio — Jonas P. SEBGO

Site one-page (HTML / CSS / JS pur, sans framework ni build) conçu pour un seul objectif :
qu'un recruteur ou coordinateur MEAL/programme décide de contacter Jonas dans les 2 minutes
suivant son arrivée sur la page.

## Direction design

- **Palette** : encre bleu profond (`#0B2338`) pour les zones de forte conviction (hero, projet
  phare, CTA final), papier blanc-cassé neutre (`#F7F8F3`) pour les zones de lecture, un accent
  ambre/or (`#D6A93B`, terre du Sahel) pour les chiffres clés et les points d'attention, et un
  accent sarcelle (`#1F8C7B`, suivi/donnée) pour les actions et liens. Cette combinaison évoque
  les outils de monitoring et le secteur humanitaire/développement sans tomber dans le crème +
  terracotta, le noir + accent néon, ou le style "broadsheet" journal.
- **Typographie** : `Sora` (titres, grotesque géométrique, confiante et moderne) + `Inter`
  (texte courant, très lisible en petite taille). Pas de serif — volontairement, pour rester
  net et actuel.
- **Signature visuelle** : grille de points/lignes fines en fond du hero (évoque une carte ou
  un tableau de suivi), cartes à bordures fines, chiffres d'impact en grand format dès le hero
  pour ancrer la crédibilité avant tout scroll.

Ces choix servent la conversion : contraste fort pour les CTA (ambre sur encre, sarcelle sur
blanc), hiérarchie visuelle claire entre le projet phare et les autres études de cas, et une
barre de contact permanente pour qu'un visiteur pressé n'ait jamais à chercher comment joindre
Jonas.

## Structure du projet

```
index.html          → toute la page (une seule page, sections ancrées)
css/styles.css       → styles (variables de couleurs/typo en haut de fichier)
js/main.js           → menu mobile, animations au scroll, carrousel du projet 3
images/
  profile.jpg        → portrait utilisé dans le hero
  projects/
    protection-analytics/
      dashboard-web.png → capture réelle du dashboard web (projet phare)
    faso-espoir/
    pbi-orders/       → 4 captures réelles du dashboard "Suivi des commandes" (galerie)
    sql-retail/
    python-sales/
```

Les captures des projets "Protection Analytics" et "Suivi des commandes clients/produits"
sont déjà en place. Pour ajouter des visuels aux autres projets (Faso Espoir, SQL, Python),
suivez le même principe : déposez l'image dans le sous-dossier correspondant, puis remplacez
le `<div class="visual-placeholder ...">` du projet par une balise `<img>` pointant vers ce
fichier.

## Lancer le site en local

Aucune dépendance, aucun build. Deux options :

**Option 1 — ouvrir directement le fichier**
Double-cliquez sur `index.html` (fonctionne, mais certains navigateurs restreignent les
requêtes locales : préférez l'option 2 si un souci apparaît).

**Option 2 — petit serveur local (recommandé)**

```bash
python -m http.server 5500
```

Puis ouvrez `http://localhost:5500` dans votre navigateur.

## Déploiement

### Vercel (3 étapes)

1. Créez un compte sur [vercel.com](https://vercel.com) et installez la CLI : `npm i -g vercel`
2. Depuis le dossier du projet, lancez :
   ```bash
   vercel
   ```
3. Répondez aux questions par défaut (projet statique, pas de build command, dossier racine
   comme output) — Vercel donne immédiatement une URL publique. Pour la mise à jour, relancez
   `vercel --prod`.

### Netlify (3 étapes)

1. Créez un compte sur [netlify.com](https://netlify.com) et installez la CLI :
   `npm i -g netlify-cli`
2. Depuis le dossier du projet, lancez :
   ```bash
   netlify deploy
   ```
3. Indiquez `.` comme dossier à publier (pas de build command), validez, puis lancez
   `netlify deploy --prod` pour la mise en ligne définitive.

Aucune variable d'environnement ni backend n'est nécessaire : le site est 100% statique.
