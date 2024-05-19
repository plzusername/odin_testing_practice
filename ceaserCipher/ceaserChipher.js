export function ceaserCipher(message, shiftFactor){
    const alphabet = [
        'a', 'A', 'b', 'B', 'c', 'C', 'd', 'D', 'e', 'E', 
        'f', 'F', 'g', 'G', 'h', 'H', 'i', 'I', 'j', 'J', 
        'k', 'K', 'l', 'L', 'm', 'M', 'n', 'N', 'o', 'O', 
        'p', 'P', 'q', 'Q', 'r', 'R', 's', 'S', 't', 'T', 
        'u', 'U', 'v', 'V', 'w', 'W', 'x', 'X', 'y', 'Y', 
        'z', 'Z'
    ];
    let result = ''

    for (let i = 0; i < message.length; i++) {
        result += alphabet[(alphabet.indexOf(message[i]) + shiftFactor * 2) % 52]
    }


    return result
}