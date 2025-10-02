import { useEffect, useState } from 'react';
import { ExternalLink, Star } from 'lucide-react';

interface Website {
  id: number;
  name: string;
  logo: string;
  url: string;
  bonus: string;
}

export const CarouselSection = () => {
  const [position, setPosition] = useState(0);

  const websites: Website[] = [
    { id: 1, name: 'BetSite Premium', logo: '🎰', url: '#', bonus: '%200' },
    { id: 2, name: 'Lucky Casino', logo: '🎲', url: '#', bonus: '%150' },
    { id: 3, name: 'Royal Poker', logo: '🃏', url: '#', bonus: '%100' },
    { id: 4, name: 'Super Slots', logo: '🎯', url: '#', bonus: '%250' },
    { id: 5, name: 'Mega Win', logo: '🎪', url: '#', bonus: '%180' },
    { id: 6, name: 'Elite Gaming', logo: '🎭', url: '#', bonus: '%200' },
    { id: 7, name: 'Vegas Online', logo: '🎨', url: '#', bonus: '%120' },
    { id: 8, name: 'Diamond Bet', logo: '🎬', url: '#', bonus: '%300' },
  ];

  const duplicatedWebsites = [...websites, ...websites, ...websites];

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => {
        if (prev <= -66.66) {
          return 0;
        }
        return prev - 0.05;
      });
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-100 to-green-100 dark:from-purple-900/20 dark:to-green-900/20 py-6 rounded-xl mb-8">
      <div
        className="flex gap-4"
        style={{
          transform: `translateX(${position}%)`,
          transition: 'none',
        }}
      >
        {duplicatedWebsites.map((site, index) => (
          <div
            key={`${site.id}-${index}`}
            className="flex-shrink-0 w-72 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-purple-200 dark:border-purple-700 group cursor-pointer hover:scale-105"
          >
            <div className="p-5 flex items-center gap-4">
              <div className="text-5xl">{site.logo}</div>
              <div className="flex-1">
                <h4 className="font-bold text-gray-900 dark:text-white text-lg mb-1">
                  {site.name}
                </h4>
                <div className="flex items-center gap-2 mb-2">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">9.5/10</span>
                </div>
                <div className="inline-block bg-gradient-to-r from-purple-600 to-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {site.bonus} Bonus
                </div>
              </div>
              <ExternalLink className="w-5 h-5 text-purple-600 dark:text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
