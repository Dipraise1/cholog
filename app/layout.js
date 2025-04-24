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
        <link 
          rel="stylesheet" 
          href="https://fonts.googleapis.com/css2?family=Teko:wght@400;500;600;700&family=Rubik:wght@400;500;700&display=swap" 
        />
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