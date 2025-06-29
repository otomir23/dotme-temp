import cloudflare from "@astrojs/cloudflare"
import tailwindcss from "@tailwindcss/vite"
import { defineConfig, envField } from "astro/config"

// https://astro.build/config
export default defineConfig({
    adapter: cloudflare(),
    output: "server",
    vite: {
        plugins: [tailwindcss()],
    },
    env: {
        schema: {
            LASTFM_API_KEY: envField.string({ context: "server", access: "public" }),
            LASTFM_USERNAME: envField.string({ context: "server", access: "public" }),
            WEBRING_SLUG: envField.string({ context: "server", access: "public" }),
            PLAUSIBLE_DOMAIN: envField.string({ context: "server", access: "public", optional: true }),
            PLAUSIBLE_SCRIPT_URL: envField.string({ context: "server", access: "public", optional: true }),
        }
    }
})
