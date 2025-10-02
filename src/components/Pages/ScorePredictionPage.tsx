import { Trophy, Clock, Star, TrendingUp, Award, Calendar, Users } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

export const ScorePredictionPage = () => {
  const { language } = useLanguage();

  const activeMatches = [
    {
      id: 1,
      league: language === 'tr' ? 'Süper Lig' : 'Super League',
      homeTeam: 'Galatasaray',
      awayTeam: 'Fenerbahçe',
      homeIcon: '🔴🟡',
      awayIcon: '🔵🟡',
      date: language === 'tr' ? '5 Ekim 2025' : 'Oct 5, 2025',
      time: '20:00',
      prize: '5000 TL',
      participants: 2456,
      deadline: language === 'tr' ? '2 saat 30 dk' : '2h 30m',
      status: 'active'
    },
    {
      id: 2,
      league: language === 'tr' ? 'Premier League' : 'Premier League',
      homeTeam: 'Manchester City',
      awayTeam: 'Liverpool',
      homeIcon: '🔵⚪',
      awayIcon: '🔴',
      date: language === 'tr' ? '5 Ekim 2025' : 'Oct 5, 2025',
      time: '18:30',
      prize: '7500 TL',
      participants: 3891,
      deadline: language === 'tr' ? '45 dakika' : '45 min',
      status: 'active'
    },
    {
      id: 3,
      league: language === 'tr' ? 'La Liga' : 'La Liga',
      homeTeam: 'Real Madrid',
      awayTeam: 'Barcelona',
      homeIcon: '⚪',
      awayIcon: '🔴🔵',
      date: language === 'tr' ? '6 Ekim 2025' : 'Oct 6, 2025',
      time: '22:00',
      prize: '10000 TL',
      participants: 5234,
      deadline: language === 'tr' ? '1 gün 4 saat' : '1d 4h',
      status: 'active'
    },
    {
      id: 4,
      league: language === 'tr' ? 'Bundesliga' : 'Bundesliga',
      homeTeam: 'Bayern Munich',
      awayTeam: 'Borussia Dortmund',
      homeIcon: '🔴⚪',
      awayIcon: '🟡⚫',
      date: language === 'tr' ? '6 Ekim 2025' : 'Oct 6, 2025',
      time: '19:30',
      prize: '6000 TL',
      participants: 1987,
      deadline: language === 'tr' ? '1 gün 1 saat' : '1d 1h',
      status: 'active'
    }
  ];

  const recentResults = [
    {
      id: 1,
      homeTeam: 'Beşiktaş',
      awayTeam: 'Trabzonspor',
      homeScore: 2,
      awayScore: 1,
      winners: 234,
      totalPrize: '3000 TL',
      yourPrediction: '2-1',
      status: 'won'
    },
    {
      id: 2,
      homeTeam: 'Arsenal',
      awayTeam: 'Chelsea',
      homeScore: 3,
      awayScore: 3,
      winners: 89,
      totalPrize: '5000 TL',
      yourPrediction: '2-1',
      status: 'lost'
    },
    {
      id: 3,
      homeTeam: 'PSG',
      awayTeam: 'Marseille',
      homeScore: 4,
      awayScore: 0,
      winners: 156,
      totalPrize: '4500 TL',
      yourPrediction: '3-0',
      status: 'partial'
    }
  ];

  const topPredictors = [
    {
      rank: 1,
      name: 'ProPredictor',
      avatar: '🎯',
      correctPredictions: 89,
      totalPredictions: 120,
      winnings: '45000 TL'
    },
    {
      rank: 2,
      name: 'ScoreMaster',
      avatar: '⚽',
      correctPredictions: 78,
      totalPredictions: 110,
      winnings: '38000 TL'
    },
    {
      rank: 3,
      name: 'MatchWizard',
      avatar: '🔮',
      correctPredictions: 72,
      totalPredictions: 105,
      winnings: '32000 TL'
    },
    {
      rank: 4,
      name: 'GoalPredict',
      avatar: '🥅',
      correctPredictions: 65,
      totalPredictions: 98,
      winnings: '28000 TL'
    },
    {
      rank: 5,
      name: 'FootballKing',
      avatar: '👑',
      correctPredictions: 58,
      totalPredictions: 95,
      winnings: '24000 TL'
    }
  ];

  const userStats = {
    totalPredictions: 45,
    correctPredictions: 28,
    totalWinnings: '12500 TL',
    accuracy: 62
  };

  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-xl p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-2">
              {language === 'tr' ? 'Skor Tahmini' : 'Score Prediction'}
            </h2>
            <p className="text-white/90">
              {language === 'tr' ? 'Maç skorlarını tahmin et, büyük ödüller kazan!' : 'Predict match scores, win big prizes!'}
            </p>
          </div>
          <Trophy className="w-16 h-16 opacity-50" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
              <Trophy className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {language === 'tr' ? 'Toplam Tahmin' : 'Total Predictions'}
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                {userStats.totalPredictions}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-teal-500 rounded-lg flex items-center justify-center">
              <Star className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {language === 'tr' ? 'Doğru Tahmin' : 'Correct Predictions'}
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                {userStats.correctPredictions}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {language === 'tr' ? 'Başarı Oranı' : 'Accuracy'}
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                %{userStats.accuracy}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-red-500 rounded-lg flex items-center justify-center">
              <Award className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {language === 'tr' ? 'Toplam Kazanç' : 'Total Winnings'}
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                {userStats.totalWinnings}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <Clock className="w-6 h-6 text-green-600" />
              {language === 'tr' ? 'Aktif Maçlar' : 'Active Matches'}
            </h3>
            <div className="space-y-4">
              {activeMatches.map((match) => (
                <div
                  key={match.id}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all"
                >
                  <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white px-4 py-2 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm font-semibold">
                      <Calendar className="w-4 h-4" />
                      {match.league}
                    </div>
                    <div className="text-sm">{match.date} • {match.time}</div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex-1 text-center">
                        <div className="text-4xl mb-2">{match.homeIcon}</div>
                        <div className="font-bold text-lg text-gray-900 dark:text-white">
                          {match.homeTeam}
                        </div>
                      </div>

                      <div className="px-6">
                        <div className="text-4xl font-bold text-gray-400 dark:text-gray-500">VS</div>
                      </div>

                      <div className="flex-1 text-center">
                        <div className="text-4xl mb-2">{match.awayIcon}</div>
                        <div className="font-bold text-lg text-gray-900 dark:text-white">
                          {match.awayTeam}
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 mb-4">
                      <div className="bg-gradient-to-br from-yellow-100 to-orange-100 dark:from-yellow-900/30 dark:to-orange-900/30 rounded-lg p-3 text-center">
                        <div className="text-xs text-gray-600 dark:text-gray-400 mb-1">
                          {language === 'tr' ? 'Ödül' : 'Prize'}
                        </div>
                        <div className="text-lg font-bold text-orange-700 dark:text-orange-300">
                          {match.prize}
                        </div>
                      </div>

                      <div className="bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-lg p-3 text-center">
                        <div className="text-xs text-gray-600 dark:text-gray-400 mb-1">
                          {language === 'tr' ? 'Katılımcı' : 'Participants'}
                        </div>
                        <div className="text-lg font-bold text-purple-700 dark:text-purple-300">
                          {match.participants}
                        </div>
                      </div>

                      <div className="bg-gradient-to-br from-red-100 to-pink-100 dark:from-red-900/30 dark:to-pink-900/30 rounded-lg p-3 text-center">
                        <div className="text-xs text-gray-600 dark:text-gray-400 mb-1">
                          {language === 'tr' ? 'Son' : 'Deadline'}
                        </div>
                        <div className="text-lg font-bold text-red-700 dark:text-red-300">
                          {match.deadline}
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-2 mb-4">
                      <input
                        type="number"
                        min="0"
                        max="9"
                        placeholder="0"
                        className="w-16 h-16 bg-gray-100 dark:bg-gray-700 border-2 border-gray-300 dark:border-gray-600 rounded-lg text-center text-2xl font-bold text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                      <div className="flex items-center justify-center text-3xl font-bold text-gray-400 dark:text-gray-500">
                        :
                      </div>
                      <input
                        type="number"
                        min="0"
                        max="9"
                        placeholder="0"
                        className="w-16 h-16 bg-gray-100 dark:bg-gray-700 border-2 border-gray-300 dark:border-gray-600 rounded-lg text-center text-2xl font-bold text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                      <button className="flex-1 bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white font-bold rounded-lg transition-all">
                        {language === 'tr' ? 'Tahmini Gönder' : 'Submit Prediction'}
                      </button>
                    </div>

                    <div className="text-xs text-gray-500 dark:text-gray-400 text-center">
                      {language === 'tr' ? 'Tahmin ücreti: 100 puan' : 'Prediction cost: 100 points'}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <Award className="w-6 h-6 text-purple-600" />
              {language === 'tr' ? 'Son Sonuçlar' : 'Recent Results'}
            </h3>
            <div className="space-y-3">
              {recentResults.map((result) => (
                <div
                  key={result.id}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900 dark:text-white">
                        {result.homeTeam} vs {result.awayTeam}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {language === 'tr' ? 'Sonuç:' : 'Result:'} {result.homeScore}-{result.awayScore}
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900 dark:text-white">
                        {result.homeScore} - {result.awayScore}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-sm">
                      <span className="text-gray-600 dark:text-gray-400">
                        {language === 'tr' ? 'Tahmin:' : 'Your prediction:'}
                      </span>
                      <span className={`ml-2 font-bold ${
                        result.status === 'won' ? 'text-green-600 dark:text-green-400' :
                        result.status === 'lost' ? 'text-red-600 dark:text-red-400' :
                        'text-orange-600 dark:text-orange-400'
                      }`}>
                        {result.yourPrediction}
                      </span>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs font-bold ${
                      result.status === 'won' ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300' :
                      result.status === 'lost' ? 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300' :
                      'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300'
                    }`}>
                      {result.status === 'won' ? (language === 'tr' ? 'Kazandın!' : 'Won!') :
                       result.status === 'lost' ? (language === 'tr' ? 'Kaybettin' : 'Lost') :
                       (language === 'tr' ? 'Kısmi' : 'Partial')}
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
              <Users className="w-6 h-6 text-green-600" />
              {language === 'tr' ? 'En İyi Tahminler' : 'Top Predictors'}
            </h3>
            <div className="space-y-3">
              {topPredictors.map((predictor) => (
                <div
                  key={predictor.rank}
                  className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-green-500 to-teal-500 rounded-full text-white font-bold text-sm">
                    {predictor.rank}
                  </div>
                  <div className="text-2xl">{predictor.avatar}</div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900 dark:text-white text-sm">
                      {predictor.name}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      {predictor.correctPredictions}/{predictor.totalPredictions} • {predictor.winnings}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold text-green-600 dark:text-green-400">
                      {Math.round((predictor.correctPredictions / predictor.totalPredictions) * 100)}%
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-600 to-teal-600 rounded-xl shadow-lg p-6 text-white">
            <Star className="w-12 h-12 mb-3" />
            <h3 className="text-xl font-bold mb-2">
              {language === 'tr' ? 'Nasıl Çalışır?' : 'How It Works?'}
            </h3>
            <ul className="space-y-2 text-sm text-white/90">
              <li className="flex items-start gap-2">
                <span className="font-bold">1.</span>
                <span>{language === 'tr' ? 'Aktif maçları seç' : 'Choose active matches'}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold">2.</span>
                <span>{language === 'tr' ? 'Skorunu tahmin et' : 'Predict the score'}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold">3.</span>
                <span>{language === 'tr' ? 'Maç bitimini bekle' : 'Wait for match end'}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold">4.</span>
                <span>{language === 'tr' ? 'Doğru tahmin edersen kazan!' : 'Win if you predict correctly!'}</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-yellow-600 to-orange-600 rounded-xl shadow-lg p-6 text-white">
            <Trophy className="w-12 h-12 mb-3" />
            <h3 className="text-xl font-bold mb-2">
              {language === 'tr' ? 'Ödül Sistemi' : 'Prize System'}
            </h3>
            <ul className="space-y-2 text-sm text-white/90">
              <li className="flex items-start gap-2">
                <span>🎯</span>
                <span>{language === 'tr' ? 'Tam skor: Ödülün %100' : 'Exact score: 100% of prize'}</span>
              </li>
              <li className="flex items-start gap-2">
                <span>⚽</span>
                <span>{language === 'tr' ? 'Doğru sonuç: Ödülün %30' : 'Correct result: 30% of prize'}</span>
              </li>
              <li className="flex items-start gap-2">
                <span>🎲</span>
                <span>{language === 'tr' ? 'Her doğru tahminde bonus puan!' : 'Bonus points for each correct prediction!'}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
