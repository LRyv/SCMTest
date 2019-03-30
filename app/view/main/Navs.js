Ext.define('SCM.view.main.Navs', {
    extend: 'Ext.tree.Panel',
    alias: 'widget.nav',
    initComponent: function () {
        Ext.apply(this, {
			title: "导航菜单",
            //数据集
            store: 'Navs',
            //规定锚链接地址的显示区域
            hrefTarget: 'mainContent',

            collapsible: true, //可折叠  
            autoScroll: true,
            split: false,    //显示拖动条
			width: 180,
			border: true,
            //是否显示根节点
            rootVisible: false,

            //菜单样式
            bodyStyle: {
                //background: '#ffc',
                padding: '10px'
            }
        });
        this.callParent(arguments);
    },
});
