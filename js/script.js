function Car (img, brand, model, color, year, price) {
    this.img = img
    this.brand = brand
    this.model = model
    this.color = color
    this.year = year
    this.price = price
}

let car1 = new Car("https://www.chevrolet.com/content/dam/chevrolet/na/us/english/index/vehicles/2024/performance/camaro/design/v2/2024-camaro-collector-ed-3v2.png?imwidth=960","Chevrolet", "Camaro SS", "Red", 2023, 45000);
let car2 = new Car("https://build.ford.com/dig/Ford/Mustang/2024/HD-TILE/Image%5B%7CFord%7CMustang%7C2024%7C1%7C1.%7C300A.P8C..PHY..88D.89W.~2WD00_BCMAB.AC--C.13R.COU.BSHEH.BYBBR.CJPAA.LTS.51W.64T.TA6.RWD.45D.99F.FS--A.HLLAD.58V.IDBAD.SY4.44X.GT.YZTAB.CLO.%5D/EXT/1/vehicle.png","Ford Mustang", "GT", "Blue", 2022, 42500);
let car3 = new Car("https://content.homenetiol.com/2000292/2190321/0x0/stock_images/5/2024TOC04_640/2024TOC040078_640_01.jpg", "Toyota", "Corolla LE", "Silver", 2023, 22000);
let car4 = new Car("https://www.motortrend.com/uploads/sites/10/2022/05/2022-bmw-3-series-330i-sport-line-sedan-angular-front.png", "BMW", "330i", "Black", 2022, 40000);
let car5 = new Car("https://file.kelleybluebookimages.com/kbb/base/evox/CP/15442/2021-Honda-Civic-front_15442_032_2400x1800_WX.png", "Honda", "Civic EX", "White", 2023, 24500);
let car6 = new Car("https://hips.hearstapps.com/hmg-prod/images/tesla-model-3-white-1565731697.jpg", "Tesla", "Model 3 Standard Range Plus", "Silver", 2023, 40000);
let car7 = new Car("https://www.motortrend.com/uploads/sites/5/2020/06/2020-volkswagen-golf.png?fit=around%7C875:492.1875", "Golf", "TSI", "Red", 2022, 28000);
let car8 = new Car("https://s7d1.scene7.com/is/image/scom/RDE_default_pass_scaled?$900p$", "Subaru", "Outback Limited", "Green", 2023, 32000);
let car9 = new Car("https://www.motortrend.com/uploads/sites/10/2020/12/2021-mercedes-benz-c-class-300-sedan-angular-front.png", "Mercedes-Benz", "C300", "Gray", 2022, 45500);
let car10 = new Car("https://file.kelleybluebookimages.com/kbb/base/evox/CP/11040/2016-Nissan-Altima-front_11040_032_2400x1800_QAB.png", "Nissan", "Altima SV", "Blue", 2023, 28500);


var myCars = [car1, car2, car3, car4, car5, car6, car7, car8, car9, car10];

const con = document.createElement('div')
document.body.appendChild(con)

for (let x = 0; x < myCars.length; x++) {
    const div = document.createElement('div')
    const divName = document.createElement('div')
    const img = document.createElement('img')
    const text1 = document.createElement('p')
    const text2 = document.createElement('p')
    const text3 = document.createElement('p')
    const text4 = document.createElement('p')
    const text5 = document.createElement('p')

    divName.appendChild(text1)
    divName.appendChild(text2)

    div.appendChild(img)
    div.appendChild(divName)
    div.appendChild(text3)
    div.appendChild(text4)
    div.appendChild(text5)
    con.appendChild(div)

    img.setAttribute('src', myCars[x].img);
    img.setAttribute('alt', myCars[x].brand);
    text1.textContent = "Brand: " + myCars[x].brand;
    text2.textContent = "Model: " + myCars[x].model;
    text3.textContent = "Color: " + myCars[x].color;
    text4.textContent = "Year: " + myCars[x].year;
    text5.textContent = "Price: $" + myCars[x].price;
}