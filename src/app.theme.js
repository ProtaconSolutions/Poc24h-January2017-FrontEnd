/* global material theme */
export default (app) => {
  app.config(
    ($mdThemingProvider) => {
      const baseColorMap = $mdThemingProvider.extendPalette('blue', {
        500: '#213d76',
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
