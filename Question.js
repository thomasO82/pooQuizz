const prompt = require('prompt-sync')()
class Question { 
   //le constructeur est la fonction qui est appeller lors de la creation de l'objet 
  constructor(_question, _responses, _goodAnswer){
    this.question = _question
    this.responses = _responses
    this.goodAnswer = _goodAnswer
  }
  displayQuestion(){
    console.log(this.question);
  }

  displayResponse(){
    this.responses.forEach(response => {
      console.log(response);
    });
  }

  ask(){
    let reply = prompt('entre la bonne reponse')
    return reply
  }

  checkReply(reply){
    if (reply == this.goodAnswer) {
      console.log("gagner");
    }else{
      console.log("perdu");
    }
  }

}

module.exports = Question