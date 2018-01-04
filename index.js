//Creation mini popup explanations for items:
$('#main-header').popup({
   title : 'MCA',
   content : '"Multipurpose Converter Application" - it is a special application which let do different conversion with the main mathematical, physical and computational measurements and get simultaneous different results from various windows and fields.',
   hoverable : true,
   position : 'bottom left',
   delay: {
       show: 100,
       hide: 100
   }
});

$('#item-2').popup({
    content : 'Convert pounds, kilograms, stones and etc.',
    hoverable : true,
    position : 'bottom center',
    delay: {
        show: 50,
        hide: 50
    }
});

$('#item-3').popup({
    content : 'Convert Fahrenheit, Celsius and Kelvin.',
    hoverable : true,
    position : 'bottom center',
    delay: {
        show: 50,
        hide: 50
    }
});

$('#item-4').popup({
    content : 'Convert inches, kilometers, miles and etc.',
    hoverable : true,
    position : 'bottom center',
    delay: {
        show:50,
        hide:50
    }
});

$('#item-5').popup({
    content : 'Convert MPH, KPH, Mach and etc.',
    hoverable : true,
    position : 'bottom center',
    delay: {
        show: 50,
        hide: 50
    }
});

$('#item-6').popup({
    content : 'Convert yotta, tera, femto and etc',
    hoverable : true,
    position : 'bottom center',
    delay: {
        show: 50,
        hide: 50
    }
});

$('#item-7').popup({
    content : 'Convert binary, octal, hexadecimal and etc.',
    hoverable : true,
    position : 'bottom center',
    delay: {
        show: 50,
        hide: 50
    }
});

$('#search-panel').popup({
    on : 'focus',
    content : 'Type for search necessary converting',
    hoverable : true,
    position : 'bottom right',
    delay: {
        show: 50,
        hide: 50
    }
});

//Creation function for toggle different converting:
var prevCon = 'item-2', prevWinCon = 'weight', prevBtn, nextBtn, prevWin ,nextWin;
var outWin = document.getElementById("out-window");

function toggle(key,win){
    //Toggling navigation buttons:
    prevBtn = document.getElementById(prevCon);
    nextBtn = document.getElementById(key);
    prevBtn.setAttribute("class","item");
    nextBtn.setAttribute("class","item active");
    prevCon = key;
    //Toggling windows in the output area:
    nextWin = createWindow(win);
    prevWin = document.getElementById(prevWinCon);
    outWin.replaceChild(nextWin,prevWin);
    prevWinCon = win;
}

function createWindow(id){
    //Creation static header elements for out window:
    var newWin = document.createElement("div");
    newWin.setAttribute("class","ui segments");
    var newWin2 = document.createElement("div");
    newWin2.setAttribute("class","ui segment")
    newWin.appendChild(newWin2);
    var newP = document.createElement("p");
    newWin2.appendChild(newP);
    var newI = document.createElement("i");
    newP.appendChild(newI);
    var newSecSeg = document.createElement("div");
    newSecSeg.setAttribute("class","ui secondary segment");
    var newP2 = document.createElement("p");
    newP2.innerHTML = "You can convert dynamically and simultaneously different " + id + " measurements in different input fields. Just, click to the selected input field and choose the value for start converting."
    newSecSeg.appendChild(newP2);
    newWin.appendChild(newSecSeg);
    newWin.setAttribute("id",id);
    //Creation static footer elements for out window:
    var newFooter = document.createElement("div");
    newFooter.setAttribute("class","ui secondary segment");
    var newP3 = document.createElement("p");
    var newI2 = document.createElement("i");
    newI2.setAttribute("class","book icon");
    newP3.appendChild(newI2);
    var FooterT = document.createTextNode("If you want to know the standart of converting functions, just read the ");
    var linkP = document.createElement("a");
    linkP.innerHTML = "documentation";
    newP3.appendChild(FooterT);
    newP3.appendChild(linkP);
    newFooter.appendChild(newP3);
    newWin.appendChild(newFooter);
    var newText, 
    finalCont;
    //Creation form-fields for selected 
    switch(id){
        case 'weight':
            newI.setAttribute("class","law icon");
            newText = document.createTextNode(" Weight Converting");
            linkP.setAttribute("href","https://en.wikipedia.org/wiki/Pound_(mass)#Metric_pounds");
            finalCont = weightForm();
            break;
        case 'temperature':
            newI.setAttribute("class","thermometer half icon");
            newText = document.createTextNode(" Temperature Converting");
            linkP.setAttribute("href","https://en.wikipedia.org/wiki/Conversion_of_units_of_temperature");
            finalCont = temperatureForm();
            break;
        case 'length':
            newI.setAttribute("class","maximize icon");
            newText = document.createTextNode(" Length Converting");
            linkP.setAttribute("href","https://en.wikipedia.org/wiki/Conversion_of_units#Length");
            finalCont = lengthForm();
            break;
        case 'speed':
            newI.setAttribute("class","rocket icon");
            newText = document.createTextNode(" Speed Converting");
            linkP.setAttribute("href","https://en.wikipedia.org/wiki/Conversion_of_units#Speed_or_velocity");
            finalCont = speedForm();
            break;
        case 'si-prefixes':
            newI.setAttribute("class","bar chart icon");
            newText = document.createTextNode(" SI Prefixes Converting");
            linkP.setAttribute("href","https://en.wikipedia.org/wiki/Metric_prefix");
            finalCont = SIForm();
            break;
        case 'numeral-system':
            newI.setAttribute("class","superscript icon");
            newText = document.createTextNode(" Numeral System Converting");
            linkP.setAttribute("href","https://en.wikipedia.org/wiki/Computer_number_format#Converting_between_bases");
            finalCont = numForm();
            break;
    }
    includeBlock(finalCont,newFooter,newWin);
    newP.appendChild(newText);
    return newWin;
}

//Function for creation weight-measurements container-array:
function weightForm(){
    var poundsArr = [];
    poundsArr.length = 7;
    
    poundsArr[0] = createContainer('pounds');
    poundsArr[1] = createContainer('kilo');
    poundsArr[2] = createContainer('tonn');
    poundsArr[3] = createContainer('grams');
    poundsArr[4] = createContainer('ounces');
    poundsArr[5] = createContainer('stones');
    poundsArr[6] = createContainer('slugs');
    
    return poundsArr;
}

//Function for creation temperature-measurements container-array:
function temperatureForm(){
    var tempArray = [];
    tempArray.length = 7;
    
    tempArray[0] = createContainer('celsius');
    tempArray[1] = createContainer('fahrenheit');
    tempArray[2] = createContainer('kelvin');
    tempArray[3] = createContainer('rankine');
    tempArray[4] = createContainer('delisle');
    tempArray[5] = createContainer('newton');
    tempArray[6] = createContainer('romer');
    tempArray[7] = createContainer('reaumur');
    
    return tempArray;
}

//Function for creation length-measurements container-array:
function lengthForm(){
    var tempArray = [];
    tempArray.length = 7;
    
    tempArray[0] = createContainer('feet');
    tempArray[1] = createContainer('meter');
    tempArray[2] = createContainer('centymeter');
    tempArray[3] = createContainer('kilometer');
    tempArray[4] = createContainer('inch');
    tempArray[5] = createContainer('yard');
    tempArray[6] = createContainer('mile');
    
    return tempArray;
}

//Function for creation speed-measurements container-array:
function speedForm(){
    var tempArray = [];
    tempArray.length = 6;
    
    tempArray[0] = createContainer('mph');
    tempArray[1] = createContainer('kph');
    tempArray[2] = createContainer('fph');
    tempArray[3] = createContainer('iph');
    tempArray[4] = createContainer('knots');
    tempArray[5] = createContainer('mach');
    
    return tempArray;
}

//Function for creation SI-prefixes converter container-array:
function SIForm(){
    var tempArray = [];
    tempArray.length = 21;
    
    tempArray[0] = createContainer('Y');
    tempArray[1] = createContainer('Z');
    tempArray[2] = createContainer('E');
    tempArray[3] = createContainer('P');
    tempArray[4] = createContainer('T');
    tempArray[5] = createContainer('G');
    tempArray[6] = createContainer('M');
    tempArray[7] = createContainer('k');
    tempArray[8] = createContainer('h');
    tempArray[9] = createContainer('da');
    tempArray[10] = createContainer('one');
    tempArray[11] = createContainer('d');
    tempArray[12] = createContainer('c');
    tempArray[13] = createContainer('m');
    tempArray[14] = createContainer('µ');
    tempArray[15] = createContainer('n');
    tempArray[16] = createContainer('p');
    tempArray[17] = createContainer('f');
    tempArray[18] = createContainer('a');
    tempArray[19] = createContainer('z');
    tempArray[20] = createContainer('y');
    
    return tempArray;
}

//Function for creation numeral system converter:
function numForm(){
    var tempArray = [],
    arr = ['binary','ternary','quaternary','quinary','senary','septenary','octonary','nonary','decimal','undenary','duodenary','hexadecimal'];
    tempArray.length = 12;
    
    for(var i=0;i<arr.length;i++){
        tempArray[i] = createContainer(arr[i],'NS');
    }
    return tempArray;
}

//General function for creation a form object:
function createContainer(checkID,NS){
    //Intialize info for pounds:
    var container = document.createElement("div"),
    fluid_cont = document.createElement("div"),
    label_cont = document.createElement("label"),
    input_cont = document.createElement("input"),
    basic_label = document.createElement("div");
    //Set different attributes:
    container.setAttribute("class","ui segment");
    fluid_cont.setAttribute("class","ui fluid right labeled input");
    label_cont.setAttribute("class","ui basic label");
    if(NS !== 'NS'){
        input_cont.setAttribute("type","number");
    } else {
        input_cont.setAttribute("type","text");
    }
    input_cont.setAttribute("min",0);
    basic_label.setAttribute("class","ui basic label");
    //Set additional attributes depending from checkID:
    if(checkID === 'pounds'){
        label_cont.setAttribute("for","pounds");
        label_cont.innerHTML = "Pounds";
        input_cont.setAttribute("placeholder","Enter pounds");
        input_cont.setAttribute("id","pounds");
        input_cont.setAttribute("oninput","weightConverter(this.value,this.id)");
        input_cont.setAttribute("onchange","weightConverter(this.value,this.id)");
        basic_label.innerHTML = "lb";
    } else if(checkID === 'kilo'){
        label_cont.setAttribute("for","kilograms");
        label_cont.innerHTML = "Kilograms";
        input_cont.setAttribute("placeholder","Enter kilograms");
        input_cont.setAttribute("id","kilograms");
        input_cont.setAttribute("oninput","weightConverter(this.value,this.id)");
        input_cont.setAttribute("onchange","weightConverter(this.value,this.id)");
        basic_label.innerHTML = "kg";
    } else if(checkID === 'tonn'){
        label_cont.setAttribute("for","tonnes");
        label_cont.innerHTML = "Tonnes";
        input_cont.setAttribute("placeholder","Enter tonnes");
        input_cont.setAttribute("id","tonnes");
        input_cont.setAttribute("oninput","weightConverter(this.value,this.id)");
        input_cont.setAttribute("onchange","weightConverter(this.value,this.id)");
        basic_label.innerHTML = "t";
    } else if(checkID === 'grams'){
        label_cont.setAttribute("for","grams");
        label_cont.innerHTML = "Grams";
        input_cont.setAttribute("placeholder","Enter grams");
        input_cont.setAttribute("id","grams");
        input_cont.setAttribute("oninput","weightConverter(this.value,this.id)");
        input_cont.setAttribute("onchange","weightConverter(this.value,this.id)");
        basic_label.innerHTML = "gr";
    } else if(checkID === 'ounces'){
        label_cont.setAttribute("for","ounces");
        label_cont.innerHTML = "Ounces";
        input_cont.setAttribute("placeholder","Enter ounces");
        input_cont.setAttribute("id","ounces");
        input_cont.setAttribute("oninput","weightConverter(this.value,this.id)");
        input_cont.setAttribute("onchange","weightConverter(this.value,this.id)");
        basic_label.innerHTML = "oz";
    } else if(checkID === 'stones'){
        label_cont.setAttribute("for","stones");
        label_cont.innerHTML = "Stones";
        input_cont.setAttribute("placeholder","Enter stones");
        input_cont.setAttribute("id","stones");
        input_cont.setAttribute("oninput","weightConverter(this.value,this.id)");
        input_cont.setAttribute("onchange","weightConverter(this.value,this.id)");
        basic_label.innerHTML = "st";
    } else if(checkID === 'slugs'){
        label_cont.setAttribute("for","slugs");
        label_cont.innerHTML = "Slugs";
        input_cont.setAttribute("placeholder","Enter slugs");
        input_cont.setAttribute("id","slugs");
        input_cont.setAttribute("oninput","weightConverter(this.value,this.id)");
        input_cont.setAttribute("onchange","weightConverter(this.value,this.id)");
        basic_label.innerHTML = "sl";
    } else if(checkID === 'celsius'){
        label_cont.setAttribute("for","celsius");
        label_cont.innerHTML = "Celsius";
        input_cont.removeAttribute("min");
        input_cont.setAttribute("placeholder","Enter celsius");
        input_cont.setAttribute("id","celsius");
        input_cont.setAttribute("oninput","tempConverter(this.value,this.id)");
        input_cont.setAttribute("onchange","tempConverter(this.value,this.id)");
        basic_label.innerHTML = "°C";
    } else if(checkID === 'fahrenheit'){
        label_cont.setAttribute("for","fahrenheit");
        label_cont.innerHTML = "Fahrenheit";
        input_cont.removeAttribute("min");
        input_cont.setAttribute("placeholder","Enter fahrenheit");
        input_cont.setAttribute("id","fahrenheit");
        input_cont.setAttribute("oninput","tempConverter(this.value,this.id)");
        input_cont.setAttribute("onchange","tempConverter(this.value,this.id)");
        basic_label.innerHTML = "°F";
    } else if(checkID === 'kelvin'){
        label_cont.setAttribute("for","kelvin");
        label_cont.innerHTML = "Kelvin";
        input_cont.removeAttribute("min");
        input_cont.setAttribute("placeholder","Enter kelvin");
        input_cont.setAttribute("id","kelvin");
        input_cont.setAttribute("oninput","tempConverter(this.value,this.id)");
        input_cont.setAttribute("onchange","tempConverter(this.value,this.id)");
        basic_label.innerHTML = "K";
    } else if(checkID === 'rankine'){
        label_cont.setAttribute("for","rankine");
        label_cont.innerHTML = "Rankine";
        input_cont.removeAttribute("min");
        input_cont.setAttribute("placeholder","Enter rankine");
        input_cont.setAttribute("id","rankine");
        input_cont.setAttribute("oninput","tempConverter(this.value,this.id)");
        input_cont.setAttribute("onchange","tempConverter(this.value,this.id)");
        basic_label.innerHTML = "°R";
    } else if(checkID === 'delisle'){
        label_cont.setAttribute("for","delisle");
        label_cont.innerHTML = "Delisle";
        input_cont.removeAttribute("min");
        input_cont.setAttribute("placeholder","Enter delisle");
        input_cont.setAttribute("id","delisle");
        input_cont.setAttribute("oninput","tempConverter(this.value,this.id)");
        input_cont.setAttribute("onchange","tempConverter(this.value,this.id)");
        basic_label.innerHTML = "°De";
    } else if(checkID === 'newton'){
        label_cont.setAttribute("for","newton");
        label_cont.innerHTML = "Newton";
        input_cont.removeAttribute("min");
        input_cont.setAttribute("placeholder","Enter newton");
        input_cont.setAttribute("id","newton");
        input_cont.setAttribute("oninput","tempConverter(this.value,this.id)");
        input_cont.setAttribute("onchange","tempConverter(this.value,this.id)");
        basic_label.innerHTML = "°N";
    } else if(checkID === 'romer'){
        label_cont.setAttribute("for","romer");
        label_cont.innerHTML = "Rømer";
        input_cont.removeAttribute("min");
        input_cont.setAttribute("placeholder","Enter rømer");
        input_cont.setAttribute("id","romer");
        input_cont.setAttribute("oninput","tempConverter(this.value,this.id)");
        input_cont.setAttribute("onchange","tempConverter(this.value,this.id)");
        basic_label.innerHTML = "°Rø";
    } else if(checkID === 'reaumur'){
        label_cont.setAttribute("for","reaumur");
        label_cont.innerHTML = "Réaumur";
        input_cont.removeAttribute("min");
        input_cont.setAttribute("placeholder","Enter réaumur");
        input_cont.setAttribute("id","reaumur");
        input_cont.setAttribute("oninput","tempConverter(this.value,this.id)");
        input_cont.setAttribute("onchange","tempConverter(this.value,this.id)");
        basic_label.innerHTML = "°Ré";
    } else if(checkID === 'feet'){
        label_cont.setAttribute("for","feet");
        label_cont.innerHTML = "Feets";
        input_cont.removeAttribute("min");
        input_cont.setAttribute("placeholder","Enter feets");
        input_cont.setAttribute("id","feets");
        input_cont.setAttribute("oninput","lengthConverter(this.value,this.id)");
        input_cont.setAttribute("onchange","lengthConverter(this.value,this.id)");
        basic_label.innerHTML = "ft";
    } else if(checkID === 'meter'){
        label_cont.setAttribute("for","meters");
        label_cont.innerHTML = "Meters";
        input_cont.removeAttribute("min");
        input_cont.setAttribute("placeholder","Enter meters");
        input_cont.setAttribute("id","meters");
        input_cont.setAttribute("oninput","lengthConverter(this.value,this.id)");
        input_cont.setAttribute("onchange","lengthConverter(this.value,this.id)");
        basic_label.innerHTML = "m";
    } else if(checkID === 'centymeter'){
        label_cont.setAttribute("for","centymeter");
        label_cont.innerHTML = "Centymeters";
        input_cont.removeAttribute("min");
        input_cont.setAttribute("placeholder","Enter centymeters");
        input_cont.setAttribute("id","centymeters");
        input_cont.setAttribute("oninput","lengthConverter(this.value,this.id)");
        input_cont.setAttribute("onchange","lengthConverter(this.value,this.id)");
        basic_label.innerHTML = "cm";
    } else if(checkID === 'kilometer'){
        label_cont.setAttribute("for","kilometers");
        label_cont.innerHTML = "Kilometers";
        input_cont.removeAttribute("min");
        input_cont.setAttribute("placeholder","Enter kilometers");
        input_cont.setAttribute("id","kilometers");
        input_cont.setAttribute("oninput","lengthConverter(this.value,this.id)");
        input_cont.setAttribute("onchange","lengthConverter(this.value,this.id)");
        basic_label.innerHTML = "km";
    } else if(checkID === 'yard'){
        label_cont.setAttribute("for","yardes");
        label_cont.innerHTML = "Yards";
        input_cont.removeAttribute("min");
        input_cont.setAttribute("placeholder","Enter yards");
        input_cont.setAttribute("id","yards");
        input_cont.setAttribute("oninput","lengthConverter(this.value,this.id)");
        input_cont.setAttribute("onchange","lengthConverter(this.value,this.id)");
        basic_label.innerHTML = "yd";
    } else if(checkID === 'inch'){
        label_cont.setAttribute("for","inches");
        label_cont.innerHTML = "Inches";
        input_cont.removeAttribute("min");
        input_cont.setAttribute("placeholder","Enter inches");
        input_cont.setAttribute("id","inches");
        input_cont.setAttribute("oninput","lengthConverter(this.value,this.id)");
        input_cont.setAttribute("onchange","lengthConverter(this.value,this.id)");
        basic_label.innerHTML = '"';
    } else if(checkID === 'mile'){
        label_cont.setAttribute("for","miles");
        label_cont.innerHTML = "Miles";
        input_cont.removeAttribute("min");
        input_cont.setAttribute("placeholder","Enter miles");
        input_cont.setAttribute("id","miles");
        input_cont.setAttribute("oninput","lengthConverter(this.value,this.id)");
        input_cont.setAttribute("onchange","lengthConverter(this.value,this.id)");
        basic_label.innerHTML = "m";
    } else if(checkID === 'mph'){
        label_cont.setAttribute("for","mph");
        label_cont.innerHTML = "MPH";
        input_cont.setAttribute("placeholder","Enter miles per hour");
        input_cont.setAttribute("id","mph");
        input_cont.setAttribute("oninput","speedConverter(this.value,this.id)");
        input_cont.setAttribute("onchange","speedConverter(this.value,this.id)");
        basic_label.innerHTML = "mph";
    } else if(checkID === 'kph'){
        label_cont.setAttribute("for","kph");
        label_cont.innerHTML = "KPH";
        input_cont.setAttribute("placeholder","Enter kilometers per hour");
        input_cont.setAttribute("id","kph");
        input_cont.setAttribute("oninput","speedConverter(this.value,this.id)");
        input_cont.setAttribute("onchange","speedConverter(this.value,this.id)");
        basic_label.innerHTML = "kph";
    } else if(checkID === 'fph'){
        label_cont.setAttribute("for","fph");
        label_cont.innerHTML = "FPH";
        input_cont.setAttribute("placeholder","Enter feet per hour");
        input_cont.setAttribute("id","fph");
        input_cont.setAttribute("oninput","speedConverter(this.value,this.id)");
        input_cont.setAttribute("onchange","speedConverter(this.value,this.id)");
        basic_label.innerHTML = "fph";
    } else if(checkID === 'iph'){
        label_cont.setAttribute("for","iph");
        label_cont.innerHTML = "IPH";
        input_cont.setAttribute("placeholder","Enter inches per hour");
        input_cont.setAttribute("id","iph");
        input_cont.setAttribute("oninput","speedConverter(this.value,this.id)");
        input_cont.setAttribute("onchange","speedConverter(this.value,this.id)");
        basic_label.innerHTML = "iph";
    } else if(checkID === 'knots'){
        label_cont.setAttribute("for","knots");
        label_cont.innerHTML = "Knots";
        input_cont.setAttribute("placeholder","Enter knots");
        input_cont.setAttribute("id","knots");
        input_cont.setAttribute("oninput","speedConverter(this.value,this.id)");
        input_cont.setAttribute("onchange","speedConverter(this.value,this.id)");
        basic_label.innerHTML = "kn";
    } else if(checkID === 'mach'){
        label_cont.setAttribute("for","mach");
        label_cont.innerHTML = "Mach";
        input_cont.setAttribute("placeholder","Enter mach");
        input_cont.setAttribute("id","mach");
        input_cont.setAttribute("oninput","speedConverter(this.value,this.id)");
        input_cont.setAttribute("onchange","speedConverter(this.value,this.id)");
        basic_label.innerHTML = "M";
    } else if(checkID === 'Y'){
        label_cont.setAttribute("for","yotta");
        label_cont.innerHTML = "Yotta";
        input_cont.setAttribute("placeholder","Enter unit with yotta...");
        input_cont.setAttribute("id","yotta");
        input_cont.setAttribute("oninput","siConverter(this.value,this.id)");
        input_cont.setAttribute("onchange","siConverter(this.value,this.id)");
        basic_label.innerHTML = "10<sup>24</sup>";
    } else if(checkID === 'Z'){
        label_cont.setAttribute("for","zetta");
        label_cont.innerHTML = "Zetta";
        input_cont.setAttribute("placeholder","Enter unit with zetta...");
        input_cont.setAttribute("id","zetta");
        input_cont.setAttribute("oninput","siConverter(this.value,this.id)");
        input_cont.setAttribute("onchange","siConverter(this.value,this.id)");
        basic_label.innerHTML = "10<sup>21</sup>";
    } else if(checkID === 'E'){
        label_cont.setAttribute("for","exa");
        label_cont.innerHTML = "Exa";
        input_cont.setAttribute("placeholder","Enter unit with exa...");
        input_cont.setAttribute("id","exa");
        input_cont.setAttribute("oninput","siConverter(this.value,this.id)");
        input_cont.setAttribute("onchange","siConverter(this.value,this.id)");
        basic_label.innerHTML = "10<sup>18</sup>";
    } else if(checkID === 'P'){
        label_cont.setAttribute("for","petta");
        label_cont.innerHTML = "Petta";
        input_cont.setAttribute("placeholder","Enter unit with petta...");
        input_cont.setAttribute("id","petta");
        input_cont.setAttribute("oninput","siConverter(this.value,this.id)");
        input_cont.setAttribute("onchange","siConverter(this.value,this.id)");
        basic_label.innerHTML = "10<sup>15</sup>";
    } else if(checkID === 'T'){
        label_cont.setAttribute("for","tera");
        label_cont.innerHTML = "Tera";
        input_cont.setAttribute("placeholder","Enter unit with tera...");
        input_cont.setAttribute("id","tera");
        input_cont.setAttribute("oninput","siConverter(this.value,this.id)");
        input_cont.setAttribute("onchange","siConverter(this.value,this.id)");
        basic_label.innerHTML = "10<sup>12</sup>";
    } else if(checkID === 'G'){
        label_cont.setAttribute("for","giga");
        label_cont.innerHTML = "Giga";
        input_cont.setAttribute("placeholder","Enter unit with giga...");
        input_cont.setAttribute("id","giga");
        input_cont.setAttribute("oninput","siConverter(this.value,this.id)");
        input_cont.setAttribute("onchange","siConverter(this.value,this.id)");
        basic_label.innerHTML = "10<sup>9</sup>";
    } else if(checkID === 'M'){
        label_cont.setAttribute("for","mega");
        label_cont.innerHTML = "Mega";
        input_cont.setAttribute("placeholder","Enter unit with mega...");
        input_cont.setAttribute("id","mega");
        input_cont.setAttribute("oninput","siConverter(this.value,this.id)");
        input_cont.setAttribute("onchange","siConverter(this.value,this.id)");
        basic_label.innerHTML = "10<sup>6</sup>";
    } else if(checkID === 'k'){
        label_cont.setAttribute("for","kilo");
        label_cont.innerHTML = "Kilo";
        input_cont.setAttribute("placeholder","Enter unit with kilo...");
        input_cont.setAttribute("id","kilo");
        input_cont.setAttribute("oninput","siConverter(this.value,this.id)");
        input_cont.setAttribute("onchange","siConverter(this.value,this.id)");
        basic_label.innerHTML = "10<sup>3</sup>";
    } else if(checkID === 'h'){
        label_cont.setAttribute("for","hecto");
        label_cont.innerHTML = "Hecto";
        input_cont.setAttribute("placeholder","Enter unit with hecto...");
        input_cont.setAttribute("id","hecto");
        input_cont.setAttribute("oninput","siConverter(this.value,this.id)");
        input_cont.setAttribute("onchange","siConverter(this.value,this.id)");
        basic_label.innerHTML = "10<sup>2</sup>";
    } else if(checkID === 'da'){
        label_cont.setAttribute("for","deca");
        label_cont.innerHTML = "Deca";
        input_cont.setAttribute("placeholder","Enter unit with deca...");
        input_cont.setAttribute("id","deca");
        input_cont.setAttribute("oninput","siConverter(this.value,this.id)");
        input_cont.setAttribute("onchange","siConverter(this.value,this.id)");
        basic_label.innerHTML = "10<sup>1</sup>";
    } else if(checkID === 'one'){
        label_cont.setAttribute("for","one");
        label_cont.innerHTML = "--//--";
        input_cont.setAttribute("placeholder","Enter unit...");
        input_cont.setAttribute("id","one");
        input_cont.setAttribute("oninput","siConverter(this.value,this.id)");
        input_cont.setAttribute("onchange","siConverter(this.value,this.id)");
        basic_label.innerHTML = "10<sup>0</sup>";
    } else if(checkID === 'd'){
        label_cont.setAttribute("for","deci");
        label_cont.innerHTML = "Deci";
        input_cont.setAttribute("placeholder","Enter unit with deci...");
        input_cont.setAttribute("id","deci");
        input_cont.setAttribute("oninput","siConverter(this.value,this.id)");
        input_cont.setAttribute("onchange","siConverter(this.value,this.id)");
        basic_label.innerHTML = "10<sup>-1</sup>";
    } else if(checkID === 'c'){
        label_cont.setAttribute("for","centi");
        label_cont.innerHTML = "Centi";
        input_cont.setAttribute("placeholder","Enter unit with centi...");
        input_cont.setAttribute("id","centi");
        input_cont.setAttribute("oninput","siConverter(this.value,this.id)");
        input_cont.setAttribute("onchange","siConverter(this.value,this.id)");
        basic_label.innerHTML = "10<sup>-2</sup>";
    } else if(checkID === 'm'){
        label_cont.setAttribute("for","mili");
        label_cont.innerHTML = "Mili";
        input_cont.setAttribute("placeholder","Enter unit with mili...");
        input_cont.setAttribute("id","mili");
        input_cont.setAttribute("oninput","siConverter(this.value,this.id)");
        input_cont.setAttribute("onchange","siConverter(this.value,this.id)");
        basic_label.innerHTML = "10<sup>-3</sup>";
    } else if(checkID === 'µ'){
        label_cont.setAttribute("for","micro");
        label_cont.innerHTML = "Micro";
        input_cont.setAttribute("placeholder","Enter unit with micro...");
        input_cont.setAttribute("id","micro");
        input_cont.setAttribute("oninput","siConverter(this.value,this.id)");
        input_cont.setAttribute("onchange","siConverter(this.value,this.id)");
        basic_label.innerHTML = "10<sup>-6</sup>";
    } else if(checkID === 'n'){
        label_cont.setAttribute("for","nano");
        label_cont.innerHTML = "Nano";
        input_cont.setAttribute("placeholder","Enter unit with nano...");
        input_cont.setAttribute("id","nano");
        input_cont.setAttribute("oninput","siConverter(this.value,this.id)");
        input_cont.setAttribute("onchange","siConverter(this.value,this.id)");
        basic_label.innerHTML = "10<sup>-9</sup>";
    } else if(checkID === 'p'){
        label_cont.setAttribute("for","pico");
        label_cont.innerHTML = "Pico";
        input_cont.setAttribute("placeholder","Enter unit with pico...");
        input_cont.setAttribute("id","pico");
        input_cont.setAttribute("oninput","siConverter(this.value,this.id)");
        input_cont.setAttribute("onchange","siConverter(this.value,this.id)");
        basic_label.innerHTML = "10<sup>-12</sup>";
    } else if(checkID === 'f'){
        label_cont.setAttribute("for","femto");
        label_cont.innerHTML = "Femto";
        input_cont.setAttribute("placeholder","Enter unit with femto...");
        input_cont.setAttribute("id","femto");
        input_cont.setAttribute("oninput","siConverter(this.value,this.id)");
        input_cont.setAttribute("onchange","siConverter(this.value,this.id)");
        basic_label.innerHTML = "10<sup>-15</sup>";
    } else if(checkID === 'a'){
        label_cont.setAttribute("for","atto");
        label_cont.innerHTML = "Atto";
        input_cont.setAttribute("placeholder","Enter unit with atto...");
        input_cont.setAttribute("id","atto");
        input_cont.setAttribute("oninput","siConverter(this.value,this.id)");
        input_cont.setAttribute("onchange","siConverter(this.value,this.id)");
        basic_label.innerHTML = "10<sup>-18</sup>";
    } else if(checkID === 'z'){
        label_cont.setAttribute("for","zepto");
        label_cont.innerHTML = "Zepto";
        input_cont.setAttribute("placeholder","Enter unit with zepto...");
        input_cont.setAttribute("id","zepto");
        input_cont.setAttribute("oninput","siConverter(this.value,this.id)");
        input_cont.setAttribute("onchange","siConverter(this.value,this.id)");
        basic_label.innerHTML = "10<sup>-21</sup>";
    } else if(checkID === 'y'){
        label_cont.setAttribute("for","yocto");
        label_cont.innerHTML = "Yocto";
        input_cont.setAttribute("placeholder","Enter unit with yocto...");
        input_cont.setAttribute("id","yocto");
        input_cont.setAttribute("oninput","siConverter(this.value,this.id)");
        input_cont.setAttribute("onchange","siConverter(this.value,this.id)");
        basic_label.innerHTML = "10<sup>-24</sup>";
    } else if(checkID === 'binary'){
        checkIDCreate(label_cont,input_cont,basic_label,'binary','Binary',2);
    } else if(checkID === 'ternary'){
        checkIDCreate(label_cont,input_cont,basic_label,'ternary','Ternary',3);
    } else if(checkID === 'quaternary'){
        checkIDCreate(label_cont,input_cont,basic_label,'quaternary','Quaternary',4);
    } else if(checkID === 'quinary'){
        checkIDCreate(label_cont,input_cont,basic_label,'quinary','Quinary',5);
    } else if(checkID === 'senary'){
        checkIDCreate(label_cont,input_cont,basic_label,'senary','Senary',6);
    } else if(checkID === 'septenary'){
        checkIDCreate(label_cont,input_cont,basic_label,'septenary','Septenary',7);
    } else if(checkID === 'octonary'){
        checkIDCreate(label_cont,input_cont,basic_label,'octonary','Octonary',8);
    } else if(checkID === 'nonary'){
        checkIDCreate(label_cont,input_cont,basic_label,'nonary','Nonary',9);
    } else if(checkID === 'decimal'){
        checkIDCreate(label_cont,input_cont,basic_label,'decimal','Decimal',10);
    } else if(checkID === 'undenary'){
        checkIDCreate(label_cont,input_cont,basic_label,'undenary','Undenary',11);
    } else if(checkID === 'duodenary'){
        checkIDCreate(label_cont,input_cont,basic_label,'duodenary','Duodenary',12);
    } else if(checkID === 'hexadecimal'){
        checkIDCreate(label_cont,input_cont,basic_label,'hexadecimal','Hexadecimal',16);
    }
    
    //Appending childs to parents:
    container.appendChild(fluid_cont);
    fluid_cont.appendChild(label_cont);
    fluid_cont.appendChild(input_cont);
    fluid_cont.appendChild(basic_label);
    
    return container;
}

//Function for creation all form-elements in the block:
function includeBlock(formOb,beforeCont,genCont){
    var i;
    for(i=0;i<formOb.length;i++){
        genCont.insertBefore(formOb[i],beforeCont);
    }
}

//Function-block for all weights converting:
function weightConverter(val,idTag){
    var converterApp = {
        lb : document.getElementById("pounds"),
        kg : document.getElementById("kilograms"),
        t : document.getElementById("tonnes"),
        gr : document.getElementById("grams"),
        oz : document.getElementById("ounces"),
        st : document.getElementById("stones"),
        sl : document.getElementById("slugs"),
        
        spreader : function(Tag){
            switch(Tag){
                case 'pounds':
                    this.poundConverter(val);
                    break;
                case 'kilograms':
                    this.kiloConverter(val);
                    break;
                case 'tonnes':
                    this.tonnConverter(val);
                    break;
                case 'grams':
                    this.gramConverter(val);
                    break;
                case 'ounces':
                    this.ounceConverter(val);
                    break;
                case 'stones':
                    this.stoneConverter(val);
                    break;
                case 'slugs' :
                    this.slugConverter(val);
                    break;
            }
        },
        
        poundConverter : function(lb){
            if(lb !== ""){
            this.kg.value = this.roundNumber(lb/2.2046);
            this.t.value = this.roundNumber(lb/2204.6);
            this.gr.value = this.roundNumber(lb/0.0022046);
            this.oz.value = this.roundNumber(lb*16);
            this.st.value = this.roundNumber(lb*0.07142);
            this.sl.value = this.roundNumber(lb*0.03108); 
            } else {
                this.kg.value = "";
                this.t.value = "";
                this.gr.value = "";
                this.oz.value = "";
                this.st.value = "";
                this.sl.value = "";
            }
        },
        
        kiloConverter : function(kg){
            if(kg !== ""){
                this.lb.value = this.roundNumber(kg*2.2046);
                this.t.value = this.roundNumber(kg/1000);
                this.gr.value = this.roundNumber(kg*1000);
                this.oz.value = this.roundNumber(kg*35.274);
                this.st.value = this.roundNumber(kg*0.1574);
                this.sl.value = this.roundNumber(kg/14.59390);
            } else {
                this.lb.value = "";
                this.t.value = "";
                this.gr.value = "";
                this.oz.value = "";
                this.st.value = "";
                this.sl.value = "";
            }
        },
        
        tonnConverter : function(t){
            if(t !== ""){
                this.lb.value = this.roundNumber(t/0.000453);
                this.kg.value = this.roundNumber(t*1000);
                this.gr.value = this.roundNumber(t*1000000);
                this.oz.value = this.roundNumber(t*35273.96);
                this.st.value = this.roundNumber(t/0.00635);
                this.sl.value = this.roundNumber(t/0.01459);
            } else {
                this.lb.value = "";
                this.kg.value = "";
                this.gr.value = "";
                this.oz.value = "";
                this.st.value = "";
                this.sl.value = "";
            }
        },
        
        gramConverter : function(gr){
            if(gr !== ""){
                this.lb.value = this.roundNumber(gr*0.0022046);
                this.kg.value = this.roundNumber(gr/1000);
                this.t.value = this.roundNumber(gr/1000000);
                this.oz.value = this.roundNumber(gr*0.03527396);
                this.st.value = this.roundNumber(gr*0.00015747);
                this.sl.value = this.roundNumber(gr/14593.90);
            } else {
                this.lb.value = "";
                this.t.value = "";
                this.kg.value = "";
                this.oz.value = "";
                this.st.value = "";
                this.sl.value = "";
            }
        },
        
        ounceConverter : function(oz){
            if(oz !== ""){
                this.lb.value = this.roundNumber(oz/16);
                this.kg.value = this.roundNumber(oz/35.274);
                this.t.value = this.roundNumber(oz/35274);
                this.gr.value = this.roundNumber(oz/0.035274);
                this.st.value = this.roundNumber(oz*0.004464);
                this.sl.value = this.roundNumber(oz/514.78);
            } else {
                this.lb.value = "";
                this.kg.value = "";
                this.t.value = "";
                this.gr.value = "";
                this.st.value = "";
                this.sl.value = "";
            }
        },
        
        stoneConverter : function(st){
            if(st !== ""){
                this.lb.value = this.roundNumber(st*14.00);
                this.kg.value = this.roundNumber(st/0.1574);
                this.t.value = this.roundNumber(st/157.47);
                this.gr.value = this.roundNumber(st/0.000157);
                this.oz.value = this.roundNumber(st*224);
                this.sl.value = this.roundNumber(st*0.435133);
            } else {
                this.lb.value = "";
                this.kg.value = "";
                this.t.value = "";
                this.gr.value = "";
                this.oz.value = "";
                this.sl.value = "";
            }
        },
        
        slugConverter : function(sl){
            if(sl !== ""){
                this.lb.value = this.roundNumber(sl*32.174);
                this.kg.value = this.roundNumber(sl*14.593);
                this.t.value = this.roundNumber(sl*0.0146);
                this.gr.value = this.roundNumber(sl*14593.90);
                this.oz.value = this.roundNumber(sl*514.78);
                this.st.value = this.roundNumber(sl*2.29814);
            } else {
                this.lb.value = "";
                this.kg.value = "";
                this.t.value = "";
                this.gr.value = "";
                this.oz.value = "";
                this.st.value = "";
            }
        },
        
        roundNumber : function(temp){
            return (Math.round(temp*100)/100).toFixed(3);
        }
    }
    converterApp.spreader(idTag);
}

//Function block for all temperature converting:
function tempConverter(val,idTag){
    var converterApp = {
        C : document.getElementById("celsius"),
        F : document.getElementById("fahrenheit"),
        K : document.getElementById("kelvin"),
        R : document.getElementById("rankine"),
        D : document.getElementById("delisle"),
        N : document.getElementById("newton"),
        Ro : document.getElementById("romer"),
        Re : document.getElementById("reaumur"),
        
        spreader : function(Tag){
            switch(Tag){
                case 'celsius':
                    this.celsiusConverter(val);
                    break;
                case 'fahrenheit':
                    this.fahrenConverter(val);
                    break;
                case 'kelvin':
                    this.kelvinConverter(val);
                    break;
                case 'rankine':
                    this.rankineConverter(val);
                    break;
                case 'delisle':
                    this.delisleConverter(val);
                    break;
                case 'newton':
                    this.newtonConverter(val);
                    break;
                case 'romer' :
                    this.romerConverter(val);
                    break;
                case 'reaumur':
                    this.reaumurConverter(val);
                    break;
            }
        },
        
        celsiusConverter : function(C){
            if(C !== ""){
                this.F.value = this.roundNumber(C*(9/5)+32);
                this.K.value = this.roundNumber(C*1+273.15);
                this.R.value = this.roundNumber((C*1+273.15)*(9/5));
                this.D.value = this.roundNumber((100-C*1)*(3/2));
                this.N.value = this.roundNumber(C*(33/100));
                this.Ro.value = this.roundNumber(C*(21/40)+7.5);
                this.Re.value = this.roundNumber(C*(4/5));
            } else {
                this.F.value = "";
                this.K.value = "";
                this.R.value = "";
                this.D.value = "";
                this.N.value = "";
                this.Ro.value = "";
                this.Re.value = "";
            }
        },
        
        fahrenConverter : function(F){
          if(F !== ""){
              this.C.value = this.roundNumber((F*1-32)*(5/9));
              this.K.value = this.roundNumber((F*1+459.67)*(5/9));
              this.R.value = this.roundNumber(F*1+459.67);
              this.D.value = this.roundNumber((212-F*1)*(5/6));
              this.N.value = this.roundNumber((F*1-32)*(11/60));
              this.Ro.value = this.roundNumber((F*1-32)*(7/24)+7.5);
              this.Re.value = this.roundNumber((F*1-32)*(4/9));
          } else {
              this.C.value = "";
              this.K.value = "";
              this.R.value = "";
              this.D.value = "";
              this.N.value = "";
              this.Ro.value = "";
              this.Re.value = "";
          }  
        },
        
        kelvinConverter : function(K){
          if(K !== ""){
              this.C.value = this.roundNumber(K*1-273.15);
              this.F.value = this.roundNumber((K*(9/5))-459.67);
              this.R.value = this.roundNumber(K*(9/5));
              this.D.value = this.roundNumber((373.15-K*1)*(3/2));
              this.N.value = this.roundNumber((K*1-273.15)*(33/100));
              this.Ro.value = this.roundNumber((K*1-273.15)*(21/40));
              this.Re.value = this.roundNumber((K*1-273.15)*(4/5));
          } else {
              this.C.value = "";
              this.F.value = "";
              this.R.value = "";
              this.D.value = "";
              this.N.value = "";
              this.Ro.value = "";
              this.Re.value = "";
          } 
        },
        
        rankineConverter : function(R){
            if(R !== ""){
                this.C.value = this.roundNumber((R*1-491.67)*(5/9));
                this.F.value = this.roundNumber(R*1-459.67);
                this.K.value = this.roundNumber(R*(5/9));
                this.D.value = this.roundNumber((671.67-R*1)*(5/6));
                this.N.value = this.roundNumber((R*1-491.67)*(11/60))
                this.Ro.value = this.roundNumber((R*1-491.67)*(7/24));
                this.Re.value = this.roundNumber((R*1-491.67)*(4/9));
            } else {
                this.C.value = "";
                this.F.value = "";
                this.K.value = "";
                this.D.value = "";
                this.N.value = "";
                this.Ro.value = "";
                this.Re.value = "";
            }
        },
        
        delisleConverter : function(D){
            if(D !== ""){
                this.C.value = this.roundNumber((100-D*1)*(2/3));
                this.F.value = this.roundNumber((212-D*1)*(6/5));
                this.K.value = this.roundNumber((373.15-D*1)*(2/3));
                this.R.value = this.roundNumber((671.67-D*1)*(6/5));
                this.N.value = this.roundNumber((33-D*1)*(11/50));
                this.Ro.value = this.roundNumber((60-D*1)*(7/20));
                this.Re.value = this.roundNumber((80-D*1)*(8/15));
            } else {
                this.C.value = "";
                this.F.value = "";
                this.K.value = "";
                this.R.value = "";
                this.N.value = "";
                this.Ro.value = "";
                this.Re.value = "";
            }
        },
        
        newtonConverter : function(N){
            if(N !== ""){
                this.C.value = this.roundNumber(N*(100/33));
                this.F.value = this.roundNumber(N*(60/11)+32);
                this.K.value = this.roundNumber(N*(100/33)+273.15);
                this.R.value = this.roundNumber(N*(60/11)+491.67);
                this.D.value = this.roundNumber((33-N*1)*(50/11));
                this.Ro.value = this.roundNumber((N*35/22)+7.5);
                this.Re.value = this.roundNumber(N*(80/33));
            } else {
                this.C.value = "";
                this.F.value = "";
                this.K.value = "";
                this.R.value = "";
                this.D.value = "";
                this.Ro.value = "";
                this.Re.value = "";
            }
        },
        
        romerConverter : function(Ro){
            if(Ro !== ""){
                this.C.value = this.roundNumber((Ro*1-7.5)*(40/21));
                this.F.value = this.roundNumber((Ro-7.5)*(24/7)+32);
                this.K.value = this.roundNumber((Ro-7.5)*(40/21)+273.15);
                this.R.value = this.roundNumber((Ro-7.5)*(24/7)+491.67);
                this.D.value = this.roundNumber((60-Ro*1)*(20/7));
                this.N.value = this.roundNumber((Ro-7.5)*(22/35));
                this.Re.value = this.roundNumber((Ro-7.5)*(32/21));
            } else {
                this.C.value = "";
                this.F.value = "";
                this.K.value = "";
                this.R.value = "";
                this.D.value = "";
                this.N.value = "";
                this.Re.value = "";
            }
        },
        
        reaumurConverter : function(Re){
            if(Re !== ""){
                this.C.value = this.roundNumber(Re*(5/4));
                this.F.value = this.roundNumber(Re*(9/4)+32);
                this.K.value = this.roundNumber(Re*(5/4)+273.15);
                this.R.value = this.roundNumber(Re*(9/4)+491.67);
                this.D.value = this.roundNumber((80-Re*1)*(15/8));
                this.N.value = this.roundNumber(Re*(33/80));
                this.Ro.value = this.roundNumber(Re*(21/32)+7.5);
            } else {
                this.C.value = "";
                this.F.value = "";
                this.K.value = "";
                this.R.value = "";
                this.D.value = "";
                this.N.value = "";
                this.Ro.value = "";
            }
        },
        
        roundNumber : function(temp){
            return (Math.round(temp*100)/100).toFixed(3);
        }
    }
    converterApp.spreader(idTag);
}

//Function block for all length convertions:
function lengthConverter(val,idTag){
    var converterApp = {
        ft : document.getElementById("feets"),
        m : document.getElementById("meters"),
        cm : document.getElementById("centymeters"),
        km : document.getElementById("kilometers"),
        inc : document.getElementById("inches"),
        yd : document.getElementById("yards"),
        ml : document.getElementById("miles"),
        
        spreader : function(Tag){
            switch(Tag){
                case 'feets':
                    this.feetsConverter(val);
                    break;
                case 'meters':
                    this.metersConverter(val);
                    break;
                case 'centymeters':
                    this.centyConverter(val);
                    break;
                case 'kilometers':
                    this.kiloConverter(val);
                    break;
                case 'inches':
                    this.inchesConverter(val);
                    break;
                case 'yards':
                    this.yardsConverter(val);
                    break;
                case 'miles':
                    this.milesConverter(val);
                    break;
            }
        },
        
        feetsConverter : function(ft){
            if(ft !== ""){
                this.m.value = this.roundNumber(ft/3.208);
                this.cm.value = this.roundNumber(ft/0.032808);
                this.km.value = this.roundNumber(ft/3280.8);
                this.inc.value = this.roundNumber(ft*12);
                this.yd.value = this.roundNumber(ft*0.33333);
                this.ml.value = this.roundNumber(ft*0.00018939);
            } else {
                this.m.value = "";
                this.cm.value = "";
                this.km.value = "";
                this.inc.value = "";
                this.yd.value = "";
                this.ml.value = "";
            }
        },
        
        metersConverter : function(m){
            if(m !== ""){
                this.ft.value = this.roundNumber(m*3.2808);
                this.cm.value = this.roundNumber(m/0.01);
                this.km.value = this.roundNumber(m/1000);
                this.inc.value = this.roundNumber(m*39.370);
                this.yd.value = this.roundNumber(m*1.0936);
                this.ml.value = this.roundNumber(m*0.00062137);
            } else {
                this.ft.value = "";
                this.cm.value = "";
                this.km.value = "";
                this.inc.value = "";
                this.yd.value = "";
                this.ml.value = "";
            }
        },
        
        centyConverter : function(cm){
            if(cm !== ""){
                this.ft.value = this.roundNumber(cm*0.032808);
                this.m.value = this.roundNumber(cm/100);
                this.km.value = this.roundNumber(cm/100000);
                this.inc.value = this.roundNumber(cm*0.39370);
                this.yd.value = this.roundNumber(cm*0.010936);
                this.ml.value = this.roundNumber(cm*0.0000062137);
            } else {
                this.ft.value = "";
                this.m.value = "";
                this.km.value = "";
                this.inc.value = "";
                this.yd.value = "";
                this.ml.value = "";
            }
        },
        
        kiloConverter : function(km){
            if(km !== ""){
                this.ft.value = this.roundNumber(km*3280.8);
                this.m.value = this.roundNumber(km*1000);
                this.cm.value = this.roundNumber(km*100000);
                this.inc.value = this.roundNumber(km*39370);
                this.yd.value = this.roundNumber(km*1093.6);
                this.ml.value = this.roundNumber(km*0.62137);
            } else {
                this.ft.value = "";
                this.m.value = "";
                this.cm.value = "";
                this.inc.value = "";
                this.yd.value = "";
                this.ml.value = "";
            }
        },
        
        inchesConverter : function(inc){
            if(inc !== ""){
                this.ft.value = this.roundNumber(inc*0.083333);
                this.m.value = this.roundNumber(inc/39.370);
                this.cm.value = this.roundNumber(inc/0.39370);
                this.km.value = this.roundNumber(inc/39370);
                this.yd.value = this.roundNumber(inc*0.02778);
                this.ml.value = this.roundNumber(inc*0.000015783);
            } else {
                this.ft.value = "";
                this.m.value = "";
                this.cm.value = "";
                this.km.value = "";
                this.yd.value = "";
                this.ml.value = "";
            }
        },
        
        yardsConverter : function(yd){
            if(yd !== ""){
                this.ft.value = this.roundNumber(yd*3);
                this.m.value = this.roundNumber(yd/1.0936);
                this.cm.value = this.roundNumber(yd/0.010936);
                this.km.value = this.roundNumber(yd/1093.6);
                this.inc.value = this.roundNumber(yd*36);
                this.ml.value = this.roundNumber(yd*0.00056818);
            } else {
                this.ft.value = "";
                this.m.value = "";
                this.cm.value = "";
                this.km.value = "";
                this.inc.value = "";
                this.ml.value = "";
            }
        },
        
        milesConverter : function(ml){
            if(ml !== ""){
                this.ft.value = this.roundNumber(ml*5280);
                this.m.value = this.roundNumber(ml/0.00062137);
                this.cm.value = this.roundNumber(ml/0.0000062137);
                this.km.value = this.roundNumber(ml/0.62137);
                this.inc.value = this.roundNumber(ml*63360);
                this.yd.value = this.roundNumber(ml*1760);
            } else {
                this.ft.value = "";
                this.m.value = "";
                this.cm.value = "";
                this.km.value = "";
                this.inc.value = "";
                this.yd.value = "";
            }
        },
        
        roundNumber : function(temp){
            return (Math.round(temp*100)/100).toFixed(3);
        }
    }
    converterApp.spreader(idTag);
}

//Function block for all speed converting:
function speedConverter(val,idTag){
    var converterApp = {
        MPH : document.getElementById("mph"),
        KPH : document.getElementById("kph"),
        FPH : document.getElementById("fph"),
        IPH : document.getElementById("iph"),
        kn : document.getElementById("knots"),
        M : document.getElementById("mach"),
        val_fl : parseFloat(val),
        
        spreader : function(Tag){
            switch(Tag){
                case 'mph':
                    this.mphConverter(this.val_fl);
                    break;
                case 'kph':
                    this.kphConverter(this.val_fl);
                    break;
                case 'fph':
                    this.fphConverter(this.val_fl);
                    break;
                case 'iph':
                    this.iphConverter(this.val_fl);
                    break;
                case 'knots':
                    this.knotsConverter(this.val_fl);
                    break;
                case 'mach':
                    this.machConverter(this.val_fl);
                    break;
            }
        },
        
        mphConverter : function(MPH){
            if(MPH !== ""){
                this.KPH.value = this.roundNumber(MPH*1.609344);
                this.FPH.value = this.roundNumber(MPH*5.280);
                this.IPH.value = this.roundNumber(MPH*63.360);
                this.kn.value = this.roundNumber(MPH/1.150779);
                this.M.value = this.roundNumber(MPH/761.207);
            } else {
                this.KPH.value = "";
                this.FPH.value = "";
                this.IPH.value = "";
                this.knots.value = "";
                this.M.value = "";
            }
        },
        
        kphConverter : function(KPH){
            if(KPH !== ""){
                this.MPH.value = this.roundNumber(KPH/1.609344);
                this.FPH.value = this.roundNumber(KPH*3280.83989);
                this.IPH.value = this.roundNumber(KPH/0.0000254);
                this.kn.value = this.roundNumber(KPH/1.852);
                this.M.value = this.roundNumber(KPH/1225.044);
            } else {
                this.MPH.value = "";
                this.FPH.value = "";
                this.IPH.value = "";
                this.kn.value = "";
                this.M.value = "";
            }
        },
        
        fphConverter : function(FPH){
            if(FPH !== ""){
                this.MPH.value = this.roundNumber(FPH/5280);
                this.KPH.value = this.roundNumber(FPH*0.0003048);
                this.IPH.value = this.roundNumber(FPH*0.20000000008031);
                this.kn.value = this.roundNumber(FPH/6076.1154831196);
                this.M.value = this.roundNumber(FPH*2.4880738977539E-7);
            } else {
                this.MPH.value = "";
                this.KPH.value = "";
                this.IPH.value = "";
                this.kn.value = "";
                this.M.value = "";
            }
        },
        
        iphConverter : function(inc){
            if(inc !== ""){
                this.MPH.value = this.roundNumber(inc/63360);
                this.KPH.value = this.roundNumber(inc*0.0000254);
                this.FPH.value = this.roundNumber(inc/12);
                this.kn.value = this.roundNumber(inc*1.3714902807775E-5);
                this.M.value = this.roundNumber(inc*2.0733949147949E-8);
            } else {
                this.MPH.value = "";
                this.KPH.value = "";
                this.FPHs.value = "";
                this.kn.value = "";
                this.M.value = "";
            }
        },
        
        knotsConverter : function(kn){
            if(kn !== ""){
                this.MPH.value = this.roundNumber(kn*1.150779);
                this.KPH.value = this.roundNumber(kn*1.852);
                this.FPH.value = this.roundNumber(kn*6076.1154);
                this.IPH.value = this.roundNumber(kn*72913.3858);
                this.M.value = this.roundNumber(kn*0.0015117);
            } else {
                this.MPH.value = "";
                this.KPH.value = "";
                this.FPHs.value = "";
                this.IPH.value = "";
                this.M.value = "";
            }
        },
        
        machConverter : function(M){
            if(M !== ""){
                this.MPH.value = this.roundNumber(M*761.207050);
                this.KPH.value = this.roundNumber(M*1234.8);
                this.FPH.value = this.roundNumber(M*4019173.2283465);
                this.IPH.value = this.roundNumber(M*48230078.740157);
                this.kn.value = this.roundNumber(M*666.738661);
            } else {
                this.MPH.value = "";
                this.KPH.value = "";
                this.FPHs.value = "";
                this.IPH.value = "";
                this.kn.value = "";
            }
        },
        
        roundNumber : function(temp){
            return (Math.round(temp*100)/100).toFixed(3);
        }
    }
    converterApp.spreader(idTag);
}

//Creation universal si-converter:
function siConverter(val,idTag){
    var converterApp = {
        Y : document.getElementById("yotta"),
        Z : document.getElementById("zetta"),
        Ex : document.getElementById("exa"),
        P : document.getElementById("petta"),
        T : document.getElementById("tera"),
        G : document.getElementById("giga"),
        M : document.getElementById("mega"),
        k : document.getElementById("kilo"),
        h : document.getElementById("hecto"),
        da : document.getElementById("deca"),
        one : document.getElementById("one"),
        d : document.getElementById("deci"),
        c : document.getElementById("centi"),
        m : document.getElementById("mili"),
        µ : document.getElementById("micro"),
        n : document.getElementById("nano"),
        p : document.getElementById("pico"),
        f : document.getElementById("femto"),
        a : document.getElementById("atto"),
        z : document.getElementById("zepto"),
        yo : document.getElementById("yocto"),
        
        spreader : function(Tag){
            switch(Tag){
                case 'yotta':
                    this.SiConvert(val,24);
                    break;
                case 'zetta':
                    this.SiConvert(val,21);
                    break;
                case 'exa':
                    this.SiConvert(val,18);
                    break;
                case 'petta':
                    this.SiConvert(val,15);
                    break;
                case 'tera':
                    this.SiConvert(val,12);
                    break;
                case 'giga':
                    this.SiConvert(val,9);
                    break;
                case 'mega':
                    this.SiConvert(val,6);
                    break;
                case 'kilo':
                    this.SiConvert(val,3);
                    break;
                case 'hecto':
                    this.SiConvert(val,2);
                    break;
                case 'deca':
                    this.SiConvert(val,1);
                    break;
                case 'one':
                    this.SiConvert(val,0);
                    break;
                case 'deci':
                    this.SiConvert(val,-1);
                    break;
                case 'centi':
                    this.SiConvert(val,-2);
                    break;
                case 'mili':
                    this.SiConvert(val,-3);
                    break;
                case 'micro':
                    this.SiConvert(val,-6);
                    break;
                case 'nano':
                    this.SiConvert(val,-9);
                    break;
                case 'pico':
                    this.SiConvert(val,-12);
                    break;
                case 'femto':
                    this.SiConvert(val,-15);
                    break;
                case 'atto':
                    this.SiConvert(val,-18);
                    break;
                case 'zepto':
                    this.SiConvert(val,-21);
                    break;
                case 'yocto':
                    this.SiConvert(val,-24);
                    break;
            }
        },
        
        SiConvert : function(A,n){
            if(A !== ""){
                this.Y.value = A*Math.pow(10,(n-24));
                this.Z.value = A*Math.pow(10,(n-21));
                this.Ex.value = A*Math.pow(10,(n-18));
                this.P.value = A*Math.pow(10,(n-15));
                this.T.value = A*Math.pow(10,(n-12));
                this.G.value = A*Math.pow(10,(n-9));
                this.M.value = A*Math.pow(10,(n-6));
                this.k.value = A*Math.pow(10,(n-3));
                this.h.value = A*Math.pow(10,(n-2));
                this.da.value = A*Math.pow(10,(n-1));
                this.one.value = A*Math.pow(10,(n-0));
                this.d.value = A*Math.pow(10,(n-(-1)));
                this.c.value = A*Math.pow(10,(n-(-2)));
                this.m.value = A*Math.pow(10,(n-(-3)));
                this.µ.value = A*Math.pow(10,(n-(-6)));
                this.n.value = A*Math.pow(10,(n-(-9)));
                this.p.value = A*Math.pow(10,(n-(-12)));
                this.f.value = A*Math.pow(10,(n-(-15)));
                this.a.value = A*Math.pow(10,(n-(-18)));
                this.z.value = A*Math.pow(10,(n-(-21)));
                this.yo.value = A*Math.pow(10,(n-(-24)));
            } else {
                this.Y.value = "";
                this.Z.value = "";
                this.Ex.value = "";
                this.P.value = "";
                this.T.value = "";
                this.G.value = "";
                this.M.value = "";
                this.k.value = "";
                this.h.value = "";
                this.da.value = "";
                this.one.value = "";
                this.d.value = "";
                this.c.value = "";
                this.m.value = "";
                this.µ.value = "";
                this.n.value = "";
                this.p.value = "";
                this.f.value = "";
                this.a.value = "";
                this.z.value = "";
                this.yo.value = "";
            }
        }
    }
    converterApp.spreader(idTag);
}

//Function for creation checkID:
function checkIDCreate(label,input,basic,info,info2,radix){
    label.setAttribute("for",info);
    label.innerHTML = info2;
    input.setAttribute("placeholder","Enter " + info + " number");
    input.setAttribute("id",info);
    input.setAttribute("oninput","nsConverter(this.value,this.id)");
    input.setAttribute("onchange","nsConverter(this.value,this.id)");
    basic.innerHTML = radix;
}

//Numeral system converter:
function nsConverter(val,idTag){
    var converterApp = {
        radix : [
            [2,'binary'],
            [3,'ternary'],
            [4,'quaternary'],
            [5,'quinary'],
            [6,'senary'],
            [7,'septenary'],
            [8,'octonary'],
            [9,'nonary'],
            [10,'decimal'],
            [11,'undenary'],
            [12,'duodenary'],
            [16,'hexadecimal']
            ],
            
        arrCont : [],    
        
        outValue : function(){
            for(var i=0;i<12;i++){
                this.arrCont[i] = document.getElementById(this.radix[i][1]);
            }
        },
        
        spreader : function(Tag){
            var finVal = '';
            finVal = this.assembler(Tag);
            switch(Tag){
                case 'binary':
                    this.universal(finVal,this.radix[0][0],this.radix);
                    break;
                case 'ternary':
                    this.universal(finVal,this.radix[1][0],this.radix);
                    break;
                case 'quaternary':
                    this.universal(finVal,this.radix[2][0],this.radix);
                    break;
                case 'quinary':
                    this.universal(finVal,this.radix[3][0],this.radix);
                    break;
                case 'senary':
                    this.universal(finVal,this.radix[4][0],this.radix);
                    break;
                case 'septenary':
                    this.universal(finVal,this.radix[5][0],this.radix);
                    break;
                case 'octonary':
                    this.universal(finVal,this.radix[6][0],this.radix);
                    break;
                case 'nonary':
                    this.universal(finVal,this.radix[7][0],this.radix);
                    break;
                case 'decimal':
                    this.universal(finVal,this.radix[8][0],this.radix);
                    break;
                case 'undenary':
                    this.universal(finVal,this.radix[9][0],this.radix);
                    break;
                case 'duodenary':
                    this.universal(finVal,this.radix[10][0],this.radix);
                    break;
                case 'hexadecimal':
                    this.universal(finVal,this.radix[11][0],this.radix);
                    break;
            }
        },
        
        assembler : function(checkTag){
            var pattern, trVal, finNum = '';
            switch(checkTag){
                case 'binary':
                    pattern = /[0-1]/gi;
                    break;
                case 'ternary':
                    pattern = /[0-2]/gi;
                    break;
                case 'quaternary':
                    pattern = /[0-3]/gi;
                    break;
                case 'quinary':
                    pattern = /[0-4]/gi;
                    break;
                case 'senary':
                    pattern = /[0-5]/gi;
                    break;
                case 'septenary':
                    pattern = /[0-6]/gi;
                    break;
                case 'octonary':
                    pattern = /[0-7]/gi;
                    break;
                case 'nonary':
                    pattern = /[0-8]/gi;
                    break;
                case 'decimal':
                    pattern = /[0-9]/gi;
                    break;
                case 'undenary':
                    pattern = /[0-9]|[a]/gi;
                    break;
                case 'duodenary':
                    pattern = /[0-9]|[a-b]/gi;
                    break;
                case 'hexadecimal':
                    pattern = /[0-9]|[a-f]/gi;
                    break;
            }
            trVal = val.match(pattern);
            if(trVal !== null){
                for(var i=0;i<trVal.length;i++){
                    finNum += trVal[i];
                }
            } else {
                finNum = '';
            }
            return finNum;
        },
        
        universal : function(num,radIn,radTo){
            var converted;
            for(var i=0;i<12;i++){
                if(num !== ''){
                   converted = parseInt(num,radIn).toString(radTo[i][0]); 
                } else {
                    converted = '';
                }
                this.arrCont[i].value = converted.toUpperCase();
            }
        }
    }
    converterApp.outValue();
    converterApp.spreader(idTag);
}

//Popup for scientific calculator info-block:
$('.ui.teal.right.corner.label')
    .popup({
        position : 'left center',
        target : '.ui.segments.calc',
        title : 'Calculator info',
        content : 'You can use this calculator for interaction with different physical, mathematical and computational measurements.'
    });
    
//Popup for scientific calculator info-block (mobile):
$('.help.circle.outline.mobile').popup({
    position : 'left center',
    target : '.help.circle.outline.mobile',
    title : 'Calculator info',
    content : 'You can use this calculator for interaction with different physical, mathematical and computational measurements.',
    on : 'click'
});

//Initialize dropdown menu:
$('.ui.basic.floating.dropdown.button').dropdown();

//Toomler function for mathematical menu:
document.getElementsByClassName("item mathMenu")[0].addEventListener("click",function(){
    mathToomler('math-1');
});
document.getElementsByClassName("item mathMenu")[1].addEventListener("click",function(){
    mathToomler('math-2');
});
document.getElementsByClassName("item mathMenu")[2].addEventListener("click",function(){
    mathToomler('trig-1');
});
document.getElementsByClassName("item mathMenu")[3].addEventListener("click",function(){
    mathToomler('trig-2');
});

var numBtn = 0,
btn = document.getElementsByClassName("item mathMenu"),
oldMathSegment = document.getElementsByClassName("ui segment math-block"),
genMathBlock = document.getElementsByClassName("ui segments calc"),
newMathReplaced;
function mathToomler(checkVar){
    btn[numBtn].setAttribute("class","item mathMenu");
    switch(checkVar){
        case 'math-1':
            btn[0].setAttribute("class","item mathMenu active");
            numBtn = 0;
            break;
        case 'math-2':
            btn[1].setAttribute("class","item mathMenu active");
            numBtn = 1;
            break;
        case 'trig-1':
            btn[2].setAttribute("class","item mathMenu active");
            numBtn = 2;
            break;
        case 'trig-2':
            btn[3].setAttribute("class","item mathMenu active");
            numBtn = 3;
            break;
    }
    newMathReplaced = otherMathBtn(checkVar);
    genMathBlock[0].replaceChild(newMathReplaced,oldMathSegment[0]);
}

//Function for creation another button:
function otherMathBtn(btnCheck){
    var extContainer = document.createElement("div"),
    vertCont, visibleCont, hiddenCont, supCont,
    contArray = [];
    contArray.length = 5;
    extContainer.setAttribute("class","ui segment math-block");
    
    for(var i=0;i<contArray.length;i++){
        vertCont = document.createElement("div");
        visibleCont = document.createElement("div");
        hiddenCont = document.createElement("div");
        supCont = document.createElement("sup");
        supContV = document.createElement("sup");
        
        vertCont.setAttribute("class","ui vertical animated basic teal button include");
        visibleCont.setAttribute("class","visible content");
        hiddenCont.setAttribute("class","hidden content");
        vertCont.appendChild(visibleCont);
        vertCont.appendChild(hiddenCont);
        
        if(btnCheck === 'math-1'){
            switch(i){
                case 0:
                    supCont.innerHTML = "y";
                    supContV.innerHTML = "y";
                    visibleCont.innerHTML = "x";
                    hiddenCont.innerHTML = "x";
                    visibleCont.appendChild(supCont);
                    hiddenCont.appendChild(supContV);
                    vertCont.setAttribute("class","ui vertical animated basic teal button");
                    vertCont.setAttribute("onclick","calculatorFunc(null,'x^y')");
                    break;
                case 1:
                    supCont.innerHTML = "3";
                    supContV.innerHTML = "3";
                    visibleCont.innerHTML = "x";
                    hiddenCont.innerHTML = "x"
                    visibleCont.appendChild(supCont);
                    hiddenCont.appendChild(supContV);
                    vertCont.setAttribute("onclick","calculatorFunc(null,'x^3')");
                    break;
                case 2:
                    visibleCont.innerHTML = "1/x";
                    hiddenCont.innerHTML = "1/x";
                    vertCont.setAttribute("onclick","calculatorFunc(null,'1/x')");
                    break;
                case 3:
                    supCont.innerHTML = "x";
                    supContV.innerHTML = "x";
                    visibleCont.innerHTML = "10";
                    hiddenCont.innerHTML = "10"
                    visibleCont.appendChild(supCont);
                    hiddenCont.appendChild(supContV);
                    vertCont.setAttribute("onclick","calculatorFunc(null,'10^x')");
                    break;
                case 4:
                    visibleCont.innerHTML = "e";
                    hiddenCont.innerHTML = "e";
                    vertCont.setAttribute("onclick","calculatorFunc(null,'euler')");
                    break;
            }
        } else if(btnCheck === 'math-2'){
            switch(i){
                case 0:
                    supCont.innerHTML = "x";
                    supContV.innerHTML = "x";
                    visibleCont.innerHTML = "e";
                    hiddenCont.innerHTML = "e";
                    visibleCont.appendChild(supCont);
                    hiddenCont.appendChild(supContV);
                    vertCont.setAttribute("class","ui vertical animated basic teal button");
                    vertCont.setAttribute("onclick","calculatorFunc(null,'y=e^x')");
                    break;
                case 1:
                    visibleCont.innerHTML = "ln";
                    hiddenCont.innerHTML = "ln";
                    vertCont.setAttribute("onclick","calculatorFunc(null,'ln')");
                    break;
                case 2:
                    visibleCont.innerHTML = "log";
                    hiddenCont.innerHTML = "log";
                    vertCont.setAttribute("onclick","calculatorFunc(null,'log')");
                    break;
                case 3:
                    visibleCont.innerHTML = "π";
                    hiddenCont.innerHTML = "π";
                    vertCont.setAttribute("onclick","calculatorFunc(null,'pi')");
                    break;
                case 4:
                    visibleCont.innerHTML = "n!";
                    hiddenCont.innerHTML = "n!";
                    vertCont.setAttribute("onclick","calculatorFunc(null,'factorial')")
                    break;
            }
        } else if(btnCheck === 'trig-1'){
            switch(i){
                case 0:
                    visibleCont.innerHTML = "sin";
                    hiddenCont.innerHTML = "sin";
                    vertCont.setAttribute("class","ui vertical animated basic teal button");
                    vertCont.setAttribute("onclick","calculatorFunc(null,'sin')");
                    break;
                case 1:
                    visibleCont.innerHTML = "cos";
                    hiddenCont.innerHTML = "cos";
                    vertCont.setAttribute("onclick","calculatorFunc(null,'cos')");
                    break;
                case 2:
                    visibleCont.innerHTML = "tg";
                    hiddenCont.innerHTML = "tg";
                    vertCont.setAttribute("onclick","calculatorFunc(null,'tg')");
                    break;
                case 3:
                    visibleCont.innerHTML = "arcsin";
                    hiddenCont.innerHTML = "arcsin";
                    vertCont.setAttribute("onclick","calculatorFunc(null,'arcsin')");
                    break;
                case 4:
                    visibleCont.innerHTML = "arccos";
                    hiddenCont.innerHTML = "arccos";
                    vertCont.setAttribute("onclick","calculatorFunc(null,'arccos')");
                    break;
            }
        } else if(btnCheck === "trig-2"){
            switch(i){
                case 0:
                    visibleCont.innerHTML = "arctg";
                    hiddenCont.innerHTML = "arctg";
                    vertCont.setAttribute("class","ui vertical animated basic teal button");
                    vertCont.setAttribute("onclick","calculatorFunc(null,'arctg')");
                    break;
                case 1:
                    visibleCont.innerHTML = "hsin";
                    hiddenCont.innerHTML = "hsin";
                    vertCont.setAttribute("onclick","calculatorFunc(null,'hsin')");
                    break;
                case 2:
                    visibleCont.innerHTML = "hcos";
                    hiddenCont.innerHTML = "hcos";
                    vertCont.setAttribute("onclick","calculatorFunc(null,'hcos')");
                    break;
                case 3:
                    visibleCont.innerHTML = "htg";
                    hiddenCont.innerHTML = "htg";
                    vertCont.setAttribute("onclick","calculatorFunc(null,'htg')");
                    break;
                case 4:
            }
        }
        contArray[i] = vertCont;
        extContainer.appendChild(contArray[i]);
    }
    if(btnCheck === 'trig-2'){
        extContainer.removeChild(vertCont);
    }
    return extContainer;
}

//Block for calculator implementation:
var cache = document.getElementById("cache-output"),
inputField = document.getElementsByClassName("ui right action left input fluid"),
result = 0,
hurdle = true,
minToomler = false,
cacheTr,
n,
cacheCtn = document.getElementsByClassName("ui segment calc"),
mainCtn = document.getElementsByClassName("ui segments calc"),
Euler = Math.E,
angleUnit = 'rad';

function calculatorFunc(val,act){
    if(act === 'value'){
        cache.value += val.toString();
        changeInputColor('default');
    } else if(act === 'reset'){
        result = 0;
        cache.value = '';
        hurdle = true;
        minToomler = false;
        cache.setAttribute("placeholder","Start calculating");
        changeInputColor('default');
    } else if(act === 'decimal' && hurdle !== false){
        cache.value += val.toString();
        hurdle = false;
        changeInputColor('default');
    } else if(act === 'plus'){
        if(minToomler !== false){
            result += parseFloat(cache.value);
            cache.setAttribute("placeholder",result);
            cache.value = '';
        } else {
            result = parseFloat(cache.value);
            cache.setAttribute("placeholder",result);
            cache.value = '';
            minToomler = true;
        }
        hurdle = true;
    } else if(act === 'minus'){
        if(minToomler !== false){
            result -= parseFloat(cache.value);
            cache.setAttribute("placeholder",result);
            cache.value = '';
        } else {
            result = parseFloat(cache.value);
            cache.setAttribute("placeholder",result);
            cache.value = '';
            minToomler = true;
        }
        hurdle = true;
    } else if (act === 'multiply'){
        if(minToomler !== false){
            result *= parseFloat(cache.value);
            cache.setAttribute("placeholder",result);
            cache.value = '';
        } else {
            result = parseFloat(cache.value);
            cache.setAttribute("placeholder",result);
            cache.value = '';
            minToomler = true;
        }
    } else if(act === 'divide'){
        if(minToomler !== false){
            result /= parseFloat(cache.value);
            cache.setAttribute("placeholder",result);
            cache.value = '';
        } else {
            result = parseFloat(cache.value);
            cache.setAttribute("placeholder",result);
            cache.value = '';
            minToomler = true;
        }
    } else if(act === 'equal'){
        cache.value = result.toString();
        result = 0;
        minToomler = false;
    } else if(act === 'sqrt'){
        cacheTr = parseFloat(cache.value);
        result = Math.sqrt(cacheTr);
        cache.value = result;
    } else if(act === 'x^2'){
        cacheTr = parseFloat(cache.value);
        result = Math.pow(cacheTr,2);
        cache.value = result;
    } else if(act === '+/-'){
        if(cache.value === ''){
            cache.value = NaN;
        } else if(cache.value.startsWith('-') === true){
            cacheTr = cache.value.slice(1);
            cache.value = cacheTr;
        } else if(cache.value.startsWith('-') === false){
            cacheTr = '-'.concat(cache.value);
            cache.value = cacheTr;
        }
        result = cache.value;
    } else if(act === 'ythsqrt'){
        if(minToomler !== false){
            n = 1/parseFloat(cache.value);
            cacheTr = Math.pow(result,n);
            result = cacheTr;
            cache.value = '';
            cache.setAttribute("placeholder",result);
        } else {
            result = parseFloat(cache.value);
            cache.setAttribute("placeholder","(n)√" + result + " - " + "provide n-th of root...");
            cache.value = '';
            minToomler = true;
        }
    } else if(act === 'x^y'){
        if(minToomler !== false){
            n = parseFloat(cache.value);
            cacheTr = Math.pow(result,n);
            result = cacheTr;
            cache.value = '';
            cache.setAttribute("placeholder",result);
        } else {
            result = parseFloat(cache.value);
            cache.setAttribute("placeholder",result + "^(n) - provide n-th of power...");
            cache.value = '';
            minToomler = true;
        }
    } else if(act === 'x^3'){
        cacheTr = parseFloat(cache.value);
        result = Math.pow(cacheTr,3);
        cache.value = result;
    } else if(act === '1/x'){
        cacheTr = parseFloat(cache.value);
        result = 1/cacheTr;
        cache.value = result;
    } else if(act === '10^x'){
        n = parseFloat(cache.value);
        result = Math.pow(10,n);
        cache.value = result;
    } else if(act === 'euler'){
        cache.value = Euler.toString();
    } else if(act === 'y=e^x'){
        n = parseFloat(cache.value);
        result = Math.exp(n);
        cache.value = result;
    } else if(act === 'ln'){
        cacheTr = parseFloat(cache.value);
        result = Math.log(cacheTr);
        cache.value = result;
    } else if(act === 'log'){
        cacheTr = parseFloat(cache.value);
        result = Math.log(cacheTr)/Math.log(10);
        cache.value = result;
    } else if(act === 'pi'){
        cacheTr = Math.PI;
        cache.value = cacheTr.toString();
    } else if(act === 'factorial'){
        result = factorial(cache.value);
        cache.value = result;
    } else if(act === 'sin'){
        cacheTr = (angleUnit !== 'rad') ? toRadians(parseFloat(cache.value)) : parseFloat(cache.value);
        result = roundTrigNumber(Math.sin(cacheTr));
        cache.value = result;
    } else if(act === 'cos'){
        cacheTr = (angleUnit !== 'rad') ? toRadians(parseFloat(cache.value)) : parseFloat(cache.value);
        result = roundTrigNumber(Math.cos(cacheTr));
        cache.value = result;
    } else if(act === 'tg'){
        cacheTr = (angleUnit !== 'rad') ? toRadians(parseFloat(cache.value)) : parseFloat(cache.value);
        result = roundTrigNumber(Math.tan(cacheTr));
        cache.value = result;
    } else if(act === 'arcsin'){
        cacheTr = parseFloat(cache.value);
        result = (angleUnit !== 'rad') ? toDegree(Math.asin(cacheTr)) : Math.asin(cacheTr);
        cache.value = result;
    } else if(act === 'arccos'){
        cacheTr = parseFloat(cache.value);
        result = (angleUnit !== 'rad') ? toDegree(Math.acos(cacheTr)) : Math.acos(cacheTr);
        cache.value = result;
    } else if(act === 'arctg'){
        cacheTr = parseFloat(cache.value);
        result = (angleUnit !== 'rad') ? toDegree(Math.atan(cacheTr)) : Math.atan(cacheTr);
        cache.value = result;
    } else if(act === 'hsin'){
        cacheTr = parseFloat(cache.value);
        result = roundTrigNumber(hyperbolicFunc('hsin',cacheTr));
        cache.value = result;
    } else if(act === 'hcos'){
        cacheTr = parseFloat(cache.value);
        result = roundTrigNumber(hyperbolicFunc('hcos',cacheTr));
        cache.value = result;
    } else if(act === 'htg'){
        cacheTr = parseFloat(cache.value);
        result = roundTrigNumber(hyperbolicFunc('htg',cacheTr));
        cache.value = result;
    } else if(act === '<'){
        cacheTr = cache.value.slice(0,-1);
        cache.value = cacheTr;
        result = cache.value;
        if(cache.value == ''){
            result = 0;
            hurdle = true;
            minToomler = false;
            cache.setAttribute("placeholder","Start calculating");
        }
    }
    checkNaN(result);
    checkSpecialCharacter(result);
}

function changeInputColor(change){
    var field = document.getElementsByClassName("ui right action left input fluid"),
    cache = document.getElementById("cache-output");
    switch(change){
        case 'default':
            field[0].setAttribute("class","ui right action left input fluid");
            break;
        case 'error':
            field[0].setAttribute("class","ui right action left input fluid error");
            cache.value = "Error! Please, try again.";
            break;
    }
}

function checkNaN(res){
    var field = document.getElementsByClassName("ui right action left input fluid");
    if(isNaN(res) == true){
        changeInputColor('error');
    }
}

function checkSpecialCharacter(res){
    var cache = document.getElementById("cache-output");
    switch(res){
        case Infinity:
            cache.value = '∞';
            break;
        case -Infinity:
            cache.value = '-∞';
            break;
    }
}

function factorial(x){
    if(x !== ''){
        x = parseInt(x,10);
        var n = 1;
        if(x<0 || x>50){
            n = NaN;
        } else if(x == 0){
            n = 1;
        } else if(x>=1){
            for(var i=1;i<=x;i++){
                n*=i;
            }
        }
    } else {
        n = NaN;
    }
    return n;
}

function hyperbolicFunc(func,x){
    var y;
    switch(func){
        case 'hsin':
           y = ((Math.pow(Math.E,x))-(Math.pow(Math.E,-x)))/2;
           break;
        case 'hcos':
           y = ((Math.pow(Math.E,x))+(Math.pow(Math.E,-x)))/2;
           break;
        case 'htg':
           y = ((Math.pow(Math.E,x))-(Math.pow(Math.E,-x)))/((Math.pow(Math.E,x))+(Math.pow(Math.E,-x)));
           break;
    }
    return y;
}

function toRadians(x){
    return x*(Math.PI/180);
}

function toDegree(x){
    return x*(180/Math.PI);
}

function changeAngleUnit(unitType){
    angleUnit = unitType;
}

function roundTrigNumber(x){
    return Math.round(x*Math.pow(10,5))/Math.pow(10,5);
}

document.getElementsByClassName("ui vertical animated basic teal button")[3].addEventListener("click",function(){
    cacheElement('reset');
});

var tCache = true,
cacheValue,
segCache = document.createElement("div"),
iconMessage = document.createElement("div"),
contentCtn = document.createElement("div"),
loaderIcon = document.createElement("i"),
headerCtn = document.createElement("div"),
detail = document.createElement("p"),
btnCacheCreate = document.getElementsByClassName("ui vertical animated basic teal button");
        
function cacheElement(attr){
    switch(attr){
        case 'create':
            if(isNaN(parseFloat(cache.value)) !== true){
                var beforeCtn = document.getElementById("uiBefore");
                if(tCache === true){
                segCache.setAttribute("class","ui segment cache");
                iconMessage.setAttribute("class","ui teal icon tiny message");
                loaderIcon.setAttribute("class","notched circle loading icon");
                contentCtn.setAttribute("class","content");
                headerCtn.setAttribute("class","header");
                detail.setAttribute("class","detail");
                
                segCache.appendChild(iconMessage);
                iconMessage.appendChild(loaderIcon);
                iconMessage.appendChild(contentCtn);
                contentCtn.appendChild(headerCtn);
                contentCtn.appendChild(detail);
                
                headerCtn.innerHTML = "Memory";
                
                mainCtn[0].insertBefore(segCache,beforeCtn);
                cacheValue = parseFloat(cache.value);
                tCache = false;
                } else {
                    cacheValue += parseFloat(cache.value);
                }
                detail.innerHTML = cacheValue.toString();  
            }
            break;
        case 'reset':
            mainCtn[0].removeChild(segCache);
            cacheValue = '';
            tCache = true;
            break;
        case 'minus':
            if(cacheValue !== ''){
                cacheValue -= parseFloat(cache.value);
            }
            detail.innerHTML = cacheValue.toString();
            break;
        case 'memory_recall':
            cache.value = cacheValue.toString();
            break;
    }
}
