/*
 * A simple project based on Single Window Application Template:
 * to test minimal cases
 */

//bootstrap and check dependencies
if (Ti.version < 2.0 ) {
	alert('Sorry - this application template requires Titanium Mobile SDK 2.0 or later');
}

// This is a single context application with mutliple windows in a stack
(function() {
	var self = Titanium.UI.createWindow({
        title: 'Window',
        backgroundColor: 'white',
        layout: 'vertical',
//        height: 'auto',
        });

    self.open();
})();
