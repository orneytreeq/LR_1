let min_pos = 0
let pos = false
let not_empty = false

while (true) {
  const nn = prompt('Введите число: ')

  if (isNaN(parseFloat(nn)) || !isFinite(nn)) break

  n = Number(nn)

  if (not_empty == false) {
    not_empty = true
    document.write('Последовательность чисел:<br>')
  }

  document.write(n + ' ')

  if (n > 0) {
    if (pos == false) {
      pos = true
      min_pos = n
    }

    if (n < min_pos) {
      min_pos = n
    }
  }
}

if (not_empty == false) {
  document.write('Числа не введены')
} else if (pos == false) {
  document.write('<br>')
  document.write('Положительных чисел нет')
} else {
  document.write('<br>')
  document.write('Минимальное из положительных: ' + min_pos)
}