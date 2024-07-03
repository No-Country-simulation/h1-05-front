import type { Config } from 'tailwindcss'
import nextuiConfig from './nextui.config'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    ],

    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            animation: {
                latido: 'latido 1s ease-in-out infinite',
            },
            keyframes: {
                latido: {
                    '0%, 100%': { transform: 'scale(1)' },
                    '40%': { transform: 'scale(1.02)' },
                    '50%': { transform: 'scale(1.06)' },
                },
            },
        },
    },
    plugins: [nextuiConfig],
}
export default config
