       const Dinosaur = function (species, diet, guestsAttractedPerDay) {
  this.species = species;
  this.diet = diet;
  this.guestsAttractedPerDay = guestsAttractedPerDay;
}


Dinosaur.prototype.find_dinosaur_that_attracts_most_visitors = function(dinosaurs){
  let dinosaur_that_attracts_most_guests = dinosaurs[0].guestsAttractedPerDay
  for (var i = 1; i < dinosaurs.length; i++) {
    if (dinosaurs[i].guestsAttractedPerDay > dinosaur_that_attracts_most_guests) {
      dinosaur_that_attracts_most_guests = dinosaurs[i].guestsAttractedPerDay
    }
  }
  return dinosaur_that_attracts_most_guests
}


// Dinosaur.prototype.find_dinosaur_by_species = function(dinosaurs, species){
//   let dinosaurs_of_particular_species = []
//   for(var dino in dinosaurs) {
//     if (dino.species === species) {
//       dinosaurs_of_particular_species.push(dino)
//     }
//   }
//   return dinosaurs_of_particular_species;
// }


// Park.prototype.calculate_visitors_per_day = function(dinosaurs){

// }

// Park.prototype.calculate_visitors_per_year = function() {}

// Park.prototype.calculate_total_revenue_per_year = function() {}

module.exports = Dinosaur;
