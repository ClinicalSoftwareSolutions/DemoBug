$.view1 = null;
$.view2 = null;

$.init = function() {
	$.view1 = Alloy.createController("listview", {}).getView();
	$.wrapper.add($.view1);
}

$.init();
$.win.open();

Ti.App.addEventListener("app:showoverlay",function(){
   $.overlayScreen();
});

$.overlayScreen = function() {
	$.view2 = Ti.UI.createView( {height: "100%", width: "100%", backgroundColor: "#fff"} );
	var closeBut = Ti.UI.createButton( {title: "Close"} );
	$.view2.add(closeBut);

	closeBut.addEventListener("click",function(){
		$.wrapper.remove($.view2);
		$.wrapper.add($.view1);
	});

	$.wrapper.add($.view2);
	$.wrapper.remove($.view1);
}
