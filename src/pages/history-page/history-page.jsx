import { useSelector } from 'react-redux';
import { memo } from 'react';
import clsx from 'clsx';
import { selectHistory, selectIsUserLoading } from 'entities/user';
import { HistoryTable } from 'features/history/table';
import { useTheme } from 'shared/lib/use-theme';
import { Preloader } from 'widgets/preloader';
import { Section } from 'widgets/section';
import s from './history-page.module.scss';

function HistoryPage() {
  const theme = useTheme();
  const history = useSelector(selectHistory);
  const isUserLoading = useSelector(selectIsUserLoading);

  return isUserLoading ? (
    <Preloader />
  ) : (
    <Section title='History'>
      {history.length ? (
        <HistoryTable data={history} />
      ) : (
        <h2 className={clsx(s.title, { [s.titleDark]: theme === 'dark' })}>
          Your search history is empty
        </h2>
      )}
    </Section>
  );
}

export default memo(HistoryPage);
