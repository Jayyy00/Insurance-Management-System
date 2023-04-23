
function validation()
{
	var name =document.getElementById("name").value;// Element object representing  property matches the specified string.
	var idNumber =document.getElementById("idNumber").value;
	var email=document.getElementById("email").value;
	var subject=document.getElementById("subject").value;
	var message=document.getElementById("message").value;
	var error_message=document.getElementById("error_message");
	var text;
	
	error_message.style.padding ="10px";
	
	if(name.length <15)
	{
		text="Please Enter The Valid Name";
		error_message.innerHTML = text;
		return false;
	}
	if(idNumber.indexOf("C")||idNumber.length >10)
	{
		text="Please Enter The Valid ID Number";
		error_message.innerHTML = text;
		return false;
	}
		if(email.indexOf("@")== -1||email.length >= 20)
	{
		text="Please Enter The Valid Email";
		error_message.innerHTML = text;
		return false;
	}
		if(subject.length <10)
	{
		text="Please Enter The Correct Subject";
		error_message.innerHTML = text;
		return false;
	}
		if(message.length <=50)
	{
		text="Please Enter The More Than 50 Characters";
		error_message.innerHTML = text;
		return false;
	}
	alert("Form Submitted Successfully !")
    return true;
}