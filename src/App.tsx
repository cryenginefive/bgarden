import { useState, useEffect } from 'react';
import { AuthProvider } from './contexts/AuthContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import { Header } from './components/Layout/Header';
import { Sidebar } from './components/Layout/Sidebar';
import { PageContent } from './components/Pages/PageContent';
import { AuthModal } from './components/Auth/AuthModal';
import { AdminPage } from './components/Admin/AdminPage';

function AppContent() {
  const [activePage, setActivePage] = useState('trusted');
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [isAdminRoute, setIsAdminRoute] = useState(false);

  useEffect(() => {
    const checkRoute = () => {
      setIsAdminRoute(window.location.pathname === '/admin');
    };

    checkRoute();
    window.addEventListener('popstate', checkRoute);
    return () => window.removeEventListener('popstate', checkRoute);
  }, []);

  if (isAdminRoute) {
    return <AdminPage />;
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <Header onAuthClick={() => setShowAuthModal(true)} />

      <div className="flex">
        <Sidebar activePage={activePage} onNavigate={setActivePage} />

        <main className="flex-1 overflow-y-auto">
          <PageContent page={activePage} />
        </main>
      </div>

      {showAuthModal && (
        <AuthModal onClose={() => setShowAuthModal(false)} />
      )}
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <LanguageProvider>
          <AppContent />
        </LanguageProvider>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
