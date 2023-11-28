import { useCallback, useEffect, useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { searchValidationSchema } from 'shared/model/search-validation-schema';
import { addToHistory } from 'features/history/model/add-to-history';
import { useDebounce } from 'shared/lib/use-debounce';
import Input from 'shared/ui/input/input';
import Form from 'shared/ui/form/form';
import SuggestionsList from '../suggestions-list/suggestions-list';
import s from './search-form.module.scss';

export function SearchForm({ lastQuery }) {
  const [suggestionsIsShown, setSuggestionsShown] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { control, handleSubmit, watch } = useForm({
    defaultValues: {
      search: lastQuery || '',
    },
    mode: 'onBlur',
    resolver: yupResolver(searchValidationSchema),
  });
  const debouncedQuery = useDebounce(watch('search').trim(), 500);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = useCallback(
    (query) => {
      dispatch(addToHistory(query.search));
      navigate(`/search?query=${query.search}`);
      setSuggestionsShown(false);
    },
    [navigate, dispatch],
  );

  const onChange = useCallback((query) => {
    if (query && query.length >= 2) {
      setSuggestionsShown(true);
      setSearchQuery(query);
    } else {
      setSuggestionsShown(false);
      setSearchQuery('');
    }
  }, []);

  const handleBlurExtension = useCallback(() => {
    setSuggestionsShown(false);
  }, []);

  const handleFocusExtension = useCallback(() => {
    setSuggestionsShown(true);
  }, []);

  useEffect(() => {
    onChange(debouncedQuery);
  }, [debouncedQuery, onChange]);

  /*
   *  Необходим, так как при наличии значения по умолчанию в useForm,
   *  watch в debouncedQuery воспринимает это как изменение значения
   *  в input и вызывает onChange
   */
  useEffect(() => {
    if (lastQuery) {
      setSuggestionsShown(false);
    }
  }, [lastQuery]);

  return (
    <>
      <Form
        control={control}
        formName='search'
        onSubmit={handleSubmit(onSubmit)}
        buttonText='Search'
        isDisabled={false}
        addFormClass={s.form}
        addButtonClass={s.button}
      >
        <Input
          addLabelClass={s.label}
          inputId='search'
          inputType='search'
          formName='search'
          placeholder='Enter a search query'
          isDisabled={false}
          handleBlurExtension={handleBlurExtension}
          handleFocusExtension={handleFocusExtension}
        />
      </Form>
      {suggestionsIsShown && searchQuery && (
        <SuggestionsList query={searchQuery} />
      )}
    </>
  );
}

SearchForm.propTypes = {
  lastQuery: PropTypes.string,
};

SearchForm.defaultProps = {
  lastQuery: '',
};
