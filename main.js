$('.filter').css('display','none')
$('#filters__charachter').css('display','flex')
$('.header__section__page').click(function(){
    $('.header__section__page').css('color','white')
    $(this).css('color','rgb(250, 81, 81)')
    $('.filter').css('display','none')
    $('#filters__charachter').css('display','flex')
    $('#prevBtn').css('display','flex')
    $('#nextBtn').css('display','flex')
    currentPage=1
    getPage(currentPage)
})


//Characters
$('#header__section__page__characters').click(function(){
    $('.container').css('display','none')
$('.charachters__container').css('display','flex')

})
let amountOfPages
let currentFiltres=''

let differentSpecies=[]
function getSpecies(page){
    fetch('https://rickandmortyapi.com/api/character/?page='+page)
        .then(response=>{
            return  response.json()
        })
        .then(data =>{
 
                for(let i=0;i<data.results.length;i++){
        let jval=differentSpecies.length
 
        let j=0
        let join=true
        while (j<=jval){
        if(data.results[i].species==differentSpecies[j]){
            join=false
        }
      
        j++;
    }
    if(join==true){
        differentSpecies.push(data.results[i].species)  
        $('.poup__charaachter__filters__filter__section__species').append('<option class="poup__charaachter__filters__filter__section__option" value="&species='+data.results[i].species+'">'+data.results[i].species+'</option>')
    }
}
        }) 
}

// fetch('https://rickandmortyapi.com/api/character/?page=2&name=rick&status=alive')
// .then(response=>{
//     return  response.json()
// })
// .then(data =>{
//     console.log(data)
// })



    function getPage(page){
        fetch('https://rickandmortyapi.com/api/character/?page='+page+currentFiltres)
        .then(response=>{
            return  response.json()
        })
        .then(data =>{
    console.log(data)

    amountOfPages=data.info.pages

    $('.charachters__container').empty('')
    for(let i=0;i<data.results.length;i++){

   

   $('.charachters__container').append('<div class="card"> <img class="avatar" src="'+data.results[i].image+'" alt="img"><div class="cardName">'+data.results[i].name+'</div><button class="infoBtn" id="'+data.results[i].id+'">info</button></div>')
    }
    $('.infoBtn').click(function(e){
        getCharavherById(e.target.id)
        setTimeout(function(){
            $('.poup__charachter__info').show(100)
            $('.wrap').css('filter','blur(5px)')
        },110)


    })
        }).catch((error) => {
            console.log(error)
            alert("There isn't any charachter ")
          });
    }
    getPage(1)

setTimeout(function(){
    for(let i =0;i<amountOfPages;i++){

        getSpecies(i)
    }
},100)




let currentPage=1
    $('#prevBtn').click(function(){
        if(currentPage>1){
            currentPage--
            getPage(currentPage)
        }

    })
    $('#nextBtn').click(function(){
        if(currentPage<amountOfPages){
            currentPage++
            getPage(currentPage)
        }
   

    })


    function getCharavherById(id){
        fetch('https://rickandmortyapi.com/api/character/'+id)
        .then(response=>{
            return  response.json()
        })
        .then(data =>{
    console.log(data)
    poup__img.src=data.image
    poup__name.innerText=data.name
    $('.poup__group__gender').html('Gender: '+data.gender)
    $('.poup__group__status').html('Status: '+data.status)
    $('.poup__group__location').html('Location: '+data.location.name)
    let episodeVal=''
    for(let i=0;i<data.episode.length;i++){
        let episode=data.episode[i]

        // console.log(episode.substring(episode.lastIndexOf('/')+1))
        episodeVal+=episode.substring(episode.lastIndexOf('/')+1)+', '
        if(i>8){
            episodeVal+='and more,'
            i=data.episode.length+1
        }
        $('.poup__episods__numbers').html(episodeVal.substring(0,episodeVal.lastIndexOf(',')))
   
    }

        })
    }
    // getCharavherById(6)

// fetch('https://rickandmortyapi.com/api/episode')
// .then(response=>{
//     return response.json()
// })
// .then(data=>{
//     console.log(data)
// })
$('#filters__charachter').click(function(){
console.log(differentSpecies)
    setTimeout(function(){
        $('.wrap').css('filter','blur(5px)')
        $('.poup__charaachter__filters').show(100)
    },110)

})
$('.poup__charachter__info').hide(0)
$('.poup__charaachter__filters').hide(0)
$('.poup__watchList').hide(0)
$('.wrap').click(function(){
    $('.wrap').css('filter','blur(0px)')
    $('.poup__charachter__info').hide(100)
    $('.poup__charaachter__filters').hide(100)
    $('.poup__episode__filter').hide(100)
    $('.poup__location__filter').hide(100)
    $('.poup__watchList').hide(100)

})
$('.poup__charaachter__filters__btn').click(function(){
    $('.poup__charaachter__filters').hide(100)
    $('.wrap').css('filter','blur(0px)')
    currentFiltres=poup__charaachter__filters__filter__section__status.value+poup__charaachter__filters__filter__section__gender.value+poup__charaachter__filters__filter__section__species.value
    console.log(currentFiltres)
    getPage(1)
    currentPage=1
})




//Episodes
let episodes__filtres=''
let amountOfPages__episodes;
let currentPage__episodes=1
$('#header__section__page__episodes').click(function(){
    $('.container').css('display','none')
$('.episode__container').css('display','flex')
$('.filter').css('display','none')
$('#filters__episode').css('display','flex')
currentPage__episodes=1
getEpisode(currentPage__episodes)

})
function getEpisode(page){
    fetch('https://rickandmortyapi.com/api/episode?page='+page+episodes__filtres)
    .then(response=>{
        return  response.json()
    })
    .then(data =>{
console.log(data)
amountOfPages__episodes=data.info.pages

$('.episode__container__table').empty('')
$('.episode__container__table').append('<tr class="episode__row"><th class="episode__row__val">Id</th><th class="episode__row__val">Episode</th><th class="episode__row__val">Name</th><th class="episode__row__val">Released</th><th class="episode__row__val">Characters</th></tr>')
for(let i=0;i<data.results.length;i++){



$('.episode__container__table').append('<tr class="episode__row"><td class="episode__row__val">'+data.results[i].id+'</td><td class="episode__row__val">  '+data.results[i].episode+'</td><td class="episode__row__val">'+data.results[i].name+'</td><td class="episode__row__val">'+data.results[i].air_date+'</td><td class="episode__row__val">'+data.results[i].characters.length+'</td></tr>')
}
}).catch((error) => {
    console.log(error)
    alert("There isn't any Episodes ")
  });
}
getEpisode(1)
$('#prevBtn').click(function(){
    if(currentPage__episodes>1){
        currentPage__episodes--
        getEpisode(currentPage__episodes)
    }

})
$('#nextBtn').click(function(){
   
    if(currentPage__episodes<amountOfPages__episodes){
 
        currentPage__episodes++
        getEpisode(currentPage__episodes)
    }

})
$('.poup__episode__filter').hide(0)

$('#filters__episode').click(function(){

setTimeout(function(){
    $('.poup__episode__filter').show(100)
    $('.wrap').css('filter','blur(5px)')
},110)
})
$('#apply__episodes').click(function(){
    $('.wrap').css('filter','blur(0px)')
    $('.poup__episode__filter').hide(100)
    episodes__filtres='&name='+poup__episode__filter__inp.value
    currentPage__episodes=1
    getEpisode(currentPage__episodes)

})



//Locations
let amountOfPages__locations;
let currentPage__locations=1
let filtres__locations=''

$('#header__section__page__locations').click(function(){
    $('.container').css('display','none')
$('.location__container').css('display','flex')
$('.filter').css('display','none')
$('#filters__locations').css('display','flex')
currentPage__locations=1
        getLocations(currentPage__locations)
// currentPage__episodes=1
// getEpisode(currentPage__episodes)

})



function getLocations(page){
    fetch('https://rickandmortyapi.com/api/location?page='+page+filtres__locations)
    .then(response=>{
        return  response.json()
    })
    .then(data =>{
console.log(data)
amountOfPages__locations=data.info.pages

$('.location__container__table').empty('')
$('.location__container__table').append(' <tr class="episode__row"><th class="episode__row__val episode__row__val__id">Id</th><th class="episode__row__val">Name</th><th class="episode__row__val">Type</th><th class="episode__row__val">Dimension</th><th class="episode__row__val">Residents</th></tr>')
for(let i=0;i<data.results.length;i++){



$('.location__container__table').append('<tr class="episode__row"><td class="episode__row__val">'+data.results[i].id+'</td><td class="episode__row__val">  '+data.results[i].name+'</td><td class="episode__row__val">'+data.results[i].type+'</td><td class="episode__row__val">'+data.results[i].dimension+'</td><td class="episode__row__val">'+data.results[i].residents.length+'</td></tr>')
}
}).catch((error) => {
    console.log(error)
    alert("There isn't any Location")
  });
}
getLocations(1)


$('#prevBtn').click(function(){
    if(currentPage__locations>1){
        currentPage__locations--
        getLocations(currentPage__locations)
    }

})
$('#nextBtn').click(function(){
   
    if(currentPage__locations<amountOfPages__locations){
 
        currentPage__locations++
        getLocations(currentPage__locations)
    }

})
$('.poup__location__filter').hide(0)
$('#filters__locations').click(function(){

    setTimeout(function(){
        $('.poup__location__filter').show(100)
        $('.wrap').css('filter','blur(5px)')
    },110)
    })


let differentTypes=[]
    function getTypes(page){
        fetch('https://rickandmortyapi.com/api/location?page='+page)
            .then(response=>{
                return  response.json()
            })
            .then(data =>{
     
                    for(let i=0;i<data.results.length;i++){
            let jval=differentTypes.length
     
            let j=0
            let join=true
            while (j<=jval){
            if(data.results[i].type==differentTypes[j]){
                join=false
            }
          
            j++;
        }
        if(join==true){
            differentTypes.push(data.results[i].type)  
            $('.poup__location__filters__filter__section__type').append('<option class="poup__charaachter__filters__filter__section__option" value="&type='+data.results[i].type+'">'+data.results[i].type+'</option>')
        }
    }
            }) 
    }
    setTimeout(function(){
        for(let i =0;i<amountOfPages__locations;i++){
    
            getTypes(i)
        }
        console.log(differentTypes)
    },100)

    let differentDimensions=[]
    function getDimensions(page){
        fetch('https://rickandmortyapi.com/api/location?page='+page)
            .then(response=>{
                return  response.json()
            })
            .then(data =>{
     
                    for(let i=0;i<data.results.length;i++){
            let jval=differentDimensions.length
     
            let j=0
            let join=true
            while (j<=jval){
            if(data.results[i].dimension==differentDimensions[j]){
                join=false
            }
          
            j++;
        }
        if(join==true){
            differentDimensions.push(data.results[i].dimension)  
            $('.poup__location__filters__filter__section__dimension').append('<option class="poup__charaachter__filters__filter__section__option" value="&dimension='+data.results[i].dimension+'">'+data.results[i].dimension+'</option>')
        }
    }
            }) 
    }
    setTimeout(function(){
        for(let i =0;i<amountOfPages__locations;i++){
    
            getDimensions(i)
        }
        console.log(differentDimensions)
    },100)

$('#apply__location').click(function(){
    $('.wrap').css('filter','blur(0px)')

    $('.poup__location__filter').hide(100)
    filtres__locations=poup__location__filters__filter__section__type.value+poup__location__filters__filter__section__dimension.value+'&name='+poup__location__filter__inp.value
    currentPage__locations=1
    getLocations(currentPage__locations)
})


//My watch list

$('#header__section__page__watchList').click(function(){

    $('.container').css('display','none')
    $('.myWatchList').css('display','flex')
    $('.filter').css('display','none')
    $('#add__myWatchList').css('display','flex')

        $('#prevBtn').css('display','none')
    $('#nextBtn').css('display','none')

})
$('#add__myWatchList').click(function(){
    setTimeout(function(){
        $('.poup__watchList').show(100)
        $('.wrap').css('filter','blur(5px)')
    },110)
})
// let delletedWord=DeletedByUser1234567890Hello
let arrayOfItem=JSON.parse(localStorage.getItem('arrayOfItem__LS')) || []

let arrayOfStatus=JSON.parse(localStorage.getItem('arrayOfStatus__LS'))  || []
console.log(arrayOfItem,arrayOfStatus)
for(let num=0;num<arrayOfItem.length;num++){
    if(arrayOfItem[num]==''){

    }else{
        $('.myWatchList').append('<div class="myWatchList__box" id="myWatchList__box'+num+'"><div class="myWatchList__box__text">'+arrayOfItem[num]+'</div><div class="myWatchList__box__btns"><img class="myWatchList__box__btns__btn myWatchList__box__btns__status" id="myWatchList__box__btns__status'+num+'" src="./img/tickBlack.png" alt=""> <img class="myWatchList__box__btns__btn myWatchList__box__btns__delete" id="myWatchList__box__btns__delete'+num+'" src="./img/basket.png" alt=""></div></div>')
        if(arrayOfStatus[num]=='disabled'){
            
            document.getElementById('myWatchList__box__btns__status'+num).src='./img/tickBlack.png'
            
     
           
            
        }else{
         
            document.getElementById('myWatchList__box__btns__status'+num).src='./img/tickGreen.png'
     
        
        }
    }
    $('.myWatchList__box__btns__status').click(function(e){
        
            
        let currentId=e.target.id.substring(30)
        console.log(currentId)
        // if((arrayOfStatus.length-currentId)%2==0){
            
        // }else{
            if(arrayOfStatus[currentId]=='disabled'){
                console.log(arrayOfStatus)
                arrayOfStatus[currentId]='enabled'
                console.log(e.target.id)
                document.getElementById(e.target.id).src='./img/tickGreen.png'
               
                
            }else{
                console.log(arrayOfStatus)
                document.getElementById(e.target.id).src='./img/tickBlack.png'
                arrayOfStatus[currentId]='disabled' 
            
            }
            localStorage.setItem('arrayOfItem__LS',JSON.stringify(arrayOfItem))
    localStorage.setItem('arrayOfStatus__LS',JSON.stringify(arrayOfStatus))
            e.stopImmediatePropagation();
            e.preventDefault();
        // }
       
      
    })
    $('.myWatchList__box__btns__delete').click(function(e){
        let currentId=e.target.id.substring(30)
        console.log(currentId)
        document.getElementById('myWatchList__box'+currentId).remove()
        arrayOfItem[currentId]=''
        arrayOfStatus[currentId]=''
        localStorage.setItem('arrayOfItem__LS',JSON.stringify(arrayOfItem))
    localStorage.setItem('arrayOfStatus__LS',JSON.stringify(arrayOfStatus))
    })
}
$('#apply__list').click(function(){
  
    if(poup__episode__list__inp.value.length>0){
        arrayOfItem.push(poup__episode__list__inp.value)
        arrayOfStatus.push('disabled')
        $('.wrap').css('filter','blur(0px)')
        $('.poup__watchList').hide(100)
        let num=arrayOfItem.length-1
        $('.myWatchList').append('<div class="myWatchList__box" id="myWatchList__box'+num+'"><div class="myWatchList__box__text">'+poup__episode__list__inp.value+'</div><div class="myWatchList__box__btns"><img class="myWatchList__box__btns__btn myWatchList__box__btns__status" id="myWatchList__box__btns__status'+num+'" src="./img/tickBlack.png" alt=""> <img class="myWatchList__box__btns__btn myWatchList__box__btns__delete" id="myWatchList__box__btns__delete'+num+'" src="./img/basket.png" alt=""></div></div>')
        poup__episode__list__inp.value=''
        localStorage.setItem('arrayOfItem__LS',JSON.stringify(arrayOfItem))
        localStorage.setItem('arrayOfStatus__LS',JSON.stringify(arrayOfStatus))
    }else{
        alert('Enter smt')
    }
    console.log(arrayOfItem,arrayOfStatus)
    $('.myWatchList__box__btns__status').click(function(e){
        
            
            let currentId=e.target.id.substring(30)
            console.log(currentId)
            // if((arrayOfStatus.length-currentId)%2==0){
                
            // }else{
                if(arrayOfStatus[currentId]=='disabled'){
                    console.log(arrayOfStatus)
                    arrayOfStatus[currentId]='enabled'
                    console.log(e.target.id)
                    document.getElementById(e.target.id).src='./img/tickGreen.png'
                   
                    
                }else{
                    console.log(arrayOfStatus)
                    document.getElementById(e.target.id).src='./img/tickBlack.png'
                    arrayOfStatus[currentId]='disabled' 
                
                }
                localStorage.setItem('arrayOfItem__LS',JSON.stringify(arrayOfItem))
        localStorage.setItem('arrayOfStatus__LS',JSON.stringify(arrayOfStatus))
                e.stopImmediatePropagation();
                e.preventDefault();
            // }
           
          
        })
        $('.myWatchList__box__btns__delete').click(function(e){
            let currentId=e.target.id.substring(30)
            console.log(currentId)
            document.getElementById('myWatchList__box'+currentId).remove()
            arrayOfItem[currentId]=''
            arrayOfStatus[currentId]=''
            localStorage.setItem('arrayOfItem__LS',JSON.stringify(arrayOfItem))
        localStorage.setItem('arrayOfStatus__LS',JSON.stringify(arrayOfStatus))
        })
      
})
