// var print = moment().add(3, 'hours');
// var print2 = print.format('h ');
//  console.log("print2 : || ",print2 + "AM" )
// var testing = print2 + "AM"
//  if(testing === "5 AM"){
//    console.log("testing is correct")
//  } else {
//    console.log("you got it wrong")
//  }

var nowTime = moment().format("h");

function addRow(i) {
  var regularHour;
  if(i-4 > 0) {
    regularHour = i-4 + " pm";
  } else if(i+8 === 12) {
    regularHour = i+8 + " pm";
  } else {
    regularHour = i+8 + " am";
  }
  $(".table").append(`<div class="one-row row${i}"></div>`);

  $(`.row${i}`).append(`<div class="time row-up">${    regularHour
}</div>`);

  $(`.row${i}`).append(
    '<div class=" typing-box row-up"><div class="typing-space " ></div></div>'
  );

  $(`.row${i}`).append('<div class="save-btn row-up"></div>');
}

for (var i = 1; i < 10; i++) {
  addRow(i);
}

//$('.save-btn').addClass('blueBack')
