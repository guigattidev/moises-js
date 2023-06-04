$(document).ready(function () {
    // Seleciona todos os elementos HTML dentro do container
    var elements = $('#container').children();

    // Calcula a quantidade de elementos em cada coluna
    var numElements = elements.length;
    var numLeft = Math.ceil(numElements / 2);
    var numRight = Math.floor(numElements / 2);

    // Cria a div da primeira coluna com float: left e 50px de largura
    var leftDiv = $('<div></div>').css({
        'float': 'left',
        'width': '300px'
    });

    // Cria a div da segunda coluna com float: right e 50px de largura
    var rightDiv = $('<div></div>').css({
        'float': 'right',
        'width': '300px'
    });

    // Adiciona os elementos correspondentes a cada coluna
    elements.slice(0, numLeft).appendTo(leftDiv);
    elements.slice(numLeft).appendTo(rightDiv);

    // Adiciona as colunas ao container
    $('#container').append(leftDiv).append(rightDiv);
});