import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import TourCard from "@/components/TourCard";

const Index = () => {
  const [formData, setFormData] = useState({
    destination: "",
    startDate: "",
    endDate: "",
    styles: [] as string[],
  });

  const [responseMessage, setResponseMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setResponseMessage("");

    try {
      const res = await fetch(
        "https://hook.eu2.make.com/cgxambj94rm5uxohjv8yoy6n44wioux2",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...formData,
            styles: (formData.styles || []).join(", "),
          }),
        }
      );

      let responseText = "";
      const contentType = res.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        const data = await res.json();
        responseText = JSON.stringify(data, null, 2);
      } else {
        responseText = await res.text();
      }

      setResponseMessage(responseText);
    } catch (error) {
      console.error("❌ ส่งข้อมูลล้มเหลว:", error);
      setResponseMessage("เกิดข้อผิดพลาดในการส่งข้อมูล");
    } finally {
      setIsLoading(false);
    }
  };

  const tourPackages = [
    {
      title: "Oakwood Hotel Journeyhub Phuket",
      description:
        "โรงแรมโมเดิร์นใจกลางป่าตอง พร้อมสระว่ายน้ำดาดฟ้า วิวเมืองภูเก็ต เดินไปชายหาดได้ใน 10 นาที",
      image:
        "https://images.trvl-media.com/lodging/20000000/19780000/19776300/19776209/6855d0d0.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill",
      price: "1,200 บาท/คืน",
      duration: "คงเหลือ: 8 ห้อง",
      type: "ที่พัก",
      batton_type: "จอง",
    },
    {
      title: "Lub d Phuket Patong",
      description:
        "โฮสเทลสุดชิคที่ผสมผสานความสะดวกสบายกับไลฟ์สไตล์สำหรับนักเดินทางรุ่นใหม่ มี co-working space และกิจกรรมสนุกทุกคืน",
      image:
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/378332075.jpg?k=830cab5c81fb783cc486179d108f7b03ea56738880c05232af765dd17ef4df98&o=&hp=1",
      price: "950 บาท/คืน",
      duration: "คงเหลือ: 5 ห้อง",
      type: "ที่พัก",
      batton_type: "จอง",
    },
    {
      title: "Fishermen’s Harbour Urban Resort",
      description:
        "รีสอร์ทสไตล์เมือง พร้อมสิ่งอำนวยความสะดวกครบครัน เดินทางสะดวก ใกล้แหล่งท่องเที่ยวกลางคืน",
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/65/9a/10/deluxe-room.jpg?w=700&h=-1&s=1",
      price: "1,350 บาท/คืน",
      duration: "คงเหลือ: 6 ห้อง",
      type: "ที่พัก",
      batton_type: "จอง",
    },
    {
      title: "Anantara Mai Khao Phuket Villas",
      description:
        " วิลล่าหรูพร้อมสระว่ายน้ำส่วนตัว บรรยากาศเงียบสงบริมทะเลไม้ขาว เหมาะกับการพักผ่อนสุดพิเศษ",
      image:
        "https://assets.anantara.com/image/upload/q_auto,f_auto,c_limit,w_1045/media/minor/anantara/images/anantara-mai-khao-phuket-villas/accommodation/room-type/pool-pavilion/poolpavilion_main_944x510.jpg",
      price: "9,900 บาท",
      duration: "คงเหลือ: 7 ห้อง",
      type: "ที่พัก",
      batton_type: "จอง",
    },
    {
      title: " The Pavilions Phuket",
      description:
        "รีสอร์ทหรูวิวภูเขาและทะเล เหมาะสำหรับคู่รักที่ต้องการความโรแมนติกและเป็นส่วนตัว",
      image:
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/240886424.jpg?k=6d6be068c16de0bac44facca327524079d621cea1e4394826f50e7cb0ee4acbd&o=&hp=1",
      price: "8,500 บาท",
      duration: "คงเหลือ: 8 ห้อง",
      type: "ที่พัก",
      batton_type: "จอง",
    },
    {
      title: "Scuba Diving – เกาะราชา",
      description:
        "ดำน้ำลึกสุดตื่นเต้น พร้อมครูผู้ฝึกสอนมืออาชีพ สำรวจโลกใต้ทะเลอันดามัน น้ำใส ปะการังสวย",
      image:
        "https://bluemarine-divers.com/thai/wp-content/uploads/2023/09/Racha-Noi-1.jpg",
      price: "2,500 บาท",
      duration: "จำนวนที่นั่งว่าง: 9 ที่นั่ง",
      type: "กิจกรรม",
      batton_type: "จอง",
    },
    {
      title: "Scuba Diving – เกาะราชา",
      description:
        "ดำน้ำลึกสุดตื่นเต้น พร้อมครูผู้ฝึกสอนมืออาชีพ สำรวจโลกใต้ทะเลอันดามัน น้ำใส ปะการังสวย",
      image:
        "https://bluemarine-divers.com/thai/wp-content/uploads/2023/09/Racha-Noi-1.jpg",
      price: "2,500 บาท",
      duration: "จำนวนที่นั่งว่าง: 9 ที่นั่ง",
      type: "กิจกรรม",
      batton_type: "จอง",
    },
    {
      title: "Phuket FantaSea",
      description:
        "โชว์วัฒนธรรมไทยระดับโลก พร้อมอาหารค่ำแบบบุฟเฟต์สุดหรู เหมาะกับทุกวัย",
      image: "https://www.phuket-fantasea.com/mobile/en/images/pf1.jpg",
      price: "1,900 บาท",
      duration: "จำนวนที่นั่งว่าง: 9 ที่นั่ง",
      type: "กิจกรรม",
      batton_type: "จอง",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-blue-50">
      <Navigation />

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
            เที่ยวไทย...ในแบบที่เป็นคุณกับ
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
              {" "}
              All For One Tour
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed">
            ทริปเฉพาะตัว ประสบการณ์ท้องถิ่น และคำแนะนำจากเรา — ครบจบในที่เดียว
          </p>
        </div>

        {/* Form Section */}
        <div className="container mx-auto px-4 mt-8">
          <div className="bg-white shadow-lg rounded-lg p-8 max-w-2xl mx-auto border border-blue-100">
            <h2 className="text-2xl font-bold mb-4 text-gray-700">
              วางแผนทริปท่องเที่ยวของคุณ
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="destination"
                placeholder="จุดหมายปลายทาง เช่น ภูเก็ต"
                value={formData.destination}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded"
                required
              />

              <div className="flex space-x-4">
                <input
                  type="date"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded"
                  required
                />
                <input
                  type="date"
                  name="endDate"
                  value={formData.endDate}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded"
                  required
                />
              </div>

              <div>
                <label className="block font-semibold mb-2 text-gray-700">
                  สไตล์การเที่ยว (เลือกได้หลายแบบ):
                </label>
                {["ธรรมชาติ", "ช้อปปิ้ง", "ถ่ายรูป", "สายกิน", "คาเฟ่"].map(
                  (style) => (
                    <label
                      key={style}
                      className="inline-flex items-center mr-4 mb-2"
                    >
                      <input
                        type="checkbox"
                        name="styles"
                        value={style}
                        checked={formData.styles.includes(style)}
                        onChange={(e) => {
                          const value = e.target.value;
                          const checked = e.target.checked;
                          setFormData((prev) => ({
                            ...prev,
                            styles: checked
                              ? [...prev.styles, value]
                              : prev.styles.filter((s) => s !== value),
                          }));
                        }}
                        className="mr-2"
                      />
                      {style}
                    </label>
                  )
                )}
              </div>

              <button
                type="submit"
                className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded transition"
                disabled={isLoading}
              >
                {isLoading ? "กำลังสร้างแผน..." : "สร้างทริป"}
              </button>
            </form>

            {responseMessage && (
              <div className="mt-4 p-4 bg-green-50 border border-green-200 text-green-700 rounded text-sm whitespace-pre-wrap">
                {responseMessage}
              </div>
            )}
          </div>
        </div>

        {/* Tour Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
            แนะนำจากเรา
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

        {/* CTA */}
        
      </div>
            {/* Testimonial Section */}
<div className="bg-gradient-to-br from-blue-50 via-cyan-50 to-white py-16 mt-20">
  <div className="max-w-5xl mx-auto px-4 text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">
      เสียงจากนักเดินทางที่เลือก All For One Tour
    </h2>
    <div className="flex flex-col md:flex-row items-center justify-center gap-8">
      {/* ภาพผู้เดินทาง */}
      <img
        src="https://s.isanook.com/tr/0/ud/285/1429273/tghd.jpg?ip/crop/w1200h700/q80/webp"
        alt="happy traveler"
        className="rounded-xl shadow-lg w-full max-w-sm object-cover h-64"
      />

      {/* คำพูด */}
      <div className="text-left max-w-lg">
        <p className="text-xl text-gray-700 font-medium mb-4">
          “ทริปภูเก็ตกับ <span className="font-bold text-cyan-600">All For One</span> คือที่สุดของปีนี้เลย!
          บริการดี ประสบการณ์ครบ ทั้งทะเล คาเฟ่ และที่พักหรู!”
        </p>
        <p className="text-sm text-gray-500">– คุณพิมพ์พร, นักเดินทางสายธรรมชาติ</p>
      </div>
    </div>
  </div>
</div>

      <Footer />
    </div>
  );
};

export default Index;
