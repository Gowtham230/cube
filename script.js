const boxContainer = document.getElementById("tablebox");

let data = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]

for (let i=0;i<data.length;i++){

    

    let row = boxContainer.insertRow();

    for(let j=0;j<data[i].length;j++){

        let assign = row.insertCell();
        assign.innerHTML = data[i][j];
    }
}