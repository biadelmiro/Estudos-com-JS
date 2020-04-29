//in

something in somethingItems

//ARRAYS
var arvores = new Array("Pau-brasil", "loureiro", "carvalho", "sicômo");

0 in arvores //retorna true
3 in arvores //retorna true
6 in arvores //false

"Pau-brasil" in arvores //false(deve se especificar o número do índice e não o valor)

"length" in arvores //retorna true pois length é um propriedade
//********************************************* */

//OBJETOS

//objetos prefefinidos

"PI" in Math; //true
var minhaString = new String('coral');
"length" in minhaString //true

//objetos personalizados
var meucarro ={
    marca: "Honda",
    modelo: "Accord",
    ano: 1998
};

"marca" in meucarro //true
"modelo" in meucarro //true

//instaceof verifica se o objeto é instancia de outro

objeto instanceof tipoObjeto

var dia = new Date(2019, 29, 04);
if (dia instanceof Date){
    //code here //true
}