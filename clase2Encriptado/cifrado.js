const array = [];

function cifrado_personalizado(valor) {
    let resultado = "";

    const diccionario = {
        // Minúsculas
        'a': '!@', 'b': '#$', 'c': '%^', 'd': '&*', 'e': '()', 
        'f': '-_', 'g': '=+', 'h': '[]', 'i': '{}', 'j': '|;', 
        'k': ':\'', 'l': '"<', 'm': '>?', 'n': '~`', 'o': '1!', 
        'p': '2@', 'q': '3#', 'r': '4$', 's': '5%', 't': '6^', 
        'u': '7&', 'v': '8*', 'w': '9(', 'x': '0)', 'y': 'a_', 
        'z': 'b-', 

        // Mayúsculas
        'A': 'c=', 'B': 'd+', 'C': 'e[', 'D': 'f]', 'E': 'g{', 
        'F': 'h}', 'G': 'i|', 'H': 'j;', 'I': 'k:', 'J': 'l\'', 
        'K': 'm"', 'L': 'n<', 'M': 'o>', 'N': 'p?', 'O': 'q~', 
        'P': 'r`', 'Q': 's1', 'R': 't2', 'S': 'u3', 'T': 'v4', 
        'U': 'w5', 'V': 'x6', 'W': 'y7', 'X': 'z8', 'Y': 'A9', 
        'Z': 'B0',

        // Números
        '0': 'C!', '1': 'D@', '2': 'E#', '3': 'F$', '4': 'G%', 
        '5': 'H^', '6': 'I&', '7': 'J*', '8': 'K(', '9': 'L)',

        // Caracteres especiales
        '!': 'M_', '@': 'N-', '#': 'O=', '$': 'P+', '%': 'Q[', 
        '^': 'R]', '&': 'S{', '*': 'T}', '(': 'U|', ')': 'V;', 
        '-': 'W:', '_': 'X\'', '=': 'Y"', '+': 'Z<', '[': 'a>', 
        ']': 'b?', '{': 'c~', '}': 'd`', '|': 'e1', ';': 'f2', 
        ':': 'g3', '\'': 'h4', '"': 'i5', '<': 'j6', '>': 'k7', 
        '?': 'l8', '~': 'm9', '`': 'n0', ' ': 'o-'
    };

    for (let char of valor) {
        if (diccionario[char]) {
            resultado += diccionario[char];
        } else {
            resultado += char;  // Si el carácter no está en el diccionario, se agrega tal cual
        }
    }

    array.push(resultado);  // Guardar el texto cifrado en el array
    return resultado;
}

function descifrado_personalizado(valor) {

        let resultado = "";

        const diccionario = {
            // Minúsculas
            '!@': 'a', '#$': 'b', '%^': 'c', '&*': 'd', '()': 'e', 
            '-_': 'f', '=+': 'g', '[]': 'h', '{}': 'i', '|;': 'j', 
            ':\'': 'k', '"<': 'l', '>?': 'm', '~`': 'n', '1!': 'o', 
            '2@': 'p', '3#': 'q', '4$': 'r', '5%': 's', '6^': 't', 
            '7&': 'u', '8*': 'v', '9(': 'w', '0)': 'x', 'a_': 'y', 
            'b-': 'z', 

            // Mayúsculas
            'c=': 'A', 'd+': 'B', 'e[': 'C', 'f]': 'D', 'g{': 'E', 
            'h}': 'F', 'i|': 'G', 'j;': 'H', 'k:': 'I', 'l\'': 'J', 
            'm"': 'K', 'n<': 'L', 'o>': 'M', 'p?': 'N', 'q~': 'O', 
            'r`': 'P', 's1': 'Q', 't2': 'R', 'u3': 'S', 'v4': 'T', 
            'w5': 'U', 'x6': 'V', 'y7': 'W', 'z8': 'X', 'A9': 'Y', 
            'B0': 'Z',

            // Números
            'C!': '0', 'D@': '1', 'E#': '2', 'F$': '3', 'G%': '4', 
            'H^': '5', 'I&': '6', 'J*': '7', 'K(': '8', 'L)': '9',

            // Caracteres especiales
            'M_': '!', 'N-': '@', 'O=': '#', 'P+': '$', 'Q[': '%', 
            'R]': '^', 'S{': '&', 'T}': '*', 'U|': '(', 'V;': ')', 
            'W:': '-', 'X\'': '_', 'Y"': '=', 'Z<': '+', 'a>': '[', 
            'b?': ']', 'c~': '{', 'd`': '}', 'e1': '|', 'f2': ';', 
            'g3': ':', 'h4': '\'', 'i5': '"', 'j6': '<', 'k7': '>', 
            'l8': '?', 'm9': '~', 'n0': '`', 'o-': ' '
        };

        for (let i = 0; i < valor.length; i += 2) {
            let charPair = valor[i] + valor[i + 1];
            if (diccionario[charPair]) {
                resultado += diccionario[charPair];
            } else {
                resultado += charPair;  // Si el par de caracteres no está en el diccionario, se agrega tal cual
            }
        }

        return resultado;
    }


function Encriptar_Texto() {
    const textoOriginal = document.getElementById('textoOriginal').value;

    const textoCifrado = cifrado_personalizado(textoOriginal);
    document.getElementById('cifrado').innerText = ` ${textoCifrado}`;
    
}

function Desencrioptar_Texto(){
    const textoCifrado = document.getElementById('textoCifrado').value;

    if (array.includes(textoCifrado)) {
    const textoDescifrado = descifrado_personalizado(textoCifrado);
    document.getElementById('descifrado').innerText = ` ${textoDescifrado}`;
    } else {
        document.getElementById('descifrado').innerText = "El texto cifrado Esta Erroneo";
    }
}
