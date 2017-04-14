//公共方法
export default{
	methods:{
		routeTo (path,name){//路由，面包屑写入
        	let v = this;

            v.$router.push(path);
        },
        getDateTime(date) {//时间格式获取
        	let v = this;
        	let d = new Date(date),
        		year = d.getFullYear(),
        		month = d.getMonth() + 1  < 10 ? "0" +  d.getMonth()  :  d.getMonth() ,
        		day = d.getDate() + 1  < 10 ? "0" +  d.getDate()  :  d.getDate() ;

        	return year + "-" + month + "-" + day;
        }
	}
}