# Klyro — Deploy en GitHub Pages

Guía completa para publicar el sitio en GitHub Pages, con dos métodos.

---

## ⚙️ Paso 1 — Ajustar `vite.config.js`

Abre `vite.config.js` y cambia el valor de `base` según tu caso:

| Tipo de repo | Valor de `base` |
|---|---|
| `usuario.github.io` (repo especial) | `"/"` |
| Cualquier otro nombre (ej: `klyro-web`) | `"/klyro-web/"` |

```js
// vite.config.js
export default defineConfig({
  plugins: [react()],
  base: "/klyro-web/", // 👈 nombre exacto de tu repo
});
```

---

## 🤖 Método A — GitHub Actions (recomendado)
> Cada `git push` a `main` despliega automáticamente. Sin pasos manuales.

### 1. Activar GitHub Pages con Actions

En tu repo de GitHub:
`Settings → Pages → Source → selecciona "GitHub Actions"`

### 2. El workflow ya está incluido en `.github/workflows/deploy.yml`

Solo haz push y listo:

```bash
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/klyro-web.git
git push -u origin main
```

El sitio quedará en:
`https://TU_USUARIO.github.io/klyro-web/`

---

## 🖐 Método B — Deploy manual con `gh-pages`
> Útil si no quieres usar Actions o prefieres control total.

### 1. Instalar dependencias
```bash
npm install
```

### 2. Hacer build y deploy en un comando
```bash
npm run deploy
```

Esto corre `vite build` y sube la carpeta `dist/` a la rama `gh-pages` automáticamente.

### 3. Activar GitHub Pages desde la rama `gh-pages`

En tu repo de GitHub:
`Settings → Pages → Source → Deploy from a branch → selecciona "gh-pages" → / (root)`

El sitio quedará en:
`https://TU_USUARIO.github.io/klyro-web/`

---

## 🔁 Flujo de trabajo diario (con Actions)

```bash
# Hacer cambios en el código...
git add .
git commit -m "update: new product added"
git push
# → GitHub Actions buildea y despliega automáticamente ✅
```

---

## ❓ Problemas comunes

**El sitio carga en blanco**
→ Revisa que `base` en `vite.config.js` tenga el nombre exacto de tu repo.

**Los estilos no cargan**
→ Mismo problema: `base` incorrecto.

**El workflow falla**
→ Ve a `Actions` en tu repo y revisa el log del paso que falló.
→ Lo más común: falta activar Pages en Settings.
