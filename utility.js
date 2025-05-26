function getTilemapX(xPos, width){
    return Math.floor((xPos + width/2)/50);
}

function getTilemapY(yPos, height){
    return Math.floor((yPos + height/2)/50);
}

function tilemapCollision(yPos, xPos, width, height, tile){
    return tilemap[getTilemapY(yPos, height*2)][getTilemapX(xPos, width*2)] == tile 
    || tilemap[getTilemapY(yPos, 0)][getTilemapX(player.xPos, 0)] == tile
    || tilemap[getTilemapY(yPos, 0)][getTilemapX(player.xPos, width*2)] == tile
    || tilemap[getTilemapY(yPos, height*2)][getTilemapX(xPos, 0)] == tile;
}