var win = Ti.UI.currentWindow;

// Can't find a way to gain access to variables from within an .html webview. Doing it this way for now - but is sloppy. I'm sure there's a smarter/cleaner way. 
var webview = Ti.UI.createWebView({
	scalePageToFit : true,
	top : 10,
	left : 10,
	right : 10,
	html : '<html><head><style type="text/css">* { max-width: 270px; } body { font-family: helvetica neue, helvetica, arial; width: 270px; overflow: hidden; color : #3f3f3f; } h1,h2,h3,h4,h5 { color: black; } img { max-width: 270px; } pre { white-space: pre-wrap; }</style><body><h3>' + win.theTitle + '</h3>' + win.desc  + '</body></html>'
});

if (Titanium.Platform.name == 'iPhone OS')
{
// add button which links to the original article.
var button = Ti.UI.createButton({
	title:'View Full Article'
});
win.setToolbar([button]);

button.addEventListener('click', function() {
	Titanium.Platform.openURL(win.theUrl);
});
}

// Add the webview (the original webpage article), and animate the page into view.
win.add(webview);
