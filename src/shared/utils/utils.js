// SAVE DATA TO LOCAL STORAGE
export const saveDataToLS = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

// LOAD DATA FROM LOCAL STORAGE
export const loadDataFromLS = (key) => {
  const data = localStorage.getItem(key);
  return JSON.parse(data);
};
