
//  Assignment-5

const ExtraMemory8GB = document.getElementById('extra-Memory');
const ExtraMemory16GB = document.getElementById('extra-Memory');
const Storage256GB = document.getElementById('extra-Storage');
const Storage512GB = document.getElementById('extra-Storage');
const Storage1TB = document.getElementById('extra-Storage');
const DeliveryF25 = document.getElementById('Delivery-charge');
const DeliveryF21 = document.getElementById('Delivery-charge');
const TotalPrice = document.getElementById('Total-Price');



function update() {
    TotalPrice.innerText = '1299';
    const ExtraMemory8 = parseInt(ExtraMemory8GB.innerText);
    const ExtraMemory16 = parseInt(ExtraMemory16GB.innerText);
    const Storage256 = parseInt(Storage256GB.innerText);
    const Storage512 = parseInt(Storage512GB.innerText);
    const Storage1 = parseInt(Storage1TB.innerText);
    const deliveryF25 = parseInt(DeliveryF25.innerText);
    const deliveryF21 = parseInt(DeliveryF25.innerText);
    const Total = parseInt(TotalPrice.innerText);
    const totalAmount = ExtraMemory16 + Storage1 + deliveryF25 + Total;
    TotalPrice.innerText = totalAmount;
}
// MemoryPrice
document.getElementById('8GB-Memory').addEventListener('click', function () {
    ExtraMemory8GB.innerText = '0';
    update();
})

document.getElementById('16GB-Memory').addEventListener('click', function () {
    ExtraMemory16GB.innerText = '180';
    update();
})
// StoragePrice
document.getElementById('storage-256').addEventListener('click', function () {
    Storage256GB.innerText = '0';
    update();
})

document.getElementById('storage-512').addEventListener('click', function () {
    Storage512GB.innerText = '100';
    update();

})
document.getElementById('storage-1TB').addEventListener('click', function () {
    Storage1TB.innerText = '180';
    update();

})
// Delivery-charge
document.getElementById('Delivery-F25').addEventListener('click', function () {
    DeliveryF25.innerText = '0';
    update();

})
document.getElementById('Delivery-F21').addEventListener('click', function () {
    DeliveryF21.innerText = '20';

    update();
})
// const Minus20 = parseInt(Minus20.innerText);
const ApplyBtn = document.getElementById('user-Apply');
const Minus20 = document.getElementById('minus');

document.getElementById('apply-btn').addEventListener('click', function () {

    ApplyBtn.value = '';
    const Apply = Minus20.innerText;
    const totalApply = parseInt(Apply);
    const afjol = parseInt(20 / 100);
    const Total = totalApply + (totalAmount - afjol)
    const Button = ApplyBtn.value;
    if (Button == 'stevekaku') {

        ApplyBtn.value = totalApply;
    }

})



