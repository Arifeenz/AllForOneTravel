
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import TourCard from '@/components/TourCard';

const Index = () => {
  const tourPackages = [
    {
      title: "Island Hopping Adventure",
      description: "Explore the stunning Phi Phi Islands and James Bond Island with crystal clear waters and dramatic limestone cliffs.",
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=800&q=80",
      price: "$129",
      duration: "Full Day"
    },
    {
      title: "Cultural Temple Tour",
      description: "Discover the rich heritage of Phuket with visits to Wat Chalong, Big Buddha, and local traditional markets.",
      image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop&w=800&q=80",
      price: "$79",
      duration: "Half Day"
    },
    {
      title: "Sunset Beach Experience",
      description: "Relax on pristine beaches, enjoy water sports, and witness breathtaking sunsets at Patong and Kata beaches.",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=800&q=80",
      price: "$99",
      duration: "Full Day"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-blue-50">
      <Navigation />
      
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
            Explore Phuket Like 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600"> Never Before</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed">
            Curated trips, local experiences, and expert recommendations — all in one place.
          </p>
        </div>

        {/* Tour Packages Grid */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
            Featured Tour Packages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tourPackages.map((tour, index) => (
              <TourCard
                key={index}
                title={tour.title}
                description={tour.description}
                image={tour.image}
                price={tour.price}
                duration={tour.duration}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto border border-cyan-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Ready to Start Your Adventure?
            </h3>
            <p className="text-gray-600 mb-6">
              Have questions about Phuket? Our local experts are here to help you plan the perfect trip.
            </p>
            <a 
              href="/question"
              className="inline-block bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-8 py-4 rounded-full font-semibold hover:from-cyan-500 hover:to-blue-600 transition-all duration-200 transform hover:scale-105"
            >
              Ask Our Experts
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Index;
