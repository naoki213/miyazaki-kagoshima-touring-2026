import type {Metadata} from 'next';import './globals.css';
export const metadata:Metadata={title:'宮崎・鹿児島ツーリング 2026',description:'日南海岸、都井岬、桜島を走る2日間のスマホ用ツーリングしおり'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="ja"><head><meta name="theme-color" content="#18302d"/><meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover"/></head><body>{children}</body></html>}
