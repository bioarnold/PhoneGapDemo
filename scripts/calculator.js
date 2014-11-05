$(function() {
  $('#btnCalculate').click(function(){
		var operand1 = $('#operand1').val();
		var operand2 = $('#operand2').val();
		result = parseInt(operand1) + parseInt(operand2);
		
		$('#result').val(result);
	});
});