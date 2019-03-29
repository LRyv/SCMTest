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
            'studentedit button[action=save]': {
                click: this.update
            }

        });
    },

    search:function(){

    },

    add:function(){
        alert("click add");
    },

    edit: function (grid, record) {
        var view = Ext.widget('studentedit');
        view.down('form').loadRecord(record);
    },  
    
    // edit: function (grid, rowIndex,colIndex) {
    //     alert("click edit");
    //     var record = grid.getStore().getAt(rowIndex);
    //     var view = Ext.create("SCM.view.student.StudentEdit",{
    //         title:"编辑学生信息 -#"+record.get("Name")
    //     });
    //     view.down('form').loadRecord(record);
    // },
    
    del:function(){

    },

    batchDel:function(){

    },

    save:function(){

    },

    cancel:function(){

    },

    update: function (button) {
        var win = button.up('window'),
            form = win.down('form'),
            record = form.getRecord(),
            values = form.getValues();
        record.set(values);
        win.close();
        this.getUsersStore().sync();
    }
});