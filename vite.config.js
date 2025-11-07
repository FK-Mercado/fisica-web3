import { defineConfig } from 'vite'

// ⚠️ Reemplaza 'nombre-del-repo' por el nombre real de tu repositorio de GitHub
export default defineConfig({
    base: 'https://github.com/FK-Mercado/fisica-web3',
    build: {
        outDir: 'dist'
    }
});
