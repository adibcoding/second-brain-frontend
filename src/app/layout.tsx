import './globals.css'
import { inter, notoSerif } from './fonts'

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${notoSerif.variable}`}>
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}