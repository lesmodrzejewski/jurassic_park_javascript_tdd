const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let dinosaur1;
  let dinosaur2;
  let dinosaur3;
  let dinosaur4;

  beforeEach(function () {
    dinosaur1 = new Dinosaur('T-Rex', 'carnivore', 15000)
    dinosaur2 = new Dinosaur('Allosaurus', 'carnivore', 7000)
    dinosaur3 = new Dinosaur('Stegosaurus', 'herbivorous', 12000)
    dinosaur4 = new Dinosaur('Triceratops', 'herbivorous', 14000)
    park = new Park('Jurassic', 50, [dinosaur1, dinosaur2, dinosaur3]);
  })

  it('should have a name', function() {
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic')
  });

  it('should have a ticket price', function() {
    const actual = park.ticket_price;
    assert.strictEqual(actual, 50)
  });

  it('should have a collection of dinosaurs', function() {
    const actual = park.collection_of_dinosaurs;
    assert.deepStrictEqual(actual, [dinosaur1, dinosaur2, dinosaur3])
  });

  it('should be able to add a dinosaur to its collection', function() {
    park.add_dinosaur_to_collection(dinosaur4)
    const actual = park.collection_of_dinosaurs
    assert.deepStrictEqual(actual, [dinosaur1, dinosaur2, dinosaur3, dinosaur4])
  });

  it('should be able to remove a dinosaur from its collection', function() {
    park.remove_dinosaur_from_collection()
    const actual = park.collection_of_dinosaurs;
    assert.deepStrictEqual(actual, [dinosaur1, dinosaur2] )
  });

  xit('should be able to find the dinosaur that attracts the most visitors', function() {
    const actual = dinosaur1.find_dinosaur_that_attracts_most_visitors(park.collection_of_dinosaurs)
    assert.deepStrictEqual(actual, dinosaur1)
  });

  it('should be able to find dinosaurs by species', function() {
    const actual = dinosaur1.find_dinosaur_by_species(park.collection_of_dinosaurs, 'Stegosaurus')
    assert.deepStrictEqual(actual, [dinosaur3])

  });

  it('should be able to calculate the total number of visitors per day', function() {
    const actual = dinosaur1.calculate_visitors_per_day(park.collection_of_dinosaurs)
    assert.strictEqual(actual, 34000)
  });

  it('should be able to calculate the total number of visitors per year', function() {
    const actual = dinosaur1.calculate_total_number_of_visitors_per_year(park.collection_of_dinosaurs)
    assert.strictEqual(actual, 12410000)
  });

  it('should be able to calculate total revenue for one year', function() {
    const actual = dinosaur1.calculate_total_revenue_per_year(park.collection_of_dinosaurs);
    assert.strictEqual(actual, 620500000)
  });

});
