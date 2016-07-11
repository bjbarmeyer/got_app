// Configuration file
var config = require('../config.js');

// Initialize the postgres database
var options = {};
var pgp = require('pg-promise')(options);
var db = pgp(config.postgres_url);

/* EXAMPLE DB QUERY
  req.db.any("select * from users")
    .then(function (data) {
        console.log(data);
    })
    .catch(function (error) {
       console.log(error);
    });
*/

initializeTables = function(){

	var query1 = "CREATE TABLE Houses(" + 
		"h_id SERIAL PRIMARY KEY," +
		"name char(50) NOT NULL," +
		"motto char(50) NOT NULL," +
		"location char(50) NOT NULL" +
		"banner char(20) NOT NULL," +
		");";

	var query2 = "CREATE TABLE People(" + 
		"p_id SERIAL PRIMARY KEY," +
	    "name char(50) NOT NULL," +
	    "house_id serial REFERENCES Houses(h_id) NOT NULL," +
	    ");";


	db.any(query1)
	    .then(function (data) {
	        console.log(data);
	    })
	    .catch(function (error) {
	       console.log(error);
	    });

  	db.any(query2)
	    .then(function (data) {
	        console.log(data);
	    })
	    .catch(function (error) {
	       console.log(error);
	    });

}


addHouse = function(n, m, l, b, done){
	var query = "INSERT INTO Houses" +
				 "(name, motto, location, banner) " + 
				 "VALUES ('"
				 	+ n + "', '"
				 	+ m + "', '" 
				 	+ l + "', '"
				 	+ b + "');";
	db.any(query)
    .then(function (data) {
    	console.log(data);
        done(true);
    })
    .catch(function (error) {
    	console.log(error);
    	done(false);
    });
}

getHouse = function(n, done){
  var query = "SELECT * FROM Houses " +
              "WHERE name = '"+ n +"';";

  db.any(query)
    .then(function (data) {
      console.log(data);
      if (data.length > 0)
        done(data[0], true);
      else
        done(null, false);
    })
    .catch(function (error) {
      console.log(error);
      done(null, false);
    });

}

addPerson = function(n, h, done){
	var query = "INSERT INTO People" +
				 "(name, h_id) " + 
				 "VALUES ('"
				 	+ n + "', '"
				 	+ h + "');";
	db.any(query)
    .then(function (data) {
    	console.log(data);
        done(true);
    })
    .catch(function (error) {
    	console.log(error);
    	done(false);
    });
}

getPerson = function(n, done){
  var query = "SELECT * FROM People " +
              "WHERE name = '"+ n +"';";

  db.any(query)
    .then(function (data) {
      console.log(data);
      if (data.length > 0)
        done(data[0], true);
      else
        done(null, false);
    })
    .catch(function (error) {
      console.log(error);
      done(null, false);
    });

}

getPeopleInHouse = function(h, done){
  var query = "SELECT * FROM People p, Houses h" +
              "WHERE h.h_id = p.house_id'" +
              "AND h.name = '" + h + "';";

  db.any(query)
    .then(function (data) {
      console.log(data);
      if (data.length > 0)
        done(data[0], true);
      else
        done(null, false);
    })
    .catch(function (error) {
      console.log(error);
      done(null, false);
    });

}


module.exports = {
	instance: db,
	initializeTables: initializeTables,
	addHouse: addHouse,
	getHouse: getHouse,
	addPerson: addPerson,
	getPerson: getPerson,
  	getPeopleInHouse: getPeopleInHouse

}