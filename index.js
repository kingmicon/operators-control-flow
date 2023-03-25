for (let i=1; i<20; i += 7) {
    console.log(i)
}

//arithmetic operators

let num1 = 400;
let num2 = 30;
let differencetotal = num1-num2;
let sumtotal = num1+num2;

console.log (sumtotal);
console.log(differencetotal);

//Comparison Operator

let myexperience = 1;
(myexperience >=2)? console.log('Eligible for the job') : console.log('Not Eligible for the job')

let volume = 40;
(volume >=50)? console.log('too loud') : console.log('ok')

//logical operators

let career = 'frontend engineer';
let experience = 2;

(career === 'frontend engineer' && myexperience >= 2) ? console.log('Eligible for the job') : console.log('not Eligible for the job')

let jambscore = 20;
let WAEC = '9 credit';
(jambscore >= 200 || WAEC === '9 credit')? console.log ('pass') : console.log('fail')


//Question3

let studentgroup = 'Art';
//let Sciencesubjects = 'Physics, Chemistry, Biology, Techinal Drawing';
//let Socialsciencesubject = 'Accounting, Commerce, Marketing, Geography';
//let Artsubject = 'Government, Economics, Literature, History';
//let Generalsubject = 'English, Mathematics';

if (studentgroup === 'Science'){console.log('English, Mathematics, Physics, Chemistry, Biology, Techinal Drawing')
} else if (studentgroup === 'Social Science'){console.log('English, Mathematics, Accounting, Commerce, Marketing, Geography')
}else if (studentgroup === 'Arts'){console.log ('English, Mathematics, Government, Economics, Literature, History')
} else {console.log ('English, Mathematics')}

