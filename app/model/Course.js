/* 
 * 数据模型 - 课程
 */

Ext.define("SCM.model.Course", {
	extend: "Ext.data.Model",
	fields: [
	    {name: "phid"},		//物理主键
	    {name: "Kch"},		//课程号
	    {name: "Kcm"},		//课程名称
	    {name: "Ach"},		//及格分数
	    {name: "Remarks"}	//备注
	]
});