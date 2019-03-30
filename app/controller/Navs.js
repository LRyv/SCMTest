Ext.define('SCM.controller.Navs', {
    extend: 'Ext.app.Controller',
    views: ['main.Navs'],
    stores: ['Navs'],
    model: ['Nav'],
    //通过init函数来监听视图事件，控制视图与控制器的交互
    init: function () {
        //init函数通过this.control来负责监听
        this.control({
            //被监听的组件的别名
            'nav': {
                //监听鼠标点击事件，点击后调用onMenuClick方法
                itemclick: this.onMenuClick,
                //监听鼠标右键事件，点击后调用contextMenu方法
                itemcontextmenu: this.contextMenu,

            }
        });
    },

    //点击菜单
    onMenuClick: function (view, rec, item, index) {
        var me = this;
        var mod = rec.raw.mod;
        var modUrl = "SCM.view." + rec.raw.modUrl;
        if (mod && modUrl) {
            Ext.require([modUrl], function () {
                me.loadModule(rec.raw);
            });
        } else {
            Ext.Msg.alert("错误", "加载模块失败！");
        }
    },

    //加载模块
    loadModule: function (data) {
        var me = this;
        if (!me.con) {
            me.con = Ext.getCmp("mainContent");
        }
        // me.con.removeAll();
        var newTab = me.con.getChildByElement(data.mod);
        if (newTab == null) {
            me.con.setActiveTab(me.con.add({
                id: data.mod,
                title: data.text,
                xtype: data.mod,
                closable: true
            }));
        } else {
            me.con.setActiveTab(newTab);
        }

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