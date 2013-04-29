//alert("JavaScript works!");
//Cassandra Morath
//SDI 1304

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

