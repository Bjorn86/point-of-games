// IMPORT ROUTING
import { Routing } from 'pages';

// IMPORT PROVIDERS
import { withProviders } from './providers';

// IMPORT STYLES
import s from './app.module.scss';
import './index.scss';

// APP CORE COMPONENT
function App() {
  return (
    <div className={s.container}>
      <Routing />
    </div>
  );
}

export default withProviders(App);
