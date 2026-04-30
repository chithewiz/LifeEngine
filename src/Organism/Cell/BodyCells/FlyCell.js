const BodyCell = require("./BodyCell");
const CellStates = require("../CellStates");

class FlyCell extends BodyCell {
    constructor(org, loc_col, loc_row) {
        // Pass the new 'wing' state to the parent BodyCell constructor
        super(CellStates.wing, org, loc_col, loc_row);
        
        // Example property: Wings might cost energy to maintain or use
        this.energy_drain = 1; 
    }

    initInherit(parent) {
        super.initInherit(parent);
        // Inherit the parent's specific traits
        this.energy_drain = parent.energy_drain;
    }
    
    initRandom() {
        super.initRandom();
        // Randomize traits for evolution/mutation
        this.energy_drain = 0.5 + (Math.random() * 1.5); 
    }

    initDefault() {
        super.initDefault();
        // Set standard baseline traits
        this.energy_drain = 1;
    }

    performFunction(env) {
        // This runs every tick for the cell. 
        // You could deduct energy here, or interact with specific "air" environment variables.
        
        // Example:
        // if (this.org.energy > this.energy_drain) {
        //     this.org.energy -= this.energy_drain;
        // }
    }
}

module.exports = FlyCell;