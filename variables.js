// SPRITES
let player = new sprite(45, 45, 'red', 0, 0, 0, 0);
// Tiles
let grass = new sprite(50, 50, 'green', 0, 0, 0, 0, 'images\\grass.png');
let water = new sprite(50, 50, 'blue', 0, 0, 0, 0, 'images\\water.png');
let vines = new sprite(50, 50, 'blue', 0, 0, 0, 0, 'images\\vine.png');

let sprites = [player];

// TILEMAP
let tilemap =
    [[2, 2, 2, 2, 2, 0, 0, 0, 0, 2, 0, 0, 0, 1, 0, 2, 0, 0, 0, 1, 0, 2, 1, 0, 0, 0, 0, 0, 1, 0],
    [0, 2, 2, 0, 1, 1, 1, 0, 2, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 2, 0, 0, 1, 1, 0, 0, 0, 1, 0],
    [0, 2, 2, 0, 1, 1, 1, 0, 2, 0, 0, 0, 0, 2, 2, 0, 1, 1, 1, 0, 2, 0, 0, 0, 0, 1, 0, 0, 1, 0],
    [2, 2, 2, 0, 0, 0, 1, 0, 2, 0, 0, 2, 2, 2, 2, 0, 0, 0, 0, 0, 2, 0, 0, 2, 0, 1, 0, 0, 1, 0],
    [0, 2, 2, 2, 0, 0, 0, 1, 0, 2, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 2, 0, 0, 0, 1, 0, 1, 0, 0],
    [0, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 0, 0, 1, 0, 1, 0, 0],
    [0, 2, 2, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0, 2, 2, 0, 1, 0, 1, 0, 2, 2, 0, 0, 0, 0, 1, 1, 0, 0],
    [2, 2, 2, 0, 0, 0, 0, 0, 2, 0, 0, 2, 2, 2, 2, 0, 0, 0, 1, 0, 2, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 2, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 2, 0, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 1, 0, 1, 0, 0, 0, 0],
    [0, 2, 2, 0, 1, 0, 0, 0, 2, 0, 0, 0, 0, 2, 2, 0, 1, 0, 0, 0, 2, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    [2, 2, 1, 1, 0, 0, 0, 0, 2, 0, 0, 2, 2, 2, 2, 0, 0, 0, 1, 0, 2, 0, 0, 2, 0, 0, 0, 1, 1, 1],
    [0, 1, 1, 1, 1, 0, 0, 1, 0, 2, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 0, 2, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0]];