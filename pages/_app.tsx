import '../styles/globals.css';
import { FormProvider } from '../src/context/formContext';
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return(
    <FormProvider>
      <Component {...pageProps} />
    </FormProvider>

  ) 
}
