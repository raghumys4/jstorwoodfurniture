$('#saveuserdata').click(function(){
	var CustomerName=$('#CustomerName').val();
	var Email=$('#Email').val();
	var MobileNo=$('#MobileNo').val();
	var Address=$('#Address').val();
	var City=$('#City').val();
	var Pincode=$('#Pincode').val();
	var NameRegex=/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
	if(NameRegex.test(CustomerName) == false)
	{
		if ($("#CustomerName").parent().next(".validation").length == 0) // only add if not added
        {
            $("#CustomerName").parent().after("<div class='validation' style='color:red;'>Please enter email address</div>");
        }
        //e.preventDefault(); // prevent form from POST to server
        $('#CustomerName').focus();
        focusSet = true;
    } 
	else 
	{
        $("#email").parent().next(".validation").remove(); // remove it
    }
	validateData()
	
})

function validateData()
{
	var CustomerName=$('#CustomerName').val();
	var Email=$('#Email').val();
	var MobileNo=$('#MobileNo').val();
	var Address=$('#Address').val();
	var City=$('#City').val();
	var Pincode=$('#Pincode').val();
	
	var NameRegex=/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
	if(NameRegex.test(CustomerName) == false)
	{
		if ($("#CustomerName").parent().next(".validation").length == 0) // only add if not added
        {
            $("#CustomerName").parent().after("<div class='validation' style='color:red;'>Please enter email address</div>");
        }
        //e.preventDefault(); // prevent form from POST to server
        $('#CustomerName').focus();
        focusSet = true;
    } 
	else 
	{
        $("#email").parent().next(".validation").remove(); // remove it
    }
   // alert("The lenght of zip code must be atleast five digits");
   // $('#myModal').modal("show");
   // document.getElementById("CustomerName").focus();
   //zipCode.focus();
   //return false;
}

$('#OrderSubmit').click(function(){
	var CustomerName=$('#CustomerName').val()
	var CustomerMobile=$('#CustomerMobile').val()
	var CustomerEmail=$('#CustomerEmail').val()
	var CustomerAddress=$('#CustomerAddress').val()
	var CustomerCity=$('#CustomerCity').val()
	var CustomerPincode=$('#CustomerPincode').val()
  if((CustomerName==null||CustomerName==''||CustomerName==undefined)&&
	  (CustomerMobile==null||CustomerMobile==''||CustomerMobile==undefined)&&
	  (CustomerEmail==null||CustomerEmail==''||CustomerEmail==undefined)&&
	  (CustomerAddress==null||CustomerAddress==''||CustomerAddress==undefined)&&
	  (CustomerCity==null||CustomerCity==''||CustomerCity==undefined)&&
	  (CustomerPincode==null||CustomerPincode==''||CustomerPincode==undefined))
	  {
		  $('#myModal').modal("show");
	  }
  else{
	  var element = this;    
    $.ajax({
        url: "orderSubmit.php",
        type: "POST",
        data: JSON.stringify({ 'Options': OrderData}),
        dataType: "json",
        traditional: true,
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            if (data.status == "Success") {
                alert("Order SuccessFull");
            } else {
                alert("Error occurs on the Database level! Our Support Team will contact you Shortly");
            }
        },
        error: function () {
            alert("An error has occured!!!");
        }
    });
  }

});