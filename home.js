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


 


//error function
/*
	var usernames = document.getElementById("username");
	var passwords = document.getElementById("password");
	var errors = document.getElementById("error");
	
function validated() {	
	if (usernames.value.length < 3) {
		errors.style.display = "block";
		
	
	} 
	if (passwords.value.length < 3) {
		errors.style.display = "block";
		
	
	} 
}
/*const name = document.getElementById('username');
const pass = document.getElementById('password');
const form = document.getElementById('form');
const errors = document.getElementById('error');

form.addEventListener('log', (e) => {
	let messages = []
	if (name.value === "" || name.value == null) {
		errors.style.display = "block";
		}
	}
}
/*
var usernames = document.forms['form']['username'];
var passwords = document.forms['form']['password'];

var errors = document.getElementById("error");

function validated() {
	if (usernames.value.length < 3) {
		errors.style.display = "block";
		
		return false;
	} 
		
	
}*/