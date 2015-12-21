// Initialize your app
var myApp = new Framework7({
    swipePanel: 'left',
    modalTitle: 'Toong',
    // ... other parameters
});

// Export selectors engine
var $$ = Dom7;

// Add views
var view1 = myApp.addView('#view-1', {
	dynamicNavbar: true,
});
var view2 = myApp.addView('#view-2', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});
var view3 = myApp.addView('#view-3');
var view4 = myApp.addView('#view-4');

