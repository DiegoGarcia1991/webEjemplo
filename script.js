console.log('hola mundo')

let nam='Diego'
const lastName='Garcia'
var osDeveloper=true

console.log(nam)

let name2 =nam.toLocaleUpperCase()
console.log(name2)


const list =[]
list.push(1,2,3,4)
console.log(list)

console.log(list[3])

const crearObjetos={
    name:'Diego',
    age: 31,
    isDeveloper: true
}


console.log(crearObjetos.name)

const funcionSumar = (operando1,operando2)=>{
    console.log("digito1 "+operando1)
    console.log("digito 2 "+operando2)

    return operando1+operando2
}

function restar (a,b){
    return a+b
}

console.log(funcionSumar(2,4))
