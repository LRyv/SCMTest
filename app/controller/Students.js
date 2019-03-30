Ext.define('SCM.controller.Students', {
    extend: 'Ext.app.Controller',
    views: [
        'student.List',
        'student.Edit'
    ],
    stores: ['Students'],
    models: ['Student'],
    init: function () {
        this.control({
            'studentlist': {
                itemdblclick: this.edit
            },
            'studentadd button[id=create]': {//增加
                click:function(){
                    alert("click create");
                }
            },
            'studentedit button[action=batchdelete]': {//批量删除

            },
            'studentedit button[action=retrieve]': {//查询

            },
            'studentedit button[action=update]': {//更新
                click: this.update
            }
        });
    },

    edit: function (grid, record) {
        //var view = Ext.widget('studentedit');
        var view = Ext.create("widget.studentedit", {
            title: "编辑学生信息 -#" + record.get("Name")
        });
        view.down('form').loadRecord(record);
    },

    create: function () {
        alert("click create");
    },

    retrieve: function () {

    },

    update: function (button) {
        var win = button.up('window'),
            form = win.down('form'),
            record = form.getRecord(),
            values = form.getValues();
        record.set(values);
        win.close();
        this.getUsersStore().sync();
    },

    delete: function (grid, rowIndex, colIndex) {
        var msg = "确认删除用户：" + grid.getStore().getAt(rowIndex).get("Name") + " ？";
        Ext.Msg.confirm("确认", msg, function (res) {
            if (res == "yes") {
                grid.getStore().removeAt(rowIndex);
            }
        });
    },

    batchDel: function () {
        var grid = Ext.getCmp("studentlist");
        if (grid.getSelectionModel().hasSelection()) {
            var st = grid.getStore();
            var recs = grid.getSelectionModel().getSelection();
            var names = "";
            for (var i = 0; i < recs.length; i++) {
                names += recs[i].data.userName + "<br />";
            }
            Ext.Msg.confirm("确认", "确认删除以下用户？<br />" + names, function (res) {
                if (res == "yes") {
                    st.remove(recs);
                }
            });
        } else {
            Ext.Msg.alert("信息", "请选择要删除的用户！");
        }
    },

    // save: function (btn) {
    //     var fr = this.lookupReference("studentForm").getForm();
    //     if (fr.isValid()) {
    //         var phid = fr.findField("phid").getValue();
    //         if (phid) { //编辑
    //             var rec = this.st.getById(phid);
    //             rec.set("sid", fr.findField("sid").getValue());
    //             rec.set("Name", fr.findField("Name").getValue());
    //             rec.set("Sex", fr.findField("Sex").getValue());
    //             rec.set("Bir", fr.findField("Bir").getValue());
    //             rec.set("Class", fr.findField("Class").getValue());
    //             rec.set("Remarks", fr.findField("Remarks").getValue());
    //             //this.st.rejectChanges();	//取消所有修改
    //             this.st.commitChanges();	//提交修改数据
    //         } else { //新增
    //             var obj = fr.getFieldValues();
    //             obj.phid = this.st.last() ? parseInt(this.st.last().get("phid")) + 1 : 1;
    //             this.st.add(obj);
    //         }
    //         btn.up("studentedit").close();
    //     }
    // },

});