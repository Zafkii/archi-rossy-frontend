# Project Context

## src/components/About.css

```css
.about {
  padding: 4rem 0; /* quitamos padding lateral */
}

/* 🔥 CONTENEDOR REAL */
.about > * {
  width: 80%; /* 🔥 deja 10% a cada lado */
  max-width: 900px;

  margin: 0 auto;
  padding: 2rem;

  background: rgba(13, 132, 118, 0.25); /* 🔥 opacidad */
  backdrop-filter: blur(10px); /* 🔥 glass effect */

  border-radius: 12px;
  text-align: center;
}

.about h2 {
  margin-bottom: 1rem;
}

.about p {
  color: var(--text-muted);
}

@media (max-width: 768px) {
  .about {
    margin-left: 40px;
  }
}

```

## src/components/Contact.css

```css
.contact {
  padding: 4rem 0;
}

.contact > * {
  width: 80%;
  max-width: 900px;

  margin: 0 auto;
  padding: 2rem;

  background: rgba(13, 132, 118, 0.25);
  backdrop-filter: blur(10px);

  border-radius: 12px;
}

.contact h2 {
  margin-bottom: 2rem;
  text-align: center;
}

.contact-links {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}
.contact-links a {
  text-decoration: none;
  padding: 0.8rem 1.5rem;

  background: var(--button-bg);
  color: var(--text-main);

  border-radius: 8px;
  transition: all 0.25s ease;
}

/* 🔥 HOVER CONSISTENTE */
.contact-links a:hover {
  background: var(--button-hover);
  color: var(--bg-main); /* 🔥 contraste fuerte */
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .contact {
    margin-left: 40px;
  }
}

```

## src/components/Sidebar.css

```css
/* 🔥 Botón hamburguesa */
.hamburger {
  position: fixed;
  top: 15px;
  left: 15px;
  z-index: 1100;

  background: var(--button-bg);
  color: var(--text-main);

  border: none;
  padding: 10px;
  border-radius: 6px;

  cursor: pointer;
}

/* =========================
   🔥 SIDEBAR BASE (desktop)
   ========================= */
.sidebar {
  position: fixed;
  top: 0;
  left: -250px; /* 🔥 visible en desktop */

  width: 250px;
  height: 100%;

  background: var(--bg-panel);
  color: var(--text-main);

  padding: 70px 20px 20px 20px;

  z-index: 1000;

  /* 🔥 scroll */
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}

.sidebar.open {
  left: 0;
}
/* =========================
   🔥 LISTA
   ========================= */
.sidebar ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sidebar li {
  padding: 12px 0;
  cursor: pointer;
  border-bottom: 1px solid var(--border-color);
}

.sidebar li:hover {
  color: var(--color-secondary);
}

/* 🔥 Links dentro */
.sidebar a {
  text-decoration: none;
  color: inherit;
  display: block;
}

/* =========================
   🔥 MODO MÓVIL
   ========================= */
@media (max-width: 768px) {
  .sidebar {
    left: -250px; /* 🔥 oculto */
    transition: left 0.3s ease;
  }

  .sidebar.open {
    left: 0; /* 🔥 aparece */
  }
}

```

## src/components/Footer.css

```css
.footer {
  padding: 3rem 0;
}

/* 🔥 contenedor interno */
.footer p {
  width: 80%;
  max-width: 900px;

  margin: 0 auto;
  padding: 1.5rem;

  background: rgba(13, 132, 118, 0.25);
  backdrop-filter: blur(10px);

  border-radius: 12px;

  color: var(--text-muted);
  text-align: center;
}
@media (max-width: 768px) {
  .footer {
    margin-left: 40px;
  }
}

```

## src/components/Header.css

```css
.main-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;

  height: 80px; /* 🔥 ALTURA FIJA */
  padding: 0 2rem; /* quitamos padding vertical */

  background: var(--accent-gradient);
  box-shadow: var(--shadow-soft);
  z-index: 999;

  display: flex;
  justify-content: center;
  align-items: center;

  transition:
    opacity 0.4s ease,
    transform 0.4s ease;
}

.main-header h1 {
  margin: 0;
  font-size: 1.6rem;
  color: var(--text-main);
  letter-spacing: 1px;
}

/* visible */
.main-header.visible {
  opacity: 1;
  transform: translateY(0);
}

/* hidden */
.main-header.hidden {
  opacity: 0;
  transform: translateY(-100%);
  pointer-events: none;
}

@media (max-width: 430px) {
  .main-header h1 {
    padding-left: 60px;
  }
}

```

## src/components/GenericProjectCard.css

```css
.card {
  max-width: 250px;
  margin: 0 auto;

  border-radius: 0.6rem;
  overflow: hidden;
  background-color: var(--bg-card);
  box-shadow: var(--shadow-soft);

  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;
}

.card:hover {
  transform: scale(1.04);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.5);
}

.image {
  width: 100%;
  height: 16rem;
  object-fit: cover;
}

.content {
  padding: 1rem;
  color: var(--text-main);
}

.title {
  font-weight: bold;
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
}

.content p {
  color: var(--text-muted);
}

@media (max-width: 768px) {
  .card {
    margin-left: 60px;
  }
}

```

## src/components/GenericProyectModal.css

```css
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw; /* 🔥 clave */
  height: 100vh; /* 🔥 clave */
  background: rgba(0, 0, 0, 0);

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 1000;
}

.modal-content {
  position: relative;
  padding: 20px;
  border-radius: 10px;

  max-width: 700px;
  width: 85%;
  max-height: 85vh;
  overflow-y: auto;

  background: var(--bg-panel);
  color: var(--text-main);
  box-shadow: var(--shadow-soft);
}

.modal-content img {
  width: 100%;
  border-radius: 6px;
  margin: 10px 0;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;

  background: var(--color-danger);
  color: white;

  border: none;
  border-radius: 6px;

  padding: 5px 10px;
  cursor: pointer;

  transition: background 0.2s ease;
}

.close-btn:hover {
  background: #b71c1c;
}

.modal-content a {
  color: var(--color-secondary);
  text-decoration: underline;
  font-weight: 500;
}

.modal-content a:hover {
  opacity: 0.8;
}

.modal-content h3 {
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
  color: var(--text-main);
}

@media (max-width: 768px) {
  .modal-content {
    width: 75%;
    max-height: 80vh;
    margin-top: 60px; /* si quieres bajarlo */
  }
}

```

## src/components/Home.css

```css
.main {
  display: grid;
  gap: 1.5rem;

  grid-template-columns: repeat(3, 1fr);

  max-width: 1200px;

  /* 🔥 CLAVE: espacio para sidebar */
  margin-top: 110px; /* altura header */
  margin-left: 250px;
  margin-right: auto;
  padding: 0 1rem;

  box-sizing: border-box;
}

/* tablet */
@media (max-width: 768px) {
  .main {
    grid-template-columns: repeat(2, 1fr);

    /* 🔥 quitar espacio sidebar */
    margin-left: 0;
  }
}

/* móvil */
@media (max-width: 480px) {
  .main {
    grid-template-columns: 1fr;
    margin-left: 0;
  }
}

.about,
.contact,
.footer {
  margin-top: 1rem;

  /* 🔥 evitar que queden pegados */
  margin-left: 250px;
  margin-right: auto;
  padding: 0 1rem;
}

/* 🔥 también quitar en móvil */
@media (max-width: 768px) {
  .about,
  .contact,
  .footer {
    margin-left: 0;
  }
}

```

## src/styles/Modal.css

```css
.modal-overlay {
  position: fixed;
  background: var(--bg-overlay);
}

.modal-content {
  background: var(--bg-panel);
  color: var(--text-main);
  box-shadow: var(--shadow-soft);
}

```

## src/styles/theme.css

```css
:root {
  /* 🎯 COLORES PRINCIPALES */
  --color-primary: #0d8476;
  --color-secondary: #0eff36;

  /* 🧱 BACKGROUNDS */
  --bg-main: #0a0a0a;
  --bg-card: #1b1b1b;
  --bg-panel: #141414;
  --bg-overlay: rgba(20, 20, 20, 0.95);
  --bg-section: #0b3d37; /* 🔥 versión oscura del primary */

  /* 📝 TEXTOS */
  --text-main: #ffffff;
  --text-muted: #b3b3b3;

  /* 🧊 BORDES */
  --border-color: rgba(255, 255, 255, 0.08);

  /* 🌫 SOMBRAS */
  --shadow-soft: 0 4px 20px rgba(0, 0, 0, 0.35);

  /* 🎛 BOTONES */
  --button-bg: var(--color-primary);
  --button-hover: var(--color-secondary);

  /* ⚠️ ESTADOS */
  --color-danger: #d32f2f;
  --color-success: #2e7d32;

  /* 🌈 GRADIENTE */
  --accent-gradient: linear-gradient(
    135deg,
    var(--color-primary),
    var(--color-secondary)
  );
}

```

## src/App.css

```css
#root {
  max-width: 1280px;
  margin: 0 auto;
  text-align: center;
}

```

## src/index.css

```css
:root {
  font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;

  color-scheme: light dark;
  color: rgba(255, 255, 255, 0.87);
  background-color: #242424;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a {
  font-weight: 500;
  color: #646cff;
  text-decoration: inherit;
}
a:hover {
  color: #535bf2;
}

body {
  margin: 0;
  padding-top: 120px;
  min-width: 320px;
  min-height: 100vh;
  background-image: url("./assets/bg.svg");
  background-size: cover;
  background-position: center, center;
  background-repeat: no-repeat, no-repeat;
  user-select: none;
}

h1 {
  font-size: 3.2em;
  line-height: 1.1;
}

button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
}
button:hover {
  border-color: #646cff;
}
button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}

@media (prefers-color-scheme: light) {
  :root {
    color: #213547;
    background-color: #ffffff;
  }
  a:hover {
    color: #747bff;
  }
  button {
    background-color: #f9f9f9;
    :root {
      font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
      line-height: 1.5;
      font-weight: 400;

      color: var(--text-main);
      background-color: var(--bg-main);

      text-rendering: optimizeLegibility;
      -webkit-font-smoothing: antialiased;
    }

    body {
      margin: 0;
      min-width: 320px;
      min-height: 100vh;

      background-color: var(--bg-main);
      color: var(--text-main);

      user-select: none;
    }

    h1 {
      font-size: 2.5em;
    }

    button {
      border-radius: 8px;
      border: none;
      padding: 0.6em 1.2em;

      font-size: 1em;
      font-weight: 500;

      background: var(--button-bg);
      color: var(--text-main);

      cursor: pointer;
      transition: all 0.2s ease;
    }

    button:hover {
      background: var(--button-hover);
    }
  }
}

```

