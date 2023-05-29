
import Layout from '@/components/Layout'
import { Inter } from 'next/font/google';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router';

// const inter = Inter({
//   weight: ["500"],
//   style: ["normal"],
//   subsets: ["latin"],
//   display: "swap",
//   variable: "--font-inter",
// });
export default function App({ Component, pageProps }: AppProps) {
  {}
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
