Router.map(function() {
	this.route('home', {path: '/'});
});

if (Meteor.isClient) {
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
	};
}
