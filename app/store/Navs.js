Ext.define("SCM.store.Navs",{
    extend:'Ext.data.TreeStore',
    defaultRoodId:'root',
    proxy:{
        type:'ajax',
        url:'./data/nav.json',
        reader:'json',
        autoLoad:true
    }
});