
// Crea la variable del canvas
 block_y=1;
 block_x=1;
 var canvas = new fabric.Canvas('myCanvas');
block_image_width = 350;
block_image_height = 430;

var block_image_object= "5";

function new_image(get_image)
{
	// para subir las imágenes
	fabric.Image.fromURL(get_image, function(Img) {
		block_image_object = Img;

		block_image_object.scaleToWidth(block_image_width);
		block_image_object.scaleToHeight(block_image_height);
		block_image_object.set({
			top:block_y,
			left:block_x
		});
	});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '82') // añade los códigos de las teclas
	{
		new_image('rr1.png')
	}
	if(keyPressed == '71')
	{
		block_x = 200;
		new_image('gr.png')
	}
	
	if(keyPressed == '89')
	{
		block_x =350;
		new_image('yr.png')
	}
	if(keyPressed == '80')
	{
		block_x = 600;
		print.png
		new_image('pr.png')
	}
	if(keyPressed == '66')
	{
		block_x = 700;
	    new_image('br.png')
	}
	
}

