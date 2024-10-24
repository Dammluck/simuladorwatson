function atualizarGraficos(totalMensalRestaurante, totalMensalWatsonRestaurante, totalAnualRestaurante, totalAnualWatsonRestaurante) {
    var ctxMensal = document.getElementById('graficoMensal').getContext('2d');
    new Chart(ctxMensal, {
        type: 'bar',
        data: {
            labels: ['Plataformas Tradicionais', 'Watson'],
            datasets: [{
                label: 'Total Mensal (€)',
                data: [totalMensalRestaurante, totalMensalWatsonRestaurante],
                backgroundColor: ['#3498db', '#2ecc71'],
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                tooltip: {
                    bodyFont: {
                        size: 14 // Tamanho da letra do conteúdo do tooltip
                    },
                    titleFont: {
                        size: 16 // Tamanho da letra do título do tooltip
                    }
                }
            }
        }
    });

    var ctxAnual = document.getElementById('graficoAnual').getContext('2d');
    new Chart(ctxAnual, {
        type: 'bar',
        data: {
            labels: ['Plataformas Tradicionais', 'Watson'],
            datasets: [{
                label: 'Total Anual (€)',
                data: [totalAnualRestaurante, totalAnualWatsonRestaurante],
                backgroundColor: ['#e74c3c', '#f39c12'],
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                tooltip: {
                    bodyFont: {
                        size: 14 // Tamanho da letra do conteúdo do tooltip
                    },
                    titleFont: {
                        size: 16 // Tamanho da letra do título do tooltip
                    }
                }
            }
        }
    });
}