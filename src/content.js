console.log("eCalc unlocker loaded");

//unlock battery cells
let selectElement = document.getElementById('inBCell'); //Get the select element by its ID
for(let i = 0; i < selectElement.options.length; i++) {
    let optionElement = selectElement.options[i];
    
    //Check if the option is disabled and enable it and change its value
    if(optionElement.disabled) {
        optionElement.removeAttribute('disabled');
        optionElement.value = optionElement.text;
    }
}
console.log("Batteries unlocked");

//unlock escs
selectElement = document.getElementById('inEType'); //Get the select element by its ID
for(let i = 0; i < selectElement.options.length; i++) {
    let optionElement = selectElement.options[i];
    
    //Check if the option is disabled and enable it and change its value
    if(optionElement.disabled) {
        optionElement.removeAttribute('disabled');
        optionElement.value = i + 1;
    }
}
console.log("ESCs unlocked");


//mutation register when motor brand is changed
selectElement = document.getElementById('inMType');
const observer = new MutationObserver((mutations) => {
    console.log("Manufacturer changed");

    //get manufacturer id
    manuf_elem = document.getElementById('inMManufacturer');
    const selectedIndex  = manuf_elem.selectedIndex;
    const selectedOption = manuf_elem.options[selectedIndex];
    const manuf_id  = selectedOption.value;
    console.log(selectedOption.text);

    //go through each new option and enable it and change its value
    for(let i = 0; i < selectElement.options.length; i++) {
        let optionElement = selectElement.options[i];
        
        //Check if the option is disabled and enable it and change its value
        if(optionElement.disabled) {
            optionElement.removeAttribute('disabled');
            optionElement.value = manuf_id + '|' + optionElement.text.replace(/\s?\([^)]+\)$/, '');    //remove last bracket from text
        }
    }
});
// Options for the observer (which mutations to observe)
const config = { attributes: false, childList: true, subtree: false };
// Start observing the select element for configured mutations
observer.observe(selectElement, config);
console.log("Motor manufacturer mutator registered");

//unlock motor search
selectElement = document.getElementById('BtnSearch'); //Get the select element by its ID
if(selectElement.disabled)
    selectElement.removeAttribute('disabled');
console.log("Motor search unlocked");


//prop wizard unlock
selectElement = document.getElementById('BtnPropKvWizard'); //Get the select element by its ID
if(selectElement.disabled)
    selectElement.removeAttribute('disabled');
console.log("Prop kv wizard unlocked");