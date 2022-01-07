function MakeScramble() { 
    var options = ["F", "F2", "F'", "R", "R2", "R'", "U", "U2", "U'", "B", "B2", "B'", "L", "L2", "L'", "D", "D2", "D'"]
    var numOptions = [0, 1, 2, 3, 4, 5] 
    var scramble = []
    var scrambleMoves = []
    var bad = true

    while (bad) {
        scramble = []
        for (var i = 0; i < 20; i++) {
            scramble.push(numOptions[getRandomInt(6)])
        }
        for (var j = 0; j < 20 - 1; j++) {
            if (scramble[i] === scramble[i + 1]) {
                bad = true;
                break
            } else {
                bad = false;
            }
        }
    }
    var move;
    for (var k = 0; k < 20; k++) {
        switch (scramble[i]) {
            case 0:
                move = options[getRandomInt(3)] // 0,1,2
                scrambleMoves.push(move)
                break
            case 1:
                move = options[getRandomIntBetween(3, 6)] // 3,4,5
                scrambleMoves.push(move)
                break
            case 2:
                move = options[getRandomIntBetween(6, 9)] // 6,7,8
                scrambleMoves.push(move)
                break
            case 3:
                move = options[getRandomIntBetween(9, 12)] // 9,10,11
                scrambleMoves.push(move)
                break
            case 4:
                move = options[getRandomIntBetween(12, 15)] // 12,13,14
                scrambleMoves.push(move)
                break
            case 5:
                move = options[getRandomIntBetween(15, 18)] // 15,16,17
                scrambleMoves.push(move)
                break
            default:
                break;
        }
    }
    return scrambleMoves;
}
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max)) 
}
function getRandomIntBetween(min, max) { 
    return Math.floor(Math.random() * (max - min) + min)
}
function Result(){
    return(
        MakeScramble()
    )
}
export default Result;