	function refreshPage(){
    	window.location.reload();
	} 
	function gioithieu(){
		var x = '<b>Tên học phần: </b> <i>Công nghệ IoT và Ứng Dụng (IoT Technology and Applications)</i><br><b>- Mã số học phần: </b> <i>KC326</i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>- Khoa: </b><i>Công nghệ</i><br><b>- Số tín chỉ học phần: </b><i>02 tín chỉ</i> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>- Bộ môn: </b><i>Tự động hóa</i><br><b>- Số tiết học phần: </b><i>30 tiết lí thuyết và 30 tiết tự học&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</i><p style="font-size: 16px; text-align: justify;">IoT là công nghệ ứng dụng Internet để kết nối các thiết bị phần cứng theo nguyên lý không dây và tốc độ cao. Học phần này được xây dựng giúp sinh viên ngành Tự Động Hóa và Cơ Điện Tử trải nghiệm nguyên lý, thiết kế, kế nối, lập trình, thu thập dữ liệu thông qua giao diện web được lập trình theo khả năng của từng sinh viên qua các ứng dụng cơ bản được giới thiệu và hướng dẫn trên lớp của giảng viên.</p>'
		document.getElementById('noidung').innerHTML= x
		document.getElementById('mid').style.marginTop= '7%'
		document.getElementById('btn').innerHTML='Quay lại trang chủ'
		document.getElementById('dropdown-content').innerHTML= ''
	}

	function muctieu(){
		var x = '<table><thead><tr><th class="smallcoll">Mục tiêu</th><th>Nội dung mục tiêu</th><th class="smallcoll">CĐR<br>CTĐT</th></tr></thead><tbody><tr><td class="smallcoll">4.1</td><td class="bigcoll">Trình bày được nguyên lý cơ bản về IoT, nguyên lý thiết kế, kết nối và truyền dữ liệu trong các ứng dụng IoT trong các lĩnh vực điện tử.</td><td class="smallcoll">2.1.1b;<br>2.1.3a</td></tr><tr><td class="smallcoll">4.2</td><td class="bigcoll">Thực hiện được một hệ thống cơ điện tử có ứng dụng công nghệ IoT cơ bản đáp ứng được yêu cầu thực tế có quan tâm đến tác động của các giải pháp IoT trong cơ điện tử đối với một trong hai lĩnh vực sản xuất nông nghiệp và thủy sản.</td><td class="smallcoll">2.1.2a;<br>2.2.1a;<br>2.2.1b</td></tr><tr><td class="smallcoll">4.3</td><td class="bigcoll">Có khả năng nhận ra được trách nhiệm về nghề nghiệp và đạo đức trong sản phẩm đã thiết kế, đánh giá được tác động của sản phẩm thiết kế đến môi trường và xã hội.</td><td class="smallcoll">2.1.3b;<br>2.3a</td></tr><tr><td class="smallcoll">4.4</td><td class="bigcoll">Có khả năng làm việc và giao tiếp hiệu quả trong nhóm chuyên ngành, tham khảo được các tài liệu chuyên ngành, hình thành ý thức và năng lực học tập suốt đời.</td><td class="smallcoll">2.2.2a;<br>2.2.2b;<br>2.3b</td></tr></tbody></table>'
		document.getElementById('noidung').innerHTML= x
		document.getElementById('mid').style.marginTop= '2%'
		document.getElementById("header2").innerHTML=''
		document.getElementById("header1").innerHTML='Mục tiêu của học phần'
		document.getElementById('btn').innerHTML='Quay lại trang chủ'
		document.getElementById('dropdown-content').innerHTML= ''
	}

	function chuandaura(){
		var x = '<table> <thead> <tr> <th class="smallcoll">CĐR<br>HP</th> <th>Nội dung chuẩn đầu ra</th> <th>Mục tiêu</th> <th class="smallcoll">CĐR<br>CTĐT</th> </tr> </thead> <tbody> <tr> <td class="smallcoll"></td> <td class="bigcoll"><b>Kiến thức</b></td> <td class="smallcoll"></td> <td class="smallcoll"></td> </tr> <tr> <td class="smallcoll">CO1</td> <td class="bigcoll">Hiểu được các nguyên lý về điện - điện tử, điều khiển tự động và lập trình để thực hiện các ứng dụng IoT trong lĩnh vực kỹ thuật điện tử</td> <td class="smallcoll">4.1</td> <td class="smallcoll">2.1.1b</td> </tr> <tr> <td class="smallcoll">CO2</td> <td class="bigcoll">Trình bảy được đặc tính của một hệ thống cơ điện hoặc một bộ phận của hệ thống cơ điện tử cơ bản có ứng dụng công nghệ IoT</td> <td class="smallcoll">4.2</td> <td class="smallcoll">2.1.3a</td> </tr> <tr> <td class="smallcoll"></td> <td class="bigcoll"><b>Kỹ năng</b></td> <td class="smallcoll"></td> <td class="smallcoll"></td> </tr> <tr> <td class="smallcoll">CO3</td> <td class="bigcoll">Thực hiện được các mạch điện tử, kỹ thuật lập trình cơ bản đã được phát triển trong công nghệ IoT với một số hiệu chỉnh nhỏ để phù hợp hệ thống đang thiết kế</td> <td class="smallcoll">4.2</td> <td class="smallcoll">2.2.2a</td> </tr> <tr> <td class="smallcoll">CO4</td> <td class="bigcoll">Thực hiện được một hệ thống cơ điện tử có ứng dụng công nghệ IoT cơ bản (mạch điện, chương trình, mô hình (nếu có) và tiến hành thí nghiệm, phân tích đánh giá số liệu) đáp ứng được yêu cầu thực tế có quan tâm đến các tác động của các giải pháp IoT trong cơ điện tử đối với một trong hai hai lĩnh vực sản xuất nông nghiệp và thủy sản</td> <td class="smallcoll">4.2</td> <td class="smallcoll">2.1.3a;<br>2.2.1a;<br>2.2.1b</td> </tr> <tr> <td class="smallcoll">CO5</td> <td class="bigcoll">Hoạt động và giao tiếp hiệu quả trong nhóm chuyên ngành để đạt được mục tiêu của nhóm</td> <td class="smallcoll">4.4</td> <td class="smallcoll">2.2.2a;<br>2.2.2b</td> </tr> <tr> <td class="smallcoll"></td> <td class="bigcoll"><b>Thái độ/Mức độ tự chủ và trách nhiệm</b></td> <td class="smallcoll"></td> <td class="smallcoll"></td> </tr> <tr> <td class="smallcoll">CO6</td> <td class="bigcoll">Nhận ra được trách nhiệm về đạo đức, nghề nghiệp trong các giải pháp kỹ thuật cơ điện tử; đánh giá các giải pháp có xem xét tác động của nó đến môi trường và xã hội</td> <td class="smallcoll">4.3</td> <td class="smallcoll">2.3a</td> </tr> <tr> <td class="smallcoll">CO7</td> <td class="bigcoll">Thể hiện thái độ tự học và áp dụng kiến thức mới khi cần thiết</td> <td class="smallcoll">4.4</td> <td class="smallcoll">2.3b</td> </tr> </tbody> </table>'
		document.getElementById('noidung').innerHTML= x
		document.getElementById('mid').style.marginTop= '2%'
		document.getElementById("header2").innerHTML=''
		document.getElementById("header1").innerHTML='Chuẩn đầu ra của học phần'
		document.getElementById('btn').innerHTML='Quay lại trang chủ'
		document.getElementById('dropdown-content').innerHTML= ''
	}

	function ppgiangday(){
		var x = '<p>Phương pháp giảng dạy: <b>Diễn giảng</b></p><p style="text-align: left; font-size: 16px;">Sinh viên phải thực hiện các nhiệm vụ như sau:<br>- Tham dự tối thiểu 80% số tiết học lý thuyết.<br>- Thực hiện đầy đủ các bài ¡ tập nhóm/ bài tập và được đánh giá kết quả thực hiện.<br>- Tham dự báo cáo thiết kế giữa kỳ về ý tưởng, chương trình phần mềm, cấu trúc phầncứng.<br>- Tham dự báo cáo. cuối kỳ về hệ thống ứng dụng điều khiển, giám sát qua Internet sử dụng kiến thức đã học.<br>- Chủ động tổ chức thực hiện giờ tự học.</p>'			
		document.getElementById('noidung').innerHTML= x
		document.getElementById('mid').style.marginTop= '7%'
		document.getElementById('btn').innerHTML='Quay lại trang chủ'
		document.getElementById('dropdown-content').innerHTML= ''
	}

	function cacdanhgia(){
		var x = '<table> <thead> <tr> <th width="30px">TT</th> <th width="80px">Điểm thành phần</th> <th width="150px">Quy định</th> <th class="smallcoll">Trọng số</th> <th class="smallcoll">Mục tiêu</th> </tr> </thead> <tbody> <tr> <td >1</td> <td class="smallcoll">Điểm bài tập thiết kế mô hình</td> <td class="smallcoll">- Báo cáo mô hình cuối kỳ</td> <td class="smallcoll">30%</td> <td class="smallcoll">CO2-CO7</td> </tr> <tr> <td >2</td> <td class="smallcoll">Điểm giữa kỳ</td> <td class="smallcoll">- Báo cáo bằng thực hiện video clip về mô hình và poster đã thực hiện</td> <td class="smallcoll">20%</td> <td class="smallcoll">CO2-CO7</td> </tr> <tr> <td >3</td> <td class="smallcoll">Điểm thi kết thúc học phần</td> <td class="smallcoll">- Thi kiến thức lí thuyết gồm trắc nghiệm và bài tập</td> <td class="smallcoll">50%</td> <td class="smallcoll">CO1 đến<br>CO4</td> </tr> </tbody> </table>'
		document.getElementById('noidung').innerHTML= x
		document.getElementById('mid').style.marginTop= '2%'
		document.getElementById("header2").innerHTML=''
		document.getElementById("header1").innerHTML='Các đánh giá'
		document.getElementById('btn').innerHTML='Quay lại trang chủ'
		document.getElementById('dropdown-content').innerHTML= ''
	}





