import CategoryCard from './CategoryCard';
import PhoneFrame from '@/app/components/PhoneFrame';

export default function CategoryShowcase() {
  const categories = [
    {
      title: "Gentle Exploration",
      description: "Discover new ways to connect through tender touch and romantic moments",
      gradient: "linear-gradient(135deg, var(--pastel-pink) 0%, #FFE5EC 100%)",
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
      ),
      features: [
        "Sensual massage techniques",
        "Soft touches and caresses",
        "Romantic settings and ambiance"
      ],
      visual: (
        <PhoneFrame>
          <div className="flex-1 flex flex-col justify-center p-6">
            <h4 className="text-lg font-medium mb-4 text-center" style={{ color: 'var(--primary)' }}>
              Level 1 - Question 3
            </h4>
            <p className="font-crimson text-xl italic text-center mb-6 leading-relaxed" style={{ color: 'var(--text-dark)' }}>
              After our time together, I'm curious about sensual massage with oils
            </p>
            <div className="space-y-3">
              {['Curious', 'Yes Please', 'No Interest', 'Not for Me'].map((option) => (
                <button
                  key={option}
                  className="w-full py-3 px-6 rounded-xl border-2 border-gray-300 bg-white text-gray-700 font-medium transition-all duration-200 hover:border-primary hover:text-primary"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        </PhoneFrame>
      )
    },
    {
      title: "Sensual Touch",
      description: "Explore the art of physical connection through temperature, texture, and sensation",
      gradient: "linear-gradient(135deg, var(--pastel-peach) 0%, #FFE0DC 100%)",
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
          <polyline points="10 9 9 9 8 9"></polyline>
        </svg>
      ),
      features: [
        "Body exploration techniques",
        "Temperature play ideas",
        "Different textures and sensations"
      ],
      isReversed: true,
      visual: (
        <div className="w-full max-w-sm mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="flex justify-center mb-6">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-pink-100 to-peach-100 flex items-center justify-center">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--primary)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                </svg>
              </div>
            </div>
            <h4 className="font-crimson text-2xl italic text-center mb-4" style={{ color: 'var(--text-dark)' }}>
              Explore Together
            </h4>
            <p className="text-center text-gray-600">
              Discover new sensations and experiences that bring you closer
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Adventure & Play",
      description: "Add excitement and playfulness to your intimate moments",
      gradient: "linear-gradient(135deg, var(--pastel-lavender) 0%, #E8E3F5 100%)",
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
        </svg>
      ),
      features: [
        "Role play scenarios",
        "New locations and settings",
        "Playful games and activities"
      ],
      visual: (
        <PhoneFrame>
          <div className="flex-1 flex flex-col justify-center p-6">
            <h4 className="text-lg font-medium mb-4 text-center" style={{ color: 'var(--primary)' }}>
              Level 2 - Question 5
            </h4>
            <p className="font-crimson text-xl italic text-center mb-6 leading-relaxed" style={{ color: 'var(--text-dark)' }}>
              I'd be interested in trying role play scenarios together
            </p>
            <div className="space-y-3">
              {['Curious', 'Yes Please', 'No Interest', 'Not for Me'].map((option, index) => (
                <button
                  key={option}
                  className={`w-full py-3 px-6 rounded-xl border-2 font-medium transition-all duration-200 ${
                    index === 1 
                      ? 'border-primary bg-primary text-white' 
                      : 'border-gray-300 bg-white text-gray-700 hover:border-primary hover:text-primary'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        </PhoneFrame>
      )
    },
    {
      title: "Deep Connection",
      description: "Strengthen your emotional bond through vulnerability and presence",
      gradient: "linear-gradient(135deg, var(--pastel-mint) 0%, #E0F5F1 100%)",
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
        </svg>
      ),
      features: [
        "Eye contact exercises",
        "Emotional intimacy practices",
        "Vulnerable sharing moments"
      ],
      isReversed: true,
      visual: (
        <div className="w-full max-w-sm mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="flex justify-center mb-6">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-mint-100 to-teal-100 flex items-center justify-center">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--primary)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
              </div>
            </div>
            <h4 className="font-crimson text-2xl italic text-center mb-4" style={{ color: 'var(--text-dark)' }}>
              Connect Deeply
            </h4>
            <p className="text-center text-gray-600">
              Build trust and intimacy through meaningful connection
            </p>
          </div>
        </div>
      )
    }
  ];

  return (
    <>
      {categories.map((category, index) => (
        <CategoryCard
          key={index}
          {...category}
        />
      ))}
    </>
  );
}