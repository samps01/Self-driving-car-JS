const mainCanvas = document.querySelector("#mainCanvas");
mainCanvas.width = 300;

const ctx = mainCanvas.getContext("2d");
const road = new Road(mainCanvas.width / 2, mainCanvas.width * 0.90)
const car = new Car(road.getLaneCenter(1), 500, 30, 60, "green", 15, "mainCar");

const traffic = [
    new Car(road.getLaneCenter(1), 300, 30, 60, "blue", 2),
    new Car(road.getLaneCenter(2), 700, 30, 60, "white", 3),
    new Car(road.getLaneCenter(0), 10, 30, 60, "yellow", 4),
    new Car(road.getLaneCenter(0), 600, 30, 60, "golden", 12)
]


animate();

function animate() {
    for (let i = 0; i < traffic.length; i++) {
        traffic[i].update(road.borders, []);
    }
    car.update(road.borders, traffic);
    mainCanvas.height = window.innerHeight;

    ctx.save();
    ctx.translate(0, -car.y + mainCanvas.height * 0.7);
    road.draw(ctx);

    traffic.forEach(dummyCar => dummyCar.draw(ctx))
    car.draw(ctx);

    ctx.restore();
    requestAnimationFrame(animate)
}