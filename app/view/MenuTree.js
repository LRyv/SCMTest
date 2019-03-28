Ext.define('SCM.view.MenuTree', {
    extend: 'Ext.tree.Panel',
    alias: 'widget.menutree',
    border: false,
    //规定锚链接地址的显示区域
    //collapsible: true,
    //autoScroll: true,
    hrefTarget: 'mainContent',
    //是否显示根节点
    rootVisible: false,
    //数据集
    store: 'TreeStore',
    //菜单样式
    bodyStyle: {
        //background: '#ffc',
        padding: '10px'
    }
});

// Ext.define('SCM.view.ContextMenu', {
//     extend: 'Ext.menu.Menu',
//     alias: 'widget.contextmenu',
//     float: true,
//     items: [{
//         xtype: 'button',
//         text: '添加',
//         action: 'add',
//         iconCls: 'leaf'
//     }, {
//         xtype: 'button',
//         text: '删除',
//         action: 'del',
//         iconCls: 'leaf'
//     }, {
//         xtype: 'button',
//         text: '编辑',
//         action: 'edit',
//         iconCls: 'leaf'
//     }]
// });