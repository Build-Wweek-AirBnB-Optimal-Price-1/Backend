exports.up = function(knex) {
    return knex.schema.createTable("listing", listing => {
      listing.increments();
     
      // listing.string("title", 128).notNullable();
  
      listing.timestamp("created_at").defaultTo(knex.fn.now());

      listing.integer("rooms", 5).notNullable();
      listing.integer("nights", 5).notNullable();
      listing.integer("baths", 5).notNullable();
      // listing.integer("accomodates", 5).notNullable();
      // listing.integer("instant_bookable", 5).notNullable();
      // listing.integer("maximum_nights", 5).notNullable();
      // listing.integer("minimum_nights", 5).notNullable();
  
      // listing.string("label", "value",  128).notNullable();

      // listing.integer("price", 5).notNullable();
  
      listing
        .integer("users_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists("listing");
  };
