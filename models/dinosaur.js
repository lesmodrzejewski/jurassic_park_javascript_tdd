const Dinosaur = function (species, diet, guestsAttractedPerDay) {
  this.species = species;
  this.diet = diet;
  this.guestsAttractedPerDay = guestsAttractedPerDay;
}


Dinosaur.prototype.find_dinosaur_that_attracts_most_visitors = function(dinosaurs){
  let dino_who_attracts_most_visitors;
  let max_visits = 0

  for (var dino of dinosaurs){
    if(dino.guestsAttractedPerDay > max_visits) {
      max_visits = dino.guestsAttractedPerDay;
      dino_who_attracts_most_visitors = dino;
    }
  }
  return dino_who_attracts_most_visitors;
}


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

Dinosaur.prototype.remove_dinosaurs_of_particular_species = function(dinosaurs, species){
  let new_list_of_dinosaurs_of_particular_species = []
  for(var dino of dinosaurs) {
    if (dino.species !== species) {
      new_list_of_dinosaurs_of_particular_species.push(dino)
    }
  }
  return new_list_of_dinosaurs_of_particular_species;
}


module.exports = Dinosaur;
