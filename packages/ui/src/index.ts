import BackToTop from './components/BackToTop';
import Footer from './components/Footer';
import Header from './components/Header';
import GoogleAnalytics from './components/GoogleAnalytics';
import Notice from './components/Notice';
import MiniTitle from './components/MiniTitle';
import ContextProviders from './components/Provider/ContextProviders';
import Reveal from './components/Reveal';
import Title from './components/Title';
import { TooltipController } from './components/Tooltip';
import { useTooltip } from './components/Tooltip/Tooltip.hooks';

// Layout components
export const Layout = { BackToTop, Footer, Header, Notice };

// UI components
export const Ui = { TooltipController, Reveal, Title, MiniTitle };

// Providers
export const Providers = { ContextProviders };

// Infra
export const Infra = { GoogleAnalytics };

// Icons
export { Icons } from './icons';

// Font
export { pretendard } from './styles/fonts/pretendard';

// Tooltip
export { useTooltip }