// FIX: A função 'lazy' precisa ser importada do React para funcionar.
import React, { Suspense, lazy } from 'react';
// FIX: O hook 'useAuth' é exportado de 'hooks/use-auth', não do provider.
import { AuthProvider } from './components/providers/auth-provider';
import { useAuth } from './hooks/use-auth';
import { ThemeProvider } from './components/providers/theme-provider';
import { Toaster } from './components/ui/toaster';
import MainLayout from './components/MainLayout';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// FIX: O componente DashboardSkeleton foi movido para a pasta 'pages'.
import DashboardSkeleton from './pages/DashboardSkeleton';
import './index.css';

// Lazy load pages for code-splitting and better performance
// FIX: Os caminhos de importação foram atualizados para refletir a estrutura de arquivos atual.
const LoginPage = lazy(() => import('./pages/LoginPage'));
const DashboardPage = lazy(() => import('./features/dashboard/DashboardPage'));
const InboxPage = lazy(() => import('./features/inbox/InboxPage'));
const TicketsPage = lazy(() => import('./pages/TicketsPage'));
const ReportsPage = lazy(() => import('./features/reports/ReportsPage'));
const KnowledgeBasePage = lazy(() => import('./pages/KnowledgeBasePage'));
const AuditPage = lazy(() => import('./features/audit/AuditPage'));
const SettingsPage = lazy(() => import('./pages/SettingsPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));
const UsersPage = lazy(() => import('./features/users/UsersPage'));
const TeamChatPage = lazy(() => import('./components/team-chat/TeamChatPage'));


const AppRoutes: React.FC = () => {
    const { user, loading } = useAuth();

    if (loading) {
        return <DashboardSkeleton />;
    }

    return (
        <Routes>
            {!user ? (
                <>
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="*" element={<Navigate to="/login" />} />
                </>
            ) : (
                <Route element={<MainLayout />}>
                    <Route path="/" element={<DashboardPage />} />
                    <Route path="/inbox" element={<InboxPage />} />
                    <Route path="/tickets" element={<TicketsPage />} />
                    <Route path="/reports" element={<ReportsPage />} />
                    <Route path="/kb" element={<KnowledgeBasePage />} />
                    <Route path="/audits" element={<AuditPage />} />
                    <Route path="/settings" element={<SettingsPage />} />
                    <Route path="/users" element={<UsersPage />} />
                    <Route path="/team-chat" element={<TeamChatPage />} />

                    {/* Rota padrão para usuários logados */}
                    <Route path="/login" element={<Navigate to="/" />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Route>
            )}
        </Routes>
    );
};

const App: React.FC = () => {
    return (
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <BrowserRouter>
                <AuthProvider>
                    <Suspense fallback={<DashboardSkeleton />}>
                        <AppRoutes />
                    </Suspense>
                    <Toaster />
                </AuthProvider>
            </BrowserRouter>
        </ThemeProvider>
    );
};

export default App;
