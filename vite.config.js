import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: 'https://innovationtech1.github.io/innovationtechone/'
})

//En la base se configura el nombre de usuario y repo en github