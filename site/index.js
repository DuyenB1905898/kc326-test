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

function vedothi(){
	new Chart(document.getElementById("line-chart"), {
		type: 'line',
		data: {
		  	labels:[-5,-4,-3,-2,-1,0,1,2,3,4,5],
		  	datasets: [{
		  		data: [,,-1,0,1,2,3,4,,],
		  		label: 'y=x+2',
        		borderColor: "green",
        		fill: false
		  	},
		  	{
		  		data: [,,,4,1,0,1,4,,,],
		  		label: 'y=x²',
        		borderColor: "red",
        		fill: false
		  	},{
		  		data: [,,,-1,3,1,-1,3,,,],
		  		label: "y=x³-3x²+1",
        		borderColor: "blue",
        		fill: false
		  	},{
		  		data: [0,0,0,0,0,0,0,0,0,0,0],
		  		label: 'Trục Ox',
        		borderColor: "grey",
        		fill: false
		  	}]
		},
		options: {
		    title: {
		      display: true,
		      text: 'Đồ thị của một số hàm số thông dụng'
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

