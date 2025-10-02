import { useEffect, useState } from 'react';
import { TrendingUp, MousePointerClick, Globe, Users } from 'lucide-react';
import { supabase } from '../../lib/supabase';

export const AdminDashboard = () => {
  const [stats, setStats] = useState({
    totalSites: 0,
    activeSites: 0,
    totalClicks: 0,
    clicksToday: 0
  });
  const [loading, setLoading] = useState(true);
  const [recentClicks, setRecentClicks] = useState<any[]>([]);

  useEffect(() => {
    loadDashboardData();
  }, []);

  const loadDashboardData = async () => {
    try {
      const [sitesResult, clicksResult, todayClicksResult, recentClicksResult] = await Promise.all([
        supabase.from('sites').select('id, is_active'),
        supabase.from('site_clicks').select('id', { count: 'exact' }),
        supabase.from('site_clicks')
          .select('id', { count: 'exact' })
          .gte('clicked_at', new Date(new Date().setHours(0, 0, 0, 0)).toISOString()),
        supabase.from('site_clicks')
          .select('*, sites(name)')
          .order('clicked_at', { ascending: false })
          .limit(10)
      ]);

      if (sitesResult.data) {
        setStats(prev => ({
          ...prev,
          totalSites: sitesResult.data.length,
          activeSites: sitesResult.data.filter((s: any) => s.is_active).length
        }));
      }

      if (clicksResult.count !== null) {
        setStats(prev => ({ ...prev, totalClicks: clicksResult.count || 0 }));
      }

      if (todayClicksResult.count !== null) {
        setStats(prev => ({ ...prev, clicksToday: todayClicksResult.count || 0 }));
      }

      if (recentClicksResult.data) {
        setRecentClicks(recentClicksResult.data);
      }
    } catch (error) {
      console.error('Error loading dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Dashboard Overview
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Monitor your site performance and statistics
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
              <Globe className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
          </div>
          <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
            {stats.totalSites}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Total Sites
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
          </div>
          <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
            {stats.activeSites}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Active Sites
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
              <MousePointerClick className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
          </div>
          <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
            {stats.totalClicks}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Total Clicks
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-orange-600 dark:text-orange-400" />
            </div>
          </div>
          <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
            {stats.clicksToday}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Clicks Today
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            Recent Activity
          </h3>
        </div>
        <div className="p-6">
          {recentClicks.length === 0 ? (
            <p className="text-gray-600 dark:text-gray-400 text-center py-8">
              No recent activity
            </p>
          ) : (
            <div className="space-y-3">
              {recentClicks.map((click) => (
                <div
                  key={click.id}
                  className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-900 rounded-lg"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                      <MousePointerClick className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900 dark:text-white">
                        {click.sites?.name || 'Unknown Site'}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {click.ip_address || 'Unknown IP'}
                      </div>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {new Date(click.clicked_at).toLocaleString()}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
