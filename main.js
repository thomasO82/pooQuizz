let Question = require('./Question')
let Quizz = require('./Quizz')

let questionOne = new Question("Quel est le nom de lucas ?", ["Guepe", "loulou", "lulu", "bichon"], "bichon")
let questionTwo = new Question("Quel est l'animal preferé de Hind ?", ["Guepe", "Orque", "elephant", "abeilles"], "Orque")
let quiz = new Quizz([questionOne, questionTwo])
quiz.init()

