var Bicicleta = function(id,color,modelo,ubicacion){
    this.id = id;
    this.color = color;
    this.modelo = modelo;
    this.ubicacion = ubicacion;
}

Bicicleta.prototype.toString = function(){
    return 'id: ' + this.id + " | color: " + this.color;
}

Bicicleta.add = function(aBici){
    Bicicleta.allBicis.push(aBici);
}

Bicicleta.findById = function(aBiciId){
    var aBici = Bicicleta.allBicis.find(bici => {
        return bici.id == aBiciId
    });
    if (aBici != undefined)
        return aBici;
    else
        throw new Error(`No existe una bicicleta con el id ${aBiciId}`);
}

Bicicleta.removeById = function(aBiciId){
    Bicicleta.findById(aBiciId);
    for(var i = 0; i<Bicicleta.allBicis.length; i++){
        if(Bicicleta.allBicis[i].id == aBiciId){
            Bicicleta.allBicis.splice(i,1);
            break;
        }
    }
}


Bicicleta.allBicis = [];
var a = new Bicicleta(1, 'rojo', 'urbana', [-34.892077,-56.1942859]);
var b = new Bicicleta(2, 'blanca', 'urbana', [-34.8764067,-56.2001068]);

Bicicleta.add(a);
Bicicleta.add(b);


module.exports = Bicicleta;