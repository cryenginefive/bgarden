import { Gift, Clock, Users, Trophy } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

export const GiveawaysPage = () => {
  const { language } = useLanguage();

  const giveaways = [
    {
      id: 1,
      title: language === 'tr' ? 'Büyük Çekiliş' : 'Grand Giveaway',
      prize: '50,000 TL',
      timeLeft: '2h 15m',
      participants: 2845,
      color: 'from-purple-600 to-pink-600'
    },
    {
      id: 2,
      title: language === 'tr' ? 'Günlük Çekiliş' : 'Daily Giveaway',
      prize: '10,000 TL',
      timeLeft: '5h 30m',
      participants: 1523,
      color: 'from-green-600 to-teal-600'
    },
    {
      id: 3,
      title: language === 'tr' ? 'Haftalık Çekiliş' : 'Weekly Giveaway',
      prize: '100,000 TL',
      timeLeft: '3d 12h',
      participants: 5621,
      color: 'from-yellow-600 to-orange-600'
    }
  ];

  const recentWinners = Array.from({ length: 8 }, (_, i) => ({
    id: i + 1,
    name: `Winner ${i + 1}`,
    prize: `${(i + 1) * 500} TL`,
    time: `${i + 1}h ${language === 'tr' ? 'önce' : 'ago'}`
  }));

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          {language === 'tr' ? 'Çekilişler' : 'Giveaways'}
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          {language === 'tr' ? 'Katıl ve kazan!' : 'Join and win!'}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {giveaways.map((giveaway) => (
          <div
            key={giveaway.id}
            className="relative overflow-hidden rounded-xl shadow-xl hover:shadow-2xl transition-all hover:scale-105"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${giveaway.color}`}></div>

            <div className="relative p-6 text-white">
              <Trophy className="w-12 h-12 mb-4 mx-auto" />
              <h3 className="text-2xl font-bold text-center mb-2">{giveaway.title}</h3>

              <div className="text-center mb-6">
                <div className="text-4xl font-bold mb-1">{giveaway.prize}</div>
                <div className="text-sm opacity-80">{language === 'tr' ? 'Ödül' : 'Prize'}</div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between bg-white/10 backdrop-blur-sm rounded-lg p-3">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    <span className="text-sm">{language === 'tr' ? 'Kalan Süre' : 'Time Left'}</span>
                  </div>
                  <span className="font-bold">{giveaway.timeLeft}</span>
                </div>

                <div className="flex items-center justify-between bg-white/10 backdrop-blur-sm rounded-lg p-3">
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    <span className="text-sm">{language === 'tr' ? 'Katılımcı' : 'Participants'}</span>
                  </div>
                  <span className="font-bold">{giveaway.participants.toLocaleString()}</span>
                </div>
              </div>

              <button className="w-full bg-white text-gray-900 font-bold py-3 rounded-lg hover:bg-gray-100 transition-colors">
                {language === 'tr' ? 'Katıl' : 'Join Now'}
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
          <Trophy className="w-6 h-6 text-yellow-500" />
          {language === 'tr' ? 'Son Kazananlar' : 'Recent Winners'}
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {recentWinners.map((winner) => (
            <div
              key={winner.id}
              className="bg-gradient-to-r from-purple-100 to-green-100 dark:from-purple-900/30 dark:to-green-900/30 rounded-lg p-4"
            >
              <div className="font-bold text-gray-900 dark:text-white mb-1">{winner.name}</div>
              <div className="text-purple-600 dark:text-purple-400 font-semibold mb-1">{winner.prize}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">{winner.time}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
