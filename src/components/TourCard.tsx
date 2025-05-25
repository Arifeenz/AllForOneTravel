interface TourCardProps {
  title: string;
  description: string;
  image: string;
  price: string;
  duration: string;
}


const TourCard = ({ title, description, image, price, duration }: TourCardProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
      <div className="aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
        <div className="flex justify-between items-center">
          <div>
            <span className="text-2xl font-bold text-cyan-600">{price}</span>
            <span className="text-gray-500 text-sm ml-1"> {duration}</span>
          </div>
          <button className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-6 py-2 rounded-full font-semibold hover:from-cyan-500 hover:to-blue-600 transition-all duration-200">
            สั่งจอง
          </button>
        </div>
      </div>
    </div>
  );
};


export default TourCard;