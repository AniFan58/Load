    window.onload = function() {
        
            var canvas = document.getElementById("canvas"); // �������� ������
            var ctx = canvas.getContext("2d"); 
            var width = canvas.width; // ������ ����
            var height = canvas.height; //������ ����
            var degr = 0; // ��������� ����
            var color = "lightgreen"; //���� 
            var bgcolor = "#222"; //���� ����
            var text; // ����� ���������
        
        function init() {
            	ctx.clearRect(0, 0, width, height); //������� ����
		ctx.beginPath(); // �������� ��������
		ctx.strokeStyle = bgcolor; //���� ������
		ctx.lineWidth = 30; //������ �����
		ctx.arc(width/2, height/2, 100, 0, Math.PI*2, false); //������ ������ ������
		ctx.stroke(); // ������� �������
		var radians = degr * Math.PI / 180; // ��������� ������ � �������
		ctx.beginPath(); // �������� ��������
		ctx.strokeStyle = color; // ���� �����
		ctx.lineWidth = 30; //������
		ctx.arc(width/2, height/2, 100, 0 - 90*Math.PI/180, radians - 90*Math.PI/180, false); //��� ������������� ����
		ctx.stroke(); // ������� ������
                ctx.fillStyle = color; //���� ������
                ctx.font = "50px arial";	//�����
                text = Math.floor(degr/360*100) + "%";//�����
                text_width = ctx.measureText(text).width;//������ ������
                ctx.fillText(text, width/2 - text_width/2, height/2+15);//������ �����
	}
	
    
    function draw() {
       new_degr = Math.round(Math.random()*360); //��� ����� 
       var differ = new_degr - degr; //�������
       animation_loop = setInterval(animateTo,1000/differ); //�������
    }
    
    function animateTo() {    
        if (degr<new_degr) {
            degr++; //������� ������ ��������
        }
        else {
          degr--;  //�����
        }
        if(degr == new_degr)
	    clearInterval(animation_loop);//������� ������, ���� �����������
        init();//������
        
    }
    draw();//�������� ��������
    redraw_loop = setInterval(draw, 2000);//��������� ������ 2 ���
    }