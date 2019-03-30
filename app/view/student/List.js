Ext.define('SCM.view.student.List', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.studentlist',
    store: 'Students',
    viewConfig: {
        forceFit: true, // 注意不要用autoFill:true,那样设置的话当GridPanel的大小变化（比如你resize了它）时不会自动调整column的宽度
        scrollOffset: 0 //不加这个的话，会在grid的最右边有个空白，留作滚动条的位置
    },
    initComponent: function () {
        Ext.apply(this, {
            selType: "checkboxmodel",
            //title: '学生信息',
            border: true,
            columns: [
                { header: '主键', dataIndex: 'phid', flex: 1 },
                { header: '学号', dataIndex: 'sid', flex: 1 },
                { header: '姓名', dataIndex: 'Name', flex: 2 },
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
                    header: '出生年月', dataIndex: 'Bir', flex: 3,
                    renderer: Ext.util.Format.dateRenderer('Y-m-d')
                },
                { header: '班级', dataIndex: 'Class', flex: 1 },
                { header: '住址', dataIndex: 'Adr', flex: 3 },
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
                        //handler: "edit",
                        handler: function (grid, rowIndex, colIndex) {
                            var record = grid.getStore().getAt(rowIndex);
                            var view = Ext.create("SCM.view.student.Edit", {
                                title: "编辑学生信息 -# " + record.get("phid")
                            });
                            view.down('form').loadRecord(record);
                        }
                    }, {
                        iconCls: "opt-delete",
                        tooltip: "删除",
                        //handler: "delete"
                        handler: function (grid, rowIndex, colIndex) {
                            var record = grid.getStore().getAt(rowIndex);
                            if (record.lenth != 0) {
                                Ext.Msg.confirm("提示", "是否要删除学生[" + record.get("Name") + "]的记录", function (button, text) {
                                    if (button == "yes") {
                                        grid.getStore().removeAt(rowIndex);
                                    }
                                })
                            }
                        }
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
                    id:'retrieve',
                    xtype: 'button',
                    text: "搜索",
                    glyph: 0xf002,
                    //iconCls: 'icon-search',
                    handler: "search"
                },
                "->", "->",
                {
                    id:'create',
                    xtype: 'button',
                    text: "新增",
                    glyph: 0xf067,
                    //iconCls: 'icon-plus',
                    handler: "add"
                },
                {
                    id:'batchdelete',
                    xtype: 'button',
                    text: "批量删除",
                    glyph: 0xf00d,
                    // iconCls: 'icon-remove',
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
