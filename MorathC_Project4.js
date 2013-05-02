//alert("JavaScript works!");
//Cassandra Morath
//SDI 1304


//Does a string follow a 123-456-7890 pattern like a phone number?
//Main with test conditions
if( validatePhone( "123-456-7890" ) ){
	console.log( "123-456-7890 is a valid format" );
}
if( ! validatePhone( "xx" ) )
{
	console.log( "xx is not a valid format." );
}
if( ! validatePhone( "12-3456-7890" ) ){
	console.log( "12-3456-7890 is not a valid format." );
}

if(validateEmail("abcd.gets@eu") ){
	console.log("This is a valid email format");
} else {
	console.log("This is not a valid email format");
}

function validatePhone( phoneNumber ){
	var numbers = "1234567890";
	if( phoneNumber.length != 12 ){
		return false;		
	}
	for( var i = 0; i < 3; i++ ){
		if( numbers.indexOf( phoneNumber.charAt( i ) ) === -1 ){
			return false;			
		}
	}
	if (phoneNumber.charAt( 3 ) != "-"){
		return false;		
	}
	for ( var i = 4; i <7; i++ ){
		if( numbers.indexOf( phoneNumber.charAt( i ) ) === -1 ){
			return false;
		}
	}
	if ( phoneNumber.charAt( 7 ) != "-" ){
		return false;			
	}
	for ( var i = 8; i <12; i++ ){
		if( numbers.indexOf( phoneNumber.charAt( i ) ) === -1 ){
			return false;
		}		
	}
	return true;
}

//Is the string a URL? (Does it start with http: or https:?)
var testUrl = "htt://";
	if (validateURL(testUrl)){	
		console.log("This is a valid URL since it begins with " + testUrl + ".");
}
	else{
		console.log("This is not a valid URL.");
	}

function validateURL( URL ){
	var locator = "http://";
	var locator2 = "https://";

	if (URL.indexOf(locator)==0){
		return true;
	}
	if (URL.indexOf(locator2)==0){
		return true;
	}
	return false;
}
//Does a string follow an aaa@bbb.ccc pattern like an email address?

function validateEmail( email )
{
	var validChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.@";
	var atSymbolPos = email.indexOf( "@" );
	var period = email.indexOf( "." );
	var atSymbolLastPos = email.lastIndexOf( "@" );
	var periodLastPos = email.lastIndexOf( "." );
		if(atSymbolPos === -1 || atSymbolPos === 0 || atSymbolPos != atSymbolLastPos){
			return false;
		}
		if(period === -1 || period === (email.length - 1) || period != periodLastPos){
			return false;
		}
		if(atSymbolPos > (period - 2)){
			return false;
		}
		for (var i=0; i<email.length; i++){
			if( validChars.indexOf( email.charAt( i ) ) === -1 ){
				return false;
			}
		}
		return true;
}