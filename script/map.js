
$(document).ready(function(){
    var world = [[-1,-1,-1,-1,-1,-1],
				[-1, 1, 1, 1, 1,-1],
				[-1, 0, 0, 0, 0,-1],
				[-1, 0, 0, 0, 0,-1],
				[-1, 0, 0, 0, 0,-1],
				[-1,-1,-1,-1,-1,-1]];

    var packman={
        x:1,
        y:1,
    };

    var score = 0;

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
		$('#world').html(output);
	}

	function displayPacman(){
		var x = packman.x*28;
		var y = packman.y*28;
		$("#pacman").css("top",y+"px");
		$("#pacman").css("left",x+"px");
	}

	function displayScore() {
		$("#scoreboard").html("<h1>SCORE: "+score+"</h1>");
	}

	displayWorld();
	displayPacman();
	displayScore();

	document.onkeydown = function(e){
		if(e.keyCode == 37 && world[packman.y][packman.x-1] != -1){ // move Left
			packman.x--;
			$("#pacman").css("transform","rotate(0deg)");
		}
		else if(e.keyCode == 39 && world[packman.y][packman.x+1] != -1){ // move Up
			packman.x++;
			$("#pacman").css("transform","rotate(180deg)");
		}
		else if(e.keyCode == 38 && world[packman.y-1][packman.x] != -1){ // move Right
			packman.y--;
			$("#pacman").css("transform","rotate(90deg)");
		}
		else if(e.keyCode == 40 && world[packman.y+1][packman.x] != -1){ //move Down
			packman.y++;			
			$("#pacman").css("transform","rotate(270deg)");
		}
		if(world[packman.y][packman.x] == 1) {
			world[packman.y][packman.x] = 0;
			score += 10;
			displayWorld();
			displayScore();
		}
		displayPacman();
	}
});