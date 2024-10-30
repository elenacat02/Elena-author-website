import { defineConfig } from "vite"

export default defineConfig(({ mode }) => ({
  root: "src",
  base: mode === "production" ? "/Elena-author-website/" : "/",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
  },
}))
