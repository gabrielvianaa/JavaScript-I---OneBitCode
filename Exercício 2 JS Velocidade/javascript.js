const name1 = prompt('Insira o nome do primeiro veículo:')
const velocidade1 = prompt('Insira a velocidade do primeiro veículo em km/h:')

const name2 = prompt('Insira o nome do segundo veículo:')
const velocidade2 = prompt ('Insira a velocidade do segundo veículo em km/h:')

if(velocidade1 > velocidade2){
    alert('A velocidade do' + " " + name1 +"" + 'é maior que a velocidade do(a)'+" " + name2)
}
    else if (velocidade1 < velocidade2){
    alert('A velocidade do(a)' + " " + name2 +" " + 'é maior que a velocidade do(a)'+ " " + name1)
}   else if (velocidade1 === velocidade2){
    alert('A velocidade do(a)' + " " +name1+ " " + 'é igual a velocidade do(a)' + " " +name2)
}