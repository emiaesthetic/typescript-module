"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.carResult = void 0;
const car = {
    brand: 'Lexus',
    model: 'GX550',
    generation: 'III',
    country: 'Japan',
    price: 60_000,
    color: 'white',
    rating: [
        ['performance', '9.0'],
        ['comfort', '8.8'],
        ['interior', '8.9'],
        ['technology', '9.3'],
        ['storage', '9.0'],
        ['fuelEconomy', '6.4'],
        ['value', '8.5'],
        ['wildcard', '8.7'],
    ],
};
const totalVerdict = (car) => {
    const sumRating = car.rating.reduce((acc, item) => parseFloat(item[1]) + acc, 0);
    return sumRating / car.rating.length;
};
exports.carResult = totalVerdict(car);
