$(document).ready(function(){
	$("#recherche").keyup(function(){
		var recherche = $(this).val();
		rech = recherche.replace("/ /g", "_");
		$("#recherche").val(recherche);
		var data = 'motclef='+recherche;
		if (recherche.length>=3) {
			$('#global-content').addClass('global-content');
			$.ajax({
				type : "GET",
				url : "../ss/resultat_recherche.php",
				data : data,
				success: function(server_response){
				//$("#result").html(server_response).show();
				//$("#result").css('background','#7DAC45');
				$(".show-search").html(server_response).show();
			}

			});
		}
		else {
			//$("#show-search").removeClass('show-search');
			$("#show-search").addClass('anyItems');
			$('#global-content').removeClass('global-content');
			
		}
	});


	$("#ok_search").on('click',function(){
		var recherche = $(this).val();
		var data = 'motclef='+recherche;
		if (recherche.length>=3) {
			$('#global-content').addClass('global-content');
			$.ajax({
				type : "GET",
				url : "../ss/resultat_recherche.php",
				data : data,
				success: function(server_response){
				//$("#result").html(server_response).show();
				//$("#result").css('background','#7DAC45');
				$(".show-search").html(server_response).show();
			}

			});
		}
		else {
			$('#global-content').removeClass('global-content');
		}
	});

	//$("#ok_search").on('blur', function())
});

/*
$("#print_search").on('click', function(server_response){
alert("Hello world ! ");

$("#global-content").append(server_response).show();

});
*/




function fill(thisValue){
	$("input[@name=recherche]").val('');
	$("input[@name=recherche]").val(thisValue);
}