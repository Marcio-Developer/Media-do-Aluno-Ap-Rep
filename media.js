function media(){
    let nota1 = parseFloat (document.getElementById("nota1").value);
    let nota2 = parseFloat (document.getElementById("nota2").value);
  
    let media = ((nota1 + nota2)/2).toFixed(1) ;

    if(media >= 7)
      alert(`Média:${media} APROVADO!`);

    else 
    alert(`Média:${media} REPROVADO!`);
   }