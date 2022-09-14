function randomNum(minNum,maxNum){
  switch(arguments.length){
    case 1:
      return parseInt(Math.random()*minNum+1,10);
      break;
    case 2:
      return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10);
      break;
    default:
      return 0;
      break;
  }
}
var hits = ['人比想象中要坚强的多。——《非自然死亡》', '失去自信的话就重新找回 感到不安的话就将其驱除——白井黑子(《魔法禁书目录》人物)', '死去的人只是碰巧死了，而我们也只是碰巧还活着。——《非自然死亡》', '每个人都应该学会如何编程，因为它教会你如何思考。——史蒂夫·乔布斯'];

function hitsokoto() {
  var rand = randomNum(0, 3);
  document.write(hits[rand]);
  console.log(hits[rand]);
  return ;
}