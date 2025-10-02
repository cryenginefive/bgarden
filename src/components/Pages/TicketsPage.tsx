import { Ticket, Clock, CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

export const TicketsPage = () => {
  const { language } = useLanguage();

  const tickets = [
    {
      id: 1,
      site: 'Premium Site 1',
      logo: '🎰',
      bonus: '%200 Hoşgeldin Bonusu',
      status: 'active',
      expiresIn: '2d 5h',
      code: 'WELCOME200'
    },
    {
      id: 2,
      site: 'Lucky Casino',
      logo: '🎲',
      bonus: '500 TL Deneme Bonusu',
      status: 'active',
      expiresIn: '5h 30m',
      code: 'TRIAL500'
    },
    {
      id: 3,
      site: 'Royal Poker',
      logo: '🃏',
      bonus: '%150 Yatırım Bonusu',
      status: 'used',
      usedAt: '2 ' + (language === 'tr' ? 'gün önce' : 'days ago'),
      code: 'DEPOSIT150'
    },
    {
      id: 4,
      site: 'Super Slots',
      logo: '🎯',
      bonus: '100 Free Spin',
      status: 'expired',
      expiredAt: '5 ' + (language === 'tr' ? 'gün önce' : 'days ago'),
      code: 'FREESPIN100'
    },
    {
      id: 5,
      site: 'Mega Win',
      logo: '🎪',
      bonus: '%100 Cashback',
      status: 'active',
      expiresIn: '1d 18h',
      code: 'CASHBACK100'
    },
    {
      id: 6,
      site: 'Elite Gaming',
      logo: '🎭',
      bonus: '1000 TL Bonus',
      status: 'active',
      expiresIn: '12h 45m',
      code: 'ELITE1000'
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return {
          icon: AlertCircle,
          text: language === 'tr' ? 'Aktif' : 'Active',
          className: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400',
          iconClassName: 'text-green-600 dark:text-green-400'
        };
      case 'used':
        return {
          icon: CheckCircle,
          text: language === 'tr' ? 'Kullanıldı' : 'Used',
          className: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400',
          iconClassName: 'text-blue-600 dark:text-blue-400'
        };
      case 'expired':
        return {
          icon: XCircle,
          text: language === 'tr' ? 'Süresi Doldu' : 'Expired',
          className: 'bg-gray-100 dark:bg-gray-900/30 text-gray-700 dark:text-gray-400',
          iconClassName: 'text-gray-600 dark:text-gray-400'
        };
      default:
        return {
          icon: AlertCircle,
          text: status,
          className: 'bg-gray-100 dark:bg-gray-900/30 text-gray-700 dark:text-gray-400',
          iconClassName: 'text-gray-600 dark:text-gray-400'
        };
    }
  };

  const activeTickets = tickets.filter(t => t.status === 'active');
  const usedTickets = tickets.filter(t => t.status === 'used');
  const expiredTickets = tickets.filter(t => t.status === 'expired');

  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-xl p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-2">
              {language === 'tr' ? 'Biletlerim' : 'My Tickets'}
            </h2>
            <p className="text-white/90">
              {language === 'tr' ? 'Aktif ve geçmiş bonus biletleriniz' : 'Your active and past bonus tickets'}
            </p>
          </div>
          <Ticket className="w-16 h-16 opacity-50" />
        </div>
      </div>

      {activeTickets.length > 0 && (
        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <AlertCircle className="w-6 h-6 text-green-600" />
            {language === 'tr' ? 'Aktif Biletler' : 'Active Tickets'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {activeTickets.map((ticket) => {
              const statusBadge = getStatusBadge(ticket.status);
              const StatusIcon = statusBadge.icon;

              return (
                <div
                  key={ticket.id}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border-2 border-green-200 dark:border-green-700 p-6 hover:shadow-xl transition-all"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="text-5xl">{ticket.logo}</div>
                      <div>
                        <h4 className="font-bold text-gray-900 dark:text-white">{ticket.site}</h4>
                        <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold ${statusBadge.className}`}>
                          <StatusIcon className={`w-3 h-3 ${statusBadge.iconClassName}`} />
                          {statusBadge.text}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-green-100 to-teal-100 dark:from-green-900/30 dark:to-teal-900/30 rounded-lg p-4 mb-4">
                    <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                      {language === 'tr' ? 'Bonus' : 'Bonus'}
                    </div>
                    <div className="text-xl font-bold text-green-700 dark:text-green-300">
                      {ticket.bonus}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-orange-600 dark:text-orange-400 mb-4">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm font-medium">
                      {language === 'tr' ? 'Kalan Süre:' : 'Expires in:'} {ticket.expiresIn}
                    </span>
                  </div>

                  <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-3 mb-4">
                    <div className="text-xs text-gray-600 dark:text-gray-400 mb-1">
                      {language === 'tr' ? 'Bonus Kodu' : 'Bonus Code'}
                    </div>
                    <div className="font-mono font-bold text-gray-900 dark:text-white text-lg">
                      {ticket.code}
                    </div>
                  </div>

                  <button className="w-full bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white font-bold py-3 rounded-lg transition-all">
                    {language === 'tr' ? 'Kullan' : 'Use Now'}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {usedTickets.length > 0 && (
        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <CheckCircle className="w-6 h-6 text-blue-600" />
            {language === 'tr' ? 'Kullanılan Biletler' : 'Used Tickets'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {usedTickets.map((ticket) => {
              const statusBadge = getStatusBadge(ticket.status);
              const StatusIcon = statusBadge.icon;

              return (
                <div
                  key={ticket.id}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 p-4"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div className="text-3xl">{ticket.logo}</div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 dark:text-white text-sm">{ticket.site}</h4>
                      <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold ${statusBadge.className} w-fit`}>
                        <StatusIcon className={`w-3 h-3 ${statusBadge.iconClassName}`} />
                        {statusBadge.text}
                      </div>
                    </div>
                  </div>

                  <div className="text-sm text-gray-700 dark:text-gray-300 mb-2">{ticket.bonus}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    {language === 'tr' ? 'Kullanıldı:' : 'Used:'} {ticket.usedAt}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {expiredTickets.length > 0 && (
        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <XCircle className="w-6 h-6 text-gray-600" />
            {language === 'tr' ? 'Süresi Dolmuş Biletler' : 'Expired Tickets'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {expiredTickets.map((ticket) => {
              const statusBadge = getStatusBadge(ticket.status);
              const StatusIcon = statusBadge.icon;

              return (
                <div
                  key={ticket.id}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 p-4 opacity-60"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div className="text-3xl grayscale">{ticket.logo}</div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 dark:text-white text-sm">{ticket.site}</h4>
                      <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold ${statusBadge.className} w-fit`}>
                        <StatusIcon className={`w-3 h-3 ${statusBadge.iconClassName}`} />
                        {statusBadge.text}
                      </div>
                    </div>
                  </div>

                  <div className="text-sm text-gray-700 dark:text-gray-300 mb-2">{ticket.bonus}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    {language === 'tr' ? 'Süresi Doldu:' : 'Expired:'} {ticket.expiredAt}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
