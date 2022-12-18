const file = document.querySelector("#file")
file.addEventListener("change", function() {
  const reader = new FileReader()
  reader.addEventListener("load", () => {
    document.querySelector("#img").src = reader.result
  })
  reader.readAsDataURL(this.files[0]);
})



document.getElementById('clk').addEventListener('click',()=>{

	const img = document.getElementById('img');


  mobilenet.load().then(model => {
    
    model.classify(img).then(predictions => {
      console.log('Predictions: ');
      console.log(predictions[0]);
	  document.getElementById('t').textContent=predictions[0].className;
    });
  });
})