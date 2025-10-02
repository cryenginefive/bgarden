import { Radio, Users, TrendingUp } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

export const LiveSitesPage = () => {
  const { language } = useLanguage();

  const liveSites = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    name: `Live Site ${i + 1}`,
    logo: ['🎰', '🎲', '🃏', '🎯'][i % 4],
    viewers: Math.floor(Math.random() * 5000) + 1000,
    status: 'live'
  }));

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-red-600 to-pink-600 rounded-xl p-6 text-white mb-6">
        <div className="flex items-center gap-3 mb-2">
          <Radio className="w-8 h-8 animate-pulse" />
          <h2 className="text-3xl font-bold">
            {language === 'tr' ? 'Canlı Siteler' : 'Live Sites'}
          </h2>
        </div>
        <p className="text-white/90">
          {language === 'tr' ? 'Şu anda aktif olan siteler' : 'Currently active sites'}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {liveSites.map((site) => (
          <div
            key={site.id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-all border border-gray-200 dark:border-gray-700 p-4 cursor-pointer hover:scale-105"
          >
            <div className="relative mb-3">
              <div className="text-6xl text-center mb-2">{site.logo}</div>
              <div className="absolute top-0 right-0 bg-red-600 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1 animate-pulse">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                LIVE
              </div>
            </div>

            <h3 className="font-bold text-gray-900 dark:text-white mb-2 text-center">{site.name}</h3>

            <div className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-400 mb-3">
              <Users className="w-4 h-4" />
              <span className="text-sm">{site.viewers.toLocaleString()} {language === 'tr' ? 'izleyici' : 'viewers'}</span>
            </div>

            <button className="w-full bg-gradient-to-r from-red-600 to-pink-600 text-white font-medium py-2 rounded-lg hover:from-red-700 hover:to-pink-700 transition-all">
              {language === 'tr' ? 'İzle' : 'Watch'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
