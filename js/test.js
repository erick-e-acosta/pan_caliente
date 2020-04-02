
$(document).ready(function(){
    $('#productos2').hide();
    $('#promociones2').hide();
    $('#aliados2').hide();
    $('#legales2').hide();

	$("#productos").click(function(){
        $("#productos2").show();
        $('#promociones2').hide();
        $('#aliados2').hide();
        $('#legales2').hide();
    });
    
    $("#promociones").click(function(){
        $('#promociones2').show();
        $('#aliados2').hide();
        $('#legales2').hide();
        $('#productos2').hide();
	});
    $("#aliados").click(function(){
        $('#aliados2').show();
        $('#legales2').hide();
        $('#promociones2').hide();
        $('#productos2').hide();
	});
    

	

});