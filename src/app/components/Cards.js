import React from 'react';
import Card from './Card';

const Cards = () => {
  const cardData = [
    {
      title: "Instant Loans",
      description: "Make your wish come true with a hassle-free instant loan.",
      imageUrl: "/assets/cards/digital-banking-380-380.gif"
    },
    {
      title: "Insurance Plans",
      description: "Get bike, car and health insurance plans, all in one place.",
      imageUrl: "/assets/cards/insurance-plans-500-500.gif"
    },
    {
      title: "Digital Banking",
      description: "Bank anytime, anywhere. Its easy, instant, very much secure.",
      imageUrl: "/assets/cards/digital-banking-380-380.gif"
    },
    {
      title: "UPI Payments",
      description: "Go cashless! This UPI feature works everywhere in India.",
      imageUrl: "/assets/cards/upi-payments-500-500.gif"
    }
  ];

  const renderCards = () => {
    const cards = [];
    for (let i = 0; i < cardData.length; i++) {
      const { title, description, imageUrl } = cardData[i];
      cards.push(
        <Card
          key={i}
          title={title}
          description={description}
          imageUrl={imageUrl}
        />
      );
    }
    return cards;
  };

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {renderCards()}
        </div>
      </div>
    </section>
  );
};

export default Cards;
