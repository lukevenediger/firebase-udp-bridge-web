function OnRun($rootScope, AppSettings) {
    'ngInject';

    // Set the app title
    $rootScope.appTitle = AppSettings.appTitle;

    // change page title based on state
    $rootScope.$on('$stateChangeSuccess', (event, toState) => {
        $rootScope.pageTitle = '';

        if ( toState.title ) {
            $rootScope.pageTitle += toState.title;
        }

    });

}

export default OnRun;
