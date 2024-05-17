import '@/app/ui/global.css';
import { inter } from '@/app/ui/font';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased dark:bg-gray-700 `}>{children}</body>
    </html>
  );
}
