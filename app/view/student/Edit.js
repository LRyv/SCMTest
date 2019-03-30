var genderStore = Ext.create("Ext.data.Store", {
    fields: ["Name", "Value"],
    data: [
        { Name: "男", Value: 1 },
        { Name: "女", Value: 0 }
    ]
});

Ext.define('SCM.view.student.Edit', {
    extend: 'Ext.window.Window',
    alias: 'widget.studentedit',
    //title: '编辑学生信息',
    layout: 'fit',
    resizable: false,
    autoShow: true,
    //modal:true,
    initComponent: function () {

        Ext.apply(this, {
            items: [{
                xtype: 'form',
                reference: 'studentlist',
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
                        fieldLabel: '主键'
                    }, {
                        xtype: 'numberfield',
                        name: 'sid',
                        fieldLabel: '学号',
                        minValue:100,
                        maxValue:999,
                        hideTrigger: true,//是否隐藏上下调节按钮
                        margin:'5,5,5,5'
                    }, {
                        xtype: 'textfield',
                        name: 'Name',
                        fieldLabel: '姓名',
                        margin:'5,5,5,5'
                    }, {
                        xtype: 'combobox',
                        name: 'Sex',
                        fieldLabel: '性别',
                        store: genderStore,
                        displayField: "Name",
                        valueField: "Value",
                        value: 0,
                        editable: false,
                        queryMode: "local",
                        margin:'5,5,5,5'
                    }, {
                        xtype: 'datefield',
                        name: 'Bir',
                        fieldLabel: '出生年月',
                        format:'Y-m-d',
                        editable: false,
                        margin:'5,5,5,5'
                    }, {
                        xtype: 'textfield',
                        name: 'Class',
                        fieldLabel: '班级',
                        margin:'5,5,5,5'
                    }, {
                        xtype: 'textfield',
                        name: 'Adr',
                        fieldLabel: '住址',
                        margin:'5,5,5,5'
                    }, {
                        xtype: 'textarea',
                        name: 'Remarks',
                        fieldLabel: '备注',
                        grow: false,
                        allowBlank: true,
                        margin:'5,5,5,5'
                    }]

                }]
            }],
            buttons: [{
                id: 'save',
                text: '保存',
                action: 'update'
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
