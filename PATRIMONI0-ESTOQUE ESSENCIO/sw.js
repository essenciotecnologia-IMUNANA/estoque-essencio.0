self.addEventListener('install', (e) => {
  console.log('ESSENCIO PWA Instalado');
});

self.addEventListener('fetch', (e) => {
  // Necessário para o PWA funcionar offline no futuro
});