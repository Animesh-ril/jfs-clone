// pages/index.js
import Head from 'next/head';
import Card from '../components/Card';

const Cards= () => {
  return (
    <div>
      <Head>
        <title>Card Component Example</title>
        <meta name="description" content="Card Component Example in Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto mt-8">
        {/* Example Card */}
        <Card 
          title="Card Title" 
          description="This is a description of the card." 
          imageUrl="/home/nehalsharma/jfs/public/assets/logo/jfslogofinal.svg" 
          buttonText="Learn More" 
        />
      </main>
    </div>
  );
};

export default Cards;
