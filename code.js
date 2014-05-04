    window.onload = function() {
        
            var canvas = document.getElementById("canvas"); // получаем канвас
            var ctx = canvas.getContext("2d"); 
            var width = canvas.width; // ширина поля
            var height = canvas.height; //высота поля
            var degr = 0; // начальный угол
            var color = "lightgreen"; //цвет 
            var bgcolor = "#222"; //цвет фона
            var text; // текст процентов
        
        function init() {
            	ctx.clearRect(0, 0, width, height); //очищаем поле
		ctx.beginPath(); // начинаем рисовать
		ctx.strokeStyle = bgcolor; //цвет фигуры
		ctx.lineWidth = 30; //ширина линии
		ctx.arc(width/2, height/2, 100, 0, Math.PI*2, false); //рисуем темное кольцо
		ctx.stroke(); // обводим контуры
		var radians = degr * Math.PI / 180; // переводим градус в радианы
		ctx.beginPath(); // начинаем рисовать
		ctx.strokeStyle = color; // цвет линии
		ctx.lineWidth = 30; //ширина
		ctx.arc(width/2, height/2, 100, 0 - 90*Math.PI/180, radians - 90*Math.PI/180, false); //наш анимированный круг
		ctx.stroke(); // обводим контур
                ctx.fillStyle = color; //цвет текста
                ctx.font = "50px arial";	//шрифт
                text = Math.floor(degr/360*100) + "%";//текст
                text_width = ctx.measureText(text).width;//ширина текста
                ctx.fillText(text, width/2 - text_width/2, height/2+15);//рисуем текст
	}
	
    
    function draw() {
       new_degr = Math.round(Math.random()*360); //наш сдвиг 
       var differ = new_degr - degr; //разница
       animation_loop = setInterval(animateTo,1000/differ); //рисовка
    }
    
    function animateTo() {    
        if (degr<new_degr) {
            degr++; //двигаем вперед анимацию
        }
        else {
          degr--;  //назад
        }
        if(degr == new_degr)
	    clearInterval(animation_loop);//очищаем таймер, если заполнились
        init();//рисуем
        
    }
    draw();//начинаем рисовать
    redraw_loop = setInterval(draw, 2000);//проверяем каждые 2 сек
    }