import { fontFamily } from "tailwindcss/defaultTheme";
import type { Config } from "tailwindcss";
import lineClamp from '@tailwindcss/line-clamp';
import daisyui from 'daisyui';


const config: Config = {
	darkMode: ["class"],
	content: ["./src/**/*.{html,js,svelte,ts}"],
	safelist: ["dark"],
	theme: {
		screens: {
			'sm': '600px',
			'md': '728px',
			'lg': '984px',
			'xl': '1280px',  // Diubah dari 1200px menjadi 1280px
			'2xl': '1580px',
			'3xl': '1700px'
		},
		container: {
			center: true,
			padding: "2rem",
			screens: {
				'sm': '600px',
				'md': '728px',
				'lg': '984px',
				'xl': '1280px',  // Diubah dari 1200px menjadi 1280px
				'2xl': '1580px',
				'3xl': '1700px'
			}
		},
		extend: {
			colors: {
				secondary:"#3B3422",
				gold:"#AF9F8D",
				lightbg:"#FFFFF9"
			},
		}
	},
	plugins:[
		daisyui,
		
	],
};

export default config;
