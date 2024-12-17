function calculatePentagonArea(){
    console.log('clicked calculatePentagonArea');
    const perimeter = getInputValueById('pentagon-perimeter');
    // console.log(perimeter);
    const apothem = getInputValueById('pentagon-apothem');
    console.log(perimeter, apothem);

    const area = 0.5 * perimeter* apothem;
    setInnerTextById('pentagon-area', area);
}

function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value;
}

function setInnerTextById(elementId, area){
    const elemnt = document.getElementById(elementId);
    elemnt.innerText = area;
}