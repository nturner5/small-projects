SELECT * FROM orders WHERE userid = ($1) AND completed = false;
