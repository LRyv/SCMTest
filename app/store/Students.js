Ext.define('SCM.store.Students', {
	extend: 'Ext.data.Store',
	model: 'SCM.model.Student',
	autoLoad: true,
	proxy: {
		type: 'ajax',
		api: {
			read: 'data/student.json',
			update: 'data/studentUpdate.json'
		},
		reader: {
			type: 'json',
			root: 'data',
			successProperty: 'success'
		}
	}
});