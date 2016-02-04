app = angular.module("quizlet");

app.factory("levels", function() {
  var levels = [
    {
      minimun_score: 0,
  		title: "Mãe de primeira Viajem",
  		text: "Você consegue cuidar do seu filho, mas ainda tem muito que melhorar. Continue firme e forte!",
      image: "images/freshman.png"
  	},
    {
      minimun_score: 1,
  		title: "Mãezinha",
  		text: "Seu filho já deve ter mas de 6 meses, parabéns. mas você ainda tem muito que aprender com ele.",
      image: "images/graduated.png"
  	},
    {
      minimun_score: 2,
  		title: "Mãe de verdade",
  		text: "Você já sabe quase tudo sobre seu filho.",
      image: "images/expert.png"
  	},
    {
      minimun_score: 20,
      title: "Vovó, ;)",
      text: "Você deve ter uns 2 filhos e 3 netos, impressionante sabe de tudo.",
      image: "images/ninja.png"
    }
  ];

  return {
		getLevel: function(score) {
      filtered = levels.filter(function(level) {
        return score >= level.minimun_score;
      });

      console.log(filtered);

      return filtered[filtered.length - 1];
		}
  };
});
