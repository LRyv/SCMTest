Ext.define('SCM.view.Student', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.studentlist',
    store: 'StudentStore',
    title: '学生信息列表',
    initComponent: function () {
        this.columns = [
            { header: '主键', dataIndex: 'phid', flex: 1 },
            { header: '编号', dataIndex: 'sid', flex: 1 },
            { header: '姓名', dataIndex: 'Name', flex: 1 },
            { header: '性别', dataIndex: 'Sex', flex: 1 },
            { header: '出生年月', dataIndex: 'Bir', flex: 1 },
            { header: '班级', dataIndex: 'Class', flex: 1 },
            { header: '住址', dataIndex: 'Adr', flex: 1 },
            { header: '备注', dataIndex: 'Remarks', flex: 1 },

        ];
        this.callParent(arguments);
    }
});

Ext.define('SCM.view.StudentEdit', {
    extend: 'Ext.window.Window',
    alias: 'widget.studentedit',
    title: '修改学生信息',
    layout: 'fit',
    autoShow: true,
    initComponent: function () {
        this.items = [
            {
                xtype: 'form',
                items: [
                    {
                        xtype: 'textfield',
                        name: 'Name',
                        fieldLabel: '姓名'
                    },
                    {
                        xtype: 'textfield',
                        name: 'Sex',
                        fieldLabel: '性别',
						displayField: "sexName",
						valueField: "sexId",
						value: 0,
                    },
                    {
                        xtype: 'textfield',
                        name: 'Bir',
                        fieldLabel: '出生年月'
                    },
                    {
                        xtype: 'textfield',
                        name: 'Class',
                        fieldLabel: '班级'
                    },
                    {
                        xtype: 'textfield',
                        name: 'Adr',
                        fieldLabel: '住址'
                    },
                    {
                        xtype: 'textfield',
                        name: 'Remarks',
                        fieldLabel: '备注'
                    }, 
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
                            handler: "edit"
                        }, {
                            iconCls: "opt-delete",
                            tooltip: "删除",
                            handler: "del"
                        }]
                    }
                ]
            }
        ];
        this.buttons = [
            {
                text: '保存',
                action: 'save'
            },
            {
                text: '取消',
                scope: this,
                handler: this.close
            }
        ];

        this.callParent(arguments);
    }
});