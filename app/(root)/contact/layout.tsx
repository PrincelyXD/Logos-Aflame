

export const metadata = {
  title: "Contact Us | Logos Aflame Ministries",
  description:
    "We’d love to hear from you. Reach out to Logos Aflame Ministries for inquiries, prayer requests, or pastoral support.",
  openGraph: {
    title: "Contact Logos Aflame Ministries",
    description: "Connect with our church team today — we’re here for you.",
    url: "https://logos-aflame.vercel.app/contact",
    images: [
      {
        url: "https://logos-aflame.vercel.app/church-service.png", // Replace with your actual OG image
        width: 1200,
        height: 630,
        alt: "Contact Logos Aflame Ministries",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Logos Aflame Ministries",
    description: "Reach out to us for questions, support, or prayer.",
    images: ["https://www.logosaflame.org/og-contact.jpg"],
  },
};

const layout = ({children}:{children:React.ReactNode}) => {
  return(
    <>
    
    {children}
    </>
  );
};

export default layout;
