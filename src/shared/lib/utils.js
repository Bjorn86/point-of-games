export const saveDataToLS = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const loadDataFromLS = (key) => {
  const data = localStorage.getItem(key);
  return JSON.parse(data);
};

export const getDateRange = () => {
  const currentDate = new Date().toISOString().slice(0, 10);
  const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)
    .toISOString()
    .slice(0, 10);
  return `${thirtyDaysAgo},${currentDate}`;
};
