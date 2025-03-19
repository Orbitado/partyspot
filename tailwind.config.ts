import type {Config} from "tailwindcss";

const config: Config = {
    theme: {
            extend: {
              colors: {
                primary: {
                    "100": "#b5e2d1",
                    DEFAULT: "var(--color-primary)",
                },
                secondary: "#FBE843",
                black: {
                    "100": "#333333",
                    "200": "#141413",
                    "300": "#7D8087",
                    DEFAULT: "#000000",
                },
                white: {
                    "100": "#F7F7F7",
                    DEFAULT: "#FFFFFF",
                },
                bg: {
                    "white": "var(--color-bg-white)",
                },
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            boxShadow: {
                100: "2px 2px 0px 0px rgb(0, 0, 0)",
                200: "2px 2px 0px 2px rgb(0, 0, 0)",
                300: "2px 2px 0px 2px rgb(70,180,138)",
            },
        },
    }
};

export default config;