import { company } from '@components/config/company/Details';
import { JsonLdReview } from '@components/config/strucureData/ReviewsJsonLd';
import Home from '@pages/Home';
import { DefaultSeo, NextSeo, OrganizationJsonLd } from 'next-seo';
import { NEXT_SEO_DEFAULT } from 'next-seo.config';

export default function Index() {
  return (
    <div>
      <NextSeo canonical={`${company.url}`} />
      <DefaultSeo {...NEXT_SEO_DEFAULT} />
      <JsonLdReview />
      <OrganizationJsonLd />
      <Home />
    </div>
  );
}
