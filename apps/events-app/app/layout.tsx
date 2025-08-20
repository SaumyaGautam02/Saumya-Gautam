import './globals.css';
import Navigation from './components/Navigation';

export const metadata = {
  title: 'Event Manager - Organize Your Events',
  description: 'A simple and efficient event management application built with Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  )
}
