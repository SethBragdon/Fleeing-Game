player.draw();

function mainLoop(){
    brush.clearRect(0, 0, canvas.width, canvas.height);
    
    // Reset the background
    brush.fillStyle = '#2b8963';
    brush.fillRect(0, 0, canvas.width, canvas.height);

    // Borders
    if(player.xPos + player.xSpeed < 0){
        player.xPos = 0;
        player.ySpeed = 0;
    } else if (player.xPos + player.width + player.xSpeed > canvas.width){
        player.xPos = canvas.width - player.width;
    }

    if(player.yPos + player.ySpeed < 0){
        player.yPos = 0;
        player.ySpeed = 0;
    } else if (player.yPos + player.height + player.ySpeed> canvas.height){
        player.yPos = canvas.height - player.height;
    }

    // Check for player w/ water tile collision
    if(tilemapCollision(player.yPos, player.xPos + player.xSpeed, player.width, player.height, 1)){
        player.xPos -= player.xSpeed;
        player.xSpeed = 0;
    }
    if(tilemapCollision(player.yPos + player.ySpeed, player.xPos, player.width, player.height, 1)){
        player.yPos -= player.ySpeed;
        player.ySpeed = 0;
    }

    // Check for player w/ vine tile collision
    if(tilemapCollision(player.yPos, player.xPos, player.width, player.height, 2)){
        player.xSpeed *= 0.7;
        player.ySpeed *= 0.7;
    }

    // Update tilemap
    for(let j = 0; j < tilemap.length; j++){
        for(let i = 0; i < tilemap[j].length; i++){
            switch(tilemap[j][i]){
                case 0:
                    grass.xPos = 50 * i;
                    grass.yPos = 50 * j;
                    grass.draw();
                    break;
                case 1:
                    water.xPos = 50 * i;
                    water.yPos = 50 * j;
                    water.draw();
                    break;
                case 2:
                    vines.xPos = 50 * i;
                    vines.yPos = 50 * j;
                    vines.draw();
                    break;
            }
        }
    }

    // Update sprites
    for(let i = 0; i < sprites.length; i++){
        sprites[i].update();
    }

    // Excecute the main loop
    window.requestAnimationFrame(mainLoop);
}

mainLoop();

window.addEventListener('keydown', (event) => {
    switch(event.key){
        case 'ArrowUp':
            player.ySpeed = -3;
            break;
    case 'ArrowDown':
            player.ySpeed = 3;
            break;
    case 'ArrowRight':
            player.xSpeed = 3;
            break;
    case 'ArrowLeft':
            player.xSpeed = -3;
            break;
    case 'l':
        alert(getTilemapX(player.xPos, player.width) + ', ' + getTilemapY(player.yPos, player.height));
        //alerttilemap[getTilemapX(player.xPos, player.width)][getTilemapY(player.yPos  + player.ySpeed, player.height)
        break;
    }
});

window.addEventListener('keyup', (event) => {
    switch(event.key){
        case 'ArrowUp':
            player.ySpeed = 0;
            break;
    case 'ArrowDown':
            player.ySpeed = 0;
            break;
    case 'ArrowRight':
            player.xSpeed = 0;
            break;
    case 'ArrowLeft':
            player.xSpeed = 0;
            break;
    }
});