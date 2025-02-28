//your JS code here. If required.
const Form=document.querySelector("#form");
Form.addEventListener('submit',(e)=>{
	e.preventDefault();
	const Age=document.querySelector('#age').value;
	const Name=document.querySelector('#name').value.trim();

	if(!Age || !Name){
		alert("Please enter valid details.");
		return;
	}

	new Promise((resolve,reject)=>{
		setTimeout(()=>{
			if(Age>18){
				resolve(`Welcome, ${Name}. You can vote.`)
			}
			else{
				reject(`Oh sorry ${name}. You aren't old enough.`)
			}
		},4000)
	}).then((message)=>alert(message)).catch((message)=>alert(message));

	
})