'use strict';

//hello it is 7_9 3:36 pm

//add mongodb to heroku https://www.youtube.com/watch?v=N42pkl-aIIQ

// mobile listen: 10.0.0.240:3000

const express = require('express');
const app = express();
let PORT = process.env.PORT || 3000;

var config = require('./doordata.json');

// The below operators show up in the front end.  We can use them in our "calculate" section.
let operators = [

  {name:'B300 8x8', symbol:'B300 8x8'},
  {name:'B300 10x10', symbol:'B300 10x10'},
  {name:'B300 12x12', symbol:'B300 12x12'},
  {name:'B300 18x18', symbol:'B300 18x18'},
  {name:'B300 20x20', symbol:'B300 20x20'},
  {name:'B300 24x24', symbol:'B300 24x24'},
  {name:'B300 30x30', symbol:'B300 30x30'},

  {name:'EXT1350 30x30', symbol:'EXT1350 30x30'},


  {name:'GP100 8x8', symbol:'GP100 8x8'},
  {name:'GP100 12x12', symbol:'GP100 12x12'},
  {name:'GP100 12x18', symbol:'GP100 12x18'},
  {name:'GP100 18x18', symbol:'GP100 18x18'},
  {name:'GP100 24x24', symbol:'GP100 24x24'},
  {name:'GP100 24x36', symbol:'GP100 24x36'},
  {name:'GP100 36x36*', symbol:'GP100 36x36*'},
  {name:'GP100 36x48*', symbol:'GP100 36x48*'},
  {name:'GP100 48x48', symbol:'GP100 48x48'},

  {name:'UAD200 12x12',symbol:'UAD200 12x12'},
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
    let note = req.body.note

    //BASIC Door calculation

    if ( operator == 'B300 8x8')
    {value_14GA = 0;
    value_16GA_120x48 = 0;
    value_16GA_120x60 = 0;
    value_18GA = value1/config.B300_8x8_FullAssyPerSheet}

    if ( operator == 'B300 10x10')
    {value_14GA = 0;
    value_16GA_120x48 = 0;
    value_16GA_120x60 = 0;
    value_18GA = value1/config.B300_10x10_FullAssyPerSheet}

    if ( operator == 'B300 12x12')
    {value_14GA = 0;
    value_16GA_120x48 = 0;
    value_16GA_120x60 = 0;
    value_18GA = value1/config.B300_12x12_FullAssyPerSheet}
  
    if ( operator == 'B300 18x18')
    {value_14GA = 0;
    value_16GA_120x48 = 0;
    value_16GA_120x60 = 0;
    value_18GA = value1/config.B300_18x18_FullAssyPerSheet}

    if ( operator == 'B300 20x20')
    {value_14GA = 0;
    value_16GA_120x48 = 0;
    value_16GA_120x60 = 0;
    value_18GA = value1/config.B300_20x20_FullAssyPerSheet}

    if ( operator == 'B300 24x24')
    {value_14GA = 0;
    value_16GA_120x48 = 0;
    value_16GA_120x60 = 0;
    value_18GA = value1/config.B300_24x24_FullAssyPerSheet}

    if ( operator == 'B300 30x30')
    {value_14GA = 0;
    value_16GA_120x48 = 0;
    value_16GA_120x60 = 0;
    value_18GA = value1/config.B300_30x30_FullAssyPerSheet}

    //EXT1350 Door Calculation

    if ( operator == 'EXT1350 30x30')
    {value_14GA = 0;
    value_16GA_120x48 = 0;
    value_16GA_120x60 = 0;
    value_18GA = value1/config.EXT1350_30x30_FullAssyPerSheet}


    //GP100 Door Calculation

    if ( operator == 'GP100 8x8' )   
    {value_14GA = value1 / config.GP_8x8_DoorsPerSheet;
    value_16GA_120x48= 0;
    value_16GA_120x60 = 0;
    value_18GA = (value1*4) / config.GP_8x8_RFsPerSheet}

    if ( operator == 'GP100 12x12' )   
    {value_14GA = value1 / config.GP_12x12_DoorsPerSheet;
    value_16GA_120x48= 0;
    value_16GA_120x60 = 0;
    value_18GA = (value1*4) / config.GP_12x12_RFsPerSheet}

    if ( operator == 'GP100 12x18' )   
    {value_14GA = value1 / config.GP_12x18_DoorsPerSheet;
    value_16GA_120x48= 0;
    value_16GA_120x60 = 0;
    value_18GA = ((value1*2) / config.GP_12x12_RFsPerSheet) + ((value1*2) / config.GP_18x18_RFsPerSheet)
    }

    if ( operator == 'GP100 18x18' )   
    {value_14GA = value1 / config.GP_18x18_DoorsPerSheet;
    value_16GA_120x48= 0;
    value_16GA_120x60 = 0;
    value_18GA = (value1*4) / config.GP_18x18_RFsPerSheet}

    if ( operator == 'GP100 24x24' )   
    {value_14GA = value1 / config.GP_24x24_DoorsPerSheet;
    value_16GA_120x48= 0;
    value_16GA_120x60 = 0;
    value_18GA = (value1*4) / config.GP_24x24_RFsPerSheet}

    if ( operator == 'GP100 24x36' )   
    {value_14GA = value1 / config.GP_24x36_DoorsPerSheet;
    value_16GA_120x48= 0;
    value_16GA_120x60 = 0;
    value_18GA = ((value1*2) / config.GP_24x24_RFsPerSheet) + ((value1*2) / config.GP_36x36_RFsPerSheet)
    }




    if ( operator == 'GP100 36x36*' )   
    {//note = "Can fit +2 exta GP100 24x24s in nest"
    value_14GA = value1 / config.GP_36x36_DoorsPerSheet;
    value_16GA_120x48= 0;
    value_16GA_120x60 = 0;
    value_18GA = (value1*4) / config.GP_36x36_RFsPerSheet
    }

    if ( operator == 'GP100 36x48*' )   
    {//note = "Can fit +2 exta GP100 24x24s in nest"
    value_14GA = value1 / config.GP_36x48_DoorsPerSheet;
    value_16GA_120x48= 0;
    value_16GA_120x60 = 0;
    value_18GA = ((value1*2) / config.GP_36x36_RFsPerSheet) + ((value1*2) / config.GP_48x48_RFsPerSheet)
    }

    if ( operator == 'GP100 48x48' )   
    {value_14GA = value1 / config.GP_48x48_DoorsPerSheet;
    value_16GA_120x48= 0;
    value_16GA_120x60 = 0;
    value_18GA = (value1*4) / config.GP_48x48_RFsPerSheet}



    //UAD200 Door Calculation

    if ( operator == 'UAD200 12x12' )   
    {value_14GA = 0;
    value_18GA = 0;
    value_16GA_120x60 = value1 / config.UAD_12x12_DoorsPerSheet;
    value_16GA_120x48 = (value1*4) / config.UAD_12x12_RFsPerSheet;
    }

    if ( operator == 'UAD200 18x18' )   
    {value_14GA = 0;
    value_18GA = 0;
    value_16GA_120x60 = value1 / config.UAD_18x18_DoorsPerSheet;
    value_16GA_120x48 = (value1*4) / config.UAD_18x18_RFsPerSheet;
    }

    if ( operator == 'UAD200 24x24' )   
    {value_14GA = 0;
    value_18GA = 0;
    value_16GA_120x60 = value1 / config.UAD_24x24_DoorsPerSheet;
    value_16GA_120x48 = (value1*4) / config.UAD_24x24_RFsPerSheet;
    }



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

    

    res.json({
      A: 
        lastsum_14GA,
        
      B:
        lastsum_18GA,

      C:
        lastsum_16GA_120x60,

      D:
        lastsum_16GA_120x48,

      result: {   
        operator: req.body.operator.symbol, 
        value1,
        result, // value_14GA
        value_18GA,
        value_16GA_120x60,
        value_16GA_120x48,
        note,
      },

      output: {
        
      }
    });
});
  


// Ideas:
// 1. Think about making function calculations that will return some result (in this case, would be different gauge materials)
// 2. Create more doors...