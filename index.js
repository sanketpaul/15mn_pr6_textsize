let sanket=()=>{
    if(document.body.scrollTo>100||document.documentElement.scrollTop>100){
        document.body.style.background='red'
        document.getElementsByTagName('div')[0].style.fontSize='200px'
    }
    else{
        document.getElementsByTagName('div')[0].style.fontSize='100px'
        document.body.style.background='blue'
    }
    
}
window.onscroll=function(){
    sanket()
}