let qntCar = +prompt("informe a quantidade de carros que vc quer adicionar:")
let car = [];
let addcar;
let remove;
let qntNvCar;
let novosCar;
let index;
let qntRemove;
let confirmRemove;
let i;

if ( !isNaN(qntCar) && qntCar > 0) {
    for (i = 0; i < qntCar; i++) {
        addcar = prompt(`informe os "${qntCar}" carros que você que adicionar a lista:`)
        car.push(addcar)
    }

    alert(`Lista dos Carros atuais :\n ${car.join('\n')}`)

    confirmRemove = prompt("Você quer remover algum carro: ")

    if (isNaN(confirmRemove) && confirmRemove == 'sim' || confirmRemove == 'SIM' || confirmRemove == 'Sim') {
        qntRemove = prompt("Quantos carros você quer remover: ")
        if (!isNaN(qntRemove) && qntRemove > 0 && qntRemove <= car.length) {
            for (i = 0; i < qntRemove; i++) {
                remove = prompt(`Informe quais os carros que iram ser removidos\n`)
                if (car.includes(remove)) {
                    index = car.indexOf(remove)
                    car.splice(index, 1)
                } else {
                    alert(`O carro "${remove}" não está na lista.`);
                }
            }
        }
        alert(`Lista final de carros:\n${car.join('\n')}`);

        novosCar = prompt("Você quer adicionar novos carros: ")
        if (isNaN(novosCar) && novosCar == 'Sim' || novosCar == 'SIM' || novosCar == 'sim') {
            qntNvCar = prompt("Quantos novos carros você que adicionar a lista:")
            let add = ''
            for (i = 0; i < qntNvCar; i++) {
                addcar = prompt(`informe os novos "${qntNvCar}" carros que você que adicionar a lista:`)
                car.push(addcar)
                add += addcar + '\n'
            }
            alert(`Carros adicionados:\n ${add}`)
            alert(`Lista final de carros:\n${car.join('\n')}`);
        } else {
            alert(`Lista final de carros:\n${car.join('\n')}`);
        }


    } else if (isNaN(confirmRemove) && confirmRemove == 'NAO' || confirmRemove == 'NÃO' || confirmRemove == 'Nao' || confirmRemove == 'Não' || confirmRemove == 'nao' || confirmRemove == 'não') {
        alert(`Lista final de carros:\n${car.join('\n')}`);

    } else {
        alert(`Nos de uma informação valida se Sim ou se Não`)
    }
}else{
    alert(`Informe uma quantidade de carros validos`)
}