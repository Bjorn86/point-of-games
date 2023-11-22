import { ReactComponent as Android } from '../../assets/icons/android.svg';
import { ReactComponent as Apple } from '../../assets/icons/apple.svg';
import { ReactComponent as IOS } from '../../assets/icons/ios.svg';
import { ReactComponent as Linux } from '../../assets/icons/linux.svg';
import { ReactComponent as Nintendo } from '../../assets/icons/nintendo.svg';
import { ReactComponent as Playstation } from '../../assets/icons/playstation.svg';
import { ReactComponent as PC } from '../../assets/icons/windows.svg';
import { ReactComponent as Xbox } from '../../assets/icons/xbox.svg';

export const platformsLogo = [
  {
    id: 1,
    logo: <PC title='Windows' key={1} />,
    logoDark: <PC title='Windows' key={1} fill='#fff' />,
  },
  {
    id: 2,
    logo: <Playstation title='Playstation' key={2} />,
    logoDark: <Playstation title='Playstation' key={2} fill='#fff' />,
  },
  {
    id: 3,
    logo: <Xbox title='Xbox' key={3} />,
    logoDark: <Xbox title='Xbox' key={3} fill='#fff' />,
  },
  {
    id: 4,
    logo: <IOS title='iOS' key={4} />,
    logoDark: <IOS title='iOS' key={4} fill='#fff' />,
  },
  {
    id: 5,
    logo: <Apple title='Apple' key={5} />,
    logoDark: <Apple title='Apple' key={5} fill='#fff' />,
  },
  {
    id: 6,
    logo: <Linux title='Linux' key={6} />,
    logoDark: <Linux title='Linux' key={6} fill='#fff' />,
  },
  {
    id: 7,
    logo: <Nintendo title='Nintendo' key={7} />,
    logoDark: <Nintendo title='Nintendo' key={7} fill='#fff' />,
  },
  {
    id: 8,
    logo: <Android title='Android' key={8} />,
    logoDark: <Android title='Android' key={8} fill='#fff' />,
  },
];
