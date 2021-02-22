function training(str) {
  let counter = 0
  for (let i = 0; i < str.length; i++) if (str.substr(i, 6) == "potato") counter++
  console.log(counter)
}
training("potato")
training("potatopotatokiuhkjhpotatoljkhpotato")
training("potatoapplepotato")
