const Environment = require('./Environment'); // Or './WorldEnvironment'
const GridMap = require('../Grid/GridMap');
const CellStates = require('../Organism/Cell/CellStates');

class Base extends Environment {
    constructor(canvasId) {
        // 'super' calls the constructor of the original Environment
        super(canvasId); 

        this.cellSize = 10;
        this.setupDimensions();

        // Initialize your giant grid
        this.worldGrid = new GridMap(this.cols, this.rows, this.cellSize);

        // Seed your islands
        this.initIslands();
    }

    setupDimensions() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.cols = Math.floor(this.canvas.width / this.cellSize);
        this.rows = Math.floor(this.canvas.height / this.cellSize);
    }

    initIslands() {
        const islandConfigs = [
            { xPct: 0.5, yPct: 0.5, size: 40 },
            { xPct: 0.85, yPct: 0.15, size: 40},
            { xPct: 0.15, yPct: 0.85, size: 40}
        ];

        islandConfigs.forEach(config => {
            const col = Math.floor(this.cols * config.xPct);
            const row = Math.floor(this.rows * config.yPct);
            // Logic to spawn initial organisms would go here
            this.spawnIsland(col, row, config.size);
        });
    }

    // Keep your spawnIsland logic from before...

    update() {
        // 1. Run the original life-logic (the code you pasted)
        super.update(); 

        // 2. If you have custom grid logic, add it here
        // (e.g., checking for food growth on the islands)
    }

    render() {
        // Use the rendering logic we wrote earlier to draw the islands
        const ctx = this.ctx;
        ctx.fillStyle = '#4a6b8c'; 
        ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        // Standard render logic
        for (let c = 0; c < this.worldGrid.cols; c++) {
            for (let r = 0; r < this.worldGrid.rows; r++) {
                const cell = this.worldGrid.cellAt(c, r);
                if (cell && cell.state !== CellStates.empty) {
                    ctx.fillStyle = this.getColor(cell.state);
                    ctx.fillRect(cell.x, cell.y, this.cellSize - 1, this.cellSize - 1);
                }
            }
        }
    }
}

module.exports = Base;