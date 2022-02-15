       const Dinosaur = function (species, diet, guestsAttractedPerDay) {
  this.species = species;
  this.diet = diet;
  this.guestsAttractedPerDay = guestsAttractedPerDay;
}


// Dinosaur.prototype.find_dinosaur_that_attracts_most_visitors = function(dinosaurs){
//   let array_of_number_of_visitors = [];
// }


Dinosaur.prototype.find_dinosaur_by_species = function(dinosaurs, species){
  let dinosaurs_of_particular_species = []
  for(var dino of dinosaurs) {
    if (dino.species === species) {
      dinosaurs_of_particular_species.push(dino)
    }
  }
  return dinosaurs_of_particular_species;
}


Dinosaur.prototype.calculate_visitors_per_day = function(dinosaurs){
  let total = 0;

  for(var dino of dinosaurs){
    total += dino.guestsAttractedPerDay
  }

  return total;
}

Dinosaur.prototype.calculate_total_number_of_visitors_per_year = function(dinosaurs) {
  let total = 0

  for(var dino of dinosaurs) {
    total += dino.guestsAttractedPerDay
  }

  return total * 365
}

Dinosaur.prototype.calculate_total_revenue_per_year = function(dinosaurs) {
  let total = 0

  for(var dino of dinosaurs) {
    total += dino.guestsAttractedPerDay
  }

  return total * 365 * 50
}


module.exports = Dinosaur;
