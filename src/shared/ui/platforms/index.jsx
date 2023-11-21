import PropTypes from 'prop-types';
import { memo } from 'react';
import { useTheme } from 'shared/lib/use-theme';
import { platformsLogo } from './config';
import s from './platforms.module.scss';

function Platforms({ platforms }) {
  const theme = useTheme();

  const renderPlatformsLogo = () =>
    platforms.map((platform) => {
      const logoIcon = platformsLogo.find(
        (logotype) => logotype.id === platform.platform.id,
      );
      return theme === 'dark' ? logoIcon.logoDark : logoIcon.logo;
    });

  return <div className={s.wrapper}>{renderPlatformsLogo()}</div>;
}

export default memo(Platforms);

Platforms.propTypes = {
  platforms: PropTypes.arrayOf(PropTypes.object).isRequired,
};
