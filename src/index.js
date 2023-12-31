import { h, render } from 'preact';
import { useEffect, useState } from 'preact/hooks';

// components
import Badge from './components/Badge';

// helpers
import initUser from './helpers/userInit';
import selectorsInit from './helpers/selectorsInit';
import pageLoadEvent from './helpers/eventControllers/pageLoadEvent';
import initDataLayerEvents from './helpers/eventControllers/initDataLayerEvents';

// assets
import './assets/styles/index.scss';

function App() {
  const [isStylesLoaded, setIsStylesLoaded] = useState(false);
  
  useEffect(() => {
    initUser().then(() => {
      pageLoadEvent();
      initDataLayerEvents();
    });

    selectorsInit();
  
    const styleLink = document.createElement('link');
    styleLink.rel = 'stylesheet';
    styleLink.href = 'https://d2n1rbeywfufu8.cloudfront.net/index.css';
    styleLink.onload = () => setIsStylesLoaded(true);
  
    document.head.appendChild(styleLink);
  }, []);

  if (!isStylesLoaded) {
    return null;
  }

  return <Badge label="Feedback"/>;
}

render(<App />, document.body);
