import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      colors: {
        "bg-pink": "#8C2BAC",
        "bg-purple-1": "#5027D8",
        "bg-purple-2": "#281B54",
      },
      maxWidth: {
        bar: "180px",
        post: "1400px",
      },
    },
  },
  plugins: [],
} satisfies Config;
