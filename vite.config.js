import { defineConfig } from "vite"

export default defineConfig({
  root: "src",
  base: "/Elena-author-website",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
  },
})
