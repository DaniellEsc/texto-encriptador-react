
export const encriptar = (input) => {
    let matrizCodigo = [['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat '],];
    let stringEncriptador = input.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptador.includes(matrizCodigo[i][0])) {
            stringEncriptador = stringEncriptador.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptador;
};


export const desencriptar = (input) => {
    let matrizCodigo = [['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat ']];
    let stringDesencriptado = input.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
    }
    return stringDesencriptado;
}