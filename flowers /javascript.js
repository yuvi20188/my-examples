
function generateReport(){
    const reportData = getReportData();
    const resultUl = document.getElementById("result");
    const flowers = reportData["flowers"];

    for (let i = 0; i < flowers.length; i++) {
        const flower = flowers[i];
        let flowerClass = "ok";
        if (flower.flower_was_too_dry == true){
            flowerClass = "dry";}
        else if (flower.flower_was_too_wet == true){
            flowerClass = "wet";
        }

    const flowerLi = document.createElement("li");
    const flowerNameSpan = document.createElement("span");
    const flowerLastWateredSpan = document.createElement("span");

    flowerLi.classList.add(flowerClass);
    flowerNameSpan.innerHTML = `${flower.name}`;
    flowerLastWateredSpan.innerHTML = `Date: ${flower.last_watered}`; 

    flowerLi.appendChild(flowerNameSpan);
    flowerLi.appendChild(flowerLastWateredSpan);
    
    resultUl.appendChild(flowerLi);
    }}


window.onload = async function () {
    // generateReport();
    // document.body.innerHTML = "<ul id = 'result'> </ul>";
    const buttonR = document.createElement("button");
    const resultUl = document.createElement("ul");
    resultUl.setAttribute("id", "result");
    buttonR.innerHTML = "Generate Report";
    const body = document.querySelector('body');
    body.appendChild(buttonR);
    body.appendChild(resultUl);

    buttonR.onclick = function (event){
        generateReport()
    }

}
