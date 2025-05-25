import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import TourCard from '@/components/TourCard';


const Index = () => {
  const [formData, setFormData] = useState({ name: '', email: '', question: '' });
  const [responseMessage, setResponseMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setResponseMessage('');


    try {
      const res = await fetch('https://hook.eu2.make.com/cgxambj94rm5uxohjv8yoy6n44wioux2', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });


      const data = await res.json();
      setResponseMessage(data.message || 'ส่งข้อมูลสำเร็จแล้ว ขอบคุณค่ะ!');
    } catch (error) {
      setResponseMessage('เกิดข้อผิดพลาดในการส่งข้อมูล');
    } finally {
      setIsLoading(false);
    }
  };


  const tourPackages = [
    {
      "title": "Oakwood Hotel Journeyhub Phuket",
      "description": "โรงแรมโมเดิร์นใจกลางป่าตอง พร้อมสระว่ายน้ำดาดฟ้า วิวเมืองภูเก็ต เดินไปชายหาดได้ใน 10 นาที",
      "image": "https://images.trvl-media.com/lodging/20000000/19780000/19776300/19776209/6855d0d0.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill",
      "price": "1,200 บาท/คืน",
      "duration": "คงเหลือ: 8 ห้อง",
      "type": "ที่พัก",
      "batton_type": "จอง",
    },
    {
      "title": "Lub d Phuket Patong",
      "description": "โฮสเทลสุดชิคที่ผสมผสานความสะดวกสบายกับไลฟ์สไตล์สำหรับนักเดินทางรุ่นใหม่ มี co-working space และกิจกรรมสนุกทุกคืน",
      "image": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/378332075.jpg?k=830cab5c81fb783cc486179d108f7b03ea56738880c05232af765dd17ef4df98&o=&hp=1",
      "price": "950 บาท/คืน",
      "duration": "คงเหลือ: 5 ห้อง",
      "type": "ที่พัก",
      "batton_type": "จอง",




    },
    {
      "title": "Fishermen’s Harbour Urban Resort",
      "description": "รีสอร์ทสไตล์เมือง พร้อมสิ่งอำนวยความสะดวกครบครัน เดินทางสะดวก ใกล้แหล่งท่องเที่ยวกลางคืน",
      "image": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/65/9a/10/deluxe-room.jpg?w=700&h=-1&s=1",
      "price": "1,350 บาท/คืน",
      "duration": "คงเหลือ: 6 ห้อง",
      "type": "ที่พัก",
      "batton_type": "จอง",




    }
    ,
    {
      "title": "Anantara Mai Khao Phuket Villas",
      "description": " วิลล่าหรูพร้อมสระว่ายน้ำส่วนตัว บรรยากาศเงียบสงบริมทะเลไม้ขาว เหมาะกับการพักผ่อนสุดพิเศษ",
      "image": "https://assets.anantara.com/image/upload/q_auto,f_auto,c_limit,w_1045/media/minor/anantara/images/anantara-mai-khao-phuket-villas/accommodation/room-type/pool-pavilion/poolpavilion_main_944x510.jpg",
      "price": "9,900 บาท",
      "duration": "คงเหลือ: 7 ห้อง",
      "type": "ที่พัก",
      "batton_type": "จอง",




    }
    ,
    {
      "title": " The Pavilions Phuket",
      "description": "รีสอร์ทหรูวิวภูเขาและทะเล เหมาะสำหรับคู่รักที่ต้องการความโรแมนติกและเป็นส่วนตัว",
      "image": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/240886424.jpg?k=6d6be068c16de0bac44facca327524079d621cea1e4394826f50e7cb0ee4acbd&o=&hp=1",
      "price": "8,500 บาท",
      "duration": "คงเหลือ: 8 ห้อง",
      "type": "ที่พัก",
      "batton_type": "จอง",




    }
    ,
    {
      "title": "Scuba Diving – เกาะราชา",
      "description": "ดำน้ำลึกสุดตื่นเต้น พร้อมครูผู้ฝึกสอนมืออาชีพ สำรวจโลกใต้ทะเลอันดามัน น้ำใส ปะการังสวย",
      "image": "https://bluemarine-divers.com/thai/wp-content/uploads/2023/09/Racha-Noi-1.jpg",
      "price": "2,500 บาท",
      "duration": "จำนวนที่นั่งว่าง: 9 ที่นั่ง",
      "type": "กิจกรรม",
      "batton_type": "จอง",




    },
    {
      "title": "Scuba Diving – เกาะราชา",
      "description": "ดำน้ำลึกสุดตื่นเต้น พร้อมครูผู้ฝึกสอนมืออาชีพ สำรวจโลกใต้ทะเลอันดามัน น้ำใส ปะการังสวย",
      "image": "https://bluemarine-divers.com/thai/wp-content/uploads/2023/09/Racha-Noi-1.jpg",
      "price": "2,500 บาท",
      "duration": "จำนวนที่นั่งว่าง: 9 ที่นั่ง",
      "type": "กิจกรรม",
      "batton_type": "จอง",




    },
    {
      "title": "Phuket FantaSea",
      "description": "โชว์วัฒนธรรมไทยระดับโลก พร้อมอาหารค่ำแบบบุฟเฟต์สุดหรู เหมาะกับทุกวัย",
      "image": "https://www.phuket-fantasea.com/mobile/en/images/pf1.jpg",
      "price": "1,900 บาท",
      "duration": "จำนวนที่นั่งว่าง: 9 ที่นั่ง",
      "type": "กิจกรรม",
      "batton_type": "จอง",




    }




  ];


  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-blue-50">
      <Navigation />


      {/* แบบฟอร์มด้านล่าง Navbar */}
      <div className="container mx-auto px-4 mt-8">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-2xl mx-auto border border-blue-100">
          <h2 className="text-2xl font-bold mb-4 text-gray-700">สอบถามข้อมูลทริปเพิ่มเติม</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="ชื่อของคุณ"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="อีเมล"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded"
              required
            />
            <textarea
              name="question"
              placeholder="คำถามหรือข้อความของคุณ"
              value={formData.question}
              onChange={handleChange}
              //rows="4"
              className="w-full p-3 border border-gray-300 rounded"
              required
            ></textarea>


            <button
              type="submit"
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded transition"
              disabled={isLoading}
            >
              {isLoading ? 'กำลังส่ง...' : 'ส่งคำถาม'}
            </button>
          </form>


          {/* ตำแหน่งแสดงผลลัพธ์ */}
          {responseMessage && (
            <div className="mt-4 text-green-600 font-semibold">
              {responseMessage}
            </div>
          )}
        </div>
      </div>


      {/* ส่วน Hero Section */}
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