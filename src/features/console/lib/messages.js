export const messages = {
  welcome:
    'Welcome to the Point of Games application management console!\nTo display a list of available commands, type: point("/help"). Note that all commands must be passed as a string',
  help: "List of available commands:\n- /signup [email] [password] - Registration in the application. Email and password must be spaced and listed inside square brackets\n- /signin [email] [password] - Logging in to the application. Email and password must be spaced and listed inside square brackets\n- /logout - Exiting the application\n- /search [query] - Search for a game by name or ID\n- /showHistory - Shows the user's search history\n- /showFavorites - Shows your favorite games\n- /addFavorite [id] - Add a game to your favorites list\n- /removeFavorite [id] - Remove a game from your favorites list",
  auth: 'Please enter your email and password',
  authWarning: 'You must register to access this feature',
  goodbye: 'See you soon!',
  searchWarning: 'Please enter a search query',
  successAddFavorite: 'Game added to favorites',
  successRemoveFavorite: 'Game removed from favorites',
  notFavorite: 'This game is not in your favorites list',
  alreadyFavorite: 'This game is already in your favorites list',
  favoritesWarning: 'Your favorites list is empty',
  notFound: 'There is no such command',
};
