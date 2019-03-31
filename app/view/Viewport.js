Ext.define('SCM.view.Viewport', {
    extend: 'Ext.container.Viewport',
    initComponent: function () {
        Ext.apply(this, {
            //布局方式
            layout: 'border',
            items: [{
                title: '学生成绩管理系统',
                collapisble: true,
                region: 'north',
                // height: 80,
                // html: '<br><center><font size=5>学生成绩管理系统</font></center>'
            }, {
                region: 'west',
                xtype: 'nav'
            }, {
                region: 'center',
                id: 'mainContent',
                xtype: 'tabpanel',
                //title: '主题内容显示',
                layout: 'fit',
                collapisble: true,
                items: [{
                    id: 'studentlist',
                    xtype: 'studentlist',
                    title: '学生信息',
                    closable: true,
                }]
            }]
        });
        Ext.QuickTips.init();
        Ext.Msg.minWidth = 300;
        Ext.setGlyphFontFamily('FontAwesome');
        this.callParent(arguments);
    }
});