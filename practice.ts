const calculate = (a : number , b : number) => {a + b};
let balance = 500;
let deposit = 500;
let total = calculate(balance, deposit);
let age: number = 30;
let likesPizza: boolean = true;


let stringType: string = "bar";
let booleanType: boolean = true;
let integerType: number = 1;
let floatType: number = 1.5;
let nullType: null = null;//Declares something empty
let undefinedType: undefined = undefined;//Declaring unintentional absence of value


type WeatherDetailTyp1e = {
weather: string;
zipcode: string;
temp?: number;
};

let weatherDetail: WeatherDetailTyp1e = {
weather: "sunny",
zipcode: "00000",
temp: 30
};

interface WeatherProps{
weather: string;
zipcode: string;
temp?: number;
}

let nyWeather: WeatherDetailType = {
weather: "Clear",
zipcode: "10001",
temp: 45
};

const getWeatherDetail = (props: WeatherProps) => {
    
};