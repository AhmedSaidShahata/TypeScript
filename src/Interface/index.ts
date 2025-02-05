
interface User {
    firstname: string,
    lastname: string,
    email: string,
    salary: number,
    sayWelecom(): string,
    sayHi: () => string
}

let user = {
    firstname: 'ahmed',
    lastname: 'said',
    email: 'a.said@gmail.com',
    salary: 1000,
    sayWelecom() {
        return `welcome ${this.firstname}`
    },
    sayHi: () => {
        return `welcome ${user.firstname}`
    }
}



const getData = (data: User) => {
    console.log(`the firstname is ${data.firstname}`)
}


getData(user)





//======================================= interface reopen ====================================



interface Settings {
    themeDark: boolean,
    font: string;
}


interface Settings {
    showSidebar: boolean
}


interface Settings {
    external: boolean
}


let websiteSettings: Settings = {
    themeDark: true,
    font: 'Cairo',
    showSidebar: true,
    external: false
}


//======================================= interface extend ====================================



interface theUser {
    id: number,
    name: string,
    email: string,
}



interface Moderator extends theUser {
    role: string
}

interface Admin extends Moderator{
    protect: boolean
}


let userAdmin:Admin={
    id: 1,
    name: 'said',
    email: 'email@email.com',
    role: 'admin',
    protect: false
}

