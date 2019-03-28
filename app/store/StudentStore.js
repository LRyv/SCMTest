Ext.define('SCM.store.StudentStore', {
	extend: 'Ext.data.Store',
	model: 'SCM.model.StudentModel',
	autoLoad: true,
	proxy: {
		type: 'ajax',
		api: {
			read: 'data/student.json',
			update: 'data/updateStudent.json'
		},
		reader: {
			type: 'json',
			root: 'data',
			successProperty: 'success'
		}
	}

});