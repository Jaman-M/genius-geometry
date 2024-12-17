// // console.log('connected parallelogram');
// function calculateParallelogramArea(){
//     // console.log('parallelogram');
//     // const baseInput = document.getElementById('parallelogram-base');
//     // const baseText = baseInput.value;
//     // const base = parseFloat(baseText);

//     const base = getParallelogramBase();
//     console.log(base);
// }

// function getParallelogramBase(){
//     const baseInput = document.getElementById('parallelogram-base');
//     const baseText = baseInput.value;
//     const base = parseFloat(baseText);
//     return base;
// }

function calculateParallelogramArea(){
    const base = getInputValueById('parallelogram-base');
    console.log('base value', base);
    const height = getInputValueById('parallelogram-height');
    console.log('height value', height);

    const area = base * height;
    console.log('Area of the parallelogram is:', area);

    setInnerTextById('parallelogram-area', area)

}

function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    // console.log(inputField.value);
    const inputValueText = inputField.value;
    const inputValue = parseFloat(inputValueText);
    // console.log(inputValue);
    return inputValue;
}

function setInnerTextById(elementId, area){
    const elemnt = document.getElementById(elementId);
    elemnt.innerText = area;
}