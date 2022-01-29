function addRow(i) {
  //adding table office hour
  var regularHour;
  if (i - 4 > 0) {
    regularHour = i - 4 + " pm";
  } else if (i + 8 === 12) {
    regularHour = i + 8 + " pm";
  } else {
    regularHour = i + 8 + " am";
  }

  //create row div
  $(".table").append(`<div class="row row${i}"></div>`);

  $(`.row${i}`).append(
    `<div id="time-block-${i}" class =" col "><div class="hour ">${regularHour}</div></div>`
  );

  $(`.row${i}`).append(
    `<div class=" col-6 typing-box-${i} "><input class="textarea typing-space-${i}" type="text" id="field${i}" name="fname"></div>`
  );

  $(`.row${i}`).append(
    `<div class="col  saveBtn-${i} "><input type="image" class="save-img " id="save-btn-${i}" src="/assets/images/save-as.png" /></div>`
  );

//set current actual hour to be 24hr format
  var nowTime = moment().format("HH");
  var nowHour = parseInt(nowTime);

//set table show hour to be 24hr format
  var regularHour24 = i + 8;

//add class to chow color function by compare actual hour and table hour
  if (regularHour24 === nowHour) {
    addColor("becomeGreen", i);
  } else if (regularHour24 < nowHour) {
    addColor("becomeGrey", i);
  } else {
    addColor("becomeBlue", i);
  }
};

//function of doing the work of adding color
function addColor(color, i) {
  $(`#time-block-${i},.typing-box-${i}, .saveBtn-${i}`).addClass(color);
}
////////////////////////////////////////


var field = {};
var fs = {};

for (var i = 1; i < 10; i++) {
  //create row one by one
  addRow(i);
}

for (var i = 1; i < 10; i++) {
  //create storage key one by one
  field[i] = document.getElementById(`field${i}`);
  addFs(i);

  document.getElementById(`save-btn-${i}`).addEventListener("click", fs[i]);

  if (sessionStorage.getItem(`autosave${i}`)) {
    field[i].value = sessionStorage.getItem(`autosave${i}`);
  }
}


//context changes once the button clicked
function addFs(btnNum) {
  fs[btnNum] = function () {
    sessionStorage.setItem(`autosave${btnNum}`, field[btnNum].value);
  };
}

//update clock every second
function updateClock() {
  var nowTime24h = moment().format("HH:mm:ss");
  $(".lead").html(nowTime24h);
}

setInterval(updateClock, 100);


