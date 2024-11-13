const gridSize = 5;
let robotX = 2;
let robotY = 2;
let robotDirection = 0; // 0: Up, 1: Right, 2: Down, 3: Left

function createGrid() {
    const grid = document.getElementById('grid');
    for (let i = 0; i < gridSize * gridSize; i++) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        cell.id = `cell-${Math.floor(i / gridSize)}-${i % gridSize}`;
        grid.appendChild(cell);
    }
}

function updateRobotPosition() {

    document.querySelectorAll('.cell').forEach(cell => {
        cell.innerHTML = '';
    });


    const cell = document.getElementById(`cell-${robotY}-${robotX}`);
    const robot = document.createElement('div');
    robot.className = 'robot';
    robot.innerHTML = '🤖';
    robot.style.transform = `rotate(${robotDirection * 90}deg)`;
    cell.appendChild(robot);
}

function moveForward() {
    let nextX = robotX;
    let nextY = robotY;

    switch (robotDirection) {
        case 0: // Up
            nextY--;
            break;
        case 1: // Right
            nextX++;
            break;
        case 2: // Down
            nextY++;
            break;
        case 3: // Left
            nextX--;
            break;
    }

    // Check boundaries
    if (nextX >= 0 && nextX < gridSize &&
        nextY >= 0 && nextY < gridSize) {
        robotX = nextX;
        robotY = nextY;
        updateRobotPosition();
    }
}

function rotateLeft() {
    robotDirection = (robotDirection - 1 + 4) % 4;
    updateRobotPosition();
}

function rotateRight() {
    robotDirection = (robotDirection + 1) % 4;
    updateRobotPosition();
}

createGrid();
updateRobotPosition(); 