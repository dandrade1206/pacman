
$(document).ready(function(){
    var world = [[-1,-1,-1,-1,-1,-1],
				[-1, 1, 1, 1, 1,-1],
				[-1, 0, 0, 0, 0,-1],
				[-1, 0, 0, 0, 0,-1],
				[-1, 0, 0, 0, 0,-1],
				[-1,-1,-1,-1,-1,-1]];

    var packman={
        x:0,
        y:0,
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
		document.getElementById('pacman').style.top=packman.y*20+"px";
		document.getElementById('pacman').style.left=packman.x*20+"px";
	}

	displayWorld();
	displayPacman();

	document.onkeydown = function(e){
		if(e.keyCode == 37){
			packman.x--;
		}
		else if(e.keyCode == 39){
			packman.x++;
		}
		else if(e.keyCode == 38){
			packman.y--;
		}
		else if(e.keyCode == 40){
			packman.y++;
		}
	}
});