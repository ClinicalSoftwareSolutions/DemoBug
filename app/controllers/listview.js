var data = [];
for (var i = 0; i < 10; i++) {
   data.push({
      name: { text: 'Row ' + (i + 1) },
      image: { image: 'KS_nav_ui.png' },
      properties: {
         itemId: 'row' + (i + 1),
         accessoryType: Ti.UI.LIST_ACCESSORY_TYPE_DETAIL
      }
   });
}

var section = Ti.UI.createListSection({items: data});
$.list.sections = [section];

$.list.addEventListener('itemclick', function(e){
	Ti.App.fireEvent("app:showoverlay",{})
});
