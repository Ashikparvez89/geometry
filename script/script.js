function myfunction(){
    const getBase = document.getElementById('base');
    const bases = getBase.value;

    const b = parseFloat(bases)

    const getHeight = document.getElementById('height');

    const heights = getHeight.value;

    const h = parseFloat(heights);

    const area = 0.5 * b * h;

    const totalArea = document.getElementById('areatotal');

    totalArea.innerText = area;

    console.log(area)
}



function rectangle(){
    const getWidth = document.getElementById('width');

    const widths = getWidth.value;

    const w = parseFloat(widths);
    const getInchi = document.getElementById('inchi');

    const inchis = getInchi.value;

    const i = parseFloat(inchis);

    const getArea = w * i;


    const areaRec = document.getElementById('rectangle');

    areaRec.innerText = getArea;



}



