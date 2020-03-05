html:
1. tại sao phải dùng
2. tạo file *.html
3. cấu trúc file html 
4. cấu trúc của 1 thẻ 
	a-	<tagName> content </tagName>
	b- 	thuộc tính attributes name, value
		- tự định nghĩa
		- dùng sẵn
	c-	thẻ đặc biệt: <br>, <hr>, <img src="">, <input type="" name="">
5. phân loại
	- block: div, h1, p,...
	- inline: <span></span>
	- <meta charset="utf-8">
6. Các thẻ HTML quen thuộc
	- thẻ tiêu đề h1-h6: 
		liên quan đến SEO, thẻ h1 nên là duy nhất
	- thẻ thể hiện văn bản: 
		<b></b>, <strong></strong>(làm nổi bật nội dung trên find engine)
		<i></i>, <em></em>
		<del></del>
		<u></u>
		<font color="" size="">content</font>
	- thẻ danh sách
		<ul>
			<li></li>
		</ul>
		<ol>
			<li></li>
		</ol>
	- <form action="mơi tiếp nhận dữ liệu" method="GET|POST"> <!-- hai thuộc tính quan trọng -->
		<label>content</label> diễn giải input
		<input type="" name="">
	</form> giao tiếp người dùng với hệ thống
	- <table>
		thể hiện dòng cột
	</table> hiện nay hầu như dùng cho backend
		số cột của các dòng phải bằng nhau
		-colspan:	=> xác định dòng, rồi xác định cột, đảm bảo số cột không thay đổi sau khi gộp(xóa đi n-1 cột)
		-rowspan:	=> xác định cột, rồi xác định dòng, đảm bảo số dòng không thay đổi sau khi gộp ( xóa đi n-1 ô ở hàng tiếp theo, thẳng hàng với ô vừa gộp)