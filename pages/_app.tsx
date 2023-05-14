import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AppWrapper } from '../context/useAppContext';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
        <Layout>
          <AppWrapper>
            <Component {...pageProps} />
          </AppWrapper>
        </Layout>     
  )
}

export default MyApp
