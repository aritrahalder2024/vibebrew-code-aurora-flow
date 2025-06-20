
import type { Config } from "tailwindcss";
// @ts-ignore
import tailwindcssAnimate from "tailwindcss-animate";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'space-grotesk': ['Space Grotesk', 'sans-serif'],
				'inter': ['Inter', 'sans-serif'],
				'jetbrains-mono': ['JetBrains Mono', 'monospace'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// Aurora gradient colors
				aurora: {
					pink: '#FF5F96',
					purple: '#B565D9',
					violet: '#7A5CFA',
				},
				// Glass colors
				glass: {
					light: 'rgba(255, 255, 255, 0.1)',
					medium: 'rgba(255, 255, 255, 0.2)',
					dark: 'rgba(0, 0, 0, 0.1)',
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			backgroundImage: {
				'aurora-gradient': 'linear-gradient(135deg, #FF5F96 0%, #B565D9 50%, #7A5CFA 100%)',
				'aurora-mesh': 'radial-gradient(circle at 20% 80%, #FF5F96 0%, transparent 50%), radial-gradient(circle at 80% 20%, #B565D9 0%, transparent 50%), radial-gradient(circle at 40% 40%, #7A5CFA 0%, transparent 50%)',
				'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
			},
			backdropBlur: {
				xs: '2px',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
				'glass': '20px',
			},
			boxShadow: {
				'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
				'glass-inset': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.05)',
				'glow': '0 0 20px rgba(122, 92, 250, 0.3)',
				'glow-pink': '0 0 20px rgba(255, 95, 150, 0.3)',
				'tile': '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'aurora-flow': {
					'0%': { 
						transform: 'translateX(-100%) translateZ(0)'
					},
					'100%': { 
						transform: 'translateX(100%) translateZ(0)'
					},
				},
				'float': {
					'0%, 100%': { 
						transform: 'translateY(0px) translateZ(0)' 
					},
					'50%': { 
						transform: 'translateY(-20px) translateZ(0)' 
					},
				},
				'glow-pulse': {
					'0%, 100%': { 
						boxShadow: '0 0 20px rgba(122, 92, 250, 0.3)',
						transform: 'translateZ(0) scale(1)'
					},
					'50%': { 
						boxShadow: '0 0 30px rgba(122, 92, 250, 0.5)',
						transform: 'translateZ(0) scale(1.02)'
					},
				},
				'pulse-slow': {
					'0%, 100%': { 
						opacity: '0.7', 
						transform: 'scale(1.5) translateZ(0)' 
					},
					'50%': { 
						opacity: '0.4', 
						transform: 'scale(1.4) translateZ(0)' 
					},
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'aurora-flow': 'aurora-flow 10s ease-in-out infinite',
				'float': 'float 8s ease-in-out infinite',
				'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
				'pulse-slow': 'pulse-slow 4s ease-in-out infinite',
			}
		}
	},
	plugins: [tailwindcssAnimate],
} satisfies Config;
