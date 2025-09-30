import { Roboto, Inter } from 'next/font/google';
import "./globals.css";
import Header from '@/components/common/Header';
import Footer from "@/components/common/Footer";


const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-roboto',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['600', '800'],
  variable: '--font-inter',
});
export const metadata = {
  title: "SchoolNotes",
  description: "SchoolNotes is a simple web app that helps students share, organize, and manage their notes efficiently across subjects and devices.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${roboto.variable} ${inter.variable}`}>
      <body className="font-sans min-h-screen flex flex-col">
        <Header />
        <div className='mt-16 pb-10 flex-grow'>
            {children}
        </div>
      <Footer />
      </body>
    </html>
  );
}
