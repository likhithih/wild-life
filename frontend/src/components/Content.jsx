import React from "react";

const Content = () => {
  const cards = [
    {
      title: "Safari Adventure",
      description:
        "Embark on thrilling jeep safaris through lush forests and wildlife sanctuaries guided by local experts.",
      icon: "🦁",
      hoverColor: "hover:bg-green-100",
    },
    {
      title: "Luxury Nature Stays",
      description:
        "Relax in eco-lodges, treetop resorts, and riverside tents surrounded by serene wilderness.",
      icon: "🏕️",
      hoverColor: "hover:bg-amber-100",
    },
    {
      title: "Guided Nature Trails",
      description:
        "Explore hidden jungle paths, waterfalls, and scenic trails with our experienced naturalists.",
      icon: "🌿",
      hoverColor: "hover:bg-teal-100",
    },
    {
      title: "Wildlife Photography Tours",
      description:
        "Capture majestic wildlife moments in their natural habitat with professional photography tours.",
      icon: "📸",
      hoverColor: "hover:bg-orange-100",
    },
    {
      title: "Adventure Packages",
      description:
        "From night safaris to river kayaking — choose from curated adventure experiences.",
      icon: "🛶",
      hoverColor: "hover:bg-yellow-100",
    },
    {
      title: "Cultural & Local Experiences",
      description:
        "Immerse yourself in tribal art, local cuisine, and cultural programs near our stay locations.",
      icon: "🎭",
      hoverColor: "hover:bg-rose-100",
    },
    {
      title: "Eco Conservation Programs",
      description:
        "Participate in our conservation efforts and contribute to protecting endangered species.",
      icon: "🌍",
      hoverColor: "hover:bg-blue-100",
    },
    {
      title: "Wellness & Retreats",
      description:
        "Rejuvenate your mind and body with yoga, meditation, and spa sessions in nature’s embrace.",
      icon: "🧘‍♀️",
      hoverColor: "hover:bg-purple-100",
    },
  ];

  return (
    <div className="relative px-8 py-16 text-center bg-gradient-to-b from-green-50 via-emerald-50 to-white overflow-hidden">
      {/* Floating background bubbles */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-72 h-72 bg-green-200 rounded-full opacity-30 blur-3xl top-10 left-10 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-amber-200 rounded-full opacity-20 blur-3xl bottom-0 right-10 animate-ping"></div>
      </div>

      <div className="max-w-screen-xl mx-auto">
        <div className="max-w-2xl mx-auto mb-12">
          <span className="bg-green-200 text-[13px] text-green-900 font-medium rounded-full px-4 py-2 inline-block mb-4">
            Explore. Stay. Experience.
          </span>
          <h2 className="text-green-900 text-3xl font-bold mb-6 !leading-tight">
            Discover the Best of Wildlife & Nature Stays
          </h2>
          <p className="text-green-700 text-base leading-relaxed">
            Our services bring you closer to nature — from thrilling safaris and
            cozy forest stays to photography tours and conservation programs.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 text-left">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl p-6 border border-gray-200 shadow-md transform transition-all duration-500 hover:scale-105 hover:shadow-2xl ${card.hoverColor}`}
            >
              <div className="text-4xl mb-4">{card.icon}</div>
              <h3 className="text-green-900 text-lg font-semibold mb-2">
                {card.title}
              </h3>
              <p className="text-green-700 text-sm leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Content;
