function qualestacao() {
    let estacao = parseInt(document.getElementById("selcioneAestacao").value);
    let texto;
    switch (estacao) {
        case 1:
            texto = "outono";
            document.getElementById("resposta").innerText = texto;
            break;

        case 2:
            texto = "inverno";
            document.getElementById("resposta").innerText = texto;
            break;

        case 3:
            texto = "primavera";
            document.getElementById("resposta").innerText = texto;
            break;

        case 4:
            texto = "verao";
            document.getElementById("resposta").innerText = texto;
            break;

        default:
            texto = "invalido";
            document.getElementById("resposta").innerText = texto;

    }
}