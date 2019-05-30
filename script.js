

$(document).ready(function(){
  "use strict";

$("#shows").hover(
	function(){$("#keithFamilyPic").removeClass("keithFamilyPic").addClass("soundCloudLogo");}, 
	function(){$("#keithFamilyPic").addClass("keithFamilyPic").removeClass("soundCloudLogo");}
);	

$("#for").hover(
	function(){$("#keithFamilyPic").removeClass("keithFamilyPic").addClass("youtubeLogo");}, 
	function(){$("#keithFamilyPic").addClass("keithFamilyPic").removeClass("youtubeLogo");}
);	

$("#no").hover(
	function(){$("#keithFamilyPic").removeClass("keithFamilyPic").addClass("vimeoLogo");}, 
	function(){$("#keithFamilyPic").addClass("keithFamilyPic").removeClass("vimeoLogo");}
);	
	
$("#one").hover(
	function(){$("#keithFamilyPic").removeClass("keithFamilyPic").addClass("instagramLogo");}, 
	function(){$("#keithFamilyPic").addClass("keithFamilyPic").removeClass("instagramLogo");}
);	
});