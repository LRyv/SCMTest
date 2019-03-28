/* 
 * 数据模型 - 分数
 */

Ext.define("SCM.model.Score", {
	extend: "Ext.data.Model",
	fields: [
	    {name: "Stu_phid"},		//学号
	    {name: "Kch_phid"},		//课程号
	    {name: "Ach"},		    //成绩
	]
});