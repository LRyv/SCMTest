Ext.define('SCM.model.Nav', {
    extend: 'Ext.data.TreeModel',
    fields:[
        {name:'text', type:'varchar'},        
        {name:'leaf', type:'boolean', defaultValue: true},//type为布尔型时，后面的默认值是必须写的，要不会出错
        {name: 'mod', type:'varchar'},
        {name: 'modUrl', type:'varchar'}
    ]
});