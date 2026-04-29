# 🚀 TODO List App (React + Vite)

Aplicación de lista de tareas desarrollada con React + Vite como práctica de estado, componentes y hooks.

---

## ✨ Funcionalidades

- Crear tareas
- Editar tareas
- Eliminar tareas individuales
- Marcar tareas como completadas (toggle)
- Limpiar todas las tareas (CLEAR)
- Restaurar tareas iniciales (RESET)
- Validación de mínimo 6 caracteres
- Mensajes de error y confirmación
- Auto-limpieza del input tras 20 segundos
- Precarga de datos desde JSON

---

## 🧠 Tecnologías

- React
- Vite
- JavaScript (ES6+)
- CSS3
- UUID

---

## 📂 Estructura

src/
- components/
  - Form.jsx
  - List.jsx
  - Item.jsx
  - Header.jsx
  - Footer.jsx
- lista.json
- App.jsx
- main.jsx

---

## ⚡ Instalación

npm install

---

## 🚀 Ejecución en desarrollo

npm run dev

---

## 📦 Build producción

npm run build

---

## 🌐 Deploy en Netlify

1. Subir proyecto a GitHub
2. Ir a https://www.netlify.com/
3. New site → Import from Git
4. Seleccionar repositorio
5. Configurar:
   - Build command: npm run build
   - Publish directory: dist
6. Deploy

---

## 📌 Aprendizaje

- useState
- useEffect
- Componentización
- CRUD completo en React
- Manejo de props
- Separación de lógica y UI