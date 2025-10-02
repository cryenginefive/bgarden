import { Gift, Percent, Star, Zap } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

export const BonusesPage = () => {
  const { language } = useLanguage();

  const bonusCategories = [
    {
      title: language === 'tr' ? 'Hoşgeldin Bonusları' : 'Welcome Bonuses',
      icon: Gift,
      color: 'from-purple-600 to-purple-800',
      bonuses: Array.from({ length: 6 }, (_, i) => ({
        id: i + 1,
        site: `Site ${i + 1}`,
        amount: ['%200', '%250', '%300', '%150', '%180', '%220'][i],
        max: `${(i + 3) * 1000} TL`
      }))
    },
    {
      title: language === 'tr' ? 'Yatırım Bonusları' : 'Deposit Bonuses',
      icon: Percent,
      color: 'from-green-600 to-green-800',
      bonuses: Array.from({ length: 6 }, (_, i) => ({
        id: i + 1,
        site: `Site ${i + 7}`,
        amount: ['%100', '%125', '%150', '%75', '%90', '%110'][i],
        max: `${(i + 2) * 500} TL`
      }))
    },
    {
      title: language === 'tr' ? 'Deneme Bonusları' : 'Trial Bonuses',
      icon: Star,
      color: 'from-yellow-600 to-orange-600',
      bonuses: Array.from({ length: 6 }, (_, i) => ({
        id: i + 1,
        site: `Site ${i + 13}`,
        amount: `${(i + 3) * 100} TL`,
        max: language === 'tr' ? 'Ücretsiz' : 'Free'
      }))
    },
    {
      title: language === 'tr' ? 'Özel Bonuslar' : 'Special Bonuses',
      icon: Zap,
      color: 'from-pink-600 to-red-600',
      bonuses: Array.from({ length: 6 }, (_, i) => ({
        id: i + 1,
        site: `Site ${i + 19}`,
        amount: ['%500', '%400', '%350', '%300', '%450', '%380'][i],
        max: `${(i + 5) * 2000} TL`
      }))
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          {language === 'tr' ? 'Tüm Bonuslar' : 'All Bonuses'}
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          {language === 'tr' ? 'En yüksek bonus fırsatları' : 'Highest bonus opportunities'}
        </p>
      </div>

      {bonusCategories.map((category) => {
        const Icon = category.icon;
        return (
          <div key={category.title}>
            <div className={`flex items-center gap-3 mb-4 p-4 bg-gradient-to-r ${category.color} rounded-lg text-white`}>
              <Icon className="w-8 h-8" />
              <h3 className="text-2xl font-bold">{category.title}</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.bonuses.map((bonus) => (
                <div
                  key={bonus.id}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-all border border-gray-200 dark:border-gray-700 p-4 hover:scale-105"
                >
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">{bonus.site}</h4>
                  <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                    {bonus.amount}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    {language === 'tr' ? 'Maksimum:' : 'Maximum:'} {bonus.max}
                  </div>
                  <button className={`w-full bg-gradient-to-r ${category.color} text-white font-medium py-2 rounded-lg hover:opacity-90 transition-all`}>
                    {language === 'tr' ? 'Al' : 'Claim'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};
