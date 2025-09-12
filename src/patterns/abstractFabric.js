const dog = {
  bark() {
    console.log(`Woof!`);
  }
};
const pet1 = {}
pet1.name = `Fido`;
pet1 = Object.create(dog);
pet1.bark(); // Woof!
console.log("Direct properties on pet1: ", Object.keys(pet1));
console.log("Properties on pet1's prototype: ", Object.keys(pet1.__proto__));
console.log('name', pet1.name);