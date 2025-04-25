import './globals.css'
import { Inter } from 'next/font/google'
import StyledComponentsRegistry from './lib/registry'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Chologg - Chicano-styled Gaming Rewards',
  description: 'Chologg is your ultimate destination for Chicano-styled gaming rewards.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&family=Teko:wght@400;500;600;700&family=Rubik:wght@400;500;700&family=Russo+One&display=swap" rel="stylesheet" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body className={inter.className}>
        <StyledComponentsRegistry>
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  )
} 