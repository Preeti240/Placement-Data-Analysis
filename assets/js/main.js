var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function() {
  $(window).scrollTop(0);
});

function select_location(value){
	document.getElementById("selectValue_location").innerHTML=value+" ";
	var com_ids = locations[value];
	students_html = "";
	for (i=0; i<com_ids.length; i++) {
		students = companies[com_ids[i]]["students"];
		company_name = companies[com_ids[i]]["company"];
		company_address = companies[com_ids[i]]["address"];
		students_html += '<div class="com_name">'+company_name+'</div>'+'<div class="com_address">'+company_address+'</div><table align="center">';
		for (j=0; j<students.length; j++) {
			name = students[j]["name"];
			roll_no = students[j]["roll_no"];
			students_html += '<tr><td>'+roll_no+'</td><td>'+name+'</td></tr>';
		}
		students_html += '</table>';
	}
	document.getElementById("stuValue_location").innerHTML=students_html;
}

function list_companies(){
	companies_html = "";
	var coms = [];
	var coms_dict = {};
	for (const [key, value] of Object.entries(companies)) {
	  name = value["company"];
	  coms.push(name);
	  coms_dict[name] = key;
	}
	coms.sort();
	dup = coms.filter((v,i,a) => a.indexOf(v) !== i);
	jpmc=0;
	zs=0;
	for (i=0; i<coms.length; i++) {
		if (coms[i]=="JPMorgan Chase & Co.") {
			if (jpmc==0) {
				companies_html += '<li><a onclick="select_company(211)">'+coms[i]+'</a></li>';
				companies_html += '<li><a onclick="select_company(496)">'+coms[i]+'</a></li>';
				jpmc=1;
			}
		} else if (coms[i]=="ZS Associates") {
			if (zs==0) {
				companies_html += '<li><a onclick="select_company(306)">'+coms[i]+'</a></li>';
				companies_html += '<li><a onclick="select_company(366)">'+coms[i]+'</a></li>';
				zs=1;
			}
		} else {
			companies_html += '<li><a onclick="select_company('+coms_dict[coms[i]]+')">'+coms[i]+'</a></li>';
		}
	}
	document.getElementById("list_company").innerHTML=companies_html;
}

function select_company(value){
	company = companies[value]
	document.getElementById("selectValue_company").innerHTML=company["company"]+" ";
	companies_html = '<div class="com_name">'+company["company"]+'</div><table align="center">';
	if (company["about"]!="") {
		companies_html+='<tr><td style="width: 150px;"><b>About</b></td><td>'+company["about"]+'</td></tr>';
	}
	if (company["address"]!="") {
		companies_html+='<tr><td style="width: 150px;"><b>Address</b></td><td>'+company["address"]+'</td></tr>';
	}
	if (company["city"]!="") {
		companies_html+='<tr><td style="width: 150px;"><b>City</b></td><td>'+company["city"]+'</td></tr>';
	}
	if (company["sector"]!="") {
		companies_html+='<tr><td style="width: 150px;"><b>Sector</b></td><td>'+company["sector"]+'</td></tr>';
	}
	if (company["website"]!="") {
		if (company["website"].substring(0, 3)=="www") {
			web_link = "https://"+company["website"]
		} else {
			web_link = company["website"]
		}
		companies_html+='<tr><td style="width: 150px;"><b>Website</b></td><td><a target="_blank" href="'+web_link+'">'+company["website"]+'</td></tr></table>';
	}
	students = company["students"];
	students_html = '<table align="center" class="stu_com" style="width: 88.5%;">';
	for (j=0; j<students.length; j++) {
		name = students[j]["name"];
		roll_no = students[j]["roll_no"];
		students_html += '<tr><td>'+roll_no+'</td><td>'+name+'</td>';
		if (students[j]["jnf_ids"].length==1) {
			students_html += '<td>'+ profiles[value][students[j]["jnf_ids"][0]]["profile"]+'</td></tr>';
		} else {
			students_html += '</tr>';
		}
	}
	students_html += '</table>';
	companies_html+=students_html;
	profiles_list = company["profiles"];
	for (i=0; i<profiles_list.length; i++) {
		profile = profiles[value][profiles_list[i]];
		profile_name = profile["profile"]
		companies_html+='<div class="com_name">'+profile_name+'</div><table align="center">';
		if (profile["about"]!="") {
			companies_html+='<tr><td style="width: 150px;"><b>About</b></td><td>'+profile["about"]+'</td></tr>';
		}
		if (profile["day"]!="") {
			companies_html+='<tr><td style="width: 150px;"><b>Day</b></td><td>'+profile["day"]+'</td></tr>';
		}
		if (profile["package"]!="") {
			companies_html+='<tr><td style="width: 150px;"><b>Package</b></td><td>'+profile["package"]+'</td></tr>';
		}
		if (profile["dep_list"]!="") {
			companies_html+='<tr><td style="width: 150px;"><b>Departments</b></td><td>'+profile["dep_list"]+'</td></tr>';
		}
		if (profile["selection"]!="") {
			companies_html+='<tr><td style="width: 150px;"><b>Selection</b></td><td>'+profile["selection"]+'</td></tr>';
		}
		if (profile["cgpa_cutoff"]!="") {
			companies_html+='<tr><td style="width: 150px;"><b>CGPA cutoff</b></td><td>'+profile["cgpa_cutoff"]+'</td></tr>';
		}
		if (profile["contract"]!="") {
			companies_html+='<tr><td style="width: 150px;"><b>Contract</b></td><td>'+profile["contract"]+'</td></tr></table>';
		}
	}
	document.getElementById("Value_company").innerHTML=companies_html;
}

function select_dep(value) {
	document.getElementById("selectValue_dep").innerHTML=dep_str[value]+" ";
	dep_html = "";
	dep_dict = departments[value];
	count=0;
	for (const [key, value] of Object.entries(dep_dict)) {
		if (key!="com_ids" && key!="name"){
			company = companies[key];
			if (count!=0) {
				companies_html ='<div class="break1"></div><div class="com_name">'+company["company"]+'</div><table align="center">'
			} else {
				companies_html = '<div class="com_name">'+company["company"]+'</div><table align="center">';
			}
			count+=1;
			if (company["about"]!="") {
				companies_html+='<tr><td style="width: 150px;"><b>About</b></td><td>'+company["about"]+'</td></tr>';
			}
			if (company["address"]!="") {
				companies_html+='<tr><td style="width: 150px;"><b>Address</b></td><td>'+company["address"]+'</td></tr>';
			}
			if (company["city"]!="") {
				companies_html+='<tr><td style="width: 150px;"><b>City</b></td><td>'+company["city"]+'</td></tr>';
			}
			if (company["sector"]!="") {
				companies_html+='<tr><td style="width: 150px;"><b>Sector</b></td><td>'+company["sector"]+'</td></tr>';
			}
			if (company["website"]!="") {
				if (company["website"].substring(0, 3)=="www") {
					web_link = "https://"+company["website"]
				} else {
					web_link = company["website"]
				}
				companies_html+='<tr><td style="width: 150px;"><b>Website</b></td><td><a target="_blank" href="'+web_link+'">'+company["website"]+'</td></tr></table>';
			}
			students = company["students"];
			students_html = '<table align="center" class="stu_com" style="width: 88.5%;">';
			for (j=0; j<students.length; j++) {
				if (value.includes(students[j]["jnf_ids"][0])) {
					name = students[j]["name"];
					roll_no = students[j]["roll_no"];
					students_html += '<tr><td>'+roll_no+'</td><td>'+name+'</td>';
					if (students[j]["jnf_ids"].length==1) {
						students_html += '<td>'+ profiles[key][students[j]["jnf_ids"][0]]["profile"]+'</td></tr>';
					} else {
						students_html += '</tr>';
					}
				}
			}
			students_html += '</table>';
			companies_html+=students_html;
			profiles_list = value;
			for (i=0; i<profiles_list.length; i++) {
				profile = profiles[key][profiles_list[i]];
				profile_name = profile["profile"]
				companies_html+='<div class="com_name">'+profile_name+'</div><table align="center">';
				if (profile["about"]!="") {
					companies_html+='<tr><td style="width: 150px;"><b>About</b></td><td>'+profile["about"]+'</td></tr>';
				}
				if (profile["name"]!="") {
					companies_html+='<tr><td style="width: 150px;"><b>Company</b></td><td>'+profile["name"]+'</td></tr>';
				}
				if (profile["day"]!="") {
					companies_html+='<tr><td style="width: 150px;"><b>Day</b></td><td>'+profile["day"]+'</td></tr>';
				}
				if (profile["package"]!="") {
					companies_html+='<tr><td style="width: 150px;"><b>Package</b></td><td>'+profile["package"]+'</td></tr>';
				}
				if (profile["dep_list"]!="") {
					companies_html+='<tr><td style="width: 150px;"><b>Departments</b></td><td>'+profile["dep_list"]+'</td></tr>';
				}
				if (profile["selection"]!="") {
					companies_html+='<tr><td style="width: 150px;"><b>Selection</b></td><td>'+profile["selection"]+'</td></tr>';
				}
				if (profile["cgpa_cutoff"]!="") {
					companies_html+='<tr><td style="width: 150px;"><b>CGPA cutoff</b></td><td>'+profile["cgpa_cutoff"]+'</td></tr>';
				}
				if (profile["contract"]!="") {
					companies_html+='<tr><td style="width: 150px;"><b>Contract</b></td><td>'+profile["contract"]+'</td></tr></table>';
				}
			}
			dep_html+=companies_html;
		}
	}
	document.getElementById("department_company").innerHTML=dep_html;
}

function select_pay(value) {
	document.getElementById("selectValue_pay").innerHTML=packages["package_strs"][value-1]+" ";
	pay_html = "";
	pay_dict = packages[value];
	count=0;
	for (const [key, value] of Object.entries(pay_dict)) {
		if (key!="com_ids" && key!="package_str"){
			company = companies[key];
			if (count!=0) {
				companies_html ='<div class="break1"></div><div class="com_name">'+company["company"]+'</div><table align="center">'
			} else {
				companies_html = '<div class="com_name">'+company["company"]+'</div><table align="center">';
			}
			count+=1;
			if (company["about"]!="") {
				companies_html+='<tr><td style="width: 150px;"><b>About</b></td><td>'+company["about"]+'</td></tr>';
			}
			if (company["address"]!="") {
				companies_html+='<tr><td style="width: 150px;"><b>Address</b></td><td>'+company["address"]+'</td></tr>';
			}
			if (company["city"]!="") {
				companies_html+='<tr><td style="width: 150px;"><b>City</b></td><td>'+company["city"]+'</td></tr>';
			}
			if (company["sector"]!="") {
				companies_html+='<tr><td style="width: 150px;"><b>Sector</b></td><td>'+company["sector"]+'</td></tr>';
			}
			if (company["website"]!="") {
				if (company["website"].substring(0, 3)=="www") {
					web_link = "https://"+company["website"]
				} else {
					web_link = company["website"]
				}
				companies_html+='<tr><td style="width: 150px;"><b>Website</b></td><td><a target="_blank" href="'+web_link+'">'+company["website"]+'</td></tr></table>';
			}
			students = company["students"];
			students_html = '<table align="center" class="stu_com" style="width: 88.5%;">';
			for (j=0; j<students.length; j++) {
				if (value.includes(students[j]["jnf_ids"][0])) {
					name = students[j]["name"];
					roll_no = students[j]["roll_no"];
					students_html += '<tr><td>'+roll_no+'</td><td>'+name+'</td>';
					if (students[j]["jnf_ids"].length==1) {
						students_html += '<td>'+ profiles[key][students[j]["jnf_ids"][0]]["profile"]+'</td></tr>';
					} else {
						students_html += '</tr>';
					}
				}
			}
			students_html += '</table>';
			companies_html+=students_html;
			profiles_list = value;
			for (i=0; i<profiles_list.length; i++) {
				profile = profiles[key][profiles_list[i]];
				profile_name = profile["profile"]
				companies_html+='<div class="com_name">'+profile_name+'</div><table align="center">';
				if (profile["about"]!="") {
					companies_html+='<tr><td style="width: 150px;"><b>About</b></td><td>'+profile["about"]+'</td></tr>';
				}
				if (profile["name"]!="") {
					companies_html+='<tr><td style="width: 150px;"><b>Company</b></td><td>'+profile["name"]+'</td></tr>';
				}
				if (profile["day"]!="") {
					companies_html+='<tr><td style="width: 150px;"><b>Day</b></td><td>'+profile["day"]+'</td></tr>';
				}
				if (profile["package"]!="") {
					companies_html+='<tr><td style="width: 150px;"><b>Package</b></td><td>'+profile["package"]+'</td></tr>';
				}
				if (profile["dep_list"]!="") {
					companies_html+='<tr><td style="width: 150px;"><b>Departments</b></td><td>'+profile["dep_list"]+'</td></tr>';
				}
				if (profile["selection"]!="") {
					companies_html+='<tr><td style="width: 150px;"><b>Selection</b></td><td>'+profile["selection"]+'</td></tr>';
				}
				if (profile["cgpa_cutoff"]!="") {
					companies_html+='<tr><td style="width: 150px;"><b>CGPA cutoff</b></td><td>'+profile["cgpa_cutoff"]+'</td></tr>';
				}
				if (profile["contract"]!="") {
					companies_html+='<tr><td style="width: 150px;"><b>Contract</b></td><td>'+profile["contract"]+'</td></tr></table>';
				}
			}
			pay_html+=companies_html;
		}
	}
	document.getElementById("pay_company").innerHTML=pay_html;
}

function select_day(value) {
	document.getElementById("selectValue_day").innerHTML="Day "+value+" ";
	days_html = "";
	day_dict = days[value];
	count=0;
	for (const [key, value] of Object.entries(day_dict)) {
		if (key!="com_ids"){
			company = companies[key];
			if (count!=0) {
				companies_html ='<div class="break1"></div><div class="com_name">'+company["company"]+'</div><table align="center">'
			} else {
				companies_html = '<div class="com_name">'+company["company"]+'</div><table align="center">';
			}
			count+=1;
			if (company["about"]!="") {
				companies_html+='<tr><td style="width: 150px;"><b>About</b></td><td>'+company["about"]+'</td></tr>';
			}
			if (company["address"]!="") {
				companies_html+='<tr><td style="width: 150px;"><b>Address</b></td><td>'+company["address"]+'</td></tr>';
			}
			if (company["city"]!="") {
				companies_html+='<tr><td style="width: 150px;"><b>City</b></td><td>'+company["city"]+'</td></tr>';
			}
			if (company["sector"]!="") {
				companies_html+='<tr><td style="width: 150px;"><b>Sector</b></td><td>'+company["sector"]+'</td></tr>';
			}
			if (company["website"]!="") {
				if (company["website"].substring(0, 3)=="www") {
					web_link = "https://"+company["website"]
				} else {
					web_link = company["website"]
				}
				companies_html+='<tr><td style="width: 150px;"><b>Website</b></td><td><a target="_blank" href="'+web_link+'">'+company["website"]+'</td></tr></table>';
			}
			students = company["students"];
			students_html = '<table align="center" class="stu_com" style="width: 88.5%;">';
			for (j=0; j<students.length; j++) {
				if (value.includes(students[j]["jnf_ids"][0])) {
					name = students[j]["name"];
					roll_no = students[j]["roll_no"];
					students_html += '<tr><td>'+roll_no+'</td><td>'+name+'</td>';
					if (students[j]["jnf_ids"].length==1) {
						students_html += '<td>'+ profiles[key][students[j]["jnf_ids"][0]]["profile"]+'</td></tr>';
					} else {
						students_html += '</tr>';
					}
				}
			}
			students_html += '</table>';
			companies_html+=students_html;
			profiles_list = value;
			for (i=0; i<profiles_list.length; i++) {
				profile = profiles[key][profiles_list[i]];
				profile_name = profile["profile"];
				companies_html+='<div class="com_name">'+profile_name+'</div><table align="center">';
				if (profile["about"]!="") {
					companies_html+='<tr><td style="width: 150px;"><b>About</b></td><td>'+profile["about"]+'</td></tr>';
				}
				if (profile["name"]!="") {
					companies_html+='<tr><td style="width: 150px;"><b>Company</b></td><td>'+profile["name"]+'</td></tr>';
				}
				if (profile["day"]!="") {
					companies_html+='<tr><td style="width: 150px;"><b>Day</b></td><td>'+profile["day"]+'</td></tr>';
				}
				if (profile["package"]!="") {
					companies_html+='<tr><td style="width: 150px;"><b>Package</b></td><td>'+profile["package"]+'</td></tr>';
				}
				if (profile["dep_list"]!="") {
					companies_html+='<tr><td style="width: 150px;"><b>Departments</b></td><td>'+profile["dep_list"]+'</td></tr>';
				}
				if (profile["selection"]!="") {
					companies_html+='<tr><td style="width: 150px;"><b>Selection</b></td><td>'+profile["selection"]+'</td></tr>';
				}
				if (profile["cgpa_cutoff"]!="") {
					companies_html+='<tr><td style="width: 150px;"><b>CGPA cutoff</b></td><td>'+profile["cgpa_cutoff"]+'</td></tr>';
				}
				if (profile["contract"]!="") {
					companies_html+='<tr><td style="width: 150px;"><b>Contract</b></td><td>'+profile["contract"]+'</td></tr></table>';
				}
			}
			days_html+=companies_html;
		}
	}
	document.getElementById("day_company").innerHTML=days_html;
}

function select_loc(value) {
	document.getElementById("selectValue_loc").innerHTML=value+" ";
	loc_html = "";
	com_ids = locations[value];
	count=0;
	for (i=0; i<com_ids.length; i++) {
		company = companies[com_ids[i]];
		if (count!=0) {
			companies_html ='<div class="break1"></div><div class="com_name">'+company["company"]+'</div><table align="center">'
		} else {
			companies_html = '<div class="com_name">'+company["company"]+'</div><table align="center">';
		}
		count+=1;
		if (company["about"]!="") {
			companies_html+='<tr><td style="width: 150px;"><b>About</b></td><td>'+company["about"]+'</td></tr>';
		}
		if (company["address"]!="") {
			companies_html+='<tr><td style="width: 150px;"><b>Address</b></td><td>'+company["address"]+'</td></tr>';
		}
		if (company["city"]!="") {
			companies_html+='<tr><td style="width: 150px;"><b>City</b></td><td>'+company["city"]+'</td></tr>';
		}
		if (company["sector"]!="") {
			companies_html+='<tr><td style="width: 150px;"><b>Sector</b></td><td>'+company["sector"]+'</td></tr>';
		}
		if (company["website"]!="") {
			if (company["website"].substring(0, 3)=="www") {
					web_link = "https://"+company["website"]
				} else {
					web_link = company["website"]
				}
				companies_html+='<tr><td style="width: 150px;"><b>Website</b></td><td><a target="_blank" href="'+web_link+'">'+company["website"]+'</td></tr></table>';
		}
		students = company["students"];
		students_html = '<table align="center" class="stu_com" style="width: 88.5%;">';
		for (j=0; j<students.length; j++) {
			name = students[j]["name"];
			roll_no = students[j]["roll_no"];
			students_html += '<tr><td>'+roll_no+'</td><td>'+name+'</td>';
			if (students[j]["jnf_ids"].length==1) {
				students_html += '<td>'+ profiles[com_ids[i]][students[j]["jnf_ids"][0]]["profile"]+'</td></tr>';
			} else {
				students_html += '</tr>';
			}
		}
		students_html += '</table>';
		companies_html+=students_html;
		profiles_list = company["profiles"];
		for (j=0; j<profiles_list.length; j++) {
			profile = profiles[com_ids[i]][profiles_list[j]];
			profile_name = profile["profile"];
			companies_html+='<div class="com_name">'+profile_name+'</div><table align="center">';
			if (profile["about"]!="") {
				companies_html+='<tr><td style="width: 150px;"><b>About</b></td><td>'+profile["about"]+'</td></tr>';
			}
			if (profile["name"]!="") {
				companies_html+='<tr><td style="width: 150px;"><b>Company</b></td><td>'+profile["name"]+'</td></tr>';
			}
			if (profile["day"]!="") {
				companies_html+='<tr><td style="width: 150px;"><b>Day</b></td><td>'+profile["day"]+'</td></tr>';
			}
			if (profile["package"]!="") {
				companies_html+='<tr><td style="width: 150px;"><b>Package</b></td><td>'+profile["package"]+'</td></tr>';
			}
			if (profile["dep_list"]!="") {
				companies_html+='<tr><td style="width: 150px;"><b>Departments</b></td><td>'+profile["dep_list"]+'</td></tr>';
			}
			if (profile["selection"]!="") {
				companies_html+='<tr><td style="width: 150px;"><b>Selection</b></td><td>'+profile["selection"]+'</td></tr>';
			}
			if (profile["cgpa_cutoff"]!="") {
				companies_html+='<tr><td style="width: 150px;"><b>CGPA cutoff</b></td><td>'+profile["cgpa_cutoff"]+'</td></tr>';
			}
			if (profile["contract"]!="") {
				companies_html+='<tr><td style="width: 150px;"><b>Contract</b></td><td>'+profile["contract"]+'</td></tr></table>';
			}
		}
		loc_html+=companies_html;
	}
	document.getElementById("loc_company").innerHTML=loc_html;
}

function select_sec(value) {
	document.getElementById("selectValue_sec").innerHTML=value+" ";
	sec_html = "";
	com_ids = sectors[value];
	count=0;
	for (i=0; i<com_ids.length; i++) {
		company = companies[com_ids[i]];
		if (count!=0) {
			companies_html ='<div class="break1"></div><div class="com_name">'+company["company"]+'</div><table align="center">'
		} else {
			companies_html = '<div class="com_name">'+company["company"]+'</div><table align="center">';
		}
		count+=1;
		if (company["about"]!="") {
			companies_html+='<tr><td style="width: 150px;"><b>About</b></td><td>'+company["about"]+'</td></tr>';
		}
		if (company["address"]!="") {
			companies_html+='<tr><td style="width: 150px;"><b>Address</b></td><td>'+company["address"]+'</td></tr>';
		}
		if (company["city"]!="") {
			companies_html+='<tr><td style="width: 150px;"><b>City</b></td><td>'+company["city"]+'</td></tr>';
		}
		if (company["sector"]!="") {
			companies_html+='<tr><td style="width: 150px;"><b>Sector</b></td><td>'+company["sector"]+'</td></tr>';
		}
		if (company["website"]!="") {
			if (company["website"].substring(0, 3)=="www") {
					web_link = "https://"+company["website"]
				} else {
					web_link = company["website"]
				}
				companies_html+='<tr><td style="width: 150px;"><b>Website</b></td><td><a target="_blank" href="'+web_link+'">'+company["website"]+'</td></tr></table>';
		}
		students = company["students"];
		students_html = '<table align="center" class="stu_com" style="width: 88.5%;">';
		for (j=0; j<students.length; j++) {
			name = students[j]["name"];
			roll_no = students[j]["roll_no"];
			students_html += '<tr><td>'+roll_no+'</td><td>'+name+'</td>';
			if (students[j]["jnf_ids"].length==1) {
				students_html += '<td>'+ profiles[com_ids[i]][students[j]["jnf_ids"][0]]["profile"]+'</td></tr>';
			} else {
				students_html += '</tr>';
			}
		}
		students_html += '</table>';
		companies_html+=students_html;
		profiles_list = company["profiles"];
		for (j=0; j<profiles_list.length; j++) {
			profile = profiles[com_ids[i]][profiles_list[j]];
			profile_name = profile["profile"];
			companies_html+='<div class="com_name">'+profile_name+'</div><table align="center">';
			if (profile["about"]!="") {
				companies_html+='<tr><td style="width: 150px;"><b>About</b></td><td>'+profile["about"]+'</td></tr>';
			}
			if (profile["name"]!="") {
				companies_html+='<tr><td style="width: 150px;"><b>Company</b></td><td>'+profile["name"]+'</td></tr>';
			}
			if (profile["day"]!="") {
				companies_html+='<tr><td style="width: 150px;"><b>Day</b></td><td>'+profile["day"]+'</td></tr>';
			}
			if (profile["package"]!="") {
				companies_html+='<tr><td style="width: 150px;"><b>Package</b></td><td>'+profile["package"]+'</td></tr>';
			}
			if (profile["dep_list"]!="") {
				companies_html+='<tr><td style="width: 150px;"><b>Departments</b></td><td>'+profile["dep_list"]+'</td></tr>';
			}
			if (profile["selection"]!="") {
				companies_html+='<tr><td style="width: 150px;"><b>Selection</b></td><td>'+profile["selection"]+'</td></tr>';
			}
			if (profile["cgpa_cutoff"]!="") {
				companies_html+='<tr><td style="width: 150px;"><b>CGPA cutoff</b></td><td>'+profile["cgpa_cutoff"]+'</td></tr>';
			}
			if (profile["contract"]!="") {
				companies_html+='<tr><td style="width: 150px;"><b>Contract</b></td><td>'+profile["contract"]+'</td></tr></table>';
			}
		}
		sec_html+=companies_html;
	}
	document.getElementById("sec_company").innerHTML=sec_html;
}

window.onload = function() {
	list_companies();
};