1 type responseItemType = {
2   id: string;
3   name: string;
4 }
5 
6 type WeatherDetailType = {
7   zipcode: string;
8   weather: string;
9   temp?: number;
10 }
11 
12 interface WeatherQueryInterface {
13   zipcode: string;
14 }