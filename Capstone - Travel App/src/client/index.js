import { doEverything } from './js/app'
// import { doSomething } from './js/app'


import './styles/style.scss'

export {
    doEverything,
}


// Add event listener
document.querySelector("#saveButton").addEventListener('click', doEverything);
