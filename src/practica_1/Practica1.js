// TODO 0 - Instalar el proyecto con "npm install"

// TODO 1 - Importar productos
const products = {}//import("./products.json");

const filterSmartphones = (products) => {
    //products.filter(products.category === "smartphone")

	//return products;
}
const returnProductName = (products) => {
    //TODO 3.1 - Usar template literals
	return [];
}
const calcTotalPrice = (products) => {
	return 0;
}
const calcQuantity = (products) => {
	return 0;
}
export default function Practica1 () {
    // TODO 2 - Filtrar productos donde sean "category" igual a "smartphone"
	let smartphones = filterSmartphones();
    //console.log(filterSmartphones())
    // TODO 3 - Armar un arreglo de nombres de productos con "marca" y "nombre". 
    let nameArray = returnProductName(smartphones);
    // TODO 4 - Calcular el precio total de los teléfonos filtrados
    let total = calcTotalPrice(smartphones);
    // TODO 5 - Calcular la cantidad de productos
    let quantity = calcQuantity(smartphones);
    console.log(nameArray);
    if (!Array.isArray(nameArray)) {
        nameArray = [];
    }
    return (
        <div>
            <p>Productos de smartphones son { quantity } por un total de $ { total } </p>
            <ul>
                { nameArray.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
} 