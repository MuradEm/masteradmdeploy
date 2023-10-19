
import StyledComponentsRegistry from './registry'
import type { Metadata } from 'next'
import AppContextProvider from "@/services/context";
import ClientSessionProvider from "@/app/Session";
import { SideBarMenu } from '@/components/SideBarMenu';
import { Header } from '@/components/Header';
import { GlobalStyle } from '@/styles/global';
import styles from './styles.module.css'

export const metadata: Metadata = {
  
  title: 'Master 2.0',
  description: 'Created by Info-rmi',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
    <head>
      <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" rel="stylesheet"/>
      <link href='https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap' rel="stylesheet"/>
    </head>
    <body>
      <StyledComponentsRegistry>
        <AppContextProvider>
          <ClientSessionProvider>
            <GlobalStyle/>
           
              {children}
           
          </ClientSessionProvider>
        </AppContextProvider>
      </StyledComponentsRegistry>
    </body>
    </html>
  )
}
