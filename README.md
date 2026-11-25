# 📐 Matemagia – Strona Korepetycji z Matematyki & Platforma „Level Up!”

Oficjalna strona internetowa poświęcona korepetycjom z matematyki prowadzonym przez Aleksandra Ostrycharza, połączona z autorską platformą interaktywnych minigier edukacyjnych **„Level Up!”** wspomagających trening sprawności rachunkowej.

---

## 📌 Spis treści

- [O projekcie](#-o-projekcie)
- [Główne funkcjonalności](#-główne-funkcjonalności)
  - [Strona główna (Wizytówka)](#strona-główna-wizytówka)
  - [Moduł „Level Up!” (Interaktywne gry)](#moduł-level-up-interaktywne-gry)
- [Struktura projektu](#-struktura-projektu)
- [Zastosowane technologie](#-zastosowane-technologie)
- [Jak uruchomić projekt](#-jak-uruchomić-projekt)
- [Plany rozwoju (Roadmapa)](#-plany-rozwoju-roadmapa)
- [Autor i kontakt](#-autor-i-kontakt)

---

## 💡 O projekcie

Projekt powstał z myślą o uczniach szkół podstawowych i średnich, którzy chcą zrozumieć matematykę krok po kroku, przygotować się do egzaminu ósmoklasisty, matury lub po prostu poprawić swoje oceny.

Serwis łączy nowoczesną, przejrzystą stronę wizytówkową z praktycznym narzędziem online – interaktywnym modułem **Level Up!**, w którym uczniowie mogą samodzielnie ćwiczyć m.in. tabliczkę mnożenia, działania podstawowe oraz ułamki zwykłe na różnych poziomach trudności.

---

## ✨ Główne funkcjonalności

### Strona główna (Wizytówka)
- **Nowoczesny design i animacje:** Animowany baner z latającymi symbolami matematycznymi ($\sum, \pi, \sqrt{}, \infty, \int$).
- **Sekcja „O mnie”:** Przedstawienie doświadczenia, pasji oraz sylwetki korepetytora (student Politechniki Poznańskiej na kierunku cyberbezpieczeństwo).
- **Szczegóły zajęć:** Informacje o formule lekcji (indywidualne podejście, nauka zdalna przez Discord/Teams/Messenger, materiały powtórkowe po zajęciach).
- **Przejrzysty cennik:** Wizualne karty z ofertą lekcji zapoznawczej oraz stałych zajęć regularnych.
- **Wielokanałowy kontakt:**
  - Bezpośrednie linki do profili na Facebooku i serwera Discord,
  - Adres e-mail,
  - Formularz zgłoszeniowy.
- **Pełna responsywność (RWD):** Dostosowanie do urządzeń mobilnych, tabletów i komputerów z dedykowanym menu typu hamburger.

### Moduł „Level Up!” (Interaktywne gry)
Platforma do automatycznego generowania zadań rachunkowych w czasie rzeczywistym:
- **Dostępne moduły tematyczne:**
  - Podstawowe działania: dodawanie, odejmowanie, mnożenie, dzielenie,
  - Podstawy ułamków zwykłych (skracanie, rozszerzanie, zamiana na ułamki niewłaściwe),
  - Dodawanie i odejmowanie ułamków zwykłych (sprowadzanie do wspólnego mianownika),
  - Mnożenie i dzielenie ułamków zwykłych.
- **Różnorodne poziomy trudności:** od *Łatwego* po *Bardzo Trudny*.
- **Dwa tryby rozgrywki:**
  - *Tryb domyślny:* Celem jest zdobycie 10 poprawnych odpowiedzi w jak najkrótszym czasie.
  - *Tryb czasowy:* Próba zdobycia jak największej liczby punktów w limicie 2 minut i 30 sekund.
- **Natychmiastowy feedback:** Weryfikacja odpowiedzi, licznik punktów, stoper oraz komunikaty o poprawności.

---

## 📂 Struktura projektu

```text
Korepetycje strona/
├── index.html                      # Strona główna serwisu (landing page)
├── style.css                       # Główne style CSS strony głównej
├── .gitignore                      # Ignorowane pliki gita
├── stronka korki.txt               # Notatki projektowe, wytyczne kolorystyczne
│
├── Level Up/                       # Moduł gier i ćwiczeń interaktywnych
│   ├── levelup.html                # Strona startowa modułu z wyborem gier i instrukcją
│   ├── style.css                   # Style dedykowane modułowi Level Up
│   ├── podstawowe dzialania.html   # Gra: dodawanie, odejmowanie, mnożenie, dzielenie
│   ├── podstawy ulamkow zwyklych.html # Gra: wprowadzenie do ułamków
│   ├── dodawanie i odejmowanie ulamkow.html # Gra: działania na ułamkach zwykłych
│   └── mnozenie i dzielenie ulamkow.html    # Gra: iloczyn i iloraz ułamków
│
├── skrypty gry matematyczne/       # Wczesne wersje i prototypy skryptów JS/HTML
│   ├── dodawanie.html
│   ├── styl.css
│   ├── ulamki copy.js
│   ├── ulamki dodawanie i odejmowanie.js
│   └── wszystko.html
│
└── [Zasoby graficzne]              # Ikony i logotypy
    ├── favicon.png                 # Ikona witryny
    ├── logo.png                    # Główne logo
    ├── logo transparent.png        # Logo z przezroczystym tłem
    ├── icon transparent.png        # Ikona do paska nawigacyjnego
    ├── facebook.png                # Ikona social media
    ├── discord.png                 # Ikona Discord
    └── gmail.png                   # Ikona poczty e-mail
```

---

## 🛠 Zastosowane technologie

- **HTML5:** Semantyczna struktura dokumentu przystosowana pod SEO i dostępność.
- **CSS3:** 
  - Zmienne CSS (`--glowny`, `--akcent`, `--tlo`, `--tekst`, `--dodatkowy`),
  - Elastyczne układy Flexbox oraz CSS Grid,
  - Kluczowe animacje (`@keyframes`) m.in. dla dryfujących symboli matematycznych,
  - Media Queries zapewniające Mobile-First / RWD,
  - Typografia: Google Fonts (*Sour Gummy*, *DM Serif Text*).
- **JavaScript (Vanilla JS):**
  - Obsługa responsywnego menu nawigacyjnego,
  - Silnik dynamicznego generowania i sprawdzania losowych zadań matematycznych,
  - Implementacja liczników czasu, punktacji oraz mechanizmów wyłaniania ułamków nieskracalnych.

---

## 🚀 Jak uruchomić projekt

Projekt oparty jest w całości na technologiach po stronie klienta (front-end), dzięki czemu nie wymaga instalacji żadnych zewnętrznych pakietów ani kompilacji.

### Sposób 1: Bezpośrednio w przeglądarce pod adresem matemagia.pl

### Sposób 2: Bezpośrednio w przeglądarce za pomocą plików
Wystarczy dwukrotnie kliknąć plik `index.html` lub przeciągnąć go do okna dowolnej przeglądarki internetowej (Chrome, Firefox, Edge itp.).

### Sposób 3: Z użyciem lokalnego serwera deweloperskiego (zalecane)
W celu najlepszego doświadczenia (np. poprawne ładowanie ścieżek względnych i czcionek):

1. **Visual Studio Code:**
   - Zainstaluj rozszerzenie **Live Server**.
   - Otwórz folder w VS Code, kliknij prawym przyciskiem myszy na `index.html` i wybierz **„Open with Live Server”**.
2. **Node.js (npx):**
   ```bash
   npx serve .
   ```
3. **Python:**
   ```bash
   python -m http.server 8000
   ```
   Następnie wejdź pod adres `http://localhost:8000`.

---

## 🗺 Plany rozwoju (Roadmapa)

- [ ] Podpięcie backendu do formularza kontaktowego (np. Formspree, EmailJS lub własne API w Node.js/PHP).
- [ ] Zapisywanie najlepszych wyników (rekordów) gracza w pamięci przeglądarki (`localStorage`).
- [ ] Rozszerzenie modułu **Level Up!** o sekcję dla szkoły średniej (m.in. funkcje liniowe i kwadratowe, potęgi, pierwiastki, logarytmy).
- [ ] Dodanie trybu ciemnego (Dark Mode).

---

## 👤 Autor i kontakt

**Aleksander Ostrycharz**
- 📧 E-mail: [matemagia@gmail.com](mailto:matemagia@gmail.com)
- 💬 Discord: [Serwer Discord](https://discord.com/invite/3TGmN9ECCV)
- 🌐 Facebook: [Profil na Facebooku](https://www.facebook.com/profile.php?id=100006596175637)

---
*© 2025 Matemagia. Wszelkie prawa zastrzeżone.*
