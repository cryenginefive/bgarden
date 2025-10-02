import { Gift, Sparkles, TrendingUp, Percent } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

export const BonusesGrid = () => {
  const { language } = useLanguage();

  const bonuses = [
    {
      id: 1,
      icon: Gift,
      title: language === 'tr' ? 'Hoşgeldin Bonusu' : 'Welcome Bonus',
      amount: '%200',
      description: language === 'tr' ? '5000 TL\'ye kadar' : 'Up to 5000 TL',
      color: 'from-purple-600 to-purple-800'
    },
    {
      id: 2,
      icon: Sparkles,
      title: language === 'tr' ? 'İlk Yatırım' : 'First Deposit',
      amount: '%150',
      description: language === 'tr' ? '3000 TL + 50 FS' : '3000 TL + 50 FS',
      color: 'from-green-600 to-green-800'
    },
    {
      id: 3,
      icon: TrendingUp,
      title: language === 'tr' ? 'Cashback' : 'Cashback',
      amount: '%25',
      description: language === 'tr' ? 'Haftalık' : 'Weekly',
      color: 'from-blue-600 to-blue-800'
    },
    {
      id: 4,
      icon: Percent,
      title: language === 'tr' ? 'Yatırım Bonusu' : 'Deposit Bonus',
      amount: '%100',
      description: language === 'tr' ? 'Her yatırımda' : 'Every deposit',
      color: 'from-orange-600 to-orange-800'
    },
    {
      id: 5,
      icon: Gift,
      title: language === 'tr' ? 'Deneme Bonusu' : 'Trial Bonus',
      amount: '500 TL',
      description: language === 'tr' ? 'Ücretsiz' : 'Free',
      color: 'from-pink-600 to-pink-800'
    },
    {
      id: 6,
      icon: Sparkles,
      title: language === 'tr' ? 'Freespin' : 'Freespin',
      amount: '100 FS',
      description: language === 'tr' ? 'Günlük' : 'Daily',
      color: 'from-purple-600 to-purple-800'
    },
    {
      id: 7,
      icon: TrendingUp,
      title: language === 'tr' ? 'VIP Bonus' : 'VIP Bonus',
      amount: '%300',
      description: language === 'tr' ? '10000 TL\'ye kadar' : 'Up to 10000 TL',
      color: 'from-yellow-600 to-yellow-800'
    },
    {
      id: 8,
      icon: Percent,
      title: language === 'tr' ? 'Kayıp Bonusu' : 'Loss Bonus',
      amount: '%20',
      description: language === 'tr' ? 'Anlık' : 'Instant',
      color: 'from-green-600 to-green-800'
    },
    {
      id: 9,
      icon: Gift,
      title: language === 'tr' ? 'Spor Bonusu' : 'Sports Bonus',
      amount: '%50',
      description: language === 'tr' ? 'İlk bahis' : 'First bet',
      color: 'from-red-600 to-red-800'
    },
    {
      id: 10,
      icon: Sparkles,
      title: language === 'tr' ? 'Çevrimsiz Bonus' : 'Wager-Free Bonus',
      amount: '1000 TL',
      description: language === 'tr' ? 'Şartsız' : 'No conditions',
      color: 'from-purple-600 to-purple-800'
    },
    {
      id: 11,
      icon: TrendingUp,
      title: language === 'tr' ? 'Slot Bonusu' : 'Slot Bonus',
      amount: '%75',
      description: language === 'tr' ? 'Tüm slotlar' : 'All slots',
      color: 'from-indigo-600 to-indigo-800'
    },
    {
      id: 12,
      icon: Percent,
      title: language === 'tr' ? 'Live Casino' : 'Live Casino',
      amount: '%100',
      description: language === 'tr' ? 'Canlı oyunlar' : 'Live games',
      color: 'from-green-600 to-green-800'
    },
    {
      id: 13,
      icon: Gift,
      title: language === 'tr' ? 'Arkadaş Bonusu' : 'Referral Bonus',
      amount: '500 TL',
      description: language === 'tr' ? 'Her arkadaş' : 'Per friend',
      color: 'from-teal-600 to-teal-800'
    },
    {
      id: 14,
      icon: Sparkles,
      title: language === 'tr' ? 'Doğum Günü' : 'Birthday',
      amount: '1000 TL',
      description: language === 'tr' ? 'Özel hediye' : 'Special gift',
      color: 'from-pink-600 to-pink-800'
    },
    {
      id: 15,
      icon: TrendingUp,
      title: language === 'tr' ? 'Sadakat Bonusu' : 'Loyalty Bonus',
      amount: '%10',
      description: language === 'tr' ? 'Her seviye' : 'Each level',
      color: 'from-purple-600 to-purple-800'
    },
    {
      id: 16,
      icon: Percent,
      title: language === 'tr' ? 'Hafta Sonu' : 'Weekend',
      amount: '%50',
      description: language === 'tr' ? 'Cuma-Pazar' : 'Fri-Sun',
      color: 'from-orange-600 to-orange-800'
    }
  ];

  return (
    <div className="mb-8">
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        {language === 'tr' ? 'Bonuslar' : 'Bonuses'}
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
        {bonuses.map((bonus) => {
          const Icon = bonus.icon;
          return (
            <div
              key={bonus.id}
              className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer hover:scale-105"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${bonus.color}`}></div>

              <div className="relative p-4 text-white text-center">
                <Icon className="w-8 h-8 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <div className="text-2xl font-bold mb-1">{bonus.amount}</div>
                <h4 className="font-semibold text-sm mb-1 line-clamp-1">{bonus.title}</h4>
                <p className="text-white/80 text-xs">{bonus.description}</p>
              </div>

              <div className="absolute -right-4 -bottom-4 w-16 h-16 bg-white/10 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
