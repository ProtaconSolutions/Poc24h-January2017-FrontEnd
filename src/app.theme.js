/* global material theme */
export default (app) => {
  app.config(
    ($mdThemingProvider) => {
      const baseColorMap = $mdThemingProvider.extendPalette('blue', {
        50: '#4a75cc',
        100: '#3766c6',
        200: '#325cb2',
        300: '#2c529e',
        400: '#27478a',
        500: '#213d76',
        600: '#1b3362',
        700: '#16284e',
        800: '#101e3a',
        900: '#0b1426',
        A100: '#5e84d2',
        A200: '#7293d8',
        A400: '#86a3dd',
        A700: '#050912',
        contrastDefaultColor: 'light',
      });

      // Register the new color palette map with the name <code>blue</code>
      $mdThemingProvider.definePalette('blue', baseColorMap);

     // Use that theme for the primary intentions
      $mdThemingProvider.theme('default')
                        .primaryPalette('blue');

      return $mdThemingProvider;
    },
  );
};
