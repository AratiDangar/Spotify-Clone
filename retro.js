console.log('hey how are you?');




//initialize the variable
let Index;
let audioElement=new Audio('bade acche lagte hai.mp3');

 let mastersongname=document.getElementById('mastersongname')

let masterplay=document.getElementById('masterplay');
let bar=document.getElementById('bar');
let gift=document.getElementById('gift');



let songlist=Array.from(document.getElementsByClassName('songlist')); 


let songs=[
    {songname:"bade acche lagte hai",filePath:"bade acche lagte hai.mp3",coverPath:"ma.jpg"},
    {songname:"kya khoob lagti ho",filePath:"kya khoob lagti ho.mp3",coverPath:""},
    {songname:"likhe jo khat tuje",filePath:"likhe jo khat tuje.mp3",coverPath:""},
    {songname:"o mere dil ke chain",filePath:"o mere dil ke chain.mp3",coverPath:""},
    {songname:"pal pal dil ke pass",filePath:"pal pla dil ke pass.mp3",coverPath:""},
    {songname:"running up that hill",filePath:"running up that hill.mp3",coverPath:""}

]
/*songlist.forEach((element,i)=>{
    
element.getElementsByTagName('img')[0].src=songs[i].filePath;
})*/


//audioElement.play();
//listen to events
//handle play/pause click
masterplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gift.style.opacity=1;

        
    }
    else{
        audioElement.pause();
        masterplay.classList.add('fa-play-circle');
        masterplay.classList.remove('fa-pause-circle');
        gift.style.opacity=0;

    }
});

audioElement.addEventListener('timeupdate',()=>{

    //update seekbar


   progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    bar.value=progress;
});
 
bar.addEventListener('change',()=>{
    audioElement.currentTime=bar.value * audioElement.duration/100;
});
const makeAllPlayes=()=>{
    
    Array.from(document.getElementsByClassName('splay')).forEach((element)=>{
        element.classList.add('fa-play-circle');
        element.classList.remove('fa-pause-circle');
    })
 
 }
 


Array.from(document.getElementsByClassName('splay')).forEach((element)=>{
    element.addEventListener('click' ,(e)=>{
        
    
        makeAllPlayes();
        Index=parseInt(e.target.id);
        mastersongname.innerText=songs[Index].songname;
    
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');

    
        
        if(Index==0){
            audioElement.src=('bade acche lagte hai.mp3')}
    
     else if(Index==1){
            audioElement.src=('kya khoob lagti ho.mp3')
        }
else if(Index==2){
    audioElement.src= ('likhe jo khat tuje.mp3');
 
}
else if(Index==3){
    
 audioElement.src=('o mere dil ke chain.mp3');
}
else if(Index==4){
  
 audioElement.src=('pal pal dil ke pass.mp3');
 
}
else  {
   
 audioElement.src=('running up that hill.mp3');
}
    
 

        audioElement.currentTime=0;
        audioElement.play();
        gift.style.opacity=1;

        masterplay.classList.remove("fa-play-circle");
        masterplay.classList.add("fa-pause-circle");
        

    })}

    

   

)




document.getElementById('next').addEventListener('click',()=>{
    if(Index>9){
        Index=0
    }
    else{
        Index+=1;
    }
    if(Index==0){
        audioElement.src=('bade acche lagte hai.mp3')
    }
    else if(Index==1){
        audioElement.src=('kya khoob lagti ho.mp3')
    }
else if(Index==2){
audioElement.src= ('likhe jo khat tuje.mp3');

}
else if(Index==3){

audioElement.src=('o mere dil ke chain.mp3');
}
else if(Index==4){

audioElement.src=('pal pal dil ke pass.mp3');

}
else  {

audioElement.src=('running up that hill.mp3');
}

mastersongname.innerText=songs[Index].songname;

    audioElement.currentTime=0;
    audioElement.play();
    gift.style.opacity=1;

    masterplay.classList.remove("fa-play-circle");
    masterplay.classList.add("fa-pause-circle");


})
document.getElementById('previous').addEventListener('click',()=>{
    if(Index<=0){
        Index=0
    }
    else{
        Index-=1;
    }
    if(Index==0){
        audioElement.src=('bade acche lagte hai.mp3')
    }
    else if(Index==1){
        audioElement.src=('kya khoob lagti ho.mp3')
    }
else if(Index==2){
audioElement.src= ('likhe jo khat tuje.mp3');

}
else if(Index==3){

audioElement.src=('o mere dil ke chain.mp3');
}
else if(Index==4){

audioElement.src=('pal pal dil ke pass.mp3');

}
else  {

audioElement.src=('running up that hill.mp3');
}


mastersongname.innerText=songs[Index].songname;
    audioElement.currentTime=0;
    audioElement.play();
    gift.style.opacity=1;

    masterplay.classList.remove("fa-play-circle");
    masterplay.classList.add("fa-pause-circle");


})