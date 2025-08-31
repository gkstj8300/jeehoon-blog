import BackToTop from './components/BackToTop';
import Footer from './components/Footer';
import Header from './components/Header';
import Notice from './components/Notice';
import MainLoaderProvider from './components/MainLoader';
import { TooltipController, TooltipProvider } from './components/Tooltip';

// Layout components
export const Layout = { BackToTop, Footer, Header, Notice };

// Ui components
export const Ui = {
  MainLoaderProvider, 
  TooltipController, 
  TooltipProvider 
};

// React Icons
export { Icons } from './icons';