const Color = require('..models').Color;

module.exports ={
    create(req,res){
        return Color
        .create([
            name:req.body.color,
        ])
        .then(color => res.status(201).send(color))
        .catch(error => res.status(400).send(error));
    }, 
}