import { Crown, Award, Star, Zap } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

export const FeaturedSitesPage = () => {
  const { language } = useLanguage();

  const featuredSites = Array.from({ length: 8 }, (_, i) => ({
    id: i + 1,
    name: `Premium ${i + 1}`,
    logo: ['👑', '🏆', '⭐', '💎', '🎯', '🌟', '💫', '🔥'][i],
    rating: 9.0 + Math.random(),
    bonus: ['%300', '%250', '%200', '%350'][i % 4],
    features: [
      language === 'tr' ? 'Yüksek Bonus' : 'High Bonus',
      language === 'tr' ? 'Hızlı Çekim' : 'Fast Withdrawal',
      language === 'tr' ? '7/24 Destek' : '24/7 Support'
    ]
  }));

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          {language === 'tr' ? 'Öne Çıkan Premium Siteler' : 'Featured Premium Sites'}
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          {language === 'tr' ? 'En iyi bonus ve hizmet sunan siteler' : 'Sites with the best bonuses and services'}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {featuredSites.map((site) => (
          <div
            key={site.id}
            className="bg-gradient-to-br from-purple-600 to-green-600 rounded-xl p-6 text-white shadow-xl hover:shadow-2xl transition-all hover:scale-105"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-4">
                <div className="text-6xl">{site.logo}</div>
                <div>
                  <h3 className="text-2xl font-bold">{site.name}</h3>
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold">{site.rating.toFixed(1)}/10</span>
                  </div>
                </div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                <div className="text-sm opacity-80">{language === 'tr' ? 'Bonus' : 'Bonus'}</div>
                <div className="text-2xl font-bold">{site.bonus}</div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 mb-4">
              {site.features.map((feature, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-lg p-2 text-center text-sm">
                  {feature}
                </div>
              ))}
            </div>

            <button className="w-full bg-white text-purple-700 font-bold py-3 rounded-lg hover:bg-gray-100 transition-colors">
              {language === 'tr' ? 'Siteye Git' : 'Visit Site'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
