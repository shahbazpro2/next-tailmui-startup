import Head from 'next/head';
import { useEffect, useState } from 'react';
import Papa from 'papaparse';
import { reviewsTitle } from '../company/Reviews';

export const JsonLdReview = () => {
  const [reviewsData, setReviewsData] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch('/reviews.csv');
        const csvData = await response.text();
        const reviews = await parseCSV(csvData);
        setReviewsData(reviews);
      } catch (error) {
        console.error('Error fetching reviews:', error); // Debugging log
      }
    };

    fetchReviews();
  }, []);

  const parseCSV = (csvData) => {
    return new Promise((resolve, reject) => {
      Papa.parse(csvData, {
        header: true,
        complete: (result) => {
          resolve(result.data);
        },
        error: (error) => {
          console.error('Error parsing CSV:', error); // Debugging log
          reject(error);
        },
      });
    });
  };

  // Assuming that reviewsTitle[0] contains the aggregate rating data from the CSV
  const {
    name,
    type,
    reviewRating,
    ratingValue,
    bestRating,
    worstRating,
    ratingCount,
  } = reviewsTitle[0];

  const reviewObjects = reviewsData.map((review) => {
    return {
      '@type': 'Review',
      reviewBody: review['Review Body'],
      author: {
        '@type': review.type,
        name: review.name,
      },
      datePublished: formatDate(review.datePublished),
    };
  });

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Product',
            name: name,
            aggregateRating: {
              '@type': type,
              ratingValue: ratingValue,
              reviewRating: reviewRating,
              bestRating: bestRating,
              worstRating: worstRating,
              ratingCount: ratingCount,
            },
            reviews: reviewObjects,
          }),
        }}
      />
    </Head>
  );
};

const formatDate = (dateString) => {
  const [day, month, year] = dateString.split('/');
  return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
};
