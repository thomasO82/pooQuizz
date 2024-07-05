
class Quizz{
    constructor(_questions){
      this.questions = _questions
    }
  
    init(){
      for (let i = 0; i < this.questions.length; i++) {
        this.questions[i].displayQuestion()
        this.questions[i].displayResponse()
        let reply = this.questions[i].ask()
        this.questions[i].checkReply(reply)
      }
    }
  
  }

  module.exports = Quizz