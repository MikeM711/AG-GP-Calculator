/*
Below in this code, I have commented how this project can be improved
*/

'use strict';

const express = require('express');
const app = express();
let PORT = process.env.PORT || 3000;

var config = require('./doordata.json');

/*
For next time: Keep everyting in a database (Firebase/MongoDB) (or the very least consult JSON) rather than a huge operators list below
*/

let operators = [

    { name: 'AL1500 36x36', symbol: 'AL1500 36x36' },
    { name: 'AL1500 48x48', symbol: 'AL1500 48x48' },

    { name: 'B300 8x8', symbol: 'B300 8x8' },
    { name: 'B300 10x10', symbol: 'B300 10x10' },
    { name: 'B300 12x12', symbol: 'B300 12x12' },
    { name: 'B300 12x16', symbol: 'B300 12x16' },
    { name: 'B300 16x16', symbol: 'B300 16x16' },
    { name: 'B300 18x18', symbol: 'B300 18x18' },
    { name: 'B300 18x22', symbol: 'B300 18x22' },
    { name: 'B300 20x20', symbol: 'B300 20x20' },
    { name: 'B300 20x30', symbol: 'B300 20x30' },
    { name: 'B300 22x30', symbol: 'B300 22x30' },
    { name: 'B300 24x24', symbol: 'B300 24x24' },
    { name: 'B300 30x30', symbol: 'B300 30x30' },

    { name: 'DW400 12x12', symbol: 'DW400 12x12' },
    { name: 'DW400 16x16', symbol: 'DW400 16x16' },
    { name: 'DW400 18x18', symbol: 'DW400 18x18' },
    { name: 'DW400 22x22', symbol: 'DW400 22x22' },
    { name: 'DW400 24x24', symbol: 'DW400 24x24' },
    { name: 'DW400 24x48', symbol: 'DW400 24x48' },

    { name: 'EXT1350-1300 12x12', symbol: 'EXT1350-1300 12x12' },
    { name: 'EXT1350-1300 16x16', symbol: 'EXT1350-1300 16x16' },
    { name: 'EXT1350-1300 18x18', symbol: 'EXT1350-1300 18x18' },
    { name: 'EXT1350-1300 22x36', symbol: 'EXT1350-1300 22x36' },
    { name: 'EXT1350-1300 24x24', symbol: 'EXT1350-1300 24x24' },
    { name: 'EXT1350-1300 24x36', symbol: 'EXT1350-1300 24x36' },
    { name: 'EXT1350-1300 30x30', symbol: 'EXT1350-1300 30x30' },
    { name: 'EXT1350-1300 30x36', symbol: 'EXT1350-1300 30x36' },

    { name: 'FR800 12x12', symbol: 'FR800 12x12' },
    { name: 'FR800 14x14', symbol: 'FR800 14x14' },
    { name: 'FR800 16x16', symbol: 'FR800 16x16' },
    { name: 'FR800 22x22', symbol: 'FR800 22x22' },
    { name: 'FR800 22x36', symbol: 'FR800 22x36' },
    { name: 'FR800 24x24', symbol: 'FR800 24x24' },
    { name: 'FR800 24x36', symbol: 'FR800 24x36' },

    { name: 'GP100 8x8', symbol: 'GP100 8x8' },
    { name: 'GP100 8x16', symbol: 'GP100 8x16' },
    { name: 'GP100 10x10', symbol: 'GP100 10x10' },
    { name: 'GP100 12x12', symbol: 'GP100 12x12' },
    { name: 'GP100 12x18', symbol: 'GP100 12x18' },
    { name: 'GP100 14x14', symbol: 'GP100 14x14' },
    { name: 'GP100 16x16', symbol: 'GP100 16x16' },
    { name: 'GP100 16x24', symbol: 'GP100 16x24' },
    { name: 'GP100 18x18', symbol: 'GP100 18x18' },
    { name: 'GP100 20x20', symbol: 'GP100 20x20' },
    { name: 'GP100 20x30', symbol: 'GP100 20x30' },
    { name: 'GP100 22x22', symbol: 'GP100 22x22' },
    { name: 'GP100 22x30', symbol: 'GP100 22x30' },
    { name: 'GP100 22x36', symbol: 'GP100 22x36' },
    { name: 'GP100 24x24', symbol: 'GP100 24x24' },
    { name: 'GP100 24x30', symbol: 'GP100 24x30' },
    { name: 'GP100 24x36', symbol: 'GP100 24x36' },
    { name: 'GP100 30x30', symbol: 'GP100 30x30' },
    { name: 'GP100 36x36*', symbol: 'GP100 36x36*' },
    { name: 'GP100 36x48*', symbol: 'GP100 36x48*' },
    { name: 'GP100 48x48', symbol: 'GP100 48x48' },

    { name: 'RDW410 16x16', symbol: 'RDW410 16x16' },

    { name: 'RP110 24x24', symbol: 'RP110 24x24' },
    { name: 'RP110 24x36', symbol: 'RP110 24x36' },
    { name: 'RP110 36x48*', symbol: 'RP110 36x48*' },

    { name: 'SMP120 18x18', symbol: 'SMP120 18x18' },
    { name: 'SMP120 24x24', symbol: 'SMP120 24x24' },
    { name: 'SMP120 24x48', symbol: 'SMP120 24x48' },
    { name: 'SMP120 48x48', symbol: 'SMP120 48x48' },

    { name: 'TB1210 24x24', symbol: 'TB1210 24x24' },

    { name: 'UAD200 6x6', symbol: 'UAD200 6x6' },
    { name: 'UAD200 8x8', symbol: 'UAD200 8x8' },
    { name: 'UAD200 10x10', symbol: 'UAD200 10x10' },
    { name: 'UAD200 12x12', symbol: 'UAD200 12x12' },
    { name: 'UAD200 14x14', symbol: 'UAD200 14x14' },
    { name: 'UAD200 16x16', symbol: 'UAD200 16x16' },
    { name: 'UAD200 18x18', symbol: 'UAD200 18x18' },
    { name: 'UAD200 20x20', symbol: 'UAD200 20x20' },
    { name: 'UAD200 24x24', symbol: 'UAD200 24x24' },
    { name: 'UAD200 24x36', symbol: 'UAD200 24x36' },
    { name: 'UAD200 36x36', symbol: 'UAD200 36x36' },
    { name: 'UAD200 36x48', symbol: 'UAD200 36x48' },
    { name: 'UAD200 48x48', symbol: 'UAD200 48x48' },

];

app.use(express.static(__dirname + '/build'));

app.use(require('body-parser').json());
app.use((req, res, next) => {
    // res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Origin', 'https://mean-calculator.herokuapp.com/calculator');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    next();
});

app.listen(PORT, () => {
    console.log('server started on port', PORT);

});

/*
For next time: Think about possibly using an object with array properties instead
    This may be more legible and easier for people to understand
*/

//Used array below.  Need this to initiate an array for objects to be held when inputted.
var array_14GA = [];
var array_16GA_120x48 = [];
var array_16GA_120x60 = [];
var array_18GA = [];
var array_20GA = [];
var array_14GA_Al = [];

app.route('/calculator')

    .get((req, res) => {

        res.json({
            operators,

        });
        array_14GA = [];
        array_16GA_120x48 = [];
        array_16GA_120x60 = [];
        array_18GA = [];
        array_20GA = [];
        array_14GA_Al = [];
    })

    .post((req, res) => {

        let operator = req.body.operator.name;
        let value1 = req.body.value1;

        let value_14GA = req.body.value_14GA
        let value_16GA_120x48 = req.body.value_16GA
        let value_16GA_120x60 = req.body.value_16GA
        let value_18GA = req.body.value_18GA
        let value_20GA = req.body.value_20GA

        let value_14GA_Al = req.body.value_14GA_Al
        let note = req.body.note

        /*
        For next time: Again, keep everyting in a database (Firebase/MongoDB) (or the very least consult JSON) rather than all of these if statements below...

        **I would definitely rather all data in some form of a database, not in the code itself, this will help TREMENDOUSLY**
        
        Adding new items is more work than it needs to be! And the amount of space these if statements take up is very overwhelming - Make a function that can handle every operator instead, you can make this much much shorter.
        */

        //AL1500 Door Calculation

        if (operator == 'AL1500 36x36') {
            value_14GA = 0;
            value_16GA_120x48 = 0;
            value_16GA_120x60 = 0;
            value_18GA = 0;
            value_20GA = 0;
            value_14GA_Al = value1 / config.AL1500_36x36_FullAssyPerSheet;
        }

        if (operator == 'AL1500 48x48') {
            value_14GA = 0;
            value_16GA_120x48 = 0;
            value_16GA_120x60 = 0;
            value_18GA = 0;
            value_20GA = 0;
            value_14GA_Al = value1 / config.AL1500_48x48_FullAssyPerSheet;
        }

        //BASIC Door calculation

        if (operator == 'B300 8x8') {
            value_14GA = 0;
            value_16GA_120x48 = 0;
            value_16GA_120x60 = 0;
            value_18GA = value1 / config.B300_8x8_FullAssyPerSheet;
            value_20GA = 0;
            value_14GA_Al = 0;
        }

        if (operator == 'B300 10x10') {
            value_14GA = 0;
            value_16GA_120x48 = 0;
            value_16GA_120x60 = 0;
            value_18GA = value1 / config.B300_10x10_FullAssyPerSheet;
            value_20GA = 0;
            value_14GA_Al = 0;
        }

        if (operator == 'B300 12x12') {
            value_14GA = 0;
            value_16GA_120x48 = 0;
            value_16GA_120x60 = 0;
            value_18GA = value1 / config.B300_12x12_FullAssyPerSheet;
            value_20GA = 0;
            value_14GA_Al = 0;
        }

        if (operator == 'B300 12x16') {
            value_14GA = 0;
            value_16GA_120x48 = 0;
            value_16GA_120x60 = 0;
            value_18GA = value1 / config.B300_12x16_FullAssyPerSheet;
            value_20GA = 0;
            value_14GA_Al = 0;
        }

        if (operator == 'B300 16x16') {
            value_14GA = 0;
            value_16GA_120x48 = 0;
            value_16GA_120x60 = 0;
            value_18GA = value1 / config.B300_16x16_FullAssyPerSheet;
            value_20GA = 0;
            value_14GA_Al = 0;
        }

        if (operator == 'B300 18x18') {
            value_14GA = 0;
            value_16GA_120x48 = 0;
            value_16GA_120x60 = 0;
            value_18GA = value1 / config.B300_18x18_FullAssyPerSheet;
            value_20GA = 0;
            value_14GA_Al = 0;
        }

        if (operator == 'B300 18x22') {
            value_14GA = 0;
            value_16GA_120x48 = 0;
            value_16GA_120x60 = 0;
            value_18GA = value1 / config.B300_18x22_FullAssyPerSheet;
            value_20GA = 0;
            value_14GA_Al = 0;
        }

        if (operator == 'B300 20x20') {
            value_14GA = 0;
            value_16GA_120x48 = 0;
            value_16GA_120x60 = 0;
            value_18GA = value1 / config.B300_20x20_FullAssyPerSheet;
            value_20GA = 0;
            value_14GA_Al = 0;
        }

        if (operator == 'B300 20x30') {
            value_14GA = 0;
            value_16GA_120x48 = 0;
            value_16GA_120x60 = 0;
            value_18GA = value1 / config.B300_20x30_FullAssyPerSheet;
            value_20GA = 0;
            value_14GA_Al = 0;
        }

        if (operator == 'B300 22x30') {
            value_14GA = 0;
            value_16GA_120x48 = 0;
            value_16GA_120x60 = 0;
            value_18GA = value1 / config.B300_22x30_FullAssyPerSheet;
            value_20GA = 0;
            value_14GA_Al = 0;
        }

        if (operator == 'B300 24x24') {
            value_14GA = 0;
            value_16GA_120x48 = 0;
            value_16GA_120x60 = 0;
            value_18GA = value1 / config.B300_24x24_FullAssyPerSheet;
            value_20GA = 0;
            value_14GA_Al = 0;
        }

        if (operator == 'B300 30x30') {
            value_14GA = 0;
            value_16GA_120x48 = 0;
            value_16GA_120x60 = 0;
            value_18GA = value1 / config.B300_30x30_FullAssyPerSheet;
            value_20GA = 0;
            value_14GA_Al = 0;
        }

        //DW400 Door Calculation

        if (operator == 'DW400 12x12') {
            value_14GA = 0;
            value_16GA_120x48 = value1 / config.DW400_12x12_FullAssyPerSheet;
            value_16GA_120x60 = 0;
            value_18GA = 0;
            value_20GA = 0;
            value_14GA_Al = 0;
        }

        if (operator == 'DW400 16x16') {
            value_14GA = 0;
            value_16GA_120x48 = value1 / config.DW400_16x16_FullAssyPerSheet;
            value_16GA_120x60 = 0;
            value_18GA = 0;
            value_20GA = 0;
            value_14GA_Al = 0;
        }

        if (operator == 'DW400 18x18') {
            value_14GA = 0;
            value_16GA_120x48 = value1 / config.DW400_18x18_FullAssyPerSheet;
            value_16GA_120x60 = 0;
            value_18GA = 0;
            value_20GA = 0;
            value_14GA_Al = 0;
        }

        if (operator == 'DW400 22x22') {
            value_14GA = 0;
            value_16GA_120x48 = value1 / config.DW400_22x22_FullAssyPerSheet;
            value_16GA_120x60 = 0;
            value_18GA = 0;
            value_20GA = 0;
            value_14GA_Al = 0;
        }

        if (operator == 'DW400 24x24') {
            value_14GA = 0;
            value_16GA_120x48 = value1 / config.DW400_24x24_FullAssyPerSheet;
            value_16GA_120x60 = 0;
            value_18GA = 0;
            value_20GA = 0;
            value_14GA_Al = 0;
        }

        if (operator == 'DW400 24x48') {
            value_14GA = 0;
            value_16GA_120x48 = value1 / config.DW400_24x48_FullAssyPerSheet;
            value_16GA_120x60 = 0;
            value_18GA = 0;
            value_20GA = 0;
            value_14GA_Al = 0;
        }

        //EXT1350-1300 Door Calculation

        if (operator == 'EXT1350-1300 12x12') {
            value_14GA = 0;
            value_16GA_120x48 = 0;
            value_16GA_120x60 = 0;
            value_18GA = value1 / config.EXT1350_1300_12x12_FullAssyPerSheet;
            value_20GA = 0;
            value_14GA_Al = 0;
        }

        if (operator == 'EXT1350-1300 16x16') {
            value_14GA = 0;
            value_16GA_120x48 = 0;
            value_16GA_120x60 = 0;
            value_18GA = value1 / config.EXT1350_1300_16x16_FullAssyPerSheet;
            value_20GA = 0;
            value_14GA_Al = 0;
        }

        if (operator == 'EXT1350-1300 18x18') {
            value_14GA = 0;
            value_16GA_120x48 = 0;
            value_16GA_120x60 = 0;
            value_18GA = value1 / config.EXT1350_1300_18x18_FullAssyPerSheet;
            value_20GA = 0;
            value_14GA_Al = 0;
        }

        if (operator == 'EXT1350-1300 22x36') {
            value_14GA = 0;
            value_16GA_120x48 = 0;
            value_16GA_120x60 = 0;
            value_18GA = value1 / config.EXT1350_1300_22x36_FullAssyPerSheet;
            value_20GA = 0;
            value_14GA_Al = 0;
        }

        if (operator == 'EXT1350-1300 24x24') {
            value_14GA = 0;
            value_16GA_120x48 = 0;
            value_16GA_120x60 = 0;
            value_18GA = value1 / config.EXT1350_1300_24x24_FullAssyPerSheet;
            value_20GA = 0;
            value_14GA_Al = 0;
        }

        if (operator == 'EXT1350-1300 24x36') {
            value_14GA = 0;
            value_16GA_120x48 = 0;
            value_16GA_120x60 = 0;
            value_18GA = value1 / config.EXT1350_1300_24x36_FullAssyPerSheet;
            value_20GA = 0;
            value_14GA_Al = 0;
        }

        if (operator == 'EXT1350-1300 30x30') {
            value_14GA = 0;
            value_16GA_120x48 = 0;
            value_16GA_120x60 = 0;
            value_18GA = value1 / config.EXT1350_1300_30x30_FullAssyPerSheet;
            value_20GA = 0;
            value_14GA_Al = 0;
        }

        if (operator == 'EXT1350-1300 30x36') {
            value_14GA = 0;
            value_16GA_120x48 = 0;
            value_16GA_120x60 = 0;
            value_18GA = value1 / config.EXT1350_1300_30x36_FullAssyPerSheet;
            value_20GA = 0;
            value_14GA_Al = 0;
        }

        //FR800 Door Calculation

        if (operator == 'FR800 12x12') {
            value_14GA = value1 / config.FR800_14GA;
            value_16GA_120x48 = 0;
            value_16GA_120x60 = value1 / config.FR800_12x12_16GA;
            value_18GA = value1 / config.FR800_12x12_18GA;
            value_20GA = value1 / config.FR800_12x12_20GA;
            value_14GA_Al = 0;
        }

        if (operator == 'FR800 14x14') {
            value_14GA = value1 / config.FR800_14GA;
            value_16GA_120x48 = 0;
            value_16GA_120x60 = value1 / config.FR800_14x14_16GA;
            value_18GA = value1 / config.FR800_14x14_18GA;
            value_20GA = value1 / config.FR800_14x14_20GA;
            value_14GA_Al = 0;
        }

        if (operator == 'FR800 16x16') {
            value_14GA = value1 / config.FR800_14GA;
            value_16GA_120x48 = 0;
            value_16GA_120x60 = value1 / config.FR800_16x16_16GA;
            value_18GA = value1 / config.FR800_16x16_18GA;
            value_20GA = value1 / config.FR800_16x16_20GA;
            value_14GA_Al = 0;
        }

        if (operator == 'FR800 22x22') {
            value_14GA = value1 / config.FR800_14GA;
            value_16GA_120x48 = 0;
            value_16GA_120x60 = value1 / config.FR800_22x22_16GA;
            value_18GA = value1 / config.FR800_22x22_18GA;
            value_20GA = value1 / config.FR800_22x22_20GA;
            value_14GA_Al = 0;
        }

        if (operator == 'FR800 24x24') {
            value_14GA = value1 / config.FR800_14GA;
            value_16GA_120x48 = 0;
            value_16GA_120x60 = value1 / config.FR800_24x24_16GA;
            value_18GA = value1 / config.FR800_24x24_18GA;
            value_20GA = value1 / config.FR800_24x24_20GA;
            value_14GA_Al = 0;
        }

        if (operator == 'FR800 22x36') {
            value_14GA = value1 / config.FR800_14GA;
            value_16GA_120x48 = 0;
            value_16GA_120x60 = value1 / config.FR800_22x36_16GA;
            value_18GA = value1 / config.FR800_22x36_18GA;
            value_20GA = value1 / config.FR800_22x36_20GA;
            value_14GA_Al = 0;
        }

        if (operator == 'FR800 24x36') {
            value_14GA = value1 / config.FR800_14GA;
            value_16GA_120x48 = 0;
            value_16GA_120x60 = value1 / config.FR800_24x36_16GA;
            value_18GA = value1 / config.FR800_24x36_18GA;
            value_20GA = value1 / config.FR800_24x36_20GA;
            value_14GA_Al = 0;
        }

        //GP100 Door Calculation

        if (operator == 'GP100 8x8') {
            value_14GA = value1 / config.GP_8x8_DoorsPerSheet;
            value_16GA_120x48 = 0;
            value_16GA_120x60 = 0;
            value_18GA = (value1 * 4) / config.GP_8x8_RFsPerSheet;
            value_20GA = 0;
            value_14GA_Al = 0;
        }

        if (operator == 'GP100 8x16') {
            value_14GA = value1 / config.GP_8x16_DoorsPerSheet;
            value_16GA_120x48 = 0;
            value_16GA_120x60 = 0;
            value_18GA = ((value1 * 2) / config.GP_8x8_RFsPerSheet) + ((value1 * 2) / config.GP_16x16_RFsPerSheet);
            value_20GA = 0;
            value_14GA_Al = 0;
        }

        if (operator == 'GP100 10x10') {
            value_14GA = value1 / config.GP_10x10_DoorsPerSheet;
            value_16GA_120x48 = 0;
            value_16GA_120x60 = 0;
            value_18GA = (value1 * 4) / config.GP_10x10_RFsPerSheet;
            value_20GA = 0;
            value_14GA_Al = 0;
        }

        if (operator == 'GP100 12x12') {
            value_14GA = value1 / config.GP_12x12_DoorsPerSheet;
            value_16GA_120x48 = 0;
            value_16GA_120x60 = 0;
            value_18GA = (value1 * 4) / config.GP_12x12_RFsPerSheet;
            value_20GA = 0;
            value_14GA_Al = 0;
        }

        if (operator == 'GP100 12x18') {
            value_14GA = value1 / config.GP_12x18_DoorsPerSheet;
            value_16GA_120x48 = 0;
            value_16GA_120x60 = 0;
            value_18GA = ((value1 * 2) / config.GP_12x12_RFsPerSheet) + ((value1 * 2) / config.GP_18x18_RFsPerSheet);
            value_20GA = 0;
            value_14GA_Al = 0;
        }

        if (operator == 'GP100 14x14') {
            value_14GA = value1 / config.GP_14x14_DoorsPerSheet;
            value_16GA_120x48 = 0;
            value_16GA_120x60 = 0;
            value_18GA = (value1 * 4) / config.GP_14x14_RFsPerSheet;
            value_20GA = 0;
            value_14GA_Al = 0;
        }

        if (operator == 'GP100 16x16') {
            value_14GA = value1 / config.GP_16x16_DoorsPerSheet;
            value_16GA_120x48 = 0;
            value_16GA_120x60 = 0;
            value_18GA = (value1 * 4) / config.GP_16x16_RFsPerSheet;
            value_20GA = 0;
            value_14GA_Al = 0;
        }

        if (operator == 'GP100 16x24') {
            value_14GA = value1 / config.GP_16x24_DoorsPerSheet;
            value_16GA_120x48 = 0;
            value_16GA_120x60 = 0;
            value_18GA = ((value1 * 2) / config.GP_16x16_RFsPerSheet) + ((value1 * 2) / config.GP_24x24_RFsPerSheet);
            value_20GA = 0;
            value_14GA_Al = 0;
        }

        if (operator == 'GP100 18x18') {
            value_14GA = value1 / config.GP_18x18_DoorsPerSheet;
            value_16GA_120x48 = 0;
            value_16GA_120x60 = 0;
            value_18GA = (value1 * 4) / config.GP_18x18_RFsPerSheet;
            value_20GA = 0;
            value_14GA_Al = 0;
        }

        if (operator == 'GP100 20x20') {
            value_14GA = value1 / config.GP_20x20_DoorsPerSheet;
            value_16GA_120x48 = 0;
            value_16GA_120x60 = 0;
            value_18GA = (value1 * 4) / config.GP_20x20_RFsPerSheet;
            value_20GA = 0;
            value_14GA_Al = 0;
        }

        if (operator == 'GP100 20x30') {
            value_14GA = value1 / config.GP_20x30_DoorsPerSheet;
            value_16GA_120x48 = 0;
            value_16GA_120x60 = 0;
            value_18GA = ((value1 * 2) / config.GP_20x20_RFsPerSheet) + ((value1 * 2) / config.GP_30x30_RFsPerSheet);
            value_20GA = 0;
            value_14GA_Al = 0;
        }

        if (operator == 'GP100 22x22') {
            value_14GA = value1 / config.GP_22x22_DoorsPerSheet;
            value_16GA_120x48 = 0;
            value_16GA_120x60 = 0;
            value_18GA = (value1 * 4) / config.GP_22x22_RFsPerSheet;
            value_20GA = 0;
            value_14GA_Al = 0;
        }

        if (operator == 'GP100 22x30') {
            value_14GA = value1 / config.GP_22x30_DoorsPerSheet;
            value_16GA_120x48 = 0;
            value_16GA_120x60 = 0;
            value_18GA = ((value1 * 2) / config.GP_22x22_RFsPerSheet) + ((value1 * 2) / config.GP_30x30_RFsPerSheet);
            value_20GA = 0;
            value_14GA_Al = 0;
        }

        if (operator == 'GP100 22x36') {
            value_14GA = value1 / config.GP_22x36_DoorsPerSheet;
            value_16GA_120x48 = 0;
            value_16GA_120x60 = 0;
            value_18GA = ((value1 * 2) / config.GP_22x22_RFsPerSheet) + ((value1 * 2) / config.GP_36x36_RFsPerSheet);
            value_20GA = 0;
            value_14GA_Al = 0;
        }

        if (operator == 'GP100 24x24') {
            value_14GA = value1 / config.GP_24x24_DoorsPerSheet;
            value_16GA_120x48 = 0;
            value_16GA_120x60 = 0;
            value_18GA = (value1 * 4) / config.GP_24x24_RFsPerSheet;
            value_20GA = 0;
            value_14GA_Al = 0;
        }

        if (operator == 'GP100 24x30') {
            value_14GA = value1 / config.GP_24x30_DoorsPerSheet;
            value_16GA_120x48 = 0;
            value_16GA_120x60 = 0;
            value_18GA = ((value1 * 2) / config.GP_24x24_RFsPerSheet) + ((value1 * 2) / config.GP_30x30_RFsPerSheet);
            value_20GA = 0;
            value_14GA_Al = 0;
        }

        if (operator == 'GP100 24x36') {
            value_14GA = value1 / config.GP_24x36_DoorsPerSheet;
            value_16GA_120x48 = 0;
            value_16GA_120x60 = 0;
            value_18GA = ((value1 * 2) / config.GP_24x24_RFsPerSheet) + ((value1 * 2) / config.GP_36x36_RFsPerSheet);
            value_20GA = 0;
            value_14GA_Al = 0;
        }

        if (operator == 'GP100 30x30') {
            value_14GA = value1 / config.GP_30x30_DoorsPerSheet;
            value_16GA_120x48 = 0;
            value_16GA_120x60 = 0;
            value_18GA = (value1 * 4) / config.GP_30x30_RFsPerSheet;
            value_20GA = 0;
            value_14GA_Al = 0;
        }

        if (operator == 'GP100 36x36*') {//note = "Can fit +2 exta GP100 24x24s in nest"
            value_14GA = value1 / config.GP_36x36_DoorsPerSheet;
            value_16GA_120x48 = 0;
            value_16GA_120x60 = 0;
            value_18GA = (value1 * 4) / config.GP_36x36_RFsPerSheet;
            value_20GA = 0;
            value_14GA_Al = 0;
        }

        if (operator == 'GP100 36x48*') {//note = "Can fit +2 exta GP100 24x24s in nest"
            value_14GA = value1 / config.GP_36x48_DoorsPerSheet;
            value_16GA_120x48 = 0;
            value_16GA_120x60 = 0;
            value_18GA = ((value1 * 2) / config.GP_36x36_RFsPerSheet) + ((value1 * 2) / config.GP_48x48_RFsPerSheet);
            value_20GA = 0;
            value_14GA_Al = 0;
        }

        if (operator == 'GP100 48x48') {
            value_14GA = value1 / config.GP_48x48_DoorsPerSheet;
            value_16GA_120x48 = 0;
            value_16GA_120x60 = 0;
            value_18GA = (value1 * 4) / config.GP_48x48_RFsPerSheet;
            value_20GA = 0;
            value_14GA_Al = 0;
        }

        //RDW410 Door Calculation

        if (operator == 'RDW410 16x16') {
            value_14GA = 0;
            value_16GA_120x48 = value1 / config.RDW410_16x16_FullAssyPerSheet;
            value_16GA_120x60 = 0;
            value_18GA = 0;
            value_20GA = 0;
            value_14GA_Al = 0;
        }

        //RP110 Door Calculation

        if (operator == 'RP110 24x24') {
            value_14GA = value1 / config.RP_24x24_DoorsPerSheet;
            value_16GA_120x48 = 0;
            value_16GA_120x60 = 0;
            value_18GA = (value1 * 4) / config.GP_24x24_RFsPerSheet;
            value_20GA = 0;
            value_14GA_Al = 0;
        }

        if (operator == 'RP110 24x36') {//note = "Can fit +2 exta GP100 24x24s in nest"
            value_14GA = value1 / config.RP_24x36_DoorsPerSheet;
            value_16GA_120x48 = 0;
            value_16GA_120x60 = 0;
            value_18GA = ((value1 * 2) / config.GP_24x24_RFsPerSheet) + ((value1 * 2) / config.GP_36x36_RFsPerSheet);
            value_20GA = 0;
            value_14GA_Al = 0;
        }

        if (operator == 'RP110 36x48*') {//note = "Can fit +2 exta GP100 24x24s in nest"
            value_14GA = value1 / config.RP_36x48_DoorsPerSheet;
            value_16GA_120x48 = 0;
            value_16GA_120x60 = 0;
            value_18GA = ((value1 * 2) / config.GP_36x36_RFsPerSheet) + ((value1 * 2) / config.GP_48x48_RFsPerSheet);
            value_20GA = 0;
            value_14GA_Al = 0;
        }

        //SMP120 Door Calculation

        if (operator == 'SMP120 18x18') {
            value_14GA = value1 / config.SMP_18x18_DoorsPerSheet;
            value_16GA_120x48 = value1 / config.SMP_18x18_DoorsWorthRFsPerSheet;
            value_16GA_120x60 = 0;
            value_18GA = 0;
            value_20GA = 0;
            value_14GA_Al = 0
        }

        if (operator == 'SMP120 24x24') {
            value_14GA = value1 / config.SMP_24x24_DoorsPerSheet;
            value_16GA_120x48 = value1 / config.SMP_24x24_DoorsWorthRFsPerSheet;
            value_16GA_120x60 = 0;
            value_18GA = 0;
            value_20GA = 0;
            value_14GA_Al = 0
        }

        if (operator == 'SMP120 24x48') {
            value_14GA = value1 / config.SMP_24x48_DoorsPerSheet;
            value_16GA_120x48 = value1 / config.SMP_24x48_DoorsWorthRFsPerSheet;
            value_16GA_120x60 = 0;
            value_18GA = 0;
            value_20GA = 0;
            value_14GA_Al = 0
        }

        if (operator == 'SMP120 48x48') {
            value_14GA = value1 / config.SMP_48x48_DoorsPerSheet;
            value_16GA_120x48 = value1 / config.SMP_48x48_DoorsWorthRFsPerSheet;
            value_16GA_120x60 = 0;
            value_18GA = 0;
            value_20GA = 0;
            value_14GA_Al = 0
        }

        //TB1210 Door Calculation

        if (operator == 'TB1210 24x24') {
            value_14GA = 0;
            value_16GA_120x48 = 0;
            value_16GA_120x60 = 0;
            value_18GA = 0;
            value_20GA = 0;
            value_14GA_Al = value1 / config.TB_24x24_FullAssyPerSheet;
        }

        //UAD200 Door Calculation

        if (operator == 'UAD200 6x6') {
            value_14GA = 0;
            value_18GA = 0;
            value_16GA_120x60 = value1 / config.UAD_6x6_DoorsPerSheet;
            value_16GA_120x48 = (value1 * 4) / config.UAD_6x6_RFsPerSheet;
            value_20GA = 0;
            value_14GA_Al = 0;
        }

        if (operator == 'UAD200 8x8') {
            value_14GA = 0;
            value_18GA = 0;
            value_16GA_120x60 = value1 / config.UAD_8x8_DoorsPerSheet;
            value_16GA_120x48 = (value1 * 4) / config.UAD_8x8_RFsPerSheet;
            value_20GA = 0;
            value_14GA_Al = 0;
        }

        if (operator == 'UAD200 10x10') {
            value_14GA = 0;
            value_18GA = 0;
            value_16GA_120x60 = value1 / config.UAD_10x10_DoorsPerSheet;
            value_16GA_120x48 = (value1 * 4) / config.UAD_10x10_RFsPerSheet;
            value_20GA = 0;
            value_14GA_Al = 0;
        }

        if (operator == 'UAD200 12x12') {
            value_14GA = 0;
            value_18GA = 0;
            value_16GA_120x60 = value1 / config.UAD_12x12_DoorsPerSheet;
            value_16GA_120x48 = (value1 * 4) / config.UAD_12x12_RFsPerSheet;
            value_20GA = 0;
            value_14GA_Al = 0;
        }

        if (operator == 'UAD200 14x14') {
            value_14GA = 0;
            value_18GA = 0;
            value_16GA_120x60 = value1 / config.UAD_14x14_DoorsPerSheet;
            value_16GA_120x48 = (value1 * 4) / config.UAD_14x14_RFsPerSheet;
            value_20GA = 0;
            value_14GA_Al = 0;
        }

        if (operator == 'UAD200 16x16') {
            value_14GA = 0;
            value_18GA = 0;
            value_16GA_120x60 = value1 / config.UAD_16x16_DoorsPerSheet;
            value_16GA_120x48 = (value1 * 4) / config.UAD_16x16_RFsPerSheet;
            value_20GA = 0;
            value_14GA_Al = 0;
        }

        if (operator == 'UAD200 18x18') {
            value_14GA = 0;
            value_18GA = 0;
            value_16GA_120x60 = value1 / config.UAD_18x18_DoorsPerSheet;
            value_16GA_120x48 = (value1 * 4) / config.UAD_18x18_RFsPerSheet;
            value_20GA = 0;
            value_14GA_Al = 0;
        }

        if (operator == 'UAD200 20x20') {
            value_14GA = 0;
            value_18GA = 0;
            value_16GA_120x60 = value1 / config.UAD_20x20_DoorsPerSheet;
            value_16GA_120x48 = (value1 * 4) / config.UAD_20x20_RFsPerSheet;
            value_20GA = 0;
            value_14GA_Al = 0;
        }

        if (operator == 'UAD200 24x24') {
            value_14GA = 0;
            value_18GA = 0;
            value_16GA_120x60 = value1 / config.UAD_24x24_DoorsPerSheet;
            value_16GA_120x48 = (value1 * 4) / config.UAD_24x24_RFsPerSheet;
            value_20GA = 0;
            value_14GA_Al = 0;
        }

        if (operator == 'UAD200 24x36') {
            value_14GA = 0;
            value_18GA = 0;
            value_16GA_120x60 = value1 / config.UAD_24x36_DoorsPerSheet;
            value_16GA_120x48 = ((value1 * 2) / config.UAD_24x24_RFsPerSheet) + ((value1 * 2) / config.UAD_36x36_RFsPerSheet);
            value_20GA = 0;
            value_14GA_Al = 0;
        }

        if (operator == 'UAD200 36x36') {
            value_14GA = 0;
            value_18GA = 0;
            value_16GA_120x60 = value1 / config.UAD_36x36_DoorsPerSheet;
            value_16GA_120x48 = (value1 * 4) / config.UAD_36x36_RFsPerSheet;
            value_20GA = 0;
            value_14GA_Al = 0;
        }

        if (operator == 'UAD200 36x48') {
            value_14GA = 0;
            value_18GA = 0;
            value_16GA_120x60 = value1 / config.UAD_36x48_DoorsPerSheet;
            value_16GA_120x48 = ((value1 * 2) / config.UAD_36x36_RFsPerSheet) + ((value1 * 2) / config.UAD_48x48_RFsPerSheet);
            value_20GA = 0;
            value_14GA_Al = 0;
        }

        if (operator == 'UAD200 48x48') {
            value_14GA = 0;
            value_18GA = 0;
            value_16GA_120x60 = value1 / config.UAD_48x48_DoorsPerSheet;
            value_16GA_120x48 = (value1 * 4) / config.UAD_48x48_RFsPerSheet;
            value_20GA = 0;
            value_14GA_Al = 0;
        }

        /*
        For next time: For below, we can have a "rounderFunction" instead that will take care of all of this similar code and condense it
        */

        // Rounding data

        value_14GA = Math.round(value_14GA * 1000);
        value_14GA = value_14GA / 1000;

        let result = value_14GA

        value_18GA = Math.round(value_18GA * 1000);
        value_18GA = value_18GA / 1000;

        array_18GA.push(value_18GA);

        var sum_18GA = array_18GA.reduce(function (a, b) { return a + b; }, 0);

        sum_18GA = Math.round(sum_18GA * 1000);
        sum_18GA = sum_18GA / 1000;

        var lastsum_18GA = sum_18GA

        value_14GA = Math.round(value_14GA * 1000);
        value_14GA = value_14GA / 1000;

        array_14GA.push(value_14GA);

        var sum_14GA = array_14GA.reduce(function (a, b) { return a + b; }, 0);

        sum_14GA = Math.round(sum_14GA * 1000);
        sum_14GA = sum_14GA / 1000;

        var lastsum_14GA = sum_14GA

        value_16GA_120x60 = Math.round(value_16GA_120x60 * 1000);
        value_16GA_120x60 = value_16GA_120x60 / 1000;

        array_16GA_120x60.push(value_16GA_120x60);

        var sum_16GA_120x60 = array_16GA_120x60.reduce(function (a, b) { return a + b; }, 0);

        sum_16GA_120x60 = Math.round(sum_16GA_120x60 * 1000);
        sum_16GA_120x60 = sum_16GA_120x60 / 1000;

        var lastsum_16GA_120x60 = sum_16GA_120x60

        value_16GA_120x48 = Math.round(value_16GA_120x48 * 1000);
        value_16GA_120x48 = value_16GA_120x48 / 1000;

        array_16GA_120x48.push(value_16GA_120x48);

        var sum_16GA_120x48 = array_16GA_120x48.reduce(function (a, b) { return a + b; }, 0);

        sum_16GA_120x48 = Math.round(sum_16GA_120x48 * 1000);
        sum_16GA_120x48 = sum_16GA_120x48 / 1000;

        var lastsum_16GA_120x48 = sum_16GA_120x48

        value_14GA_Al = Math.round(value_14GA_Al * 1000);
        value_14GA_Al = value_14GA_Al / 1000;

        array_14GA_Al.push(value_14GA_Al);

        var sum_14GA_Al = array_14GA_Al.reduce(function (a, b) { return a + b; }, 0);

        sum_14GA_Al = Math.round(sum_14GA_Al * 1000);
        sum_14GA_Al = sum_14GA_Al / 1000;

        var lastsum_14GA_Al = sum_14GA_Al

        value_20GA = Math.round(value_20GA * 1000);
        value_20GA = value_20GA / 1000;

        array_20GA.push(value_20GA);

        var sum_20GA = array_20GA.reduce(function (a, b) { return a + b; }, 0);

        sum_20GA = Math.round(sum_20GA * 1000);
        sum_20GA = sum_20GA / 1000;

        var lastsum_20GA = sum_20GA

        /*
        For next time: Clean up res.json. 
        I think it would be great if we tossed in all of the values into the "result" object, instead of these strange A,B,C properties I've made
        */

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
                result,
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
