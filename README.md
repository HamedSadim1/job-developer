# Job Developer

![Screenshot](./public/screenshots/rmt-Dev-screenshot.png)

Een moderne, responsive webapplicatie voor het zoeken naar ontwikkelaarsbanen. Gebouwd met React, TypeScript en Vite voor een snelle en efficiënte gebruikerservaring.

## Beschrijving

Job Developer is een gebruiksvriendelijke applicatie waarmee gebruikers kunnen zoeken naar banen in de tech-industrie. De app biedt geavanceerde zoekfunctionaliteiten, bladwijzers voor favoriete vacatures, en een intuïtieve interface voor het beheren van job listings.

## Features

- **Zoekfunctionaliteit**: Zoek banen op basis van trefwoorden.
- **Bladwijzers**: Sla favoriete vacatures op voor later bekijken.
- **Paginatie**: Efficiënt navigeren door grote lijsten met vacatures.
- **Sorteeropties**: Sorteer resultaten op relevantie of datum.
- **Responsive Design**: Werkt perfect op desktop, tablet en mobiele apparaten.
- **Real-time Updates**: Gebruik van TanStack Query voor optimale data fetching en caching.

## Tech Stack

| Categorie           | Technologie                       | Versie |
| ------------------- | --------------------------------- | ------ |
| **Frontend**        | React                             | 19     |
| **Language**        | TypeScript                        | 6      |
| **Build Tool**      | Vite                              | 8      |
| **Data Fetching**   | TanStack React Query              | 5      |
| **Linting**         | ESLint (flat config)              | 10     |
| **Git Hooks**       | Husky + lint-staged               | 9      |
| **Commit Messages** | Commitlint (conventional commits) | 21     |
| **UI Components**   | Radix UI Icons                    | 1.3    |
| **Notifications**   | React Hot Toast                   | 2.6    |

## Projectstructuur

```
src/
├── components/
│   ├── layout/          → Background, Container, Footer, Header, Logo, Sidebar
│   ├── jobs/            → JobItemContent, JobList, JobListItem, JobListSearch
│   ├── bookmarks/       → BookmarkIcon, BookmarksButton, BookmarksPopover
│   ├── search/          → PaginationControls, ResultCount, SearchForm, SortingControls
│   └── ui/              → Spinner
├── context/             → Context providers (ActiveId, Bookmarks, JobItems, SearchText)
├── lib/
│   ├── constants.ts     → Alle gedeelde constanten (URLs, API config, defaults)
│   ├── hooks.ts         → Custom hooks en context hooks
│   └── types.ts         → TypeScript type definities
├── App.tsx              → Hoofdcomponent
├── main.tsx             → App entry point
└── index.css            → Globale stijlen
```

## Installatie

1. **Clone de repository**:

   ```bash
   git clone https://github.com/HamedSadim1/job-developer.git
   cd job-developer
   ```

2. **Installeer dependencies**:

   ```bash
   npm install
   ```

   > Dit initialiseert ook automatisch Husky git hooks via het `prepare` script.

3. **Start de development server**:

   ```bash
   npm run dev
   ```

4. **Open je browser** en ga naar `http://localhost:5173`.

## Scripts

| Commando          | Beschrijving                                  |
| ----------------- | --------------------------------------------- |
| `npm run dev`     | Start de development server met hot reloading |
| `npm run build`   | Typecheck + productie build                   |
| `npm run lint`    | Controleer de code op ESLint fouten           |
| `npm run preview` | Bekijk de productie build lokaal              |

## Commit Conventies

Dit project gebruikt [Conventional Commits](https://www.conventionalcommits.org/). Elke commit moet het volgende formaat volgen:

```
type: beschrijving
```

### Types

| Type       | Beschrijving                                |
| ---------- | ------------------------------------------- |
| `feat`     | Nieuwe feature                              |
| `fix`      | Bug fix                                     |
| `docs`     | Documentatie wijzigingen                    |
| `style`    | Code style (geen functionaliteit wijziging) |
| `refactor` | Code refactoring                            |
| `test`     | Tests toevoegen of aanpassen                |
| `chore`    | Onderhoud (dependencies, config, etc.)      |

### Voorbeelden

```bash
git commit -m "feat: voeg zoekfunctie toe"
git commit -m "fix: los bug op in navigatie"
git commit -m "chore: update packages naar laatste versies"
```

> **Pre-commit hook**: ESLint wordt automatisch uitgevoerd op staged `.ts`/`.tsx` bestanden.
> **Commit-msg hook**: Commitlint controleert of je commit message het conventionele formaat volgt.

## CI/CD

Bij elke Pull Request naar `main` wordt automatisch uitgevoerd:

- **Lint** — ESLint controle
- **Typecheck** — TypeScript type controle
- **Build** — Productie build validatie

## Bijdragen

Bijdragen zijn welkom! Volg deze stappen:

1. Fork de repository.
2. Maak een feature branch: `git checkout -b feat/nieuwe-feature`.
3. Commit je wijzigingen met conventionele commits.
4. Push naar de branch: `git push origin feat/nieuwe-feature`.
5. Open een Pull Request.

## Contact

Voor vragen of ondersteuning, neem contact op via [hamid.sadim@outlook.com](mailto:hamid.sadim@outlook.com).
