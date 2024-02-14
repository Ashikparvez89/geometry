function calculateDarea() {
    const getdbase = getInputValue('d-base');

    const getdheight = getInputValue('d-height');

    const getarea = 0.5 * getdbase * getdheight;

    setInnnerText('rhombusarea', getarea);
}


function calculatePentagonarea(){
    const getPentagonbase = getInputValue('pentagon-base')
    const getPentagonheight = getInputValue('pentagon-height')

    const pentagonRea = 0.5 * getPentagonbase * getPentagonheight;

    setInnnerText('pentagonarea', pentagonRea);
}




function calculateElipsarea(){
    const getElipsbase = getInputValue('elips-base')
    const getElipsheight = getInputValue('elips-height')

    const elipsarea = 3.14 * getElipsbase * getElipsheight;

    setInnnerText('elipsArea', elipsarea)
}