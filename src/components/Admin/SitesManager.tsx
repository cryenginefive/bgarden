import { useEffect, useState } from 'react';
import { Plus, CreditCard as Edit, Trash2, ExternalLink, ToggleLeft, ToggleRight, Save, X } from 'lucide-react';
import { supabase } from '../../lib/supabase';

interface Site {
  id: string;
  name: string;
  description: string;
  url: string;
  backlink_url: string;
  logo_url: string;
  banner_url: string;
  category: string;
  rating: number;
  bonus_text: string;
  bonus_amount: string;
  features: string[];
  is_featured: boolean;
  is_live: boolean;
  is_trusted: boolean;
  is_active: boolean;
  display_order: number;
  click_count: number;
}

export const SitesManager = () => {
  const [sites, setSites] = useState<Site[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingSite, setEditingSite] = useState<Site | null>(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    loadSites();
  }, []);

  const loadSites = async () => {
    try {
      const { data, error } = await supabase
        .from('sites')
        .select('*')
        .order('display_order', { ascending: true });

      if (error) throw error;
      setSites(data || []);
    } catch (error) {
      console.error('Error loading sites:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    if (!editingSite) return;

    try {
      const siteData = {
        name: editingSite.name,
        description: editingSite.description,
        url: editingSite.url,
        backlink_url: editingSite.backlink_url,
        logo_url: editingSite.logo_url,
        banner_url: editingSite.banner_url,
        category: editingSite.category,
        rating: editingSite.rating,
        bonus_text: editingSite.bonus_text,
        bonus_amount: editingSite.bonus_amount,
        features: editingSite.features,
        is_featured: editingSite.is_featured,
        is_live: editingSite.is_live,
        is_trusted: editingSite.is_trusted,
        is_active: editingSite.is_active,
        display_order: editingSite.display_order
      };

      if (editingSite.id) {
        const { error } = await supabase
          .from('sites')
          .update(siteData)
          .eq('id', editingSite.id);
        if (error) throw error;
      } else {
        const { error } = await supabase
          .from('sites')
          .insert([siteData]);
        if (error) throw error;
      }

      await loadSites();
      setEditingSite(null);
      setShowForm(false);
    } catch (error) {
      console.error('Error saving site:', error);
      alert('Failed to save site');
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this site?')) return;

    try {
      const { error } = await supabase
        .from('sites')
        .delete()
        .eq('id', id);

      if (error) throw error;
      await loadSites();
    } catch (error) {
      console.error('Error deleting site:', error);
      alert('Failed to delete site');
    }
  };

  const toggleSiteStatus = async (site: Site, field: keyof Site) => {
    try {
      const { error } = await supabase
        .from('sites')
        .update({ [field]: !site[field] })
        .eq('id', site.id);

      if (error) throw error;
      await loadSites();
    } catch (error) {
      console.error('Error toggling site status:', error);
    }
  };

  const newSite = (): Site => ({
    id: '',
    name: '',
    description: '',
    url: '',
    backlink_url: '',
    logo_url: '',
    banner_url: '',
    category: 'trusted',
    rating: 0,
    bonus_text: '',
    bonus_amount: '',
    features: [],
    is_featured: false,
    is_live: false,
    is_trusted: false,
    is_active: true,
    display_order: 0,
    click_count: 0
  });

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Manage Sites
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Add, edit, and manage gambling sites with backlinks
          </p>
        </div>
        <button
          onClick={() => {
            setEditingSite(newSite());
            setShowForm(true);
          }}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
        >
          <Plus className="w-5 h-5" />
          Add New Site
        </button>
      </div>

      {showForm && editingSite && (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              {editingSite.id ? 'Edit Site' : 'Add New Site'}
            </h3>
            <button
              onClick={() => {
                setEditingSite(null);
                setShowForm(false);
              }}
              className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Site Name *
              </label>
              <input
                type="text"
                value={editingSite.name}
                onChange={(e) => setEditingSite({ ...editingSite, name: e.target.value })}
                className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                placeholder="e.g., CasinoX"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Backlink URL * (Where users will be redirected)
              </label>
              <input
                type="url"
                value={editingSite.backlink_url}
                onChange={(e) => setEditingSite({ ...editingSite, backlink_url: e.target.value })}
                className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                placeholder="https://partner-site.com?ref=yourcode"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Display URL
              </label>
              <input
                type="url"
                value={editingSite.url}
                onChange={(e) => setEditingSite({ ...editingSite, url: e.target.value })}
                className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                placeholder="https://example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Category
              </label>
              <select
                value={editingSite.category}
                onChange={(e) => setEditingSite({ ...editingSite, category: e.target.value })}
                className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
              >
                <option value="trusted">Trusted</option>
                <option value="featured">Featured</option>
                <option value="live">Live</option>
                <option value="community">Community</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Logo URL
              </label>
              <input
                type="url"
                value={editingSite.logo_url}
                onChange={(e) => setEditingSite({ ...editingSite, logo_url: e.target.value })}
                className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                placeholder="https://example.com/logo.png"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Rating (0-5)
              </label>
              <input
                type="number"
                min="0"
                max="5"
                step="0.1"
                value={editingSite.rating}
                onChange={(e) => setEditingSite({ ...editingSite, rating: parseFloat(e.target.value) || 0 })}
                className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Bonus Amount
              </label>
              <input
                type="text"
                value={editingSite.bonus_amount}
                onChange={(e) => setEditingSite({ ...editingSite, bonus_amount: e.target.value })}
                className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                placeholder="e.g., 1000 TL"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Display Order
              </label>
              <input
                type="number"
                value={editingSite.display_order}
                onChange={(e) => setEditingSite({ ...editingSite, display_order: parseInt(e.target.value) || 0 })}
                className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Description
            </label>
            <textarea
              value={editingSite.description}
              onChange={(e) => setEditingSite({ ...editingSite, description: e.target.value })}
              rows={3}
              className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
              placeholder="Site description..."
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Bonus Text
            </label>
            <input
              type="text"
              value={editingSite.bonus_text}
              onChange={(e) => setEditingSite({ ...editingSite, bonus_text: e.target.value })}
              className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
              placeholder="e.g., Welcome Bonus"
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={editingSite.is_active}
                onChange={(e) => setEditingSite({ ...editingSite, is_active: e.target.checked })}
                className="w-5 h-5"
              />
              <span className="text-sm text-gray-700 dark:text-gray-300">Active</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={editingSite.is_featured}
                onChange={(e) => setEditingSite({ ...editingSite, is_featured: e.target.checked })}
                className="w-5 h-5"
              />
              <span className="text-sm text-gray-700 dark:text-gray-300">Featured</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={editingSite.is_live}
                onChange={(e) => setEditingSite({ ...editingSite, is_live: e.target.checked })}
                className="w-5 h-5"
              />
              <span className="text-sm text-gray-700 dark:text-gray-300">Live</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={editingSite.is_trusted}
                onChange={(e) => setEditingSite({ ...editingSite, is_trusted: e.target.checked })}
                className="w-5 h-5"
              />
              <span className="text-sm text-gray-700 dark:text-gray-300">Trusted</span>
            </label>
          </div>

          <div className="flex gap-3">
            <button
              onClick={handleSave}
              className="flex items-center gap-2 px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
            >
              <Save className="w-5 h-5" />
              Save Site
            </button>
            <button
              onClick={() => {
                setEditingSite(null);
                setShowForm(false);
              }}
              className="px-6 py-2 bg-gray-300 hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-500 text-gray-900 dark:text-white rounded-lg transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-gray-900">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Site
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Backlink URL
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Clicks
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {sites.map((site) => (
                <tr key={site.id} className="hover:bg-gray-50 dark:hover:bg-gray-900">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-medium text-gray-900 dark:text-white">
                      {site.name}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Rating: {site.rating}/5
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <a
                      href={site.backlink_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm flex items-center gap-1"
                    >
                      {site.backlink_url.slice(0, 40)}...
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300">
                      {site.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                    {site.click_count}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex flex-col gap-1">
                      <button
                        onClick={() => toggleSiteStatus(site, 'is_active')}
                        className="flex items-center gap-1 text-xs"
                      >
                        {site.is_active ? (
                          <ToggleRight className="w-5 h-5 text-green-600" />
                        ) : (
                          <ToggleLeft className="w-5 h-5 text-gray-400" />
                        )}
                        <span className="text-gray-700 dark:text-gray-300">Active</span>
                      </button>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <div className="flex gap-2">
                      <button
                        onClick={() => {
                          setEditingSite(site);
                          setShowForm(true);
                        }}
                        className="p-2 text-blue-600 hover:bg-blue-100 dark:hover:bg-blue-900/30 rounded-lg transition-colors"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(site.id)}
                        className="p-2 text-red-600 hover:bg-red-100 dark:hover:bg-red-900/30 rounded-lg transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
