import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDebounce } from 'shared/lib/use-debounce';
import Input from 'shared/ui/input/input';
import Form from 'shared/ui/form/form';
import SuggestionsList from '../suggestions-list/suggestions-list';
import s from './search-form.module.scss';

export function SearchForm() {
  const [suggestionsIsShown, setSuggestionsShown] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { control, handleSubmit, watch } = useForm({
    defaultValues: {
      search: '',
    },
  });
  const debouncedQuery = useDebounce(watch('search').trim(), 500);
  const navigate = useNavigate();

  const onSubmit = useCallback(
    (query) => {
      navigate(`/search?query=${query.search}`);
      setSuggestionsShown(false);
    },
    [navigate],
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

  const handleBlurExtension = () => {
    setSuggestionsShown(false);
  };

  const handleFocusExtension = () => {
    setSuggestionsShown(true);
  };

  useEffect(() => {
    onChange(debouncedQuery);
  }, [debouncedQuery, onChange]);

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
