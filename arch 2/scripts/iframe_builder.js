function updateMonthFrame() {
	var date_from = new Date();
	date_from.setHours(0);
	date_from.setSeconds(0);
	date_from.setMinutes(0);
	if (date_from.getDay() > 26){
		date_from.setDate(26);
		date_from.setMonth(date_from.getMonth() - 1);	
	} else {
		date_from.setDate(26);
	}
	
	
	
	
	var date_from = date_from.toISOString();
	var date_to = new Date().toISOString();

	var updated_src = `http://10.15.3.140:5601/app/kibana#/dashboard/b8989470-7ebf-11e7-98ad-4f98fd702493?embed=true&_g=(refreshInterval:('$$hashKey':'object:1245',display:'5+seconds',pause:!f,section:1,value:5000),time:(from:'${date_from}',mode:absolute,to:'${date_to}'))&_a=(description:'',filters:!(),options:(darkTheme:!f),panels:!((col:5,id:e0cdf450-7e40-11e7-87d5-d729873583d4,panelIndex:1,row:1,size_x:4,size_y:5,type:visualization),(col:1,id:'9511bb30-7ebf-11e7-9ab1-99bb48817e36',panelIndex:2,row:6,size_x:6,size_y:2,type:visualization),(col:1,id:'4a09ea60-7e40-11e7-87d5-d729873583d4',panelIndex:3,row:1,size_x:4,size_y:3,type:visualization),(col:9,id:'25d6cb90-7e40-11e7-87d5-d729873583d4',panelIndex:4,row:1,size_x:4,size_y:3,type:visualization),(col:7,id:'342776f0-b2f6-11e7-8045-c331cccc54c4',panelIndex:7,row:6,size_x:6,size_y:2,type:visualization),(col:9,id:'446f2050-c4ce-11e7-8320-7d18f42a5f54',panelIndex:8,row:4,size_x:4,size_y:2,type:visualization),(col:1,id:'001409a0-c59d-11e7-a65a-2d506912d283',panelIndex:9,row:4,size_x:4,size_y:2,type:visualization)),query:(query_string:(analyze_wildcard:!t,query:'*')),timeRestore:!f,title:'Banrural+Mes',uiState:(P-1:(vis:(defaultColors:('0+-+20':'rgb(0,104,55)','20+-+40':'rgb(135,203,103)','40+-+60':'rgb(255,255,190)','60+-+80':'rgb(249,142,82)','80+-+100':'rgb(165,0,38)'))),P-2:(vis:(defaultColors:('0+-+100':'rgb(0,104,55)'))),P-3:(spy:(mode:(fill:!f,name:!n)),vis:(colors:(DELIVERED:%23508642,ERROR:%23890F02,OK:%23447EBC),legendOpen:!f)),P-4:(vis:(legendOpen:!f)),P-7:(vis:(defaultColors:('0+-+100':'rgb(0,104,55)')))),viewMode:view)`;
	
	document.getElementById("30days").src = updated_src;
	
	setTimeout(updateMonthFrame, 10000)
	
}
updateMonthFrame();