// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Ti.UI.setBackgroundColor('white');


// create tab group
var tabGroup = Ti.UI.createTabGroup();

// Home Tab
var homeWindow = Ti.UI.createWindow({  
    title:'Rx Shortages',
	//tabBarHidden: true, 
	url : 'main_windows/blogs.js',
	//barColor : '#333',
	});

var homeTab = Ti.UI.createTab({  
    title:'Shortages',
	icon : 'images/home.png',
    window:homeWindow
});

// Report Tab
var reportWindow = Ti.UI.createWindow({
	title : "Report Drug Shortage",
	url : 'main_windows/report.js'
});

var reportTab = Ti.UI.createTab({
	icon : 'images/report.png',
	title : 'Report Shortage',
	window: reportWindow
});

// About Tab
var aboutWindow = Ti.UI.createWindow({
	title : "About",
	url : 'main_windows/about.js'
});

var aboutTab = Ti.UI.createTab({
	icon : 'images/about.png',
	title : 'About',
	window: aboutWindow
});

// add tabs
tabGroup.addTab(homeTab);
tabGroup.addTab(reportTab);
tabGroup.addTab(aboutTab);

// open tab group
tabGroup.open({
	transition:Ti.UI.iPhone.AnimationStyle.CURL_UP
});