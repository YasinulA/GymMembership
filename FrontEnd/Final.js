function validation()
{
	var emailfilter=/^\w[\+\.\w-]*@([\w-]+\.)*\w+[\w-]*\.([a-z]{2,4}|\d+)$/i
	
	var dateVariable = new Date();

	var fName = document.form.firstName.value;

	var lName = document.form.lastName.value;

	var email = emailfilter.test(document.form.email.value);

	var gender = document.form.gender.value;

	var bmonth = document.form.bmonth.value; //birth month

	var bdate = document.form.bdate.value; //birth date

	var byear = document.form.byear.value; //birth year

	var ft = document.form.ft.value; 

	var inch = document.form.inch.value;

	var weight = document.form.weight.value; 

	var wtarget = document.form.wtarget.value; //target weight

	var phone = document.form.phone.value;

	var address = document.form.address.value;

	var city = document.form.city.value;

	var borough = document.form.borough.value;

	var zip = document.form.zip.value;

	var ctype = document.form.ctype.value; //card type

	var cnum = document.form.cnum.value; //card number

	var cvc = document.form.cvc.value; //card verification code

	var exmon = document.form.exmon.value; //expiration month

	var expyear = document.form.expyear.value; //expiration year

	var membership = document.form.membership.value;

	var refer = document.form.refer.value;


	if(fName=="")
		{
		alert("Please enter your frist name!");	
		document.form.firstName.focus();
		return false;
		}

		else if( (fName.length < 2) || (fName.length > 15) )
			{
			alert("Characters of your first name must be between 2 to 15 characters.");
			document.form.firstName.focus();
			return false;
			}
			
	if(lName=="")
		{
		alert("Please enter your last name!");	
		document.form.lastName.focus();
		return false;
		}

		else if( (lName.length < 2) || (lName.length > 15) )
			{
			alert("Characters of your last name must be between 2 to 15 characters.");
			document.form.lastName.focus();
			return false;
			}

			
	if(email==false)
		{
		alert("Please enter a valid e-mail ID");	
		document.form.email.focus();
		return false;
		}

	if( (form.gender[0].checked==false) && (form.gender[1].checked==false) )
		{
		alert("Please choose your gender!");
		return false;
		}

	if(bmonth=="")
		{
		alert("Please enter what month you were born in!");	
		document.form.bmonth.focus();
		return false;
		}

		else if(bmonth > "12")
			{
			alert("Please enter a valid month!");
			document.form.bmonth.focus();
			return false;
			}

	if(bdate=="")
		{
		alert("Please enter which date you were born in!");	
		document.form.bdate.focus();
		return false;
		}

		else if(bdate > "31")
			{
			alert("Please enter a valid date!");
			document.form.bdate.focus();
			return false;
			}

	if(byear=="")
		{
		alert("Please enter what year you were born in!");	
		document.form.byear.focus();
		return false;
		}

		else if(byear > "1997")
			{
			alert("You must be 18 years of age or older to submit online.");
			document.form.byear.focus();
			return false;
			}

	if(ft=="")
		{
		alert("Please enter your height in feet. For example: 5 ft.");
		document.form.ft.focus();
		return false;
		}

	if(inch=="")
		{
		alert("Please enter your height in inches. For example: 5 inches. If you do not have an inch to your height then put 0.");
		document.form.inch.focus();
		return false;
		}

	if(weight=="")
		{
		alert("Please enter your weight.");
		document.form.weight.focus();
		return false;
		}

	if(wtarget=="")
		{
		alert("Please enter your target weight.");
		document.form.wtarget.focus();
		return false;
		}

	if(phone=="")
		{
		alert("Please enter your phone number.");
		document.form.phone.focus();
		return false;
		}

		else if(isNaN(phone))
			{
			alert("Please enter your phone number in number only.");
			document.form.phone.focus();
			return false;
			}

	if(address=="")
		{
		alert("Please enter your address.");
		document.form.address.focus();
		return false;
		}

	if(city=="")
		{
		alert("Please enter which city you are from.");
		document.form.city.focus();
		return false;
		}

	if(borough=="- select -")
		{
		alert("Please enter which borough of New York you are from.");	
		document.form.borough.focus();
		return false;
		}

	if(zip=="")
		{
		alert("Please enter your zip code.");
		document.form.zip.focus();
		return false;
		}

		else if(zip.length < 5)
			{
			alert("Please enter a valid zip code with 5 numbers!");
			document.form.zip.focus();
			return false;
			}

	if( (form.ctype[0].checked==false) && (form.ctype[1].checked==false) )
		{
		alert("Please enter what type of card you want to use.");
		return false;
		}
	
	if(cnum=="")
		{
		alert("Please enter your card number.");
		document.form.cnum.focus();
		return false;
		}

		else if( (cnum.length < 12) || (cnum.length > 19) )
			{
			alert("Your card number must be between 12 to 19 numbers!");
			document.form.cnum.focus();
			return false;
			}

	if(cvc=="")
		{
		alert("Please enter your card verification code.");
		document.form.cvc.focus();
		return false;
		}

		else if( (cvc.length < 3) || (cvc.length > 4) )
			{
			alert("Your card verification code must be betwen 3 to 4 numbers!");
			document.form.cvc.focus();
			return false;
			}

	if(exmon=="")
		{
		alert("Please enter your expiration month!");
		document.form.exmon.focus();
		return false;
		}

		else if(exmon > "12")
			{
			alert("Please enter a valid expiration month!");
			document.form.exmon.focus();
			return false;
			}

	if(expyear=="")
		{
		alert("Please enter your expiration year!");
		document.form.expyear.focus();
		return false;
		}

		else if(expyear < "2015")
			{
			alert("Please enter a valid expiration year!");
			document.form.expyear.focus();
			return false;
			}


	if( (form.membership[0].checked==false) && (form.membership[1].checked==false) )
		{
		alert("Please select which membership you want to chose!");
		return false;
		}

	if( (form.refer[0].checked==false) && (form.refer[1].checked==false) && (form.refer[2].checked==false) && (form.refer[3].checked==false) )
		{
		alert("Please tell us how you found out about us.");
		return false;
		}
	
	else
	{
	alert("Thank you for joining the limitless gym "+ fName +" "+ lName +".");
	alert("Your form have been submitted on: " + dateVariable.toString()); 
	}
}