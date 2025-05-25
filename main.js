let player = new sprite(50, 50, 'blue', 0, 0, 0, 0);
player.draw();

function mainLoop(){
    brush.clearRect(0, 0, canvas.width, canvas.height);
    
    // Reset the background
    brush.fillStyle = '#2b8963';
    brush.fillRect(0, 0, canvas.width, canvas.height);

    // Update sprites
    player.update();

    // Excecute the main loop
    window.requestAnimationFrame(mainLoop);
}

mainLoop();