const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let dinosaur1;
  let dinosaur2;
  let dinosaurs;

  beforeEach(function () {
    park = new Park('Jurassic', 50, ['t-rex', 'triceratops', 'diplodok']);
    dinosaur1 = new Dinosaur('Velociraptor', 'carnivore', 50)
    dinosaur2 = new Dinosaur('Allosaurus', 'carnivore', 70)
    dinosaurs = [dinosaur1, dinosaur2]
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
    assert.deepStrictEqual(actual, ['t-rex', 'triceratops', 'diplodok'])
  });

  it('should be able to add a dinosaur to its collection', function() {
    park.add_dinosaur_to_collection('allosaurus')
    const actual = park.collection_of_dinosaurs
    assert.deepStrictEqual(actual, ['t-rex', 'triceratops', 'diplodok', 'allosaurus'])
  });

  it('should be able to remove a dinosaur from its collection', function() {
    park.remove_dinosaur_from_collection()
    const actual = park.collection_of_dinosaurs;
    assert.deepStrictEqual(actual, ['t-rex', 'triceratops'] )
  });

  it('should be able to find the dinosaur that attracts the most visitors', function() {
    const actual = dinosaur1.find_dinosaur_that_attracts_most_visitors(dinosaurs)
    assert.deepStrictEqual(actual, 70)


  });


  xit('should be able to calculate the total number of visitors per day');

  xit('should be able to calculate the total number of visitors per year');

  xit('should be able to calculate total revenue for one year');

});
