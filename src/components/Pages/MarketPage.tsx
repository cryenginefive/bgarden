import { ShoppingBag, Star, TrendingUp, Zap, Gift, Crown } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

export const MarketPage = () => {
  const { language } = useLanguage();

  const products = [
    {
      id: 1,
      name: language === 'tr' ? '100 Free Spin' : '100 Free Spins',
      description: language === 'tr' ? 'Popüler slot oyunlarında kullan' : 'Use in popular slot games',
      icon: '🎰',
      price: 500,
      originalPrice: 750,
      discount: 33,
      category: 'spins',
      popular: true
    },
    {
      id: 2,
      name: language === 'tr' ? '500 TL Bonus' : '500 TL Bonus',
      description: language === 'tr' ? 'Tüm oyunlarda geçerli' : 'Valid for all games',
      icon: '💰',
      price: 2000,
      originalPrice: 2500,
      discount: 20,
      category: 'bonus',
      popular: true
    },
    {
      id: 3,
      name: language === 'tr' ? 'VIP Üyelik (1 Ay)' : 'VIP Membership (1 Month)',
      description: language === 'tr' ? 'Özel ayrıcalıklar ve bonuslar' : 'Special privileges and bonuses',
      icon: '👑',
      price: 5000,
      originalPrice: 6000,
      discount: 17,
      category: 'vip',
      popular: false
    },
    {
      id: 4,
      name: language === 'tr' ? '250 Free Spin' : '250 Free Spins',
      description: language === 'tr' ? 'Yüksek RTP slotlarda' : 'In high RTP slots',
      icon: '🎡',
      price: 1200,
      originalPrice: 1500,
      discount: 20,
      category: 'spins',
      popular: true
    },
    {
      id: 5,
      name: language === 'tr' ? '1000 TL Bonus' : '1000 TL Bonus',
      description: language === 'tr' ? 'Mega bonus paketi' : 'Mega bonus package',
      icon: '💎',
      price: 3500,
      originalPrice: 4500,
      discount: 22,
      category: 'bonus',
      popular: false
    },
    {
      id: 6,
      name: language === 'tr' ? 'Turnuva Bileti' : 'Tournament Ticket',
      description: language === 'tr' ? 'Premium turnuvalara giriş' : 'Access to premium tournaments',
      icon: '🎫',
      price: 1500,
      originalPrice: 2000,
      discount: 25,
      category: 'ticket',
      popular: false
    },
    {
      id: 7,
      name: language === 'tr' ? '50 Free Spin' : '50 Free Spins',
      description: language === 'tr' ? 'Başlangıç paketi' : 'Starter package',
      icon: '🎯',
      price: 250,
      originalPrice: 350,
      discount: 29,
      category: 'spins',
      popular: false
    },
    {
      id: 8,
      name: language === 'tr' ? '2500 TL Mega Bonus' : '2500 TL Mega Bonus',
      description: language === 'tr' ? 'Özel VIP bonusu' : 'Special VIP bonus',
      icon: '💸',
      price: 8000,
      originalPrice: 10000,
      discount: 20,
      category: 'bonus',
      popular: true
    },
    {
      id: 9,
      name: language === 'tr' ? 'VIP Üyelik (1 Yıl)' : 'VIP Membership (1 Year)',
      description: language === 'tr' ? 'Tüm ayrıcalıklar 12 ay' : 'All privileges for 12 months',
      icon: '🏆',
      price: 50000,
      originalPrice: 60000,
      discount: 17,
      category: 'vip',
      popular: false
    }
  ];

  const userPoints = 12450;

  const categories = [
    { id: 'all', name: language === 'tr' ? 'Tümü' : 'All', icon: ShoppingBag },
    { id: 'spins', name: language === 'tr' ? 'Free Spinler' : 'Free Spins', icon: Zap },
    { id: 'bonus', name: language === 'tr' ? 'Bonuslar' : 'Bonuses', icon: Gift },
    { id: 'vip', name: language === 'tr' ? 'VIP' : 'VIP', icon: Crown },
    { id: 'ticket', name: language === 'tr' ? 'Biletler' : 'Tickets', icon: Star }
  ];

  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-teal-600 to-cyan-600 rounded-xl p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-2">
              {language === 'tr' ? 'Pazar' : 'Market'}
            </h2>
            <p className="text-white/90">
              {language === 'tr' ? 'Puanlarını kullan, ödülleri al!' : 'Use your points, claim rewards!'}
            </p>
          </div>
          <ShoppingBag className="w-16 h-16 opacity-50" />
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            {language === 'tr' ? 'Puanlarım' : 'My Points'}
          </h3>
          <div className="flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-teal-600 dark:text-teal-400" />
            <span className="text-3xl font-bold text-teal-600 dark:text-teal-400">
              {userPoints.toLocaleString()}
            </span>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-teal-100 dark:hover:bg-teal-900/30 text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 rounded-lg transition-all font-medium"
              >
                <Icon className="w-4 h-4" />
                {category.name}
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all"
          >
            {product.popular && (
              <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-center py-1 text-xs font-bold">
                {language === 'tr' ? '🔥 POPÜLER' : '🔥 POPULAR'}
              </div>
            )}

            <div className="p-6">
              <div className="text-center mb-4">
                <div className="text-6xl mb-3">{product.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {product.description}
                </p>
              </div>

              <div className="bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20 rounded-lg p-4 mb-4">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 line-through">
                      {product.originalPrice.toLocaleString()} {language === 'tr' ? 'puan' : 'points'}
                    </div>
                    <div className="text-2xl font-bold text-teal-700 dark:text-teal-300">
                      {product.price.toLocaleString()} {language === 'tr' ? 'puan' : 'points'}
                    </div>
                  </div>
                  <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    -{product.discount}%
                  </div>
                </div>
              </div>

              <button
                disabled={userPoints < product.price}
                className={`w-full py-3 rounded-lg font-bold transition-all ${
                  userPoints >= product.price
                    ? 'bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white'
                    : 'bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed'
                }`}
              >
                {userPoints >= product.price
                  ? language === 'tr' ? 'Satın Al' : 'Buy Now'
                  : language === 'tr' ? 'Yetersiz Puan' : 'Insufficient Points'}
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl p-6 text-white">
          <Star className="w-10 h-10 mb-3" />
          <h3 className="text-xl font-bold mb-2">
            {language === 'tr' ? 'Yeni Ürünler' : 'New Products'}
          </h3>
          <p className="text-white/90 text-sm">
            {language === 'tr' ? 'Her hafta yeni ürünler ekleniyor!' : 'New products added weekly!'}
          </p>
        </div>

        <div className="bg-gradient-to-br from-pink-500 to-purple-500 rounded-xl p-6 text-white">
          <Gift className="w-10 h-10 mb-3" />
          <h3 className="text-xl font-bold mb-2">
            {language === 'tr' ? 'Özel İndirimler' : 'Special Discounts'}
          </h3>
          <p className="text-white/90 text-sm">
            {language === 'tr' ? 'VIP üyeler %20 daha fazla indirim!' : 'VIP members get 20% more discount!'}
          </p>
        </div>

        <div className="bg-gradient-to-br from-green-500 to-teal-500 rounded-xl p-6 text-white">
          <Zap className="w-10 h-10 mb-3" />
          <h3 className="text-xl font-bold mb-2">
            {language === 'tr' ? 'Hızlı Teslimat' : 'Instant Delivery'}
          </h3>
          <p className="text-white/90 text-sm">
            {language === 'tr' ? 'Tüm ürünler anında hesabınıza!' : 'All products instantly to your account!'}
          </p>
        </div>
      </div>
    </div>
  );
};
