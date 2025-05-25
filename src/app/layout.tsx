import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'My Portfolio',
  description: 'Welcome to my portfolio!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className="container mx-auto p-4">{children}</main>
      </body>
    </html>
  );
}
