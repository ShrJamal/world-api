import type { AppProps } from 'next/app'
import dynamic from 'next/dynamic'
import { QueryClientProvider, Hydrate } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import { reactQuery } from '../data'
import 'tailwindcss/tailwind.css'
import '../public/main.css'
import 'nprogress/nprogress.css'

const TopProgressBar = dynamic(
  () => {
    return import('../components/TopProgressBar')
  },
  { ssr: false },
)
export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={reactQuery}>
      <Hydrate state={pageProps.dehydratedState}>
        <TopProgressBar />
        <Component {...pageProps} />
      </Hydrate>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}
