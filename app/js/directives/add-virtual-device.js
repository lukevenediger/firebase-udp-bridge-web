function AddVirtualDevice() {

    return {
        restrict: 'E',
        templateUrl: 'directives/add-virtual-device.html'
    }
}

export default {
    name: 'addVirtualDevice',
    fn: AddVirtualDevice
}
