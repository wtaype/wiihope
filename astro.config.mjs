// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  // Si tu repo se llama "wiihope" y lo sirves en:
  // https://tu-usuario.github.io/wiihope/
  base: '/wiihope/',
  build: {
    // Astro ya genera código optimizado y minificado en modo production.
    // No hace falta tocar nada más para minificar CSS.
  }
});