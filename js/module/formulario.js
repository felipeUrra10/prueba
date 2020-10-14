export default {
    form: (`
    <div class="caja_titulo">
        <h1 class="caja_h1">Formulario validation</h1>
    </div>
    
    <div class="caja_input">
        <label class="caja_label">nombre</label>
        <input class="caja_input" type="text" id="txt1">
    </div>

    <div class="caja_input">
        <label class="caja_label">edad</label>
        <input class="caja_input" type="number" id="edad">
    </div>

    <div class="caja_radios">
        <input class="caja_radio" type="radio" id="masculino">M
        <input class="caja_radio" type="radio" id="femenino">F
    </div>

    <div class="caja_input">
        <label class="caja_label">telefono</label>
        <input class="caja_input" type="tel" id="txt1">
    </div>
    
    <select class="caja_select" id="select"></select>



    <div class="caja_buttons">
        <button class="caja_button" onclick="aceptar()">
            Resultado
        </button>
    </div>

    <div class="caja_buttons_limpiar">
        <button class="caja_button_limpiar" onclick="aceptar()">
            Resultado
        </button>

        <div class="caja_resultado">
            <p class="caja_p" id="result"></p>
        </div>
    </div>
    `),
    create:function(){
        var nombre = document.getElementById("txt1");
        var edad = document.getElementById("edad");
        var select = document.getElementById("")
    }
    
}