// interface
import { Invoice } from "./classes/Invoice.js";
const invOne = new Invoice('Rupture', 'Tunes', 560);
const invTwo = new Invoice('Distant Planet', 'Tunes', 200);
let invoices = [];
const form = document.querySelector('.new-item-form');
// console.log(form.children);
// inputs 
const type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
