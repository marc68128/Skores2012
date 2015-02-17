
//Centrage du corps au chargement
if ((window.innerHeight > 530) && (window.innerWidth > 1140)) {
	$("#corps").css("top" , ((window.innerHeight - 530)/2) + "px");
	$("#corps").css("left" , ((window.innerWidth - 1140)/2) + "px");
} 

//centrage du corps au redimentionement 
function resize(){
  if ((window.innerHeight > 530) && (window.innerWidth > 1140)) {
		$("#corps").css("top" , ((window.innerHeight - 530)/2) + "px");
		$("#corps").css("left" , ((window.innerWidth - 1140)/2) + "px");
	} else {
		if(window.innerWidth > 1140){
			$("#corps").css("top" , "0px");
		}
		if (window.innerHeight > 530){
			$("#corps").css("left" , "0px");
		}
	}
}
window.onresize = resize;

//Gestion des slide di Line-Up
$(function(){
      $("#slides").slides({
        generatePagination: false,
        randomize: true,
        play: 5000
      });
    });
    

//Lecteur Jplayer
//<![CDATA[
$(document).ready(function(){
	
	new jPlayerPlaylist({
		jPlayer: "#jquery_jplayer_1",
		cssSelectorAncestor: "#jp_container_1"
	}, [
		{
			title:"Demon",
			mp3:"http://theskores.fr/sound/Demon.mp3",
			oga:"http://theskores.fr/sound/Demon.ogg"
		},
		{
			title:"Come With me",
			mp3:"http://theskores.fr/sound/comewithme.mp3",
			oga:"http://theskores.fr/sound/comewithme.ogg"
		},
		{
			title:"The Fight",
			mp3:"http://theskores.fr/sound/Thefight.mp3",
			oga:"http://theskores.fr/sound/Thefight.ogg"
		}		
	], {
		playlistOptions: {
			autoPlay: true
		},
		swfPath: "http://www.jplayer.org/2.1.0/js",
		supplied: "oga, mp3",
		wmode: "window"
	});
	$("#jplayer_inspector_1").jPlayerInspector({jPlayer:$("#jquery_jplayer_1")});
});
//]]>

//GEstion affichage des titres 
$(".jp-next").click(function(){ 
	if ($("#titre").html() == "Come With Me") {
		$("#titre").html("The Fight");
	};
	if ($("#titre").html() == "Demon") {
		$("#titre").html("Come With Me");
	};
});

$(".jp-previous").click(function(){ 
	if ($("#titre").html() == "Come With Me") {
		$("#titre").html("Demon");
	};
	if ($("#titre").html() == "The Fight") {
		$("#titre").html("Come With Me");
	};
});

$("#jquery_jplayer_1").bind($.jPlayer.event.ended, function(){
	if ($("#titre").html() == "Come With Me") {
		$("#titre").html("The Fight");
	};
	if ($("#titre").html() == "Demon") {
		$("#titre").html("Come With Me");
	};
});

//Gestion Bando
$("#BandoInfo").css("top", "-35px"); 

setTimeout(function(){
                 $("#BandoInfo").animate({ 
                   top: "0px"
                 }, 500 );
               }, 2000);

$("#BandoInfo").click(affichePopUp); 

//Gestion Pop-Up

function affichePopUp(){
	$("#FondPopUp").show(); 
	$("#PopUp").show();	
}

function masquePopUp(){
	$("#FondPopUp").hide(); 
	$("#PopUp").hide();	
}


$("#FondPopUp").click(masquePopUp);
$("#PopUp img").hover(function(){
	$(this).attr("src", "Images/Icon/crois1.png");
}, function(){
	$(this).attr("src", "Images/Icon/crois.png");
});