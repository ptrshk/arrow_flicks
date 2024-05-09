import '@mantine/core/styles.css';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import AppLayout from './components/AppLayout';

export const metadata = {
  title: 'ArrowFlicks',
  description: 'I made a test task!',
};

export default function RootLayout({ children }) {
  

  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider
          theme={{
            fontFamily: 'Inter, sans-serif',
            primaryColor: 'purple',
            primaryShade: 1,
            colors: {
              'purple': ['#F2ECFA', '#E5D5FA', '#D1B4F8', '#BD93F7', '#9854F6', '#541F9D'],
            },
          }}
          withGlobalStyles
        >
          <AppLayout>{children}</AppLayout>
        </MantineProvider>
      </body>
    </html>
  )
}
