google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart_degree);
google.charts.setOnLoadCallback(drawChart_sector);
google.charts.setOnLoadCallback(drawChart_location);
google.charts.setOnLoadCallback(drawChart_package);
google.charts.setOnLoadCallback(drawChart_package_base);
google.charts.setOnLoadCallback(drawHist_base);
google.charts.setOnLoadCallback(drawHist_ctc);

google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawBar_dep);
google.charts.setOnLoadCallback(drawBar_dep_max);
google.charts.setOnLoadCallback(drawBar_sec);
google.charts.setOnLoadCallback(drawBar_day);
google.charts.setOnLoadCallback(drawBar_offers_day);
google.charts.setOnLoadCallback(drawBar_offers_top);
google.charts.setOnLoadCallback(drawBar_dep_stacked_base);
google.charts.setOnLoadCallback(drawBar_dep_stacked_ctc);

function drawChart_degree() {
	var data = google.visualization.arrayToDataTable([
	  ['Degree', 'Placed'],
	  ['B.Tech', 320],
	  ['Dual Degree', 320],
	  ['M.Sc', 103],
	  ['M.Tech',228],
	  ['PhD', 11]
	]);
	var options = {
	  title: 'Students segregation based on courses',
	  titlePosition: 'none',
	  colors: ['#F1555B', '#4B759E', '#17AF84', '#FFC66A', '#17BEBB', '#DFF3B1', '#D4AFB9', '#985F99', '#4D9DE0'],
	  chartArea: {top:30, bottom:30},
	  backgroundColor: { fillOpacity: 0 },
	  legend: {position: 'bottom', textStyle: {fontSize: 10}}
	};
	var chart = new google.visualization.PieChart(document.getElementById('piechart_degree'));
	chart.draw(data, options);
}

function drawChart_sector() {
	var data = google.visualization.arrayToDataTable([
	  ['Sector', 'Placed'],
	  ['IT/Software', 429],
	  ['Core Engineering', 181],
	  ['Analytics', 154],
	  ['Finance', 107],
	  ['Consulting', 96],
	  ['Automobile', 35],
	  ['Ecommerce', 29],
	  ['Teaching/Education', 28],
	  ['Manufacturing', 27],
	  ['Investment Banking', 26],
	  ['Construction', 26],
	  ['Professional Services', 17],
	  ['Telecommunication', 10],
	  ['Management', 8],
	  ['Health Care', 6],
	  ['Mining/Petrolium', 3],
	  ['Others', 116]
	]);
	var options = {
	  title: 'Students segregation based on sectors',
	  titlePosition: 'none',
	  colors: ['#F1555B', '#4B759E', '#17AF84', '#FFC66A', '#17BEBB', '#DFF3B1', '#D0E3CC', '#985F99', '#4D9DE0', '#EF7674', '#D6E681', '#61210F', '#966B9D', '#FCB97D', '#565554', '#CACAAA', '#D4AFB9'],
	  chartArea: {top:30, bottom:30},
	  backgroundColor: { fillOpacity: 0 },
	  legend: {position: 'bottom', textStyle: {fontSize: 10}}
	};
	var chart = new google.visualization.PieChart(document.getElementById('piechart_sector'));
	chart.draw(data, options);
}

function drawChart_location() {
	var data = google.visualization.arrayToDataTable([
	  	['Location', 'Placed'],
	  	['Bangalore', 348],
	  	['Gurgaon', 125],
	  	['Mumbai', 118],
	  	['Hyderabad', 114],
		['Pune', 102],
		['Chennai', 45],
		['Kolkata', 44],
		['Tokyo', 29],
		['Navi Mumbai', 21],
		['Noida', 19],
		['New Delhi', 9],
		['Hsinchu City', 9],
		['Nagoya City', 6],
		['Hosur', 4],		
		['Jamshedpur', 3],
		['Delhi', 2],
		['Ahmedabad', 1]
	]);
	var options = {
	  title: 'Students segregation based on location',
	  titlePosition: 'none',
	  colors: ['#F1555B', '#4B759E', '#17AF84', '#FFC66A', '#17BEBB', '#DFF3B1', '#D0E3CC', '#985F99', '#4D9DE0', '#EF7674', '#D6E681', '#61210F', '#966B9D', '#FCB97D', '#565554', '#CACAAA', '#D4AFB9'],
	  chartArea: {top:30, bottom:30},
	  backgroundColor: { fillOpacity: 0 },
	  legend: {position: 'bottom', textStyle: {fontSize: 10}}
	};
	var chart = new google.visualization.PieChart(document.getElementById('piechart_location'));
	chart.draw(data, options);
}

function drawChart_package() {
	var data = google.visualization.arrayToDataTable([
	  	['Package', 'Students'],
	  	['15 to 20 Lakhs', 224],
		['12 to 15 Lakhs', 173],
		['8 to 10 Lakhs', 172],
		['10 to 12 Lakhs', 133],
		['20 to 25 Lakhs', 103],
		['5 to 8 Lakhs', 89],
		['40 to 50 Lakhs', 56],
		['30 to 40 Lakhs', 34],
		['25 to 30 Lakhs', 11],
		['> 50 Lakhs', 6],
		['< 5 Lakhs', 0]
	]);
	var options = {
	  title: 'Students segregation based on package(CTC)',
	  titlePosition: 'none',
	  colors: ['#F1555B', '#4B759E', '#17AF84', '#FFC66A', '#17BEBB', '#DFF3B1', '#D0E3CC', '#985F99', '#4D9DE0', '#EF7674', '#D6E681', '#61210F', '#966B9D', '#FCB97D', '#565554', '#CACAAA', '#D4AFB9'],
	  chartArea: {top:0, bottom:30},
	  backgroundColor: { fillOpacity: 0 },
	  legend: {position: 'bottom', textStyle: {fontSize: 10}}
	};
	var chart = new google.visualization.PieChart(document.getElementById('piechart_package'));
	chart.draw(data, options);
}

function drawChart_package_base() {
	var data = google.visualization.arrayToDataTable([
	  	['Package', 'Students'],
	  	['8 to 10 Lakhs', 243],
	  	['12 to 15 Lakhs', 188],
	  	['10 to 12 Lakhs', 167],
	  	['15 to 20 Lakhs', 161],
	  	['5 to 8 Lakhs', 103],
		['20 to 25 Lakhs', 51],
		['< 5 Lakhs', 40],
		['25 to 30 Lakhs', 30],
		['30 to 50 Lakhs', 12],
		['> 50 Lakhs', 6]
	]);
	var options = {
	  title: 'Students segregation based on package(base)',
	  titlePosition: 'none',
	  colors: ['#F1555B', '#4B759E', '#17AF84', '#FFC66A', '#17BEBB', '#DFF3B1', '#D0E3CC', '#985F99', '#4D9DE0', '#EF7674', '#D6E681', '#61210F', '#966B9D', '#FCB97D', '#565554', '#CACAAA', '#D4AFB9'],
	  chartArea: {top:0, bottom:30},
	  backgroundColor: { fillOpacity: 0 },
	  legend: {position: 'bottom', textStyle: {fontSize: 10}}
	};
	var chart = new google.visualization.PieChart(document.getElementById('piechart_package_base'));
	chart.draw(data, options);
}

function createCustomHTMLContent(lable, v1, v2, v3, c1, c2) {
  return '<div style="padding:10px 10px 10px 10px; max-width: 170px; white-space: nowrap;">' +
      '<span style="font-size: 1.3em; font-weight: 500; color: #5B5B5B;">' + lable + '</span><br/>' +
      '<hr style="margin: 4px 0px 5px 0px;">' +
      '<table style="font-size: 1em;">' + '<tr>' +
      '<td style="padding-bottom: 2px; color: ' + c1 + '; white-space: nowrap;">Avg Base: <b>' + v1 + '</b></td>' + '</tr>' + '<tr>' +
      '<td style="padding-bottom: 2px; color: ' + c2 + '; white-space: nowrap;">Avg CTC: <b>' + v2 + '</b></td>' + '</tr>' + '<tr>' +
      '<td style="padding-bottom: 2px; color: #5B5B5B; white-space: nowrap;">Placed: <b>' + v3 + '</b></td>' + '</tr>' + '</table>' + '</div>';
}

function createCustomHTMLContentm(lable, v1, v2, v3, c1, c2) {
  return '<div style="padding:10px 10px 10px 10px; max-width: 170px; white-space: nowrap;">' +
      '<span style="font-size: 1.3em; font-weight: 500; color: #5B5B5B;">' + lable + '</span><br/>' +
      '<hr style="margin: 4px 0px 5px 0px;">' +
      '<table style="font-size: 1em;">' + '<tr>' +
      '<td style="padding-bottom: 2px; color: ' + c1 + '; white-space: nowrap;">Max Base: <b>' + v1 + '</b></td>' + '</tr>' + '<tr>' +
      '<td style="padding-bottom: 2px; color: ' + c2 + '; white-space: nowrap;">Max CTC: <b>' + v2 + '</b></td>' + '</tr>' + '<tr>' +
      '<td style="padding-bottom: 2px; color: #5B5B5B; white-space: nowrap;">Placed: <b>' + v3 + '</b></td>' + '</tr>' + '</table>' + '</div>';
}

function createCustomHTMLContentO(lable, v1, c1) {
  return '<div style="padding:10px 10px 10px 10px; max-width: 170px; white-space: nowrap;">' +
      '<span style="font-size: 1.3em; font-weight: 500; color: #5B5B5B;">' + lable + '</span><br/>' +
      '<hr style="margin: 4px 0px 5px 0px;">' +
      '<table style="font-size: 1em;">' + '<tr>' +
      '<td style="padding-bottom: 2px; color: ' + c1 + '; white-space: nowrap;">Offers: <b>' + v1 + '</b></td>' + '</tr>' + '<tr>' +
      '</table>' + '</div>';
}

function drawBar_dep() {
      var data = google.visualization.arrayToDataTable([
        ['Department', {'type': 'string', 'role': 'tooltip', 'p': {'html': true}}, 'Base', 'CTC'],
        ['AE', createCustomHTMLContent('AE', 11.0, 12.8, 41, '#F26469', '#4B759E'), 11.0, 12.8],
		['AG', createCustomHTMLContent('AG', 11.2, 13.2, 37, '#F26469', '#4B759E'), 11.2, 13.2],
		['AR', createCustomHTMLContent('AR', 8.4, 9.5, 28, '#F26469', '#4B759E'), 8.4, 9.5],
		['AT', createCustomHTMLContent('AT', 13.2, 16.0, 3, '#F26469', '#4B759E'), 13.2, 16.0],
		['BT', createCustomHTMLContent('BT', 12.3, 14.7, 23, '#F26469', '#4B759E'), 12.3, 14.7],
		['CE', createCustomHTMLContent('CE', 10.6, 13.2, 52, '#F26469', '#4B759E'), 10.6, 13.2],
		['CH', createCustomHTMLContent('CH', 12.4, 14.3, 76, '#F26469', '#4B759E'), 12.4, 14.3],
		['CL', createCustomHTMLContent('CL', 5.1, 5.7, 2, '#F26469', '#4B759E'), 5.1, 5.7],
		['CR', createCustomHTMLContent('CR', 4.6, 6.5, 2, '#F26469', '#4B759E'), 4.6, 6.5],
		['CS', createCustomHTMLContent('CS', 18.5, 26.3, 104, '#F26469', '#4B759E'), 18.5, 26.3],
		['CY', createCustomHTMLContent('CY', 8.8, 10.1, 18, '#F26469', '#4B759E'), 8.8, 10.1],
		['EC', createCustomHTMLContent('EC', 15.6, 20.6, 100, '#F26469', '#4B759E'), 15.6, 20.6],
		['EE', createCustomHTMLContent('EE', 14.5, 18.1, 74, '#F26469', '#4B759E'), 14.5, 18.1],
		['EX', createCustomHTMLContent('EX', 10.4, 11.4, 11, '#F26469', '#4B759E'), 10.4, 11.4],
		['GG', createCustomHTMLContent('GG', 9.7, 10.8, 13, '#F26469', '#4B759E'), 9.7, 10.8],
		['GS', createCustomHTMLContent('GS', 14.8, 21.5, 2, '#F26469', '#4B759E'), 14.8, 21.5],
		['HS', createCustomHTMLContent('HS', 12.9, 14.8, 29, '#F26469', '#4B759E'), 12.9, 14.8],
		['IE', createCustomHTMLContent('IE', 15.0, 20.1, 28, '#F26469', '#4B759E'), 15.0, 20.1],
		['IM', createCustomHTMLContent('IM', 12.3, 14.8, 38, '#F26469', '#4B759E'), 12.3, 14.8],
		['IP', createCustomHTMLContent('IP', 8.8, 9.3, 8, '#F26469', '#4B759E'), 8.8, 9.3],
		['IT', createCustomHTMLContent('IT', 12.0, 14.0, 1, '#F26469', '#4B759E'), 12.0, 14.0],
		['MA', createCustomHTMLContent('MA', 14.3, 19.9, 52, '#F26469', '#4B759E'), 14.3, 19.9],
		['ME', createCustomHTMLContent('ME', 13.0, 15.9, 87, '#F26469', '#4B759E'), 13.0, 15.9],
		['MF', createCustomHTMLContent('MF', 11.7, 13.8, 36, '#F26469', '#4B759E'), 11.7, 13.8],
		['MI', createCustomHTMLContent('MI', 11.8, 14.6, 46, '#F26469', '#4B759E'), 11.8, 14.6],
		['MM', createCustomHTMLContent('MM', 12.0, 14.0, 1, '#F26469', '#4B759E'), 12.0, 14.0],
		['MS', createCustomHTMLContent('MS', 10.6, 12.7, 1, '#F26469', '#4B759E'), 10.6, 12.7],
		['MT', createCustomHTMLContent('MT', 13.9, 17.7, 32, '#F26469', '#4B759E'), 13.9, 17.7],
		['NA', createCustomHTMLContent('NA', 10.1, 12.7, 24, '#F26469', '#4B759E'), 10.1, 12.7],
		['PH', createCustomHTMLContent('PH', 10.5, 12.2, 20, '#F26469', '#4B759E'), 10.5, 12.2],
		['QE', createCustomHTMLContent('QE', 12.5, 13.7, 6, '#F26469', '#4B759E'), 12.5, 13.7],
		['QM', createCustomHTMLContent('QM', 10.8, 14.7, 3, '#F26469', '#4B759E'), 10.8, 14.7],
		['RE', createCustomHTMLContent('RE', 9.2, 9.8, 2, '#F26469', '#4B759E'), 9.2, 9.8],
		['RT', createCustomHTMLContent('RT', 4.2, 5.4, 1, '#F26469', '#4B759E'), 4.2, 5.4]
      ]);

      var options = {
        title: 'Department wise Base & CTC',
        titlePosition: 'none',
        focusTarget: 'category',
        tooltip: { isHtml: true },
        chartArea: {top:20, bottom:30},
        backgroundColor: { fillOpacity: 0 },
        colors: ['#F26469', '#4B759E'],
        bar: {groupWidth: 17},
        legend: {position: 'bottom', textStyle: {fontSize: 10, color: '#5B5B5B'}},
        hAxis: {textPosition: 'out', textStyle: {bold: true, fontSize: 8.4, color: '#5B5B5B'}},
        vAxis: {textPosition: 'out', textStyle: {fontSize: 7}, ticks: [0, 5, 10, 15, 20, 25], gridlines: {color: 'transparent'}}
      };
      var chart = new google.visualization.ColumnChart(document.getElementById('chart_dep'));
      chart.draw(data, options);
    }

function drawBar_dep_max() {
      var data = google.visualization.arrayToDataTable([
        ['Department', {'type': 'string', 'role': 'tooltip', 'p': {'html': true}}, 'Base', 'CTC'],
        ['AE', createCustomHTMLContentm('AE', 20.0, 22.0, 41, '#17AF84', '#FFC66A'), 20.0, 22.0],
		['AG', createCustomHTMLContentm('AG', 20.0, 20.0, 37, '#17AF84', '#FFC66A'), 20.0, 20.0],
		['AR', createCustomHTMLContentm('AR', 12.9, 15.0, 28, '#17AF84', '#FFC66A'), 12.9, 15.0],
		['AT', createCustomHTMLContentm('AT', 16.0, 17.9, 3, '#17AF84', '#FFC66A'), 16.0, 17.9],
		['BT', createCustomHTMLContentm('BT', 32.0, 32.6, 23, '#17AF84', '#FFC66A'), 32.0, 32.6],
		['CE', createCustomHTMLContentm('CE', 21.0, 32.0, 52, '#17AF84', '#FFC66A'), 21.0, 32.0],
		['CH', createCustomHTMLContentm('CH', 58.88, 58.8, 76, '#17AF84', '#FFC66A'), 58.88, 58.8],
		['CL', createCustomHTMLContentm('CL', 5.97, 6.0, 2, '#17AF84', '#FFC66A'), 5.97, 6.0],
		['CR', createCustomHTMLContentm('CR', 5.0, 7.5, 2, '#17AF84', '#FFC66A'), 5.0, 7.5],
		['CS', createCustomHTMLContentm('CS', 84.7, 104.3, 104, '#17AF84', '#FFC66A'), 84.7, 104.3],
		['CY', createCustomHTMLContentm('CY', 21.0, 32.0, 18, '#17AF84', '#FFC66A'), 21.0, 32.0],
		['EC', createCustomHTMLContentm('EC', 58.88, 58.8, 100, '#17AF84', '#FFC66A'), 58.88, 58.8],
		['EE', createCustomHTMLContentm('EE', 35.0931, 43.0, 74, '#17AF84', '#FFC66A'), 35.0931, 43.0],
		['EX', createCustomHTMLContentm('EX', 16.0, 18.6, 11, '#17AF84', '#FFC66A'), 16.0, 18.6],
		['GG', createCustomHTMLContentm('GG', 12.0, 15.4, 13, '#17AF84', '#FFC66A'), 12.0, 15.4],
		['GS', createCustomHTMLContentm('GS', 18.0, 25.0, 2, '#17AF84', '#FFC66A'), 18.0, 25.0],
		['HS', createCustomHTMLContentm('HS', 23.0, 31.5, 29, '#17AF84', '#FFC66A'), 23.0, 31.5],
		['IE', createCustomHTMLContentm('IE', 27.52, 43.0, 28, '#17AF84', '#FFC66A'), 27.52, 43.0],
		['IM', createCustomHTMLContentm('IM', 20.0, 30.6, 38, '#17AF84', '#FFC66A'), 20.0, 30.6],
		['IP', createCustomHTMLContentm('IP', 10.0, 11.0, 8, '#17AF84', '#FFC66A'), 10.0, 11.0],
		['IT', createCustomHTMLContentm('IT', 12.0, 14.0, 1, '#17AF84', '#FFC66A'), 12.0, 14.0],
		['MA', createCustomHTMLContentm('MA', 30.0, 43.0, 52, '#17AF84', '#FFC66A'), 30.0, 43.0],
		['ME', createCustomHTMLContentm('ME', 27.52, 42.7, 87, '#17AF84', '#FFC66A'), 27.52, 42.7],
		['MF', createCustomHTMLContentm('MF', 20.0, 25.0, 36, '#17AF84', '#FFC66A'), 20.0, 25.0],
		['MI', createCustomHTMLContentm('MI', 21.0, 35, 46, '#17AF84', '#FFC66A'), 21.0, 35],
		['MM', createCustomHTMLContentm('MM', 12.0, 14.0, 1, '#17AF84', '#FFC66A'), 12.0, 14.0],
		['MS', createCustomHTMLContentm('MS', 10.6, 12.65, 1, '#17AF84', '#FFC66A'), 10.6, 12.65],
		['MT', createCustomHTMLContentm('MT', 27.52, 42.7, 32, '#17AF84', '#FFC66A'), 27.52, 42.7],
		['NA', createCustomHTMLContentm('NA', 16.0, 25.5, 24, '#17AF84', '#FFC66A'), 16.0, 25.5],
		['PH', createCustomHTMLContentm('PH', 27.52, 27.5, 20, '#17AF84', '#FFC66A'), 27.52, 27.5],
		['QE', createCustomHTMLContentm('QE', 15.66, 18.0, 6, '#17AF84', '#FFC66A'), 15.66, 18.0],
		['QM', createCustomHTMLContentm('QM', 18.0, 25.0, 3, '#17AF84', '#FFC66A'), 18.0, 25.0],
		['RE', createCustomHTMLContentm('RE', 9.6, 10.0, 2, '#17AF84', '#FFC66A'), 9.6, 10.0],
		['RT', createCustomHTMLContentm('RT', 4.2, 5.4, 1, '#17AF84', '#FFC66A'), 4.2, 5.4]
      ]);

      var options = {
        title: 'Department wise max Base & CTC',
        titlePosition: 'none',
        focusTarget: 'category',
        tooltip: { isHtml: true },
        chartArea: {top:30, bottom:30},
        backgroundColor: { fillOpacity: 0 },
        colors: ['#17AF84', '#FFC66A'],
        bar: {groupWidth: 17},
        legend: {position: 'bottom', textStyle: {fontSize: 10, color: '#5B5B5B'}},
        hAxis: {textPosition: 'out', textStyle: {bold: true, fontSize: 8.4, color: '#5B5B5B'}},
        vAxis: {textPosition: 'out', textStyle: {fontSize: 7}, ticks: [0, 15, 30, 45, 60, 75, 90, 105], gridlines: {color: 'transparent'}}
      };
      var chart = new google.visualization.ColumnChart(document.getElementById('chart_dep_max'));
      chart.draw(data, options);
    }

function drawBar_dep_stacked_ctc() {
      var data = google.visualization.arrayToDataTable([
        ['Department', '5 to 8 Lakhs', '8 to 10 Lakhs', '10 to 12 Lakhs', '12 to 15 Lakhs', '15 to 20 Lakhs', '20 to 25 Lakhs', '25 to 30 Lakhs', '30 to 40 Lakhs', '40 to 50 Lakhs', '> 50 Lakhs'],
		['AE', 2, 15, 5, 7, 11, 1, 0, 0, 0, 0],
		['AG', 5, 4, 6, 9, 13, 0, 0, 0, 0, 0],
		['AR', 12, 6, 4, 6, 0, 0, 0, 0, 0, 0],
		['BT', 3, 4, 3, 4, 5, 1, 0, 3, 0, 0],
		['CE', 11, 9, 8, 12, 7, 1, 0, 4, 0, 0],
		['CH', 7, 12, 21, 12, 16, 5, 0, 2, 0, 1],
		['CS', 0, 1, 6, 18, 16, 26, 2, 11, 21, 3],
		['CY', 9, 3, 3, 0, 2, 0, 0, 1, 0, 0],
		['EC', 4, 6, 6, 16, 34, 20, 1, 1, 10, 2],
		['EE', 5, 16, 2, 7, 22, 12, 0, 4, 6, 0],
		['EX', 2, 2, 3, 2, 2, 0, 0, 0, 0, 0],
		['GG', 1, 5, 5, 1, 1, 0, 0, 0, 0, 0],
		['HS', 0, 6, 4, 11, 5, 1, 0, 2, 0, 0],
		['IE', 0, 5, 3, 1, 7, 7, 1, 2, 2, 0],
		['IM', 0, 4, 9, 9, 13, 1, 1, 1, 0, 0],
		['MA', 4, 3, 4, 9, 16, 6, 1, 2, 7, 0],
		['ME', 3, 23, 14, 14, 14, 11, 2, 1, 5, 0],
		['MF', 1, 8, 7, 10, 7, 3, 0, 0, 0, 0],
		['MI', 1, 12, 8, 10, 9, 4, 0, 2, 0, 0],
		['MT', 1, 10, 3, 4, 8, 0, 1, 0, 5, 0],
		['NA', 4, 8, 2, 2, 6, 1, 1, 0, 0, 0],
		['PH', 6, 4, 1, 5, 1, 2, 1, 0, 0, 0],
		['QE', 0, 2, 1, 0, 3, 0, 0, 0, 0, 0],
		['QM', 0, 1, 1, 0, 0, 1, 0, 0, 0, 0]
      ]);

      var options = {
        title: 'Department wise ctc segregation',
        titlePosition: 'none',
        chartArea: {top:30, bottom:30},
        backgroundColor: { fillOpacity: 0 },
        colors: ["#F24349", "#FF444B", "#F1555B", "#FF6368", "#FF777C", "#FF8C90", "#FFA0A3", "#FFB5B7", "#FFC9CB", "#FFDDDE"],
        bar: {groupWidth: 20},
        legend: {position: 'bottom', textStyle: {fontSize: 10, color: '#5B5B5B'}},
        vAxis: {textPosition: 'out', textStyle: {fontSize: 6}, ticks: [0, .2, .4, .6, .8, 1], gridlines: {color: '#D4D6DC'}},
        hAxis: {textPosition: 'out', textStyle: {bold: true, fontSize: 8.4, color: '#5B5B5B'}},
        isStacked: 'percent'
      };
      var chart = new google.visualization.ColumnChart(document.getElementById('dep_stacked_ctc'));
      chart.draw(data, options);
    }

function drawBar_dep_stacked_base() {
      var data = google.visualization.arrayToDataTable([
        ['Department', '< 5 Lakhs', '5 to 8 Lakhs', '8 to 10 Lakhs', '10 to 12 Lakhs', '12 to 15 Lakhs', '15 to 20 Lakhs', '20 to 25 Lakhs', '25 to 30 Lakhs', '30 to 40 Lakhs', '40 to 50 Lakhs', '> 50 Lakhs'],
        ['AE', 1, 8, 13, 5, 10, 4, 0, 0, 0, 0, 0],
		['AG', 5, 2, 11, 4, 7, 8, 0, 0, 0, 0, 0],
		['AR', 0, 13, 12, 2, 1, 0, 0, 0, 0, 0, 0],
		['BT', 2, 4, 3, 4, 6, 2, 1, 0, 1, 0, 0],
		['CE', 2, 11, 16, 11, 5, 4, 3, 0, 0, 0, 0],
		['CH', 5, 6, 26, 13, 9, 13, 1, 1, 1, 0, 1],
		['CS', 0, 0, 6, 17, 26, 27, 15, 7, 2, 1, 3],
		['CY', 4, 5, 4, 2, 0, 2, 1, 0, 0, 0, 0],
		['EC', 1, 7, 8, 27, 23, 18, 8, 2, 4, 0, 2],
		['EE', 1, 4, 20, 9, 13, 16, 6, 2, 3, 0, 0],
		['EX', 2, 0, 2, 5, 0, 2, 0, 0, 0, 0, 0],
		['GG', 1, 2, 4, 6, 0, 0, 0, 0, 0, 0, 0],
		['HS', 0, 1, 9, 2, 13, 1, 3, 0, 0, 0, 0],
		['IE', 0, 1, 7, 1, 10, 3, 4, 2, 0, 0, 0],
		['IM', 0, 3, 11, 7, 8, 9, 0, 0, 0, 0, 0],
		['MA', 4, 1, 7, 8, 12, 12, 4, 4, 0, 0, 0],
		['ME', 1, 7, 31, 13, 14, 11, 4, 6, 0, 0, 0],
		['MF', 0, 5, 11, 9, 4, 7, 0, 0, 0, 0, 0],
		['MI', 1, 3, 15, 9, 10, 7, 1, 0, 0, 0, 0],
		['MT', 1, 3, 8, 4, 6, 5, 0, 5, 0, 0, 0],
		['NA', 2, 7, 5, 2, 5, 3, 0, 0, 0, 0, 0],
		['PH', 3, 4, 5, 0, 5, 2, 0, 1, 0, 0, 0],
		['QE', 0, 0, 2, 1, 1, 2, 0, 0, 0, 0, 0],
		['QM', 0, 2, 0, 0, 0, 1, 0, 0, 0, 0, 0]
      ]);

      var options = {
        title: 'Department wise base segregation',
        titlePosition: 'none',
        chartArea: {top:30, bottom:30},
        backgroundColor: { fillOpacity: 0 },
        colors: ['#1669BC', '#2571BC', '#3478BC', '#4380BC', '#5689BC', '#6591BC', '#7498BC', '#84A0BC', '#93A7BC', '#9FB4CC', '#ABBBCC'],
        bar: {groupWidth: 20},
        legend: {position: 'bottom', textStyle: {fontSize: 10, color: '#5B5B5B'}},
        vAxis: {textPosition: 'out', textStyle: {fontSize: 6}, ticks: [0, .2, .4, .6, .8, 1], gridlines: {color: '#D4D6DC'}},
        hAxis: {textPosition: 'out', textStyle: {bold: true, fontSize: 8.4, color: '#5B5B5B'}},
        isStacked: 'percent'
      };
      var chart = new google.visualization.ColumnChart(document.getElementById('dep_stacked_base'));
      chart.draw(data, options);
    }

function drawBar_day() {
    var data = google.visualization.arrayToDataTable([
        ['Days', {'type': 'string', 'role': 'tooltip', 'p': {'html': true}}, 'Base', 'CTC'],
        ['Day 1', createCustomHTMLContent('Day 1', 17.5, 25.9, 170, '#9DC5BB', '#8D5A97'), 17.5, 25.9],
		['Day 2', createCustomHTMLContent('Day 2', 15.7, 20.5, 249, '#9DC5BB', '#8D5A97'), 15.7, 20.5],
		['Day 3', createCustomHTMLContent('Day 3', 13.6, 15.1, 162, '#9DC5BB', '#8D5A97'), 13.6, 15.1],
		['Day 4', createCustomHTMLContent('Day 4', 13.1, 15.5, 83, '#9DC5BB', '#8D5A97'), 13.1, 15.5],
		['Day 5', createCustomHTMLContent('Day 5', 9.4, 10.8, 93, '#9DC5BB', '#8D5A97'), 9.4, 10.8],
		['Day 6', createCustomHTMLContent('Day 6', 10.5, 11.4, 65, '#9DC5BB', '#8D5A97'), 10.5, 11.4],
		['Day 7', createCustomHTMLContent('Day 7', 12.1, 12.6, 31, '#9DC5BB', '#8D5A97'), 12.1, 12.6],
		['Day 8', createCustomHTMLContent('Day 8', 6.3, 7.6, 65, '#9DC5BB', '#8D5A97'), 6.3, 7.6],
		['Day 9', createCustomHTMLContent('Day 9', 8.6, 9.3, 42, '#9DC5BB', '#8D5A97'), 8.6, 9.3],
		['Day 10', createCustomHTMLContent('Day 10', 7.1, 9.6, 35, '#9DC5BB', '#8D5A97'), 7.1, 9.6],
		['Day 11', createCustomHTMLContent('Day 11', 6.8, 6.9, 12, '#9DC5BB', '#8D5A97'), 6.8, 6.9]
      ]);

      var options = {
        title: 'Day wise Base & CTC',
        titlePosition: 'none',
        focusTarget: 'category',
        tooltip: { isHtml: true },
        chartArea: {top:5, bottom:30},
        backgroundColor: { fillOpacity: 0 },
        colors: ['#9DC5BB', '#8D5A97'],
        bar: {groupWidth: 25},
        legend: {position: 'bottom', textStyle: {fontSize: 10, color: '#5B5B5B'}},
        hAxis: {textPosition: 'out', textStyle: {bold: true, fontSize: 8.4, color: '#5B5B5B'}},
        vAxis: {textPosition: 'out', textStyle: {fontSize: 7}, ticks: [0, 5, 10, 15, 20, 25], gridlines: {color: 'transparent'}}
      };
      var chart = new google.visualization.ColumnChart(document.getElementById('chart_day'));
      chart.draw(data, options);
    }

function drawBar_sec() {
	var data = new google.visualization.DataTable();
	data.addColumn('string', 'Sector');
	data.addColumn({'type': 'string', 'role': 'tooltip', 'p': {'html': true}});
	data.addColumn('number', 'Base');
	data.addColumn('number', 'CTC');
    data.addRows([
      	['Manufacturing', createCustomHTMLContent('Manufacturing', 20.0, 23.8, 27, '#33658A', '#C4D6B0'), 20.0, 23.8],
		['Telecommunication', createCustomHTMLContent('Telecommunication', 19.0, 19.8, 10, '#33658A', '#C4D6B0'), 19.0, 19.8],
		['Investment Banking', createCustomHTMLContent('Investment Banking', 18.6, 27.3, 26, '#33658A', '#C4D6B0'), 18.6, 27.3],
		['IT/Software', createCustomHTMLContent('IT/Software', 14.4, 18.6, 427, '#33658A', '#C4D6B0'), 14.4, 18.6],
		['Finance', createCustomHTMLContent('Finance', 14.0, 16.9, 107, '#33658A', '#C4D6B0'), 14.0, 16.9],
		['Core Engineering', createCustomHTMLContent('Core Engineering', 13.4, 15.7, 181, '#33658A', '#C4D6B0'), 13.4, 15.7],
		['Consulting', createCustomHTMLContent('Consulting', 13.1, 17.3, 96, '#33658A', '#C4D6B0'), 13.1, 17.3],
		['Automobile', createCustomHTMLContent('Automobile', 12.1, 12.9, 35, '#33658A', '#C4D6B0'), 12.1, 12.9],
		['Ecommerce', createCustomHTMLContent('Ecommerce', 11.9, 13.8, 29, '#33658A', '#C4D6B0'), 11.9, 13.8],
		['Analytics', createCustomHTMLContent('Analytics', 10.6, 12.6, 154, '#33658A', '#C4D6B0'), 10.6, 12.6],
		['Health Care', createCustomHTMLContent('Health Care', 10.0, 11.7, 6, '#33658A', '#C4D6B0'), 10.0, 11.7],
		['Others', createCustomHTMLContent('Others', 9.8, 11.9, 116, '#33658A', '#C4D6B0'), 9.8, 11.9],
		['Mining/Petrolium', createCustomHTMLContent('Mining/Petrolium', 9.5, 13.0, 3, '#33658A', '#C4D6B0'), 9.5, 13.0],
		['Teaching/Education', createCustomHTMLContent('Teaching/Education', 9.2, 12.3, 28, '#33658A', '#C4D6B0'), 9.2, 12.3],
		['Professional Services', createCustomHTMLContent('Professional Services', 8.9, 9.4, 17, '#33658A', '#C4D6B0'), 8.9, 9.4],
		['Construction', createCustomHTMLContent('Construction', 7.7, 9.0, 26, '#33658A', '#C4D6B0'), 7.7, 9.0],
		['Management', createCustomHTMLContent('Management', 6.3, 8.2, 8, '#33658A', '#C4D6B0'), 6.3, 8.2]
    ]);

      var options = {
        title: 'Sector wise Base & CTC',
        colors: ['#33658A', '#C4D6B0'],
        bar: {groupWidth: 17},
        focusTarget: 'category',
        tooltip: { isHtml: true },
        titlePosition: 'none',
        chartArea: {top:25, bottom:30, left:130, right:130},
        backgroundColor: { fillOpacity: 0 },
        legend: {position: 'bottom', textStyle: {fontSize: 10, color: '#5B5B5B'}},
        hAxis: {textPosition: 'none', gridlines: {color: 'transparent'}},
        vAxis: {textPosition: 'out', textStyle: {bold: true, fontSize: 10, color: '#5B5B5B'}}
      };
      new google.visualization.BarChart(document.getElementById('chart_sec')).draw(data, options);
    }

function drawBar_offers_day() {
    var data = google.visualization.arrayToDataTable([
        ['Days', {'type': 'string', 'role': 'tooltip', 'p': {'html': true}}, 'Offers', { role: 'annotation' }],
        ['Day 1', createCustomHTMLContentO('Day 1', 170, '#F1555B'), 170, 170],
		['Day 2', createCustomHTMLContentO('Day 2', 249, '#F1555B'), 249, 249],
		['Day 3', createCustomHTMLContentO('Day 3', 162, '#F1555B'), 162, 162],
		['Day 4', createCustomHTMLContentO('Day 4', 83, '#F1555B'), 83, 83],
		['Day 5', createCustomHTMLContentO('Day 5', 93, '#F1555B'), 93, 93],
		['Day 6', createCustomHTMLContentO('Day 6', 65, '#F1555B'), 65, 65],
		['Day 7', createCustomHTMLContentO('Day 7', 31, '#F1555B'), 31, 31],
		['Day 8', createCustomHTMLContentO('Day 8', 65, '#F1555B'), 65, 65],
		['Day 9', createCustomHTMLContentO('Day 9', 42, '#F1555B'), 42, 42],
		['Day 10', createCustomHTMLContentO('Day 10', 35, '#F1555B'), 35, 35],
		['Day 11', createCustomHTMLContentO('Day 11', 12, '#F1555B'), 12, 12]
      ]);

      var options = {
        title: 'Day wise Offers',
        titlePosition: 'none',
        focusTarget: 'category',
        tooltip: { isHtml: true },
        chartArea: {top:20, bottom:30},
        backgroundColor: { fillOpacity: 0 },
        colors: ['#F1555B'],
        bar: {groupWidth: 25},
        legend: {position: 'none'},
        hAxis: {textPosition: 'out', textStyle: {bold: true, fontSize: 8.4, color: '#5B5B5B'}},
        vAxis: {textPosition: 'out', textStyle: {fontSize: 7}, gridlines: {color: 'transparent'}},
        annotations: {textStyle: {fontSize: 10}}
      };
      var chart = new google.visualization.ColumnChart(document.getElementById('chart_offers_day'));
      chart.draw(data, options);
    }

function drawBar_offers_top() {
    var data = google.visualization.arrayToDataTable([
        ['Company', {'type': 'string', 'role': 'tooltip', 'p': {'html': true}}, 'Offers', { role: 'annotation' }],
        ['Honeywell', createCustomHTMLContentO('Honeywell', 36, '#FA8E46'), 36, 36],
		['EXL Service', createCustomHTMLContentO('EXL Service', 28, '#FA8E46'), 28, 28],
		['Sri Chaitanya', createCustomHTMLContentO('Sri Chaitanya', 27, '#FA8E46'), 27, 27],
		['Microsoft India', createCustomHTMLContentO('Microsoft India', 24, '#FA8E46'), 24, 24],
		['OLA', createCustomHTMLContentO('OLA', 22, '#FA8E46'), 22, 22],
		['Barclays', createCustomHTMLContentO('Barclays', 20, '#FA8E46'), 20, 20],
		['Accenture Japan', createCustomHTMLContentO('Accenture Japan', 19, '#FA8E46'), 19, 19],
		['Fractal Analytics', createCustomHTMLContentO('Fractal Analytics', 19, '#FA8E46'), 19, 19],
		['Samsung, Bangalore', createCustomHTMLContentO('Samsung, Bangalore', 19, '#FA8E46'), 19, 19],
		['Mastercard', createCustomHTMLContentO('Mastercard', 18, '#FA8E46'), 18, 18],
		['HCL Technologies', createCustomHTMLContentO('HCL Technologies', 16, '#FA8E46'), 16, 16],
		['Bajaj Finance', createCustomHTMLContentO('Bajaj Finance', 15, '#FA8E46'), 15, 15],
		['Goldman Sachs', createCustomHTMLContentO('Goldman Sachs', 14, '#FA8E46'), 14, 14],
		['Axis Bank', createCustomHTMLContentO('Axis Bank', 12, '#FA8E46'), 12, 12],
		['Sprinklr India', createCustomHTMLContentO('Sprinklr India', 12, '#FA8E46'), 12, 12]
      ]);

      var options = {
        title: 'Top recruiters by no.of offers',
        titlePosition: 'none',
        focusTarget: 'category',
        tooltip: { isHtml: true },
        chartArea: {top:25, bottom:5, left:130, right:130},
        backgroundColor: { fillOpacity: 0 },
        colors: ['#FA8E46'],
        bar: {groupWidth: 17},
        hAxis: {textPosition: 'none', gridlines: {color: 'transparent'}},
        vAxis: {textPosition: 'out', textStyle: {bold: true, fontSize: 10, color: '#5B5B5B'}},
        legend: {position: 'none'},
        annotations: {textStyle: {fontSize: 10, color: 'grey',}}
      };
      var chart = new google.visualization.BarChart(document.getElementById('chart_offers_top'));
      chart.draw(data, options);
    }

function drawHist_base() {
    var data = google.visualization.arrayToDataTable([
               ['Student Roll No', 'Base'],
               ['16EE10044', 20.0], ['12EC10009', 6.30336], ['16EE10046', 17.0], ['16EE10043', 17.0], ['15CS30021', 16.0], ['15QE30002', 14.0], ['16EE10049', 16.0], ['18GS61R01', 11.5], ['15CH30024', 14.1], ['15CH30026', 12.0], ['15CH30020', 27.85], ['15CH30023', 20.0], ['18EC64R03', 18.0], ['15CH30028', 10.0], ['15IM91R02', 10.0], ['15MA20032', 12.0], ['16CS10022', 10.7], ['14CS10047', 16.0], ['15MA20037', 19.392], ['15MA20034', 11.88], ['15MA20035', 13.0], ['15EC32002', 6.5], ['15EC32001', 14.0], ['15EC32006', 12.0], ['15EC32007', 14.0], ['15EC32004', 35.09310000000001], ['15IM30014', 16.0], ['15EC32008', 11.5], ['18EE62R10', 9.0], ['15IM30011', 9.0], ['18EE62R16', 9.0], ['18EE62R15', 7.0], ['14EC10037', 13.0], ['15ME33018', 10.0], ['15MF10020', 7.0], ['16ME10013', 9.0], ['18CH60R04', 4.2], ['16ME10018', 11.0], ['16EC10067', 13.0], ['16EC10066', 58.88], ['16EC10063', 11.88], ['15QE30007', 12.0], ['15QE30004', 8.8], ['15QE30005', 15.66], ['16MI10027', 16.0], ['15QE30001', 15.5], ['16CS10009', 15.5], ['16CS10008', 13.5], ['16CS10004', 13.5], ['16CS10006', 58.88], ['16CS10001', 14.0], ['18GS61R04', 18.0], ['15CS30046', 27.52], ['15HS20026', 21.0], ['15CS30044', 16.1], ['15CS30045', 30.0], ['15HS20031', 16.0], ['15CS30043', 30.0], ['15HS20037', 13.0], ['15HS20032', 15.0], ['18NA60R01', 7.5], ['15ME32001', 18.35], ['15ME32003', 27.52], ['15HS20039', 9.0], ['16IE10034', 11.2], ['16IE10035', 27.52], ['16IE10036', 13.0], ['16CH10036', 16.0], ['16IE10030', 8.5], ['16CH10030', 58.88], ['16IE10032', 16.0], ['16CH10032', 8.5], ['16EE72P01', 9.0], ['16EE72P03', 35.09310000000001], ['18CH60R58', 9.0], ['15MI31030', 10.0], ['15AG36007', 13.5], ['15AG36005', 14.0], ['15AG36003', 9.3], ['15MI3PE03', 16.0], ['15MI3PE02', 6.5], ['15MI3PE01', 8.0], ['15AG36008', 11.5], ['15AG36009', 9.0], ['16IM10029', 16.0], ['15MI33017', 13.0], ['16IM10023', 8.5], ['15MI33010', 18.5], ['18CL60R09', 4.2], ['16IM10020', 12.3], ['16IM10027', 9.0], ['15MI31031', 8.5], ['15MT30026', 6.5], ['16NA10026', 14.5], ['15MT30024', 16.0], ['15MT30023', 9.0], ['15MT30022', 9.0], ['15MT30021', 8.8], ['18AE60R20', 4.2], ['15MT30029', 15.0], ['15MT30028', 8.5], ['18CS60R71', 18.0], ['18CS60R70', 16.0], ['18CE62R19', 4.2], ['18CS60R75', 12.0], ['16MT10009', 13.5], ['16CE10003', 10.0], ['16CE10002', 15.66], ['16MT10005', 7.5], ['15HS20011', 13.5], ['15AR10012', 7.0], ['16CE10004', 5.0], ['16CH10026', 9.0], ['18CH60R23', 7.0], ['18MA40015', 4.1], ['18MA40016', 5.97], ['18CH60R29', 9.0], ['18MI60R09', 13.0], ['15EX20008', 16.0], ['18EC62R11', 11.5], ['15EX20005', 11.9], ['15EX20006', 12.0], ['15EX20007', 9.0], ['18EC62R15', 12.0], ['15QM30004', 6.5], ['15QM30005', 18.0], ['15QM30002', 8.0], ['16BT10014', 18.5], ['16BT10015', 4.2], ['15ME33022', 9.0], ['17IP63021', 10.0], ['15IM30017', 15.0], ['14GG20030', 12.0], ['11EC91R13', 10.0], ['15EC35014', 12.0], ['15EC35017', 13.0], ['15EC35010', 23.0], ['15PH20036', 7.0], ['15EC35013', 7.5], ['18MA60R02', 23.0], ['18MA60R03', 23.0], ['18ME61R11', 8.5], ['18MA60R07', 8.5], ['15ME31001', 20.0], ['16AG10006', 16.0], ['15CE33002', 8.5], ['16AG10003', 8.0], ['15CE33004', 10.0], ['15ME31007', 10.0], ['15ME31006', 13.0], ['15AE3FP15', 14.0], ['18EX40011', 4.2], ['15EE91R10', 8.0], ['16ME10058', 14.0], ['16ME10056', 27.52], ['16EE10010', 17.0], ['16ME10055', 8.5], ['16ME10053', 12.0], ['16EE10014', 10.9], ['16EE10015', 10.9], ['15AE30024', 10.0], ['15AE30027', 16.0], ['15AE30020', 8.0], ['15AE30021', 12.9], ['15AE30022', 10.0], ['15AE30023', 10.0], ['15MI31002', 8.5], ['15ME10057', 8.5], ['15AE30029', 15.0], ['15MI3FP21', 14.71783], ['15IM30016', 8.0], ['15AR10031', 6.5], ['13MA20017', 12.0], ['15MI33014', 12.0], ['15MI33015', 13.5], ['16MF10015', 14.14], ['16MF10014', 20.0], ['16MF10013', 12.9], ['15MI33012', 8.5], ['18EE63R08', 9.5], ['15AR10033', 7.5], ['15AR10030', 7.0], ['18AG63R17', 4.2], ['17IP63013', 7.0], ['15AR10034', 12.9], ['17IP63015', 10.0], ['16IM10021', 8.5], ['17IP63019', 10.0], ['15BT30031', 8.5], ['18AR60R17', 6.5], ['18AR60R10', 5.75], ['15BT30034', 14.5], ['15PH20027', 14.0], ['15ME33038', 10.0], ['15NA30015', 10.0], ['15NA30012', 15.0], ['15NA30013', 6.5], ['15NA30010', 16.0], ['15PH20026', 13.5], ['15ME33032', 12.0], ['16EC10033', 11.0], ['15ME33031', 13.0], ['16EC10036', 56.0], ['15ME33037', 9.6], ['17IM71P01', 10.0], ['15ME33035', 23.68], ['15EE10033', 8.5], ['15AG3FP05', 14.0], ['18MA60R15', 15.1], ['17CS71P01', 10.0], ['15AG3FP09', 14.0], ['16NA10005', 4.1], ['18ME61R07', 7.0], ['15CS30039', 13.0], ['15CS30038', 19.392], ['15CS30035', 16.1], ['15CS30033', 21.0], ['15NA30014', 8.5], ['15CS30030', 58.88], ['15AG3EP03', 15.5], ['15CY20029', 9.0], ['16EC10039', 13.0], ['18GG40006', 11.9], ['13PH20006', 4.2], ['14AE10004', 6.30336], ['16IE10005', 15.0], ['15CY20022', 8.5], ['16CH10060', 7.782], ['18CH60R61', 5.0], ['15AE30002', 9.6], ['15CY20024', 11.0], ['16CE10016', 12.0], ['18AT61R02', 16.0], ['18EE63R02', 10.0], ['15NA30011', 10.95], ['14PH20025', 9.0], ['18CY40002', 4.2], ['16CS10045', 16.1], ['18CY40009', 4.2], ['14PH20028', 16.0], ['18AE60R07', 8.0], ['15MI31023', 15.0], ['15MI31021', 15.5], ['15MI31020', 9.0], ['15MI31027', 15.66], ['15MI31026', 8.5], ['15MI31025', 14.0], ['15MI31024', 11.0], ['16NA10014', 5.0], ['15MI31029', 15.0], ['16NA10016', 8.5], ['16AE10027', 12.9], ['15MF3IM22', 15.0], ['16NA10013', 16.0], ['15MF3IM20', 10.0], ['18AE60R10', 8.0], ['18AE60R13', 7.0], ['18CR60R04', 5.0], ['18AE60R17', 9.6], ['18CS60R20', 23.0], ['18CS60R21', 13.0], ['18CS60R22', 27.52], ['18AG66R12', 4.2], ['18AE60R08', 10.9], ['18CS60R26', 18.0], ['16CE10050', 15.0], ['16CE10052', 21.0], ['16CE10055', 11.2], ['16CE10057', 15.0], ['16EC10035', 10.0], ['16CE10059', 12.0], ['13CE10026', 7.36], ['15CE36006', 13.0], ['15CE36004', 10.0], ['16EE10054', 13.0], ['16EE10052', 14.0], ['16EE10005', 16.0], ['15CH30036', 10.18], ['15CH30037', 8.5], ['15CH30034', 13.0], ['16MI10028', 12.0], ['16IE10017', 19.392], ['15CH30033', 32.0], ['15CH30030', 21.0], ['18MT61R28', 8.5], ['15CH30038', 7.782], ['15CH30039', 13.0], ['15MA20009', 16.0], ['15MA20008', 16.0], ['15MA20007', 13.0], ['15MA20006', 16.5], ['18EE63R12', 9.5], ['15MA20003', 14.5], ['15MA20002', 8.5], ['18EE61R13', 11.0], ['15EC35024', 35.09310000000001], ['15EC35027', 25.0], ['15PH20002', 13.0], ['15EC35021', 8.5], ['18EE62R09', 35.09310000000001], ['15EC35023', 13.0], ['15EC35022', 11.88], ['18EE62R05', 9.0], ['15IM30004', 8.5], ['18EE62R07', 9.0], ['15IM30002', 10.18], ['15IM30003', 20.0], ['16EC10059', 14.71783], ['16MF10024', 17.0], ['16MI10020', 10.0], ['16ME10075', 17.0], ['16EC10069', 12.0], ['14ME10056', 12.0], ['15GG20003', 10.18], ['16ME10026', 15.66], ['16ME10025', 23.68], ['16EE10033', 18.5], ['16ME10023', 12.0], ['15GG20006', 6.5], ['15GG20005', 9.0], ['15GG20004', 12.0], ['15AE30017', 9.5], ['15GG20008', 9.0], ['18ec62r13', 11.5], ['16ME10028', 12.9], ['16EC10057', 11.0], ['16MI10038', 9.0], ['18EE61R11', 14.5], ['16MI10031', 12.0], ['16CE10012', 11.2], ['16CS10018', 84.7], ['16CS10019', 21.0], ['16CS10016', 18.0], ['16CS10015', 13.5], ['16CS10012', 14.0], ['16CS10010', 20.5], ['18PH40035', 5.97], ['15HS20027', 14.71783], ['15HS20025', 8.5], ['15HS20023', 23.0], ['15HS20020', 11.5], ['18NA60R12', 6.30336], ['18NA60R11', 6.5], ['16IE10013', 21.0], ['15HS20028', 6.5], ['15HS20029', 12.0], ['15AR10009', 11.5], ['15AR10008', 9.0], ['15EE35009', 15.0], ['16CH10023', 15.5], ['15AR10001', 7.5], ['15EE35004', 25.0], ['15AR10003', 8.5], ['15AR10002', 9.0], ['15AR10004', 7.5], ['15AR10007', 8.0], ['15AR10006', 7.5], ['12CS10001', 13.5], ['18CY40023', 5.97], ['18AR60R27', 5.75], ['18CY40046', 5.97], ['18AR60R28', 6.5], ['18CY40042', 4.2], ['15MF3FP19', 17.18406], ['18CL60R10', 5.97], ['18AT61R06', 11.5], ['16IM10030', 15.5], ['16IE10008', 15.0], ['18ME63R03', 14.5], ['15CE31015', 8.5], ['16MT10033', 27.52], ['18CS60R65', 18.0], ['18CS60R66', 12.0], ['18CS60R67', 18.0], ['16CE10018', 12.0], ['18CS60R61', 13.0], ['18CS60R62', 20.5], ['18CS60R63', 16.0], ['16CE10014', 8.5], ['16CE10015', 12.0], ['16MT10039', 27.52], ['18CS60R69', 12.0], ['15IM3FP06', 12.0], ['14ME32014', 8.0], ['18MA40003', 4.2], ['18CH60R31', 9.0], ['15HS20033', 13.0], ['18CH60R39', 18.0], ['15GG20002', 12.0], ['18EC62R09', 11.5], ['11CS30022', 12.0], ['15AG36006', 20.0], ['18EC62R01', 11.5], ['18EC62R06', 13.5], ['18EC62R07', 10.7], ['18EC62R04', 11.7], ['18CY40036', 5.97], ['18CS60R23', 18.0], ['16BT10023', 4.2], ['18EC65R21', 18.0], ['18EC65R12', 12.0], ['15MA20028', 30.0], ['15ME32004', 9.0], ['16CS10033', 14.8], ['15ME33036', 11.0], ['18EC62R02', 12.0], ['15MA20049', 27.52], ['15EE33001', 12.0], ['15MA20043', 13.0], ['15MA20042', 10.0], ['15MA20040', 15.66], ['15MA20047', 14.71783], ['16MF10028', 12.0], ['15ME3PE01', 12.0], ['18CS60R11', 9.5], ['18CS60R10', 12.0], ['15IM30025', 13.0], ['18CS60R14', 23.68], ['18CS60R17', 30.0], ['18CS60R16', 12.0], ['18CS60R19', 23.0], ['16CE10060', 9.0], ['16CE10062', 12.0], ['18CH60R56', 7.0], ['18MA60R35', 13.5], ['15IM10018', 8.0], ['18MA60R33', 19.392], ['18MA60R32', 16.0], ['18MA60R31', 12.0], ['16AG10017', 14.0], ['18CH60R50', 10.0], ['18MA60R38', 16.0], ['16ME10062', 14.5], ['18EX40022', 11.9], ['18EX40021', 4.2], ['16ME10064', 15.5], ['16EE10027', 12.0], ['16EE10024', 9.0], ['16EE10023', 27.52], ['16EE10022', 14.14], ['15MA20024', 13.5], ['16ie10026', 15.0], ['15EC34002', 11.5], ['15MT3EP01', 27.52], ['18CS60R15', 14.0], ['15CH30043', 8.0], ['15CH30042', 11.5], ['15CH30041', 14.1], ['15CH30040', 13.5], ['16MF10008', 10.9], ['16MF10009', 8.0], ['16MF10002', 11.2], ['16MF10003', 9.0], ['16MF10004', 8.5], ['16NA10003', 11.9], ['16MF10007', 8.6], ['16MT10044', 9.0], ['16IM10004', 17.0], ['16IM10007', 12.0], ['16IM10006', 12.0], ['16IM10001', 15.0], ['16IM10003', 16.0], ['18AG63R23', 9.7], ['15BT30028', 16.0], ['16EC10040', 13.5], ['15NA30023', 8.5], ['15BT30026', 32.0], ['15NA30020', 15.0], ['15BT30020', 14.71783], ['18IM60R11', 9.0], ['18IM60R10', 6.5], ['15ME33009', 9.0], ['15ME33008', 10.0], ['15ME33007', 8.5], ['16EC10006', 25.0], ['16EC10005', 23.0], ['15CE31004', 8.5], ['16EC10003', 15.5], ['15CE31002', 15.5], ['15CE31001', 12.0], ['16MI10001', 6.5], ['18CH60R62', 10.0], ['15ME31002', 21.0], ['15AE30030', 10.0], ['18AG61R02', 8.4], ['15CS30023', 11.0], ['15EE35025', 14.71783], ['15CS30026', 12.0], ['15CS30027', 13.0], ['15CS30028', 41.6], ['15EE35024', 12.0], ['16AE10029', 6.30336], ['15EX20029', 16.0], ['14AE10014', 13.5], ['16EC10013', 8.5], ['16CH10059', 9.0], ['16IE10019', 8.5], ['16IE10016', 10.0], ['15EC10029', 9.0], ['16CH10055', 12.0], ['16CH10054', 17.0], ['15CY20031', 12.0], ['16CH10051', 8.4], ['16IM10013', 10.87], ['18EE63R03', 10.0], ['15AR10024', 9.0], ['15PH20013', 8.5], ['15ME33011', 25.6], ['15IE33003', 15.7], ['15IE33001', 21.0], ['15IE33005', 13.0], ['15EC35032', 21.0], ['15IE33009', 8.5], ['15IE33008', 14.1], ['15MT30001', 13.5], ['14IE10009', 23.68], ['15MT30002', 27.52], ['15MT30005', 27.52], ['15MT30004', 16.0], ['15MI31033', 13.5], ['18EE64R10', 7.5], ['18EE64R13', 8.64], ['18EE64R12', 16.0], ['16AE10030', 8.5], ['18EE64R14', 11.5], ['18EE64R17', 16.0], ['18EE64R16', 8.64], ['18AE60R03', 11.1], ['15BT30005', 14.71783], ['18CS60R59', 23.0], ['18CS60R58', 13.0], ['18AE60R05', 8.0], ['18CS60R55', 18.0], ['18CS60R54', 11.0], ['18CS60R57', 13.0], ['18CS60R56', 16.0], ['18CS60R50', 13.0], ['18EC65R07', 16.0], ['18EC65R06', 11.5], ['18EC65R05', 16.0], ['18EC65R04', 12.9], ['18EC65R03', 18.0], ['16CE10020', 11.2], ['15EE35013', 15.0], ['18EC64R12', 11.7], ['15ME33002', 14.5], ['16AE10031', 8.5], ['15ME33021', 8.5], ['14ME33044', 13.5], ['18CS60R18', 21.0], ['15CH30009', 12.0], ['15CH30008', 15.5], ['16NA10025', 14.0], ['15CH30003', 12.0], ['15ME33001', 16.0], ['11MT30009', 4.2], ['15MT30025', 14.5], ['15CH30005', 8.5], ['15CH30004', 10.0], ['15AR10027', 11.5], ['18CR60R08', 4.2], ['15MA20011', 8.5], ['15MA20012', 16.0], ['15MA20013', 13.0], ['15MA20014', 27.52], ['15MA20017', 17.0], ['15MA20019', 27.52], ['16EE10019', 21.0], ['16AG10012', 12.0], ['18CS60R25', 18.0], ['16AG10028', 16.0], ['15PH20016', 13.5], ['15EC35033', 20.0], ['15EC35030', 35.09310000000001], ['15EC35031', 15.0], ['16AG10020', 9.0], ['16AG10023', 4.2], ['16AG10024', 16.0], ['16AG10026', 5.0], ['16ME10039', 10.0], ['16IE10004', 14.5], ['15BT3FP07', 21.0], ['16ME10031', 15.0], ['16ME10037', 27.52], ['15GG20014', 5.0], ['15ME33049', 15.5], ['15ME33048', 12.0], ['15GG20012', 10.0], ['15AE30009', 14.71783], ['16EC10043', 15.5], ['16EC10014', 9.5], ['15ME33041', 14.5], ['15AE30005', 16.0], ['14MA20035', 12.0], ['16EC10045', 12.0], ['16EC10015', 20.5], ['15ME31005', 10.0], ['18PH62R23', 4.2], ['16MF10030', 12.0], ['16MF10033', 8.0], ['16MF10032', 16.0], ['16MF10035', 9.5], ['16MF10034', 16.0], ['14AE30007', 12.0], ['15ME33019', 13.0], ['16EE10063', 20.5], ['18EE61R03', 9.0], ['16CS10028', 16.0], ['16CH10019', 10.5], ['15AE30008', 14.5], ['18CE64R10', 6.23], ['16CH10013', 18.35], ['16CH10012', 16.0], ['16CH10011', 10.95], ['16CH10010', 11.2], ['16CH10017', 16.0], ['16CH10016', 14.0], ['16CH10015', 20.0], ['15ME33043', 8.5], ['16EC10042', 12.0], ['18EE61R01', 8.64], ['15EE35017', 11.5], ['15AR10010', 10.0], ['18EE61R02', 9.0], ['17IP63036', 7.0], ['18EE61R04', 9.0], ['18EE61R07', 8.0], ['15EE35011', 16.0], ['15BT30017', 14.8], ['15BT30016', 9.0], ['15BT30010', 8.4], ['15BT30012', 7.5], ['15ME33047', 12.0], ['16EE10028', 16.0], ['15BT30019', 8.0], ['18CE63R03', 7.0], ['18CE63R05', 5.725], ['16MI10021', 12.0], ['18CE63R08', 10.9], ['15AE30001', 20.0], ['18MA40019', 10.0], ['15CS30019', 30.0], ['15CS30011', 13.0], ['15CS30013', 15.0], ['15CS30012', 12.0], ['15CS30015', 12.0], ['15CS30017', 11.88], ['17IP63009', 10.0], ['15IM3FP13', 14.71783], ['16MT10029', 12.0], ['18CH60R07', 4.2], ['18CH60R05', 12.0], ['15CY20006', 6.5], ['18CH60R09', 5.0], ['18CE65R02', 5.725], ['15HS20019', 15.0], ['15HS20018', 14.0], ['18EC63R08', 6.5], ['15MT91P02', 10.11], ['18CE65R04', 6.5], ['15HS20013', 9.0], ['15HS20012', 9.3], ['18CE65R09', 5.725], ['18EC63R06', 9.0], ['18EC62R33', 11.5], ['15HS20016', 13.0], ['15HS20015', 9.0], ['18CY40025', 4.2], ['15MF3IM09', 10.0], ['15MF3IM08', 12.0], ['15MI31009', 8.8], ['15MI31008', 9.0], ['15MF3IM01', 16.0], ['15MI31006', 12.0], ['15MF3IM07', 9.0], ['15MF3IM06', 10.5], ['16AE10005', 10.0], ['16AE10006', 10.0], ['16CH10056', 8.5], ['15CE31009', 15.0], ['15MA20057', 20.5], ['15MA20050', 8.5], ['18CS60R03', 9.5], ['18GG61R06', 11.9], ['18CS60R07', 13.0], ['18CS60R05', 8.5], ['18MA60R20', 15.0], ['18CS60R08', 19.392], ['14AT91R06', 12.0], ['18MA60R25', 13.0], ['18MA60R26', 16.0], ['18MA60R27', 12.9], ['11CS30030', 8.5], ['15CS10039', 12.0], ['15CE31008', 8.5], ['18MA40027', 4.2], ['16CS10026', 17.0], ['16EE10031', 13.5], ['16ME10077', 27.52], ['16ME10070', 9.0], ['16ME10071', 17.0], ['16EE10036', 19.392], ['16EE10038', 20.5], ['16EE10039', 13.0], ['16CS10024', 15.0], ['14EC35038', 15.0], ['18MT61R09', 10.11], ['18EC62R10', 4.1], ['18MT61R03', 8.5], ['12ME10051', 5.0], ['14CY20015', 6.5], ['14EC35037', 25.0], ['15MA20029', 21.0], ['16IE10023', 27.52], ['16IE10022', 14.0], ['14BT30013', 8.0], ['15MA20022', 12.0], ['16IE10021', 10.0], ['15MA20027', 15.0], ['15MA20026', 12.0], ['15CH30035', 8.5], ['15CH3PE02', 8.5], ['15CH3PE01', 12.0], ['15BT30002', 14.0], ['15CS10027', 15.0], ['16IM10016', 9.7], ['16IM10014', 12.0], ['16IM10015', 15.0], ['16CH10046', 8.0], ['16BT10010', 10.95], ['16IM10018', 15.5], ['15MF10015', 8.0], ['16MF10006', 10.9], ['16ME10007', 8.5], ['16ME10006', 17.0], ['16ME10009', 9.0], ['16ME10008', 6.30336], ['15GG20026', 8.5], ['15GG20020', 7.5], ['18EC64R02', 18.0], ['15ME33010', 6.5], ['16EC10011', 15.5], ['15ME33012', 18.0], ['15ME33013', 10.0], ['15CE31014', 6.5], ['15ME33015', 6.23], ['15ME33016', 15.0], ['15ME33017', 13.5], ['16EC10018', 18.0], ['16EC10019', 13.0], ['15IM30008', 15.0], ['15EE32001', 30.0], ['16MI10013', 15.5], ['11EE36001', 9.0], ['18PH62R18', 27.52], ['16MI10018', 12.0], ['15HS20041', 8.5], ['18AG61R16', 5.97], ['15HS20043', 9.0], ['15HS20044', 13.0], ['15HS20047', 21.0], ['16NA10019', 15.7], ['18AG61R18', 4.1], ['16CH10040', 15.0], ['16CH10041', 14.1], ['16CH10042', 10.0], ['16IE10020', 23.68], ['18CH60R47', 10.0], ['15ME32012', 8.5], ['15ME32011', 8.0], ['18CH60R44', 10.11], ['16CH10048', 16.0], ['15AG36011', 16.0], ['16IE10029', 14.5], ['16IE10028', 8.5], ['15AG36015', 17.18406], ['15AG36016', 15.5], ['18CH60R17', 4.2], ['15AG36010', 15.0], ['15AG36013', 8.5], ['15AG36012', 10.0], ['15AG32002', 9.7], ['15AG32003', 9.0], ['15AG36018', 10.0], ['15HS20001', 9.0], ['15MT3FP14', 14.0], ['15IE33010', 10.0], ['15MT3FP11', 20.0], ['15HS20003', 15.0], ['15MA20005', 11.0], ['15EC35028', 14.5], ['15MT30012', 14.71783], ['18EE64R08', 25.0], ['18EE64R09', 16.0], ['18EE64R02', 8.64], ['14IE10015', 6.30336], ['18ME63R23', 9.0], ['18EE64R07', 8.8], ['18EE64R04', 35.09310000000001], ['18EC65R19', 18.0], ['16MT10015', 10.0], ['18CS60R47', 10.5], ['18CS60R44', 18.0], ['18CS60R42', 17.0], ['18CS60R43', 13.5], ['18EC65R16', 16.0], ['18EC65R17', 13.5], ['16CE10036', 8.5], ['16CE10037', 9.0], ['16CE10034', 9.0], ['16CE10032', 8.5], ['16CE10033', 8.5], ['16CE10030', 5.725], ['16CE10031', 21.0], ['15AR10016', 5.75], ['18BT60R14', 7.0], ['16CE10038', 6.5], ['16CE10039', 17.0], ['15MI31016', 10.0], ['15EX20019', 10.18], ['15EC35026', 14.0], ['15MI10033', 4.2], ['15EX20013', 8.5], ['15EX20012', 10.95], ['17IP63035', 10.0], ['18MI60R14', 13.0], ['15EC35020', 14.0], ['16BT10003', 12.0], ['15CH30019', 15.0], ['15CH30015', 18.0], ['15CH30016', 15.5], ['15CH30010', 10.0], ['15CH30012', 10.95], ['15MI31013', 21.0], ['15CH30007', 10.0], ['18AG64R08', 10.0], ['18MT61R40', 6.30336], ['18CS60R41', 12.0], ['16CH10028', 8.5], ['15EC35009', 27.52], ['15EC35002', 16.0], ['15EC35006', 12.0], ['15EC35004', 8.5], ['15IM30024', 12.0], ['18RT60R18', 4.2], ['15IM30026', 9.0], ['15IM30027', 16.0], ['15PH20023', 9.0], ['15PH20022', 8.4], ['15IM30022', 16.0], ['15IM30023', 9.0], ['18ME61R09', 6.5], ['16AG10030', 10.95], ['15IM30001', 14.5], ['16AG10034', 10.87], ['15PH20028', 6.30336], ['16EE10009', 12.3], ['16CS10043', 21.0], ['15PH20033', 13.0], ['16ME10049', 12.0], ['16ME10045', 9.0], ['16CS10048', 25.0], ['16CH10057', 9.0], ['16ME10041', 14.5], ['16EE10004', 23.0], ['16ME10043', 18.35], ['15AE30032', 14.5], ['16NA10030', 6.5], ['15AE30037', 9.0], ['15AE30036', 8.0], ['15AE30035', 12.9], ['15AE30034', 15.5], ['16EC10054', 35.09310000000001], ['16EC10055', 27.52], ['15AE30038', 11.0], ['16EC10050', 12.0], ['16MF10023', 9.5], ['15MI33001', 8.5], ['16CS10037', 12.0], ['16MF10027', 9.5], ['15MI33005', 12.0], ['15MI33004', 10.0], ['16IE10015', 14.0], ['15MI33009', 16.0], ['15MI33008', 12.0], ['16CS10038', 19.93], ['16CS10039', 20.5], ['15AE30010', 11.5], ['16MT10042', 15.66], ['16CH10006', 10.0], ['16CH10007', 9.0], ['16MT10040', 12.0], ['18ME63R24', 9.6], ['15EE35023', 18.35], ['14IT92P02', 12.0], ['15EE35021', 12.9], ['15EE35027', 15.5], ['15EE35026', 15.0], ['15AR10029', 9.5], ['15AR10028', 10.0], ['17IP63007', 6.0], ['15AR10026', 9.0], ['18EE61R10', 14.5], ['14ME10004', 10.0], ['15AR10023', 8.5], ['15AR10022', 9.0], ['15AR10020', 9.0], ['15ME33029', 27.52], ['15BT30007', 11.0], ['15BT30004', 11.0], ['15NA30006', 12.3], ['15NA30001', 7.5], ['18CS60R31', 21.0], ['15BT30001', 12.9], ['16EC10021', 13.0], ['16EC10020', 18.0], ['16EC10023', 8.0], ['16EC10022', 12.0], ['15NA30009', 8.5], ['16EC10024', 16.0], ['15ME33027', 8.5], ['18CE63R10', 5.725], ['15AG3FP16', 14.0], ['15ME33006', 9.0], ['15AE30012', 8.5], ['15PH20014', 5.5], ['18ME63R10', 9.6], ['18MS60R15', 10.6], ['14QE30004', 9.0], ['15ME33003', 12.0], ['15CS30006', 30.0], ['15CS30005', 18.0], ['18EC65R10', 18.0], ['16CS10051', 24.0], ['16EC10001', 23.0], ['18MA40020', 4.2], ['15PH20015', 18.0], ['16CS10057', 16.1], ['15CY20016', 21.0], ['15CY20012', 16.0], ['15ME33040', 8.5], ['15CY20018', 16.0], ['16MT10010', 15.5], ['16EE10012', 16.0], ['18EC62R22', 13.5], ['18EC62R25', 18.0], ['18EC62R27', 13.5], ['18EC62R28', 14.0], ['15HS20007', 14.0], ['18EC63R12', 6.5], ['16cs10021', 13.0], ['15HS20002', 15.0], ['18EC63R11', 11.7], ['18RE61R06', 8.8], ['15MF3IM18', 10.0], ['16CE10026', 11.2], ['15MI31019', 10.0], ['15MF3IM12', 12.0], ['15MF3IM13', 20.0], ['15MF3IM10', 6.5], ['15MI31015', 9.0], ['15MF3IM17', 11.5], ['15MF3IM14', 15.0], ['18RE61R09', 9.6], ['15AR10015', 9.3], ['16AE10015', 14.0], ['16ME10050', 8.5], ['18ME62R05', 11.0], ['18CS60R37', 13.0], ['18CS60R36', 13.5], ['18CS60R35', 20.5], ['18CS60R34', 35.09310000000001], ['16CH10062', 9.0], ['18CS60R32', 18.0], ['16CE10049', 10.0], ['18CS60R30', 13.0], ['16CE10046', 21.0], ['14MM92P02', 12.0], ['16CE10043', 16.0], ['18CS60R39', 35.09310000000001], ['16CE10040', 10.0], ['15PH20018', 4.2]
            ]);
		var options = {
	        chartArea: {top:25, bottom:20, left:130, right:130},
	        backgroundColor: { fillOpacity: 0 },
	        colors: ['#966B9D'],
	        histogram: {bucketSize: 1, hideBucketItems: true},
	        hAxis: {textPosition: 'out', ticks: [4,8,12,16,20,24,28,32,36,40,44,48,52,56,60,64,68,72,76,80,84,88], textStyle: {bold: true, fontSize: 8.4, color: '#5B5B5B'}},
	        vAxis: {textPosition: 'out', gridlines: {color: 'transparent'}, textStyle: {fontSize: 7, color: '#5B5B5B'}},
	        legend: {position: 'none'}
	      };
	    var chart = new google.visualization.Histogram(document.getElementById('hist_base'));
	    chart.draw(data, options);
    }

function drawHist_ctc() {
    var data = google.visualization.arrayToDataTable([
               ['Student Roll No', 'CTC'],
               ['16EE10044', 24.0], ['12EC10009', 8.19437], ['16EE10046', 20.0], ['16EE10043', 20.0], ['15CS30021', 19.0], ['15QE30002', 15.98], ['16EE10049', 16.0], ['18GS61R01', 17.96], ['15CH30024', 19.4], ['15CH30026', 12.0], ['15CH30020', 20.0], ['15CH30023', 25.0], ['18EC64R03', 25.0], ['15CH30028', 11.0], ['15IM91R02', 11.0], ['15MA20032', 15.0], ['16CS10022', 17.5], ['14CS10047', 16.0], ['15MA20037', 19.392], ['15MA20034', 17.54737], ['15MA20035', 43.0], ['15EC32002', 6.5], ['15EC32001', 19.0], ['15EC32006', 15.0], ['15EC32007', 19.0], ['15EC32004', 41.463100000000004], ['15IM30014', 18.67], ['15EC32008', 17.96], ['18EE62R10', 9.0], ['15IM30011', 10.4], ['18EE62R16', 9.0], ['18EE62R15', 7.0], ['14EC10037', 14.0], ['15ME33018', 10.0], ['15MF10020', 8.0], ['16ME10013', 9.0], ['18CH60R04', 5.4], ['16ME10018', 13.0], ['16EC10067', 19.78], ['16EC10066', 58.88], ['16EC10063', 17.54737], ['15QE30007', 12.0], ['15QE30004', 10.0], ['15QE30005', 17.22], ['16MI10027', 16.0], ['15QE30001', 18.0], ['16CS10009', 18.0], ['16CS10008', 13.5], ['16CS10004', 13.5], ['16CS10006', 58.88], ['16CS10001', 15.0], ['18GS61R04', 25.0], ['15CS30046', 42.6740032], ['15HS20026', 31.5], ['15CS30044', 21.57], ['15CS30045', 34.28], ['15HS20031', 18.67], ['15CS30043', 42.0], ['15HS20037', 13.0], ['15HS20032', 18.0], ['18NA60R01', 7.5], ['15ME32001', 23.6], ['15ME32003', 42.6740032], ['15HS20039', 10.0], ['16IE10034', 15.0], ['16IE10035', 42.6740032], ['16IE10036', 19.78], ['16CH10036', 19.2], ['16IE10030', 8.5], ['16CH10030', 58.88], ['16IE10032', 21.3], ['16CH10032', 11.0], ['16EE72P01', 9.0], ['16EE72P03', 41.463100000000004], ['18CH60R58', 9.0], ['15MI31030', 13.0], ['15AG36007', 17.7], ['15AG36005', 16.5], ['15AG36003', 10.6], ['15MI3PE03', 16.0], ['15MI3PE02', 8.93], ['15MI3PE01', 9.4], ['15AG36008', 15.0], ['15AG36009', 13.4], ['16IM10029', 16.0], ['15MI33017', 14.95], ['16IM10023', 11.0], ['15MI33010', 35.0], ['18CL60R09', 5.4], ['16IM10020', 16.2], ['16IM10027', 13.4], ['15MI31031', 11.0], ['15MT30026', 8.93], ['16NA10026', 18.0], ['15MT30024', 18.67], ['15MT30023', 13.4], ['15MT30022', 9.0], ['15MT30021', 10.0], ['18AE60R20', 5.4], ['15MT30029', 18.0], ['15MT30028', 9.0], ['18CS60R71', 25.0], ['18CS60R70', 16.0], ['18CE62R19', 5.4], ['18CS60R75', 13.484], ['16MT10009', 17.7], ['16CE10003', 13.5], ['16CE10002', 17.22], ['16MT10005', 9.5], ['15HS20011', 13.5], ['15AR10012', 7.0], ['16CE10004', 7.75], ['16CH10026', 9.0], ['18CH60R23', 7.0], ['18MA40015', 14.0], ['18MA40016', 6.0], ['18CH60R29', 10.4], ['18MI60R09', 14.95], ['15EX20008', 18.67], ['18EC62R11', 17.96], ['15EX20005', 11.9], ['15EX20006', 12.0], ['15EX20007', 10.0], ['18EC62R15', 15.0], ['15QM30004', 8.93], ['15QM30005', 25.0], ['15QM30002', 10.3], ['16BT10014', 20.0], ['16BT10015', 5.4], ['15ME33022', 10.63], ['17IP63021', 11.0], ['15IM30017', 25.0], ['14GG20030', 12.0], ['11EC91R13', 11.0], ['15EC35014', 15.0], ['15EC35017', 43.0], ['15EC35010', 23.0], ['15PH20036', 8.0], ['15EC35013', 9.5], ['18MA60R02', 23.0], ['18MA60R03', 23.0], ['18ME61R11', 9.5], ['18MA60R07', 11.25], ['15ME31001', 26.25], ['16AG10006', 16.0], ['15CE33002', 11.25], ['16AG10003', 9.4], ['15CE33004', 11.0], ['15ME31007', 12.0], ['15ME31006', 13.0], ['15AE3FP15', 19.0], ['18EX40011', 5.4], ['15EE91R10', 8.0], ['16ME10058', 22.0], ['16ME10056', 42.6740032], ['16EE10010', 30.6], ['16ME10055', 11.0], ['16ME10053', 15.0], ['16EE10014', 12.9], ['16EE10015', 12.9], ['15AE30024', 10.0], ['15AE30027', 16.0], ['15AE30020', 9.5], ['15AE30021', 14.85], ['15AE30022', 10.0], ['15AE30023', 10.0], ['15MI31002', 11.0], ['15ME10057', 9.5], ['15AE30029', 18.0], ['15MI3FP21', 17.67333], ['15IM30016', 10.3], ['15AR10031', 6.5], ['13MA20017', 13.484], ['15MI33014', 15.0], ['15MI33015', 17.7], ['16MF10015', 17.14], ['16MF10014', 25.0], ['16MF10013', 14.85], ['15MI33012', 11.0], ['18EE63R08', 12.52], ['15AR10033', 8.0], ['15AR10030', 7.0], ['18AG63R17', 5.4], ['17IP63013', 7.0], ['15AR10034', 14.85], ['17IP63015', 11.0], ['16IM10021', 11.0], ['17IP63019', 11.0], ['15BT30031', 11.0], ['18AR60R17', 6.5], ['18AR60R10', 5.75], ['15BT30034', 18.0], ['15PH20027', 22.0], ['15ME33038', 10.0], ['15NA30015', 10.0], ['15NA30012', 25.0], ['15NA30013', 8.93], ['15NA30010', 16.0], ['15PH20026', 13.5], ['15ME33032', 15.0], ['16EC10033', 11.0], ['15ME33031', 22.0], ['16EC10036', 56.0], ['15ME33037', 9.6], ['17IM71P01', 11.0], ['15ME33035', 23.68], ['15EE10033', 9.5], ['15AG3FP05', 14.0], ['18MA60R15', 15.1], ['17CS71P01', 11.0], ['15AG3FP09', 14.0], ['16NA10005', 14.0], ['18ME61R07', 7.0], ['15CS30039', 43.0], ['15CS30038', 19.392], ['15CS30035', 21.57], ['15CS30033', 31.5], ['15NA30014', 8.5], ['15CS30030', 58.88], ['15AG3EP03', 18.0], ['15CY20029', 10.0], ['16EC10039', 43.0], ['18GG40006', 11.9], ['13PH20006', 5.4], ['14AE10004', 8.19437], ['16IE10005', 18.0], ['15CY20022', 11.25], ['16CH10060', 9.0], ['18CH60R61', 7.5], ['15AE30002', 9.6], ['15CY20024', 11.0], ['16CE10016', 22.0], ['18AT61R02', 16.0], ['18EE63R02', 11.0], ['15NA30011', 13.69], ['14PH20025', 10.0], ['18CY40002', 5.4], ['16CS10045', 21.57], ['18CY40009', 5.4], ['14PH20028', 16.0], ['18AE60R07', 9.5], ['15MI31023', 25.0], ['15MI31021', 18.0], ['15MI31020', 10.0], ['15MI31027', 17.22], ['15MI31026', 8.5], ['15MI31025', 22.0], ['15MI31024', 11.0], ['16NA10014', 7.75], ['15MI31029', 25.0], ['16NA10016', 9.0], ['16AE10027', 14.85], ['15MF3IM22', 18.0], ['16NA10013', 16.0], ['15MF3IM20', 10.0], ['18AE60R10', 9.5], ['18AE60R13', 8.0], ['18CR60R04', 7.5], ['18AE60R17', 9.6], ['18CS60R20', 23.0], ['18CS60R21', 43.0], ['18CS60R22', 42.6740032], ['18AG66R12', 5.4], ['18AE60R08', 12.9], ['18CS60R26', 25.0], ['16CE10050', 19.36], ['16CE10052', 32.0], ['16CE10055', 15.0], ['16CE10057', 18.0], ['16EC10035', 12.0], ['16CE10059', 15.0], ['13CE10026', 9.0], ['15CE36006', 13.65], ['15CE36004', 10.0], ['16EE10054', 43.0], ['16EE10052', 22.0], ['16EE10005', 19.2], ['15CH30036', 12.18], ['15CH30037', 8.5], ['15CH30034', 14.0], ['16MI10028', 12.0], ['16IE10017', 19.392], ['15CH30033', 32.64], ['15CH30030', 31.5], ['18MT61R28', 8.5], ['15CH30038', 9.0], ['15CH30039', 13.0], ['15MA20009', 16.0], ['15MA20008', 18.67], ['15MA20007', 43.0], ['15MA20006', 28.6], ['18EE63R12', 12.52], ['15MA20003', 22.0], ['15MA20002', 11.0], ['18EE61R13', 13.0], ['15EC35024', 41.463100000000004], ['15EC35027', 25.0], ['15PH20002', 13.65], ['15EC35021', 8.5], ['18EE62R09', 41.463100000000004], ['15EC35023', 43.0], ['15EC35022', 17.54737], ['18EE62R05', 9.0], ['15IM30004', 9.0], ['18EE62R07', 9.0], ['15IM30002', 12.18], ['15IM30003', 26.25], ['16EC10059', 17.67333], ['16MF10024', 20.0], ['16MI10020', 10.0], ['16ME10075', 20.0], ['16EC10069', 13.484], ['14ME10056', 15.4], ['15GG20003', 12.18], ['16ME10026', 17.22], ['16ME10025', 23.68], ['16EE10033', 20.0], ['16ME10023', 12.57], ['15GG20006', 8.93], ['15GG20005', 9.0], ['15GG20004', 12.0], ['15AE30017', 12.52], ['15GG20008', 10.0], ['18ec62r13', 17.96], ['16ME10028', 14.85], ['16EC10057', 13.0], ['16MI10038', 10.0], ['18EE61R11', 18.0], ['16MI10031', 15.0], ['16CE10012', 15.0], ['16CS10018', 104.3], ['16CS10019', 31.5], ['16CS10016', 21.0], ['16CS10015', 17.5], ['16CS10012', 15.98], ['16CS10010', 22.0], ['18PH40035', 6.0], ['15HS20027', 17.67333], ['15HS20025', 11.0], ['15HS20023', 23.0], ['15HS20020', 15.0], ['18NA60R12', 8.19437], ['18NA60R11', 8.5], ['16IE10013', 31.5], ['15HS20028', 8.93], ['15HS20029', 12.57], ['15AR10009', 15.0], ['15AR10008', 9.0], ['15EE35009', 18.0], ['16CH10023', 18.0], ['15AR10001', 8.0], ['15EE35004', 25.0], ['15AR10003', 9.5], ['15AR10002', 9.0], ['15AR10004', 8.0], ['15AR10007', 8.3], ['15AR10006', 8.0], ['12CS10001', 17.7], ['18CY40023', 6.0], ['18AR60R27', 5.75], ['18CY40046', 6.0], ['18AR60R28', 6.5], ['18CY40042', 5.4], ['15MF3FP19', 18.0], ['18CL60R10', 6.0], ['18AT61R06', 17.96], ['16IM10030', 18.0], ['16IE10008', 25.0], ['18ME63R03', 18.0], ['15CE31015', 8.5], ['16MT10033', 42.6740032], ['18CS60R65', 25.0], ['18CS60R66', 13.484], ['18CS60R67', 25.0], ['16CE10018', 15.4], ['18CS60R61', 43.0], ['18CS60R62', 22.0], ['18CS60R63', 21.3], ['16CE10014', 11.0], ['16CE10015', 15.0], ['16MT10039', 42.6740032], ['18CS60R69', 13.484], ['15IM3FP06', 12.57], ['14ME32014', 8.3], ['18MA40003', 5.4], ['18CH60R31', 10.4], ['15HS20033', 13.0], ['18CH60R39', 18.0], ['15GG20002', 15.4], ['18EC62R09', 17.96], ['11CS30022', 13.484], ['15AG36006', 20.0], ['18EC62R01', 11.5], ['18EC62R06', 20.0], ['18EC62R07', 17.5], ['18EC62R04', 15.16], ['18CY40036', 6.0], ['18CS60R23', 25.0], ['16BT10023', 5.4], ['18EC65R21', 25.0], ['18EC65R12', 15.0], ['15MA20028', 34.28], ['15ME32004', 10.63], ['16CS10033', 16.8], ['15ME33036', 13.0], ['18EC62R02', 15.0], ['15MA20049', 42.6740032], ['15EE33001', 14.0], ['15MA20043', 43.0], ['15MA20042', 10.0], ['15MA20040', 17.22], ['15MA20047', 17.67333], ['16MF10028', 12.0], ['15ME3PE01', 22.0], ['18CS60R11', 12.52], ['18CS60R10', 15.0], ['15IM30025', 13.0], ['18CS60R14', 23.68], ['18CS60R17', 34.28], ['18CS60R16', 13.484], ['18CS60R19', 23.0], ['16CE10060', 10.0], ['16CE10062', 12.0], ['18CH60R56', 7.0], ['18MA60R35', 17.7], ['15IM10018', 10.3], ['18MA60R33', 19.392], ['18MA60R32', 16.0], ['18MA60R31', 13.484], ['16AG10017', 16.5], ['18CH60R50', 11.0], ['18MA60R38', 16.0], ['16ME10062', 22.0], ['18EX40022', 11.9], ['18EX40021', 5.4], ['16ME10064', 18.0], ['16EE10027', 15.4], ['16EE10024', 9.0], ['16EE10023', 42.6740032], ['16EE10022', 17.14], ['15MA20024', 17.7], ['16ie10026', 19.36], ['15EC34002', 17.96], ['15MT3EP01', 42.6740032], ['18CS60R15', 22.0], ['15CH30043', 9.4], ['15CH30042', 15.0], ['15CH30041', 19.4], ['15CH30040', 18.3], ['16MF10008', 12.9], ['16MF10009', 8.3], ['16MF10002', 15.0], ['16MF10003', 10.0], ['16MF10004', 11.0], ['16NA10003', 11.9], ['16MF10007', 11.0], ['16MT10044', 9.0], ['16IM10004', 30.6], ['16IM10007', 13.484], ['16IM10006', 15.0], ['16IM10001', 18.0], ['16IM10003', 16.0], ['18AG63R23', 11.69], ['15BT30028', 19.2], ['16EC10040', 13.5], ['15NA30023', 11.25], ['15BT30026', 32.64], ['15NA30020', 25.5], ['15BT30020', 17.67333], ['18IM60R11', 9.0], ['18IM60R10', 8.5], ['15ME33009', 10.0], ['15ME33008', 10.0], ['15ME33007', 11.0], ['16EC10006', 25.0], ['16EC10005', 23.0], ['15CE31004', 11.0], ['16EC10003', 18.0], ['15CE31002', 18.0], ['15CE31001', 12.57], ['16MI10001', 8.93], ['18CH60R62', 11.0], ['15ME31002', 31.5], ['15AE30030', 10.0], ['18AG61R02', 8.4], ['15CS30023', 11.0], ['15EE35025', 17.67333], ['15CS30026', 13.484], ['15CS30027', 43.0], ['15CS30028', 41.6], ['15EE35024', 15.4], ['16AE10029', 8.19437], ['15EX20029', 16.0], ['14AE10014', 17.7], ['16EC10013', 8.5], ['16CH10059', 11.0], ['16IE10019', 8.5], ['16IE10016', 10.0], ['15EC10029', 10.0], ['16CH10055', 12.57], ['16CH10054', 20.0], ['15CY20031', 12.0], ['16CH10051', 12.4], ['16IM10013', 12.5], ['18EE63R03', 11.0], ['15AR10024', 13.4], ['15PH20013', 8.5], ['15ME33011', 25.6], ['15IE33003', 18.94], ['15IE33001', 31.5], ['15IE33005', 43.0], ['15EC35032', 31.5], ['15IE33009', 11.0], ['15IE33008', 19.4], ['15MT30001', 13.5], ['14IE10009', 23.68], ['15MT30002', 42.6740032], ['15MT30005', 42.6740032], ['15MT30004', 16.0], ['15MI31033', 13.5], ['18EE64R10', 8.0], ['18EE64R13', 10.0], ['18EE64R12', 16.0], ['16AE10030', 11.0], ['18EE64R14', 17.96], ['18EE64R17', 23.0], ['18EE64R16', 10.0], ['18AE60R03', 14.77], ['15BT30005', 17.67333], ['18CS60R59', 23.0], ['18CS60R58', 43.0], ['18AE60R05', 9.5], ['18CS60R55', 25.0], ['18CS60R54', 11.0], ['18CS60R57', 43.0], ['18CS60R56', 16.0], ['18CS60R50', 43.0], ['18EC65R07', 16.0], ['18EC65R06', 17.96], ['18EC65R05', 16.0], ['18EC65R04', 14.85], ['18EC65R03', 25.0], ['16CE10020', 15.0], ['15EE35013', 25.0], ['18EC64R12', 15.16], ['15ME33002', 18.0], ['16AE10031', 8.5], ['15ME33021', 11.0], ['14ME33044', 17.7], ['18CS60R18', 31.5], ['15CH30009', 15.0], ['15CH30008', 18.0], ['16NA10025', 15.98], ['15CH30003', 15.0], ['15ME33001', 16.0], ['11MT30009', 5.4], ['15MT30025', 18.0], ['15CH30005', 11.0], ['15CH30004', 12.0], ['15AR10027', 15.0], ['18CR60R08', 5.4], ['15MA20011', 8.5], ['15MA20012', 18.67], ['15MA20013', 43.0], ['15MA20014', 42.6740032], ['15MA20017', 20.0], ['15MA20019', 42.6740032], ['16EE10019', 31.5], ['16AG10012', 15.0], ['18CS60R25', 25.0], ['16AG10028', 16.0], ['15PH20016', 13.5], ['15EC35033', 26.25], ['15EC35030', 41.463100000000004], ['15EC35031', 18.0], ['16AG10020', 12.5], ['16AG10023', 5.4], ['16AG10024', 16.0], ['16AG10026', 7.75], ['16ME10039', 12.0], ['16IE10004', 18.0], ['15BT3FP07', 32.0], ['16ME10031', 18.0], ['16ME10037', 42.6740032], ['15GG20014', 7.75], ['15ME33049', 18.0], ['15ME33048', 12.0], ['15GG20012', 11.0], ['15AE30009', 17.67333], ['16EC10043', 18.0], ['16EC10014', 12.52], ['15ME33041', 15.0], ['15AE30005', 16.0], ['14MA20035', 15.0], ['16EC10045', 13.484], ['16EC10015', 22.0], ['15ME31005', 10.0], ['18PH62R23', 5.4], ['16MF10030', 13.484], ['16MF10033', 9.4], ['16MF10032', 16.0], ['16MF10035', 13.0], ['16MF10034', 16.0], ['14AE30007', 15.4], ['15ME33019', 13.0], ['16EE10063', 22.0], ['18EE61R03', 9.0], ['16CS10028', 16.0], ['16CH10019', 11.0], ['15AE30008', 18.0], ['18CE64R10', 7.0], ['16CH10013', 23.6], ['16CH10012', 16.0], ['16CH10011', 13.69], ['16CH10010', 15.0], ['16CH10017', 16.0], ['16CH10016', 16.5], ['16CH10015', 25.0], ['15ME33043', 11.0], ['16EC10042', 13.484], ['18EE61R01', 10.0], ['15EE35017', 17.96], ['15AR10010', 12.0], ['18EE61R02', 9.0], ['17IP63036', 7.0], ['18EE61R04', 9.0], ['18EE61R07', 8.0], ['15EE35011', 16.0], ['15BT30017', 16.8], ['15BT30016', 9.0], ['15BT30010', 12.4], ['15BT30012', 9.5], ['15ME33047', 12.0], ['16EE10028', 16.0], ['15BT30019', 8.3], ['18CE63R03', 7.0], ['18CE63R05', 6.25], ['16MI10021', 12.0], ['18CE63R08', 12.9], ['15AE30001', 20.0], ['18MA40019', 11.0], ['15CS30019', 42.0], ['15CS30011', 43.0], ['15CS30013', 15.0], ['15CS30012', 13.484], ['15CS30015', 15.0], ['15CS30017', 17.54737], ['17IP63009', 10.0], ['15IM3FP13', 17.67333], ['16MT10029', 12.0], ['18CH60R07', 5.4], ['18CH60R05', 12.0], ['15CY20006', 7.0], ['18CH60R09', 7.5], ['18CE65R02', 6.25], ['15HS20019', 15.0], ['15HS20018', 14.0], ['18EC63R08', 6.5], ['15MT91P02', 10.11], ['18CE65R04', 6.5], ['15HS20013', 10.0], ['15HS20012', 10.6], ['18CE65R09', 6.25], ['18EC63R06', 9.0], ['18EC62R33', 17.96], ['15HS20016', 13.65], ['15HS20015', 10.0], ['18CY40025', 5.4], ['15MF3IM09', 10.0], ['15MF3IM08', 12.0], ['15MI31009', 10.0], ['15MI31008', 10.0], ['15MF3IM01', 16.0], ['15MI31006', 15.0], ['15MF3IM07', 10.4], ['15MF3IM06', 11.0], ['16AE10005', 10.0], ['16AE10006', 11.0], ['16CH10056', 11.0], ['15CE31009', 15.0], ['15MA20057', 22.0], ['15MA20050', 11.0], ['18CS60R03', 12.52], ['18GG61R06', 11.9], ['18CS60R07', 43.0], ['18CS60R05', 11.25], ['18MA60R20', 15.0], ['18CS60R08', 19.392], ['14AT91R06', 14.0], ['18MA60R25', 22.0], ['18MA60R26', 23.0], ['18MA60R27', 14.85], ['11CS30030', 8.5], ['15CS10039', 23.35], ['15CE31008', 8.5], ['18MA40027', 5.4], ['16CS10026', 30.6], ['16EE10031', 20.8], ['16ME10077', 42.6740032], ['16ME10070', 11.0], ['16ME10071', 20.0], ['16EE10036', 19.392], ['16EE10038', 22.0], ['16EE10039', 43.0], ['16CS10024', 25.5], ['14EC35038', 18.0], ['18MT61R09', 10.11], ['18EC62R10', 14.0], ['18MT61R03', 9.5], ['12ME10051', 7.75], ['14CY20015', 7.0], ['14EC35037', 25.0], ['15MA20029', 31.5], ['16IE10023', 27.52], ['16IE10022', 22.0], ['14BT30013', 8.3], ['15MA20022', 15.0], ['16IE10021', 10.0], ['15MA20027', 19.36], ['15MA20026', 13.484], ['15CH30035', 11.0], ['15CH3PE02', 8.5], ['15CH3PE01', 22.0], ['15BT30002', 22.0], ['15CS10027', 15.0], ['16IM10016', 11.69], ['16IM10014', 15.0], ['16IM10015', 18.0], ['16CH10046', 9.4], ['16BT10010', 13.69], ['16IM10018', 18.0], ['15MF10015', 8.3], ['16MF10006', 12.9], ['16ME10007', 9.5], ['16ME10006', 20.0], ['16ME10009', 13.4], ['16ME10008', 8.19437], ['15GG20026', 9.0], ['15GG20020', 9.5], ['18EC64R02', 25.0], ['15ME33010', 8.93], ['16EC10011', 18.0], ['15ME33012', 21.0], ['15ME33013', 10.0], ['15CE31014', 7.5], ['15ME33015', 7.0], ['15ME33016', 18.0], ['15ME33017', 17.5], ['16EC10018', 25.0], ['16EC10019', 22.0], ['15IM30008', 18.0], ['15EE32001', 34.28], ['16MI10013', 18.0], ['11EE36001', 9.0], ['18PH62R18', 27.52], ['16MI10018', 15.0], ['15HS20041', 11.0], ['18AG61R16', 6.0], ['15HS20043', 10.0], ['15HS20044', 13.0], ['15HS20047', 31.5], ['16NA10019', 18.94], ['18AG61R18', 14.0], ['16CH10040', 18.0], ['16CH10041', 19.4], ['16CH10042', 12.0], ['16IE10020', 23.68], ['18CH60R47', 11.0], ['15ME32012', 8.5], ['15ME32011', 8.3], ['18CH60R44', 10.11], ['16CH10048', 16.0], ['15AG36011', 19.2], ['16IE10029', 22.0], ['16IE10028', 11.0], ['15AG36015', 18.0], ['15AG36016', 18.0], ['18CH60R17', 5.4], ['15AG36010', 18.0], ['15AG36013', 11.0], ['15AG36012', 12.0], ['15AG32002', 11.69], ['15AG32003', 10.0], ['15AG36018', 10.0], ['15HS20001', 10.0], ['15MT3FP14', 15.0], ['15IE33010', 11.0], ['15MT3FP11', 26.25], ['15HS20003', 18.0], ['15MA20005', 16.3], ['15EC35028', 18.0], ['15MT30012', 17.67333], ['18EE64R08', 25.0], ['18EE64R09', 16.0], ['18EE64R02', 10.0], ['14IE10015', 8.19437], ['18ME63R23', 9.0], ['18EE64R07', 10.0], ['18EE64R04', 41.463100000000004], ['18EC65R19', 25.0], ['16MT10015', 10.0], ['18CS60R47', 11.0], ['18CS60R44', 25.0], ['18CS60R42', 30.6], ['18CS60R43', 20.0], ['18EC65R16', 16.0], ['18EC65R17', 20.0], ['16CE10036', 11.0], ['16CE10037', 13.4], ['16CE10034', 10.0], ['16CE10032', 8.5], ['16CE10033', 11.0], ['16CE10030', 6.25], ['16CE10031', 32.0], ['15AR10016', 5.75], ['18BT60R14', 7.0], ['16CE10038', 8.93], ['16CE10039', 30.6], ['15MI31016', 10.0], ['15EX20019', 12.18], ['15EC35026', 22.0], ['15MI10033', 5.4], ['15EX20013', 8.5], ['15EX20012', 13.69], ['17IP63035', 11.0], ['18MI60R14', 14.95], ['15EC35020', 22.0], ['16BT10003', 15.0], ['15CH30019', 15.0], ['15CH30015', 21.0], ['15CH30016', 18.0], ['15CH30010', 10.0], ['15CH30012', 13.69], ['15MI31013', 31.5], ['15CH30007', 10.0], ['18AG64R08', 11.0], ['18MT61R40', 8.19437], ['18CS60R41', 13.484], ['16CH10028', 8.5], ['15EC35009', 42.6740032], ['15EC35002', 19.2], ['15EC35006', 22.0], ['15EC35004', 11.25], ['15IM30024', 12.0], ['18RT60R18', 5.4], ['15IM30026', 13.4], ['15IM30027', 16.0], ['15PH20023', 10.0], ['15PH20022', 12.4], ['15IM30022', 16.0], ['15IM30023', 10.0], ['18ME61R09', 8.5], ['16AG10030', 13.69], ['15IM30001', 18.0], ['16AG10034', 12.5], ['15PH20028', 8.19437], ['16EE10009', 16.2], ['16CS10043', 31.5], ['15PH20033', 13.65], ['16ME10049', 15.0], ['16ME10045', 10.0], ['16CS10048', 25.0], ['16CH10057', 11.0], ['16ME10041', 22.0], ['16EE10004', 23.0], ['16ME10043', 23.6], ['15AE30032', 18.0], ['16NA10030', 8.93], ['15AE30037', 9.0], ['15AE30036', 11.0], ['15AE30035', 14.85], ['15AE30034', 18.0], ['16EC10054', 41.463100000000004], ['16EC10055', 42.6740032], ['15AE30038', 11.0], ['16EC10050', 13.484], ['16MF10023', 13.0], ['15MI33001', 11.0], ['16CS10037', 15.0], ['16MF10027', 13.0], ['15MI33005', 15.0], ['15MI33004', 12.0], ['16IE10015', 22.0], ['15MI33009', 16.0], ['15MI33008', 22.0], ['16CS10038', 30.21], ['16CS10039', 22.0], ['15AE30010', 15.0], ['16MT10042', 17.22], ['16CH10006', 12.0], ['16CH10007', 11.0], ['16MT10040', 15.0], ['18ME63R24', 9.6], ['15EE35023', 23.6], ['14IT92P02', 14.0], ['15EE35021', 14.85], ['15EE35027', 18.0], ['15EE35026', 18.0], ['15AR10029', 12.52], ['15AR10028', 11.0], ['17IP63007', 6.0], ['15AR10026', 9.0], ['18EE61R10', 18.0], ['14ME10004', 10.0], ['15AR10023', 11.0], ['15AR10022', 10.0], ['15AR10020', 13.4], ['15ME33029', 42.6740032], ['15BT30007', 11.0], ['15BT30004', 11.0], ['15NA30006', 16.2], ['15NA30001', 7.5], ['18CS60R31', 32.0], ['15BT30001', 14.85], ['16EC10021', 43.0], ['16EC10020', 25.0], ['16EC10023', 11.0], ['16EC10022', 13.484], ['15NA30009', 8.5], ['16EC10024', 19.0], ['15ME33027', 11.0], ['18CE63R10', 6.25], ['15AG3FP16', 19.0], ['15ME33006', 10.0], ['15AE30012', 11.0], ['15PH20014', 8.0], ['18ME63R10', 9.6], ['18MS60R15', 12.65], ['14QE30004', 9.0], ['15ME33003', 14.0], ['15CS30006', 42.0], ['15CS30005', 26.0], ['18EC65R10', 25.0], ['16CS10051', 36.0], ['16EC10001', 23.0], ['18MA40020', 5.4], ['15PH20015', 25.0], ['16CS10057', 21.57], ['15CY20016', 32.0], ['15CY20012', 19.2], ['15ME33040', 11.0], ['15CY20018', 16.0], ['16MT10010', 18.0], ['16EE10012', 18.67], ['18EC62R22', 20.0], ['18EC62R25', 25.0], ['18EC62R27', 20.0], ['18EC62R28', 19.0], ['15HS20007', 14.0], ['18EC63R12', 6.5], ['16cs10021', 43.0], ['15HS20002', 15.0], ['18EC63R11', 15.16], ['18RE61R06', 10.0], ['15MF3IM18', 10.0], ['16CE10026', 15.0], ['15MI31019', 10.0], ['15MF3IM12', 15.0], ['15MF3IM13', 25.0], ['15MF3IM10', 8.93], ['15MI31015', 9.0], ['15MF3IM17', 15.0], ['15MF3IM14', 25.0], ['18RE61R09', 9.6], ['15AR10015', 10.6], ['16AE10015', 22.0], ['16ME10050', 11.0], ['18ME62R05', 13.0], ['18CS60R37', 43.0], ['18CS60R36', 20.0], ['18CS60R35', 22.0], ['18CS60R34', 41.463100000000004], ['16CH10062', 11.0], ['18CS60R32', 25.0], ['16CE10049', 10.0], ['18CS60R30', 43.0], ['16CE10046', 32.0], ['14MM92P02', 14.0], ['16CE10043', 16.0], ['18CS60R39', 41.463100000000004], ['16CE10040', 12.0], ['15PH20018', 5.4]
            ]);
		var options = {
	        chartArea: {top:25, bottom:20, left:130, right:130},
	        backgroundColor: { fillOpacity: 0 },
	        colors: ['#ef7674'],
	        histogram: {bucketSize: 1, hideBucketItems: true},
	        hAxis: {textPosition: 'out', ticks: [5,9,13,17,21,25,29,33,37,41,45,49,53,57,61,65,69,73,77,81,85,89,93,97,101,105], textStyle: {bold: true, fontSize: 8.4, color: '#5B5B5B'}},
	        vAxis: {textPosition: 'out', gridlines: {color: 'transparent'}, textStyle: {fontSize: 7, color: '#5B5B5B'}},
	        legend: {position: 'none'}
	      };
	    var chart = new google.visualization.Histogram(document.getElementById('hist_ctc'));
	    chart.draw(data, options);
    }