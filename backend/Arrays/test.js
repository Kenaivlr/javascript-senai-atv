let qntCar = prompt("informe a quantidade de carros que vc quer adicionar:")
let car = [];
let addcar;
let remove;
let index;
let qntRemove;
let confirmRemove;
let i;

for (i = 0; i < qntCar; i++) {
    addcar = prompt(`informe os ${qntCar} carros que você que adicionar a lista:`)
    car.push(addcar)
}

alert(`Lista dos Carros atuais :\n ${car.join('\n')}`)

confirmRemove = prompt("Você quer remover algum carro: ")
if (confirmRemove == 'sim'|| confirmRemove == 'SIM' || confirmRemove == 'Sim') {
    qntRemove = prompt("Quantos carros você quer remover: ")
    if (!isNaN(qntRemove) && qntRemove > 0 && qntRemove <= car.length) {
        for (i = 0; i < qntRemove; i++) {
            remove = prompt(`Informe quais os ${qntRemove} carros que iram ser removidos`)
            if (car.includes(remove)) {
                index = car.indexOf(remove)
                car.splice(index,1)
            }else {
                alert(`O carro "${remove}" não está na lista.`);
            }
        }
    }
    alert(`Lista final de carros:\n${car.join('\n')}`);
}