$(document).ready(function(){
	$.ajax({

		url:"https://data.covid19india.org/data.json",
		method:"GET",
		success : function(data){

			//Make Array of every Desird zvalues
			var states = [];
			var confirmed = [];
			var recovered = [];
			var deaths = [];
			var lastupdatedtime = [];


			//Statewise List
			//console.log(data.statewise);


			//Get the Values
			var state = data.statewise[29].state;
			var totalConfirmed = data.statewise[29].confirmed;
			var totalActive = data.statewise[29].active;
			var totalRecovered = data.statewise[29].recovered;
			var totalDeaths = data.statewise[29].deaths;
			var lastTimeUpdated = data.statewise[29].lastupdatedtime;

			//Print/ Attach to the  HTML
			$("#state").html(state);
			$("#confirmed").html(totalConfirmed);
			$("#active").html(totalActive);
			$("#recovered").html(totalRecovered);
			$("#deaths").html(totalDeaths);
			$("#state").html(state);
			$("#time").html(lastTimeUpdated);


			//Filter the total values from that API Entries

			$.each(data.statewise, function(id,obj){

				states.push(obj.state);
				confirmed.push(obj.confirmed);
				recovered.push(obj.recovered);
				deaths.push(obj.deaths);
				lastTimeUpdated.push(obj.lastupdatedtime);
			});

			// console.log(states);
			// console.log(confirmed);
			//  console.log(recovered);
			//  console.log(deaths);

			//Remove first Unnessesery Value (TOTAL)
			states.shift();			
			confirmed.shift();
			recovered.shift();
			deaths.shift();
			lastupdatedtime.shift();

		}

	});
});