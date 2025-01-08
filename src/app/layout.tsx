import { Lexend_Deca } from 'next/font/google'
import "./globals.css";
import ReduxProvider from '@/providers/reduxProvider';

const lexend = Lexend_Deca({
  weight: ['200','300','400', '500', '600', '700', '800', '900'],
  style: ['normal'],
  subsets: ['latin'],
  display: "swap",
  variable: '--font-lexend',
})


export default function RootLayout({children}: { children: React.ReactNode }) {
  return (
    
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${lexend.variable} font-sans`}
      >
        
        <ReduxProvider>
          {children}
        </ReduxProvider>
      
      </body>
    </html>
  );
}
