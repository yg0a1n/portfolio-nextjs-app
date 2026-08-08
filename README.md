# Portfolio — Yannick Goalen

Portfolio personnel de **Yannick Goalen**, développeur Full Stack orienté produits SaaS et
solutions IA, sous l'auto-entreprise [FlexiWeb EVO](https://www.flexiweb-evo.eu/).

**En ligne** : <https://portfolio-nextjs-app-gamma.vercel.app>

Application **Next.js 14** (App Router), bilingue français / anglais, déployée sur Vercel.

---

## Démarrer

Le projet utilise **pnpm** — un `pnpm-lock.yaml` et un `pnpm-workspace.yaml` sont versionnés,
et les scripts de build y sont approuvés via `allowBuilds`.

```bash
pnpm install
cp .env-sample .env
pnpm dev
```

Le site tourne alors sur <http://localhost:3000>.

### Variable d'environnement

Une seule, dans `.env` :

| Variable | Rôle |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Origine du site. Toutes les URLs absolues en dépendent : canonical, `hreflang`, `@id` du JSON-LD, sitemap. |

En local elle vaut `http://localhost:3000` ; en production elle est définie côté Vercel. Le
code retire un éventuel slash final, les deux formes sont donc acceptées.

## Commandes

| Commande | Effet |
|---|---|
| `pnpm dev` | Serveur de développement |
| `pnpm build` | Build de production, suivi de `postbuild` |
| `pnpm postbuild` | Génère `sitemap.xml` et `robots.txt` dans `public/` (`next-sitemap`) |
| `pnpm start` | Sert le build de production |
| `pnpm lint` | ESLint (`next lint`) |

`sitemap*.xml` et `robots.txt` sont **générés à chaque build** et ignorés par git : ne pas
les modifier à la main, les changements passent par `next-sitemap.config.js`.

## Structure

```
app/
  page.tsx            → français, page servie à la racine
  fr/ · en/           → mêmes sections, langue passée en prop
  sections/           → title, hero, about, experience, news, tasks, world, feedback
  @modal/             → routes interceptées : aperçu d'un visuel sans quitter la page
  news/ · tasks/ · web3/  → [id], vue plein écran d'un visuel
  llms.txt/route.ts   → carte du site pour les agents
components/           → navbar, footer, cartes, éléments animés
constants/
  index.ts            → toute la copie du site, objets fr / en
  site.ts             → identité, titres, descriptions, URLs
utils/structured-data.ts → construction du graphe JSON-LD
```

### Modifier le contenu

**Toute la copie est centralisée dans `constants/index.ts`**, en objets `fr` / `en` parallèles :
textes de sections, projets, cartes, libellés. Les composants ne contiennent pas de texte en
dur — une modification éditoriale se fait dans ce fichier, pas dans les sections.

`constants/site.ts` porte l'identité du site : titres, descriptions, et données d'entité.
Metadata, JSON-LD, canonical et `/llms.txt` en sont tous dérivés, pour qu'aucune de ces
surfaces ne puisse diverger des autres.

## Bilinguisme

| Route | Langue | Canonical |
|---|---|---|
| `/` | français | `/` |
| `/fr` | français (doublon de `/`) | `/` |
| `/en` | anglais | `/en` |

`/` et `/fr` servent la même page : le canonical de `/fr` renvoie vers `/`, et le sitemap
n'annonce que les deux URLs canoniques. Le sous-arbre `/en` déclare `lang="en"`, le layout
racine étant en français.

## Lisibilité par les moteurs et les agents

Le site expose ce qu'il faut pour être compris — et cité — sans que la page ait à être devinée :

- **JSON-LD rendu côté serveur** (`Person`, `WebSite`, `ProfilePage`, `ItemList` des projets),
  entités reliées par `@id`. Le rendu serveur est délibéré : un JSON-LD injecté côté client
  subit un traitement retardé par les moteurs et peut n'être jamais lu.
- **Metadata** : titre et description par langue, canonical, `hreflang` fr / en / `x-default`,
  Open Graph et Twitter Card.
- **`/llms.txt`** : carte curatée du site pour les agents et assistants de code, générée
  depuis les mêmes constantes que les pages. Ce n'est pas un levier d'indexation — Google a
  explicitement écarté le format — mais un raccourci pour les agents qui le lisent.
- **`robots.txt`** : crawlers IA autorisés nommément (GPTBot, OAI-SearchBot, ChatGPT-User,
  ClaudeBot, PerplexityBot, Google-Extended), en plus de la règle générale.

## Déploiement

Hébergé sur **Vercel**. `vercel.json` restreint les déploiements à `main` :

```json
"deploymentEnabled": { "*": false, "**": false, "main": true }
```

Une branche ou une pull request ne produit donc **aucun déploiement de prévisualisation** —
et aucun contrôle Vercel sur la PR. Les changements se valident **en local** (`pnpm lint`,
`pnpm build`), puis en ligne après le merge, qui déclenche la mise en production.

## Stack

| | |
|---|---|
| Framework | Next.js 14 (App Router), React 18 |
| Langage | TypeScript 5 |
| Styles | Tailwind CSS 3, thème clair / sombre via `next-themes` |
| Animation | Framer Motion |
| Icônes | Heroicons, React Icons |
| SEO | `next-sitemap`, JSON-LD maison |
| Polices | Playfair Display et Geist Mono, chargées localement (`next/font/local`) |

## Licence

Sous licence MIT — voir [`LICENSE.md`](LICENSE.md).
