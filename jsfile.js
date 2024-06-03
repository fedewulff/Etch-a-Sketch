

const button =document.querySelector(`.button`);
const container=document.querySelector(`.container`);
container.style.display=`flex`;
container.style.padding=`5px`;
container.style.justifyContent=`center`
//container.style.border=`2px solid green`


button.addEventListener(`click`,function(){
    
    let number = prompt `choose number between 0 and 99 to create a grid`
    console.log(typeof(number))
    
    if(number>=100 || number < 0){
        alert  `Number must be between 0 and 99`  
        return; 
    }

    if(number==false){
        alert  `Please enter a number`
        return;    
    }

    container.textContent = ``


    for(x=1; x<=number; x++){
        const row = document.createElement(`div`);
        // row.classList.add(`row`);
        // row.textContent = x + `i`;
        // row.style.border=`1px solid red`
        // row.style.width=`${400/number}px`
        // row.style.height= `${400/number}px`
        // row.style.border =`1px solid red`
        // row.style.marginBottom=`1rem`
        container.appendChild(row);
        
        for(y=0; y<number; y++){
            const column = document.createElement(`div`);
            column.classList.add(`column`)
            // column.textContent = y + `i`;
            column.style.width=`${400/number}px`
            column.style.height= `${400/number}px`
            column.style.margin=`0.2rem 0.2rem 0 0`
            column.style.border =`1px solid blue`
            //column.setAttribute(`style`,`width:30px;height:30px;margin:0.2rem 0.2rem;border :1px solid blue`)
            row.appendChild(column)



            function randomColor(){
                const array = [0,1,2,3,4,5,6,7,8,9,`A`,`B`,`C`,`D`,`E`,`F`];
                let background = ``;
                for(let i=0; i<6; i++){
                    background = background + array[Math.floor(Math.random()*16)];
                }
                return `#${background}`
            }
            //let color = randomColor();

            //column.style.borderColor= randomColor();
            
            // function darkSquare(){
            //     const darkening = [0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1]
            //     let colorDark = 0
            //     for ( let c=0; c<darkening.length; c++){
            //          colorDark=darkening[c];
            //          console.log(colorDark)
            //     }
            // }
           
            const darkening = [0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1]
            let opac = darkening[Math.floor(Math.random()*darkening.length)]
            console.log(opac)

            column.addEventListener(`mouseenter`,(event)=>{
                event.target.style.opacity = opac;
                event.target.style.backgroundColor = randomColor();
                setTimeout(function(){
                    event.target.style.backgroundColor = ``;
                    event.target.style.opacity=``;
                },800) 
            })
            // column.addEventListener(`mouseout`,(event)=>{
            //     event.target.style.backgroundColor = ""; 
            // })
            
        }
    }
    


}); 



