/*
 * A simple project based on Single Window Application Template:
 * to test minimal cases
 */

(function() {
	var self = Titanium.UI.createWindow({
        title: 'Window',
        backgroundColor: 'white',
        layout: 'vertical',
        });

	var viewWrapper = Ti.UI.createView({
	});

	var view = Ti.UI.createView({
		height: '42dp',
		width: '100%',
		top: 0,
		left: '0dp',
		right: '0dp',
		backgroundImage: '/KS_nav_ui.png',
		backgroundColor: 'transparent',
	});

	var button = Ti.UI.createButton({ title: '', backgroundColor: 'transparent', image: '/KS_nav_views.png'});

	button.addEventListener("click", function(){
	  Ti.API.info("Got the button click");
	});

	view.add(button);
	viewWrapper.add(view)
	self.add(viewWrapper);

    	self.open();
})();
