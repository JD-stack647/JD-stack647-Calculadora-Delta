function calcular() {
    let a = parseFloat(document.getElementById("a").value);
    let b = parseFloat(document.getElementById("b").value);
    let c = parseFloat(document.getElementById("c").value);

    let resultado = document.getElementById("resultado");
    let resolucao = document.getElementById("resolucao");

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        resultado.innerHTML = "Preencha todos os campos!";
        resolucao.innerHTML = "";
        return;
    }

    if (a === 0) {
        resultado.innerHTML = "A não pode ser 0!";
        resolucao.innerHTML = "";
        return;
    }

    let delta = (b * b) - (4 * a * c);

    let formulaDelta = `Δ = b² - 4ac<br>
                         Δ = (${b})² - 4·${a}·${c}<br>
                         Δ = ${delta}`;

    if (delta < 0) {
        resultado.innerHTML = "Delta: " + delta + "<br>Sem raízes reais";
        resolucao.innerHTML = `
            <h3>Resolução</h3>
            ${formulaDelta}<br>
            Não existem raízes reais.
        `;
    } else {
        let x1 = (-b + Math.sqrt(delta)) / (2 * a);
        let x2 = (-b - Math.sqrt(delta)) / (2 * a);

        resultado.innerHTML =
            "Delta: " + delta + "<br>" +
            "X1: " + x1.toFixed(2) + "<br>" +
            "X2: " + x2.toFixed(2);

        resolucao.innerHTML = `
            <h3>Resolução</h3>
            <b>Fórmula de Bhaskara:</b><br>
            x = (-b ± √Δ) / 2a<br><br>

            <b>Cálculo do Delta:</b><br>
            ${formulaDelta}<br><br>

            <b>Substituindo na fórmula:</b><br>
            x1 = (-(${b}) + √${delta}) / (2·${a})<br>
            x2 = (-(${b}) - √${delta}) / (2·${a})<br><br>

            <b>Resultado:</b><br>
            x1 = ${x1.toFixed(2)}<br>
            x2 = ${x2.toFixed(2)}
        `;
    }
}
