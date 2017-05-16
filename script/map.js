
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
		document.getElementById('pacman').style.top=packman.y*28+"px";
		document.getElementById('pacman').style.left=packman.x*28+"px";
	}

	displayWorld();
	displayPacman();

	document.onkeydown = function(e){
		if(e.keyCode == 37 && world[packman.y][packman.x-1] != -1){ // move Left
			packman.x--;
		}
		else if(e.keyCode == 39 && world[packman.y][packman.x+1] != -1){ // move Up
			packman.x++;
		}
		else if(e.keyCode == 38 && world[packman.y-1][packman.x] != -1){ // move Right
			packman.y--;
		}
		else if(e.keyCode == 40 && world[packman.y+1][packman.x] != -1){ //move Down
			packman.y++;
		}
		if(world[packman.y][packman.x] == 1) {
			world[packman.y][packman.x] = 0;
		}
		displayWorld();
		displayPacman();
	}
});