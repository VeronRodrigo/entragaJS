function calcularYMostrarResultados() {
    const gastos = {
    alimentos: parseFloat(document.getElementById('alimentos').value),
    transporte: parseFloat(document.getElementById('transporte').value),
    entretenimiento: parseFloat(document.getElementById('entretenimiento').value),
    otros: parseFloat(document.getElementById('otros').value)
    };

    const valorLimite = parseFloat(document.getElementById('valorLimite').value);

    const totalGastos = calcularTotalGastos(gastos);
    const categoriaMasAlta = categoriaConGastoMasAlto(gastos);
    const gastosFiltrados = filtrarCategoriasPorValor(gastos, valorLimite);

    const resultadosDiv = document.getElementById('resultados');
    resultadosDiv.innerHTML = `
    <p>Total de gastos mensuales: ${totalGastos}</p>
    <p>Categoría con el gasto más alto: ${categoriaMasAlta}</p>
    <p>Categorías con gastos superiores a ${valorLimite}: ${JSON.stringify(gastosFiltrados)}</p>
`;


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
}
