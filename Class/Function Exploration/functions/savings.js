// JavaScript Document
// Caleb Rosenquist
// September 28th, 2015
// Purpose: Explore writing functions

//Declare Functions
function save1(presentValue, interestRate, n){
	for(var year=1; year <=n; year++){
		presentValue*=(1+interestRate);
	}
	return presentValue;
}

function save2(presentValue, interestRate, n){
	return presentValue*Math.pow((1+interestRate),n);
}

function save3(presentValue, interestRate, n){
	return presentValue*Math.exp(n*Math.log(1+interestRate));
}

function save4(presentValue, interestRate, n){
	if(n<=0)return presentValue;
	return save4(presentValue, interestRate, n-1)*(1+interestRate);
}

function save5(presentValue, interestRate, n){
	//Declare an Array
	futureValue=[];
	
	//Calculate all the Values in the array
	futureValue[0]=presentValue;
	for(var year=1; year <=n; year++){
		futureValue[year]=futureValue[year-1]*(1+interestRate);
	}
	return futureValue;
}

function display(fv){
	//output the headings for our table
	
	document.write('<table width="200" border="1">');
    document.write("<tr><th>Years</th><th>Savings</th></tr>");
    for(var year=0;year<fv.length;year++){
		document.write("<tr>");
		document.write("<td>"+year+"</td>");
		document.write("<td>"+fv[year]+"</td>");
		document.write("</tr>");
	}
	document.write("</table>");
	
}
