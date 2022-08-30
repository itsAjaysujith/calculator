function btclick(val){
    document.querySelector('#screen').value+=val
    
  }
//   if we are using id we dont need to use document.queryselector--just use idname.value

  function clearit(){
    document.querySelector("#screen").value=""
  }

  function Evaluateop(){
    var exp=document.querySelector('#screen').value
    var out=eval(exp)
    document.querySelector('#screen').value=out


  }

  function removeNum(){
    curr=document.querySelector('#screen').value
    document.querySelector('#screen').value=curr.slice(0,-1)

  }