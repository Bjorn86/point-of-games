export const modifyRawgData = () => (next) => (action) => {
  if (action.type === '@@rawgApi/executeQuery/fulfilled') {
    let modifiedPayload;
    switch (action.payload.typeOfModification) {
      case 'listOfGames':
        modifiedPayload = action.payload.data.map((card) => ({
          id: card.id,
          name: card.name,
          bgImage: card.background_image,
          platforms: card.parent_platforms,
          metacritic: card.metacritic,
          rating: card.rating,
          genres: card.genres,
          released: card.released,
        }));
        break;
      case 'suggestionsList':
        modifiedPayload = action.payload.data.map((card) => ({
          id: card.id,
          name: card.name,
          bgImage: card.background_image,
          platforms: card.parent_platforms,
          metacritic: card.metacritic,
          rating: card.rating,
        }));
        break;
      default:
        modifiedPayload = action.payload.data;
    }
    return next({
      ...action,
      payload: modifiedPayload,
    });
  }
  return next(action);
};
