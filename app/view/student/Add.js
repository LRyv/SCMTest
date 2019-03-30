var genderStore = Ext.create("Ext.data.Store", {
    fields: ["Name", "Value"],
    data: [
        { Name: "男", Value: 1 },
        { Name: "女", Value: 0 }
    ]
});

Ext.define('SCM.view.student.Add', {
    extend: 'Ext.window.Window',
    alias: 'widget.studentadd',
    //title: '编辑学生信息',
    layout: 'fit',
    resizable: false,
    autoShow: true,
    //modal:true,
    initComponent: function () {

        Ext.apply(this, {
            items: [{
                xtype: 'form',
                reference: 'sudentForm',
                defaultType: 'textfield',
                default: {
                    anchor: '100%'
                },
                items: [{
                    xtype: "container",
                    layout: 'fit',
                    items: [{
                        xtype: 'hidden',
                        name: 'phid',
                        fieldLabel: '主键',
                    }, {
                        xtype: 'textfield',
                        name: 'sid',
                        fieldLabel: '学号'
                    }, {
                        xtype: 'textfield',
                        name: 'Name',
                        fieldLabel: '姓名'
                    }, {
                        xtype: 'combobox',
                        name: 'Sex',
                        fieldLabel: '性别',
                        store: genderStore,
                        displayField: "Name",
                        valueField: "Value",
                        value: 0,
                        editable: false,
                        queryMode: "local"
                    }, {
                        xtype: 'datefield',
                        name: 'Bir',
                        fieldLabel: '出生年月',
                        format:'Y-m-d',
                        editable: false
                    }, {
                        xtype: 'textfield',
                        name: 'Class',
                        fieldLabel: '班级'
                    }, {
                        xtype: 'textfield',
                        name: 'Adr',
                        fieldLabel: '住址'
                    }, {
                        xtype: 'textarea',
                        name: 'Remarks',
                        fieldLabel: '备注',
                        grow: false,
                        allowBlank: true
                    }]

                }]
            }],
            buttons: [{
                id: 'create',
                text: '保存',
                action: 'save'
            },
            {
                text: '取消',
                scope: this,
                handler: this.close
            }]
        });
        this.callParent(arguments);
    }
});
