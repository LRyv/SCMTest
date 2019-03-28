Ext.define('SCM.view.Viewport', {
    extend: 'Ext.container.Viewport',
    //布局方式
    layout: 'border',
    items: [
        {
            title: '学生成绩管理系统',
            collapisble: true,
            region: 'north',
            // height: 80,
            // html: '<br><center><font size=5>学生成绩管理系统</font></center>'
        },
        {
            title: '功能菜单',
            region: 'west',
            width: 180,
            split: true,
            collapisble: true,
            items: [
                {
                    xtype: 'menutree'
                }
            ]
        },
        {
            region: 'center',
            id: 'mainContent',
            xtype: 'tabpanel',
            //title: '主题内容显示',
            layout: 'fit',
            collapisble: true,
        }
    ]
});