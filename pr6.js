/* ### 6. Реализовать функцию с тремя параметрами: 
function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов, 
operation – строка с названием операции. В зависимости от переданного значения операции выполнить 
одну из арифметических операций (использовать функции из пункта 3) и вернуть полученное значение (использовать switch). */

'use strict'

function sum(a,b) {
    return a + b 
}

function subtraction (a,b) {
    return a - b 
}

function multiplication (a,b) {
    return a * b 
}

function division (a,b) {
    return a / b 
}

function mathOperation(arg1, arg2, operation) {
     switch (operation) {
        case  multiplication:
            return multiplication(arg1,arg2)
            break;
        case  sum:
            return sum(arg1,arg2)
            break;
        case  subtraction:
            return subtraction(arg1,arg2)
            break;    
        case  division:
            return division(arg1,arg2)
            break;    
    }
}

console.log(mathOperation(2,6,division));