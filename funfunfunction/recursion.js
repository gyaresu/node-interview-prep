let countDownFrom = start => {
  if (start > 0) {
    console.log(start)
    countDownFrom(start - 1)
  }
  return
}

countDownFrom(10)
