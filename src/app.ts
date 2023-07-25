// interface




import { Invoice } from "./classes/Invoice.js";

const invOne = new Invoice('Rupture', 'Tunes', 560);
const invTwo = new Invoice('Distant Planet', 'Tunes', 200);


let invoices: Invoice[] = [];



const form = document.querySelector('.new-item-form') as HTMLFormElement;

// console.log(form.children);

// inputs 
const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    console.log(type.value,toFrom.value, details.value, amount.valueAsNumber)
})