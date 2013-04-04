var MyApp = {
	start: function(){
		$(this.$).append('<div id="SliderContainer"></div><div id="ImageBoxContainer"></div>');
		
	
		this.sb.startModule({
			id : "SliderContainer",
			module : Silder,
			config : {
				data : {
					min : 0,
					max : 3,
					step : 1,
					value : 0
				}
			}
		});
		
		this.sb.startModule({
			id : "ImageBoxContainer",
			module : ImageBox,
			config: {
				src: "http://hair.allwomenstalk.com/wp-content/thumbs/100/700.jpg"
			}
		});

	},
	end: function(){
		
	}
};

var Silder = {
	defaultConfig : {
		data: {
			min: 1,
			max:10,
			step:2,
			value:4
		}
	},
	start: function(){
		var self = this;
		
		this.newconfig = {};
		$.extend(this.newconfig, this.defaultConfig, this.config);
		//console.log(this.newconfig);
		var slider = $('<input type="range" name="points" \
				min="'+this.newconfig.data.min+'" \
				max="'+this.newconfig.data.max+'" \
				step="'+this.newconfig.data.step+'" \
				value="'+this.newconfig.data.value+'" >');
		
		slider.change(function(){
			//Publish the change
			self.sb.publish("SliderValueChange",this.value);
		});
		slider.appendTo(this.$);

	}

};

var ImageBox = {
	start: function(){

		var imageEle = $('<img src="'+this.config.src+'"></img>');
		imageEle.appendTo(this.$);
		var imageScrArray = 
			["http://hair.allwomenstalk.com/wp-content/thumbs/100/700.jpg",
			 "http://us.123rf.com/400wm/400/400/logos/logos1102/logos110200419/8851254-closeup-portrait-of-pretty-face-of-a-young-female-against-white-background.jpg",
			 "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTx1yaz-YFQl4CPUNldRUd6vp6DbvoPYJFL5sy9NJbnLo7Szbbp",
			 "http://us.123rf.com/400wm/400/400/ia64/ia640908/ia64090800153/5404132-little-child-face-looking-serious-in-sadness.jpg"
		    ];
		
		this.sb.subscribe("SliderValueChange",function(id){
			imageEle.attr("src", imageScrArray[id]);
		});
	},
	end: function(){
		
	}
};


choona.util.debug = true;

var application = choona.startApp({
	id:"AppContainer", 
	module: MyApp
});


