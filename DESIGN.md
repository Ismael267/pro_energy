# PRO ENERGY — Design system

Référence des règles visuelles et d'interaction du site. Les valeurs vivent dans [app/globals.css](app/globals.css) ; ce document explique quoi utiliser et pourquoi.

## Principes

1. **Sobre et institutionnel.** Un fournisseur d'énergie B2B doit inspirer confiance : couleurs franches, peu d'effets, beaucoup d'air.
2. **Le contenu d'abord.** Une information n'est dite qu'une fois (horaires, ville, téléphone). Pas de répétition décorative.
3. **Le mouvement sert à quelque chose.** Retour au clic, entrée d'un élément, changement d'état. Jamais « parce que c'est joli » sur un élément vu souvent.
4. **Mobile = vrai téléphone.** Tout ce qui touche au tactile se vérifie sur un appareil, pas dans l'émulateur.

## Couleurs

| Rôle | Token | Valeur | Usage |
| --- | --- | --- | --- |
| Primaire (rouge PRO) | `--primary` | `oklch(0.45 0.2 15)` | CTA, liens, icônes, état actif |
| Secondaire (vert) | `--secondary` | `oklch(0.75 0.18 130)` | Accents, filets, eyebrow |
| Vert sur fond sombre | — | `#c5e85c` | Textes et icônes sur `#121311` uniquement |
| Fond | `--background` | `#f6faff` | Fond de page |
| Fond section alternée | — | `#eef4fc` | Une section sur deux |
| Texte | `--foreground` | `#151c22` | Texte principal |
| Sombre de marque | — | `#121311` | Hero, carte mise en avant, loader |
| Bordure | `--border` | `oklch(0.88 0.01 255)` / `#e2e8f0` | Cartes, séparateurs |

Règles :
- Le rouge est réservé à **une** action principale par bloc. Deux boutons rouges côte à côte = un des deux doit passer en secondaire/outline.
- Le vert `--secondary` ne porte pas de texte sur fond clair (contraste insuffisant) ; texte foncé dessus (`text-zinc-900`).
- Textes : `zinc-900` titres, `zinc-600` corps, `zinc-500` méta. Sur sombre : `white`, `zinc-300`, `zinc-400`.
- Éviter les nouvelles valeurs hex en dur dans les composants : ajouter un token si une couleur revient.

## Typographie

- Police : `--font-sans` (Avenir Next → Segoe UI → system-ui).
- `.heading-display` — titres du hero : `font-weight 600`, `line-height 1.05`, `letter-spacing -0.03em`.
- `.heading-section` — titres de section : `clamp(1.75rem, 4vw, 3rem)`, `line-height 1.08`.
- `.eyebrow` — sur-titre : 11px, `uppercase`, `letter-spacing 0.14em`, rouge, précédé d'un filet vert.
- Corps : `text-base leading-relaxed` ; secondaire `text-sm`. Méta : `text-xs`.
- Champs de formulaire : **16px minimum** (sinon iOS zoome sur la page).

Utiliser `<SectionHeading eyebrow title description />` ([components/section-heading.tsx](components/section-heading.tsx)) pour tout en-tête de section, plutôt que de recréer la structure.

## Espacements et grille

- Conteneur : `container mx-auto px-4`, contenu limité à `max-w-6xl` / `max-w-7xl`.
- Sections : `py-20 md:py-28` (ou `md:py-32` pour les sections majeures).
- En-tête de section → contenu : `mb-14`.
- Grilles de cartes : `gap-5`, `md:grid-cols-2 lg:grid-cols-3`.
- **Pas de ligne orpheline** : si le nombre d'éléments ne remplit pas la grille, mettre un élément en avant (`row-span-2` / `col-span-2`) plutôt que laisser une ligne incomplète. Exemple : [components/stations-section.tsx](components/stations-section.tsx).
- `--header-offset` (4.5rem mobile, 7.5rem desktop) : à appliquer via `.page-shell` sur chaque page sous le header fixe.

## Rayons et surfaces

| Élément | Rayon |
| --- | --- |
| Cartes | `rounded-xl` (0.75rem) |
| Boutons, champs | `rounded-lg` |
| Puces / tags | `rounded-md` |
| Pilules, CTA du header | `rounded-full` |

- `.card-surface` — carte standard : bordure `#e2e8f0`, fond blanc, ombre légère.
- `.card-lift` — à ajouter si la carte est cliquable : léger soulèvement au survol (souris uniquement), `scale(0.985)` au clic.
- `.quick-card` — carte translucide, **uniquement sur photo/fond sombre** (hero).

## Mouvement

Courbes (déjà dans `:root`) :

| Token | Courbe | Pour |
| --- | --- | --- |
| `--ease-out` | `cubic-bezier(0.23, 1, 0.32, 1)` | Entrées, retours d'interaction (par défaut) |
| `--ease-in-out` | `cubic-bezier(0.77, 0, 0.175, 1)` | Élément qui se déplace à l'écran |
| `--ease-drawer` | `cubic-bezier(0.32, 0.72, 0, 1)` | Tiroirs / menus mobiles |

Durées :

| Interaction | Durée |
| --- | --- |
| Clic (`:active`) | 120–160 ms |
| Survol, couleurs | 150–200 ms |
| Menus, tiroirs | 200–300 ms |
| Apparition au scroll | 400–600 ms |
| Fondu d'image du hero | 500 ms |

Règles :
- **Jamais `transition-all`** : lister les propriétés (`transition-[box-shadow,transform]`, `transition-colors`…).
- **Animer `transform` et `opacity`** uniquement ; éviter `width`, `height`, `left`, `top`, `margin`.
- **Jamais `ease-in`** sur un élément d'interface.
- **Jamais `scale(0)`** : partir de `scale(0.95)` + `opacity: 0`.
- Tout élément cliquable reçoit `.pressable` (`scale(0.97)` au clic).
- Survols : Tailwind v4 limite déjà `hover:` aux appareils qui savent survoler ; en CSS brut, envelopper dans `@media (hover: hover) and (pointer: fine)`.
- Pas d'animation en boucle infinie (pulsations, rebonds, shine permanent). Le shine `.btn-shine` ne joue qu'une fois, au survol.
- Apparition au scroll : `<ScrollReveal>` ; listes : `stagger` (50 ms entre éléments, plafonné).
- `prefers-reduced-motion` : on garde les fondus, on supprime les déplacements. Toute nouvelle animation doit y être ajoutée.

## Mobile

- `html` : pas de surbrillance au tap (`-webkit-tap-highlight-color: transparent`).
- Boutons et liens : `touch-action: manipulation` (pas de délai de 300 ms).
- Boutons : `user-select: none` (pas de sélection à l'appui long). **Jamais** sur le texte de contenu.
- Hauteurs plein écran : `100svh` pour le hero, `100dvh` pour les coques d'application. Jamais `100vh`.
- Zones sûres : éléments fixes avec `env(safe-area-inset-*, 0px)` (header, bouton d'appel, tiroir).
- Cibles tactiles ≥ 40×40 px ; agrandir la zone avec un pseudo-élément si le visuel est plus petit (points du carrousel).
- Ne jamais bloquer le zoom (`user-scalable=no`, `maximum-scale=1`).

## Accessibilité

- Focus clavier visible sur tout élément interactif (`focus-visible:ring`).
- Contraste AA minimum : pas de texte vert clair sur blanc, pas de `zinc-400` sur blanc pour du corps de texte.
- Images décoratives : `alt=""` ; images de contenu : `alt` descriptif en français.
- Boutons icône seule : `aria-label`.
- Liens externes : `target="_blank" rel="noopener noreferrer"`.

## À éviter (effet « généré par IA »)

- Taches de couleur floues en arrière-plan (`blur-3xl` décoratif).
- Texte en dégradé sur des mots isolés.
- Dégradés arc-en-ciel sur filets, boutons et fonds de section.
- Cartes qui s'inclinent en 3D au survol.
- Points qui pulsent, icônes qui rebondissent en continu.
- Emojis dans les titres ou les boutons.
- Verre dépoli (`backdrop-blur`) hors du header et du hero.

## Checklist avant merge

- [ ] Aucune nouvelle `transition-all`, `ease-in`, `scale(0)`.
- [ ] Nouvelle animation couverte par `prefers-reduced-motion`.
- [ ] Une seule action rouge par bloc.
- [ ] Pas de ligne orpheline dans les grilles.
- [ ] Testé sur un vrai téléphone (tap, scroll, champs, encoche).
