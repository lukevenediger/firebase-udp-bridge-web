/**
 * Created by lukevenediger on 2016/04/13.
 */

function HomeCtrl(/* $location, $mdToast */) {

    const vm = this;
    vm.title = 'FUB HUB'

    vm.templates = [
        {
            title: 'Button',
            description: 'A simple button that triggers when pushed'
        },
        {
            title: 'Light',
            description: 'A light that can be turned on and off'
        },
        {
            title: 'Colour Light',
            description: 'A light that can show any colour of the spectrum'
        },
        {
            title: 'Button and Light',
            description: 'A button and a light'
        }
    ];
}

export default {
    name: 'HomeCtrl',
    fn: HomeCtrl
}
