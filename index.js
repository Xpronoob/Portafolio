import express from 'express'
import { fileURLToPath } from 'url'
import path, { dirname } from 'path'

const app = express()
// const PORT = process.env.PORT || 3005
const PORT = process.env.port || 3005

// Obtén la ruta del directorio actual
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// Configurar el directorio de archivos estáticos
app.use(express.static(__dirname))
// app.use(express.static(path.join(__dirname, 'dist')))

// Ruta principal que envía un archivo HTML
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.listen(PORT, () => {
  console.log(`Aplicación corriendo en http://localhost:${PORT}`)
})
