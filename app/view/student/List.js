Ext.define('SCM.view.student.List', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.studentlist',
    store: 'Students',
    initComponent: function () {
        Ext.apply(this, {
            selType: "checkboxmodel",
            //title: '学生信息',
            border: true,
            columns: [
                { header: '主键', dataIndex: 'phid', flex: 1 },
                { header: '编号', dataIndex: 'sid', flex: 1 },
                { header: '姓名', dataIndex: 'Name', flex: 1 },
                {
                    header: '性别', dataIndex: 'Sex', flex: 1,
                    renderer: function (value) {
                        if (value == 0) {
                            return "女";
                        } else {
                            return "男";
                        }
                    }
                },
                {
                    header: '出生年月', dataIndex: 'Bir', flex: 1,
                    // editor: { xtype: 'datefield', format: 'Y-m-d' },
                    renderer: Ext.util.Format.dateRenderer('Y年m月d日')
                },
                { header: '班级', dataIndex: 'Class', flex: 1 },
                { header: '住址', dataIndex: 'Adr', flex: 1 },
                { header: '备注', dataIndex: 'Remarks', flex: 1 },
                {
                    xtype: "actioncolumn",
                    text: "操作",
                    width: 100,
                    align: "center",
                    sortable: false,
                    menuDisabled: true,
                    items: [{
                        iconCls: "opt-edit",
                        tooltip: "编辑",
                        handler: "edit",
                    }, {
                        iconCls: "opt-delete",
                        tooltip: "删除",
                        handler: "del"
                    }]
                }
            ],
            tbar: [
                {
                    xtype: "textfield",
                    maxWidth: 205,
                    fieldLabel: "学生姓名",
                    labelWidth: 60
                },
                {
                    xtype: "button",
                    text: "搜索",
                    //glyph: 0xf002,
                    iconCls: 'icon-search',
                    handler: "search"
                },
                "->", "->",
                {
                    xtype: "button",
                    text: "新增",
                    //glyph: 0xf067,
                    iconCls: 'icon-plus',
                    handler: "add"
                },
                {
                    xtype: "button",
                    text: "批量删除",
                    //glyph: 0xf00d,
                    iconCls: 'icon-remove',
                    handler: "batchDel"
                }
            ],
            bbar: {
                xtype: "pagingtoolbar",
                bind: {
                    store: "{student}"
                },
                displayInfo: true
            }
        });
        this.callParent(arguments);
    }
});
