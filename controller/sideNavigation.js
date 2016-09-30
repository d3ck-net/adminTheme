import {AdminTheme} from '../AdminTheme';

Template.sideNavigation.helpers({
    navigation: function () {
        return AdminTheme.getNavigation();
    },
    active: function () {
        var route = Router.current().route.path();
        return route === this.route ? "active" : "";
    }
});