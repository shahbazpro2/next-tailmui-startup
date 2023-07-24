import Head from 'next/head';
import { company } from '../company/Details';

export const JsonLdFaq = () => {
  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'How do I book a taxi?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: `To make a booking, you can use our mobile app, our website booker, or call our 24/7 Call Centre at ${company.tel_number}.`,
                },
              },
              {
                '@type': 'Question',
                name: 'Do you allow pre-bookings of cars?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes please feel free to book a journey in advance.In order to confirm your booking, you will have the option to specify the pick-up time and date.',
                },
              },
              {
                '@type': 'Question',
                name: 'Do you allow booking cancellations?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Canceling a booking with us is easy. Just call our 24/7 customer service line for hassle-free cancellation. Your card will be refunded promptly but depending on your bank, this process may take up to five working days to complete. Just sit back and relax knowing your trip has been cancelled without any worry or stress.',
                },
              },
            ],
          }),
        }}
      />
    </Head>
  );
};
