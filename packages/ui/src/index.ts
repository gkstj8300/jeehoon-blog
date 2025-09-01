import BackToTop from './components/BackToTop';
import Footer from './components/Footer';
import Header from './components/Header';
import Notice from './components/Notice';
import ContextProviders from './components/Provider/ContextProviders';
import { TooltipController } from './components/Tooltip';
import GoogleAnalytics from './components/GoogleAnalytics';

// Layout components
export const Layout = { BackToTop, Footer, Header, Notice };

// UI components
export const Ui = { TooltipController };

// Providers
export const Providers = { ContextProviders };

// Infra
export const Infra = { GoogleAnalytics };

// Icons
export { Icons } from './icons';

// Font
export { pretendard } from './styles/fonts/pretendard';