// import '../styles/globals.css';
import '../public/styles/stylesheets/globals.css';
import '../public/styles/stylesheets/components.css';
import '../public/styles/stylesheets/pages.css';
import { useState, useEffect } from 'react';
import { openMenu } from '../components/Menu';

function MyApp({ Component, pageProps }) {
  const [firstVisit, setFirstVisit] = useState(true);

  useEffect(() => {
    if (firstVisit) {
      openMenu();
      setFirstVisit(false);

      // setTimeout(() => {
      //   setFirstVisit(false);
      //   pageProps = { ...pageProps, ...{ firstVisit } };
      //   console.log("pageProps", pageProps);
      // }, 3000);
    }
  }, []);


  // console.log("Component", Component, pageProps);

  return <Component {...pageProps} />
}

export default MyApp
