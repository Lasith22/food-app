import https from 'https';
import fs from 'fs';
import path from 'path';
import express from 'express';
import { fileURLToPath } from 'url';
import localhost from 'https-localhost';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Serve static files from the 'dist' directory
app.use(express.static(path.join(__dirname, 'dist')));

localhost()
  .getCerts()
  .then((certs) => {
    https.createServer(certs, app).listen(4433, () => {
      console.log('HTTPS Server running on https://localhost:4433');
    });
  });
