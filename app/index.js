import clock from "clock";
import document from "document";
import { preferences } from "user-settings";
import * as util from "../common/utils";
import { BodyPresenceSensor } from "body-presence";
import { Barometer } from "barometer";
import { display } from "display";
import document from "document";
import { Gyroscope } from "gyroscope";
import { HeartRateSensor } from "heart-rate";
import { OrientationSensor } from "orientation";
import { today, goals } from "user-activity";
import * as messaging from "messaging";

let background = document.getElementById("background");

// Update the clock every minute
clock.granularity = "minutes";

// Get a handle on the <text> element
const myClock = document.getElementById("myClock");
const hrmData = document.getElementById("myHeartRate");
const myMonth = document.getElementById("myMonth");
const myDay = document.getElementById("myDay");
const myWeekday = document.getElementById("myWeekday");
const mySteps = document.getElementById("mySteps");
const myDistance = document.getElementById("myDistance");
const myCalories = document.getElementById("myCalories");
const myElevation = document.getElementById("myElevation");
const myAZM = document.getElementById("myAZM");
const sensors = [];

// Message is received
messaging.peerSocket.onmessage = evt => {
  //console.log(`App received: ${JSON.stringify(evt)}`);
  if (evt.data.key === "backgroundcolor" && evt.data.newValue) {
   let color = JSON.parse(evt.data.newValue);
   //console.log(`Setting background color: ${color}`);
    background.style.fill = color; 
  }
if (evt.data.key === "datecolor" && evt.data.newValue) {
    let color = JSON.parse(evt.data.newValue);
  //console.log(`Setting date color: ${color}`);
  myMonth.style.fill = color; 
  myDay.style.fill = color;
  myWeekday.style.fill = color;
  }
  if (evt.data.key === "clockcolor" && evt.data.newValue) {
    let color = JSON.parse(evt.data.newValue);
    //console.log(`Setting Clock color: ${color}`);
    myClock.style.fill = color; 
  }
  if (evt.data.key === "stepscolor" && evt.data.newValue) {
    let color = JSON.parse(evt.data.newValue);
    //console.log(`Setting steps color: ${color}`);
    mySteps.style.fill = color; 
  }
   if (evt.data.key === "heartcolor" && evt.data.newValue) {
    let color = JSON.parse(evt.data.newValue);
    //console.log(`Setting heart rate color: ${color}`);
    hrmData.style.fill = color; 
  }
   if (evt.data.key === "stairscolor" && evt.data.newValue) {
    let color = JSON.parse(evt.data.newValue);
    //console.log(`Setting stairs color: ${color}`);
    myElevation.style.fill = color; 
  }
  if (evt.data.key === "clocksize" && evt.data.newValue) {
   let size = JSON.parse(evt.data.newValue);
   //console.log(`Changing Clock Size: ${size}`);
   myClock.style.fontSize = size; 
   myClock.text = `${"XX"}:${"XX"}`;
  }
  if (evt.data.key === "datesize" && evt.data.newValue) {
   let datesize = JSON.parse(evt.data.newValue);
   //console.log(`Changing Date Size: ${datesize}`);
   myMonth.style.fontSize = datesize; 
   myMonth.text = "XXXXXXXXXXXXXXXXXXXXXXXXX";
  }
  if (evt.data.key === "stepssize" && evt.data.newValue) {
   let stepssize = JSON.parse(evt.data.newValue);
   //console.log(`Changing Steps Size: ${stepssize}`);
   mySteps.style.fontSize = stepssize; 
   mySteps.text = "XXXXX Steps";
  }
  if (evt.data.key === "stairsize" && evt.data.newValue) {
   let stairsize = JSON.parse(evt.data.newValue);
   //console.log(`Changing Stairs Size: ${stairsize}`);
   myElevation.style.fontSize = stairsize; 
   myElevation.text = "XXX Flights";
  }
  if (evt.data.key === "heartsize" && evt.data.newValue) {
   let heartsize = JSON.parse(evt.data.newValue);
   //console.log(`Changing Heart Size: ${heartsize}`);
   hrmData.style.fontSize = heartsize; 
   hrmData.text = "XXX BPM";
  }
 
};
//Set some arrays
//Month Array
var month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";  
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";

var hournames = new Array();
hournames[0] = "Zero";
hournames[1] = "One";
hournames[2] = "Two";
hournames[3] = "Three";
hournames[4] = "Four";
hournames[5] = "Five";  
hournames[6] = "Six";
hournames[7] = "Seven";
hournames[8] = "Eight";
hournames[9] = "Nine";
hournames[10] = "Ten";
hournames[11] = "Eleven";
hournames[12] = "Twelve";
hournames[13] = "Thirteen";
hournames[14] = "Fourteen";
hournames[15] = "Fifteen";
hournames[16] = "Sixteen";
hournames[17] = "Seventeen";
hournames[18] = "Eighteen";
hournames[19] = "Ninteen";
hournames[20] = "Twenty";
hournames[21] = "Twenty One";
hournames[22] = "Twenty Two";
hournames[23] = "Twenty Three";
hournames[24] = "Twenty Four";

//Weekday Array
var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var daysuffix = new Array();
daysuffix[1] = "1st";
daysuffix[2] = "2nd";
daysuffix[3] = "3rd";
daysuffix[4] = "4th";
daysuffix[5] = "5th";
daysuffix[6] = "6th";  
daysuffix[7] = "7th";
daysuffix[8] = "8th";
daysuffix[9] = "9th";
daysuffix[10] = "10th";
daysuffix[11] = "11th";
daysuffix[12] = "12th";
daysuffix[13] = "13th";
daysuffix[14] = "14th";
daysuffix[15] = "15th";
daysuffix[16] = "16th";
daysuffix[17] = "17th";
daysuffix[18] = "18th";
daysuffix[19] = "19th";
daysuffix[20] = "20th";
daysuffix[21] = "21st";
daysuffix[22] = "22nd";
daysuffix[23] = "23rd";
daysuffix[24] = "24th";
daysuffix[25] = "25th";
daysuffix[26] = "26th";
daysuffix[27] = "27th";
daysuffix[28] = "28th";
daysuffix[29] = "29th";
daysuffix[30] = "30th";
daysuffix[31] = "31st";

var daysuffixname = new Array();
daysuffixname[1] = "First";
daysuffixname[2] = "Second";
daysuffixname[3] = "Third";
daysuffixname[4] = "Fourth";
daysuffixname[5] = "Fifth";
daysuffixname[6] = "Sixth";  
daysuffixname[7] = "Seventh";
daysuffixname[8] = "Eighth";
daysuffixname[9] = "Ninth";
daysuffixname[10] = "Tenth";
daysuffixname[11] = "Elventh";
daysuffixname[12] = "Twelth";
daysuffixname[13] = "Thirteenth";
daysuffixname[14] = "Fourteenth";
daysuffixname[15] = "Fifteenth";
daysuffixname[16] = "Sixteenth";
daysuffixname[17] = "Seventeenth";
daysuffixname[18] = "Eighteenth";
daysuffixname[19] = "Nineteenth";
daysuffixname[20] = "Twentieth";
daysuffixname[21] = "Twenty First";
daysuffixname[22] = "Twenty Second";
daysuffixname[23] = "Twenty Third";
daysuffixname[24] = "Twenty Fourth";
daysuffixname[25] = "Twenty Fifth";
daysuffixname[26] = "Twenty Sixth";
daysuffixname[27] = "Twenty Seventh";
daysuffixname[28] = "Twenty Eigth";
daysuffixname[29] = "Twenty Ninth";
daysuffixname[30] = "Thirtieth";
daysuffixname[31] = "Thirty First";

// Update the <text> element every tick with the current time
clock.ontick = (evt) => {
  let today = evt.date;
  let hours = today.getHours();
  let monthnum = today.getMonth();
  let monthname = month[monthnum];
  let weekdaynumber = today.getDay();
  let weekdayname = weekday[weekdaynumber];
  let day = today.getDate();
  let numberdaysuffix = daysuffix[day];
  //mySteps.text = today.adjusted.steps;
  //let todaysteps = today.adjusted.steps;
  
 
  if (preferences.clockDisplay === "12h") {
    // 12h format
    hours = hours % 12 || 12;
  } else {
    // 24h format
    hours = util.zeroPad(hours);
  }
  let mins = util.zeroPad(today.getMinutes());
  myClock.text = `${hours}:${mins}`;
  myMonth.text = `${weekdayname}` + " " + `${monthname}` + " " + `${numberdaysuffix}`;
  //myDay.text = `${numberdaysuffix}`; 
  //myWeekday.text = `${weekdayname}`;
  //mySteps.text =`${todaysteps}`
}
if (HeartRateSensor) {
  const hrm = new HeartRateSensor({ frequency: 1 });
  hrm.addEventListener("reading", () => {
  hrmData.text = hrm.heartRate + " BPM";
  //console.log(today.adjusted.steps);
  mySteps.text = today.local.steps + " Steps";
  myDistance.text = today.adjusted.distance + " Meters";
  myCalories.text = today.local.calories + " Calories";
  myElevation.text = today.adjusted.elevationGain + " Flights";
  myAZM.text = today.adjusted.activeZoneMinutes.total + " Minutes";
 
  });
  sensors.push(hrm);
  hrm.start();
} else {
  hrmLabel.style.display = "none";
  hrmData.style.display = "none";
}
display.addEventListener("change", () => {
  // Automatically stop all sensors when the screen is off to conserve battery
  display.on ? sensors.map(sensor => sensor.start()) : sensors.map(sensor => sensor.stop());
});
