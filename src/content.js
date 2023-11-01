function enableElement(element_ids) {
    for (const elem_id of element_ids) {
        console.log(elem_id);
        select_element = document.getElementById(elem_id); //Get the select element by its ID
        if(select_element.disabled)
            select_element.removeAttribute('disabled');
    }
}


console.log("eCalc unlocker loaded");


//unlock battery cells
let select_element = document.getElementById('inBCell'); //Get the select element by its ID
for(let i = 0; i < select_element.options.length; i++) {
    let optionElement = select_element.options[i];
    
    //Check if the option is disabled and enable it and change its value
    if(optionElement.disabled) {
        optionElement.removeAttribute('disabled');
        optionElement.value = optionElement.text;
    }
}
console.log("Batteries unlocked");


//unlock escs
select_element = document.getElementById('inEType'); //Get the select element by its ID
for(let i = 0; i < select_element.options.length; i++) {
    let optionElement = select_element.options[i];
    
    //Check if the option is disabled and enable it and change its value
    if(optionElement.disabled) {
        optionElement.removeAttribute('disabled');
        optionElement.value = i + 1;
    }
}
console.log("ESCs unlocked");


//mutatio register when motor brand is changed
select_element = document.getElementById('inMType');
const observer = new MutationObserver((mutations) => {
    //get manufacturer id
    let manuf_element = document.getElementById('inMManufacturer');
    const manuf_selected_option = manuf_element.options[manuf_element.selectedIndex];
    const manuf_id  = manuf_selected_option.value;
    console.log("Manufacturer changed to " + manuf_selected_option.text);

    let select_element = document.getElementById('inMType');

    //go through each new option and enable it and change its value
    for(let i = 0; i < select_element.options.length; i++) {
        let optionElement = select_element.options[i];
        
        //Check if the option is disabled and enable it and change its value
        if(optionElement.disabled) {
            optionElement.removeAttribute('disabled');
            optionElement.value = manuf_id + '|' + optionElement.text.replace(/\s?\([^)]+\)$/, '');    //remove last bracket from text
        }
    }
});
const config = { attributes: false, childList: true, subtree: false };  //options for the observer (which mutations to observe)
observer.observe(select_element, config);                               //start observing the select element for configured mutations
console.log("Motor manufacturer mutator registered");

//unlock motor search
enableElement(['BtnSearch'])
console.log("Motor search unlocked");

//prop wizard unlock
enableElement(['BtnPropKvWizard'])
console.log("Prop kv wizard unlocked");


//csv controls
enableElement(['AddCSV', 'DownloadCSV', 'ClearCSV']);
console.log("CSV controls unlocked");