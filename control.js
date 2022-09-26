class Control {
    constructor(type) {
        this.forward = false;
        this.backward = false;
        this.left = false;
        this.right = false;
        switch (type) {
            case "mainCar":
                this.#addKeyboardListner();
                break;
            default:
                this.forward = true;
                break;
        }
    }

    #addKeyboardListner() {
        document.onkeydown = (event) => {
            switch (event.key) {
                case "ArrowLeft":
                    this.left = true;
                    break;
                case "ArrowRight":
                    this.right = true;
                    break;
                case "ArrowDown":
                    this.backward = true;
                    break;
                case "ArrowUp":
                    this.forward = true;
                    break;
            }
        }

        document.onkeyup = (event) => {
            switch (event.key) {
                case "ArrowLeft":
                    this.left = false;
                    break;
                case "ArrowRight":
                    this.right = false;
                    break;
                case "ArrowDown":
                    this.backward = false;
                    break;
                case "ArrowUp":
                    this.forward = false;
                    break;
            }
        }
    }

}