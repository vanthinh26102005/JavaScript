// create new blueprint "Supercar" based on blueprint "Car"
class Supercar extends Car {
    constructor() {
      super(...arguments) // calls "Car" constructor method
      super.getMileage() // call "Car" getMileage method
      // here we can extend class Car further
      // with any setup we want
    }
  
    topSpeed = '250 mph' // add new property for "Supercar" class
  
    race() { // new method for Supercar
      console.log('racing with top speed', this.topSpeed)
    }
  }
  
  const sup1 = new Supercar('Bugatti', 2020) // car mileage: 500000
  console.log(sup1.make) // Bugatti, parent's property
  console.log(sup1.year) // 2020, parent's property
  sup1.honk() // beep beep!, parent's method
  console.log(sup1.topSpeed) // 250 mph, Supercar's property
  sup1.race() // racing with top speed 250 mph, Supercar's method