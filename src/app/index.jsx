import { Routing } from 'pages';
import { commands } from 'features/console/lib/commands';
import { point } from 'features/console';
import { withProviders } from './providers';
import s from './app.module.scss';
import { store } from './store';
import './index.scss';

window.point = point(store.dispatch);
window.point(commands.init);

function App() {
  return (
    <div className={s.container}>
      <Routing />
    </div>
  );
}

export default withProviders(App);
