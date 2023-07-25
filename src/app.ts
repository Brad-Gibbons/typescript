
import { Payment } from "./classes/Payments.js";
import { Invoice } from "./classes/Invoice.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";
import { ListTemplate } from "./classes/ListTemplate.js";




const form = document.querySelector('.new-item-form') as HTMLFormElement;



// inputs 
const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// create list template instance

const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);


form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    let values: [string, string, number];
    values = [toFrom.value, details.value, amount.valueAsNumber];

    // console.log(type.value,toFrom.value, details.value, amount.valueAsNumber)

    // check type 
    let doc: HasFormatter;

    if(type.value === 'invoice') {
        doc = new Invoice(...values);
    } else {
        doc = new Payment(...values);
    }

    list.render(doc, type.value, 'end');
    form.reset()


})