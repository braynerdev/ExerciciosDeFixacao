const prompt = require('prompt-sync')({sigint:true});

var som = 1

while (som == 1) {
    var Nome = prompt("nome do paciente: ").toUpperCase();
    var Data = (`Data do atendimento: `)
console.log();
console.log(`Paciente ${Nome} tem? (escolha o número correspondente ao Diagnostico do paciente)\n[1] infecções causadas por bactérias\n[2] dores\n[3] inflamação decorrente de uma lesão ou, também, da reação exagerada do sistema imunológico a alguma condição.`);
var Diagnostico = prompt("Resposta: ");
console.log();

while (Diagnostico!='1' && Diagnostico!='2' && Diagnostico!='3') {
    console.log(`Paciente ${Nome} tem? (escolha o número correspondente ao Diagnostico do paciente)\n[1] infecções causadas por bactérias\n[2] dores\n[3] inflamação decorrente de uma lesão ou, também, da reação exagerada do sistema imunológico a alguma condição.`);
    Diagnostico = prompt("Resposta: ");
    console.log();
}
console.log(resposta(Nome,Diagnostico))
som = prompt(`deseja fazer outra consulta? (1-sim e 2-não): `)
}

//não era necessario mas fiz a função so para treinar, pois minha lingugem é c# e python e preciso treinar algumas coisas em js prara aprender!
function resposta(Nome, Diagnostico){

    switch (Diagnostico) {
        case '1':
            return `Você deve indicar para ${Nome} algum antibiótico, exemplo:\n[1] amoxicilina\n[2] azitromicina\n[3] ampicilina\n[4] tetraciclina.`;
            break;
        case '2':
            return`Você deve indicar para ${Nome} algum Analgésico, exemplo:\n[1] comuns\n[2] anti-inflamatórios não esteroides (AINEs)\n[3] opioides`;
            break
        case '3':
            return `Você deve indicar para ${Nome} algum Anti-inflamatório, exemplo:\n[1] anti-inflamatórios não esteroides (AINEs)\n[2] corticoides`;
            break;
        default:
            break;
    }
}