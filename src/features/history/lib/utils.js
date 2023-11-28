export const checkDuplicate = (array, newObject) => {
  const duplicates = array.filter((obj) => obj.query === newObject.query);
  if (duplicates.length > 0) {
    const hasDuplicateWithinMinute = duplicates.some((duplicate) => {
      const diffInMinutes = Math.abs(
        (new Date(duplicate.date) - new Date(newObject.date)) / (1000 * 60),
      );
      return diffInMinutes < 1;
    });
    if (hasDuplicateWithinMinute) {
      return false;
    }
  }
  return true;
};
