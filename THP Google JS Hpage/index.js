function hidePopup(){
	// alert("Ne te connecte donc pas finalement..")
	document.getElementById("buttonhamza").style.display="none";
	document.getElementById("panel").style.display="block";
  // document.body.style.backgroundColor = "red"; 
   }

function showPopup(){
	alert("popcorn")
	document.getElementById("buttonhamza").style.display="block";
	document.getElementById("panel").style.display="none";
  // document.body.style.backgroundColor = "red";
   }


function jaidelachance(){
	let text = "jaidelachance"
alert(text);
text = text.replace (/ /g, "+");
alert(text);
}


function updateInput(){
	let text = document.getElementById("google").value;
	alert(text);
	text = text.replace(/ /g, "+");
alert(text);
}