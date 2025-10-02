import { Twitter, Facebook, Instagram, Youtube, MessageCircle, Send } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

export const SocialSection = () => {
  const { language } = useLanguage();

  const socials = [
    {
      id: 1,
      name: 'Twitter',
      icon: Twitter,
      followers: '125K',
      color: 'from-blue-400 to-blue-600',
      hoverColor: 'hover:from-blue-500 hover:to-blue-700'
    },
    {
      id: 2,
      name: 'Facebook',
      icon: Facebook,
      followers: '98K',
      color: 'from-blue-600 to-blue-800',
      hoverColor: 'hover:from-blue-700 hover:to-blue-900'
    },
    {
      id: 3,
      name: 'Instagram',
      icon: Instagram,
      followers: '156K',
      color: 'from-pink-500 to-purple-600',
      hoverColor: 'hover:from-pink-600 hover:to-purple-700'
    },
    {
      id: 4,
      name: 'YouTube',
      icon: Youtube,
      followers: '87K',
      color: 'from-red-500 to-red-700',
      hoverColor: 'hover:from-red-600 hover:to-red-800'
    },
    {
      id: 5,
      name: 'Discord',
      icon: MessageCircle,
      followers: '45K',
      color: 'from-indigo-500 to-indigo-700',
      hoverColor: 'hover:from-indigo-600 hover:to-indigo-800'
    },
    {
      id: 6,
      name: 'Telegram',
      icon: Send,
      followers: '72K',
      color: 'from-blue-400 to-blue-600',
      hoverColor: 'hover:from-blue-500 hover:to-blue-700'
    }
  ];

  return (
    <div className="mb-8">
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        {language === 'tr' ? 'Sosyal Medya' : 'Social Media'}
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {socials.map((social) => {
          const Icon = social.icon;
          return (
            <div
              key={social.id}
              className={`relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 cursor-pointer group`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${social.color} ${social.hoverColor} transition-all duration-300`}></div>

              <div className="relative p-6 text-white text-center">
                <Icon className="w-10 h-10 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <h4 className="font-bold text-lg mb-1">{social.name}</h4>
                <p className="text-white/90 text-sm">
                  {social.followers} {language === 'tr' ? 'Takipçi' : 'Followers'}
                </p>
              </div>

              <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-white/10 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
