Ext.application({
    //requires: ['Ext.container.Viewport'],
    name: 'SCM',
    appFolder: 'app',
    controllers: ['SCMController', 'Navs', 'Students'],
    //自动加载和实例化Viewport文件
    autoCreateViewport: true
});