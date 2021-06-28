$(function () {
    $("#btnPerCuadrado").on("click", calcPerCuadrado);
    $("#btnPerTriangulo").on("click", calcPerTriangulo);
    $("#btnPerCirculo").on("click", calcPerCirculo);
    $("#btnAreCuadrado").on("click", calcAreCuadrado);
    $("#btnAreTriangulo").on("click", calcAreTriangulo);
    $("#btnAreCirculo").on("click", calcAreCirculo);
    $("#btnVolCubo").on("click", calcVolCubo);
    $("#btnVolPiramide").on("click", calcVolPiramide);
    $("#btnVolEsfera").on("click", calcVolEsfera);
});

function esValido(valor) {
    let veredicto = true;

    if (valor === null || valor === undefined || valor === "" || valor <= 0) {
        veredicto = false;
    }

    return veredicto;
}

function calcPerCuadrado() {
    let lado = $("#inPeCuadrado").val();
    if (esValido(lado)) {
        lado = parseFloat(lado);
        let res = lado * 4;
        $("#resPeCuadrado").removeClass("collapse");
        $("#resPeCuadrado p").text("Perímetro: " + res);
    }
}

function calcPerTriangulo() {
    let lado1 = $("#inPe1Triangulo").val();
    let lado2 = $("#inPe2Triangulo").val();
    let lado3 = $("#inPe3Triangulo").val();
    if (esValido(lado1) && esValido(lado2) && esValido(lado3)) {
        lado1 = parseFloat(lado1);
        lado2 = parseFloat(lado2);
        lado3 = parseFloat(lado3);
        let res = lado1 + lado2 + lado3;
        $("#resPeTriangulo").removeClass("collapse");
        $("#resPeTriangulo p").text("Perímetro: " + res);
    }
}

function calcPerCirculo() {
    let diametro = $("#inPeCirculo").val();
    if (esValido(diametro)) {
        diametro = parseFloat(diametro);
        let res = diametro * Math.PI;
        $("#resPeCirculo").removeClass("collapse");
        $("#resPeCirculo p").text("Perímetro: " + res);
    }
}

function calcAreCuadrado() {
    let lado = $("#inArCuadrado").val();
    if (esValido(lado)) {
        lado = parseFloat(lado);
        let res = lado * lado;
        $("#resAreCuadrado").removeClass("collapse");
        $("#resAreCuadrado p").text("Área: " + res);
    }
}

function calcAreTriangulo() {
    let altura = $("#inArAlTriangulo").val();
    let base = $("#inArBaTriangulo").val();
    if (esValido(altura) && esValido(base)) {
        altura = parseFloat(altura);
        base = parseFloat(base);
        let res = (base * altura) / 2;
        $("#resAreTriangulo").removeClass("collapse");
        $("#resAreTriangulo p").text("Área: " + res);
    }
}

function calcAreCirculo() {
    let radio = $("#inArCirculo").val();
    if (esValido(radio)) {
        radio = parseFloat(radio);
        let res = Math.PI * (radio * radio);
        $("#resAreCirculo").removeClass("collapse");
        $("#resAreCirculo p").text("Área: " + res);
    }
}

function calcVolCubo() {
    let lado = $("#inVoCubo").val();
    if (esValido(lado)) {
        lado = parseFloat(lado);
        let res = lado * lado * lado;
        $("#resVolCubo").removeClass("collapse");
        $("#resVolCubo p").text("Volumen: " + res);
    }
}

function calcVolPiramide() {
    let altura = $("#inVoAlpriamide").val();
    let base = $("#inVoBapriamide").val();
    if (esValido(altura) && esValido(base)) {
        altura = parseFloat(altura);
        base = parseFloat(base);
        let res = (base * altura) / 3;
        $("#resVolPiramide").removeClass("collapse");
        $("#resVolPiramide p").text("Volumen: " + res);
    }
}

function calcVolEsfera() {
    let radio = $("#inVoEsfera").val();
    if (esValido(radio)) {
        radio = parseFloat(radio);
        let res = (4 * Math.PI * radio * radio * radio) / 3;
        $("#resVolEsfera").removeClass("collapse");
        $("#resVolEsfera p").text("Volumen: " + res);
    }
}

(function() {
    'use strict';
    window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
            form.classList.add('was-validated');
        }, false);
    });
}, false);
})();