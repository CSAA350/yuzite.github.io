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

function check() {
  var right_ans = randomNum(10565, 99344);
  var output_str = '人机验证\n请输入' + String(right_ans) + ':';
  console.log(right_ans);
  var user_ans = prompt(output_str);
  if(right_ans != user_ans) {
    window.open('/robot','_self');
  }
  else {
    return;
  }
}
