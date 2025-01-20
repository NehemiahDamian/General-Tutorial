import express from 'express';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import authRoutes from './routes/authRoutes.js';
import todoRoutes from './routes/todoRoutes.js';

const app = express();
const PORT = process.env.PORT || 5000;

// For getting URLPath
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Middlewares
// Middleware for public folder to see the static files
app.use(express.static(path.join(__dirname, '../public')));
// Middleware to handle JSON requests
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Routes
app.use('/auth', authRoutes);  // Handles authentication
app.use('/todos', todoRoutes);  // Handles todos

app.listen(PORT, () => {
  console.log(`${PORT} Running`);
});
