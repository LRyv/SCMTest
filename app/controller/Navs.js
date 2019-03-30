Ext.define('SCM.controller.Navs', {
    extend: 'Ext.app.Controller',
    views: ['main.Navs'],
    stores: ['Navs'],
    model: ['Ext.data.TreeModel'],
    //通过init函数来监听视图事件，控制视图与控制器的交互
    init: function () {
        //init函数通过this.control来负责监听
        this.control({
            //被监听的组件的别名
            'nav': {
                //监听鼠标点击事件，点击后调用changePage方法
                itemclick: this.changePage,
                //监听鼠标右键事件，点击后调用contextMenu方法
                itemcontextmenu: this.contextMenu,

            }
        });
    },

    //页面切换方法
    changePage: function (view, rec, item, index, e) {
        //获取url地址
        //var url = rec.get('url');
        //获取当前节点信息
        var treenode = rec.raw;
        var id = treenode.id;
        var title = rec.get('text');
        var leaf = rec.get('leaf');
        var tabPanel = Ext.getCmp('mainContent');
        //子节点才能打开，父节点不设置响应
        if (leaf == false) {
            return;
        }
        //以title值设置为tab的id,打开时，有就使tab active，无则新建tab
        var newTab = tabPanel.getChildByElement(title);
        if (newTab == null) {
            tabPanel.setActiveTab(tabPanel.add({
                id: title,
                title: title,
                //html: '当前页面是 ' + title + '<br/><br/>',
                closable: true,
                xtype: id
            }));
        } else {
            tabPanel.setActiveTab(newTab);
        }
        // tabPanel.setActiveTab(title);
        // //将主体内容部分的url地址指定为我们获取到的url
        // Ext.getDom('contentIframe').src = url;
        // //将主体内容框的标题设置为我们获取的节点信息
        // Ext.getCmp('mainContent').setTitle(title);
    },
    //显示右键菜单方法
    contextMenu: function (tree, record, item, index, e, eOpts) {
        //阻止浏览器默认右键事件
        e.preventDefault();
        e.stopEvent();
        //显示右键菜单
        var view = Ext.widget('contextmenu');
        view.showAt(e.getXY());
    }
});