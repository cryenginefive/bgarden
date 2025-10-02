import { useState } from 'react';
import { Search, ExternalLink, Star } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

interface Site {
  id: number;
  name: string;
  logo: string;
  rating: number;
  bonus: string;
  category: string;
}

export const AllSitesGrid = () => {
  const { language } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');

  const allSites: Site[] = Array.from({ length: 16 }, (_, i) => ({
    id: i + 1,
    name: `${language === 'tr' ? 'Site' : 'Site'} ${i + 1}`,
    logo: ['🎰', '🎲', '🃏', '🎯', '🎪', '🎭', '🎨', '🎬'][i % 8],
    rating: 8 + Math.random() * 2,
    bonus: ['%100', '%150', '%200', '%250'][i % 4],
    category: ['Casino', 'Sports', 'Live', 'Poker'][i % 4]
  }));

  const filteredSites = allSites.filter(site =>
    site.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    site.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
          {language === 'tr' ? 'Tüm Güvenilir Siteler' : 'All Trusted Sites'}
        </h3>
        <div className="relative w-96">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder={language === 'tr' ? 'Site ara...' : 'Search sites...'}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900 dark:text-white"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredSites.map((site) => (
          <div
            key={site.id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 p-4 group hover:scale-105 cursor-pointer"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="text-4xl">{site.logo}</div>
              <div className="flex items-center gap-1 bg-yellow-100 dark:bg-yellow-900/30 px-2 py-1 rounded-full">
                <Star className="w-3 h-3 text-yellow-600 fill-yellow-600" />
                <span className="text-xs font-semibold text-yellow-700 dark:text-yellow-400">
                  {site.rating.toFixed(1)}
                </span>
              </div>
            </div>

            <h4 className="font-bold text-gray-900 dark:text-white mb-1">{site.name}</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{site.category}</p>

            <div className="bg-gradient-to-r from-purple-100 to-green-100 dark:from-purple-900/30 dark:to-green-900/30 rounded-lg p-2 mb-3">
              <div className="text-xs text-gray-600 dark:text-gray-400 mb-1">
                {language === 'tr' ? 'Bonus' : 'Bonus'}
              </div>
              <div className="font-bold text-purple-700 dark:text-purple-300">{site.bonus}</div>
            </div>

            <button className="w-full bg-gradient-to-r from-purple-600 to-green-600 hover:from-purple-700 hover:to-green-700 text-white font-medium py-2 rounded-lg transition-all flex items-center justify-center gap-2 group-hover:gap-3">
              {language === 'tr' ? 'Ziyaret Et' : 'Visit'}
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>

      {filteredSites.length === 0 && (
        <div className="text-center py-12 text-gray-500 dark:text-gray-400">
          {language === 'tr' ? 'Site bulunamadı' : 'No sites found'}
        </div>
      )}
    </div>
  );
};
