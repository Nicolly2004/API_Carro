const db = require('../db');

db.query

module.exports = {
    buscarTodos: () => {
        return new Promise((aceito,rejeitado) => {
           db.query('SELECT * FROM Carros',(error,results) => {
            if(error) {
                rejeitado(error); 
                return;
            }
            aceito(results);
           })
        })
    },

    buscarUm: (codigo) => {
        return new Promise((aceito,rejeitado) => {
           db.query('SELECT * FROM Carros WHERE codigo = ?',[codigo],(error,results) => {
            if(error) {
                rejeitado(error); 
                return;
            }
            if(results.length > 0){
                aceito(results[0]);
            }
            else{
                aceito(false);
            }
         });
        });
    }

    
};