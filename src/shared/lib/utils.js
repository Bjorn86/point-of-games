export const saveDataToLS = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const loadDataFromLS = (key) => {
  const data = localStorage.getItem(key);
  return JSON.parse(data);
};
