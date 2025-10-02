import { Zap, Calendar, Trophy, Gift, Clock, Users } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

export const SpecialEventsPage = () => {
  const { language } = useLanguage();

  const events = [
    {
      id: 1,
      title: language === 'tr' ? 'Yılbaşı Mega Turnuvası' : 'New Year Mega Tournament',
      description: language === 'tr'
        ? '100.000 TL ödül havuzu! İlk 100 oyuncu ödül kazanacak.'
        : '100,000 TL prize pool! Top 100 players will win prizes.',
      image: '🎆',
      prize: '100,000 TL',
      participants: 1247,
      endsIn: '3d 12h',
      category: 'tournament',
      status: 'active'
    },
    {
      id: 2,
      title: language === 'tr' ? 'Haftalık Slot Yarışması' : 'Weekly Slot Race',
      description: language === 'tr'
        ? 'En çok kazanan 50 oyuncu ekstra bonus kazanır!'
        : 'Top 50 winning players get extra bonuses!',
      image: '🎰',
      prize: '50,000 TL',
      participants: 892,
      endsIn: '2d 8h',
      category: 'race',
      status: 'active'
    },
    {
      id: 3,
      title: language === 'tr' ? 'VIP Özel Etkinlik' : 'VIP Special Event',
      description: language === 'tr'
        ? 'VIP üyeler için özel ödüller ve avantajlar.'
        : 'Special rewards and benefits for VIP members.',
      image: '💎',
      prize: '75,000 TL',
      participants: 456,
      endsIn: '5d 20h',
      category: 'vip',
      status: 'active'
    },
    {
      id: 4,
      title: language === 'tr' ? 'Günlük Free Spin Şöleni' : 'Daily Free Spin Festival',
      description: language === 'tr'
        ? 'Her gün 100 free spin kazanma şansı!'
        : 'Chance to win 100 free spins every day!',
      image: '🎡',
      prize: '500 Free Spins',
      participants: 2341,
      endsIn: '18h 45m',
      category: 'daily',
      status: 'active'
    },
    {
      id: 5,
      title: language === 'tr' ? 'Poker Şampiyonası' : 'Poker Championship',
      description: language === 'tr'
        ? 'Profesyonel oyuncularla yarış, büyük ödül kazan!'
        : 'Compete with pros, win big prizes!',
      image: '🃏',
      prize: '200,000 TL',
      participants: 678,
      endsIn: '10d 5h',
      category: 'championship',
      status: 'upcoming'
    },
    {
      id: 6,
      title: language === 'tr' ? 'Blackjack Maratonu' : 'Blackjack Marathon',
      description: language === 'tr'
        ? '24 saat blackjack oyna, özel ödüller kazan!'
        : 'Play blackjack for 24 hours, win special prizes!',
      image: '🎴',
      prize: '30,000 TL',
      participants: 534,
      endsIn: '1d 3h',
      category: 'marathon',
      status: 'active'
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'tournament':
        return 'from-purple-500 to-pink-500';
      case 'race':
        return 'from-orange-500 to-red-500';
      case 'vip':
        return 'from-yellow-500 to-amber-500';
      case 'daily':
        return 'from-green-500 to-teal-500';
      case 'championship':
        return 'from-blue-500 to-indigo-500';
      case 'marathon':
        return 'from-cyan-500 to-blue-500';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  const activeEvents = events.filter(e => e.status === 'active');
  const upcomingEvents = events.filter(e => e.status === 'upcoming');

  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-xl p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-2">
              {language === 'tr' ? 'Özel Etkinlikler' : 'Special Events'}
            </h2>
            <p className="text-white/90">
              {language === 'tr' ? 'Heyecan dolu turnuvalara katıl, büyük ödüller kazan!' : 'Join exciting tournaments, win big prizes!'}
            </p>
          </div>
          <Zap className="w-16 h-16 opacity-50" />
        </div>
      </div>

      {activeEvents.length > 0 && (
        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <Zap className="w-6 h-6 text-orange-600" />
            {language === 'tr' ? 'Aktif Etkinlikler' : 'Active Events'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {activeEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all"
              >
                <div className={`bg-gradient-to-r ${getCategoryColor(event.category)} h-2`} />

                <div className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-6xl">{event.image}</div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {event.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {event.description}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-gradient-to-br from-yellow-100 to-orange-100 dark:from-yellow-900/30 dark:to-orange-900/30 rounded-lg p-3">
                      <div className="flex items-center gap-2 text-orange-600 dark:text-orange-400 mb-1">
                        <Trophy className="w-4 h-4" />
                        <span className="text-xs font-semibold">
                          {language === 'tr' ? 'Ödül' : 'Prize'}
                        </span>
                      </div>
                      <div className="text-lg font-bold text-gray-900 dark:text-white">
                        {event.prize}
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-lg p-3">
                      <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 mb-1">
                        <Users className="w-4 h-4" />
                        <span className="text-xs font-semibold">
                          {language === 'tr' ? 'Katılımcı' : 'Participants'}
                        </span>
                      </div>
                      <div className="text-lg font-bold text-gray-900 dark:text-white">
                        {event.participants}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 text-red-600 dark:text-red-400">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm font-medium">
                        {language === 'tr' ? 'Kalan Süre:' : 'Time Left:'} {event.endsIn}
                      </span>
                    </div>
                  </div>

                  <button className={`w-full bg-gradient-to-r ${getCategoryColor(event.category)} text-white font-bold py-3 rounded-lg hover:opacity-90 transition-all`}>
                    {language === 'tr' ? 'Katıl' : 'Join Now'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {upcomingEvents.length > 0 && (
        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <Calendar className="w-6 h-6 text-blue-600" />
            {language === 'tr' ? 'Yaklaşan Etkinlikler' : 'Upcoming Events'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
              >
                <div className={`bg-gradient-to-r ${getCategoryColor(event.category)} h-2`} />

                <div className="p-4">
                  <div className="text-4xl mb-3 text-center">{event.image}</div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 text-center">
                    {event.title}
                  </h4>
                  <div className="text-center mb-3">
                    <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                      {language === 'tr' ? 'Ödül' : 'Prize'}
                    </div>
                    <div className="text-xl font-bold text-gray-900 dark:text-white">
                      {event.prize}
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-blue-600 dark:text-blue-400 text-sm">
                    <Clock className="w-4 h-4" />
                    <span className="font-medium">
                      {language === 'tr' ? 'Başlıyor:' : 'Starts in:'} {event.endsIn}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
