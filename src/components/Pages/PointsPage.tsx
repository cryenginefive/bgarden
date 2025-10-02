import { TrendingUp, Trophy, Star, Gift, Zap, Crown, Award } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

export const PointsPage = () => {
  const { language } = useLanguage();

  const userPoints = 12450;
  const userLevel = 15;
  const nextLevelPoints = 15000;

  const pointHistory = [
    {
      id: 1,
      action: language === 'tr' ? 'Günlük Giriş' : 'Daily Login',
      points: 50,
      date: language === 'tr' ? '2 saat önce' : '2 hours ago',
      type: 'earn'
    },
    {
      id: 2,
      action: language === 'tr' ? '500 TL Bonus Kazandı' : 'Won 500 TL Bonus',
      points: 500,
      date: language === 'tr' ? '5 saat önce' : '5 hours ago',
      type: 'earn'
    },
    {
      id: 3,
      action: language === 'tr' ? 'Free Spin Paketi' : 'Free Spin Package',
      points: -200,
      date: language === 'tr' ? '1 gün önce' : '1 day ago',
      type: 'spend'
    },
    {
      id: 4,
      action: language === 'tr' ? 'Turnuva Katılımı' : 'Tournament Participation',
      points: 300,
      date: language === 'tr' ? '2 gün önce' : '2 days ago',
      type: 'earn'
    },
    {
      id: 5,
      action: language === 'tr' ? 'VIP Bonus' : 'VIP Bonus',
      points: 1000,
      date: language === 'tr' ? '3 gün önce' : '3 days ago',
      type: 'earn'
    }
  ];

  const rewards = [
    {
      id: 1,
      name: language === 'tr' ? '100 Free Spin' : '100 Free Spins',
      icon: '🎰',
      points: 500,
      category: 'spins'
    },
    {
      id: 2,
      name: language === 'tr' ? '250 TL Bonus' : '250 TL Bonus',
      icon: '💰',
      points: 1000,
      category: 'bonus'
    },
    {
      id: 3,
      name: language === 'tr' ? 'VIP Erişim (1 Ay)' : 'VIP Access (1 Month)',
      icon: '👑',
      points: 5000,
      category: 'vip'
    },
    {
      id: 4,
      name: language === 'tr' ? '500 Free Spin' : '500 Free Spins',
      icon: '🎡',
      points: 2000,
      category: 'spins'
    },
    {
      id: 5,
      name: language === 'tr' ? '1000 TL Bonus' : '1000 TL Bonus',
      icon: '💎',
      points: 3500,
      category: 'bonus'
    },
    {
      id: 6,
      name: language === 'tr' ? 'Özel Turnuva Bileti' : 'Special Tournament Ticket',
      icon: '🎫',
      points: 1500,
      category: 'ticket'
    }
  ];

  const earnMethods = [
    {
      title: language === 'tr' ? 'Günlük Giriş' : 'Daily Login',
      points: '50',
      icon: Star,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: language === 'tr' ? 'Bahis Yap' : 'Place Bet',
      points: '10-100',
      icon: Trophy,
      color: 'from-blue-500 to-purple-500'
    },
    {
      title: language === 'tr' ? 'Turnuva Katıl' : 'Join Tournament',
      points: '200-1000',
      icon: Award,
      color: 'from-green-500 to-teal-500'
    },
    {
      title: language === 'tr' ? 'Arkadaş Davet Et' : 'Invite Friends',
      points: '500',
      icon: Gift,
      color: 'from-pink-500 to-red-500'
    }
  ];

  const progressPercentage = (userPoints / nextLevelPoints) * 100;

  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-2">
              {language === 'tr' ? 'Puan Sistemi' : 'Points System'}
            </h2>
            <p className="text-white/90">
              {language === 'tr' ? 'Puan kazan, ödülleri kap!' : 'Earn points, claim rewards!'}
            </p>
          </div>
          <TrendingUp className="w-16 h-16 opacity-50" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                  <Crown className="w-7 h-7 text-yellow-500" />
                  {language === 'tr' ? 'Seviyem' : 'My Level'}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {language === 'tr' ? 'Seviye' : 'Level'} {userLevel}
                </p>
              </div>
              <div className="text-right">
                <div className="text-4xl font-bold text-purple-600 dark:text-purple-400">
                  {userPoints.toLocaleString()}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {language === 'tr' ? 'Toplam Puan' : 'Total Points'}
                </div>
              </div>
            </div>

            <div className="mb-2">
              <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-2">
                <span>{language === 'tr' ? 'Bir sonraki seviye' : 'Next level'}</span>
                <span>{userPoints.toLocaleString()} / {nextLevelPoints.toLocaleString()}</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-purple-600 to-pink-600 h-full rounded-full transition-all duration-300"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <Gift className="w-6 h-6 text-pink-600" />
              {language === 'tr' ? 'Ödüller' : 'Rewards'}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {rewards.map((reward) => (
                <div
                  key={reward.id}
                  className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-lg p-4 hover:shadow-lg transition-all"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="text-4xl">{reward.icon}</div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 dark:text-white text-sm">
                        {reward.name}
                      </h4>
                      <div className="flex items-center gap-1 text-purple-600 dark:text-purple-400 text-sm font-semibold">
                        <TrendingUp className="w-3 h-3" />
                        {reward.points} {language === 'tr' ? 'Puan' : 'Points'}
                      </div>
                    </div>
                  </div>
                  <button
                    disabled={userPoints < reward.points}
                    className={`w-full py-2 rounded-lg font-medium transition-all ${
                      userPoints >= reward.points
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white'
                        : 'bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    {language === 'tr' ? 'Al' : 'Claim'}
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <Zap className="w-6 h-6 text-orange-600" />
              {language === 'tr' ? 'Puan Geçmişi' : 'Points History'}
            </h3>
            <div className="space-y-3">
              {pointHistory.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-900 rounded-lg"
                >
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">
                      {item.action}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {item.date}
                    </div>
                  </div>
                  <div
                    className={`font-bold text-lg ${
                      item.type === 'earn'
                        ? 'text-green-600 dark:text-green-400'
                        : 'text-red-600 dark:text-red-400'
                    }`}
                  >
                    {item.type === 'earn' ? '+' : ''}{item.points}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              {language === 'tr' ? 'Puan Kazan' : 'Earn Points'}
            </h3>
            <div className="space-y-3">
              {earnMethods.map((method) => {
                const Icon = method.icon;
                return (
                  <div
                    key={method.title}
                    className={`bg-gradient-to-r ${method.color} rounded-lg p-4 text-white`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <Icon className="w-5 h-5" />
                      <span className="font-semibold">{method.title}</span>
                    </div>
                    <div className="text-2xl font-bold">
                      +{method.points}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl shadow-lg p-6 text-white">
            <Award className="w-12 h-12 mb-3" />
            <h3 className="text-xl font-bold mb-2">
              {language === 'tr' ? 'VIP Avantajları' : 'VIP Benefits'}
            </h3>
            <p className="text-white/90 text-sm mb-4">
              {language === 'tr'
                ? 'VIP ol, %50 daha fazla puan kazan!'
                : 'Become VIP, earn 50% more points!'}
            </p>
            <button className="w-full bg-white text-orange-600 font-bold py-2 rounded-lg hover:bg-gray-100 transition-colors">
              {language === 'tr' ? 'VIP Ol' : 'Become VIP'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
