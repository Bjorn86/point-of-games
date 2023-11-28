export const formatDate = (date) => {
  const formattedDate = new Date(date);
  const options = {
    hour: '2-digit',
    minute: '2-digit',
    month: '2-digit',
    day: '2-digit',
    year: 'numeric',
  };
  return formattedDate.toLocaleDateString('ru-RU', options);
};
