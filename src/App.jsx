import React from "react";


function App(){
    let greeting="";
    let curDate=new Date();
    let curHours=curDate.getHours();
    const cssStyle={};
    if(curHours>=1 && curHours<12){
        greeting="Good Morning";
        cssStyle.color="green";
    }
    else if(curHours>=12 && curHours<19){
        greeting="Good Afternoon";
        cssStyle.color="orange";
    }
    else{
        greeting="Good night";
        cssStyle.color="blue";
    }
    return(
        <>
        <div>
        <h1>Hello Friends, <span style={cssStyle}>{greeting}</span></h1>
        </div>
        </>
    );

}

export default App;