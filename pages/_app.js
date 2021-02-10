// import App from 'next/app'
import Head from 'next/head'
import Navbar from '../components/navbar'
import MobileHeader from '../components/mobileHeader'
import '../styles/global.css'
import { useState } from 'react'

function MyApp({ Component, pageProps }) {

    const [menuActive, setMenuActive] = useState(false)

    const menuActiveHandler = () =>{
        setMenuActive(currentState => !currentState)
    }
    return (
        <>
            <Head>
                <title>Natacha & Conor</title>
                <link 
                    rel="preconnect" 
                    href="https://fonts.gstatic.com" 
                />
                <link 
                    href="https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap" 
                    rel="stylesheet"
                />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap" rel="stylesheet"/>
            </Head>
            <Navbar menuTog={menuActiveHandler} menuActive={menuActive} />
            <MobileHeader menuTog={menuActiveHandler} />
            <Component {...pageProps} />
        </>
    )
  }
  
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  // MyApp.getInitialProps = async (appContext) => {
  //   // calls page's `getInitialProps` and fills `appProps.pageProps`
  //   const appProps = await App.getInitialProps(appContext);
  //
  //   return { ...appProps }
  // }
  
  export default MyApp