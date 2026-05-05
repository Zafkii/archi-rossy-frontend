# Project Context

## src/components/About.css

```css
.about {
  padding: 3rem 2rem;
  background: var(--bg-panel);
  color: var(--text-main);
  text-align: center;
}

.about h2 {
  margin-bottom: 1rem;
}

.about p {
  color: var(--text-muted);
  max-width: 600px;
  margin: auto;
}

```

## src/components/Contact.css

```css
.contact {
  padding: 4rem 2rem;
  text-align: center;
  background: var(--bg-main);
}

.contact h2 {
  margin-bottom: 2rem;
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

.contact-links a:hover {
  background: var(--button-hover);
  transform: translateY(-2px);
}

```

## src/components/Sidebar.css

```css
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

.sidebar {
  position: fixed;
  top: 0;
  left: -250px;

  width: 250px;
  height: 100%;

  background: var(--bg-panel);
  color: var(--text-main);

  padding: 20px;
  transition: left 0.3s ease;

  z-index: 1000;
}

.sidebar.open {
  left: 0;
}

.sidebar ul {
  list-style: none;
  padding: 0;
}

.sidebar li {
  padding: 10px 0;
  cursor: pointer;
  border-bottom: 1px solid var(--border-color);
}

.sidebar li:hover {
  color: var(--color-secondary);
}

```

## src/components/Footer.css

```css
.footer {
  background-color: var(--bg-panel);
  color: var(--text-muted);
  padding: 1rem;
  text-align: center;
  border-top: 1px solid var(--border-color);
  font-size: 0.9rem;
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

```

## src/components/GenericProjectCard.css

```css
.card {
  max-width: 350px;
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

.card:first-child {
  margin-top: 120px; /* 🔥 ajusta según tu header */
}

```

## src/components/GenericProyectModal.css

```css
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--bg-overlay);

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

```

## src/components/Home.css

```css
.main {
  margin-top: 120px; /* 🔥 espacio fijo arriba */

  display: grid;
  gap: 1.5rem;

  grid-template-columns: repeat(3, 1fr);

  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}
/* tablet */
@media (max-width: 768px) {
  .main {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* móvil */
@media (max-width: 480px) {
  .main {
    grid-template-columns: 1fr;
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

.content {
  padding-top: 5rem;
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

      display: flex;
      justify-content: center;

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

