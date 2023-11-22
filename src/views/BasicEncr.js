import React, { useEffect, useState } from 'react'
import { MdOutlineNoEncryption } from "react-icons/md";
import { CiUnlock } from "react-icons/ci";
import { desencriptar, encriptar } from '../utils/functions/EncriptarFunc';
import { FaRegCopy } from "react-icons/fa";
import '../styles/BasicEncr.css'
import { FaCheckDouble } from "react-icons/fa";
import { MdOutlineCleaningServices } from "react-icons/md";
import { desencriptarBinario, encriptarBinario } from '../utils/functions/BInaryFunc';


export default function BasicEncr() {

    const imagenTexArea = "https://blogger.googleusercontent.com/img/a/AVvXsEg46bs7pSDY1rJD2i028lWJahE20AUvmm9hCzoBjvIb-mhWcH4yu5T047hZT9LVyRAjTRkmE0MsEfBy7kWZML2ZCQsAiurnskjYBlrEDunv8TLP4z1wR7bHRfjNnxEm5_8PyTb10-9w0B-8XIyFdgfgqjZsX_O9UBlpl24NA3TTg78tHixcnnzBBXIOvVY"


    const [copiado, setCopiado] = useState(false);
    const [inputText, setInputText] = useState('');
    const [encryptedText, setEncryptedText] = useState('');
    const [opcionSeleccionada, setOpcionSeleccionada] = useState('')

    useEffect(() =>{
        setOpcionSeleccionada('basico');
    }, []);


    const handleSeleccion = (event) => {
        const valorSeleccionado = event.target.value;
        setOpcionSeleccionada(valorSeleccionado);
        btnLimpiar();
    };


    const seleccionEncriptar = () => {
        if (opcionSeleccionada === 'basico') {
            btnEncriptar();
        } else if (opcionSeleccionada === 'binario') {
            transformarBinary();
        }

    }

    const seleccionDesncriptar = () => {
        if (opcionSeleccionada === 'basico') {
            btnDesencriptar();
        } else if (opcionSeleccionada === 'binario') {
            binarioTexto();
        }
    }

    // codigo para enmcriptar desencriptar
    const btnEncriptar = () => {
        const encryptedText = encriptar(inputText);
        setEncryptedText(encryptedText);
    };

    const btnDesencriptar = () => {
        const encryptedText = desencriptar(inputText);
        setEncryptedText(encryptedText);
    }



    // codigo para transformar en binario 
    const transformarBinary = () => {
        const texto = encriptarBinario(inputText);
        setEncryptedText(texto);

    }

    const binarioTexto = () => {
        const binario = desencriptarBinario(inputText);
        setEncryptedText(binario);
    }


    // copiar texto 
    const btnCopiar = () => {
        navigator.clipboard.writeText(encryptedText);
        setCopiado(true);
        setTimeout(() => {
            setCopiado(false);
        }, 2000);
    };

    // limpiar campos texarea
    const btnLimpiar = () => {
        setEncryptedText('');
        setInputText('');
    }



    return (

        <div className='container-fluid'>

            <section className="py-1 text-center container">
                <div className="row py-lg-5">
                    <div className="col-lg-6 col-md-8 mx-auto">
                        <h1 className="fw-light">Conversión</h1>
                        <select className="form-select form-select-lg mb-3" value={opcionSeleccionada} onChange={handleSeleccion} aria-label=".form-select-lg example">
                            <option selected value=" " >Seleccione una opción</option>
                            <option value="basico" >Basico</option>
                            <option value="binario">Binario</option>
                        </select>
                    </div>
                </div>
            </section>


            <div className="container-fluid d-flex flex-column min-vh-100">
                <div className="row align-items-md-stretch mb-5">
                    <div className="col-md-6">
                        <div className='h-100 p-5 bg-light rounded-3"'>

                            <h4>Texto:</h4>

                            <textarea
                                className="h-90 w-100 p-5 bg-light rounded-3 text-area" style={{ border: "none" }}
                                placeholder="Ingrese el texto aquí"
                                value={inputText}
                                onChange={(e) => setInputText(e.target.value)}
                            ></textarea>

                            <div className='d-flex justify-content-center mt-3'>
                                <button
                                    className="btn-encriptar btn btn-outline-secondary"
                                    onClick={seleccionEncriptar}
                                    type="button" style={{ marginRight: "10px" }}> <MdOutlineNoEncryption /> Encriptar
                                </button>
                                <button className="btn btn-outline-secondary"
                                    onClick={seleccionDesncriptar}
                                    type="button"><CiUnlock /> Desencriptar
                                </button>

                            </div>
                        </div>

                    </div>

                    <div className="col-md-6">
                        <div className='h-100 p-5 bg-light rounded-3"'>

                            <h4>Encriptación</h4>
                            <textarea className="h-90 w-100 p-5 bg-light  rounded-3 mensaje"
                                style={{ border: "none", background: encryptedText ? 'white' : `url(${imagenTexArea})`, backgroundRepeat: 'no-repeat' }}

                                value={encryptedText}
                            ></textarea>
                            <div className='d-flex justify-content-center mt-3'>
                                <button className="btn btn-outline-secondary"
                                    onClick={btnCopiar}
                                    type="button"
                                    disabled={copiado}> {copiado ? (<><FaCheckDouble /> Copiado</>) : <><FaRegCopy /> Copiar</>}
                                </button>
                                <button className="btn btn-outline-secondary"
                                    onClick={btnLimpiar}
                                    type="button" style={{ marginLeft: "10px" }}><MdOutlineCleaningServices /> Limpiar
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>


    );
}

