import { useLanguage } from '../../contexts/LanguageContext';
import { TrustedSitesPage } from '../TrustedSites/TrustedSitesPage';
import { FeaturedSitesPage } from './FeaturedSitesPage';
import { LiveSitesPage } from './LiveSitesPage';
import { BonusesPage } from './BonusesPage';
import { GiveawaysPage } from './GiveawaysPage';
import { TicketsPage } from './TicketsPage';
import { CommunityPage } from './CommunityPage';
import { SpecialEventsPage } from './SpecialEventsPage';
import { PointsPage } from './PointsPage';
import { WheelOfFortunePage } from './WheelOfFortunePage';
import { MarketPage } from './MarketPage';
import { StreamsPage } from './StreamsPage';
import { ScorePredictionPage } from './ScorePredictionPage';

interface PageContentProps {
  page: string;
}

export const PageContent = ({ page }: PageContentProps) => {
  const { t, language } = useLanguage();

  if (page === 'trusted') {
    return (
      <div className="p-6">
        <TrustedSitesPage />
      </div>
    );
  }

  if (page === 'featured') {
    return (
      <div className="p-6">
        <FeaturedSitesPage />
      </div>
    );
  }

  if (page === 'live') {
    return (
      <div className="p-6">
        <LiveSitesPage />
      </div>
    );
  }

  if (page === 'bonuses' || page === 'trial_bonuses') {
    return (
      <div className="p-6">
        <BonusesPage />
      </div>
    );
  }

  if (page === 'giveaways') {
    return (
      <div className="p-6">
        <GiveawaysPage />
      </div>
    );
  }

  if (page === 'tickets') {
    return (
      <div className="p-6">
        <TicketsPage />
      </div>
    );
  }

  if (page === 'community') {
    return (
      <div className="p-6">
        <CommunityPage />
      </div>
    );
  }

  if (page === 'special_events') {
    return (
      <div className="p-6">
        <SpecialEventsPage />
      </div>
    );
  }

  if (page === 'points') {
    return (
      <div className="p-6">
        <PointsPage />
      </div>
    );
  }

  if (page === 'wheel_of_fortune') {
    return (
      <div className="p-6">
        <WheelOfFortunePage />
      </div>
    );
  }

  if (page === 'market') {
    return (
      <div className="p-6">
        <MarketPage />
      </div>
    );
  }

  if (page === 'streams') {
    return (
      <div className="p-6">
        <StreamsPage />
      </div>
    );
  }

  if (page === 'score_prediction') {
    return (
      <div className="p-6">
        <ScorePredictionPage />
      </div>
    );
  }

  const getPageTitle = () => {
    switch (page) {
      case 'trusted':
        return t('trusted_sites');
      case 'featured':
        return t('featured_sites');
      case 'live':
        return t('live_sites');
      case 'community':
        return t('community');
      case 'giveaways':
        return t('giveaways');
      case 'tickets':
        return t('tickets');
      case 'score_prediction':
        return t('score_prediction');
      case 'bonuses':
        return t('bonuses');
      case 'trial_bonuses':
        return t('trial_bonuses');
      case 'daily_rewards':
        return t('daily_rewards');
      case 'special_events':
        return t('special_events');
      case 'points':
        return t('points');
      case 'wheel_of_fortune':
        return t('wheel_of_fortune');
      case 'market':
        return t('market');
      case 'streams':
        return t('streams');
      case 'help_center':
        return t('help_center');
      default:
        return t('trusted_sites');
    }
  };

  const getPageDescription = () => {
    if (language === 'tr') {
      switch (page) {
        case 'trusted':
          return 'Güvenilir ve doğrulanmış kumar sitelerini keşfedin.';
        case 'featured':
          return 'Özel olarak seçilmiş ve önerilen premium siteler.';
        case 'live':
          return 'Şu anda yayında olan ve aktif olarak oynanan siteler.';
        case 'community':
          return 'Topluluğumuzla bağlantı kurun ve deneyimlerinizi paylaşın.';
        case 'giveaways':
          return 'Heyecan verici çekilişlere katılın ve ödüller kazanın.';
        case 'tickets':
          return 'Biletlerinizi görüntüleyin ve yönetin.';
        case 'score_prediction':
          return 'Maç skorlarını tahmin edin ve ödüller kazanın.';
        case 'bonuses':
          return 'Mevcut bonus tekliflerini keşfedin.';
        case 'trial_bonuses':
          return 'Risk olmadan deneme bonuslarını deneyin.';
        case 'daily_rewards':
          return 'Her gün giriş yapın ve özel ödüller kazanın.';
        case 'special_events':
          return 'Özel etkinliklere katılın ve büyük ödüller kazanın.';
        case 'points':
          return 'Puanlarınızı görüntüleyin ve değerli ödüller için kullanın.';
        case 'wheel_of_fortune':
          return 'Çarkı çevirin ve şansınızı deneyin.';
        case 'market':
          return 'Puanlarınızla özel ürünler ve bonuslar satın alın.';
        case 'streams':
          return 'Canlı yayınları izleyin ve topluluğumuzla etkileşime geçin.';
        case 'help_center':
          return 'Sorularınıza cevap bulun ve destek alın.';
        default:
          return 'İçerik yükleniyor...';
      }
    } else {
      switch (page) {
        case 'trusted':
          return 'Discover trusted and verified gambling sites.';
        case 'featured':
          return 'Specially selected and recommended premium sites.';
        case 'live':
          return 'Sites that are currently live and actively being played.';
        case 'community':
          return 'Connect with our community and share your experiences.';
        case 'giveaways':
          return 'Participate in exciting giveaways and win prizes.';
        case 'tickets':
          return 'View and manage your tickets.';
        case 'score_prediction':
          return 'Predict match scores and win rewards.';
        case 'bonuses':
          return 'Explore available bonus offers.';
        case 'trial_bonuses':
          return 'Try trial bonuses without risk.';
        case 'daily_rewards':
          return 'Login daily and earn special rewards.';
        case 'special_events':
          return 'Join special events and win big prizes.';
        case 'points':
          return 'View your points and use them for valuable rewards.';
        case 'wheel_of_fortune':
          return 'Spin the wheel and try your luck.';
        case 'market':
          return 'Purchase special items and bonuses with your points.';
        case 'streams':
          return 'Watch live streams and interact with our community.';
        case 'help_center':
          return 'Find answers to your questions and get support.';
        default:
          return 'Loading content...';
      }
    }
  };

  return (
    <div className="p-6">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          {getPageTitle()}
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          {getPageDescription()}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div
            key={item}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-700 p-6"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-green-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">{item}</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  {language === 'tr' ? 'Örnek İçerik' : 'Sample Content'} {item}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {language === 'tr' ? 'Açıklama' : 'Description'}
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              {language === 'tr'
                ? 'Bu bölüm için içerik yakında eklenecektir. Şimdilik bu örnek kartı görebilirsiniz.'
                : 'Content for this section will be added soon. For now, you can see this sample card.'}
            </p>
            <button className="w-full px-4 py-2 bg-gradient-to-r from-purple-600 to-green-600 hover:from-purple-700 hover:to-green-700 text-white rounded-lg transition-all font-medium">
              {language === 'tr' ? 'Detaylar' : 'Details'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
