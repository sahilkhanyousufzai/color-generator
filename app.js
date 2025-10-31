const generateColorBtn = document.querySelector(".generate-color");
const hexaCodeSpan = document.querySelectorAll(".hexa-code");
const colorDiv = document.querySelectorAll(".color");
const copyBtn = document.querySelectorAll(".copy-btn");

// Array for storing the colors hexa Code
let colors = [];


const generateColor = ()=>{
    let colorHexaCode = "#";
    let hexaCode = "0123456789ABCDEF";

    for(let i =0; i<6; i++){
        colorHexaCode +=`${hexaCode[Math.floor(Math.random() * hexaCode.length)]}`;
    }

    return colorHexaCode;
};


// Storing the colors in array
const storeColorInArray = ()=>{
    // storing 5 color
    colors = [];
    for(let i =0; i<5;i++){
        let getColor = generateColor();
        colors.push(getColor);
    }

};

const changeColor = () =>{
    // storing the color in array
    storeColorInArray(); 
    
    hexaCodeSpan.forEach((elements, index) =>{
        elements.textContent = colors[index];
    });

    colorDiv.forEach((element,index) =>{
        element.style.backgroundColor = colors[index];
    })
};

const attachCopyEvents = (colorDiv)=>{
colorDiv.forEach((element,index)=>{
    element.addEventListener("click", ()=>{
        const hexCode = hexaCodeSpan[index].textContent;

        navigator.clipboard.writeText(hexCode).then(()=>{

            copyBtn[index].classList.remove("far","fa-copy");
            copyBtn[index].classList.add("fas","fa-check");
            setTimeout(()=>{
            copyBtn[index].classList.remove("fas","fa-check");
            copyBtn[index].classList.add("far","fa-copy");
            }, 1500)
        }).catch((err)=>{
            alert("Can not copy the Color code!")
        });
        })
    });
}



// calling function 
attachCopyEvents(colorDiv);
attachCopyEvents(copyBtn);
generateColorBtn.addEventListener("click", changeColor);
