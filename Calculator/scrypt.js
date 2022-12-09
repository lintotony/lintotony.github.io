function buttonClick(val){
    document.getElementById("screen").value+=val
}

function buttonClear(){
    document.getElementById("screen").value=""
}

function buttonEqual(){
    var text=document.getElementById("screen").value
    var result=eval(text)
    document.getElementById("screen").value=result
}

function backClick(){
    document.getElementById("screen").value=document.getElementById("screen").value.slice(0,-1)
}

let bracketSwitch = false
function buttonPara(){
        var para
        if(!bracketSwitch){
            para = "("
        } else {
            para = ")"
        }
        bracketSwitch = !bracketSwitch
        document.getElementById("screen").value+=para
    }
