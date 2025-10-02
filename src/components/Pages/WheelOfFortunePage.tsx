import { CircleDollarSign, Sparkles, Trophy, Gift } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

export const WheelOfFortunePage = () => {
  const { language } = useLanguage();

  const prizes = [
    { id: 1, label: '100 TL', color: 'bg-red-500', angle: 0 },
    { id: 2, label: '50 FS', color: 'bg-blue-500', angle: 45 },
    { id: 3, label: '500 TL', color: 'bg-green-500', angle: 90 },
    { id: 4, label: '25 TL', color: 'bg-yellow-500', angle: 135 },
    { id: 5, label: '250 TL', color: 'bg-purple-500', angle: 180 },
    { id: 6, label: '100 FS', color: 'bg-pink-500', angle: 225 },
    { id: 7, label: '1000 TL', color: 'bg-orange-500', angle: 270 },
    { id: 8, label: '10 TL', color: 'bg-teal-500', angle: 315 }
  ];

  const recentWins = [
    {
      id: 1,
      user: 'Player123',
      prize: '500 TL',
      time: language === 'tr' ? '2 dk önce' : '2 min ago'
    },
    {
      id: 2,
      user: 'LuckyWin',
      prize: '100 Free Spins',
      time: language === 'tr' ? '5 dk önce' : '5 min ago'
    },
    {
      id: 3,
      user: 'ProGamer',
      prize: '250 TL',
      time: language === 'tr' ? '8 dk önce' : '8 min ago'
    },
    {
      id: 4,
      user: 'MegaPlayer',
      prize: '1000 TL',
      time: language === 'tr' ? '15 dk önce' : '15 min ago'
    },
    {
      id: 5,
      user: 'SlotKing',
      prize: '50 Free Spins',
      time: language === 'tr' ? '20 dk önce' : '20 min ago'
    }
  ];

  const spinCost = 100;
  const userSpins = 5;

  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-yellow-600 to-orange-600 rounded-xl p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-2">
              {language === 'tr' ? 'Şans Çarkı' : 'Wheel of Fortune'}
            </h2>
            <p className="text-white/90">
              {language === 'tr' ? 'Çevir ve kazan! Her gün yeni şanslar!' : 'Spin and win! New chances every day!'}
            </p>
          </div>
          <CircleDollarSign className="w-16 h-16 opacity-50" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="w-80 h-80 rounded-full border-8 border-gray-300 dark:border-gray-600 bg-gradient-to-br from-yellow-400 via-orange-400 to-red-400 shadow-2xl flex items-center justify-center">
                  <div className="w-72 h-72 rounded-full border-4 border-white dark:border-gray-800 relative overflow-hidden">
                    <div className="absolute inset-0 grid grid-cols-2 grid-rows-2">
                      {prizes.slice(0, 4).map((prize, idx) => (
                        <div
                          key={prize.id}
                          className={`${prize.color} flex items-center justify-center text-white font-bold text-lg`}
                        >
                          {prize.label}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="absolute w-0 h-0 border-l-[15px] border-r-[15px] border-b-[30px] border-l-transparent border-r-transparent border-b-red-600 -top-2 left-1/2 transform -translate-x-1/2 z-10" />
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <button className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full shadow-xl border-4 border-white dark:border-gray-800 flex items-center justify-center text-white font-bold hover:scale-110 transition-transform">
                    {language === 'tr' ? 'ÇEVİR' : 'SPIN'}
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="bg-gradient-to-r from-green-100 to-teal-100 dark:from-green-900/30 dark:to-teal-900/30 rounded-lg px-6 py-3">
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                  {language === 'tr' ? 'Kalan Çevirme' : 'Spins Left'}
                </div>
                <div className="text-2xl font-bold text-green-700 dark:text-green-300">
                  {userSpins}
                </div>
              </div>

              <div className="bg-gradient-to-r from-orange-100 to-yellow-100 dark:from-orange-900/30 dark:to-yellow-900/30 rounded-lg px-6 py-3">
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                  {language === 'tr' ? 'Çevirme Maliyeti' : 'Spin Cost'}
                </div>
                <div className="text-2xl font-bold text-orange-700 dark:text-orange-300">
                  {spinCost} {language === 'tr' ? 'Puan' : 'Points'}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-3 mb-6">
              {prizes.map((prize) => (
                <div
                  key={prize.id}
                  className={`${prize.color} rounded-lg p-3 text-white text-center font-bold shadow-lg`}
                >
                  {prize.label}
                </div>
              ))}
            </div>

            <button className="w-full bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 text-white font-bold py-4 rounded-lg transition-all text-lg">
              {language === 'tr' ? 'Şansını Dene!' : 'Try Your Luck!'}
            </button>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-yellow-500" />
              {language === 'tr' ? 'Nasıl Çalışır?' : 'How It Works?'}
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    {language === 'tr' ? 'Çevirme Hakkı Kazan' : 'Earn Spins'}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {language === 'tr'
                      ? 'Günlük giriş, bahis yapma veya puan kullanarak çevirme hakkı kazan.'
                      : 'Earn spins through daily login, betting, or using points.'}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    {language === 'tr' ? 'Çarkı Çevir' : 'Spin the Wheel'}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {language === 'tr'
                      ? 'Çevir butonuna tıkla ve çarkın durmasını bekle!'
                      : 'Click the spin button and wait for the wheel to stop!'}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    {language === 'tr' ? 'Ödülünü Al' : 'Claim Your Prize'}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {language === 'tr'
                      ? 'Çarkın durduğu ödül anında hesabına yüklenir!'
                      : 'The prize you land on is instantly credited to your account!'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <Trophy className="w-6 h-6 text-yellow-500" />
              {language === 'tr' ? 'Son Kazananlar' : 'Recent Winners'}
            </h3>
            <div className="space-y-3">
              {recentWins.map((win) => (
                <div
                  key={win.id}
                  className="flex items-center justify-between p-3 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-lg"
                >
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">
                      {win.user}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      {win.time}
                    </div>
                  </div>
                  <div className="font-bold text-orange-600 dark:text-orange-400">
                    {win.prize}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl shadow-lg p-6 text-white">
            <Gift className="w-12 h-12 mb-3" />
            <h3 className="text-xl font-bold mb-2">
              {language === 'tr' ? 'Özel Fırsat!' : 'Special Offer!'}
            </h3>
            <p className="text-white/90 text-sm mb-4">
              {language === 'tr'
                ? '10 çevirme hakkı al, sadece 800 puan!'
                : 'Get 10 spins for only 800 points!'}
            </p>
            <button className="w-full bg-white text-purple-600 font-bold py-2 rounded-lg hover:bg-gray-100 transition-colors">
              {language === 'tr' ? 'Paketi Al' : 'Get Package'}
            </button>
          </div>

          <div className="bg-gradient-to-br from-green-600 to-teal-600 rounded-xl shadow-lg p-6 text-white">
            <Sparkles className="w-12 h-12 mb-3" />
            <h3 className="text-xl font-bold mb-2">
              {language === 'tr' ? 'Günlük Bonus' : 'Daily Bonus'}
            </h3>
            <p className="text-white/90 text-sm mb-4">
              {language === 'tr'
                ? 'Her gün 1 ücretsiz çevirme hakkı kazan!'
                : 'Earn 1 free spin every day!'}
            </p>
            <button className="w-full bg-white text-green-600 font-bold py-2 rounded-lg hover:bg-gray-100 transition-colors">
              {language === 'tr' ? 'Topla' : 'Collect'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
