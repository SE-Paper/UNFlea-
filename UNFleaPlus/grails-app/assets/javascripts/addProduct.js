submitForms = function() {
	var name = document.getElementById('myName').value;
	document.getElementById('name').value = name;
	var desc = document.getElementById('myDescription').value;
	document.getElementById('description').value = desc;
	document.getElementById('state').value = getState();
	// checkDates();
	// document.forms["files"].submit();
	// document.forms["genDesc"].submit();
	// document.getElementById('myName').value = "";
}

function checkDates() {
	if (document.getElementById('myAuctionState').checked) {
		var startDate = getStartDate();

		var endDate = getEndDate();

		var curDate = new get;

		alert(startDate.getTime() + " vs " + curDate.getTime());

		return endDate.getTime() > startDate.getTime()
				&& startDate.getTime() > curDate.getTime();
	} else
		return true;

}

function getStartDate() {
	var dayStart = document.getElementById('myDateStart_day').value;
	var monthStart = document.getElementById('myDateStart_month').value - 1;
	var yearStart = document.getElementById('myDateStart_year').value;
	var hourStart = document.getElementById('myDateStart_hour').value;
	var minuteStart = document.getElementById('myDateStart_minute').value;
	return new Date(yearStart, monthStart, dayStart, hourStart, minuteStart, 0,
			0);
}

function getEndDate() {
	var dayEnd = document.getElementById('myDateEnd_day').value;
	var monthEnd = document.getElementById('myDateEnd_month').value - 1;
	var yearEnd = document.getElementById('myDateEnd_year').value;
	var hourEnd = document.getElementById('myDateEnd_hour').value;
	var minuteEnd = document.getElementById('myDateEnd_minute').value;
	return new Date(yearEnd, monthEnd, dayEnd, hourEnd, minuteEnd, 0, 0);
}

function getState() {
	var normalState = document.getElementById('myNormalState').checked;
	var auctionState = document.getElementById('myAuctionState').checked;
	var theState = "0"
	if (normalState)
		theState = "0";
	else if (auctionState)
		theState = "1";
	else
		theState = "2"
	return theState
}

function onChangeName() {
	var name = document.getElementById('myName').value;
	document.getElementById('name').value = name;
	if(name.length>5){
		$("#myDescription").removeProp('disabled');
	}else{
		$("#myDescription").attr("disabled","disabled");
	}
}

function onChangeDescription() {
	var desc = document.getElementById('myDescription').value;
	document.getElementById('description').value = desc;
	if(desc.length>5)
		$("input[type = radio]").removeProp('disabled');
	else
		$("input[type = radio]").attr("disabled","disabled");
}

function onChangeState() {
	var auctionState = document.getElementById('myAuctionState').checked;
	var donateState = document.getElementById('myDonateState').checked;
	document.getElementById('state').value = getState();
	if (auctionState || donateState){
		$("#myAditionalOptions").show("fast");
		if(auctionState)
			$("#myOptionMinimumCost").show("fast");
		else
			$("#myOptionMinimumCost").hide();
	}else{
		$("#myAditionalOptions").hide("fast");
		$("#myOptionMinimumCost").hide("fast");
	}
}

function onChangeMinimumCost(){
	var minCost = document.getElementById('myMinimumCost').value;
	minCost = minCost.replace("^[.0-9]","");
	if(minCost.length==0)
		minCost = "0";
	document.getElementById('minimumCost').value = minCost;
	document.getElementById('myMinimumCost').value = minCost;
}

function updateDates() {
	document.getElementById('dateStart_day').value = document
			.getElementById('myDateStart_day').value;
	document.getElementById('dateStart_month').value = document
			.getElementById('myDateStart_month').value;
	document.getElementById('dateStart_year').value = document
			.getElementById('myDateStart_year').value;
	document.getElementById('dateStart_hour').value = document
			.getElementById('myDateStart_hour').value;
	document.getElementById('dateStart_minute').value = document
			.getElementById('myDateStart_minute').value;

	document.getElementById('dateEnd_day').value = document
			.getElementById('myDateEnd_day').value;
	document.getElementById('dateEnd_month').value = document
			.getElementById('myDateEnd_month').value;
	document.getElementById('dateEnd_year').value = document
			.getElementById('myDateEnd_year').value;
	document.getElementById('dateEnd_hour').value = document
			.getElementById('myDateEnd_hour').value;
	document.getElementById('dateEnd_minute').value = document
			.getElementById('myDateEnd_minute').value;

}

$(document).ready(
				function() {
					$("#myAditionalOptions").hide();
					$("#myOptionMinimumCost").hide();

					$("select[id ^= myDate]").addClass("fail_data");
					$("#datesAuction").hide();

					$("select[id ^= myDate]").change(function() {
										updateDates();
										if (!checkDates()) {
											$("select[id ^= myDate]").addClass(
													"fail_data");
											alert("Start date must be greater than actual date and end date must be greater than start date");
										} else {
											$("select[id ^= myDate]")
													.removeClass("fail_data");
										}
									});
				});