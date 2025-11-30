#!/usr/bin/env node

import('../dist/index.js').catch((error) => {
  console.error('Error al cargar el CLI:', error);
  process.exit(1);
});
