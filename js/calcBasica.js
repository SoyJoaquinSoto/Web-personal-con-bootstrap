$(document).ready(function () {
    let valor1;
    let valor2;
    let STATE_INIT = 0;
    let STATE_CAPTURE = 2;
    let STATE_OPERATOR = 3;
    let STATE_CALCULATE = 4;

    let OPERATION_CLEAN = 0;
    let OPERATION_NUMBER = 1;
    let OPERATION_OPERATOR = 2;
    let OPERATION_EQUAL = 3;

    let OPERATOR_SUMA = 0;
    let OPERATOR_RESTA = 1;
    let OPERATOR_MULTIPLICACION = 2;
    let OPERATOR_DIVISION = 3;
    let OPERATOR_PORCENTAJE = 4;

    let estado;
    let operador;

    $(function () {
        estado = STATE_INIT;
        $("#btnLimpiar").on("click", reset);
        $("#btn0").on("click", capturandoNumero);
        $("#btn1").on("click", capturandoNumero);
        $("#btn2").on("click", capturandoNumero);
        $("#btn3").on("click", capturandoNumero);
        $("#btn4").on("click", capturandoNumero);
        $("#btn5").on("click", capturandoNumero);
        $("#btn6").on("click", capturandoNumero);
        $("#btn7").on("click", capturandoNumero);
        $("#btn8").on("click", capturandoNumero);
        $("#btn9").on("click", capturandoNumero);
        $("#btnPunto").on("click", capturandoNumero);
        // La lineas anteriores se podrian reducir si se le pone a los botones de numero una misma clas y
        // se usa el selector de clase
        // $(".btnNumero").on("click",capturandoNumero);
        $("#btnMultiplicacion").on("click", capturandoOperador);
        $("#btnDivision").on("click", capturandoOperador);
        $("#btnSuma").on("click", capturandoOperador);
        $("#btnResta").on("click", capturandoOperador);
        $("#btnPorcentaje").on("click", capturandoOperador);
        // La lineas anteriores se podrian reducir si se le pone a los botones de operador una misma clas y
        // se usa el selector de clase
        // $(".btnOperador").on("click",capturandoOperador);
        $("#btnIgual").on("click", solicitarResultado);
    });

    function limpiarDisplay() {
        $("#txtDisplay").val("");
    }

    function actualizarDisplay(valor) {
        if (estado == STATE_INIT || estado == STATE_CAPTURE) {
            if ($.isNumeric($("#txtDisplay").val() + valor)) {
                $("#txtDisplay").val($("#txtDisplay").val() + valor);
            }
        } else if (estado == STATE_OPERATOR) {
            valor1 = $("#txtDisplay").val();
            limpiarDisplay();
            $("#txtDisplay").val(valor);
        } else if (estado == STATE_CALCULATE) {
            valor2 = $("#txtDisplay").val();
            let resultado = calcular(operador, valor1, valor2);
            $("#txtDisplay").val(resultado);
        }
        console.log("Display: " + $("#txtDisplay").val());
        console.log("Estado: " + estado);
        console.log("=========================");
    }

    function capturandoNumero() {
        actualizarDisplay($(this).val());
        actualizarEstado(OPERATION_NUMBER);
    }

    function actualizarEstado(operacion) {
        if (operacion == OPERATION_CLEAN) {
            estado = STATE_INIT;
        } else if (estado == STATE_INIT && operacion == OPERATION_NUMBER || estado == STATE_OPERATOR && operacion == OPERATION_NUMBER) {
            estado = STATE_CAPTURE;
        } else if (estado == STATE_CAPTURE && operacion == OPERATION_OPERATOR || estado == STATE_CALCULATE && operacion == OPERATION_OPERATOR) {
            estado = STATE_OPERATOR;
        } else if (estado == STATE_CAPTURE && operacion == OPERATION_EQUAL) {
            estado = STATE_CALCULATE;
        }
    }

    function capturandoOperador() {
        actualizarEstado(OPERATION_OPERATOR);
        if ($(this).val() == "x") {
            operador = OPERATOR_MULTIPLICACION;
        } else if ($(this).val() == "+") {
            operador = OPERATOR_SUMA;
        } else if ($(this).val() == "-") {
            operador = OPERATOR_RESTA;
        } else if ($(this).val() == "/") {
            operador = OPERATOR_DIVISION;
        } else if ($(this).val() == "%") {
            operador = OPERATOR_PORCENTAJE;
        }
        console.log("Estado: " + estado + " - " + operador);
        console.log("=========================");
    }

    function reset() {
        limpiarDisplay();
        actualizarEstado(OPERATION_CLEAN);
    }

    function solicitarResultado() {
        actualizarEstado(OPERATION_EQUAL);
        actualizarDisplay();
    }

    function calcular(operador, valor1, valor2) {
        let resultado;
        valor1 = parseFloat(valor1);
        valor2 = parseFloat(valor2);
        if (operador == OPERATOR_MULTIPLICACION) {
            resultado = valor1 * valor2;
        } else if (operador == OPERATOR_SUMA) {
            resultado = valor1 + valor2;
        } else if (operador == OPERATOR_RESTA) {
            resultado = valor1 - valor2;
        } else if (operador == OPERATOR_DIVISION) {
            resultado = valor1 / valor2;
        } else if (operador == OPERATOR_PORCENTAJE) {
            resultado = (valor1 * valor2) / 100;
        }
        return resultado;
    }
});

