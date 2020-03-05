exports.up = function(knex) {
    return knex.schema.createTable("listing", listing => {
      listing.increments();
     
      listing.string("rooms", 128).notNullable();
  
      listing.timestamp("created_at").defaultTo(knex.fn.now());
  
      listing.integer("nights", 5).notNullable();
  
      listing.text("baths", 128).notNullable();
  
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
