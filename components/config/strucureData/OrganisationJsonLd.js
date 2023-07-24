import Head from 'next/head';
import { company } from '../company/Details';

export const JsonLdOrg = () => {
  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'http://schema.org',
            '@type': 'Organization',
            name: `${company.name}`,
            url: `${company.website}`,
            logo: `${company.logo_url}`,
            contactPoint: {
              '@type': 'ContactPoint',
              telephone: `${company.tel_number}`,
              contactType: '24/7 Call or Book/Quote Online',
              email: `${company.compnay_email}`,
              areaServed: 'GB',
              availableLanguage: 'en',
            },
            sameAs: [`${company.Facebook}`, `${company.Twitter}`],
          }),
        }}
      />
    </Head>
  );
};
