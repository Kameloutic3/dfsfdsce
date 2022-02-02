
document.querySelector("button.add").addEventListener("click", handleAdd);

document.querySelector("button.sort").addEventListener("click", handleSort);

document.querySelector(".close").addEventListener("click", handleClose);

let group = [];
let arrayCheck = [];
let html = '';

function handleAdd(){
        const title = document.querySelector("input[name='title']").value;
        const body = document.querySelector("textarea").value;

        if(title.trim() !== '' && body.trim() !== ''){
            addItem( {title,body});
                if(group.length > 0){
                    document.querySelector(".container").style.display = "none";
                    document.querySelector(".modal").style.display = "flex";
                    setTimeout(()=>{
                        document.querySelector(".modal").style.opacity = "1";
                }, 70);
            }
        }
}

function handleSort(){
    arrayCheck = group;
    for(let i = 0 ; i < 9999 ; i++){
        for(let j = 0 ; j < group.length ; j++){
            let index  = Math.floor(Math.random() * group.length);
            let troca = group[j];
            group[j] = group[index];
            group[index] = troca;
        }
    }

    html = '';
    for(let {title, body} of group){
        html += 
            `
                <tr> 
                    <td class="title">${title}</td>
                    <td class="body">${body}</td>
                </tr>
            `
    }
    document.querySelector("table").innerHTML = html;
}


function addItem(item){
    document.querySelector("input[name='title']").value = '';
    document.querySelector("textarea").value = '';
    group.push(item);
    html = '';

    for(let {title, body} of group){
        html += 
            `   
                <tr> 
                    <td class="title">${title}</td>
                    <td class="body">${body}</td>
                </tr>
            `
        
    }
    document.querySelector("table").innerHTML = html;
}

function handleClose(){
    setTimeout(()=>{
        document.querySelector(".modal").style.opacity = "0.5";
    }, 70);
    document.querySelector(".modal").style.display = "none";
    document.querySelector(".container").style.display = "flex";
   
}

document.querySelector(".view").onclick = ()=>{
    document.querySelector(".container").style.display = "none";
    document.querySelector(".modal").style.display = "flex";
    setTimeout(()=>{
        document.querySelector(".modal").style.opacity = "1";
    }, 70);
}

document.querySelector(".clear").onclick = ()=>{
    document.querySelector("table").innerHTML = '';
    html = '';
    while(group.length){
        group.pop();
    }
}