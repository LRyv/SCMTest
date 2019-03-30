/* 
 * 视图 - 首页
 */

Ext.define("SCM.view.desktop.Desktops", {
	extend: "Ext.panel.Panel",
	xtype: "desktop",
	// requires: [
	// 	"SCM.controller.Desktops",
	// 	"SCM.model.Desktop"
	// ],
	// viewModel: { type: "desktop" },
	// controller: "desktops",

	title: "首页",
	// border: true,
	// layout: "border",

	initComponent: function () {
		Ext.apply(this, {
			renderTo: Ext.getCmp('mainContent'),
			html: "<i class='icon-user'></i> 欢迎使用学生成绩管理系统~~~"
		});
		this.callParent(arguments);
	}
});