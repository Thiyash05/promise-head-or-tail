//Toss Head Or Tail

let a=prompt("enter head or tail");

let res=new Promise((resolve,reject)=>{
	if(a=="head"){
		resolve("Toss corrected")
	}
	else{
		reject("Toss incorrected")
	}
})

res.then((msg)=>{
	document.write(msg)
}).catch((err)=>{
	document.write(err)
})