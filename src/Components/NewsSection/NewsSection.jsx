import React from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

const newsData = [
  {
    id: 1,
    title: "Dr. Yunus Receives Global Recognition for Social Entrepreneurship",
    date: "02 Feb, 2025",
    description:
      "Dr. Muhammad Yunus has been honored for his exceptional contributions to social business and microfinance.",
    img: "https://www.tbsnews.net/sites/default/files/styles/amp_metadata_content_image_min_696px_wide/public/images/2024/03/21/dr_yunus.jpg",
  },
  {
    id: 2,
    title: "Speech on Sustainable Development Goals in New York",
    date: "01 Feb, 2025",
    description:
      "Dr. Yunus delivered a keynote speech emphasizing the importance of social business in achieving the SDGs.",
    img: "https://swarajya.gumlet.io/swarajya%2F2024-08-09%2Fcu7ivj59%2FNobel%20laurate%20Mohammed%20Yunus%20and%20interim%20Prime%20Minister%20of%20Bangladesh.jpg?w=1200&ar=40%3A21&auto=format%2Ccompress&ogImage=true&mode=crop&enlarge=true&overlay=false&overlay_position=bottom&overlay_width=100",
  },
  {
    id: 3,
    title: "Grameen Bank Expands to New Regions",
    date: "30 Jan, 2025",
    description:
      "Grameen Bank continues to expand, bringing financial solutions to underprivileged communities worldwide.",
    img: "https://www.muhammadyunus.org/fdrives/yc//2024/04/25/7WAl9ArX5vZhkFS3pYKVmpaepAVIdAIa.jpg",
  },
  {
    id: 4,
    title: "Empowering Women Entrepreneurs Through Microfinance",
    date: "28 Jan, 2025",
    description:
      "A new initiative led by Dr. Yunus aims to support women entrepreneurs in developing nations.",
    img: "https://www.eureporter.co/wp-content/uploads/2025/01/Muhammad-Yunus-scaled.jpg",
  },
];

const NewsSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <div className="bg-yellow-50/70 py-10 pt-14" id="news-section">
      <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">
        Latest Blogs
      </h2>
      <div className="p-5 md:w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
        {newsData.map((news) => (
          <div
            key={news.id}
            data-aos="fade-up"
            className="bg-white p-4 shadow-lg rounded-lg flex flex-col md:flex-row gap-4 items-center"
          >
            <img
              src={news.img}
              alt={news.title}
              className="w-72 h-64 object-cover rounded-md"
            />
            <div>
              <h3 className="font-semibold text-lg text-gray-900">
                {news.title}
              </h3>
              <p className="text-gray-500 text-sm">{news.date}</p>
              <p className="text-gray-700 mt-2">{news.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div data-aos="fade-up" className="flex justify-center mt-5">
        <p className="text-xl bg-yellow-400 hover:bg-yellow-600 duration-1500  py-3 px-5 text-gray-800 rounded-3xl">
          ViEW MORE
        </p>
      </div>
    </div>
  );
};

export default NewsSection;
