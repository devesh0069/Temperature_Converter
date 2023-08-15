function convert() 
{
    var input_temp = document.getElementById("input_temperature").value;
    var output_temp = document.getElementById("output_temperature").value;
    var temp = parseFloat(document.getElementById("in_temperature").value);
    var y ="Please enter value";
    var z ="'textbox is empty'";
    if (isNaN(temp)) 
    {   
        document.getElementById("in_temperature").value = y;
        document.getElementById("convert_temp").value = z;
        return;
    }
    var x;
    if (input_temp === "celsius") 
    {
        if (output_temp === "fahrenheit") 
        {
            x = temp * (9 / 5) + 32;
        } 
        else if (output_temp === "kelvin") 
        {
            x = temp + 273.15;
        }
        else if (output_temp === "celsius") 
        {
            x = temp;
        }
    } 
    else if (input_temp === "fahrenheit") 
    {
        if (output_temp === "celsius") 
        {
            x = (temp - 32) * (5 / 9);
        } 
        else if (output_temp === "kelvin") 
        {
            x = (temp - 32) * (5 / 9) + 273.15;
        }
        else if (output_temp === "fahrenheit") 
        {
            x = temp;
        }
    } 
    else if (input_temp === "kelvin") 
    {
        if (output_temp === "celsius") 
        {
            x = temp - 273.15;
        } 
        else if (output_temp === "fahrenheit") 
        {
            x = (temp - 273.15) * (9 / 5) + 32;
        }
        else if (output_temp === "kelvin") 
        {
            x = temp;
        }
    }
   	document.getElementById("convert_temp").value = x.toFixed(2);
}










/*function convert()
{
	var input_temp=document.getElementById("input_temperature").value;
	var output_temp=document.getElementById("output_temperature").value;
	var temp=parseFloat(document.getElementById("in_temperature").value);
	if(isNaN(temp))
	{
		var x="Enter correct value";
		document.getElementById("in_temperature").value=x;
	}
	if(input_temp=="celsius")
	{
		if(output_temp=="fahrenheit")
		{
			output_temp=input_temp*(9/5)+32;
			document.write(output_temp);
			//document.getElementById("convert_temp").value=output_temp;
		}
		else if(output_temp=="kelvin")
		{
			output_temp=(input_temp+273.15);
			document.write(output_temp);
			//document.getElementById("convert_temp").value=output_temp;
		}
		else
		{
			document.getElementById("convert_temp").value=output_temp;
		}
	}*/
	// else if(input_temp=="fahrenheit")
	// {
	// 	if(output_temp=="celsius")
	// 	{
	// 		output_temp=(input_temp-32)*(5/9);
	// 	}
	// 	else if(output_temp=="kelvin")
	// 	{
	// 		output_temp=(input_temp-32)*5/9+273.15; 
	// 	}
	// 	else
	// 	{
	// 		document.getElementById("convert_temp").value=output_temp;
	// 	}
	// }
	// else if(input_temp=="kelvin")
	// {
	// 	if(output_temp=="celsius")
	// 	{
	// 		output_temp=(input_temp- 273.15);
	// 	}
	// 	else if(output_temp=="fahrenheit")
	// 	{
	// 		output_temp= (input_temp-273.15)*(9/5)+32;
	// 	}
	// 	else
	// 	{
	// 		document.getElementById("convert_temp").value=output_temp;
	// 	}
	// }
//}