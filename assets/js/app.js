let cl = console.log;


let data = document.getElementById('googleCard')
let searchBox = document.getElementById('search')
let selectType = document.getElementById('all')

function templating(arr){
    let result = '';
    arr.forEach(ele => {
         result += `
         <div class="col-md-3 mb-5">
         <div class="card">
             <div class="card-body c-body">
                 <div class="hard">
                     <h2 class="card-heading-1 ${hardColor(ele.type)}">${ele.type}</h2>
                 </div>
                     <h2 class="card-heading-2 mb-5 mt-4">${ele.name}</h2>
                     <p class="date mt-4">from ${ele.dateOpen} to ${ele.dateClose}</p>
                     <p class="para">${ele.description}</p>
                     <a href="${ele.link}"target="_blank"><button class="btn btn-info" value="detail" type="detail">Details</button></a>
             </div>
         </div>
     </div>
         
         `
    })
    data.innerHTML = result;

}
templating(database)



function onkeyup(e){
    let searchCard = e.target.value;
    let filterDb = database.filter((db) => db.name.toLocaleLowerCase().includes(searchCard))
    templating(filterDb)
    cl(filterDb,"triger")
}

function hardColor(color){
    if(color == 'hardware'){
        return 'blue'
    }else if(color == 'app'){
        return 'orange'
    }else if(color == 'service'){
        return 'green'
    }
}

function onChangeType(item){
   // cl(item,"change")
   let selectItem = item.target.value;
   let selectType = database.filter(e => e.type === selectItem)
   templating(selectType)
}


searchBox.addEventListener("keyup",onkeyup)
selectType.addEventListener("change",onChangeType)