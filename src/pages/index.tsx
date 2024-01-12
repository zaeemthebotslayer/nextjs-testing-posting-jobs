import Head from "next/head";

export default function Home() {
  const structuredData = {
    "@context" : "https://schema.org/",
    "@type" : "JobPosting",
    "title" : "Senior Software Engineer",
    "description" : "<p>tkturners is seeking a Full Stack Developer with expertise in both React JS and Angular. The successful candidate will be responsible for designing, developing, and implementing custom solutions using React and Angular development tools. This role involves active participation in detailed requirements, design, development, documentation, and integration efforts. The developer will collaborate with software development staff, business analysts, and project managers throughout multiple project life cycles. Strong communication skills, the ability to work independently, and a commitment to producing high-quality work are essential for success in this role..</p>",
    "identifier": {
      "@type": "PropertyValue",
      "name": "tkturners",
      "value": "tkturners"
    },
    "datePosted" : "2024-01-09",
    "validThrough" : "2024-03-18T00:00",
    "applicantLocationRequirements": {
      "@type": "Country",
      "name": "PK"
    },
    "employmentType" : "FULL_TIME",
    "hiringOrganization" : {
      "@type" : "Organization",
      "name" : "tkturners",
      "sameAs" : "https://tkturners.com",
      "logo" : "https://tkturners.com/wp-content/uploads/2022/09/333.png"
    },
    "jobLocation": {
    "@type": "Place",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Street 10 Sector G",
      "addressLocality": "DHA Phase 6",
      "addressRegion": "LHR",
      "postalCode": "54100",
      "addressCountry": "PK"
    }
    },
    "baseSalary": {
      "@type": "MonetaryAmount",
      "currency": "USD",
      "value": {
        "@type": "QuantitativeValue",
        "value": 80.00,
        "unitText": "HOUR"
      }
    }
  }

  return (
    <>
      <Head>
        <title>Senior Software Engineer</title>
        <meta name="description" content="Job Posting for Senior Software Engineer" />
        <meta name="google-site-verification" content="l57Vet0G4Yr3m982ll_0KDqQ-F1CRtOhAwV9JwR5k3E" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      <main>
        <section>
          <h1>Senior Software Engineer</h1>
          <p>
            tkturners is seeking a Full Stack Developer with expertise in both React JS and Angular. The successful candidate will be responsible for designing, developing, and implementing custom solutions using React and Angular development tools. This role involves active participation in detailed requirements, design, development, documentation, and integration efforts. The developer will collaborate with software development staff, business analysts, and project managers throughout multiple project life cycles. Strong communication skills, the ability to work independently, and a commitment to producing high-quality work are essential for success in this role.
          </p>
          <div>
            <a href="https://www.linkedin.com/jobs/view/1234567890" target="_blank" rel="noopener noreferrer">
              <button>Apply Now</button>
            </a>
          </div>
          <section>
            <h2>Skills & Qualifications</h2>
            <ul>
              <li>Experience with React JS and Angular</li>
              <li>Full Stack development expertise</li>
              <li>Strong software development skills with a focus on Object-Oriented Programming (OOP)</li>
              <li>Experience leading and managing a team of software engineers</li>
              <li>Expertise in Programming and Web Applications</li>
              <li>Bachelor's or Master's degree in Computer Science or related field</li>
              <li>Excellent written and verbal communication skills</li>
            </ul>
          </section>
          <section>
            <h2>Responsibilities</h2>
            <ul>
              <li>Design and develop custom solutions using React and Angular</li>
              <li>Collaborate with software development staff, business analysts, and project managers</li>
            </ul>
          </section>
          <section>
            <h2>Requirements</h2>
            <ul>
              <li>Strong communication skills</li>
              <li>Ability to work independently</li>
              <li>Commitment to producing high-quality work</li>
              <li>3 to 5 years' post-graduation experience in developing web-based applications from scratch.</li>
              <li>Sound concepts of OOP, Databases, Design/Architectural and Repository Patterns, etc.</li>
              <li>Excellent English communication skills.</li>
              <li>Must be capable enough to work independently/without supervision with clients based in the US and European regions.</li>
              <li>Must be fluent in Requirement Gathering, Analysis, and Designing.</li>
            </ul>
          </section>
        </section>
      </main>
    </>
  );
}
