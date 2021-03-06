import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Footer } from 'components/theme';
import { GatsbySeo } from 'gatsby-plugin-next-seo';
import { name } from 'data/config';
import { Global } from './styles';

import './fonts.css';

export const Layout = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  const [url, setUrl] = useState('');
  useEffect(() => {
    setUrl(window.location.href);
  }, []);
  return (
    <>
      <GatsbySeo
        title={`${name} | Portfolio`}
        description="Chitranshu Gour's personal portfolio website"
        canonical={url}
        openGraph={{
          type: 'website',
          title: `${name} | Portfolio`,
          site_name: `${name} | Portfolio`,
          locale: 'en_IN',
          url,
          description:
            "My personal portfolio website",
          images: [
            {
              url: 'https://github.com/chitranshu11/chitranshu11/blob/main/favicon-512.png',
              width: 829,
              height: 829,
              alt: 'Chitranshu Gour',
            },
          ],
        }}
        twitter={{
          handle: '@gour_chitranshu',
          site: '@gour_chitranshu',
          cardType: 'summary_large_image',
        }}
      />
      <Global theme={theme} />
      {children}
      <Footer />
    </>
  );
};
