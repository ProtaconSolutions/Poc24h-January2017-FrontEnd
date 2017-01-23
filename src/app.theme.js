/* global material theme */
export default (app) => {
  app.config(
    ($mdThemingProvider) => {
      const baseColorMap = $mdThemingProvider.extendPalette('indigo', {
        50: '#4a75cc',
        100: '#C5CDDB',
        200: '#325cb2',
        300: '#2c529e',
        400: '#27478a',
        500: '#213d76',
        600: '#1b3362',
        700: '#16284e',
        800: '#101e3a',
        900: '#0b1426',
        A100: '#5e84d2',
        A200: '#ffffff',
        A400: '#86a3dd',
        A700: '#050912',
        contrastDefaultColor: 'light',
      });

      // Register the new color palette map with the name <code>blue</code>
      $mdThemingProvider.definePalette('indigo', baseColorMap);

      const accentColorMap = $mdThemingProvider.extendPalette('indigo', {
        A200: '#ffffff',
        contrastDefaultColor: 'light',
      });

      // Register the new color palette map with the name <code>blue</code>
      $mdThemingProvider.definePalette('indigo', accentColorMap);

      // Use that theme for the primary intentions
      $mdThemingProvider.theme('default')
                        .primaryPalette('indigo')
                        .accentPalette('indigo');

      return $mdThemingProvider;
    },
  );
};
