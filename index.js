var katzDeli = [];
var otherDeli = ["Steven", "Blake", "Avi"];

function takeANumber(Deli, name){
  Deli.push(name);
  return `Welcome, ${name}. You are number ${Deli.length} in line.`;
}

const deliLine = ["Steven", "Blake", "Avi"];

function nowServing (Deli){
  if(Deli.length>0){
    console.log(`Currently serving ${Deli[0]}.`);
    Deli.shift();
  } else{
    return "There is nobody waiting to be served!";
  }
}

