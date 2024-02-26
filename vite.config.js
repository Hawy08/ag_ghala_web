import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/ag_ghala_web/",
  assetsInclude: [
    "**/*.png",
    "**/*.jpg",
    "**/*.jpeg",
    "**/*.gif",
    "**/*.svg",
    "**/*.ico",
    "**/*.webp",
    "**/*.mp4",
    "**/*.webm",
    "**/*.ogg",
    "**/*.mp3",
    "**/*.wav",
    "**/*.flac",
    "**/*.aac",
    "**/*.woff",
    "**/*.woff2",
    "**/*.eot",
    "**/*.ttf",
    "**/*.otf",
    "**/*.map",
    "**/*.apk",
  ],
});
