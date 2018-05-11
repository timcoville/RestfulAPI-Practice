const cont = require('./../controllers/1955');

module.exports = function(app){
    app.get('/', cont.index);
    app.get('/new/:name/', cont.create);
    app.get('/:name', cont.record);
    app.get('/delete/:name', cont.delete);
}