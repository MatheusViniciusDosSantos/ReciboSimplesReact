import React from "react";
import "./FormularioRecibo.css"
import Input from "../Input/Input";
import {gerarRecibo} from "../../Service/ReciboController";
import {abrirImpressao} from "../../Service/ReciboController";
import {clickFormaPagamento} from "../../Service/ReciboController";

class FormularioRecibo extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="borda-tudo">

                <h1>
                    Recibo Simples
                </h1>
                <form>

                    <Input type='number' id='valorRecibo' valor='Valor:'
                           onChange={(e) => this.setState({...this.state, valorRecibo: e})}/>

                    <br/><br/>

                    <Input type='text' id='nomePagador' valor='Nome Pagador:'
                           onChange={(e) => this.setState({...this.state, nomePagador: e})}/>

                    <br/><br/>

                    <Input type='text' id='cpfCnpj' valor='CPF ou CNPJ (opicional):'
                           onChange={(e) => this.setState({...this.state, cpfCnpj: e})}/>

                    <br/><br/>

                    <Input type='text' id='referenteA' valor='Referente à:'
                           onChange={(e) => this.setState({...this.state, referenteA: e})}/>

                    <br/><br/>

                    <div className={"row"}>
                        <label className={"column"}>
                            Cidade:<br/>
                            <input type="text" id="cidade" onChange={(e) => this.setState({...this.state, cidade: e})}/>
                        </label>
                        <label className={"column"}>
                            Data:<br/>
                            <input type="date" id="data"  onChange={(e) => this.setState({...this.state, data: e})}/>
                        </label>
                    </div>

                    <br/><br/>

                    <Input type='text' id='nomeEmisor' valor='Nome Emisor:'
                           onChange={(e) => this.setState({...this.state, nomeEmisor: e})}/>

                    <br/><br/>

                    <h5>Forma de Pagamento: </h5>
                    <div className="row">
                        <div style={{flex: "20%"}}>
                            <h5>Dinheiro </h5>
                            <input id="dinheiro" type="radio" className="pagamento" onClick={() => clickFormaPagamento()}
                                   checked="checked"/>
                            <br/>
                        </div>
                        <div style={{flex: "20%"}}>
                            <h5>Pix </h5>
                            <input id="pix" type="radio" className="pagamento" onClick={() => clickFormaPagamento()}/>
                            <br/>
                        </div>
                        <div style={{flex: "20%"}}>
                            <h5>Cheque </h5>
                            <input id="cheque" type="radio" className="pagamento" onClick={() => clickFormaPagamento()}/>
                            <br/>
                        </div>
                        <div style={{flex: "20%"}}>
                            <h5>Transferência/Depósito</h5>
                            <input id="transferenciaDeposito" type="radio" className="pagamento"
                                   onClick={() => clickFormaPagamento()}/>
                            <br/>
                        </div>
                    </div>
                    <br/>
                    <div id="dinheiroDiv" style={{display: "none"}}></div>
                    <div id="pixDiv" style={{display: "none"}}>
                        <h5>Chave: </h5>
                        <input id="chavePix" type="text" className="estiloBordaBotoes" style={{width: "10%;"}}/>
                        <br/>
                    </div>
                    <div id="transferenciaDepositoDiv" style={{display: "none"}}>
                        <h5>Conta: </h5>
                        <input id="conta" type="text" className="estiloBordaBotoes largura-dez-porcento"/>
                        <br/>
                        <h5>Agência: </h5>
                        <input id="agencia" type="text" className="estiloBordaBotoes largura-dez-porcento"/>
                        <br/>
                    </div>
                    <div id="chequeDiv" style={{display: "none"}}>
                        <h5>Conta: </h5>
                        <input id="conta" type="text" className="estiloBordaBotoes largura-dez-porcento"/>
                        <br/>
                        <h5>Agência: </h5>
                        <input id="agencia" type="text" className="estiloBordaBotoes largura-dez-porcento"/>
                        <br/>
                    </div>
                    <br/><br/>

                    <h5>Duas vias: </h5>
                    <input id="vias" type="checkbox"/>
                    <br/><br/>

                    <button type="submit"
                            style={{backgroundColor: "#3273dc", border: "1px solid transparent", borderRadius: "8px"}}
                            onClick={() => gerarRecibo()}>
                        <div className={"row"} style={{margin: "2px"}}>
                            <div style={{backgroundColor: "#ffffff", padding: "1px"}}>
                                <i style={{fontSize: "36px", color: "#3273dc"}}></i>
                            </div>
                            <div style={{flex: "60%"}}>
                                <span style={{fontSize: "xx-large", color: "#ffffff"}}>Gerar Recibo</span>
                            </div>
                        </div>
                    </button>

                </form>

                <br/><br/><br/>

                <div id="reciboPronto" className="recibo-pronto">
                    <button id="impressao" onClick={() => abrirImpressao()} style={{backgroundColor: "#ffffff"}}>
                        <div className="row" style={{margin: "2px"}}>
                            <div style={{backgroundColor: "#ffffff", padding: "1px"}}>
                                <i style={{fontSize:"36px", color: "#3273dc"}}></i>
                            </div>
                            <div style={{flex: "60%"}}>
                                <span style={{fontSize: "xx-large", color: "#3273dc"}}>Imprimir</span>
                            </div>
                        </div>
                    </button>
                    <br/> <br/>

                    <div id="reciboImprimir">
                        <div id="reciboSalario" style={{border: "2px solid #000000", padding: "20px",
                            borderRadius: "8px;"}}>
                            <h3 style={{textAlign: "center"}}>
                                Recibo de Salário
                            </h3>
                            <div className="row">
                                <div style={{flex: "80%"}}></div>
                                <div id="valorSalario"
                                     style={{border: "solid 1px #000000", margin: "10px", justifyContent: "flex-end"}}></div>
                            </div>

                            <p id="paragrafoNome">
                                teste de paragrafo dentro da
                            </p>
                            <p id="paragrafoTitulo"></p>
                            <p id="paragrafoValor" style={{border: "#000000 solid 1px;"}}></p>
                            <p id="paragrafoTexto"></p>
                            <p id="paragrafoChavePix"></p>
                            <p id="paragrafoCidadeData" style={{textAlign: "right;"}}></p>
                            <br/><br/>
                            <span id="assinatura"
                                  style={{borderTop: "1px solid #999", margin: "auto", display: "block", width: "30%", textAlign: "center"}}></span>
                        </div>
                        <br/>

                        <div id="reciboSalario2" style={{border: "2px solid #000000", padding: "20px",
                        borderRadius: "8px", display: "none"}}>
                            <h3 style={{textAlign: "center"}}>
                                Recibo de Salário
                            </h3>
                            <div className="row">
                                <div style={{flex: "80%"}}></div>
                                <div id="valorSalario2"
                                     style={{border: "solid 1px #000000", margin: "10px", justifyContent: "flex-end"}}></div>
                            </div>

                            <p id="paragrafoNome2"></p>
                            <p id="paragrafoTitulo2"></p>
                            <p id="paragrafoValor2" style={{border: "#000000 solid 1px"}}></p>
                            <p id="paragrafoTexto2"></p>
                            <p id="paragrafoChavePix2"></p>
                            <p id="paragrafoCidadeData2" style={{textAlign: "right"}}></p>
                            <br/><br/>
                            <span id="assinatura2"
                                  style={{borderTop: "1px solid #999", margin: "auto", display: "block", width: "30%", textalign: "center"}}></span>
                        </div>
                        <br/>
                    </div>


                    <button id="impressao" onClick={() => abrirImpressao()} style={{backgroundColor: "#ffffff"}}>
                        <div className="row" style={{margin: "2px"}}>
                            <div style={{backgroundColor: "#ffffff", padding: "1px"}}>
                                <i style={{fontSize: "36px", color: "#3273dc"}}></i>
                            </div>
                            <div style={{flex: "60%"}}>
                                <span style={{fontSize: "xx-large", color: "#3273dc"}}>Imprimir</span>
                            </div>
                        </div>
                    </button>

                </div>
            </div>
        );
    }
}

export default FormularioRecibo;