import { ReactComponent as Android } from '../../assets/icons/android.svg';
import { ReactComponent as Apple } from '../../assets/icons/apple.svg';
import { ReactComponent as IOS } from '../../assets/icons/ios.svg';
import { ReactComponent as Linux } from '../../assets/icons/linux.svg';
import { ReactComponent as Nintendo } from '../../assets/icons/nintendo.svg';
import { ReactComponent as Playstation } from '../../assets/icons/playstation.svg';
import { ReactComponent as PC } from '../../assets/icons/windows.svg';
import { ReactComponent as Xbox } from '../../assets/icons/xbox.svg';
import { ReactComponent as Atari } from '../../assets/icons/atari.svg';
import { ReactComponent as CommondoreAmiga } from '../../assets/icons/commodore-amiga.svg';
import { ReactComponent as Sega } from '../../assets/icons/sega.svg';
import { ReactComponent as P3DO } from '../../assets/icons/3do.svg';
import { ReactComponent as Web } from '../../assets/icons/globe.svg';

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
    logo: <Apple title='Apple Macintosh' key={5} />,
    logoDark: <Apple title='Apple Macintosh' key={5} fill='#fff' />,
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
  {
    id: 9,
    logo: <Atari title='Atari' key={9} />,
    logoDark: <Atari title='Atari' key={9} fill='#fff' />,
  },
  {
    id: 10,
    logo: <CommondoreAmiga title='Commodore / Amiga' key={10} />,
    logoDark: (
      <CommondoreAmiga title='Commodore / Amiga' key={10} fill='#fff' />
    ),
  },
  {
    id: 11,
    logo: <Sega title='Sega' key={11} />,
    logoDark: <Sega title='Sega' key={11} fill='#fff' />,
  },
  {
    id: 12,
    logo: <P3DO title='3DO' key={12} />,
    logoDark: <P3DO title='3DO' key={12} fill='#fff' />,
  },
  {
    id: 13,
    logo: <Nintendo title='Neo-Geo' key={13} />,
    logoDark: <Nintendo title='Neo-Geo' key={13} fill='#fff' />,
  },
  {
    id: 14,
    logo: <Web title='Web' key={14} />,
    logoDark: <Web title='Web' key={14} fill='#fff' />,
  },
];
