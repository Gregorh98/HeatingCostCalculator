function calculate()
{
	//Old fields
	pricePerKWhOld = 0.03;
	
	//New fields
	pricePerKWhNew = document.getElementById("pricePerKWh").value;
	govAidAmount = 60;
	govAid = document.getElementById("govAid").checked;
	
	//General fields
	boilerRating = document.getElementById("boilerRating").value;
	hours = document.getElementById("hours").value;
	budget = document.getElementById("budget").value;

	//Old Costs
	costPerHourOld = (pricePerKWhOld * boilerRating);
	costPerDayOld = costPerHourOld * hours;
	costPerWeekOld = costPerDayOld * 7;
	costPerMonthOld = costPerWeekOld * 4;
	costPerYearOld = costPerMonthOld * 12;

	//New Costs
	costPerHourNew = (pricePerKWhNew * boilerRating);
	costPerDayNew = costPerHourNew * hours;
	costPerWeekNew = costPerDayNew * 7;
	costPerMonthNew = costPerWeekNew * 4;
	costPerYearNew = costPerMonthNew * 12;
	
	if (govAid)
	{
		costPerHourNew -= (((govAidAmount / 4)/7)/24);
		costPerDayNew -= ((govAidAmount/4)/7);
		costPerWeekNew -= (govAidAmount/4);
		costPerMonthNew -= govAidAmount;
		costPerYearNew -= (govAidAmount*12);
	}
	
	//Increase costs
	hourlyIncrease = (costPerHourNew-costPerHourOld);
	dailyIncrease = (costPerDayNew-costPerDayOld);
	weeklyIncrease = (costPerWeekNew-costPerWeekOld);
	monthlyIncrease = (costPerMonthNew-costPerMonthOld);
	annualIncrease = (costPerYearNew-costPerYearOld);
	
	increaseSymbol = "+";
	if(hourlyIncrease < 0)
	{
		increaseSymbol = "-";
	}
	else if (hourlyIncrease == 0)
	{
		increaseSymbol = "+/-";
	}
	
	//Update Screen
	document.getElementById("hourlyCostNew").innerHTML 		= "£" + Math.round(costPerHourNew * 100) / 100;
	document.getElementById("dailyCostNew").innerHTML  		= "£" + Math.round(costPerDayNew * 100) / 100;
	document.getElementById("weeklyCostNew").innerHTML 		= "£" + Math.round(costPerWeekNew * 100) / 100;
	document.getElementById("monthlyCostNew").innerHTML		= "£" + Math.round(costPerMonthNew * 100) / 100;
	document.getElementById("annualCostNew").innerHTML 		= "£" + Math.round(costPerYearNew * 100) / 100;
	
	document.getElementById("hourlyCostOld").innerHTML 		= "£" + Math.round(costPerHourOld * 100) / 100;
	document.getElementById("dailyCostOld").innerHTML  		= "£" + Math.round(costPerDayOld * 100) / 100;
	document.getElementById("weeklyCostOld").innerHTML 		= "£" + Math.round(costPerWeekOld * 100) / 100;
	document.getElementById("monthlyCostOld").innerHTML		= "£" + Math.round(costPerMonthOld * 100) / 100;
	document.getElementById("annualCostOld").innerHTML 		= "£" + Math.round(costPerYearOld * 100) / 100;
	
	document.getElementById("hourlyIncrease").innerHTML 	= increaseSymbol + "£" + Math.round(hourlyIncrease);
	document.getElementById("dailyIncrease").innerHTML 		= increaseSymbol + "£" + Math.round(dailyIncrease);
	document.getElementById("weeklyIncrease").innerHTML 	= increaseSymbol + "£" + Math.round(weeklyIncrease);
	document.getElementById("monthlyIncrease").innerHTML	= increaseSymbol + "£" + Math.round(monthlyIncrease);
	document.getElementById("annualIncrease").innerHTML		= increaseSymbol + "£" + Math.round(annualIncrease);
	
}