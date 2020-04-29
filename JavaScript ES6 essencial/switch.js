/**
 *  switch (expressão){
 *         case valor:
 *          break;
 * 
 *         case valor 2:
 *          break;
 * 
 *         default
 *              break;
 * }
 */
const fruit = 'uva';

switch (fruit){
    case 'banana':
        console.log('R$ 3,00 /kg');
        break;
    case 'mamão':
    case 'pera':
        console.log('R$ 2,00 /Kg');
        break;
    default:
        console.log('Produto não existe no estoque');
        break;
}