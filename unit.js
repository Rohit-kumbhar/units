var max_num = 0;

var val_1 = ["Millimeters", "Centimeters", "Meters", "Kilometers","Inches","Feet","Yards","Miles"];
var val_2 = ["Millimeters", "Centimeters", "Meters", "Kilometers","Inches","Feet","Yards","Miles"];
var val_3 = ["Millimeter square", "Centimeter square", "Meter square","Inch square","Foot square","Yard square"];
var val_4 = ["Millimeter square", "Centimeter square", "Meter square","Inch square","Foot square","Yard square"];

var val_5 = ["Centimeter cube", "Meter cube", "Liter","Inch cube","Foot cube","US gallons","Imperial gallons","US barrel (oil)"];
var val_6 =  ["Centimeter cube", "Meter cube", "Liter","Inch cube","Foot cube","US gallons","Imperial gallons","US barrel (oil)"];




var val_7 = ["Grams", "Kilograms","Metric tonnes","Short ton","Long ton","Pounds","Ounces"];
var val_8 = ["Grams", "Kilograms","Metric tonnes","Short ton","Long ton","Pounds","Ounces"];
var val_9 = ["Gram/milliliter", "Kilogram/meter cube","Pound/foot cube","Pound/inch cube"];
var val_10 = ["Gram/milliliter", "Kilogram/meter cube","Pound/foot cube","Pound/inch cube"];

var val_11 = ["Meter/second", "Meter/minute","Kilometer/hour","Foot/second","Foot/minute","Miles/hour"];
var val_12 = ["Meter/second", "Meter/minute","Kilometer/hour","Foot/second","Foot/minute","Miles/hour"];
var val_13 = ["Degree Celsius (°C)", "Degree Fahrenheit (°F)","Kelvin (K)"];
var val_14 = ["Degree Celsius (°C)", "Degree Fahrenheit (°F)","Kelvin (K)"];

var val_15 = ["Liter/second", "Liter/minute","Meter cube/hour","Foot cube/minute","Foot cube/hour","US gallons/minute","US barrels (oil)/day "];

var val_16 = ["Liter/second", "Liter/minute","Meter cube/hour","Foot cube/minute","Foot cube/hour","US gallons/minute","US barrels (oil)/day"];




function show(){


	for(var i = 0;i < 7;i++)
	{
		document.getElementById(i).innerHTML = '';
		document.getElementById(i+'1').innerHTML = '';
	}


	if(document.getElementById("unit_type").value == 'Length')
	{
		for(var i = 0;i < val_1.length;i++)
		{
			document.getElementById(i).innerHTML = val_1[i];
		}
		for(var i = 0;i < val_2.length;i++)
		{
			document.getElementById(i+'1').innerHTML = val_2[i];
		}
	}
	else if(document.getElementById("unit_type").value == 'Area')
	{
		for(var i = 0;i < val_3.length;i++)
		{
			document.getElementById(i).innerHTML = val_3[i];
		}
		for(var i = 0;i < val_4.length;i++)
		{
			document.getElementById(i+'1').innerHTML = val_4[i];
		}
	}
	else if(document.getElementById("unit_type").value == 'Volume')
	{
		for(var i = 0;i < val_5.length;i++)
		{
			document.getElementById(i).innerHTML = val_5[i];
		}
		for(var i = 0;i < val_6.length;i++)
		{
			document.getElementById(i+'1').innerHTML = val_6[i];
		}
	}
	else if(document.getElementById("unit_type").value == 'Mass')
	{
		for(var i = 0;i < val_7.length;i++)
		{
			document.getElementById(i).innerHTML = val_7[i];
		}
		for(var i = 0;i < val_8.length;i++)
		{
			document.getElementById(i+'1').innerHTML = val_8[i];
		}
	}
	else if(document.getElementById("unit_type").value == 'Density')
	{
		for(var i = 0;i < val_9.length;i++)
		{
			document.getElementById(i).innerHTML = val_9[i];
			document.getElementById(i+'1').innerHTML = val_10[i];
		}
		
	}
	else if(document.getElementById("unit_type").value == 'Speed')
	{
		for(var i = 0;i < val_11.length;i++)
		{
			document.getElementById(i).innerHTML = val_11[i];
			document.getElementById(i+'1').innerHTML = val_12[i];
		}
		
	}
	else if(document.getElementById("unit_type").value == 'Temperature')
	{
		for(var i = 0;i < val_13.length;i++)
		{
			document.getElementById(i).innerHTML = val_13[i];
			document.getElementById(i+'1').innerHTML = val_14[i];
		}
		
	}

	else if(document.getElementById("unit_type").value == 'Volumetric Liquid Flow Units')
	{
		for(var i = 0;i < val_15.length;i++)
		{
			document.getElementById(i).innerHTML = val_15[i];
			document.getElementById(i+'1').innerHTML = val_16[i];
		}
		
	}
	else
	{
		console.log('no condition matched');
	}



//  main part of the code	
	if(document.getElementById("unit_type").value != '' && document.getElementById("unit_choice1").value != '' && document.getElementById("unit_choice2").value != '' && document.getElementById("input_from").value != '' )
	{
		if(document.getElementById("unit_type").value == 'Length')
		{
			length1();
		}
		else if(document.getElementById("unit_type").value == 'Area')
		{
			area1();
		}
		else if(document.getElementById("unit_type").value == 'Volume')
		{
			volume1();
		}
		else if(document.getElementById("unit_type").value == 'Mass')
		{
			mass1();
		}
		else if(document.getElementById("unit_type").value == 'Density')
		{
			density1();
		}
		else if(document.getElementById("unit_type").value == 'Speed')
		{
			speed1();
		}
		else if(document.getElementById("unit_type").value == 'Temperature')
		{
			temperature();
		}
		else if(document.getElementById("unit_type").value == 'Volumetric Liquid Flow Units')
		{
			Volumetric_Liquid_Flow_Units();
		}
	}
	
	
}




function length1(){
	if(document.getElementById("unit_choice1").value == 'Millimeters')
		{
			length1_mili();
		}
		else if(document.getElementById("unit_choice1").value == 'Centimeters')
		{
			length1_centi();
		}
		else if(document.getElementById("unit_choice1").value == 'Meters')
		{
			length1_meter();
		}
		else if(document.getElementById("unit_choice1").value == 'Kilometers')
		{
			length1_kilo();
		}
		else if(document.getElementById("unit_choice1").value == 'Inches')
		{
			Inches();
		}
		else if(document.getElementById("unit_choice1").value == 'Feet')
		{
			Feet();
		}
		else if(document.getElementById("unit_choice1").value == 'Yards')
		{
			Yards();
		}
		else if(document.getElementById("unit_choice1").value == 'Miles')
		{
			Miles();
		}
}

function length1_mili()
{

	if(document.getElementById("unit_choice2").value == 'Millimeters')
		{
			document.getElementById("output_to").value = document.getElementById("input_from").value;
		}
		else if(document.getElementById("unit_choice2").value == 'Centimeters')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)/10;
		}
		else if(document.getElementById("unit_choice2").value == 'Meters')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)/1000;
		}
		else if(document.getElementById("unit_choice2").value == 'Kilometers')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)/1000000;
		}
		else if(document.getElementById("unit_choice2").value == 'Inches')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*0.03937 ;
		}
		else if(document.getElementById("unit_choice2").value == 'Feet')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*0.003281 ;
		}
		else if(document.getElementById("unit_choice2").value == 'Yards')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*0.001094 ;
		}
		else if(document.getElementById("unit_choice2").value == 'Miles')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*6.21e-07 ;
		}
}






function length1_centi()
{

	if(document.getElementById("unit_choice2").value == 'Millimeters')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*10;
		}
		else if(document.getElementById("unit_choice2").value == 'Centimeters')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value);
		}
		else if(document.getElementById("unit_choice2").value == 'Meters')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)/100;
		}
		else if(document.getElementById("unit_choice2").value == 'Kilometers')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)/100000;
		}
		else if(document.getElementById("unit_choice2").value == 'Inches')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*0.393701  ;
		}
		else if(document.getElementById("unit_choice2").value == 'Feet')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*0.032808  ;
		}
		else if(document.getElementById("unit_choice2").value == 'Yards')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*0.010936  ;
		}
		else if(document.getElementById("unit_choice2").value == 'Miles')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*0.000006  ;
		}
}



function length1_meter()
{

	if(document.getElementById("unit_choice2").value == 'Millimeters')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*100;
		}
		else if(document.getElementById("unit_choice2").value == 'Centimeters')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*10;
		}
		else if(document.getElementById("unit_choice2").value == 'Meters')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value);
		}
		else if(document.getElementById("unit_choice2").value == 'Kilometers')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)/1000;
		}
		else if(document.getElementById("unit_choice2").value == 'Inches')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*39.37008   ;
		}
		else if(document.getElementById("unit_choice2").value == 'Feet')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*3.28084   ;
		}
		else if(document.getElementById("unit_choice2").value == 'Yards')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*1.093613   ;
		}
		else if(document.getElementById("unit_choice2").value == 'Miles')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*0.000621   ;
		}
}


function length1_kilo()
{

	if(document.getElementById("unit_choice2").value == 'Millimeters')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*1000000;
		}
		else if(document.getElementById("unit_choice2").value == 'Centimeters')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*100000;
		}
		else if(document.getElementById("unit_choice2").value == 'Meters')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*1000;
		}
		else if(document.getElementById("unit_choice2").value == 'Kilometers')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value);
		}
		else if(document.getElementById("unit_choice2").value == 'Inches')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*39370.08   ;
		}
		else if(document.getElementById("unit_choice2").value == 'Feet')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*3280.84    ;
		}
		else if(document.getElementById("unit_choice2").value == 'Yards')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*1093.613    ;
		}
		else if(document.getElementById("unit_choice2").value == 'Miles')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*0.621371    ;
		}
}



function Inches()
{

	if(document.getElementById("unit_choice2").value == 'Millimeters')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*25.4 ;
		}
		else if(document.getElementById("unit_choice2").value == 'Centimeters')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*2.54  ;
		}
		else if(document.getElementById("unit_choice2").value == 'Meters')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*0.0254 ;
		}
		else if(document.getElementById("unit_choice2").value == 'Kilometers')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*0.000025 ;
		}
		else if(document.getElementById("unit_choice2").value == 'Inches')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*1   ;
		}
		else if(document.getElementById("unit_choice2").value == 'Feet')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*0.083333     ;
		}
		else if(document.getElementById("unit_choice2").value == 'Yards')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*0.027778   ;
		}
		else if(document.getElementById("unit_choice2").value == 'Miles')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*0.000016     ;
		}
}



function Feet()
{

	if(document.getElementById("unit_choice2").value == 'Millimeters')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*304.8  ;
		}
		else if(document.getElementById("unit_choice2").value == 'Centimeters')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*30.48   ;
		}
		else if(document.getElementById("unit_choice2").value == 'Meters')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*0.3048  ;
		}
		else if(document.getElementById("unit_choice2").value == 'Kilometers')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*0.000305  ;
		}
		else if(document.getElementById("unit_choice2").value == 'Inches')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*12   ;
		}
		else if(document.getElementById("unit_choice2").value == 'Feet')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*1     ;
		}
		else if(document.getElementById("unit_choice2").value == 'Yards')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*0.333333    ;
		}
		else if(document.getElementById("unit_choice2").value == 'Miles')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*0.000189      ;
		}
}



function Yards()
{

	if(document.getElementById("unit_choice2").value == 'Millimeters')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*914.4  ;
		}
		else if(document.getElementById("unit_choice2").value == 'Centimeters')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*91.44    ;
		}
		else if(document.getElementById("unit_choice2").value == 'Meters')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*0.9144  ;
		}
		else if(document.getElementById("unit_choice2").value == 'Kilometers')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*0.000914  ;
		}
		else if(document.getElementById("unit_choice2").value == 'Inches')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*36   ;
		}
		else if(document.getElementById("unit_choice2").value == 'Feet')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*3     ;
		}
		else if(document.getElementById("unit_choice2").value == 'Yards')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*1    ;
		}
		else if(document.getElementById("unit_choice2").value == 'Miles')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*0.000568       ;
		}
}



function Miles()
{

	if(document.getElementById("unit_choice2").value == 'Millimeters')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*1609344  ;
		}
		else if(document.getElementById("unit_choice2").value == 'Centimeters')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*160934.4     ;
		}
		else if(document.getElementById("unit_choice2").value == 'Meters')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*1609.344   ;
		}
		else if(document.getElementById("unit_choice2").value == 'Kilometers')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*1.609344   ;
		}
		else if(document.getElementById("unit_choice2").value == 'Inches')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*63360    ;
		}
		else if(document.getElementById("unit_choice2").value == 'Feet')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*5280      ;
		}
		else if(document.getElementById("unit_choice2").value == 'Yards')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*1760    ;
		}
		else if(document.getElementById("unit_choice2").value == 'Miles')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*1       ;
		}
}



// Area funtion and its sub-functions 

function area1()
{
	if(document.getElementById("unit_choice1").value == 'Millimeter square')
		{
			area1_mili();
		}
		else if(document.getElementById("unit_choice1").value == 'Centimeter square')
		{
			area1_centi();
		}
		else if(document.getElementById("unit_choice1").value == 'Meter square')
		{
			area1_meter();
		}
		else if(document.getElementById("unit_choice1").value == 'Inch square')
		{
			Inch_square();
		}
		else if(document.getElementById("unit_choice1").value == 'Foot square')
		{
			Foot_square();
		}
		else if(document.getElementById("unit_choice1").value == 'Yard square')
		{
			Yard_square();
		}
}


function area1_mili()
{

	if(document.getElementById("unit_choice2").value == 'Millimeter square')
		{
			document.getElementById("output_to").value = document.getElementById("input_from").value;
		}
		else if(document.getElementById("unit_choice2").value == 'Centimeter square')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)/100;
		}
		else if(document.getElementById("unit_choice2").value == 'Meter square')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*0.000001 ;
		}
		else if(document.getElementById("unit_choice2").value == 'Inch square')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*0.00155 ;
		}
		else if(document.getElementById("unit_choice2").value == 'Foot square')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*0.000011 ;
		}
		else if(document.getElementById("unit_choice2").value == 'Yard square')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*0.000001 ;
		}
}

function area1_centi()
{

	if(document.getElementById("unit_choice2").value == 'Millimeter square')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*100;
		}
		else if(document.getElementById("unit_choice2").value == 'Centimeter square')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value);
		}
		else if(document.getElementById("unit_choice2").value == 'Meter square')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)/10000;
		}
		else if(document.getElementById("unit_choice2").value == 'Inch square')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*0.155  ;
		}
		else if(document.getElementById("unit_choice2").value == 'Foot square')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*0.001076  ;
		}
		else if(document.getElementById("unit_choice2").value == 'Yard square')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*0.00012  ;
		}
}

function area1_meter()
{

	if(document.getElementById("unit_choice2").value == 'Millimeter square')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*1000000;
		}
		else if(document.getElementById("unit_choice2").value == 'Centimeter square')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*10000;
		}
		else if(document.getElementById("unit_choice2").value == 'Meter square')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value);
		}
		else if(document.getElementById("unit_choice2").value == 'Inch square')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*1550.003   ;
		}
		else if(document.getElementById("unit_choice2").value == 'Foot square')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*10.76391   ;
		}
		else if(document.getElementById("unit_choice2").value == 'Yard square')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*1.19599   ;
		}
}




function Inch_square()
{

	if(document.getElementById("unit_choice2").value == 'Millimeter square')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*645.16 ;
		}
		else if(document.getElementById("unit_choice2").value == 'Centimeter square')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*6.4516 ;
		}
		else if(document.getElementById("unit_choice2").value == 'Meter square')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value*0.000645 );
		}
		else if(document.getElementById("unit_choice2").value == 'Inch square')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*1   ;
		}
		else if(document.getElementById("unit_choice2").value == 'Foot square')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*0.006944    ;
		}
		else if(document.getElementById("unit_choice2").value == 'Yard square')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*0.000772  ;
		}
}


function Foot_square()
{

	if(document.getElementById("unit_choice2").value == 'Millimeter square')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*92903 ;
		}
		else if(document.getElementById("unit_choice2").value == 'Centimeter square')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*929.0304  ;
		}
		else if(document.getElementById("unit_choice2").value == 'Meter square')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value*0.092903  );
		}
		else if(document.getElementById("unit_choice2").value == 'Inch square')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*144   ;
		}
		else if(document.getElementById("unit_choice2").value == 'Foot square')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*1    ;
		}
		else if(document.getElementById("unit_choice2").value == 'Yard square')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*0.111111   ;
		}
}




function Yard_square()
{

	if(document.getElementById("unit_choice2").value == 'Millimeter square')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*836127  ;
		}
		else if(document.getElementById("unit_choice2").value == 'Centimeter square')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*8361.274   ;
		}
		else if(document.getElementById("unit_choice2").value == 'Meter square')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value*0.836127   );
		}
		else if(document.getElementById("unit_choice2").value == 'Inch square')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*1296   ;
		}
		else if(document.getElementById("unit_choice2").value == 'Foot square')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*9   ;
		}
		else if(document.getElementById("unit_choice2").value == 'Yard square')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*1   ;
		}
}



function volume1()
{
	if(document.getElementById("unit_choice1").value == 'Centimeter cube')
		{
			volume1_centi();
		}
		else if(document.getElementById("unit_choice1").value == 'Meter cube')
		{
			volume1_meter();
		}
		else if(document.getElementById("unit_choice1").value == 'Liter')
		{
			volume1_liter();
		}
		else if(document.getElementById("unit_choice1").value == 'Inch cube')
		{
			Inch_cube();
		}
		else if(document.getElementById("unit_choice1").value == 'Foot cube')
		{
			Foot_cube();
		}
		else if(document.getElementById("unit_choice1").value == 'US gallons')
		{
			US_gallons();
		}
		else if(document.getElementById("unit_choice1").value == 'Imperial gallons')
		{
			Imperial_gallons();
		}
		else if(document.getElementById("unit_choice1").value == 'US barrel (oil)')
		{
			US_barrel_oil();
		}
}

function volume1_centi()
{

	if(document.getElementById("unit_choice2").value == 'Centimeter cube')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value);
		}
		else if(document.getElementById("unit_choice2").value == 'Meter cube')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)/1000000;
		}
		else if(document.getElementById("unit_choice2").value == 'Liter')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)/1000;
		}
		else if(document.getElementById("unit_choice2").value == 'Inch cube')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*0.061024 ;
		}
		else if(document.getElementById("unit_choice2").value == 'Foot cube')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*0.000035 ;
		}
		else if(document.getElementById("unit_choice2").value == 'US gallons')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*0.000264 ;
		}
		else if(document.getElementById("unit_choice2").value == 'Imperial gallons')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*0.00022 ;
		}
		else if(document.getElementById("unit_choice2").value == 'US barrel (oil)')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*0.000006 ;
		}
}

function volume1_meter()
{

	if(document.getElementById("unit_choice2").value == 'Centimeter cube')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*1000000;
		}
		else if(document.getElementById("unit_choice2").value == 'Meter cube')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value);
		}
		else if(document.getElementById("unit_choice2").value == 'Liter')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*1000;
		}
		else if(document.getElementById("unit_choice2").value == 'Inch cube')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*61024 ;
		}
		else if(document.getElementById("unit_choice2").value == 'Foot cube')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*35 ;
		}
		else if(document.getElementById("unit_choice2").value == 'US gallons')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*264 ;
		}
		else if(document.getElementById("unit_choice2").value == 'Imperial gallons')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*220 ;
		}
		else if(document.getElementById("unit_choice2").value == 'US barrel (oil)')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*6.29  ;
		}
}

function volume1_liter()
{

	if(document.getElementById("unit_choice2").value == 'Centimeter cube')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*1000;
		}
		else if(document.getElementById("unit_choice2").value == 'Meter cube')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*0.001;
		}
		else if(document.getElementById("unit_choice2").value == 'Liter')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value);
		}
		else if(document.getElementById("unit_choice2").value == 'Inch cube')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*61 ;
		}
		else if(document.getElementById("unit_choice2").value == 'Foot cube')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*0.035  ;
		}
		else if(document.getElementById("unit_choice2").value == 'US gallons')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*0.264201  ;
		}
		else if(document.getElementById("unit_choice2").value == 'Imperial gallons')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*0.22  ;
		}
		else if(document.getElementById("unit_choice2").value == 'US barrel (oil)')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*0.00629   ;
		}
}




function Inch_cube()
{

	if(document.getElementById("unit_choice2").value == 'Centimeter cube')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*16.4 ;
		}
		else if(document.getElementById("unit_choice2").value == 'Meter cube')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*0.000016 ;
		}
		else if(document.getElementById("unit_choice2").value == 'Liter')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*0.016387 ;
		}
		else if(document.getElementById("unit_choice2").value == 'Inch cube')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*1 ;
		}
		else if(document.getElementById("unit_choice2").value == 'Foot cube')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*0.000579   ;
		}
		else if(document.getElementById("unit_choice2").value == 'US gallons')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*0.004329   ;
		}
		else if(document.getElementById("unit_choice2").value == 'Imperial gallons')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*0.003605   ;
		}
		else if(document.getElementById("unit_choice2").value == 'US barrel (oil)')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*0.000103 ;
		}
}



function Foot_cube()
{

	if(document.getElementById("unit_choice2").value == 'Centimeter cube')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*28317 ;
		}
		else if(document.getElementById("unit_choice2").value == 'Meter cube')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*0.028317  ;
		}
		else if(document.getElementById("unit_choice2").value == 'Liter')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*28.31685  ;
		}
		else if(document.getElementById("unit_choice2").value == 'Inch cube')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*1728 ;
		}
		else if(document.getElementById("unit_choice2").value == 'Foot cube')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*1   ;
		}
		else if(document.getElementById("unit_choice2").value == 'US gallons')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*7.481333    ;
		}
		else if(document.getElementById("unit_choice2").value == 'Imperial gallons')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*6.229712    ;
		}
		else if(document.getElementById("unit_choice2").value == 'US barrel (oil)')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*0.178127  ;
		}
}





function US_gallons()
{

	if(document.getElementById("unit_choice2").value == 'Centimeter cube')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*3785 ;
		}
		else if(document.getElementById("unit_choice2").value == 'Meter cube')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*0.003785   ;
		}
		else if(document.getElementById("unit_choice2").value == 'Liter')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*3.79  ;
		}
		else if(document.getElementById("unit_choice2").value == 'Inch cube')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*231 ;
		}
		else if(document.getElementById("unit_choice2").value == 'Foot cube')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*0.13    ;
		}
		else if(document.getElementById("unit_choice2").value == 'US gallons')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*1    ;
		}
		else if(document.getElementById("unit_choice2").value == 'Imperial gallons')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*0.832701     ;
		}
		else if(document.getElementById("unit_choice2").value == 'US barrel (oil)')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*0.02381   ;
		}
}


function US_gallons()
{

	if(document.getElementById("unit_choice2").value == 'Centimeter cube')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*3785 ;
		}
		else if(document.getElementById("unit_choice2").value == 'Meter cube')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*0.003785   ;
		}
		else if(document.getElementById("unit_choice2").value == 'Liter')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*3.79  ;
		}
		else if(document.getElementById("unit_choice2").value == 'Inch cube')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*231 ;
		}
		else if(document.getElementById("unit_choice2").value == 'Foot cube')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*0.13    ;
		}
		else if(document.getElementById("unit_choice2").value == 'US gallons')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*1    ;
		}
		else if(document.getElementById("unit_choice2").value == 'Imperial gallons')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*0.832701     ;
		}
		else if(document.getElementById("unit_choice2").value == 'US barrel (oil)')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*0.02381   ;
		}
}




function Imperial_gallons()
{

	if(document.getElementById("unit_choice2").value == 'Centimeter cube')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*4545 ;
		}
		else if(document.getElementById("unit_choice2").value == 'Meter cube')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*0.004545   ;
		}
		else if(document.getElementById("unit_choice2").value == 'Liter')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*4.55   ;
		}
		else if(document.getElementById("unit_choice2").value == 'Inch cube')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*277 ;
		}
		else if(document.getElementById("unit_choice2").value == 'Foot cube')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*0.16     ;
		}
		else if(document.getElementById("unit_choice2").value == 'US gallons')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*1.20     ;
		}
		else if(document.getElementById("unit_choice2").value == 'Imperial gallons')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*1     ;
		}
		else if(document.getElementById("unit_choice2").value == 'US barrel (oil)')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*0.028593   ;
		}
}


function US_barrel_oil()
{

	if(document.getElementById("unit_choice2").value == 'Centimeter cube')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*158970 ;
		}
		else if(document.getElementById("unit_choice2").value == 'Meter cube')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*0.15897    ;
		}
		else if(document.getElementById("unit_choice2").value == 'Liter')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*159   ;
		}
		else if(document.getElementById("unit_choice2").value == 'Inch cube')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*9701 ;
		}
		else if(document.getElementById("unit_choice2").value == 'Foot cube')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*6     ;
		}
		else if(document.getElementById("unit_choice2").value == 'US gallons')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*42     ;
		}
		else if(document.getElementById("unit_choice2").value == 'Imperial gallons')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*35     ;
		}
		else if(document.getElementById("unit_choice2").value == 'US barrel (oil)')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*1  ;
		}
}


// code of mass



function mass1()
{
	if(document.getElementById("unit_choice1").value == 'Grams')
		{
			mass1_grams();
		}
		else if(document.getElementById("unit_choice1").value == 'Kilograms')
		{
			mass1_kilograms();
		}
		else if(document.getElementById("unit_choice1").value == 'Metric tonnes')
		{
			Metric_tonnes();
		}
		else if(document.getElementById("unit_choice1").value == 'Short ton')
		{
			Short_ton();
		}
		else if(document.getElementById("unit_choice1").value == 'Long ton')
		{
			Long_ton();
		}
		else if(document.getElementById("unit_choice1").value == 'Pounds')
		{
			Pounds();
		}
		else if(document.getElementById("unit_choice1").value == 'Ounces')
		{
			Ounces();
		}
}

function mass1_grams()
{

	if(document.getElementById("unit_choice2").value == 'Grams')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value);
		}
		else if(document.getElementById("unit_choice2").value == 'Kilograms')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*0.001;
		}
		else if(document.getElementById("unit_choice2").value == 'Metric tonnes')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*0.000001 ;
		}
		else if(document.getElementById("unit_choice2").value == 'Short ton')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*0.000001 ;
		}
		else if(document.getElementById("unit_choice2").value == 'Long ton')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*9.84e-07 ;
		}
		else if(document.getElementById("unit_choice2").value == 'Pounds')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*0.002205  ;
		}
		else if(document.getElementById("unit_choice2").value == 'Ounces')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*0.035273  ;
		}
}

function mass1_kilograms()
{

	if(document.getElementById("unit_choice2").value == 'Grams')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*1000;
		}
		else if(document.getElementById("unit_choice2").value == 'Kilograms')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value);
		}
		else if(document.getElementById("unit_choice2").value == 'Metric tonnes')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*0.001  ;
		}
		else if(document.getElementById("unit_choice2").value == 'Short ton')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*0.001102  ;
		}
		else if(document.getElementById("unit_choice2").value == 'Long ton')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*0.000984  ;
		}
		else if(document.getElementById("unit_choice2").value == 'Pounds')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*2.204586   ;
		}
		else if(document.getElementById("unit_choice2").value == 'Ounces')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*35.27337   ;
		}
}




function Metric_tonnes()
{

	if(document.getElementById("unit_choice2").value == 'Grams')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*1000000;
		}
		else if(document.getElementById("unit_choice2").value == 'Kilograms')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*1000;
		}
		else if(document.getElementById("unit_choice2").value == 'Metric tonnes')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*1  ;
		}
		else if(document.getElementById("unit_choice2").value == 'Short ton')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*1.102293   ;
		}
		else if(document.getElementById("unit_choice2").value == 'Long ton')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*0.984252  ;
		}
		else if(document.getElementById("unit_choice2").value == 'Pounds')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*2204.586  ;
		}
		else if(document.getElementById("unit_choice2").value == 'Ounces')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*35273.37  ;
		}
}



function Short_ton()
{

	if(document.getElementById("unit_choice2").value == 'Grams')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*907200;
		}
		else if(document.getElementById("unit_choice2").value == 'Kilograms')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*907.2 ;
		}
		else if(document.getElementById("unit_choice2").value == 'Metric tonnes')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*0.9072  ;
		}
		else if(document.getElementById("unit_choice2").value == 'Short ton')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*1  ;
		}
		else if(document.getElementById("unit_choice2").value == 'Long ton')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*0.892913  ;
		}
		else if(document.getElementById("unit_choice2").value == 'Pounds')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*2000 ;
		}
		else if(document.getElementById("unit_choice2").value == 'Ounces')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*32000;
		}
}

function Long_ton()
{

	if(document.getElementById("unit_choice2").value == 'Grams')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*1016000;
		}
		else if(document.getElementById("unit_choice2").value == 'Kilograms')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*1016 ;
		}
		else if(document.getElementById("unit_choice2").value == 'Metric tonnes')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*1.016  ;
		}
		else if(document.getElementById("unit_choice2").value == 'Short ton')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*1.119929  ;
		}
		else if(document.getElementById("unit_choice2").value == 'Long ton')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*1 ;
		}
		else if(document.getElementById("unit_choice2").value == 'Pounds')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*2239.859 ;
		}
		else if(document.getElementById("unit_choice2").value == 'Ounces')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*35837.74 ;
		}
}



function Pounds()
{

	if(document.getElementById("unit_choice2").value == 'Grams')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*453.6 ;
		}
		else if(document.getElementById("unit_choice2").value == 'Kilograms')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*0.4536 ;
		}
		else if(document.getElementById("unit_choice2").value == 'Metric tonnes')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*0.000454   ;
		}
		else if(document.getElementById("unit_choice2").value == 'Short ton')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*0.0005  ;
		}
		else if(document.getElementById("unit_choice2").value == 'Long ton')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*0.000446  ;
		}
		else if(document.getElementById("unit_choice2").value == 'Pounds')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*1 ;
		}
		else if(document.getElementById("unit_choice2").value == 'Ounces')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*16 ;
		}
}


function Ounces()
{

	if(document.getElementById("unit_choice2").value == 'Grams')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*28 ;
		}
		else if(document.getElementById("unit_choice2").value == 'Kilograms')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*0.02835  ;
		}
		else if(document.getElementById("unit_choice2").value == 'Metric tonnes')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*0.000028    ;
		}
		else if(document.getElementById("unit_choice2").value == 'Short ton')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*0.000031  ;
		}
		else if(document.getElementById("unit_choice2").value == 'Long ton')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*0.000028  ;
		}
		else if(document.getElementById("unit_choice2").value == 'Pounds')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*0.0625  ;
		}
		else if(document.getElementById("unit_choice2").value == 'Ounces')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*1;
		}
}



//for density


function density1()
{
	if(document.getElementById("unit_choice1").value == 'Gram/milliliter')
		{
			den_mili();
		}
		else if(document.getElementById("unit_choice1").value == 'Kilogram/meter cube')
		{
			den_meter();
		}
		else if(document.getElementById("unit_choice1").value == 'Pound/foot cube')
		{
			Pound_foot_cube();
		}
		else if(document.getElementById("unit_choice1").value == 'Pound/inch cube')
		{
			Pound_inch_cube();
		}
}


function den_mili()
{

	if(document.getElementById("unit_choice2").value == 'Gram/milliliter')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value);
		}
		else if(document.getElementById("unit_choice2").value == 'Kilogram/meter cube')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*1000;
		}
		else if(document.getElementById("unit_choice2").value == 'Pound/foot cube')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*62.42197 ;
		}
		else if(document.getElementById("unit_choice2").value == 'Kilogram/meter cube')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*0.036127 ;
		}
}

function den_meter()
{

	if(document.getElementById("unit_choice2").value == 'Gram/milliliter')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*0.001;
		}
		else if(document.getElementById("unit_choice2").value == 'Kilogram/meter cube')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value);
		}
		else if(document.getElementById("unit_choice2").value == 'Pound/foot cube')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*0.062422  ;
		}
		else if(document.getElementById("unit_choice2").value == 'Kilogram/meter cube')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*0.000036 ;
		}
}

function Pound_foot_cube()
{

	if(document.getElementById("unit_choice2").value == 'Gram/milliliter')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*0.01602 ;
		}
		else if(document.getElementById("unit_choice2").value == 'Kilogram/meter cube')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*16.02 ;
		}
		else if(document.getElementById("unit_choice2").value == 'Pound/foot cube')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*1  ;
		}
		else if(document.getElementById("unit_choice2").value == 'Pound/inch cube')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*0.000579  ;
		}
}


function Pound_inch_cube()
{

	if(document.getElementById("unit_choice2").value == 'Gram/milliliter')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*27.68  ;
		}
		else if(document.getElementById("unit_choice2").value == 'Kilogram/meter cube')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*27680 ;
		}
		else if(document.getElementById("unit_choice2").value == 'Pound/foot cube')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*1727.84  ;
		}
		else if(document.getElementById("unit_choice2").value == 'Pound/inch cube')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*1  ;
		}
}



function speed1()
{
	if(document.getElementById("unit_choice1").value == 'Meter/second')
		{
			speed1_sec();
		}
		else if(document.getElementById("unit_choice1").value == 'Meter/minute')
		{
			speed1_min();
		}
		else if(document.getElementById("unit_choice1").value == 'Kilometer/hour')
		{
			speed1_hour();
		}
		else if(document.getElementById("unit_choice1").value == 'Foot/second')
		{
			Foot_second();
		}
		else if(document.getElementById("unit_choice1").value == 'Foot/minute')
		{
			Foot_minute();
		}
		else if(document.getElementById("unit_choice1").value == 'Miles/hour')
		{
			Miles_hour();
		}
}

function speed1_sec()
{

	if(document.getElementById("unit_choice2").value == 'Meter/second')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value);
		}
		else if(document.getElementById("unit_choice2").value == 'Meter/minute')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*59.988 ;
		}
		else if(document.getElementById("unit_choice2").value == 'Kilometer/hour')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*3.599712 ;
		}
		else if(document.getElementById("unit_choice2").value == 'Foot/second')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*3.28084 ;
		}
		else if(document.getElementById("unit_choice2").value == 'Foot/minute')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*196.8504  ;
		}
		else if(document.getElementById("unit_choice2").value == 'Miles/hour')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*2.237136  ;
		}
}

function speed1_min()
{

	if(document.getElementById("unit_choice2").value == 'Meter/second')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value);
		}
		else if(document.getElementById("unit_choice2").value == 'Meter/minute')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*0.01667  ;
		}
		else if(document.getElementById("unit_choice2").value == 'Kilometer/hour')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*0.060007  ;
		}
		else if(document.getElementById("unit_choice2").value == 'Foot/second')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*0.054692  ;
		}
		else if(document.getElementById("unit_choice2").value == 'Foot/minute')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*3.281496   ;
		}
		else if(document.getElementById("unit_choice2").value == 'Miles/hour')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*0.037293   ;
		}
}

function speed1_hour()
{

	if(document.getElementById("unit_choice2").value == 'Meter/second')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*0.2778 ;
		}
		else if(document.getElementById("unit_choice2").value == 'Meter/minute')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*16.66467   ;
		}
		else if(document.getElementById("unit_choice2").value == 'Kilometer/hour')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*0.060007  ;
		}
		else if(document.getElementById("unit_choice2").value == 'Foot/second')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*0.911417   ;
		}
		else if(document.getElementById("unit_choice2").value == 'Foot/minute')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*54.68504    ;
		}
		else if(document.getElementById("unit_choice2").value == 'Miles/hour')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*0.621477    ;
		}
}


function Foot_second()
{

	if(document.getElementById("unit_choice2").value == 'Meter/second')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*0.3048  ;
		}
		else if(document.getElementById("unit_choice2").value == 'Meter/minute')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*18.28434    ;
		}
		else if(document.getElementById("unit_choice2").value == 'Kilometer/hour')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*1.097192  ;
		}
		else if(document.getElementById("unit_choice2").value == 'Foot/second')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*1   ;
		}
		else if(document.getElementById("unit_choice2").value == 'Foot/minute')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*60    ;
		}
		else if(document.getElementById("unit_choice2").value == 'Miles/hour')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*0.681879    ;
		}
}


function Foot_minute()
{

	if(document.getElementById("unit_choice2").value == 'Meter/second')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*0.00508   ;
		}
		else if(document.getElementById("unit_choice2").value == 'Meter/minute')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*0.304739    ;
		}
		else if(document.getElementById("unit_choice2").value == 'Kilometer/hour')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*0.018287  ;
		}
		else if(document.getElementById("unit_choice2").value == 'Foot/second')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*0.016667    ;
		}
		else if(document.getElementById("unit_choice2").value == 'Foot/minute')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*1    ;
		}
		else if(document.getElementById("unit_choice2").value == 'Miles/hour')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*0.011365     ;
		}
}


function Miles_hour()
{

	if(document.getElementById("unit_choice2").value == 'Meter/second')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*0.447    ;
		}
		else if(document.getElementById("unit_choice2").value == 'Meter/minute')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*26.81464    ;
		}
		else if(document.getElementById("unit_choice2").value == 'Kilometer/hour')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*1.609071  ;
		}
		else if(document.getElementById("unit_choice2").value == 'Foot/second')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*1.466535   ;
		}
		else if(document.getElementById("unit_choice2").value == 'Foot/minute')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*87.99213     ;
		}
		else if(document.getElementById("unit_choice2").value == 'Miles/hour')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*1   ;
		}
}




function temperature()
{
	if(document.getElementById("unit_choice1").value == 'Degree Celsius (°C)')
		{
			Celsius();
		}
		else if(document.getElementById("unit_choice1").value == 'Degree Fahrenheit (°F)')
		{
			Fahrenheit();
		}
		else if(document.getElementById("unit_choice1").value == 'Kelvin (K)')
		{
			Kelvin();
		}
}

function Celsius()
{

	if(document.getElementById("unit_choice2").value == 'Degree Celsius (°C)')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value) ;
		}
		else if(document.getElementById("unit_choice2").value == 'Degree Fahrenheit (°F)')
		{	var c = parseInt(document.getElementById("input_from").value);
			c = c*(9/5) + 35
			document.getElementById("output_to").value =  c  ;
		}
		else if(document.getElementById("unit_choice2").value == 'Kelvin (K)')
		{
			var k = parseInt(document.getElementById("input_from").value);
			k = k +  273.15;
			document.getElementById("output_to").value =  k;
		}
}

function Fahrenheit()
{

	if(document.getElementById("unit_choice2").value == 'Degree Celsius (°C)')
		{
			var c = parseInt(document.getElementById("input_from").value);
			c = (c - 32) * 5/9 ;
			document.getElementById("output_to").value =  c  ;
		}
		else if(document.getElementById("unit_choice2").value == 'Degree Fahrenheit (°F)')
		{	
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value) ;
		}
		else if(document.getElementById("unit_choice2").value == 'Kelvin (K)')
		{
			var k = parseInt(document.getElementById("input_from").value);
			k = (k + 459.67) / 1.8 ;
			document.getElementById("output_to").value =  k;
		}
}

function Kelvin()
{

	if(document.getElementById("unit_choice2").value == 'Degree Celsius (°C)')
		{
			var c = parseInt(document.getElementById("input_from").value);
			c = (c) - 273.15 ;
			document.getElementById("output_to").value =  c  ;
		}
		else if(document.getElementById("unit_choice2").value == 'Degree Fahrenheit (°F)')
		{	
			var k = parseInt(document.getElementById("input_from").value);
			k = (1.8 * k) - 459.67  ;
			document.getElementById("output_to").value =  k;
		}
		else if(document.getElementById("unit_choice2").value == 'Kelvin (K)')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value) ;
		}
}



function Volumetric_Liquid_Flow_Units(){
	if(document.getElementById("unit_choice1").value == 'Liter/second')
		{
			Liter_second();
		}
		else if(document.getElementById("unit_choice1").value == 'Liter/minute')
		{
			Liter_minute();
		}
		else if(document.getElementById("unit_choice1").value == 'Meter cube/hour')
		{
			Meter_cube_hour();
		}
		else if(document.getElementById("unit_choice1").value == 'Foot cube/minute')
		{
			Foot_cube_minute();
		}
		else if(document.getElementById("unit_choice1").value == 'Foot cube/hour')
		{
			Foot_cube_hour();
		}
		else if(document.getElementById("unit_choice1").value == 'US gallons/minute')
		{
			US_gallons_minute();
		}
		else if(document.getElementById("unit_choice1").value == 'US barrels (oil)/day')
		{
			US_barrels_oil_day();
		}
}



function Liter_second()
{	
	if(document.getElementById("unit_choice2").value == 'Liter/second')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value);
		}
		else if(document.getElementById("unit_choice2").value == 'Liter/minute')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*60;
		}
		else if(document.getElementById("unit_choice2").value == 'Meter cube/hour')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*3.6 ;
		}
		else if(document.getElementById("unit_choice2").value == 'Foot cube/minute')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*2.119093;
		}
		else if(document.getElementById("unit_choice2").value == 'Foot cube/hour')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*127.1197 ;
		}
		else if(document.getElementById("unit_choice2").value == 'US gallons/minute')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*15.85037  ;
		}
		else if(document.getElementById("unit_choice2").value == 'US barrels (oil)/day')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*543.4783 ;
		}
}




function Liter_minute()
{	
	if(document.getElementById("unit_choice2").value == 'Liter/second')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*0.016666 ;
		}
		else if(document.getElementById("unit_choice2").value == 'Liter/minute')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value);
		}
		else if(document.getElementById("unit_choice2").value == 'Meter cube/hour')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*0.06  ;
		}
		else if(document.getElementById("unit_choice2").value == 'Foot cube/minute')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*0.035317 ;
		}
		else if(document.getElementById("unit_choice2").value == 'Foot cube/hour')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*2.118577  ;
		}
		else if(document.getElementById("unit_choice2").value == 'US gallons/minute')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*0.264162   ;
		}
		else if(document.getElementById("unit_choice2").value == 'US barrels (oil)/day')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*9.057609  ;
		}
}



function Meter_cube_hour()
{	
	if(document.getElementById("unit_choice2").value == 'Liter/second')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*0.277778  ;
		}
		else if(document.getElementById("unit_choice2").value == 'Liter/minute')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*16.6667 ;
		}
		else if(document.getElementById("unit_choice2").value == 'Meter cube/hour')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*1  ;
		}
		else if(document.getElementById("unit_choice2").value == 'Foot cube/minute')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*0.588637  ;
		}
		else if(document.getElementById("unit_choice2").value == 'Foot cube/hour')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*35.31102   ;
		}
		else if(document.getElementById("unit_choice2").value == 'US gallons/minute')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*4.40288    ;
		}
		else if(document.getElementById("unit_choice2").value == 'US barrels (oil)/day')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*150.9661   ;
		}
}


function Foot_cube_minute()
{	
	if(document.getElementById("unit_choice2").value == 'Liter/second')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*0.4719   ;
		}
		else if(document.getElementById("unit_choice2").value == 'Liter/minute')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*28.31513  ;
		}
		else if(document.getElementById("unit_choice2").value == 'Meter cube/hour')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*1.69884 ;
		}
		else if(document.getElementById("unit_choice2").value == 'Foot cube/minute')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*1  ;
		}
		else if(document.getElementById("unit_choice2").value == 'Foot cube/hour')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*60   ;
		}
		else if(document.getElementById("unit_choice2").value == 'US gallons/minute')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*7.479791     ;
		}
		else if(document.getElementById("unit_choice2").value == 'US barrels (oil)/day')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*256.4674    ;
		}
}



function Foot_cube_hour()
{	
	if(document.getElementById("unit_choice2").value == 'Liter/second')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*0.007867    ;
		}
		else if(document.getElementById("unit_choice2").value == 'Liter/minute')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*0.472015  ;
		}
		else if(document.getElementById("unit_choice2").value == 'Meter cube/hour')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*0.02832  ;
		}
		else if(document.getElementById("unit_choice2").value == 'Foot cube/minute')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*0.01667   ;
		}
		else if(document.getElementById("unit_choice2").value == 'Foot cube/hour')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*1   ;
		}
		else if(document.getElementById("unit_choice2").value == 'US gallons/minute')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*0.124689     ;
		}
		else if(document.getElementById("unit_choice2").value == 'US barrels (oil)/day')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*4.275326     ;
		}
}



function US_gallons_minute()
{	
	if(document.getElementById("unit_choice2").value == 'Liter/second')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*0.06309     ;
		}
		else if(document.getElementById("unit_choice2").value == 'Liter/minute')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*3.785551   ;
		}
		else if(document.getElementById("unit_choice2").value == 'Meter cube/hour')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*0.227124   ;
		}
		else if(document.getElementById("unit_choice2").value == 'Foot cube/minute')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*0.133694    ;
		}
		else if(document.getElementById("unit_choice2").value == 'Foot cube/hour')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*8.019983    ;
		}
		else if(document.getElementById("unit_choice2").value == 'US gallons/minute')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*1     ;
		}
		else if(document.getElementById("unit_choice2").value == 'US barrels (oil)/day')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*34.28804      ;
		}
}


function US_barrels_oil_day()
{	
	if(document.getElementById("unit_choice2").value == 'Liter/second')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*0.00184      ;
		}
		else if(document.getElementById("unit_choice2").value == 'Liter/minute')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*0.110404    ;
		}
		else if(document.getElementById("unit_choice2").value == 'Meter cube/hour')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*0.006624    ;
		}
		else if(document.getElementById("unit_choice2").value == 'Foot cube/minute')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*0.003899       ;
		}
		else if(document.getElementById("unit_choice2").value == 'Foot cube/hour')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*0.2339     ;
		}
		else if(document.getElementById("unit_choice2").value == 'US gallons/minute')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*0.029165      ;
		}
		else if(document.getElementById("unit_choice2").value == 'US barrels (oil)/day')
		{
			document.getElementById("output_to").value = parseInt(document.getElementById("input_from").value)*1      ;
		}
}




