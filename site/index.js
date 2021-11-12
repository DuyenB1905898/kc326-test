function rollpage(x, y){
	window.scrollTo(x, y);
}

// let a = document.getElementById('').value
// let b = prompt('Nhập giá trị của b')
// let c = prompt('Nhập giá trị của c')

function tinhtoan(){
	let a = document.getElementById("input-a").value;
	let b = document.getElementById("input-b").value;
	let c = document.getElementById("input-c").value;

	if(a != ''){
		document.getElementById("label-a").innerHTML=a
		document.getElementById("span-a").innerHTML=a
		}
	if(b != ''){
		document.getElementById("label-b").innerHTML=b
		document.getElementById("span-b").innerHTML=b
	}
	if(c != ''){
		document.getElementById("label-c").innerHTML=c
		document.getElementById("span-c").innerHTML=c
	}

	if(a !='' && b != '' && c != '' ){
		if(a == 0) {
	         
	        if(b == 0) {
	            if (c == 0) {
	            	document.getElementById("vosonghiem").classList ='ketqua'
	            	document.getElementById("vonghiem").classList ='opaque'
	            	document.getElementById("1nghiem").classList ='opaque'
	            	document.getElementById("2nghiem").classList ='opaque'
	            	document.getElementById("x1").innerHTML='X1 = ?'
	            	document.getElementById("x2").innerHTML='X2 = ?'
	                 
	            } else {
	                document.getElementById("vosonghiem").classList ='opaque'

	            	document.getElementById("vonghiem").classList ='ketqua'
	            	document.getElementById("1nghiem").classList ='opaque'
	            	document.getElementById("2nghiem").classList ='opaque'
	            	document.getElementById("x1").innerHTML='X1 = ?'
	            	document.getElementById("x2").innerHTML='X2 = ?'
	            }
	        } else {
	        	document.getElementById("vosonghiem").classList ='opaque'
	            document.getElementById("vonghiem").classList ='opaque'
	            document.getElementById("1nghiem").classList ='ketqua'
	            document.getElementById("2nghiem").classList ='opaque'
	            document.getElementById("x1").innerHTML='X1 = '+(-c/b)
	            document.getElementById("x2").innerHTML='X2 = ?'
	        }
	    } 
	    else if (a != 0) {
	        let delta = b*b - 4*a*c;
	        if(delta > 0) {
	            let x1 = (-b+Math.sqrt(delta))/(2*a);
	            let x2 = (-b-Math.sqrt(delta))/(2*a);
	            document.getElementById("vosonghiem").classList ='opaque'
	           	document.getElementById("vonghiem").classList ='opaque'
	            document.getElementById("1nghiem").classList ='opaque'
	            document.getElementById("2nghiem").classList ='ketqua'
	            document.getElementById("x1").innerHTML='X1 = '+x1
	            document.getElementById("x2").innerHTML='X2 = '+x2
	        } else if ( delta == 0) {
	        	let x = -b/2*a
	            document.getElementById("vosonghiem").classList ='opaque'
	           	document.getElementById("vonghiem").classList ='opaque'
	            document.getElementById("1nghiem").classList ='opaque'
	            document.getElementById("2nghiem").classList ='ketqua'
	            document.getElementById("x1").innerHTML='X1 = '+x
	            document.getElementById("x2").innerHTML='X2 = '+x
	        } else {
	            document.getElementById("vosonghiem").classList ='opaque'
	           	document.getElementById("vonghiem").classList ='ketqua'
	            document.getElementById("1nghiem").classList ='opaque'
	            document.getElementById("2nghiem").classList ='opaque'
	            document.getElementById("x1").innerHTML='X1 = ?'
	            document.getElementById("x2").innerHTML='X2 = ?'
	        }
	    }
	}

}

// function veptb2df(){
// 	new Chart(document.getElementById("line-chart"), {
// 		type: 'line',
// 		data: {
// 		  	labels:[-5,-4,-3,-2,-1,0,1,2,3,4,5],
// 		  	datasets: [{
// 		  		data: [,,-1,0,1,2,3,4,,],
// 		  		label: 'y=x+2',
//         		borderColor: "green",
//         		fill: false
// 		  	},
// 		  	{
// 		  		data: [,,,4,1,0,1,4,,,],
// 		  		label: 'y=x²',
//         		borderColor: "red",
//         		fill: false
// 		  	},{
// 		  		data: [,,,-1,3,1,-1,3,,,],
// 		  		label: "y=x³-3x²+1",
//         		borderColor: "blue",
//         		fill: false
// 		  	},{
// 		  		data: [0,0,0,0,0,0,0,0,0,0,0],
// 		  		label: 'Trục Ox',
//         		borderColor: "grey",
//         		fill: false
// 		  	}]
// 		},
// 		options: {
// 		    title: {
// 		      display: true,
// 		      text: 'Đồ thị của một số hàm số thông dụng'
// 		    }
// 		}
// 	});
// }

function vedothi(){
	var bac2 = document.getElementById("bac2").classList
	if (bac2 == 'onbtn'){
		let c = document.getElementById("input-c-dt").value
		document.getElementById('label-c-dt').innerHTML= c+'x²'
		let d = document.getElementById("input-d-dt").value
		document.getElementById('label-d-dt').innerHTML= d+'x¹'
		let e = document.getElementById("input-e-dt").value
		document.getElementById('label-e-dt').innerHTML= e+'x⁰'
		veptb2()
	}
	var bac3 = document.getElementById("bac3").classList
	if (bac3 == 'onbtn'){
		let b = document.getElementById("input-b-dt").value
		document.getElementById('label-b-dt').innerHTML= b+'x³'
		let c = document.getElementById("input-c-dt").value
		document.getElementById('label-c-dt').innerHTML= c+'x²'
		let d = document.getElementById("input-d-dt").value
		document.getElementById('label-d-dt').innerHTML= d+'x¹'
		let e = document.getElementById("input-e-dt").value
		document.getElementById('label-e-dt').innerHTML= e+'x⁰'
		veptb3()
	}
	var bac4 = document.getElementById("bac4").classList
	if (bac4 == 'onbtn'){
		let a = document.getElementById("input-a-dt").value
		document.getElementById('label-a-dt').innerHTML= a+'x⁴'
		let c = document.getElementById("input-c-dt").value
		document.getElementById('label-c-dt').innerHTML= c+'x²'
		let d = document.getElementById("input-d-dt").value
		document.getElementById('label-d-dt').innerHTML= d+'x¹'
		let e = document.getElementById("input-e-dt").value
		document.getElementById('label-e-dt').innerHTML= e+'x⁰'
		veptb4()
	}
}

function veptb2df(){
	document.getElementById("bac2").classList='onbtn'
	document.getElementById("bac3").classList='btn'
	document.getElementById("bac4").classList='btn'
	document.getElementById("sin").classList='btn'
	document.getElementById("cos").classList='btn'
	document.getElementById("input-a-dt").type='hidden'
	document.getElementById("label-a-dt").style.marginTop = '10px'
	document.getElementById("label-a-dt").style.background = 'grey'
	document.getElementById("input-b-dt").type='hidden'
	document.getElementById("label-b-dt").style.marginTop = '10px'
	document.getElementById("label-b-dt").style.background = 'grey'
	document.getElementById("input-c-dt").type='number'
	document.getElementById("label-c-dt").style.marginTop = '0'
	document.getElementById("label-c-dt").style.background = '#479B9D'
	document.getElementById("input-d-dt").type='number'
	document.getElementById("label-d-dt").style.marginTop = '0'
	document.getElementById("label-d-dt").style.background = '#479B9D'
	document.getElementById("input-e-dt").type='number'
	document.getElementById("label-e-dt").style.marginTop = '0'
	document.getElementById("label-e-dt").style.background = '#479B9D'

	let x = new Array(-5,-4,-3,-2,-1,0,1,2,3,4,5)
	let y = new Array()
	for(let i=0; i<x.length; i++)
	{
		y[i] = x[i]*x[i]
		if (y[i] > 4 || y[i] < -4)
			y[i] = null
	}

	new Chart(document.getElementById("line-chart"), {
		type: 'line',
		data: {
		  	labels: x,
		  	datasets: [
		  	{
		  		data: y,
		  		label: 'y=ax²+bx+c',
        		borderColor: "red",
        		fill: false
		  	}
		  	]
		},
		options: {
		    title: {
		      display: true,
		      text: 'Đồ thị của hàm số bậc 2'
		    }
		}
	});
}

function veptb2(){
	let c = document.getElementById("input-c-dt").value
	let d = document.getElementById("input-d-dt").value
	let e = document.getElementById("input-e-dt").value
	let x = new Array(-5,-4,-3,-2,-1,0,1,2,3,4,5)
	let y = new Array()
	for(let i=0; i<x.length; i++)
	{
		y[i] = x[i]*x[i]*c+x[i]*d+e
	}

	new Chart(document.getElementById("line-chart"), {
		type: 'line',
		data: {
		  	labels: x,
		  	datasets: [
		  	{
		  		data: y,
		  		label: 'y=ax²+bx+c',
        		borderColor: "red",
        		fill: false
		  	}
		  	]
		},
		options: {
		    title: {
		      display: true,
		      text: 'Đồ thị của hàm số bậc 2'
		    }
		}
	});
}

function veptb3df(){
	document.getElementById("line-chart").height='500'
	document.getElementById("bac2").classList='btn'
	document.getElementById("bac3").classList='onbtn'
	document.getElementById("bac4").classList='btn'
	document.getElementById("sin").classList='btn'
	document.getElementById("cos").classList='btn'
	document.getElementById("input-a-dt").type='hidden'
	document.getElementById("label-a-dt").style.marginTop = '10px'
	document.getElementById("label-a-dt").style.background = 'grey'
	document.getElementById("input-b-dt").type='number'
	document.getElementById("label-b-dt").style.marginTop = '0'
	document.getElementById("label-b-dt").style.background = '#479B9D'
	document.getElementById("input-c-dt").type='number'
	document.getElementById("label-c-dt").style.marginTop = '0'
	document.getElementById("label-c-dt").style.background = '#479B9D'
	document.getElementById("input-d-dt").type='number'
	document.getElementById("label-d-dt").style.marginTop = '0'
	document.getElementById("label-d-dt").style.background = '#479B9D'
	document.getElementById("input-e-dt").type='number'
	document.getElementById("label-e-dt").style.marginTop = '0'
	document.getElementById("label-e-dt").style.background = '#479B9D'
	let x = new Array(-5,-4,-3,-2,-1,0,1,2,3,4,5)
	let y = new Array()
	for(let i=0; i<x.length; i++)
	{
		y[i] = x[i]*x[i]*x[i]+(-3)*x[i]*x[i]+1
		if (y[i] > 4 || y[i] < -4)
			y[i] = null
	}

	new Chart(document.getElementById("line-chart"), {
		type: 'line',
		data: {
		  	labels: x,
		  	datasets: [
		  	{
		  		data: y,
		  		label: 'y=ax³+bx²+cx+d',
        		borderColor: "blue",
        		fill: false
		  	}
		  	]
		},
		options: {
		    title: {
		      display: true,
		      text: 'Đồ thị của hàm số bậc 3'
		    }
		}
	});
}

function veptb3(){
	let b = document.getElementById("input-b-dt").value
	let c = document.getElementById("input-c-dt").value
	let d = document.getElementById("input-d-dt").value
	let e = document.getElementById("input-e-dt").value
	let x = new Array(-5,-4,-3,-2,-1,0,1,2,3,4,5)
	let y = new Array()
	for(let i=0; i<x.length; i++)
	{
		y[i] = b*x[i]*x[i]*x[i]+c*x[i]*x[i]+d*x[1]+e
	}

	new Chart(document.getElementById("line-chart"), {
		type: 'line',
		data: {
		  	labels: x,
		  	datasets: [
		  	{
		  		data: y,
		  		label: 'y=ax³+bx²+cx+d',
        		borderColor: "blue",
        		fill: false
		  	}
		  	]
		},
		options: {
		    title: {
		      display: true,
		      text: 'Đồ thị của hàm số bậc 3'
		    }
		}
	});
}

function veptb4df(){
	document.getElementById("line-chart").height='500'
	document.getElementById("bac2").classList='btn'
	document.getElementById("bac3").classList='btn'
	document.getElementById("bac4").classList='onbtn'
	document.getElementById("sin").classList='btn'
	document.getElementById("cos").classList='btn'
	document.getElementById("input-a-dt").type='number'
	document.getElementById("label-a-dt").style.marginTop = '0'
	document.getElementById("label-a-dt").style.background = '#479B9D'
	document.getElementById("input-b-dt").type='hidden'
	document.getElementById("label-b-dt").style.marginTop = '10px'
	document.getElementById("label-b-dt").style.background = 'grey'
	document.getElementById("input-c-dt").type='number'
	document.getElementById("label-c-dt").style.marginTop = '0'
	document.getElementById("label-c-dt").style.background = '#479B9D'
	document.getElementById("input-d-dt").type='number'
	document.getElementById("label-d-dt").style.marginTop = '0'
	document.getElementById("label-d-dt").style.background = '#479B9D'
	document.getElementById("input-e-dt").type='number'
	document.getElementById("label-e-dt").style.marginTop = '0'
	document.getElementById("label-e-dt").style.background = '#479B9D'
	let x = new Array(-5,-4,-3,-2,-1,0,1,2,3,4,5)
	let y = new Array()
	for(let i=0; i<x.length; i++)
	{
		y[i] = x[i]*x[i]*x[i]*x[i] - 3*x[i]*x[i]
		if (y[i] > 4 || y[i] < -4)
			y[i] = null
	}

	new Chart(document.getElementById("line-chart"), {
		type: 'line',
		data: {
		  	labels: x,
		  	datasets: [
		  	{
		  		data: y,
		  		label: 'y=ax⁴+bx²+cx+c',
        		borderColor: "green",
        		fill: false
		  	}
		  	]
		},
		options: {
		    title: {
		      display: true,
		      text: 'Đồ thị của hàm số bậc 4'
		    }
		}
	});
}

function veptb4(){
	let a = document.getElementById("input-a-dt").value
	let c = document.getElementById("input-c-dt").value
	let d = document.getElementById("input-d-dt").value
	let e = document.getElementById("input-e-dt").value
	let x = new Array(-5,-4,-3,-2,-1,0,1,2,3,4,5)
	let y = new Array()
	for(let i=0; i<x.length; i++)
	{
		y[i] = a*x[i]*x[i]*x[i]*x[i] + c*x[i]*x[i] + d*x[i] + e
	}

	new Chart(document.getElementById("line-chart"), {
		type: 'line',
		data: {
		  	labels: x,
		  	datasets: [
		  	{
		  		data: y,
		  		label: 'y=ax⁴+bx²+cx+c',
        		borderColor: "green",
        		fill: false
		  	}
		  	]
		},
		options: {
		    title: {
		      display: true,
		      text: 'Đồ thị của hàm số bậc 4'
		    }
		}
	});
}

function vesin(){
	document.getElementById("line-chart").height='250'
	document.getElementById("bac2").classList='btn'
	document.getElementById("bac3").classList='btn'
	document.getElementById("bac4").classList='btn'
	document.getElementById("sin").classList='onbtn'
	document.getElementById("cos").classList='btn'
	document.getElementById("input-a-dt").type='hidden'
	document.getElementById("label-a-dt").style.marginTop = '10px'
	document.getElementById("label-a-dt").style.background = 'grey'
	document.getElementById("input-b-dt").type='hidden'
	document.getElementById("label-b-dt").style.marginTop = '10px'
	document.getElementById("label-b-dt").style.background = 'grey'
	document.getElementById("input-c-dt").type='hidden'
	document.getElementById("label-c-dt").style.marginTop = '10px'
	document.getElementById("label-c-dt").style.background = 'grey'
	document.getElementById("input-d-dt").type='hidden'
	document.getElementById("label-d-dt").style.marginTop = '10px'
	document.getElementById("label-d-dt").style.background = 'grey'
	document.getElementById("input-e-dt").type='hidden'
	document.getElementById("label-e-dt").style.marginTop = '10px'
	document.getElementById("label-e-dt").style.background = 'grey'
	let x = new Array(-4,-3,-2,-1,0,1,2,3,4)
	let y = new Array(0,1,0,-1,0,1,0,-1,0)

	new Chart(document.getElementById("line-chart"), {
		type: 'line',
		data: {
		  	labels: x,
		  	datasets: [
		  	{
		  		data: y,
		  		label: 'y=sinx',
        		borderColor: "green",
        		fill: false
		  	}
		  	]
		},
		options: {
		    title: {
		      display: true,
		      text: 'Đồ thị của hàm sin'
		    }
		}
	});
}

function vecos(){
	document.getElementById("line-chart").height='250'
	document.getElementById("bac2").classList='btn'
	document.getElementById("bac3").classList='btn'
	document.getElementById("bac4").classList='btn'
	document.getElementById("sin").classList='btn'
	document.getElementById("cos").classList='onbtn'
	document.getElementById("input-a-dt").type='hidden'
	document.getElementById("label-a-dt").style.marginTop = '10px'
	document.getElementById("label-a-dt").style.background = 'grey'
	document.getElementById("input-b-dt").type='hidden'
	document.getElementById("label-b-dt").style.marginTop = '10px'
	document.getElementById("label-b-dt").style.background = 'grey'
	document.getElementById("input-c-dt").type='hidden'
	document.getElementById("label-c-dt").style.marginTop = '10px'
	document.getElementById("label-c-dt").style.background = 'grey'
	document.getElementById("input-d-dt").type='hidden'
	document.getElementById("label-d-dt").style.marginTop = '10px'
	document.getElementById("label-d-dt").style.background = 'grey'
	document.getElementById("input-e-dt").type='hidden'
	document.getElementById("label-e-dt").style.marginTop = '10px'
	document.getElementById("label-e-dt").style.background = 'grey'
	let x = new Array(-4,-3,-2,-1,0,1,2,3,4)
	let y = new Array(1,0,-1,0,1,0,-1,0,1)

	new Chart(document.getElementById("line-chart"), {
		type: 'line',
		data: {
		  	labels: x,
		  	datasets: [
		  	{
		  		data: y,
		  		label: 'y=cosx',
        		borderColor: "green",
        		fill: false
		  	}
		  	]
		},
		options: {
		    title: {
		      display: true,
		      text: 'Đồ thị của hàm Cos'
		    }
		}
	});
}

function reload(){
	document.getElementById("input-a").value=''
	document.getElementById("input-b").value=''
	document.getElementById("input-c").value=''
	document.getElementById("label-a").innerHTML='Hệ số a'
	document.getElementById("label-b").innerHTML='Hệ số b'
	document.getElementById("label-c").innerHTML='Hệ số c'
	document.getElementById("span-a").innerHTML='a'
	document.getElementById("span-b").innerHTML='b'
	document.getElementById("span-c").innerHTML='c'
	document.getElementById("vosonghiem").classList ='opaque'
	document.getElementById("vonghiem").classList ='opaque'
	document.getElementById("1nghiem").classList ='opaque'
	document.getElementById("2nghiem").classList ='opaque'
	document.getElementById("x1").innerHTML='X1 = ?'
	document.getElementById("x2").innerHTML='X2 = ?'
}


