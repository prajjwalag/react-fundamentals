import { createRoot } from 'react-dom/client';
import './index.css'
import './profile.css'
import Header from './Header';
import MainBody from './MainBody';
import Footer from './Footer';

const rootElement = document.getElementById('root');

const rootDom = createRoot(rootElement);

rootDom.render(
  <> 
    
    <Header/>
    <MainBody/>
    <Footer/>
    
  </>
)
