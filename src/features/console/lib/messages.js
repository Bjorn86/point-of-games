export const messages = {
  welcome:
    'Welcome to the Point of Games application management console!\nTo display a list of available commands, type: point("/help"). Note that all commands must be passed as a string',
  help: "List of available commands:\n- /signup [email] [password] - Registration in the application. Email and password must be spaced and listed inside square brackets\n- /signin [email] [password] - Logging in to the application. Email and password must be spaced and listed inside square brackets\n- /logout - Exiting the application\n- /search [query] - Search for a game by name or ID\n- /showHistory - Shows the user's search history",
  auth: 'Please enter your email and password',
  goodbye: 'See you soon!',
  searchWarning: 'Please enter a search query',
  notFound: 'There is no such command',
};
