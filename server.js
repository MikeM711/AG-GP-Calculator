// Questions: (?)

//turn on 'nodemon' before you begin

/*

    ----About Node.js----

- Not a language, framework or tool (obv)
- Node.js is a runtime environment for running JavaScript-based applications
- Node.js libraries, aka Node Modules, help run JavaScript applications at runtime, similar to Java Libraries within the JRE.

*/

/*

    ----Create a package.JSON file----

- You can do it manually, but it's too slow
- simply write |npm init| inside the VS Code terminal to generate

*/

'use strict';

/* 

    ----About'use strict'----

- If I take out 'use strict' it doesn't do anything.

https://stackoverflow.com/questions/1335851/what-does-use-strict-do-in-javascript-and-what-is-the-reasoning-behind-it

Strict Mode is a new feature in ECMAScript 5 that allows you to place a program, or a function, in a "strict" operating context. This strict context prevents certain actions from being taken and throws more exceptions.

Summary:
- You can't use confusing codes
- Helps make fewer errors

*/

const express = require('express');
const app = express();
let PORT = process.env.PORT || 3000;



var config = require('./doordata.json');

/* 

    ----const express = require('express');----

- In order to use express, we must install it
- Install express by saying |npm install --save express|
- Go to your package.JSON (created by npm init), doing the above command added express as a dependency to our file and created a node_modules folder
- Apparently this whole time I did not use the node_modules folder AT ALL ! That's because it is looking a node_folder at another directory (keep reading)

- We would like to bring in the MODULE "express".
- Whenever we want to install a module, we need to use the require() FUNCTION

- var can be substituted for const, both creates a variable, both work
- var: if there's room for error, var should be used
- const: if the information never changes in the lifetime of the program, const should be used

- You can use single quotes '' or double quotes ""

    ----Explaining deleting of modules, why it is working----

https://stackoverflow.com/questions/47625524/how-does-lodash-continue-to-work-after-ive-deleted-packages-json-package-lock

When require attempts to resolve a module, it first looks in your local directory for a node_modules folder. If it can't find it, it will look at the parent directory to try and find it. If it can't find it there, it will keep going all the way up the directory hierarchy.

- If we add the code:
    console.log( require.resolve('express') )
  It is saying that "express" is in C:\Users\AG Laser Technology\node_modules\express\index.js
- Basically, it is pulling node modules outside of the folder!

Learned: 
    require.resolve
  ^ Indicates location of the file of something (use console.log to have it appear)

Uninstalling/Installing express:
    - | npm uninstall <name> | ... When express was uninstalled, the dependency was removed in JSON, but was still able to run expresss (?)
    - Re-installing express put the dependency back into JSON
    - Does the package.json even matter (?)



let PORT = process.env.PORT || 3000;
^ Can be anywhere in the code, it's ok
*/




// The below operators show up in the front end.  We can use them in our "calculate" section.
let operators = [

  {name:'AL1500 36x36', symbol:'AL1500 36x36'},
  {name:'AL1500 48x48', symbol:'AL1500 48x48'},

  {name:'B300 8x8', symbol:'B300 8x8'},
  {name:'B300 10x10', symbol:'B300 10x10'},
  {name:'B300 12x12', symbol:'B300 12x12'},
  {name:'B300 12x16', symbol:'B300 12x16'},
  {name:'B300 16x16', symbol:'B300 16x16'},
  {name:'B300 18x18', symbol:'B300 18x18'},
  {name:'B300 18x22', symbol:'B300 18x22'},
  {name:'B300 20x20', symbol:'B300 20x20'},
  {name:'B300 20x30', symbol:'B300 20x30'},
  {name:'B300 22x30', symbol:'B300 22x30'},
  {name:'B300 24x24', symbol:'B300 24x24'},
  {name:'B300 30x30', symbol:'B300 30x30'},

  {name:'DW400 12x12', symbol:'DW400 12x12'},
  {name:'DW400 16x16', symbol:'DW400 16x16'},
  {name:'DW400 18x18', symbol:'DW400 18x18'},
  {name:'DW400 24x24', symbol:'DW400 24x24'},

  {name:'EXT1350-1300 12x12', symbol:'EXT1350-1300 12x12'},
  {name:'EXT1350-1300 16x16', symbol:'EXT1350-1300 16x16'},
  {name:'EXT1350-1300 18x18', symbol:'EXT1350-1300 18x18'},
  {name:'EXT1350-1300 22x36', symbol:'EXT1350-1300 22x36'},
  {name:'EXT1350-1300 24x24', symbol:'EXT1350-1300 24x24'},
  {name:'EXT1350-1300 24x36', symbol:'EXT1350-1300 24x36'},
  {name:'EXT1350-1300 30x30', symbol:'EXT1350-1300 30x30'},
  {name:'EXT1350-1300 30x36', symbol:'EXT1350-1300 30x36'},


  {name:'FR800 12x12', symbol:'FR800 12x12'},
  {name:'FR800 14x14', symbol:'FR800 14x14'},
  {name:'FR800 16x16', symbol:'FR800 16x16'},
  {name:'FR800 22x22', symbol:'FR800 22x22'},
  {name:'FR800 22x36', symbol:'FR800 22x36'},
  {name:'FR800 24x24', symbol:'FR800 24x24'},
  {name:'FR800 24x36', symbol:'FR800 24x36'},


  {name:'GP100 8x8', symbol:'GP100 8x8'},
  {name:'GP100 10x10', symbol:'GP100 10x10'},
  {name:'GP100 12x12', symbol:'GP100 12x12'},
  {name:'GP100 12x18', symbol:'GP100 12x18'},
  {name:'GP100 16x16', symbol:'GP100 16x16'},
  {name:'GP100 18x18', symbol:'GP100 18x18'},
  {name:'GP100 20x20', symbol:'GP100 20x20'},
  {name:'GP100 20x30', symbol:'GP100 20x30'},
  {name:'GP100 22x22', symbol:'GP100 22x22'},
  {name:'GP100 22x30', symbol:'GP100 22x30'},
  {name:'GP100 24x24', symbol:'GP100 24x24'},
  {name:'GP100 24x30', symbol:'GP100 24x30'},
  {name:'GP100 24x36', symbol:'GP100 24x36'},
  {name:'GP100 30x30', symbol:'GP100 30x30'},
  {name:'GP100 36x36*', symbol:'GP100 36x36*'},
  {name:'GP100 36x48*', symbol:'GP100 36x48*'},
  {name:'GP100 48x48', symbol:'GP100 48x48'},

  {name:'RP110 24x24', symbol:'RP110 24x24'},
  {name:'RP110 24x36', symbol:'RP110 24x36'},
  {name:'RP110 36x48*', symbol:'RP110 36x48*'},

  {name:'SMP120 24x24', symbol:'SMP120 24x24'},
  {name:'SMP120 24x48', symbol:'SMP120 24x48'},
  {name:'SMP120 48x48', symbol:'SMP120 48x48'},

  {name:'TB1210 24x24', symbol:'TB1210 24x24'},

  {name:'UAD200 6x6',symbol:'UAD200 6x6'},
  {name:'UAD200 8x8',symbol:'UAD200 8x8'},
  {name:'UAD200 12x12',symbol:'UAD200 12x12'},
  {name:'UAD200 14x14',symbol:'UAD200 14x14'},
  {name:'UAD200 16x16',symbol:'UAD200 16x16'},
  {name:'UAD200 18x18',symbol:'UAD200 18x18'},
  {name:'UAD200 24x24',symbol:'UAD200 24x24'},
  
  
];


//below are the simple math functions.  When someone chooses and operator, it will "return" a result.
// in order for me to use "value_14GA", I needed to put it below in the parenthesis...

//14GA Calculation - NOTE: the function can be called anything, not just "calculate" if you want

/*
function calculate14GA(operator, value1) {
  
  if ( operator == 'GP100 24x24' )   
  return value1/config.GP_24x24_DoorsPerSheet; // I can add "+ " | 14GA sheets"" if I wanted to
  
  if ( operator == 'GP100 18x18' )      
  return value1 /config.GP_18x18_DoorsPerSheet;

}

*/


// Program has access here in the beginning
console.log('hello3')

// stuff idk (?)


app.use(express.static(__dirname + '/build'));

app.use(require('body-parser').json());
app.use((req, res, next) => {
  // res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Origin', 'https://mean-calculator.herokuapp.com/calculator');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  next();
});

// starting server (?)
app.listen(PORT, () => {
  console.log('server started on port', PORT);
  
});

//Used array below.  Need this to initiate an array for objects to be held when inputted.
var array_14GA = [];
var array_16GA_120x48= [];
var array_16GA_120x60 = [];
var array_18GA = [];
var array_20GA = [];
var array_14GA_Al = []; //Aluminum

app.route('/calculator')

  .get((req, res) => {
  
    res.json({
      operators,
       
    });
    console.log('hello in route')
    array_14GA = [];
    array_16GA_120x48 = [];
    array_16GA_120x60 = [];
    array_18GA = [];
    array_20GA = [];
    array_14GA_Al = [];
  })
  
  .post((req, res) => {
    //Program in here once "calculate" has been hit
    console.log('hello in 1')

    //Requesting something? 
    let operator  = req.body.operator.name;
    let value1    = req.body.value1;

    let value_14GA    = req.body.value_14GA //this allowed me to use value_14GA I guess
    let value_16GA_120x48 = req.body.value_16GA 
    let value_16GA_120x60 = req.body.value_16GA
    let value_18GA = req.body.value_18GA
    let value_20GA = req.body.value_20GA

    

    let value_14GA_Al = req.body.value_14GA_Al
    let note = req.body.note

    //AL1500 Door Calculation

    if ( operator == 'AL1500 36x36')
    {value_14GA = 0;
    value_16GA_120x48 = 0;
    value_16GA_120x60 = 0;
    value_18GA = 0;
    value_20GA = 0;
    value_14GA_Al = value1/config.AL1500_36x36_FullAssyPerSheet;}

    if ( operator == 'AL1500 48x48')
    {value_14GA = 0;
    value_16GA_120x48 = 0;
    value_16GA_120x60 = 0;
    value_18GA = 0;
    value_20GA = 0;
    value_14GA_Al = value1/config.AL1500_48x48_FullAssyPerSheet;}

    //BASIC Door calculation

    if ( operator == 'B300 8x8')
    {value_14GA = 0;
    value_16GA_120x48 = 0;
    value_16GA_120x60 = 0;
    value_18GA = value1/config.B300_8x8_FullAssyPerSheet;
    value_20GA = 0;
    value_14GA_Al = 0;}

    if ( operator == 'B300 10x10')
    {value_14GA = 0;
    value_16GA_120x48 = 0;
    value_16GA_120x60 = 0;
    value_18GA = value1/config.B300_10x10_FullAssyPerSheet;
    value_20GA = 0;
    value_14GA_Al = 0;}

    if ( operator == 'B300 12x12')
    {value_14GA = 0;
    value_16GA_120x48 = 0;
    value_16GA_120x60 = 0;
    value_18GA = value1/config.B300_12x12_FullAssyPerSheet;
    value_20GA = 0;
    value_14GA_Al = 0;}

    if ( operator == 'B300 12x16')
    {value_14GA = 0;
    value_16GA_120x48 = 0;
    value_16GA_120x60 = 0;
    value_18GA = value1/config.B300_12x16_FullAssyPerSheet;
    value_20GA = 0;
    value_14GA_Al = 0;}

    if ( operator == 'B300 16x16')
    {value_14GA = 0;
    value_16GA_120x48 = 0;
    value_16GA_120x60 = 0;
    value_18GA = value1/config.B300_16x16_FullAssyPerSheet;
    value_20GA = 0;
    value_14GA_Al = 0;}
  
    if ( operator == 'B300 18x18')
    {value_14GA = 0;
    value_16GA_120x48 = 0;
    value_16GA_120x60 = 0;
    value_18GA = value1/config.B300_18x18_FullAssyPerSheet;
    value_20GA = 0;
    value_14GA_Al = 0;}

    if ( operator == 'B300 18x22')
    {value_14GA = 0;
    value_16GA_120x48 = 0;
    value_16GA_120x60 = 0;
    value_18GA = value1/config.B300_18x22_FullAssyPerSheet;
    value_20GA = 0;
    value_14GA_Al = 0;}

    if ( operator == 'B300 20x20')
    {value_14GA = 0;
    value_16GA_120x48 = 0;
    value_16GA_120x60 = 0;
    value_18GA = value1/config.B300_20x20_FullAssyPerSheet;
    value_20GA = 0;
    value_14GA_Al = 0;}

    if ( operator == 'B300 20x30')
    {value_14GA = 0;
    value_16GA_120x48 = 0;
    value_16GA_120x60 = 0;
    value_18GA = value1/config.B300_20x30_FullAssyPerSheet;
    value_20GA = 0;
    value_14GA_Al = 0;}

    if ( operator == 'B300 22x30')
    {value_14GA = 0;
    value_16GA_120x48 = 0;
    value_16GA_120x60 = 0;
    value_18GA = value1/config.B300_22x30_FullAssyPerSheet;
    value_20GA = 0;
    value_14GA_Al = 0;}

    if ( operator == 'B300 24x24')
    {value_14GA = 0;
    value_16GA_120x48 = 0;
    value_16GA_120x60 = 0;
    value_18GA = value1/config.B300_24x24_FullAssyPerSheet;
    value_20GA = 0;
    value_14GA_Al = 0;}

    if ( operator == 'B300 30x30')
    {value_14GA = 0;
    value_16GA_120x48 = 0;
    value_16GA_120x60 = 0;
    value_18GA = value1/config.B300_30x30_FullAssyPerSheet;
    value_20GA = 0;
    value_14GA_Al = 0;}

    //DW400 Door Calculation

    if ( operator == 'DW400 12x12')
    {value_14GA = 0;
    value_16GA_120x48 = value1/config.DW400_12x12_FullAssyPerSheet;
    value_16GA_120x60 = 0;
    value_18GA = 0;
    value_20GA = 0;
    value_14GA_Al = 0;}

    if ( operator == 'DW400 16x16')
    {value_14GA = 0;
    value_16GA_120x48 = value1/config.DW400_16x16_FullAssyPerSheet;
    value_16GA_120x60 = 0;
    value_18GA = 0;
    value_20GA = 0;
    value_14GA_Al = 0;}

    if ( operator == 'DW400 18x18')
    {value_14GA = 0;
    value_16GA_120x48 = value1/config.DW400_18x18_FullAssyPerSheet;
    value_16GA_120x60 = 0;
    value_18GA = 0;
    value_20GA = 0;
    value_14GA_Al = 0;}

    if ( operator == 'DW400 24x24')
    {value_14GA = 0;
    value_16GA_120x48 = value1/config.DW400_24x24_FullAssyPerSheet;
    value_16GA_120x60 = 0;
    value_18GA = 0;
    value_20GA = 0;
    value_14GA_Al = 0;}


    //EXT1350-1300 Door Calculation

    if ( operator == 'EXT1350-1300 12x12')
    {value_14GA = 0;
    value_16GA_120x48 = 0;
    value_16GA_120x60 = 0;
    value_18GA = value1/config.EXT1350_1300_12x12_FullAssyPerSheet;
    value_20GA = 0;
    value_14GA_Al = 0;}

    if ( operator == 'EXT1350-1300 16x16')
    {value_14GA = 0;
    value_16GA_120x48 = 0;
    value_16GA_120x60 = 0;
    value_18GA = value1/config.EXT1350_1300_16x16_FullAssyPerSheet;
    value_20GA = 0;
    value_14GA_Al = 0;}

    if ( operator == 'EXT1350-1300 18x18')
    {value_14GA = 0;
    value_16GA_120x48 = 0;
    value_16GA_120x60 = 0;
    value_18GA = value1/config.EXT1350_1300_18x18_FullAssyPerSheet;
    value_20GA = 0;
    value_14GA_Al = 0;}

    if ( operator == 'EXT1350-1300 22x36')
    {value_14GA = 0;
    value_16GA_120x48 = 0;
    value_16GA_120x60 = 0;
    value_18GA = value1/config.EXT1350_1300_22x36_FullAssyPerSheet;
    value_20GA = 0;
    value_14GA_Al = 0;}


    if ( operator == 'EXT1350-1300 24x24')
    {value_14GA = 0;
    value_16GA_120x48 = 0;
    value_16GA_120x60 = 0;
    value_18GA = value1/config.EXT1350_1300_24x24_FullAssyPerSheet;
    value_20GA = 0;
    value_14GA_Al = 0;}

    if ( operator == 'EXT1350-1300 24x36')
    {value_14GA = 0;
    value_16GA_120x48 = 0;
    value_16GA_120x60 = 0;
    value_18GA = value1/config.EXT1350_1300_24x36_FullAssyPerSheet;
    value_20GA = 0;
    value_14GA_Al = 0;}
    
    if ( operator == 'EXT1350-1300 30x30')
    {value_14GA = 0;
    value_16GA_120x48 = 0;
    value_16GA_120x60 = 0;
    value_18GA = value1/config.EXT1350_1300_30x30_FullAssyPerSheet;
    value_20GA = 0;
    value_14GA_Al = 0;}

    if ( operator == 'EXT1350-1300 30x36')
    {value_14GA = 0;
    value_16GA_120x48 = 0;
    value_16GA_120x60 = 0;
    value_18GA = value1/config.EXT1350_1300_30x36_FullAssyPerSheet;
    value_20GA = 0;
    value_14GA_Al = 0;}

    //FR800 Door Calculation

    if ( operator == 'FR800 12x12' )   
    {value_14GA = value1 / config.FR800_14GA;
    value_16GA_120x48= 0;
    value_16GA_120x60 = value1 / config.FR800_12x12_16GA;
    value_18GA = value1 / config.FR800_12x12_18GA;
    value_20GA = value1 / config.FR800_12x12_20GA;
    value_14GA_Al = 0;}

    if ( operator == 'FR800 14x14' )   
    {value_14GA = value1 / config.FR800_14GA;
    value_16GA_120x48= 0;
    value_16GA_120x60 = value1 / config.FR800_14x14_16GA;
    value_18GA = value1 / config.FR800_14x14_18GA;
    value_20GA = value1 / config.FR800_14x14_20GA;
    value_14GA_Al = 0;}

    if ( operator == 'FR800 16x16' )   
    {value_14GA = value1 / config.FR800_14GA;
    value_16GA_120x48= 0;
    value_16GA_120x60 = value1 / config.FR800_16x16_16GA;
    value_18GA = value1 / config.FR800_16x16_18GA;
    value_20GA = value1 / config.FR800_16x16_20GA;
    value_14GA_Al = 0;}

    if ( operator == 'FR800 22x22' )   
    {value_14GA = value1 / config.FR800_14GA;
    value_16GA_120x48= 0;
    value_16GA_120x60 = value1 / config.FR800_22x22_16GA;
    value_18GA = value1 / config.FR800_22x22_18GA;
    value_20GA = value1 / config.FR800_22x22_20GA;
    value_14GA_Al = 0;}

    if ( operator == 'FR800 24x24' )   
    {value_14GA = value1 / config.FR800_14GA;
    value_16GA_120x48= 0;
    value_16GA_120x60 = value1 / config.FR800_24x24_16GA;
    value_18GA = value1 / config.FR800_24x24_18GA;
    value_20GA = value1 / config.FR800_24x24_20GA;
    value_14GA_Al = 0;}

    if ( operator == 'FR800 22x36' )   
    {value_14GA = value1 / config.FR800_14GA;
    value_16GA_120x48= 0;
    value_16GA_120x60 = value1 / config.FR800_22x36_16GA;
    value_18GA = value1 / config.FR800_22x36_18GA;
    value_20GA = value1 / config.FR800_22x36_20GA;
    value_14GA_Al = 0;}

    if ( operator == 'FR800 24x36' )   
    {value_14GA = value1 / config.FR800_14GA;
    value_16GA_120x48= 0;
    value_16GA_120x60 = value1 / config.FR800_24x36_16GA;
    value_18GA = value1 / config.FR800_24x36_18GA;
    value_20GA = value1 / config.FR800_24x36_20GA;
    value_14GA_Al = 0;}



    //GP100 Door Calculation

    if ( operator == 'GP100 10x10' )   
    {value_14GA = value1 / config.GP_10x10_DoorsPerSheet;
    value_16GA_120x48= 0;
    value_16GA_120x60 = 0;
    value_18GA = (value1*4) / config.GP_10x10_RFsPerSheet;
    value_20GA = 0;
    value_14GA_Al = 0;}

    if ( operator == 'GP100 12x12' )   
    {value_14GA = value1 / config.GP_12x12_DoorsPerSheet;
    value_16GA_120x48= 0;
    value_16GA_120x60 = 0;
    value_18GA = (value1*4) / config.GP_12x12_RFsPerSheet;
    value_20GA = 0;
    value_14GA_Al = 0;}

    if ( operator == 'GP100 12x18' )   
    {value_14GA = value1 / config.GP_12x18_DoorsPerSheet;
    value_16GA_120x48= 0;
    value_16GA_120x60 = 0;
    value_18GA = ((value1*2) / config.GP_12x12_RFsPerSheet) + ((value1*2) / config.GP_18x18_RFsPerSheet);
    value_20GA = 0;
    value_14GA_Al = 0;
    }

    if ( operator == 'GP100 16x16' )   
    {value_14GA = value1 / config.GP_16x16_DoorsPerSheet;
    value_16GA_120x48= 0;
    value_16GA_120x60 = 0;
    value_18GA = (value1*4) / config.GP_16x16_RFsPerSheet;
    value_20GA = 0;
    value_14GA_Al = 0;}

    if ( operator == 'GP100 18x18' )   
    {value_14GA = value1 / config.GP_18x18_DoorsPerSheet;
    value_16GA_120x48= 0;
    value_16GA_120x60 = 0;
    value_18GA = (value1*4) / config.GP_18x18_RFsPerSheet;
    value_20GA = 0;
    value_14GA_Al = 0;}

    if ( operator == 'GP100 20x20' )   
    {value_14GA = value1 / config.GP_20x20_DoorsPerSheet;
    value_16GA_120x48= 0;
    value_16GA_120x60 = 0;
    value_18GA = (value1*4) / config.GP_20x20_RFsPerSheet;
    value_20GA = 0;
    value_14GA_Al = 0;}

    if ( operator == 'GP100 20x30' )   
    {value_14GA = value1 / config.GP_20x30_DoorsPerSheet;
    value_16GA_120x48= 0;
    value_16GA_120x60 = 0;
    value_18GA = ((value1*2) / config.GP_20x20_RFsPerSheet) + ((value1*2) / config.GP_30x30_RFsPerSheet);
    value_20GA = 0;
    value_14GA_Al = 0;
    }

    if ( operator == 'GP100 22x22' )   
    {value_14GA = value1 / config.GP_22x22_DoorsPerSheet;
    value_16GA_120x48= 0;
    value_16GA_120x60 = 0;
    value_18GA = (value1*4) / config.GP_22x22_RFsPerSheet;
    value_20GA = 0;
    value_14GA_Al = 0;}

    if ( operator == 'GP100 22x30' )   
    {value_14GA = value1 / config.GP_22x30_DoorsPerSheet;
    value_16GA_120x48= 0;
    value_16GA_120x60 = 0;
    value_18GA = ((value1*2) / config.GP_22x22_RFsPerSheet) + ((value1*2) / config.GP_30x30_RFsPerSheet);
    value_20GA = 0;
    value_14GA_Al = 0;
    }

    if ( operator == 'GP100 24x24' )   
    {value_14GA = value1 / config.GP_24x24_DoorsPerSheet;
    value_16GA_120x48= 0;
    value_16GA_120x60 = 0;
    value_18GA = (value1*4) / config.GP_24x24_RFsPerSheet;
    value_20GA = 0;
    value_14GA_Al = 0;}

    if ( operator == 'GP100 24x30' )   
    {value_14GA = value1 / config.GP_24x30_DoorsPerSheet;
    value_16GA_120x48= 0;
    value_16GA_120x60 = 0;
    value_18GA = ((value1*2) / config.GP_24x24_RFsPerSheet) + ((value1*2) / config.GP_30x30_RFsPerSheet);
    value_20GA = 0;
    value_14GA_Al = 0;
    }

    if ( operator == 'GP100 24x36' )   
    {value_14GA = value1 / config.GP_24x36_DoorsPerSheet;
    value_16GA_120x48= 0;
    value_16GA_120x60 = 0;
    value_18GA = ((value1*2) / config.GP_24x24_RFsPerSheet) + ((value1*2) / config.GP_36x36_RFsPerSheet);
    value_20GA = 0;
    value_14GA_Al = 0;}

    if ( operator == 'GP100 30x30' )   
    {value_14GA = value1 / config.GP_30x30_DoorsPerSheet;
    value_16GA_120x48= 0;
    value_16GA_120x60 = 0;
    value_18GA = (value1*4) / config.GP_30x30_RFsPerSheet;
    value_20GA = 0;
    value_14GA_Al = 0;}


    if ( operator == 'GP100 36x36*' )   
    {//note = "Can fit +2 exta GP100 24x24s in nest"
    value_14GA = value1 / config.GP_36x36_DoorsPerSheet;
    value_16GA_120x48= 0;
    value_16GA_120x60 = 0;
    value_18GA = (value1*4) / config.GP_36x36_RFsPerSheet;
    value_20GA = 0;
    value_14GA_Al = 0;
    }

    if ( operator == 'GP100 36x48*' )   
    {//note = "Can fit +2 exta GP100 24x24s in nest"
    value_14GA = value1 / config.GP_36x48_DoorsPerSheet;
    value_16GA_120x48= 0;
    value_16GA_120x60 = 0;
    value_18GA = ((value1*2) / config.GP_36x36_RFsPerSheet) + ((value1*2) / config.GP_48x48_RFsPerSheet);
    value_20GA = 0;
    value_14GA_Al = 0;
    }

    if ( operator == 'GP100 48x48' )   
    {value_14GA = value1 / config.GP_48x48_DoorsPerSheet;
    value_16GA_120x48= 0;
    value_16GA_120x60 = 0;
    value_18GA = (value1*4) / config.GP_48x48_RFsPerSheet;
    value_20GA = 0;
    value_14GA_Al = 0;
    }
// had a very bad coding error at the top ^, `}` bracket didn't encapsulate the full `if` statement for the GP 48x48s.....


    //RP110 Door Calculation

    if ( operator == 'RP110 24x24' )   
    {value_14GA = value1 / config.RP_24x24_DoorsPerSheet;
    value_16GA_120x48= 0;
    value_16GA_120x60 = 0;
    value_18GA = (value1*4) / config.GP_24x24_RFsPerSheet;
    value_20GA = 0;
    value_14GA_Al = 0;}

    if ( operator == 'RP110 24x36' )   
    {//note = "Can fit +2 exta GP100 24x24s in nest"
    value_14GA = value1 / config.RP_24x36_DoorsPerSheet;
    value_16GA_120x48= 0;
    value_16GA_120x60 = 0;
    value_18GA = ((value1*2) / config.GP_24x24_RFsPerSheet) + ((value1*2) / config.GP_36x36_RFsPerSheet);
    value_20GA = 0;
    value_14GA_Al = 0;
    }

    if ( operator == 'RP110 36x48*' )   
    {//note = "Can fit +2 exta GP100 24x24s in nest"
    value_14GA = value1 / config.RP_36x48_DoorsPerSheet;
    value_16GA_120x48= 0;
    value_16GA_120x60 = 0;
    value_18GA = ((value1*2) / config.GP_36x36_RFsPerSheet) + ((value1*2) / config.GP_48x48_RFsPerSheet);
    value_20GA = 0;
    value_14GA_Al = 0;
    }

/*
{name:'SMP120 24x24', symbol:'SMP120 24x24'},
  {name:'SMP120 24x48', symbol:'SMP120 24x48'},
  {name:'SMP120 48x48', symbol:'SMP120 48x48'},

*/

    //SMp120 Door Calculation

    if ( operator == 'SMP120 24x24')
    {value_14GA = value1 / config.SMP_24x24_DoorsPerSheet;
    value_16GA_120x48 = value1 / config.SMP_24x24_DoorsWorthRFsPerSheet;
    value_16GA_120x60 = 0;
    value_18GA = 0;
    value_20GA = 0;
    value_14GA_Al = 0}

    if ( operator == 'SMP120 24x48')
    {value_14GA = value1 / config.SMP_24x48_DoorsPerSheet;
    value_16GA_120x48 = value1 / config.SMP_24x48_DoorsWorthRFsPerSheet;
    value_16GA_120x60 = 0;
    value_18GA = 0;
    value_20GA = 0;
    value_14GA_Al = 0}

    if ( operator == 'SMP120 48x48')
    {value_14GA = value1 / config.SMP_48x48_DoorsPerSheet;
    value_16GA_120x48 = value1 / config.SMP_48x48_DoorsWorthRFsPerSheet;
    value_16GA_120x60 = 0;
    value_18GA = 0;
    value_20GA = 0;
    value_14GA_Al = 0}



    //TB1210 Door Calculation

    if ( operator == 'TB1210 24x24')
    {value_14GA = 0;
    value_16GA_120x48 = 0;
    value_16GA_120x60 = 0;
    value_18GA = 0;
    value_20GA = 0;
    value_14GA_Al = value1 / config.TB_24x24_FullAssyPerSheet;}

    //UAD200 Door Calculation

    if ( operator == 'UAD200 6x6' )   
    {value_14GA = 0;
    value_18GA = 0;
    value_16GA_120x60 = value1 / config.UAD_6x6_DoorsPerSheet;
    value_16GA_120x48 = (value1*4) / config.UAD_6x6_RFsPerSheet;
    value_20GA = 0;
    value_14GA_Al = 0;}

    if ( operator == 'UAD200 8x8' )   
    {value_14GA = 0;
    value_18GA = 0;
    value_16GA_120x60 = value1 / config.UAD_8x8_DoorsPerSheet;
    value_16GA_120x48 = (value1*4) / config.UAD_8x8_RFsPerSheet;
    value_20GA = 0;
    value_14GA_Al = 0;}

    if ( operator == 'UAD200 12x12' )   
    {value_14GA = 0;
    value_18GA = 0;
    value_16GA_120x60 = value1 / config.UAD_12x12_DoorsPerSheet;
    value_16GA_120x48 = (value1*4) / config.UAD_12x12_RFsPerSheet;
    value_20GA = 0;
    value_14GA_Al = 0;}

    if ( operator == 'UAD200 14x14' )   
    {value_14GA = 0;
    value_18GA = 0;
    value_16GA_120x60 = value1 / config.UAD_14x14_DoorsPerSheet;
    value_16GA_120x48 = (value1*4) / config.UAD_14x14_RFsPerSheet;
    value_20GA = 0;
    value_14GA_Al = 0;}

    if ( operator == 'UAD200 16x16' )   
    {value_14GA = 0;
    value_18GA = 0;
    value_16GA_120x60 = value1 / config.UAD_16x16_DoorsPerSheet;
    value_16GA_120x48 = (value1*4) / config.UAD_16x16_RFsPerSheet;
    value_20GA = 0;
    value_14GA_Al = 0;}

    if ( operator == 'UAD200 18x18' )   
    {value_14GA = 0;
    value_18GA = 0;
    value_16GA_120x60 = value1 / config.UAD_18x18_DoorsPerSheet;
    value_16GA_120x48 = (value1*4) / config.UAD_18x18_RFsPerSheet;
    value_20GA = 0;
    value_14GA_Al = 0;}

    if ( operator == 'UAD200 24x24' )   
    {value_14GA = 0;
    value_18GA = 0;
    value_16GA_120x60 = value1 / config.UAD_24x24_DoorsPerSheet;
    value_16GA_120x48 = (value1*4) / config.UAD_24x24_RFsPerSheet;
    value_20GA = 0;
    value_14GA_Al = 0;}

    
    console.log(value_20GA, 'Value 20GA')

    value_14GA = Math.round(value_14GA * 1000);
    value_14GA = value_14GA / 1000;
      
    // this "calculate" is from the the "calculate" function above
    //I really should change the below code to not use result and straight up use value_14GA instead
    let result = value_14GA

    console.log(result, "It is simply the 14GA result..., which is also the value_14GA as well")
    
    // Calculate the 18GA
//    console.log(value_18GA, "OLD value_18GA is here")
    // Rouding 18GA
    value_18GA = Math.round(value_18GA * 1000);
    value_18GA = value_18GA / 1000;
    // Rounded 18GA
//    console.log(value_18GA, "NEW value_18GA is here")

    array_18GA.push(value_18GA);
          
//    console.log(array_18GA);

    var sum_18GA = array_18GA.reduce(function(a, b) { return a + b; }, 0);

    sum_18GA = Math.round(sum_18GA * 1000);
    sum_18GA = sum_18GA / 1000;

//    console.log(sum_18GA, 'this is the NEW sum_18GA'); //where long numbers are
//    console.log('hello in 2')
    var lastsum_18GA = sum_18GA
//    console.log(lastsum_18GA, 'this is the last sum_18GA') //where long numbers are




    // Calculate the 14GA
//    console.log(value_14GA, "value_14GA is here")
    // Rounding 14GA
    value_14GA = Math.round(value_14GA * 1000);
    value_14GA = value_14GA / 1000;
    // Rounded 14GA
    array_14GA.push(value_14GA);
      
    console.log(array_14GA);
    
    var sum_14GA = array_14GA.reduce(function(a, b) { return a + b; }, 0);

    sum_14GA = Math.round(sum_14GA * 1000);
    sum_14GA = sum_14GA / 1000;

    var lastsum_14GA = sum_14GA
//    console.log(lastsum_14GA, 'this is the last sum_14GA')

    

    // Calculate the 16GA_120x60
//    console.log(value_16GA_120x60, "OLD value_16GA_120x60 is here")
    // Rouding 16GA_120x60
    value_16GA_120x60 = Math.round(value_16GA_120x60 * 1000);
    value_16GA_120x60 = value_16GA_120x60 / 1000;
    // Rounded 16GA_120x60
//    console.log(value_16GA_120x60, "NEW value_16GA_120x60 is here")

    array_16GA_120x60.push(value_16GA_120x60);
          
//    console.log(array_16GA_120x60);

    var sum_16GA_120x60 = array_16GA_120x60.reduce(function(a, b) { return a + b; }, 0);

    sum_16GA_120x60 = Math.round(sum_16GA_120x60 * 1000);
    sum_16GA_120x60 = sum_16GA_120x60 / 1000;

//    console.log(sum_16GA_120x60, 'this is the NEW sum_16GA_120x60'); //where long numbers are
//    console.log('hello in 2')
    var lastsum_16GA_120x60 = sum_16GA_120x60
//    console.log(lastsum_16GA_120x60, 'this is the last sum_16GA_120x60') //where long numbers are



    // Calculate the 16GA_120x48
//    console.log(value_16GA_120x48, "OLD value_16GA_120x48 is here")
    // Rouding 16GA_120x48
    value_16GA_120x48 = Math.round(value_16GA_120x48 * 1000);
    value_16GA_120x48 = value_16GA_120x48 / 1000;
    // Rounded 16GA_120x48
//    console.log(value_16GA_120x48, "NEW value_16GA_120x48 is here")

    array_16GA_120x48.push(value_16GA_120x48);
          
//    console.log(array_16GA_120x48);

    var sum_16GA_120x48 = array_16GA_120x48.reduce(function(a, b) { return a + b; }, 0);

    sum_16GA_120x48 = Math.round(sum_16GA_120x48 * 1000);
    sum_16GA_120x48 = sum_16GA_120x48 / 1000;

//    console.log(sum_16GA_120x48, 'this is the NEW sum_16GA_120x48'); //where long numbers are
//    console.log('hello in 2')
    var lastsum_16GA_120x48 = sum_16GA_120x48
//    console.log(lastsum_16GA_120x48, 'this is the last sum_16GA_120x48') //where long numbers are

    // Calculate the 14GA Aluminum
    value_14GA_Al = Math.round(value_14GA_Al * 1000);
    value_14GA_Al = value_14GA_Al / 1000;

    array_14GA_Al.push(value_14GA_Al);

    var sum_14GA_Al = array_14GA_Al.reduce(function(a, b) { return a + b; }, 0);

    sum_14GA_Al = Math.round(sum_14GA_Al * 1000);
    sum_14GA_Al = sum_14GA_Al / 1000;

    var lastsum_14GA_Al = sum_14GA_Al

    // Calculate the 20GA Cold Roll


    value_20GA = Math.round(value_20GA * 1000);
    value_20GA = value_20GA / 1000;

    array_20GA.push(value_20GA);

    var sum_20GA = array_20GA.reduce(function(a, b) { return a + b; }, 0);

    sum_20GA = Math.round(sum_20GA * 1000);
    sum_20GA = sum_20GA / 1000;

    var lastsum_20GA = sum_20GA


    res.json({
      A: 
        lastsum_14GA,
        
      B:
        lastsum_18GA,

      C:
        lastsum_16GA_120x60,

      D:
        lastsum_16GA_120x48,

      E:
        lastsum_14GA_Al,

      F:
        lastsum_20GA,

      result: {   
        operator: req.body.operator.symbol, 
        value1,
        result, // value_14GA
        value_18GA,
        value_16GA_120x60,
        value_16GA_120x48,
        value_20GA,
        value_14GA_Al,
        note,
      },

      output: {
        
      }
    });
});
  


// Ideas:
// 1. Think about making function calculations that will return some result (in this case, would be different gauge materials)
// 2. Create more doors...