var orm = require("../config/orm.js");

var burger = {
    selectAll: function (cb) {
        orm.selectAll("burgers", function (data) {
            cb(data);
        });
    },

    insertOne: function (newBurger, cb) {
        orm.insertOne("burgers", ["burger_name", "devoured"], [newBurger, false], function (data) {
            cb(data);
        });
    },

    updateOne: function (id, cb) {
        orm.updateOne("burgers", ["devoured", "id"], [true, id], function (res) {
            cb(res);
        });
    }
} 


module.exports = burger;