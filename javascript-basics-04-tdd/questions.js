
const stringSize = (text) => {
   return text.length;

}
const replaceCharacterE = (text) => {
   return text.replace("e" , " ");
}
const concatString = (text1, text2) => {
        return text1+text2;
}
const showChar5 = (text) => {
    return text.charAt(4);
}
const showChar9 = (text) => {
    return text.slice(0,9);
}
const toCapitals = (text) => {
    return text.toUpperCase();
}
const toLowerCase = (text) => {
 return text.toLowerCase();
}
const removeSpaces = (text) => {
    return text.trim();
}
const IsString = (text) => {
    return text.isString=true;
}

const getExtension = (text) => {
    return text.split('.').pop();
}
const countSpaces = (text) => {
        return text.split(' ').length-1;
}
const InverseString = (text) => {
       let i=text.split("");
       let x=i.reverse();
       return x.join('');
       
}

const power = (x, y) => {
    return Math.pow(x, y);
}
const absoluteValue = (num) => {
        return Math.abs(num);
}
const absoluteValueArray = (array) => {
        return array.map(Math.abs);
}
const circleSurface = (radius) => {
    return Math.round(Math.PI * Math.pow(radius,2));
}
const hypothenuse = (ab, ac) => {
    return Math.hypot(ab , ac);
}
const BMI = (weight, height) => {
    return parseFloat((weight / Math.pow(height, 2)).toFixed(2));
}

const createLanguagesArray = () => {
        return ["Html", "CSS", "Java" , "PHP"];
}

const createNumbersArray = () => {
        return [0,1,2,3,4,5];
}

const replaceElement = (languages) => {
    languages[2]= "Javascript";
    return languages;
}

const addElement = (languages) => {
    languages.push("Ruby", "Python");
    return languages;
}

const addNumberElement = (numbers) => {
    numbers.unshift(-2 ,-1);
    return numbers;
       
}

const removeFirst = (languages) => {
    languages.shift();
    return languages;
}

const removeLast = (languages) => {
    languages.pop();
    return languages;
}

const convertStrToArr = (social_arr) => {
  let i =  social_arr.split(',');
    return i;
}

const convertArrToStr = (languages) => {
       let i=  languages.join();
       return i;
}

const sortArr = (social_arr) => {
        return social_arr.sort();
}

const invertArr = (social_arr) => {
    return social_arr.reverse();
}