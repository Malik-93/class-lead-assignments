let statement = 'true';

// PREDICT AS TRUE
console.log(Boolean('true')); // THIS WILL CONVERT THE STRING INTO BOOLEAN AND THEN IT WILL VERIFY IT EITHER ITS A BOOLEAN (TRUE, FALSE) OR NOT.
console.log(statement === 'true'); // THIS WILL COMPARE WITH TYPE CHECKING
console.log(typeof statement == 'string'); // THIS WILL VERIFY THE TYPE OF 'statement' VARIABLE
console.log(statement ? true : false); // THIS WILL CHECK IF THE VALUE OF 'statement' is not null, undefined, 0 and ''.
console.log(Boolean(statement) ?? false); // THIS WILL CHECK IF THE VALUE OF 'statement' is not null, undefined, 0, '' and will print the value of the variable in console in the formate of data type as string.

// PREDICT AS FALSE
console.log(typeof statement !== 'string'); // THIS WILL VERIFY THE VARIABLE 'statement' with its data type.
console.log(!Boolean(statement)); // THIS WILL CONVERT IT INTO BOOLEAN AND THEN VERIFY IT EITHER ITS A BOOLEAN (TRUE, FALSE) OR NOT. THE '!' SIGN WILL COMPARE IT IN THE OPPOSITE OF BOOLEAN LIKE ITS NOT A BOOLEAN VALUE, THATS WHY WE ARE GETTING IT AS FALSE IN CONSOLE
console.log(!statement.length); // AS STRING HAS MORE THAN ONE LENGTH AND WE ARE ASSUMING THE LENGTH OF STRING IS 0
console.log(statement.length > 5); // AS THE STRING ONLY HAS LENGTH AS 4(t,r,u,e) BUT WE ARE ASSUMING THE LENGTH IS GREATER THAN F5
console.log(statement === undefined || statement === null); // CHECKING THE VALUE OF 'statement' AS 'undefined' OR 'null'