import { Users, MessageSquare, ThumbsUp, Share2, Clock, TrendingUp, Award, Star } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

export const CommunityPage = () => {
  const { language } = useLanguage();

  const posts = [
    {
      id: 1,
      author: 'ProGamer42',
      avatar: '🎮',
      time: '2h',
      content: language === 'tr'
        ? 'Bugün Royal Casino\'da 50.000 TL kazandım! İnanılmaz bir gün 🎉'
        : 'Won 50,000 TL at Royal Casino today! Amazing day 🎉',
      likes: 234,
      comments: 45,
      shares: 12,
      trending: true
    },
    {
      id: 2,
      author: 'LuckyOne',
      avatar: '🍀',
      time: '4h',
      content: language === 'tr'
        ? 'Yeni başlayanlar için en iyi slot oyunları hangisi? Tavsiyelerinizi bekliyorum'
        : 'What are the best slot games for beginners? Looking for recommendations',
      likes: 89,
      comments: 23,
      shares: 5,
      trending: false
    },
    {
      id: 3,
      author: 'CasinoKing',
      avatar: '👑',
      time: '6h',
      content: language === 'tr'
        ? 'Mega Slots sitesinde %300 bonus aldım. Harika bir fırsat, kaçırmayın!'
        : 'Got 300% bonus at Mega Slots. Great opportunity, don\'t miss it!',
      likes: 156,
      comments: 34,
      shares: 28,
      trending: true
    },
    {
      id: 4,
      author: 'BetMaster',
      avatar: '🎯',
      time: '8h',
      content: language === 'tr'
        ? 'Bu hafta 3 çekilişe katıldım. Umarım bu sefer şanslı olurum 🤞'
        : 'Joined 3 giveaways this week. Hope I get lucky this time 🤞',
      likes: 67,
      comments: 12,
      shares: 3,
      trending: false
    },
    {
      id: 5,
      author: 'SlotQueen',
      avatar: '💎',
      time: '10h',
      content: language === 'tr'
        ? 'Live Casino\'da 30.000 TL jackpot kazandım! Hala şoktayım 😱'
        : 'Won 30,000 TL jackpot at Live Casino! Still in shock 😱',
      likes: 445,
      comments: 78,
      shares: 45,
      trending: true
    },
    {
      id: 6,
      author: 'PokerPro',
      avatar: '🃏',
      time: '12h',
      content: language === 'tr'
        ? 'Poker stratejileri hakkında bir rehber hazırladım. İlgilenenler mesaj atabilir'
        : 'Prepared a guide about poker strategies. Interested people can message me',
      likes: 123,
      comments: 56,
      shares: 34,
      trending: false
    }
  ];

  const topMembers = [
    { name: 'ProGamer42', avatar: '🎮', points: 12450, rank: 1 },
    { name: 'SlotQueen', avatar: '💎', points: 11230, rank: 2 },
    { name: 'CasinoKing', avatar: '👑', points: 10890, rank: 3 },
    { name: 'BetMaster', avatar: '🎯', points: 9560, rank: 4 },
    { name: 'LuckyOne', avatar: '🍀', points: 8920, rank: 5 }
  ];

  const topics = [
    {
      name: language === 'tr' ? 'Büyük Kazançlar' : 'Big Wins',
      posts: 1234,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      name: language === 'tr' ? 'Bonus Paylaşımları' : 'Bonus Sharing',
      posts: 856,
      color: 'from-green-500 to-teal-500'
    },
    {
      name: language === 'tr' ? 'Stratejiler' : 'Strategies',
      posts: 645,
      color: 'from-blue-500 to-purple-500'
    },
    {
      name: language === 'tr' ? 'Site İncelemeleri' : 'Site Reviews',
      posts: 432,
      color: 'from-pink-500 to-red-500'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-2">
              {language === 'tr' ? 'Topluluk' : 'Community'}
            </h2>
            <p className="text-white/90">
              {language === 'tr' ? 'Deneyimlerini paylaş, kazançlarını kutla!' : 'Share experiences, celebrate wins!'}
            </p>
          </div>
          <Users className="w-16 h-16 opacity-50" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4">
            <textarea
              placeholder={language === 'tr' ? 'Deneyimlerini paylaş...' : 'Share your experience...'}
              className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-4 text-gray-900 dark:text-white resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={3}
            />
            <div className="flex justify-end mt-3">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium px-6 py-2 rounded-lg transition-all">
                {language === 'tr' ? 'Paylaş' : 'Post'}
              </button>
            </div>
          </div>

          <div className="space-y-4">
            {posts.map((post) => (
              <div
                key={post.id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{post.avatar}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-bold text-gray-900 dark:text-white">{post.author}</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.time}
                      </span>
                      {post.trending && (
                        <div className="bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                          <TrendingUp className="w-3 h-3" />
                          {language === 'tr' ? 'Trend' : 'Trending'}
                        </div>
                      )}
                    </div>

                    <p className="text-gray-700 dark:text-gray-300 mb-4">{post.content}</p>

                    <div className="flex items-center gap-6 text-gray-600 dark:text-gray-400">
                      <button className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        <ThumbsUp className="w-5 h-5" />
                        <span className="font-medium">{post.likes}</span>
                      </button>
                      <button className="flex items-center gap-2 hover:text-green-600 dark:hover:text-green-400 transition-colors">
                        <MessageSquare className="w-5 h-5" />
                        <span className="font-medium">{post.comments}</span>
                      </button>
                      <button className="flex items-center gap-2 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                        <Share2 className="w-5 h-5" />
                        <span className="font-medium">{post.shares}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <Award className="w-6 h-6 text-yellow-500" />
              {language === 'tr' ? 'En İyi Üyeler' : 'Top Members'}
            </h3>
            <div className="space-y-3">
              {topMembers.map((member) => (
                <div
                  key={member.rank}
                  className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full text-white font-bold text-sm">
                    {member.rank}
                  </div>
                  <div className="text-2xl">{member.avatar}</div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900 dark:text-white text-sm">{member.name}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      {member.points.toLocaleString()} {language === 'tr' ? 'puan' : 'points'}
                    </div>
                  </div>
                  {member.rank <= 3 && (
                    <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              {language === 'tr' ? 'Popüler Konular' : 'Popular Topics'}
            </h3>
            <div className="space-y-3">
              {topics.map((topic) => (
                <button
                  key={topic.name}
                  className="w-full text-left p-4 bg-gradient-to-r hover:opacity-90 transition-all rounded-lg text-white group"
                  style={{
                    backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))`
                  }}
                >
                  <div className={`bg-gradient-to-r ${topic.color} rounded-lg p-4`}>
                    <div className="font-bold mb-1">{topic.name}</div>
                    <div className="text-sm text-white/90">
                      {topic.posts} {language === 'tr' ? 'gönderi' : 'posts'}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
