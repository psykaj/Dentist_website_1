import { siteConfig } from "@/data/siteConfig";

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["Dentist", "LocalBusiness", "MedicalBusiness"],
    "name": siteConfig.name,
    "image": `${siteConfig.url}/images/clinic.jpg`,
    "@id": siteConfig.url,
    "url": siteConfig.url,
    "telephone": siteConfig.contact.phone,
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": siteConfig.contact.address.split(",")[0],
      "addressLocality": siteConfig.city,
      "addressRegion": "NY",
      "postalCode": "10001",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 40.7634351,
      "longitude": -73.9786439
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
        ],
        "opens": "08:00",
        "closes": "20:00"
      }
    ],
    "sameAs": [
      siteConfig.social.facebook,
      siteConfig.social.instagram,
      siteConfig.social.linkedin,
      siteConfig.social.whatsapp
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": siteConfig.stats.rating,
      "reviewCount": parseInt(siteConfig.stats.patients.replace(/\D/g, '') || "100")
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
