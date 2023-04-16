## To start the application

## Run npm install

## npm start

## open localhost:3000

## API Endpoints used

## GET requests returns historic data regarding active cases, deaths and recoveries (COVID 19)

## 1. URL: https://disease.sh/v3/covid-19/historical/all?lastdays=all

cases:{
    ['1/2/2022',89] 
    ...
}
deaths:{
    ['1/2/2022',89]
    ...
}
recovered:{
    ['1/2/2022',89]
    ...
}

## GET request return object containing country specific information regarding covid 19

## 2. URL: https://disease.sh/v3/covid-19/countries

[
    {
        country:String,
        active:Number,
        deaths:Number,
        recovered:Number
        ...
    }
    ...
]

## GET request return object containing world wide information regarding covid 19

## 3. URL: https://disease.sh/v3/covid-19/all

    {
        total:Number,
        active:Number,
        deaths:Number,
        recovered:Number
        ...
    }
