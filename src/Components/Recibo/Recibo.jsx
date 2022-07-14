import React from "react";
import {abrirImpressao} from "../../Service/ReciboService";

class Recibo extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log("impressao");
        return (
            <div id="reciboPronto" className="recibo-pronto">
                <button id="impressao" onClick={() => abrirImpressao()} style={{ backgroundColor: "#ffffff" }}>
                    <div className="row" style={{ margin: "2px" }}>
                        <div style={{ backgroundColor: "#ffffff", padding: "1px" }}>
                            <i style={{ fontSize: "36px", color: "#3273dc" }}></i>
                        </div>
                        <div style={{ flex: "60%" }}>
                            <span style={{ fontSize: "xx-large", color: "#3273dc" }}>Imprimir</span>
                        </div>
                    </div>
                </button>
                <br /> <br />

                <div id="reciboImprimir">
                    <div id="reciboSalario" style={{
                        border: "2px solid #000000", padding: "20px",
                        borderRadius: "8px;"
                    }}>
                        <h3 style={{ textAlign: "center" }}>
                            Recibo de Salário
                        </h3>
                        <div className="row">
                            <div style={{ flex: "80%" }}></div>
                            <div id="valorSalario"
                                style={{ border: "solid 1px #000000", margin: "10px", justifyContent: "flex-end" }}></div>
                        </div>

                        <p id="paragrafoNome">
                            teste de paragrafo dentro da
                        </p>
                        <p id="paragrafoTitulo"></p>
                        <p id="paragrafoValor" style={{ border: "#000000 solid 1px;" }}></p>
                        <p id="paragrafoTexto"></p>
                        <p id="paragrafoChavePix"></p>
                        <p id="paragrafoCidadeData" style={{ textAlign: "right;" }}></p>
                        <br /><br />
                        <span id="assinatura"
                            style={{ borderTop: "1px solid #999", margin: "auto", display: "block", width: "30%", textAlign: "center" }}></span>
                    </div>
                    <br />

                    <div id="reciboSalario2" style={{
                        border: "2px solid #000000", padding: "20px",
                        borderRadius: "8px", display: "none"
                    }}>
                        <h3 style={{ textAlign: "center" }}>
                            Recibo de Salário
                        </h3>
                        <div className="row">
                            <div style={{ flex: "80%" }}></div>
                            <div id="valorSalario2"
                                style={{ border: "solid 1px #000000", margin: "10px", justifyContent: "flex-end" }}></div>
                        </div>

                        <p id="paragrafoNome2"></p>
                        <p id="paragrafoTitulo2"></p>
                        <p id="paragrafoValor2" style={{ border: "#000000 solid 1px" }}></p>
                        <p id="paragrafoTexto2"></p>
                        <p id="paragrafoChavePix2"></p>
                        <p id="paragrafoCidadeData2" style={{ textAlign: "right" }}></p>
                        <br /><br />
                        <span id="assinatura2"
                            style={{ borderTop: "1px solid #999", margin: "auto", display: "block", width: "30%", textalign: "center" }}></span>
                    </div>
                    <br />
                </div>


                <button id="impressao" onClick={() => abrirImpressao()} style={{ backgroundColor: "#ffffff" }}>
                    <div className="row" style={{ margin: "2px" }}>
                        <div style={{ backgroundColor: "#ffffff", padding: "1px" }}>
                            <i style={{ fontSize: "36px", color: "#3273dc" }}></i>
                        </div>
                        <div style={{ flex: "60%" }}>
                            <span style={{ fontSize: "xx-large", color: "#3273dc" }}>Imprimir</span>
                        </div>
                    </div>
                </button>

            </div>
        );
    }
}
export default Recibo;