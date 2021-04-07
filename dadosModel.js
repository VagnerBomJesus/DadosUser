var mongoose = require('mongoose');

//schema

var dadosSchema = mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    telefone: {
        type: String,
        required: true
    },
    morada: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

// Exportar Dados Model
var Dados = module.exports = mongoose.model('dados', dadosSchema);

module.exports.get = function (callback, limit) {
    Dados.find(callback).limit(limit);
}

