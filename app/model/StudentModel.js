/* 
 * 数据模型 - 学生
 */

Ext.define("SCM.model.StudentModel", {
	extend: "Ext.data.Model",
	fields: [
		{ name: "phid", type: "int" },		//物理主键
		{ name: "sid", type: "char" },		//编号
		{ name: "Name", type: "varchar" },	//姓名
		{ name: "Sex", type: "int" },		//性别
		{ name: "Bir", type: "date" },		//出生年月
		{ name: "Class", type: "varchar" },	//班级
		{ name: "Adr", type: "varchar" },	//住址
		{ name: "Remarks", type: "varchar" }//备注
	],
});