//side bar function
function openNav() {
	document.getElementById("allsidebar").style.width = "300px";
	
}
function closeNav() {
	document.getElementById("allsidebar").style.width = "0";
}

//show password function
function myFunction() {
	var show = document.getElementById("passwords");
	if (show.type === 'password') {
		show.type = "text";
	} else {
		show.type = "password";
	}
}

//* USERNAME AND PASSWORD
function valid() {
	var name = document.getElementById("username").value;
	var pass = document.getElementById("passwords").value;
	
	if (name == "jbvillegas" && pass == "123456") {
		window.location.assign("Index.php");
		alert("Sign up Sucessfully");
	} else {
		alert("Sign up Failed, Please try again");
		return;
	}
}
