function ListVirtualDevices() {
    'ngInject';

    return {
        restrict: 'E',
        templateUrl: 'directives/list-virtual-devices.html',
        scope: {
            templates: '='
        },
        link: function(scope) {
            console.log(scope);

            scope.addDevice = function(template) {
                console.log('Adding ' + template.title);
            }
        }
    };
}

export default {
    name: 'listVirtualDevices',
    fn: ListVirtualDevices
}
