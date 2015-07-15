Router.map(function() {
	this.route('home', {path: '/'});
});

if (Meteor.isClient) {
	Template.body.events({
		'click #gototop': function(e, templ) {
			e.preventDefault();
			$('html, body').animate({
				scrollTop: $("#zoombar").offset().top
			}, 800);
			console.log("Clicked!!");
		}
	});
	Template.zoombar.events({
			//scrolling events
		'click #zoomAbout': function(e, templ ) {
			e.preventDefault();
			$('html, body').animate({
					scrollTop: $("#About").offset().top
			}, 800);
		},
		'click #zoomSkills': function(e, templ ) {
			e.preventDefault();
			$('html, body').animate({
					scrollTop: $("#Skills").offset().top
			}, 800);
		},
		'click #zoomProjects': function(e, templ ) {
			e.preventDefault();
			$('html, body').animate({
					scrollTop: $("#Projects").offset().top
			}, 800);
		},
		'click #zoomEducation': function(e, templ ) {
			e.preventDefault();
			$('html, body').animate({
					scrollTop: $("#Education").offset().top
			}, 800);
		}
	});
	Template.home.rendered = function() {
		//Floating up button
		var offset = 300;
		var duration = 300;
	//	$('.back-to-top').css({"display": "none"});
		jQuery(window).scroll(function(){
			if(jQuery(this).scrollTop() > offset) {
				jQuery('.back-to-top').fadeIn(duration);
			}
			else {
				jQuery('.back-to-top').fadeOut(duration);
			}
		});
	};
}
