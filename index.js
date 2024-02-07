
function updatetime(){
    
    const now= new Date();
    let hour= now.getHours().toString().padStart(2,0);
    const meridian = hour<12 ? 'AM': 'PM' ;
    hour = hour%12 || 12;
    hour=hour.toString().padStart(2,0);
    const min= now.getMinutes().toString().padStart(2,0);
    const sec=now.getSeconds().toString().padStart(2,0);
    const time = `${hour}:${min}:${sec} ${meridian}`;
    document.getElementById("incontainer").textContent=`${time}`

}

updatetime()
setInterval(updatetime,1000)