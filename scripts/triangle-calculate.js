function calculateTriangleArea(){
    // --- get tirangle base---
    const triangeBaseInput = document.getElementById('triangle-base');
    // console.log(triangeBaseInput);
    const triangeBaseText = triangeBaseInput.value;
    const base = parseFloat(triangeBaseText)
    console.log(base);

    // --- get triangle height---
    const triangleHeightInput = document.getElementById('triangle-height');
    // console.log(triangeHeightInput);
    const triangleHeightText = triangleHeightInput.value;
    // console.log(triangeHeightText);
    const height = parseFloat(triangleHeightText)
    console.log(height);
}