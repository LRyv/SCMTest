
Ext.define('SCM.view.student.Edit', {
    extend: 'Ext.window.Window',
    alias: 'widget.studentedit',
    //title: '编辑学生信息',
    layout: 'fit',
    resizable:false,
    autoShow: true,
    //modal:true,
    initComponent: function () {
        Ext.apply(this, {
            items: [{
                xtype: 'form',
                defaultType:'textfield',
                default:{
                    anchor:'100%'
                },
                items:[{
                    xtype:"container",
                    layout:'fit',
                    items: [{
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
                        bind:{
                            store:"{gender}"
                        },
                        displayField: "sexName",
                        valueField: "sexId",
                        value: 0,
                        editable: false,
                    }, {
                        xtype: 'datefield',
                        name: 'Bir',
                        fieldLabel: '出生年月',
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
