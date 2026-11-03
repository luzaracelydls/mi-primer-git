import './globals.css';
import AppThemeProvider from '@/components/AppThemeProvider';

export const metadata = {
  title: 'Directorio de Asistencia',
  description: 'Directorio de alumnos migrado de HTML a Next.js'
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <AppThemeProvider>{children}</AppThemeProvider>
      </body>
    </html>
  );
}