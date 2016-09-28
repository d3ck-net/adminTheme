Package.describe({
    name: 'dasdeck:admin-theme',
    version: '0.0.1',
    // Brief, one-line summary of the package.
    summary: 'quick theme for meteor',
    // URL to the Git repository containing the source code for this package.
    git: '',
    // By default, Meteor will default to using README.md for documentation.
    // To avoid submitting documentation, set this field to null.
    documentation: 'README.md'
});

Package.onUse(function (api) {
    api.versionsFrom('1.3');

    api.use('dasdeck:bootstrap');

    api.use('templating', 'client');
    api.use('blaze-html-templates');

    api.use('iron:router')
    api.use('fortawesome:fontawesome')

    api.use('mrt:flot')
    api.use('bshamblen:morrisjs')
    
    api.addFiles('css/sb-admin.css', 'client');
    api.addFiles('view/layout.html', 'client');
    api.addFiles('view/navigation.html', 'client');
    api.addFiles('view/sideNavigation.html', 'client');
    api.addFiles('config.js', 'client');


});

Package.onTest(function (api) {
    //api.use('ecmascript');
    //api.use('tinytest');
    //api.use('mongo-object');
    //api.addFiles('mongo-object-tests.js');
});
