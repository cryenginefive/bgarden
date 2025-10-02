import { Video, Users, Eye, ThumbsUp, Share2, TrendingUp } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

export const StreamsPage = () => {
  const { language } = useLanguage();

  const liveStreams = [
    {
      id: 1,
      streamer: 'ProGamer42',
      avatar: '🎮',
      title: language === 'tr' ? 'Mega Slot Turnuvası - 100K Kazanç Hedefi' : 'Mega Slot Tournament - 100K Win Goal',
      game: 'Sweet Bonanza',
      viewers: 2450,
      thumbnail: '🎰',
      isLive: true,
      category: 'slots'
    },
    {
      id: 2,
      streamer: 'CasinoKing',
      avatar: '👑',
      title: language === 'tr' ? 'Live Blackjack - Profesyonel Stratejiler' : 'Live Blackjack - Pro Strategies',
      game: 'Blackjack VIP',
      viewers: 1890,
      thumbnail: '🃏',
      isLive: true,
      category: 'table'
    },
    {
      id: 3,
      streamer: 'SlotQueen',
      avatar: '💎',
      title: language === 'tr' ? 'Büyük Kazançlar ve Bonus Avı' : 'Big Wins and Bonus Hunt',
      game: 'Gates of Olympus',
      viewers: 3120,
      thumbnail: '⚡',
      isLive: true,
      category: 'slots'
    },
    {
      id: 4,
      streamer: 'PokerPro',
      avatar: '🎯',
      title: language === 'tr' ? 'Texas Holdem Poker - Turnuva Finali' : 'Texas Holdem Poker - Tournament Final',
      game: 'Texas Holdem',
      viewers: 980,
      thumbnail: '🎴',
      isLive: true,
      category: 'poker'
    }
  ];

  const recentStreams = [
    {
      id: 1,
      streamer: 'MegaWin',
      avatar: '🔥',
      title: language === 'tr' ? '50,000 TL Kazanç Momentleri' : '50,000 TL Win Moments',
      game: 'Book of Dead',
      views: 12450,
      likes: 890,
      duration: '2:45:30',
      thumbnail: '📚'
    },
    {
      id: 2,
      streamer: 'LuckyPlayer',
      avatar: '🍀',
      title: language === 'tr' ? 'Roulette Taktikleri ve Büyük Kazançlar' : 'Roulette Tactics and Big Wins',
      game: 'European Roulette',
      views: 8920,
      likes: 654,
      duration: '1:30:15',
      thumbnail: '🎡'
    },
    {
      id: 3,
      streamer: 'BetMaster',
      avatar: '🎲',
      title: language === 'tr' ? 'Canlı Casino Maratonu' : 'Live Casino Marathon',
      game: 'Various Games',
      views: 15670,
      likes: 1234,
      duration: '4:20:00',
      thumbnail: '🎪'
    }
  ];

  const topStreamers = [
    {
      name: 'ProGamer42',
      avatar: '🎮',
      followers: 45600,
      totalWins: '2.5M TL'
    },
    {
      name: 'SlotQueen',
      avatar: '💎',
      followers: 38900,
      totalWins: '1.8M TL'
    },
    {
      name: 'CasinoKing',
      avatar: '👑',
      followers: 32400,
      totalWins: '1.5M TL'
    }
  ];

  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-red-600 to-pink-600 rounded-xl p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-2">
              {language === 'tr' ? 'Canlı Yayınlar' : 'Live Streams'}
            </h2>
            <p className="text-white/90">
              {language === 'tr' ? 'Profesyonel oyuncuları izle, taktik öğren!' : 'Watch pro players, learn tactics!'}
            </p>
          </div>
          <Video className="w-16 h-16 opacity-50" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
              {language === 'tr' ? 'Canlı Yayınlar' : 'Live Now'}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {liveStreams.map((stream) => (
                <div
                  key={stream.id}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all cursor-pointer"
                >
                  <div className="relative">
                    <div className="bg-gradient-to-br from-purple-500 to-pink-500 aspect-video flex items-center justify-center text-8xl">
                      {stream.thumbnail}
                    </div>
                    <div className="absolute top-3 left-3 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 animate-pulse">
                      <div className="w-2 h-2 bg-white rounded-full" />
                      LIVE
                    </div>
                    <div className="absolute top-3 right-3 bg-black/70 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      {stream.viewers.toLocaleString()}
                    </div>
                  </div>

                  <div className="p-4">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="text-3xl">{stream.avatar}</div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-gray-900 dark:text-white text-sm mb-1 truncate">
                          {stream.title}
                        </h4>
                        <div className="text-xs text-gray-600 dark:text-gray-400">
                          {stream.streamer}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-500">
                          {stream.game}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-purple-600" />
              {language === 'tr' ? 'Popüler Yayınlar' : 'Popular Streams'}
            </h3>
            <div className="space-y-4">
              {recentStreams.map((stream) => (
                <div
                  key={stream.id}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 hover:shadow-xl transition-all cursor-pointer"
                >
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-40 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-5xl relative">
                        {stream.thumbnail}
                        <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-xs font-semibold">
                          {stream.duration}
                        </div>
                      </div>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-start gap-2 mb-2">
                        <div className="text-2xl">{stream.avatar}</div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-bold text-gray-900 dark:text-white mb-1">
                            {stream.title}
                          </h4>
                          <div className="text-sm text-gray-600 dark:text-gray-400">
                            {stream.streamer} • {stream.game}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                        <div className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          {stream.views.toLocaleString()}
                        </div>
                        <div className="flex items-center gap-1">
                          <ThumbsUp className="w-4 h-4" />
                          {stream.likes}
                        </div>
                        <button className="flex items-center gap-1 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                          <Share2 className="w-4 h-4" />
                          {language === 'tr' ? 'Paylaş' : 'Share'}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <Users className="w-6 h-6 text-pink-600" />
              {language === 'tr' ? 'En İyi Yayıncılar' : 'Top Streamers'}
            </h3>
            <div className="space-y-4">
              {topStreamers.map((streamer, index) => (
                <div
                  key={streamer.name}
                  className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors cursor-pointer"
                >
                  <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-red-500 to-pink-500 rounded-full text-white font-bold text-sm">
                    {index + 1}
                  </div>
                  <div className="text-3xl">{streamer.avatar}</div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900 dark:text-white text-sm">
                      {streamer.name}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      {streamer.followers.toLocaleString()} {language === 'tr' ? 'takipçi' : 'followers'}
                    </div>
                    <div className="text-xs text-green-600 dark:text-green-400 font-semibold">
                      {streamer.totalWins} {language === 'tr' ? 'kazanç' : 'wins'}
                    </div>
                  </div>
                  <button className="px-3 py-1 bg-gradient-to-r from-red-600 to-pink-600 text-white text-xs font-bold rounded-full hover:from-red-700 hover:to-pink-700 transition-all">
                    {language === 'tr' ? 'Takip Et' : 'Follow'}
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl shadow-lg p-6 text-white">
            <Video className="w-12 h-12 mb-3" />
            <h3 className="text-xl font-bold mb-2">
              {language === 'tr' ? 'Yayıncı Ol!' : 'Become a Streamer!'}
            </h3>
            <p className="text-white/90 text-sm mb-4">
              {language === 'tr'
                ? 'Sen de yayın yap, kazançlarını paylaş ve ödül kazan!'
                : 'Stream your gameplay, share wins and earn rewards!'}
            </p>
            <button className="w-full bg-white text-purple-600 font-bold py-2 rounded-lg hover:bg-gray-100 transition-colors">
              {language === 'tr' ? 'Başvur' : 'Apply Now'}
            </button>
          </div>

          <div className="bg-gradient-to-br from-orange-600 to-red-600 rounded-xl shadow-lg p-6 text-white">
            <TrendingUp className="w-12 h-12 mb-3" />
            <h3 className="text-xl font-bold mb-2">
              {language === 'tr' ? 'Canlı Turnuva' : 'Live Tournament'}
            </h3>
            <p className="text-white/90 text-sm mb-4">
              {language === 'tr'
                ? 'Şu anda 24 yayıncı turnuvada yarışıyor!'
                : '24 streamers competing in tournament now!'}
            </p>
            <button className="w-full bg-white text-orange-600 font-bold py-2 rounded-lg hover:bg-gray-100 transition-colors">
              {language === 'tr' ? 'İzle' : 'Watch Now'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
