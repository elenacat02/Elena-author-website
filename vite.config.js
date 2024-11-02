import { defineConfig } from "vite"

export default defineConfig(({ mode }) => ({
  root: "src",
  base: "/",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
  },
}))
