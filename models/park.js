const Park = function (name, ticket_price, collection_of_dinosaurs) {
    this.name = name,
    this.ticket_price = ticket_price,
    this.collection_of_dinosaurs = collection_of_dinosaurs


}

Park.prototype.add_dinosaur_to_collection = function(dinosaur) {
    this.collection_of_dinosaurs.push(dinosaur)
}

Park.prototype.remove_dinosaur_from_collection = function() {
    this.collection_of_dinosaurs.pop()
}




module.exports = Park