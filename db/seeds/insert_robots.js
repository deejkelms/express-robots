exports.seed = function(knex, Promise) {
  var robotPromises = [];
  var robots = [
      {name:"c3po", description:"specializes in language translation"},
      {name:"r2d2", description:"holds a secret message"},
      {name:"bb8",  description:"rolls around"}
  ];

  // destroy all records in the table...
  var destruction_promise = knex('robots').del()
  robotPromises.push(destruction_promise);

  // add a new record for each robot...
  var insertion_promise = knex('robots').insert(
      robots, 'id' // auto-increment the id instead of setting it
  );
  robotPromises.push(insertion_promise);

  return Promise.all(robotPromises);
  
};
