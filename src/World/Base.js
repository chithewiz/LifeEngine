class Base{
    constructor(){
        this.islands = [
            new GridMap(0),
            new GridMap(1),
            new GridMap(2)
        ]
    }

    update() {
        for(let island of this.islands) {
            island.update();
        }
    }

    render() {
        for(let island of this.islands) {
            island.render();
        }
    }
}