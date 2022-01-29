function addRow(i) {
  var regularHour;
  if (i - 4 > 0) {
    regularHour = i - 4 + " pm";
  } else if (i + 8 === 12) {
    regularHour = i + 8 + " pm";
  } else {
    regularHour = i + 8 + " am";
  }

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

  var nowTime = moment().format("h");
  var nowHour = parseInt(nowTime);

  var splitTheNum = regularHour.split(" ");
  var officeHourNumOnly = parseInt(splitTheNum[0]);

  if (officeHourNumOnly === nowHour) {
    addColor("becomeGreen", i);
  }
  ///// below from 1 pm to 5 pm ////
  else if (officeHourNumOnly < 9) {
    if (officeHourNumOnly < nowHour) {
      addColor("becomeGrey", i);
      addColor("becomeGrey", i);
      $(`#field${i}`).addClass("hide");
    } else {
      addColor("becomeBlue", i);
    }
  }
  ///// below from 9 am to 12 pm ////
  else {
    if (officeHourNumOnly > nowHour) {
      addColor("becomeGrey", i);
      $(`#field${i}`).addClass("hide");
    } else {
      addColor("becomeBlue", i);
    }
  }
}

//add class to chow color function

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

function addFs(btnNum) {
  fs[btnNum] = function () {
    console.log("save btn  clicked || i or btnNum :", btnNum);
    sessionStorage.setItem(`autosave${btnNum}`, field[btnNum].value);
  };
}



function updateClock() {
  var nowTime24h = moment().format('HH:mm:ss')
  $('.lead').html(nowTime24h);

}

setInterval(updateClock, 100);
