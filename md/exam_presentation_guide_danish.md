# Eksamen Præsentationsguide - Webudvikling

Godt at høre du føler dig sikker på kodning! Forklarings-/præsentationsdelen er afgørende og ofte hvor studerende virkelig kan skinne ved at demonstrere deres forståelse. Her er hvordan du griber det an:

## Præsentationsstrategi (30 minutter)

**Strukturer din forklaring i denne rækkefølge:**

### 1. Overblik (3-4 minutter)
- Kort projekt resumé: "Jeg byggede en [type af hjemmeside] som indeholder..."
- Nøgleteknologier brugt og hvorfor
- Hovedudfordringer du løste

### 2. Design Implementation (8-10 minutter)
- Hvordan du oversatte Figma designet til kode
- CSS teknikker du brugte (flexbox, grid, positioning)
- Responsive design tilgang
- Din styleguide og hvorfor den er vigtig

### 3. JavaScript Funktionalitet (8-10 minutter)
- Dybt dyk ned i din valgte feature (gallery/slider/validator)
- Kode struktur og logik
- User experience overvejelser

### 4. Tekniske Beslutninger (5-7 minutter)
- Hvorfor du valgte bestemte tilgange
- Problemer du stødte på og løsninger
- Performance eller accessibility overvejelser

### 5. Spørgsmål & Svar (resterende tid)

---

## Centrale Tekniske Koncepter at Mestre

### HTML Fundamentals
- **Semantiske elementer**: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`
- **Tilgængelighed**: Proper heading hierarki (h1-h6), alt attributter, ARIA labels
- **Form elementer**: Input types, validation attributter, labels
- **Dokument struktur**: DOCTYPE, meta tags, proper nesting

### CSS Fundamentals
- **Box Model**: content, padding, border, margin - og hvordan `box-sizing: border-box` påvirker det
- **Layout Systemer**:
  - **Flexbox**: justify-content, align-items, flex-direction, flex-wrap
  - **Grid**: grid-template-columns/rows, grid-area, gap
  - **Positioning**: static, relative, absolute, fixed, sticky
- **Responsive Design**: media queries, mobile-first tilgang, relative enheder (rem, em, %)
- **CSS Specificitet**: inline > IDs > classes > elements
- **Selectors**: descendant, child, pseudo-classes (:hover, :focus), pseudo-elements (::before, ::after)

### JavaScript Fundamentals
- **DOM Manipulation**: `querySelector`, `addEventListener`, `innerHTML` vs `textContent`
- **Event Handling**: event types, event delegation, preventDefault()
- **Funktioner**: function declarations vs expressions, arrow functions, scope
- **Datatyper**: strings, numbers, booleans, arrays, objects
- **Control Flow**: if/else, loops (for, forEach), conditional operators
- **Almindelige Mønstre**: form validation, billede manipulation, dynamisk indhold

---

## Forberedelsestips

### 1. Øv dig i at forklare din kode højt
- Selv til dig selv i spejlet
- Bliv komfortabel med at tale om tekniske beslutninger

### 2. Forbered dig på almindelige spørgsmål:
- "Hvorfor brugte du flexbox i stedet for grid her?"
- "Hvordan ville du gøre dette mere tilgængeligt?"
- "Hvad ville du gøre anderledes hvis du havde mere tid?"
- "Hvordan fungerer box modellen?"
- "Forklar forskellen mellem `let`, `const`, og `var`"

### 3. Kend din styleguide indgående
- Farver, typografi, spacing, komponent mønstre
- Vær klar til at forklare dine designvalg

### 4. Vær klar til at følge din JavaScript logik
- Step-by-step gennemgang af din kode
- Forklar hvorfor du strukturerede det sådan

### 5. Hav eksempler klar
- Hvordan dit responsive design virker på forskellige breakpoints
- Demonstrer live hvordan features fungerer

### 6. Huskeliste
- Brug embed og korrekte fonts til opgaven
- TinyPng er et godt værktøj og en god måde at vise at man tager højde for 'fast-load' af ens side
- Ha evt bud på hvordan man ellers kunne lave de forskellige ting i opgaven
- Husk pseudo kode + dokumentation

---

## Kontekst Noter

Da du er i Danmark, vær forberedt på spørgsmål om:

### Web Tilgængelighed
- **WCAG guidelines**: Web Content Accessibility Guidelines
- Hvordan du sikrer din side er tilgængelig for alle brugere
- Semantisk HTML og proper ARIA labels

### GDPR Overholdelse
- Hvis dit projekt indsamler brugerdata
- Cookie samtykke og privacy policies
- Databehandling og brugerrettigheder

### Performance Optimering
- Optimering til forskellige enheder
- Billede komprimering og responsive images
- Minificering af CSS/JS

---

## Tekniske Forklaringer at Øve

### Box Model Forklaring
```
Content → Padding → Border → Margin
```
- Forklar hvordan `box-sizing: border-box` ændrer beregningen
- Vis eksempler med DevTools

### Flexbox vs Grid
- **Flexbox**: 1-dimensional layout (række eller kolonne)
- **Grid**: 2-dimensional layout (rækker og kolonner)
- Hvornår bruger du hvilken?

### DOM Manipulation
```javascript
// Element selection
const element = document.querySelector('.my-class');

// Event handling
element.addEventListener('click', function() {
    // Din logik her
});
```

### Responsive Design Principper
- Mobile-first approach
- Progressive enhancement
- Flexible grids og relative enheder

---

## Mundtlig Eksamen Struktur

### Start Stærkt (1-2 minutter)
- "Jeg har bygget en [beskrivelse] som løser [problem]"
- Vis det færdige resultat først

### Teknisk Gennemgang (20-25 minutter)
- Vis koden live i VS Code
- Forklar dine valg undervejs
- Demonstrer funktionalitet i browseren

### Afslutning (3-5 minutter)
- Opsummer hovedpunkter
- Nævn hvad du ville forbedre
- Vær åben for spørgsmål

---

## Vigtige Pointer

### Før Eksamen
- [ ] Test al funktionalitet virker
- [ ] Øv præsentationen højt
- [ ] Forbered svar på almindelige spørgsmål
- [ ] Kend dine kodekommentarer

### Under Eksamen
- [ ] Tal tydeligt og roligt
- [ ] Vis entusiasme for dit projekt
- [ ] Forklar "hvorfor" ikke bare "hvad"
- [ ] Vær ærlig hvis du ikke ved noget

### Teknisk Demonstration
- [ ] Vis responsive design live
- [ ] Demonstrer JavaScript funktionalitet
- [ ] Brug DevTools til at forklare
- [ ] Vis din styleguide

---

## Eksempel Projektbeskrivelse

> "Jeg har bygget en responsive portfolio hjemmeside med et interaktivt billedgalleri. Jeg valgte at bruge CSS Grid til det overordnede layout fordi det giver mig bedre kontrol over både rækker og kolonner. Til billedgalleriet implementerede jeg en JavaScript løsning der bruger event delegation for bedre performance. Siden er optimeret til tilgængelighed med proper ARIA labels og keyboard navigation."

**Nøglen er at vise ikke bare at du kan kode, men at du forstår *hvorfor* du tog bestemte beslutninger og hvordan web teknologier arbejder sammen.**

Øv dig i at forklare koncepter som om du underviser en anden - dette demonstrerer ægte forståelse.