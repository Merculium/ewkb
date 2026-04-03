# Erna Wojaczek — Hafty i Rękodzieło

Strona internetowa dla rękodzielnika specjalizującego się w haftach ludowych, słowiańskich i rekonstrukcjach historycznych.

## Struktura plików

```
/
├── index.html       ← główna strona
├── style.css        ← style
├── script.js        ← interakcje (nav, filtry, scroll reveal)
└── assets/          ← TUTAJ wrzucasz własne grafiki
    ├── logo.png             ← logo (dowolna wielkość, przezroczyste tło)
    ├── hero-embroidery.jpg  ← główne zdjęcie na hero (ok. 800×1000px)
    ├── about.jpg            ← zdjęcie portretowe (ok. 600×800px)
    ├── portfolio-1.jpg      ← 6 zdjęć portfolio (ok. 800×600px)
    ├── portfolio-2.jpg
    ├── portfolio-3.jpg
    ├── portfolio-4.jpg
    ├── portfolio-5.jpg
    └── portfolio-6.jpg
```

## Jak uruchomić na GitHub Pages

1. Utwórz repozytorium o nazwie `twoja-nazwa.github.io` (lub dowolnej innej)
2. Wrzuć wszystkie pliki do repozytorium
3. W ustawieniach repo: **Settings → Pages → Source: Deploy from branch → main**
4. Strona będzie dostępna pod: `https://twoja-nazwa.github.io`

## Co należy zaktualizować przed publikacją

### W `index.html`:
- `erna@example.com` → prawdziwy adres e-mail (sekcja kontakt)
- Teksty w sekcjach (o mnie, usługi) jeśli chcesz coś zmienić
- Nazwy i opisy w portfolio

### W `style.css`:
- Nic nie musisz zmieniać, chyba że chcesz dostosować kolory w `:root`

### Formularz kontaktowy
Formularz działa tylko client-side (pokazuje komunikat "Wysłano!").  
Aby naprawdę wysyłał e-maile, użyj jednej z opcji:
- **Formspree** (darmowy plan): zamień `<form>` na `<form action="https://formspree.io/f/YOUR_ID" method="POST">`
- **EmailJS** — darmowe 200 maili/miesiąc
- **Netlify Forms** — jeśli hostujesz na Netlify zamiast GitHub Pages

## Kolory (do dostosowania w `:root`)
```css
--red-muted:  #8b2c2c;   /* główny akcent (biedronka) */
--gold-light: #d4a017;   /* drugi akcent (słonecznik) */
--cream:      #f8f4ef;   /* tło sekcji */
--stone-800:  #3e3630;   /* tekst */
```

## Czcionki
- **Cinzel** — nagłówki i nawigacja (styl historyczny/klasyczny)
- **EB Garamond** — tekst (elegancki, czytelny)
Ładowane z Google Fonts, wymagają połączenia z internetem.
