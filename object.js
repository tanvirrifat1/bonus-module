const celebraty ={
    name : 'sakib khan',
    id : 121,
    address : true,
    friends : ['apu', 'raaz', 'salman', 'aamir'],
    movies : [{name : 'no. 1', year : 2015, }, {name : 'king khan', year : 2018}],
    act: function(){
        console.log('acting like sakib khan');
    },
    car : {
        brand : 'tesla',
        price : 5000000,
        made : 2025,
        manufacturer : {
            name : 'tesla',
            ceo : 'Elon Mask',
            country : 'USA',
        }
    }
}
console.log(celebraty.act);
celebraty.act()