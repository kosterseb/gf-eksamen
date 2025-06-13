# Web Development Exam Study Guide

## Læringsmål (Learning Objectives)

### HTML & CSS
- **Semantisk HTML**: Anvendelse af semantisk HTML til udvikling af website
- **Semantisk CSS**: Anvendelse af semantisk CSS til udvikling af website
- **Tilgængelig webudvikling**: Kendskab til accessibility
- **Skalerbart modulær arkitektur**: CSS arkitektur og strukturering
- **Navngivningskonventioner**: Konsistente og logiske navne

### Udvikling & Dokumentation
- **Kode dokumentation**: Kommentarer og dokumentation af kode
- **Kode redigerings værktøjer**: VS Code, extensions, shortcuts
- **Browser udviklerværktøj**: DevTools, debugging, network tab
- **Fejlfindingsmetodik**: Systematisk approach til debugging

### Internet & Programmering
- **Hvordan Internettet fungerer**: HTTP, DNS, servere, klienter
- **Grundlæggende programmeringsdiscipliner**:

#### Variabler og Datatyper
- **Array**: Lister af værdier `[1, 2, 3]`
- **Boolean**: True/false værdier
- **Numbers**: Numeriske værdier (integers, floats)
- **Strings**: Tekst værdier `"hello world"`
- **Null**: Tom værdi

#### Betingelser (Conditionals)
- **Operators**: `==`, `===`, `!=`, `!==`, `>`, `<`, `>=`, `<=`
- **If statements**: `if (condition) { }`
- **If else**: `if (condition) { } else { }`
- **Else if**: `if (condition) { } else if (condition) { } else { }`

#### Funktioner
- **Funktion definition**: `function myFunction() { }`
- **Arrow functions**: `const myFunction = () => { }`
- **Parameters og argumenter**: `function greet(name) { return "Hello " + name; }`
- **Return statements**: Returnere værdier fra funktioner

#### Løkker (Loops)
- **For loops**: `for (let i = 0; i < array.length; i++) { }`
- **ForEach**: `array.forEach(item => { })`
- **While loops**: `while (condition) { }`
- **Array iteration**: Arbejde med arrays gennem løkker

#### DOM-Manipulation
- **Element selection**: `document.querySelector()`, `document.getElementById()`
- **Event listeners**: `element.addEventListener('click', function)`
- **Content manipulation**: `innerHTML`, `textContent`, `classList`
- **Style manipulation**: `element.style.property = value`

---

## Kompetencer forud for optagelse (Pre-admission Competencies)

### Grafik & Medier
1. **Farvesystemer**: RGB, HEX, HSL, CMYK og deres anvendelse
2. **Billed- og grafikformater**: 
   - **Web formater**: JPG, PNG, SVG, WebP
   - **Optimering**: Filstørrelse vs kvalitet
   - **Responsive images**: Different sizes for different devices

### Samarbejde & Kommunikation
3. **Samarbejde**: Initiativ til teamwork og problemløsning
4. **Faglige udtryk**: Dansk og engelsk terminologi (E-niveau)
5. **Teknisk dokumentation**: Læse og anvende dokumentation
6. **Selvstændig læring**: Opsøge teknisk viden

---

## Præstationsstandard - Rutineret Niveau

### Kodning & Scripting
1. **Selvstændig kodning**: HTML, CSS, JavaScript til enkle webproduktioner
2. **Planlægning**: Selvstændig planlægning og gennemførelse af projekter
3. **Kvalitetskontrol**: Dokumentation og kvalitetssikring af eget arbejde

---

## Grundfag Krav
1. **Dansk E-niveau**: Bestået
2. **Matematik E-niveau**: Bestået

---

## JavaScript Features i Eksamen (1-2 af følgende)

### 1. Billedgalleri (Image Gallery)
```javascript
// Basic structure
const images = ['img1.jpg', 'img2.jpg', 'img3.jpg'];
const gallery = document.querySelector('.gallery');

// Display images
images.forEach(img => {
    const imgElement = document.createElement('img');
    imgElement.src = img;
    gallery.appendChild(imgElement);
});
```

**Key concepts:**
- Array iteration
- DOM creation
- Event delegation
- Image loading
- Grid/flexbox layout

### 2. Client-side Form Validering (Form Validation)
```javascript
// Basic validation
function validateForm() {
    const email = document.getElementById('email').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailRegex.test(email)) {
        showError('Invalid email format');
        return false;
    }
    return true;
}
```

**Key concepts:**
- Input validation
- Regular expressions
- Error handling
- Form submission prevention
- Real-time validation

### 3. Billed-slider (Image Slider)
```javascript
// Basic slider
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach(slide => slide.style.display = 'none');
    slides[index].style.display = 'block';
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}
```

**Key concepts:**
- Array manipulation
- Timed intervals
- CSS transitions
- Touch/swipe events
- Navigation controls

---

## Exam Preparation Checklist

### Technical Knowledge
- [ ] Kan forklare semantisk HTML og give eksempler
- [ ] Kan forklare CSS box model og layout metoder
- [ ] Kan demonstrere DOM manipulation
- [ ] Kan forklare event handling
- [ ] Kan debugge kode med DevTools

### Practical Skills
- [ ] Kan konvertere Figma design til HTML/CSS
- [ ] Kan implementere responsive design
- [ ] Kan skrive og forklare JavaScript funktionalitet
- [ ] Kan lave en styleguide
- [ ] Kan dokumentere kode

### Presentation Skills
- [ ] Kan forklare tekniske valg
- [ ] Kan demonstrere kode live
- [ ] Kan besvare spørgsmål om web teknologier
- [ ] Kan diskutere accessibility og performance

---

## Useful Resources
- MDN Web Docs: https://developer.mozilla.org/
- W3Schools: https://www.w3schools.com/
- CSS Grid Guide: https://css-tricks.com/snippets/css/complete-guide-grid/
- Flexbox Guide: https://css-tricks.com/snippets/css/a-guide-to-flexbox/
- JavaScript Events: https://developer.mozilla.org/en-US/docs/Web/Events