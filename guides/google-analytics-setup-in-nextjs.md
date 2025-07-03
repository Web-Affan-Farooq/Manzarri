## Setup for google analytics in Next.JS:

**`Package installation :`**
run this command for installation of required package .

```bash
npm install @next/third-parties@latest
```
import it in layout file and use it as follows :

```typescript
import { GoogleAnalytics } from '@next/third-parties/google'
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
      <GoogleAnalytics gaId="G-XYZ" />
    </html>
  )
}
```