import React from "react";
import "./FormularioRecibo.css"
import Input from "../Input/Input";
import {gerarRecibo} from "../../Service/ReciboService";
import {abrirImpressao} from "../../Service/ReciboService";
import {clickFormaPagamento} from "../../Service/ReciboService";
import "../Recibo/Recibo"
import Recibo from "../Recibo/Recibo";

class FormularioRecibo extends React.Component {

    constructor(props) {
        super(props);
    }

    handleSubmit(event) {
        event.preventDefault();
        let resultado = parseFloat(this.state.valor1) + parseFloat(this.state.valor2);
        this.setState({ resultado: resultado });
        alert(resultado);
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
                                   onChange={(e) => this.checked = "checked"}/>
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
                    <input id="vias" type="checkbox" onChange={(e) => this.checked = "checked"} />
                    <br/><br/>

                    <button type="submit"
                            style={{backgroundColor: "#3273dc", border: "1px solid transparent", borderRadius: "8px"}}
                            onClick={() => this.handleSubmit()}>
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

                {nomeVariavel&&<Recibo/>}

             </div>
        );
    }
}

export default FormularioRecibo;