import {
  Shield,
  Star,
  Radio,
  Users,
  Gift,
  Ticket,
  Trophy,
  DollarSign,
  Sparkles,
  Calendar,
  Zap,
  TrendingUp,
  CircleDollarSign,
  ShoppingBag,
  Video,
  HelpCircle,
  ChevronDown,
  ChevronRight,
  TicketPercent
} from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

interface SidebarProps {
  activePage: string;
  onNavigate: (page: string) => void;
}

export const Sidebar = ({ activePage, onNavigate }: SidebarProps) => {
  const { t } = useLanguage();
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    rewards: true,
    entertainment: true
  });

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const mainSections = [
    { id: 'trusted', icon: Shield, label: t('trusted_sites') },
    { id: 'featured', icon: Star, label: t('featured_sites') },
    { id: 'live', icon: Radio, label: t('live_sites') },
    { id: 'community', icon: Users, label: t('community') }
  ];

  const rewardsSections = [
    { id: 'giveaways', icon: Gift, label: t('giveaways') },
    { id: 'score_prediction', icon: Trophy, label: t('score_prediction') },
    { id: 'bonuses', icon: DollarSign, label: t('bonuses') },
    { id: 'trial_bonuses', icon: Sparkles, label: t('trial_bonuses') },
    { id: 'daily_rewards', icon: Calendar, label: t('daily_rewards') }
  ];

  const entertainmentSections = [
    { id: 'special_events', icon: Zap, label: t('special_events') },
    { id: 'points', icon: TrendingUp, label: t('points') },
    { id: 'wheel_of_fortune', icon: CircleDollarSign, label: t('wheel_of_fortune') },
    { id: 'market', icon: ShoppingBag, label: t('market') },
    { id: 'streams', icon: Video, label: t('streams') }
  ];

  return (
    <aside className="hidden lg:block w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 h-screen overflow-y-auto sticky top-0">
      <div className="p-4">
        <nav className="space-y-1">
          {mainSections.map((section) => {
            const Icon = section.icon;
            return (
              <button
                key={section.id}
                onClick={() => onNavigate(section.id)}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                  activePage === section.id
                    ? 'bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="text-sm font-medium">{section.label}</span>
              </button>
            );
          })}

          <div className="pt-4">
            <button
              onClick={() => toggleSection('rewards')}
              className="w-full flex items-center justify-between px-3 py-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider hover:text-gray-700 dark:hover:text-gray-200"
            >
              <span>{t('rewards')}</span>
              {expandedSections.rewards ? (
                <ChevronDown className="w-4 h-4" />
              ) : (
                <ChevronRight className="w-4 h-4" />
              )}
            </button>
            {expandedSections.rewards && (
              <div className="space-y-1 mt-1">
                {rewardsSections.map((section) => {
                  const Icon = section.icon;
                  return (
                    <button
                      key={section.id}
                      onClick={() => onNavigate(section.id)}
                      className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                        activePage === section.id
                          ? 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="text-sm font-medium">{section.label}</span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          <div className="pt-4">
            <button
              onClick={() => toggleSection('entertainment')}
              className="w-full flex items-center justify-between px-3 py-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider hover:text-gray-700 dark:hover:text-gray-200"
            >
              <span>{t('entertainment')}</span>
              {expandedSections.entertainment ? (
                <ChevronDown className="w-4 h-4" />
              ) : (
                <ChevronRight className="w-4 h-4" />
              )}
            </button>
            {expandedSections.entertainment && (
              <div className="space-y-1 mt-1">
                {entertainmentSections.map((section) => {
                  const Icon = section.icon;
                  return (
                    <button
                      key={section.id}
                      onClick={() => onNavigate(section.id)}
                      className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                        activePage === section.id
                          ? 'bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="text-sm font-medium">{section.label}</span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
            <button
              onClick={() => onNavigate('tickets')}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                activePage === 'tickets'
                  ? 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              <TicketPercent className="w-5 h-5" />
              <span className="text-sm font-medium">{t('tickets')}</span>
            </button>
          </div>

          <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
            <div className="px-3 py-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              {t('support')}
            </div>
            <button
              onClick={() => onNavigate('help_center')}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                activePage === 'help_center'
                  ? 'bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              <HelpCircle className="w-5 h-5" />
              <span className="text-sm font-medium">{t('help_center')}</span>
            </button>
          </div>
        </nav>
      </div>
    </aside>
  );
};
