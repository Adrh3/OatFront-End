function CalcularJuros() {
    var valor = window.document.getElementById("valor").value;
    var juros = window.document.getElementById("juros").value;
    var tempo = window.document.getElementById("tempo").value;

    var valorInicial = Number(valor);
    var taxa = Number(juros);
    var periodo = Number(tempo);
    var calculojuros = valorInicial * taxa/100 * periodo;
    var total = valorInicial + calculojuros;

    var jurosFinal = window.document.getElementById("jurosFinal");
    jurosFinal.value = calculojuros;
    var resultadoFinal = window.document.getElementById("resultadoFinal");
    resultadoFinal.value = total;
}