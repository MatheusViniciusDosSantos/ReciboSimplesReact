import React from "react";


export function gerarRecibo() {
    var valorRecibo = parseFloat((document.getElementById("valorRecibo"))?.value);
    var nomePagador = document.getElementById("nomePagador")?.value;
    var nomeEmisor = document.getElementById("nomeEmisor")?.value;
    var referenteA = document.getElementById("referenteA")?.value;
    var cpfCnpj = document.getElementById("cpfCnpj")?.value;
    var cidade = document.getElementById("cidade")?.value;
    var data = document.getElementById("data")?.value;
    var chavePix = document.getElementById("chavePix")?.value;
    var conta = document.getElementById("conta")?.value;
    var agencia = document.getElementById("agencia")?.value;
    var duasVias = document.getElementById("vias");
    var mes = verificaMes(data);

    cpfCnpj = formataCpfCnpj(cpfCnpj);

    if (validaCpfCnpj(cpfCnpj))  {

        if (chavePix != null && chavePix != undefined && chavePix != "") {
            document.getElementById("paragrafoChavePix").innerHTML = "Pagamento realizado pelo Pix: " + chavePix;
        }
        if (conta != null && conta != undefined && conta != "" && agencia != null && agencia != undefined && agencia != "") {
            document.getElementById("paragrafoChavePix").innerHTML = "Pagamento realizado na conta: " + conta + ", agência: " + agencia;
        }
        document.getElementById("paragrafoCidadeData").innerHTML = cidade + ", " + data[8] + data[9] + " de " + mes + " de " + data[0] + data[1] + data[2] + data[3];
        document.getElementById("assinatura").innerHTML = nomeEmisor;


        if (duasVias.checked == true) {

            if (chavePix != null && chavePix != undefined && chavePix != "") {
                document.getElementById("paragrafoChavePix2").innerHTML = "Pagamento realizado pelo Pix: " + chavePix;
            }
            if (conta != null && conta != undefined && conta != "" && agencia != null && agencia != undefined && agencia != "") {
                document.getElementById("paragrafoChavePix2").innerHTML = "Pagamento realizado na conta: " + conta + ", agência: " + agencia;
            }
            document.getElementById("paragrafoCidadeData2").innerHTML = cidade + ", " + data[8] + data[9] + " de " + mes + " de " + data[0] + data[1] + data[2] + data[3];
            document.getElementById("assinatura2").innerHTML = nomeEmisor;

        } else {
            document.getElementById("reciboSalario2").style.display = "none";
        }

        mostrarRecibo();

    } else {
        alert("Erro no cpf/cnpj");
    }
}



export function mostrarRecibo() {
    var reciboPronto = document.getElementById("reciboPronto").style.display;

    if (reciboPronto == "none") {
        document.getElementById("reciboPronto").style.display = "block";
    } else {
        document.getElementById("reciboPronto").style.display = "none";
    }
}

export function validaFormaPagamento(formaPagamento) {
    var idString = "dinheiro";
    for (let i = 0; i < formaPagamento.length; i++) {
        if (!formaPagamento[i].checked) {
            document.getElementById(formaPagamento[i].id.toString() + "Div").style.display = "none";
        } else {
            idString = formaPagamento[i].id.toString();
        }
    }
    return idString;
}

export function clickFormaPagamento() {
    var selecionado = document.getElementsByName("pagamento");
    var formaPagamento = validaFormaPagamento(selecionado);
    document.getElementById(formaPagamento + "Div").style.display = "block";
}

export function verificaMes(data) {
    if (data[6] == '1' || data[6] == '2') {
        if (data[6] == '1') {
            if (data[5] == 1) {
                return "novembro";
            } else {
                return "janeiro";
            }
        } else {
            if (data[5] == 1) {
                return "dezembro";
            } else {
                return "fevereiro";
            }
        }
    } else if (data[6] == '3') {
        return "março";
    } else if (data[6] == '4') {
        return "abril";
    } else if (data[6] == '5') {
        return "maio";
    } else if (data[6] == '6') {
        return "junho";
    } else if (data[6] == '7') {
        return "julho";
    } else if (data[6] == '8') {
        return "agosto";
    } else if (data[6] == '9') {
        return "setembro";
    } else if (data[6] == '0') {
        return "outubro";
    } else {
        return "janeiro";
    }
}

export function abrirImpressao() {
    var divAImprimir = document.getElementById("reciboImprimir").innerHTML;
    var janelaDeImpressao = window.open();
    janelaDeImpressao.document.write(divAImprimir);
    janelaDeImpressao.print();
    janelaDeImpressao.close();
}

//Função que vai transformar os valores númericos na sua escrita por extenso
String.prototype.extenso = function(c){ // Função para converter número no formato string para número por extenso.
    var ex = [
        ["zero", "um", "dois", "três", "quatro", "cinco", "seis", "sete", "oito", "nove", "dez", "onze", "doze", "treze", "quatorze", "quinze", "dezesseis", "dezessete", "dezoito", "dezenove"],
        ["dez", "vinte", "trinta", "quarenta", "cinquenta", "sessenta", "setenta", "oitenta", "noventa"],
        ["cem", "cento", "duzentos", "trezentos", "quatrocentos", "quinhentos", "seiscentos", "setecentos", "oitocentos", "novecentos"],
        ["mil", "milhão", "bilhão", "trilhão", "quadrilhão", "quintilhão", "sextilhão", "setilhão", "octilhão", "nonilhão", "decilhão", "undecilhão", "dodecilhão", "tredecilhão", "quatrodecilhão", "quindecilhão", "sedecilhão", "septendecilhão", "octencilhão", "nonencilhão"]
    ];
    var a, n, v, i, n = this.replace(c ? /[^,\d]/g : /\D/g, "").split(","), e = " e ", $ = "real", d = "centavo", sl;
    for(var f = n.length - 1, l, j = -1, r = [], s = [], t = ""; ++j <= f; s = []){
        j && (n[j] = (("." + n[j]) * 1).toFixed(2).slice(2));
        if(!(a = (v = n[j]).slice((l = v.length) % 3).match(/\d{3}/g), v = l % 3 ? [v.slice(0, l % 3)] : [], v = a ? v.concat(a) : v).length) continue;
        for(a = -1, l = v.length; ++a < l; t = ""){
            if(!(i = v[a] * 1)) continue;
            i % 100 < 20 && (t += ex[0][i % 100]) ||
            i % 100 + 1 && (t += ex[1][(i % 100 / 10 >> 0) - 1] + (i % 10 ? e + ex[0][i % 10] : ""));
            s.push((i < 100 ? t : !(i % 100) ? ex[2][i == 100 ? 0 : i / 100 >> 0] : (ex[2][i / 100 >> 0] + e + t)) +
                ((t = l - a - 2) > -1 ? " " + (i > 1 && t > 0 ? ex[3][t].replace("ão", "ões") : ex[3][t]) : ""));
        }
        a = ((sl = s.length) > 1 ? (a = s.pop(), s.join(" ") + e + a) : s.join("") || ((!j && (n[j + 1] * 1 > 0) || r.length) ? "" : ex[0][0]));
        a && r.push(a + (c ? (" " + (v.join("") * 1 > 1 ? j ? d + "s" : (/0{6,}$/.test(n[0]) ? "de " : "") + $.replace("l", "is") : j ? d : $)) : ""));
    }
    return r.join(e);
}

export function validaCpfCnpj(val) {
    if (val.length == 14) {
        var cpf = val.trim();

        cpf = cpf.replace(/\./g, '');
        cpf = cpf.replace('-', '');
        cpf = cpf.split('');

        var v1 = 0;
        var v2 = 0;
        var aux = false;

        for (var i = 1; cpf.length > i; i++) {
            if (cpf[i - 1] != cpf[i]) {
                aux = true;
            }
        }

        if (aux == false) {
            return false;
        }

        for (var i = 0, p = 10; (cpf.length - 2) > i; i++, p--) {
            v1 += cpf[i] * p;
        }

        v1 = ((v1 * 10) % 11);

        if (v1 == 10) {
            v1 = 0;
        }

        if (v1 != cpf[9]) {
            return false;
        }

        for (var i = 0, p = 11; (cpf.length - 1) > i; i++, p--) {
            v2 += cpf[i] * p;
        }

        v2 = ((v2 * 10) % 11);

        if (v2 == 10) {
            v2 = 0;
        }

        if (v2 != cpf[10]) {
            return false;
        } else {
            return true;
        }
    } else if (val.length == 18) {
        var cnpj = val.trim();

        cnpj = cnpj.replace(/\./g, '');
        cnpj = cnpj.replace('-', '');
        cnpj = cnpj.replace('/', '');
        cnpj = cnpj.split('');

        var v1 = 0;
        var v2 = 0;
        var aux = false;

        for (var i = 1; cnpj.length > i; i++) {
            if (cnpj[i - 1] != cnpj[i]) {
                aux = true;
            }
        }

        if (aux == false) {
            return false;
        }

        for (var i = 0, p1 = 5, p2 = 13; (cnpj.length - 2) > i; i++, p1--, p2--) {
            if (p1 >= 2) {
                v1 += cnpj[i] * p1;
            } else {
                v1 += cnpj[i] * p2;
            }
        }

        v1 = (v1 % 11);

        if (v1 < 2) {
            v1 = 0;
        } else {
            v1 = (11 - v1);
        }

        if (v1 != cnpj[12]) {
            return false;
        }

        for (var i = 0, p1 = 6, p2 = 14; (cnpj.length - 1) > i; i++, p1--, p2--) {
            if (p1 >= 2) {
                v2 += cnpj[i] * p1;
            } else {
                v2 += cnpj[i] * p2;
            }
        }

        v2 = (v2 % 11);

        if (v2 < 2) {
            v2 = 0;
        } else {
            v2 = (11 - v2);
        }

        if (v2 != cnpj[13]) {
            return false;
        } else {
            return true;
        }
    } else {
        return false;
    }
}

export function formataCpfCnpj(v){

    //Remove tudo o que não é dígito
    v=v.replace(/\D/g,"")

    if (v.length <= 14) { //CPF

        //Coloca um ponto entre o terceiro e o quarto dígitos
        v=v.replace(/(\d{3})(\d)/,"$1.$2")

        //Coloca um ponto entre o terceiro e o quarto dígitos
        //de novo (para o segundo bloco de números)
        v=v.replace(/(\d{3})(\d)/,"$1.$2")

        //Coloca um hífen entre o terceiro e o quarto dígitos
        v=v.replace(/(\d{3})(\d{1,2})$/,"$1-$2")

    } else { //CNPJ

        //Coloca ponto entre o segundo e o terceiro dígitos
        v=v.replace(/^(\d{2})(\d)/,"$1.$2")

        //Coloca ponto entre o quinto e o sexto dígitos
        v=v.replace(/^(\d{2})\.(\d{3})(\d)/,"$1.$2.$3")

        //Coloca uma barra entre o oitavo e o nono dígitos
        v=v.replace(/\.(\d{3})(\d)/,".$1/$2")

        //Coloca um hífen depois do bloco de quatro dígitos
        v=v.replace(/(\d{4})(\d)/,"$1-$2")

    }

    return v

}