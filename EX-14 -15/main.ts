let guestList = ['Haider' , 'Saleem', 'Rabia']

//guestList.forEach(oneGuest => console.log(`Salam! ${oneGuest}, Would you Like to Dinner With Me ?`))

//Ex- 15 Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting

 let dontCome = guestList[2]

 console.log(dontCome,'Is Not Coming At Dinner')

 guestList.splice(2,2,'Sadia')

 guestList.forEach(oneGuest => console.log(`Salam! ${oneGuest}, Would you Like to Dinner With Me ?`))
 