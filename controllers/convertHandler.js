/*
*
*
*       Complete the handler logic below
*       
*       
*/

const units = {
    'gal': {
        fullname: 'gallon',
        type: 'imperial',
        conversion: {
            fn: x => x * 3.78541,
            unit: 'l'
        }
    },
    'lbs': {
        fullname: 'pound',
        type: 'imperial',
        conversion: {
            fn: x => x * 0.453592,
            unit: 'kg'
        }
    },
    'mi': {
        fullname: 'mile',
        type: 'imperial',
        conversion: {
            fn: x => x * 1.60934,
            unit: 'km'
        }
    },
    'km': {
        fullname: 'kilometer',
        type: 'metric',
        conversion: {
            fn: x => x / 1.60934,
            unit: 'mi'
        }
    },
    'kg': {
        fullname: 'kilogram',
        type: 'metric',
        conversion: {
            fn: x => x / 0.453592,
            unit: 'lbs'
        }
    },
    'l': {
        fullname: 'liter',
        type: 'metric',
        conversion: {
            fn: x => x / 3.78541,
            unit: 'gal'
        }
    }
};

function ConvertHandler() {
  
  this.getNum = function(input) {
    let num = input.match(/^[0-9/\.]+/)[0];
    
    if (num == '') return 1;
    
    try {
      return eval(num);
    }
    catch(err) {
      return null;
    };
  };
  
  this.getUnit = function(input) {
    let unit = input.match(/[a-z]+$/i)[0];
    
    if (!unit || !units[unit.toLowerCase()]) return null;
    
    return unit;
  };
  
  this.getReturnUnit = function(initUnit) {
    return units[initUnit.toLowerCase()].conversion.unit
  };

  this.spellOutUnit = function(unit) {
    return units[unit.toLowerCase()].fullname
  };
  
  this.convert = function(initNum, initUnit) {
    let { conversion } = units[initUnit.toLowerCase()];
    
    return conversion.fn(initNum);
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    return `${initNum} ${initUnit}` + ' converts to ' + `${returnNum} ${returnUnit}`
  };
  
}

module.exports = ConvertHandler;
