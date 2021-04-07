//initialize express router
let express = require('express');
let router = express.Router();

//set default API response
router.get('/', function(req, res){

    res.json({
        status: 'API Works',
        message: 'Welcome to First API Mongo'
    });
});



//import Dados Controller

var dadosController = require('./dadosController');

//Dados Routes

router.route('/dados')
    .get(dadosController.index)
    .post(dadosController.add);

router.route('/dados/:dados_id')
    .get(dadosController.view)
    .patch(dadosController.update)
    .put(dadosController.update)
    .delete(dadosController.delete);

//Export API routes
module.exports = router;