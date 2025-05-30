//Prevent right click
document.oncontextmenu = () =>{
    alert("চুরি করা মহাপাপ তাই সাবধান।🚫 কোড লাগলে আমার সাথে যোগাযোগ করেন")
    return false
}

//inspact off

document.onkeydown = e =>{
//PreventF12Key
if(e.key =="F12"){
    alert("Dont Try To Inspect Element")
    return false
}
//Prevent showing page sources by ctrl+U
if(e.ctrlKey && e.key == "u"){
alert("Dont try to view page sources")
return false

}
//Prevent copying anythin frome the page
if(e.ctrlKey && e.key =="c") {
    alert("Dont try to copy page element")
    return false
}
    //Prevent past anything to other sources
    if(e.ctrlKey && e.key == "v"){
        alert("Dont try to past anything to other page sources")
        return false
    }



}