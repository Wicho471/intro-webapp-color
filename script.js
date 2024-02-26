$(document).ready(function(){
  // Función para actualizar el color y el código hexadecimal
  function updateColor() {
      var red = parseInt($("#red").val());
      var green = parseInt($("#green").val());
      var blue = parseInt($("#blue").val());
      if (red > 255) red = 255;
      if (green > 255) green = 255;
      if (blue > 255) blue = 255;
      var colorHex = rgbToHex(red, green, blue);
      $("#colorBox").css("background-color", "rgb(" + red + "," + green + "," + blue + ")");
      $("#hexCode").text("Código hexadecimal: " + colorHex);
  }

  // Convertir RGB a hexadecimal
  function rgbToHex(r, g, b) {
      return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }

  function componentToHex(c) {
      var hex = c.toString(16);
      return hex.length == 1 ? "0" + hex : hex;
  }

  // Actualizar el color cuando se cambia el valor de los campos de entrada
  $("#red, #green, #blue").change(function() {
      updateColor();
  });

  // Actualizar el color cuando se selecciona un color en el selector de color HTML
  $("#colorPicker").change(function() {
      var color = $(this).val();
      $("#colorBox").css("background-color", color);
      var rgb = hexToRgb(color);
      $("#red").val(rgb.r);
      $("#green").val(rgb.g);
      $("#blue").val(rgb.b);
      $("#hexCode").text("Código hexadecimal: " + color);
  });

  // Convertir hexadecimal a RGB
  function hexToRgb(hex) {
      var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16)
      } : null;
  }

  // Inicializar el color
  updateColor();
});
