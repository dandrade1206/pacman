var world = [[-1,-1,-1,-1,-1,-1],
		   [-1, 0, 0, 0, 0,-1],
		   [-1, 0, 0, 0, 0,-1],
		   [-1, 0, 0, 0, 0,-1],
		   [-1, 0, 0, 0, 0,-1],
		   [-1,-1,-1,-1,-1,-1]];

function displayWorld() {
	var output = "";
	for(var i=0; i < world.length; i++) {
		output += "<div class='row'>";
		for(var j = 0; j < world[i].length; j++) {
			if(world[i][j] == -1) { //wall
				output += "<div class='wall'></div>";
			} else if(world[i][j] == 1) { //dot
				output += "<div class='dot'></div>";
			} else if(world[i][j] == 0) { //empty
				output += "<div class='empty'></div>";
			}
		}
		output += "</div>";
	}
	$("#world").html(output);
}

displayWorld();

