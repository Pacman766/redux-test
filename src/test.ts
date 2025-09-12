interface Fish{
  swim():  void
}

interface Bird{
    fly(): void 
}

function isFish(animal: Fish | Bird): animal is Fish {
    return (animal as Fish).swim !== undefined;
}

function doJob(animal: Fish | Bird){
    if(isFish(animal)){
        animal.swim()
    } else{
        animal.fly();
    }
}

const fish: Fish = {
    swim: () => {
        console.log('swim')
    }
}

const bird: Bird = {
    fly: () => {
        console.log('fly')
    }
}

doJob(fish);
doJob(bird);