let names = ['Anna','Anastasia','Ivan','Sergey']
console.log (names.indexOf('Anna'))
console.log ('Hello, ' + names[0], )
for  (let i = 0; i < names.length; i++) {
    names[i] = 'Hello, ' + names[i]
}
console.log(names)
