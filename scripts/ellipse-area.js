function calculateEllipseArea(){
    const majorRadious = getInputValueById('ellipse-major-radious');
    const minorRadious = getInputValueById('ellipse-minor-radious');
    const area = 3.1416 * majorRadious * minorRadious;
    setInnerTextById('ellipse-area', area);
}