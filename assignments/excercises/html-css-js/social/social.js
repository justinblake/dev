var mountainBiker = {};

mountainBiker = {
    name: 'Justin Blake',
    age: 32,
    futureAge: function(guess) {
        this.age = this.age + guess;
    },
    friends: [
        {
            name: 'Johnny',
            age: 28,
            spouse: [
                {
                    name: 'Janae',
                    age: 28,
                    spouse: 'Johnny',
                    pets: [
                        {
                            name: 'Ziva',
                            type: 'Terrier'
                        },
                        {
                            name: 'Bear',
                            type: 'Terrier'
                        }
                    ]

                }
            ],
            pets: [
                {
                    name: 'Ziva',
                    type: 'Terrier'
                },
                {
                    name: 'Bear',
                    type: 'Terrier'
                }
            ]
        },
        {
            name: 'Duke',
            age: 31,
            spouse: 'N/A',
            pets: 'None'
        },
        {
            name: 'Jared',
            age: 37,
            spouse: [
                {
                    name: 'Christine',
                    age: 37,
                    spouse: 'Jared',
                    pets: 'None'
                }
            ],
            pets: 'None'
        }
    ]

};

mountainBiker.newFriend = 'Timmy';
mountainBiker.homeAddress = '1234 Somewhere';


mountainBiker.friends[2].spouse.push({test:'test1'});
mountainBiker.friends.splice(2,0,{newer:'friend'});

// var newMount = mountainBiker.append("height","6'1");
// var secondMount = mountainBiker.friends.splice(2,0,{name:'Tim'});
// console.log(newMount);
// console.log(secondMount);


