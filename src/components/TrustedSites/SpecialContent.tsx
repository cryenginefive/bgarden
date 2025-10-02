import { Zap, Gift, Trophy } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

export const SpecialContent = () => {
  const { language } = useLanguage();

  const content = [
    {
      id: 1,
      icon: Zap,
      title: language === 'tr' ? 'Anlık Çekilişler' : 'Instant Giveaways',
      description: language === 'tr'
        ? 'Her saat başı düzenlenen çekilişlere katıl, büyük ödüller kazan!'
        : 'Join hourly giveaways and win big prizes!',
      image: '⚡',
      buttonText: language === 'tr' ? 'Katıl' : 'Join Now',
      bgColor: 'from-yellow-500 to-orange-600'
    },
    {
      id: 2,
      icon: Gift,
      title: language === 'tr' ? 'Özel Bonuslar' : 'Exclusive Bonuses',
      description: language === 'tr'
        ? 'Sadece sizin için hazırlanmış özel bonus teklifleri!'
        : 'Exclusive bonus offers prepared just for you!',
      image: '🎁',
      buttonText: language === 'tr' ? 'Keşfet' : 'Discover',
      bgColor: 'from-purple-600 to-pink-600'
    },
    {
      id: 3,
      icon: Trophy,
      title: language === 'tr' ? 'Turnuvalar' : 'Tournaments',
      description: language === 'tr'
        ? 'Haftalık turnuvalara katıl, lider tablosunda zirvede ol!'
        : 'Join weekly tournaments, top the leaderboard!',
      image: '🏆',
      buttonText: language === 'tr' ? 'Yarış' : 'Compete',
      bgColor: 'from-green-600 to-teal-600'
    }
  ];

  return (
    <div className="mb-8">
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        {language === 'tr' ? 'Özel İçerikler' : 'Special Content'}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {content.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.bgColor} opacity-95`}></div>

              <div className="relative p-6 h-64 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <Icon className="w-8 h-8 text-white" />
                  <div className="text-5xl">{item.image}</div>
                </div>

                <h4 className="text-2xl font-bold text-white mb-3">{item.title}</h4>
                <p className="text-white/90 text-sm mb-auto">{item.description}</p>

                <button className="mt-4 w-full bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-semibold py-3 rounded-lg transition-all border border-white/30">
                  {item.buttonText}
                </button>
              </div>

              <div className="absolute -right-12 -top-12 w-40 h-40 bg-white/10 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
              <div className="absolute -left-12 -bottom-12 w-40 h-40 bg-white/10 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
