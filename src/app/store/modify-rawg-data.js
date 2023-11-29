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
      case 'gameForFavorites':
        modifiedPayload = {
          id: action.payload.data.id,
          name: action.payload.data.name,
          bgImage: action.payload.data.background_image,
          platforms: action.payload.data.parent_platforms,
          metacritic: action.payload.data.metacritic,
          rating: action.payload.data.rating,
          genres: action.payload.data.genres,
          released: action.payload.data.released,
        };
        break;
      case 'game':
      default:
        modifiedPayload = {
          id: action.payload.data.id,
          name: action.payload.data.name,
          description: action.payload.data.description_raw,
          bgImage: action.payload.data.background_image,
          website: action.payload.data.website,
          platforms: action.payload.data.parent_platforms,
          platformsDetail: action.payload.data.platforms,
          metacritic: action.payload.data.metacritic,
          rating: action.payload.data.rating,
          genres: action.payload.data.genres,
          released: action.payload.data.released,
          tba: action.payload.data.tba,
          developers: action.payload.data.developers,
          playtime: action.payload.data.playtime,
          esrbRating: action.payload.data.esrb_rating,
        };
    }
    return next({
      ...action,
      payload: modifiedPayload,
    });
  }
  return next(action);
};
