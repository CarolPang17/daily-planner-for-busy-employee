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


  $(".table").append(`<div class="row row${i}"></div>`);

  $(`.row${i}`).append(`<div class="time-block col "><div class="hour ">${regularHour}</div></div>`);

  $(`.row${i}`).append(
    `<div class=" col-6 typing-box-${i} "><input class="textarea typing-space-${i}" type="text" id="field${i}" name="fname"></div>`
  );

  $(`.row${i}`).append(`<div class="col  saveBtn "><input type="image" class="save-img " id="save-btn-${i}" src="/assets/images/save-as.png" /></div>`);

}
var field = {};
var fs = {};

for (var i = 1; i < 10; i++) {
  //create row one by one
  addRow(i);

}

for (var i = 1; i < 10; i++) {
  //create storage key one by one
  field[i] = document.getElementById(`field${i}`);
  console.log("--in for loop || i = ", i);
  addFs(i);

  document.getElementById(`save-btn-${i}`).addEventListener("click", fs[i]);

  if (sessionStorage.getItem(`autosave${i}`)) {
    field[i].value = sessionStorage.getItem(`autosave${i}`);
  }
}


function addFs(btnNum) {
  fs[btnNum] = function () {
    console.log("save btn  clicked || i or btnNum :", btnNum);
    sessionStorage.setItem(`autosave${btnNum}`, field[btnNum].value);
  };
}

