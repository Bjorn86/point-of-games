export const modifyCardsData = () => (next) => (action) => {
  if (action.type === '@@cardsApi/executeQuery/fulfilled') {
    const modifiedPayload = action.payload.map((card) => ({
      id: card.id,
      name: card.name,
      bgImage: card.background_image,
      platforms: card.parent_platforms,
      metacritic: card.metacritic,
      rating: card.rating,
      genres: card.genres,
      released: card.released,
    }));
    return next({
      ...action,
      payload: modifiedPayload,
    });
  }
  return next(action);
};
