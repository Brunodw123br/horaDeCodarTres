// exercicio 1
// Escreva um algoritmo para ler 2 valores informados pelo usuário e se o segundo valor informado for igual ou menor que ZERO, deve ser lido um novo valor. Ou seja, para o segundo valor não pode ser aceito o valor zero, nem um valor negativo.  O seu programa deve imprimir o resultado da divisão do primeiro valor lido pelo segundo valor.

function exercicioUm(){
    var numeroUm, numeroDois, resultado;
    do{
        numeroUm = parseFloat(prompt("adicione o primeiro número"));
        if(isNaN(numeroUm))
            alert("o valor digitado precisa ser um numero");
        else if(numeroUm <= 0)
            alert("o valor não pode ser menor ou igual a zero");
    }while(isNaN(numeroUm) || numeroUm <= 0)
    do{
        numeroDois = parseFloat(prompt("adicione o segundo número"));
        if(isNaN(numeroDois))
            alert("o valor digitado precisa ser um numero");
        else if(numeroDois <= 0)
            alert("o valor não pode ser menor ou igual a zero");
    }while(isNaN(numeroDois) || numeroDois <= 0)
    resultado = numeroUm / numeroDois;
    alert("o valor da divisão foi: " + resultado);
}

// exercicio 2
// Crie uma bomba relógio (usando somente código - para deixar claro!) cuja contagem regressiva vá de 30 a 0. Utilize "document.write" para escrever em tela e no final da repetição escreva "EXPLOSÃO".

function exercicioDois(){
    container = document.getElementById("container");
    escrever = document.getElementById("escrita");
    bomba = document.getElementById("bomba");
    container.style.display = "none";
    bomba.style.display = "flex";
for(var i = 30; i>=0; i--){
    escrever.innerHTML += "A bomba vai expolir em: " + i + "<br>";
}
escrever.innerHTML += "A bomba explodiu!";
}

function fecharExercicioDois(){
    container = document.getElementById("container");
    escrever = document.getElementById("escrita");
    bomba = document.getElementById("bomba");
    container.style.display = "flex";
    bomba.style.display = "none";
    escrever.innerHTML = "";
}

// exercicio 3
// Escreva um algoritmo para imprimir os números de 1 (inclusive) a 10 (inclusive) em ordem decrescente. Exemplo: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1

function exercicioTres(){
    var numeros = [];
    var c = 0;

    for(var i = 10; i >= 1; i--){
        numeros[c] = i;
        c++;
    }
    alert("ordem decrescente: " + numeros);
}

// exercicio 4
//Faça um algoritmo que calcule e escreva a média aritmética dos números inteiros entre 15 (inclusive) e 100 (inclusive).

function exercicioQuatro(){
    var soma = 0;
    var c = 0;
    for(var i = 15; i <= 100; i++){
        soma += i;
        c++;
    }
    var media = parseFloat(soma/c);
    alert("a média é igual a: " + media);
}

// exercicio 5
//Faça um algoritmo que calcule e escreva a média aritmética dos dois números inteiros informados pelo usuário e todos os números inteiros entre eles. Considere que o primeiro sempre será menor que o segundo.

function exercicioCinco(){
    var numeroUm = 0;
    var numeroDois = 0;
    var soma = 0;
    var media = 0;
    var c = 0;
    do{
        numeroUm = parseInt(prompt("adicione o primeiro número"));
        if(isNaN(numeroUm))
            alert("o valor digitado precisa ser um numero");
    }while(isNaN(numeroUm));
    do{
        numeroDois = parseInt(prompt("adicione o segundo número"));
        if(isNaN(numeroDois))
            alert("o valor digitado precisa ser um numero");
        else if(numeroUm >= numeroDois)
            alert("o segundo valor não pode ser menor que o primeiro");
    }while(isNaN(numeroDois) || numeroUm >= numeroDois)
    for(var i = numeroUm; i <= numeroDois; i++){
        c++;
        soma += i;
    }
    media = parseFloat(soma/c);
    alert("a média do entre os numeros " + numeroUm + " e " + numeroDois + " é: " + media);
}

// exercicio 6
//Escreva um programa para ler 2 notas de um aluno, calcular e imprimir a média final. Considere que a nota de aprovação é 9,5. Logo após escrever a mensagem "Calcular a média de outro aluno Sim/Não?" e solicitar um resposta. Se a resposta for "S", o programa deve ser executado novamente, caso contrário deve ser encerrado exibindo a quantidade de alunos aprovados.

function exercicioSeis(){
    var aprovados = 0;
    var media = 0;
    var numeroUm = 0;
    var numeroDois = 0;
    do{
        do{
            numeroUm = parseFloat(prompt("adicione o primeiro número"));
            if(isNaN(numeroUm))
                alert("o valor digitado precisa ser um numero");
            else if(numeroUm < 0 || numeroUm > 10 )
                alert("o valor digitado precisa estar entre 0 e 10");
        }while(isNaN(numeroUm) || numeroUm < 0 || numeroUm > 10)
        do{
            numeroDois = parseFloat(prompt("adicione o segundo número"));
            if(isNaN(numeroDois))
                alert("o valor digitado precisa ser um numero");
            else if(numeroDois < 0 || numeroDois > 10 )
                alert("o valor digitado precisa estar entre 0 e 10");
        }while(isNaN(numeroDois) || numeroDois < 0 || numeroDois > 10)
        media = (numeroUm + numeroDois) / 2;
        if(media >= 9.5){
            aprovados += 1;
            alert("este aluno foi aprovado");
        }else
            alert("este aluno foi reprovado")
        resposta = confirm("deseja calcular a média de outro aluno?");
    }while(resposta)
    alert(aprovados + " alunos foram aprovados");
}

// exercicio 7
//Escreva um algoritmo para ler as notas de avaliações de um aluno, calcule e imprima a média (simples) desse aluno. Só devem ser aceitos valores válidos durante a leitura (0 a 10) para cada nota. São 6 notas ao total. Caso o valor informado para qualquer uma das notas esteja fora do limite estabelecido, deve ser solicitado um novo valor ao usuário. 

function exercicioSete(){
    var numeroUm = 0;
    var media = 0;
    var soma = 0;
    for(var i = 0; i < 6; i++){
        do{
            numeroUm = parseFloat(prompt("adicione a " +(i+1) + "ª nota"));
            if(isNaN(numeroUm))
                alert("o valor digitado precisa ser um numero");
            else if(numeroUm < 0 || numeroUm > 10 )
                alert("o valor digitado precisa estar entre 0 e 10");
        }while(isNaN(numeroUm) || numeroUm < 0 || numeroUm > 10)
        soma += numeroUm;
    }
    media = soma/i;
    alert("a média da nota do aluno é: " + media)
}

// exercico 8
// Ler um valor N e imprimir todos os valores inteiros entre 1 (inclusive) e N (inclusive). Considere que o N será sempre maior que ZERO. N  é um valor informado pelo usuário

function exercicioOito(){
    var n = 0;
    var numeros = [];
    do{
        n = parseInt(prompt("adicione um numero"));
        if(isNaN(n))
            alert("o valor digitado precisa ser um numero");
        else if(n <= 1)
            alert("o valor digitado precisa ser superior a 1");
    }while(isNaN(n) || n <= 1)
    for(i = 1; i <= n; i++){
        numeros[(i-1)] = i;
    }
    alert("os numeros entre 1 e " + n + " contando os próprios são: " + numeros);
}

// exercicio 9
// Escreva um algoritmo para imprimir os 10 primeiros números inteiros maiores que 100.

function exercicioNove(){
    var numero = 100;
    var numeros = [];
    for(var i = 0; i < 10; i++){
        numero++;
        numeros[i] = numero; 
    }
    alert("os dez numeros inteiros após o 100 são: " + numeros);
}

// exercicio 10
//Escreva um programa para imprimir todas as tabuadas de 1 a N. N será informado pelo usuário.

function exercicioDez(){
    multipilicacao = 0;
    tabuada = "A tabuada até o numero digitado é";
    var n = 0;
    do{
        n = parseInt(prompt("adicione um numero"));
        if(isNaN(n))
            alert("o valor digitado precisa ser um numero");
        else if(n <= 0)
            alert("não é permitido numeros negativos ou iguais a zero");
    }while(isNaN(n) || n <= 0)
    for(var i = 1; i <= n; i++){
        tabuada += "\n\na tabuada do " + i + ": \n"
        for(var c = 1; c <= 10; c++){
            multipilicacao = i*c;
            tabuada += "\n " + i + " X " + c + " = " + multipilicacao;
        }
    }
    alert(tabuada);
}

// exercicio 11
// Escreva um programa em que o usuário informe 10 valores e escreva quantos desses valores lidos estão entre os números 24 e 42 (incluindo os valores 24 e 42) e quantos deles estão fora deste intervalo.


function exercicioOnze(){
    var incluido = 0;
    var fora = 0;
    var numero = 0;
    for(var i = 0; i < 10; i++){
        do{
            numero = parseInt(prompt("adicione o " + (1+i) +  "° numero"));
            if(isNaN(numero))
                alert("o valor digitado precisa ser um numero");
        }while(isNaN(numero))
        if(numero >= 24 && numero <= 42)
            incluido++;
        else
            fora++;
    }
    alert("dos numeros digitados " + incluido + " estão incluidos no intervalo de 24 à 42 e " + fora + " estão fora");
}
