import '../styles/globals.css'
import "@material-tailwind/react/tailwind.css";
import Layout from '../components/Layout';
import { Provider } from 'react-redux';
import store from '../redux/store';
import { Router } from 'next/router';
import { useState } from 'react';
import BeatLoader from "react-spinners/BeatLoader";
import Nprogres from 'nprogress'
function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false)
  Router.events.on('routeChangeStart', (url) => {
    Nprogres.start()
    setLoading(true)
  })
  Router.events.on('routeChangeComplete', (url) => {
    Nprogres.done()
    setLoading(false)
  })
  return (
    <>
      <Provider store={store}>
        <Layout>
          {
            loading ?
              <div className='w-screen flex justify-center items-center' style={{height:'82vh'}}>
                <BeatLoader loading={loading} size={20} margin={10} color='white' />
              </div>
              : <Component {...pageProps} />
          }
        </Layout>
      </Provider>
    </>
  )
}

export default MyApp
