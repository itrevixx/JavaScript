const calculateHotelCost = (nNights) => nNights * 140;

const calculateAirplaneCost = (target) => {
    if (target == "oviedo") {
        return 15;
    } else if (target == "tokyo") {
        return 700;
    } else if (target == "madrid") {
        return 90;
    } else if (target == "barcelona") {
        return 90;
    }
}

const calculateRentingCarCost = (nNights) => {
    let cost = nNights * 40;
    if (nNights >= 7) {
        cost -= 50;
    } else if (nNights >= 3) {
        cost -= 20;
    }
    return cost;
}
const calculateCost = () => {
    const numNights = document.querySelector("#numNights").value;
    const target = document.querySelector("#target").value;

    const hotelCost = calculateHotelCost(numNights);
    const airplaneCost = calculateAirplaneCost(target);
    const rentingCarCost = calculateRentingCarCost(numNights);

    document.querySelector("#hotelCost").value = hotelCost;
    document.querySelector("#travelCost").value = airplaneCost;
    document.querySelector("#rentingCarCost").value = rentingCarCost;

    document.querySelector("#totalCost").value = hotelCost + airplaneCost + rentingCarCost;
}

document.querySelector('#calculateCost').addEventListener('click', calculateCost);