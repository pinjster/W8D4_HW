import Container from "./Container";

class LeftLeaningContainer extends Container{

    constructor() {
        super()
        this.borderRadius = "10% 25% 10% 25%";
        this.backgroundColor = "grey";
    }
}

class RightLeaningContainer extends Container{

    constructor() {
        super()
        this.borderRadius = "25% 10%";
        this.backgroundColor = "red";
    }
}

class CircleContainer extends Container{

    constructor() {
        super()
        this.borderRadius = "50%"
        this.backgroundColor = "green"
    }
}

export {
    LeftLeaningContainer,
    RightLeaningContainer,
    CircleContainer,
}