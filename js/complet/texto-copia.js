export default function initCopiarTexto() {
    var textoCopiado = document.querySelector(".texto-criptografado p");
    var btnCopy = document.querySelector("#copiar");

    btnCopy.addEventListener("click", function () {
        navigator.clipboard.writeText(textoCopiado.innerText)
            .then(() => {
                alert("Texto copiado com sucesso!");
            })
            .catch(err => {
                console.error('Falha ao copiar o texto: ', err);
            });
    });
}
