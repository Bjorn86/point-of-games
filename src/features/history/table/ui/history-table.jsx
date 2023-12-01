import { Table, Column } from 'react-virtualized';
import { memo, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { deletedFromHistory } from 'features/history/model/deleted-from-history';
import { ReactComponent as Trash } from 'shared/ui/assets/icons/trash.svg';
import { useTheme } from 'shared/lib/use-theme';
import Button from 'shared/ui/button/button';
import { formatDate } from '../lib/utils';
/* Не используются CSS Module потому что они не поддерживаются в React Virtualized */
import './history-table.scss';

function HistoryTable({ data }) {
  const theme = useTheme();
  const dispatch = useDispatch();

  const rowGetter = ({ index }) => data[index];

  const renderNumber = ({ rowIndex }) => rowIndex + 1;

  const renderLink = ({ rowData }) => {
    const encodedQuery = encodeURIComponent(rowData.query);

    return (
      <Link
        to={`/search?query=${encodedQuery}`}
        className={clsx('table__link', {
          table__link_theme_dark: theme === 'dark',
        })}
      >
        {rowData.query}
      </Link>
    );
  };

  const removeRecord = useCallback(
    (query) => {
      dispatch(deletedFromHistory(query));
    },
    [dispatch],
  );

  const renderDeleteButton = ({ rowData }) => (
    <Button
      view='rounded'
      content={theme === 'dark' ? <Trash fill='#fff' /> : <Trash />}
      alt='Delete from history'
      onClick={() => removeRecord(rowData)}
    />
  );

  return (
    <Table
      width={1400}
      height={550}
      headerHeight={50}
      rowHeight={40}
      rowCount={data.length}
      rowGetter={rowGetter}
      rowClassName='table__row'
      headerClassName={clsx('table__header', {
        table__header_theme_dark: theme === 'dark',
      })}
    >
      <Column
        label='№'
        dataKey='index'
        width={150}
        cellRenderer={renderNumber}
        className={clsx('table__column', 'table__column_position_center', {
          table__column_theme_dark: theme === 'dark',
        })}
      />
      <Column
        label='Search query'
        dataKey='query'
        width={900}
        cellRenderer={renderLink}
        className={clsx('table__column', {
          table__column_theme_dark: theme === 'dark',
        })}
      />
      <Column
        label='Date'
        dataKey='date'
        width={200}
        cellRenderer={({ cellData }) => formatDate(cellData)}
        className={clsx('table__column', 'table__column_position_center', {
          table__column_theme_dark: theme === 'dark',
        })}
      />
      <Column
        label='Actions'
        dataKey='actions'
        width={150}
        cellRenderer={renderDeleteButton}
        className={clsx('table__column', 'table__column_position_center', {
          table__column_theme_dark: theme === 'dark',
        })}
      />
    </Table>
  );
}

export default memo(HistoryTable);

HistoryTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};
