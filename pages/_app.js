import '../public/styles/stylesheets/globals.css';
import '../public/styles/stylesheets/components.css';
import '../public/styles/stylesheets/pages.css';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { getLangFromPath } from '../utils/Lang';

function CustomApp({ Component, pageProps }) {
  const { pathname } = useRouter();
  const pageLang = getLangFromPath(pathname);
  useEffect(() => {
    document.documentElement.lang = pageLang;
  }, [pageLang]);

  return <Component {...pageProps} />
}

export default CustomApp;
