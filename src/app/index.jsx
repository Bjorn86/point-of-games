import Routing from 'pages';
import { withProviders } from './providers';
import s from './app.module.scss';
import './index.scss';

function App() {
  return (
    <div className={s.container}>
      <Routing />
    </div>
  );
}

export default withProviders(App);
