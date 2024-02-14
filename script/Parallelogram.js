function calculatearea() {

    const getPBase = getInputValue('p-base');

    const getPheight = getInputValue('p-height');

    const calculate = getPBase * getPheight;

    setInnnerText('areaparalal', calculate)

}


function getInputValue(inputField) {
    const paralal = document.getElementById(inputField);

    const paralalvalue = paralal.value;

    const baseP = parseFloat(paralalvalue);

    return baseP;
}


function setInnnerText(elementId, area){
    const areatext = document.getElementById(elementId);


    areatext.innerText = area;

} 