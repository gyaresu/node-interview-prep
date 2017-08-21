let countDownFrom = start => {
  if (start === 0) return
  console.log(start)
  countDownFrom(start - 1)
}

countDownFrom(10)
