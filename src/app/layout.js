import { Roboto, Inter } from 'next/font/google';
import "./globals.css";
import Header from '@/components/Header';


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
      <body className="font-sans">
        <Header />
        <div className='mt-16 m-auto p-2 max-w-screen-sm md:max-w-screen-md lg:max-w-[960px] xl:max-w-screen-lg mx-auto'>
`        {children}`
        </div>
      </body>
    </html>
  );
}
