const dog = (dogName) => {
  const sound = 'woof'
  const name = dogName
  return {
    talk: () => console.log(sound),
    greeting: () => console.log(`The dog called ${name} goes ${sound}`)
  }
}

const sniffles = dog('Bob')

sniffles.talk()
sniffles.greeting()
