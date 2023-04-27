// import '@/styles/globals.css' // not working, dont know why! Used below line as solution
import '../styles/globals.css';
import { useEffect } from "react";
// import Navbar from './Components/Navbar';

export default function App({ Component, pageProps }) {
  // return <Component {...pageProps} /> // changed this to enable tailwind css and tailwind element

  useEffect(() => {

    // <Navbar/>

    const use = async () => {
      (await import('tw-elements')).default;
    };
    use();
  }, []);
  

  return <Component {...pageProps} />;
}