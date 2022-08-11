const _search=document.getElementById("search")
const _grid=document.getElementsByClassName("grid")[0]
window.addEventListener("load",daynightmode)
_search.addEventListener("keydown", function(event){
    console.log(event)
    if(event.key==="Enter"){
        loadimg()
    }
})

function loadimg(){
    removeimg()

    const _url="https://api.unsplash.com/search/photos/?query="+_search.value+"&per_page=9&client_id=RSzM83D5_iJFgXKZJo_SkaHKfRv5IGNqLX20Fhr4oPA"
    fetch(_url)
    .then(Response=>{
        if(Response.ok){
            return Response.json()
        }
        else{
           alert(Response.status)     
        }
    })
    .then(data=>{
        const _imgnode=[]
        for(let i =0 ; i< data.results.length;i++){
            _imgnode[i]=document.createElement("div")
            _imgnode[i].className="img"
            _imgnode[i].style.backgroundImage="url("+data.results[i].urls.raw+")"
            _imgnode[i].addEventListener("dblclick",function(){
                window.open(data.results[i].links.download,"_blank")
            })
            _grid.appendChild(_imgnode[i])
        }
    })
}
function removeimg(){
    _grid.innerHTML=""
}
function daynightmode(){
    const _date=new Date()
    const _houre=_date.getHours()
    console.log(_houre)
    if(_houre=>7 && _houre<=19){
        document.body.style.backgroundColor="whitesmoke"
        document.body.style.color="black"
    }
    else{
        document.body.style.backgroundColor="black"
        document.body.style.color="#fff"
    }
}