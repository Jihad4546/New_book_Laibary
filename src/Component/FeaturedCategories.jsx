import React from "react";

// ⭐ Featured Categories Section
const FeaturedCategories = () => {
  const categories = [
    { name: "Fiction", icon: "📖" },
    { name: "Book", icon: "💻" },
    { name: "History", icon: "🏺" },
    { name: "Science", icon: "🔬" },
  ];

  return (
    <div className="my-10 px-4 ">
      <h2 className="text-3xl font-bold text-center mb-6">
        📚 Featured Categories
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="p-6 text-center rounded-2xl shadow-md border hover:shadow-xl transition cursor-pointer"
          >
            <div className="text-4xl">{cat.icon}</div>
            <h3 className="mt-2 text-lg font-semibold ">{cat.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

// 📩 Newsletter Section
const Newsletter = () => {
  return (
    <div className="my-10 bg-linear-to-r from-indigo-600 to-purple-600 text-white p-10 rounded-2xl text-center">
      <h2 className="text-3xl font-bold mb-2">
        📩 Stay Updated with New Books
      </h2>

      <p className="mb-6">
        Subscribe to get latest book releases & offers
      </p>

      <div className="flex flex-col md:flex-row justify-center gap-2">
        <input
          type="email"
          placeholder="Enter your email"
          className="p-3 rounded-lg text-black w-full md:w-1/3"
        />

        <button className="bg-white text-indigo-600 font-bold px-6 py-3 rounded-lg hover:bg-gray-200">
          Subscribe
        </button>
      </div>
    </div>
  );
};

// 🧾 Combined Preview Page
export default function BookDashboardPreview() {
  return (
    <div className="p-6">
      <h1 className="text-center text-4xl font-bold mb-10">
        
      </h1>

      {/* Categories */}
      <FeaturedCategories />

      {/* Newsletter */}
      <Newsletter />
    </div>
  );
}
