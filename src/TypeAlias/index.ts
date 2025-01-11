type Person = {
    name: string,
    age?: number,
    email?: string
}



type Player = Person & {
    speed: number,
    jump: number,
}


const getPlayer = (player: Player) => {
    console.log(`Player Name is ${player.name} and  speed is ${player.speed} `)
}

getPlayer({ name: 'said', speed: 99, jump: 90 })



type stringAndNumber = string | number

let theAge: stringAndNumber = 10

theAge = '10'



type compare = 0 | 1 | -1

const compare = (num1: number, num2: number): compare => {

    if (num1 == num2) {
        return 0
    } else if (num1 > num2) {
        return 1
    } else {
        return -1
    }

}


compare(1, 1)
compare(2, 1)
compare(1, 2)









