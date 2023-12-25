const gastos = {
    alimentos: 300,
    transporte: 150,
    entretenimiento: 100,
    otros: 50
};


function calcularTotalGastos(gastos) {
    const valoresGastos = Object.values(gastos);
    
    const totalGastos = valoresGastos.reduce((total, gasto) => total + gasto, 0);

    return totalGastos;
}


function categoriaConGastoMasAlto(gastos) {

    const entradasGastos = Object.entries(gastos);


    const categoriaMasAlta = entradasGastos.reduce((categoriaActual, categoria) => {
    return categoria[1] > categoriaActual[1] ? categoria : categoriaActual;
    });

    return categoriaMasAlta[0];
}


function filtrarCategoriasPorValor(gastos, valorLimite) {

    const entradasGastos = Object.entries(gastos);


    const categoriasFiltradas = entradasGastos.filter(categoria => categoria[1] > valorLimite);


    const gastosFiltrados = categoriasFiltradas.reduce((resultado, categoria) => {
    resultado[categoria[0]] = categoria[1];
    return resultado;
    }, {});

    return gastosFiltrados;
}

const totalGastos = calcularTotalGastos(gastos);
console.log('Total de gastos mensuales:', totalGastos);

const categoriaMasAlta = categoriaConGastoMasAlto(gastos);
console.log('Categoría con el gasto más alto:', categoriaMasAlta);

const valorLimite = 120;
const gastosFiltrados = filtrarCategoriasPorValor(gastos, valorLimite);
console.log(`Categorías con gastos superiores a ${valorLimite}:`, gastosFiltrados);
