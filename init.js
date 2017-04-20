var o = {
	init: function(){
		this.diagram();
	},
	random: function(l, u){
		return Math.floor((Math.random()*(u-l+1))+l);
	},
	diagram: function(){
		var r = Raphael('diagram', 600, 600),
			rad = 73,
			defaultText = 'Skills',
			speed = 250;

		r.circle(300, 300, 85).attr({ stroke: 'none', fill: '#193340' });

		var title = r.text(300, 300, defaultText).attr({
			font: '20px Arial',
			fill: '#fff'
		}).toFront();

		<!-- custom attributes here! -->

	}



}
$(function(){ o.init(); });
