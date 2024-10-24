const prompt = require('prompt-sync')({sigint:true});

const livros = ["javascript", "ECMAScript","MongoDB", "Engenharia de testes", "Clean code", 
    "Scrum","guia HTML e CSS3","MongoDB"];
/*console.log(livros[1]);

let consulta = livros.indexOf("javascript");
console.log(consulta);
console.log()

console.log(livros.pop());
console.log()

console.log(livros.push("Programador pragmatico"));
console.log()

console.log(livros.sort());
console.log()

console.log(livros.length);*/

/*livros.sort();
console.log(livros);

console.log(livros.length);*/
console.log();
console.log("[1]- quantos livros tem");
console.log("[2]- sair");
console.log();

tamLivros();

function tamLivros(entrada){
    var entrada = prompt("Para ver quantos livros tem digite 1 e para sair digíte 2: ");
    while (entrada != "1" && entrada != "2"){
        var entrada = prompt("Para ver quantos livros tem digite 1 e para sair digíte 2: ");
    }
    console.log()
    if (entrada == "1") {
        console.log(`Estamos com ${livros.length} livros na nossa base de dados`);
        console.log();
        var lat = livros.length   
        for (var som = 1; som <= lat; som++) {
            console.log(`${som}- ${livros[som - 1]}`);
        }
    }
    else{
        console.log("Atendimento encerrado");
    }
}




