/* Variables iniciales */

var encrypt_button = document.querySelector('.encryp-button')
var descenrypt_button = document.querySelector('.desencryp-button')

var img = document.querySelector('.results-img')
var emptymss = document.querySelector('.results-msj')
var result = document.querySelector('.text-result')

encrypt_button.onclick = encrypt;
descenrypt_button.onclick = desencrypt;


function encrypt(){
    delete_items()
    var text_input = document.querySelector('.textbox').value;
    result.textContent = encrypting(text_input);
}

function desencrypt(){
    delete_items();
    var text_input = document.querySelector('.textbox').value;
    result.textContent= desencrypting(text_input);
}
function encrypting(message){
    if (typeof message !== 'string') {
        // Si no es un string, convertirlo a string
        message = String(message);
    }
    var mss = message; 
    var mss_enc = '';

    for(var i = 0; i < mss.length ; i++){
        if(mss[i] == 'a'){
            mss_enc = mss_enc + 'ai'
        }
        else if(mss[i] == 'e'){
            mss_enc = mss_enc + 'enter'
        }
        else if(mss[i] == 'i'){
            mss_enc = mss_enc + 'imes'
        }
        else if(mss[i] == 'o'){
            mss_enc = mss_enc + 'ober'
        }
        else if(mss[i] == 'u'){
            mss_enc = mss_enc + 'ufat'
        }
        else{
            mss_enc = mss_enc + mss[i]
        }
    }
    return mss_enc
}

function desencrypting(message){
    if (typeof message !== 'string') {
        // Si no es un string, convertirlo a string
        message = String(message);
    }
    var mss = message; 
    var mss_enc = '';
    

    for(var i = 0; i < mss.length; i++){
        if(mss[i] == 'a'){
            mss_enc = mss_enc + 'a'
            i = i + 1;
        }
        else if(mss[i] == 'e'){
            mss_enc = mss_enc + 'e'
            i = i + 4;
        }
        else if(mss[i] == 'i'){
            mss_enc = mss_enc + 'i'
            i = i + 3;
        }
        else if(mss[i] == 'o'){
            mss_enc = mss_enc + 'o'
            i = i + 3;
        }
        else if(mss[i] == 'u'){
            mss_enc = mss_enc + 'u'
            i = i + 3;
        }
        else{
            mss_enc = mss_enc + mss[i]
        }
    }
    return mss_enc
}

function delete_items(){
    img.classList.add('delete');
    emptymss.classList.add('delete');
}

const copy = document.querySelector(".copy-button"); 
    copy.addEventListener("click", copiar = () => {
    var content = document.querySelector(".text-result").textContent;
    navigator.clipboard.writeText(content);
});
