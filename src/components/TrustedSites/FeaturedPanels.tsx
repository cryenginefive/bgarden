import { Star, TrendingUp, Award, Crown } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

export const FeaturedPanels = () => {
  const { language } = useLanguage();

  const panels = [
    {
      id: 1,
      icon: Crown,
      name: language === 'tr' ? 'Premium Site' : 'Premium Site',
      description: language === 'tr' ? 'En yüksek bonus oranları' : 'Highest bonus rates',
      rating: '9.8/10',
      bonus: language === 'tr' ? '%200 Hoşgeldin Bonusu' : '200% Welcome Bonus',
      color: 'from-purple-600 to-purple-800'
    },
    {
      id: 2,
      icon: Award,
      name: language === 'tr' ? 'Ödüllü Site' : 'Award-Winning Site',
      description: language === 'tr' ? 'En güvenilir platform' : 'Most trusted platform',
      rating: '9.6/10',
      bonus: language === 'tr' ? '%150 + 100 FS' : '150% + 100 FS',
      color: 'from-green-600 to-green-800'
    },
    {
      id: 3,
      icon: TrendingUp,
      name: language === 'tr' ? 'Yükselen Site' : 'Trending Site',
      description: language === 'tr' ? 'En popüler seçim' : 'Most popular choice',
      rating: '9.5/10',
      bonus: language === 'tr' ? '%100 Cashback' : '100% Cashback',
      color: 'from-purple-600 to-green-600'
    },
    {
      id: 4,
      icon: Star,
      name: language === 'tr' ? 'Önerilen Site' : 'Recommended Site',
      description: language === 'tr' ? 'Topluluk favorisi' : 'Community favorite',
      rating: '9.4/10',
      bonus: language === 'tr' ? '500 TL Deneme' : '500 TL Trial',
      color: 'from-green-600 to-purple-600'
    }
  ];

  return (
    <div className="mb-8">
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        {language === 'tr' ? 'Güvenilir Siteler' : 'Trusted Sites'}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {panels.map((panel) => {
          const Icon = panel.icon;
          return (
            <div
              key={panel.id}
              className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${panel.color} opacity-90`}></div>

              <div className="relative p-6 text-white">
                <div className="flex justify-between items-start mb-4">
                  <Icon className="w-10 h-10" />
                  <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold">
                    {panel.rating}
                  </div>
                </div>

                <h4 className="text-xl font-bold mb-2">{panel.name}</h4>
                <p className="text-white/90 text-sm mb-4">{panel.description}</p>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 mb-4">
                  <div className="text-xs opacity-80 mb-1">
                    {language === 'tr' ? 'Bonus' : 'Bonus'}
                  </div>
                  <div className="font-bold text-lg">{panel.bonus}</div>
                </div>

                <button className="w-full bg-white text-gray-900 font-semibold py-3 rounded-lg hover:bg-gray-100 transition-colors">
                  {language === 'tr' ? 'Siteye Git' : 'Visit Site'}
                </button>
              </div>

              <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-white/10 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
