
export const encriptarBinario  = (texto) => {
    let binaryText = '';

    for (let i = 0; i < texto.length; i++) {
        const letraCodigo = texto.charCodeAt(i);
        const binario = letraCodigo.toString(2);
        binaryText += binario + ' ';   
    }
    return binaryText.trim();   
};

export const desencriptarBinario = (binario) =>{
    const binarios = binario.split(' ')
    let textoEncriptado = '';

    for(const binarioActual of binarios){
        const letraCodigo = parseInt(binarioActual, 2);
        const caracter = String.fromCharCode(letraCodigo)
        textoEncriptado += caracter;
    }

    return textoEncriptado;
}