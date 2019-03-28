Ext.onReady(function(){
     //开启悬浮提示功能
     Ext.QuickTips.init();
     //开启动态加载
     Ext.Loader.setConfig({
         enabled: true
     });
     //创建应用程序的实例
     Ext.application({
         //设定命名空间
         name: 'SCM',
         //指定配置选项，设置相应的路径
         appFolder: 'app',
         //加载控制器
         controllers: ['SCMController'],
         //自动加载和实例化Viewport文件
         autoCreateViewport: true
     });
});

// Ext.application({
// 	requires: ['Ext.container.Viewport'],
// 	name: 'SCM',
// 	appFolder: 'app',
// 	controllers: ['Student'],
// 	launch: function () {
// 		console.log("launch triggered!");
// 		Ext.create('Ext.container.Viewport', {
// 			layout: 'fit',
// 			items: [
// 				{
// 					xtype: 'studentlist'
// 				}
// 			]
// 		});
// 	}
// });