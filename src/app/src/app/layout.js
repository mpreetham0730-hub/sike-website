import './globals.css'

export const metadata = {
  title: 'SIKE',
  description: 'Dark Aesthetic Streetwear Brand',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}