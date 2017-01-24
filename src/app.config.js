/* global API_URL, VERSION, GOOGLE_API_KEY */
export default (app) => {
  app.constant('config', {
    API_URL,
    VERSION,
    GOOGLE_API_KEY,
  });
};
