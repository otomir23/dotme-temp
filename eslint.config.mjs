import antfu from "@antfu/eslint-config"

export default antfu({
    stylistic: {
        indent: 4,
        quotes: "double",
        semi: false,
    },
    typescript: {
        overrides: {
            "@typescript-eslint/consistent-type-definitions": ["error", "type"],
        },
    },
    jsonc: false,
    astro: true,
}, {
    rules: {
        "perfectionist/sort-imports": ["error", {
            groups: [
                "type",
                "builtin",
                "external",
                "internal",
                ["parent", "sibling", "index"],
                "side-effect",
                "unknown",
            ],
            newlinesBetween: "ignore",
            order: "asc",
            type: "natural",
            internalPattern: ["^@/.*"],
        }],
        "style/member-delimiter-style": ["error", {
            multiline: {
                delimiter: "comma",
                requireLast: true,
            },
            singleline: {
                delimiter: "comma",
                requireLast: false,
            },
        }],
        "style/brace-style": ["error", "1tbs", {
            allowSingleLine: true,
        }],
        "antfu/top-level-function": ["off"],
    },
})
