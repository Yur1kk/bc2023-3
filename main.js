const fs = require('fs');
fs.readFile('data.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Помилка читання файлу:', err);
    return;
  }
  try {
    const jsonData = JSON.parse(data);
    const result = {};
    for (const item of jsonData) {
      if (item.txt === 'Доходи, усього' || item.txt === 'Витрати, усього') {
        result[item.txt] = item.value;
      }
    }
    fs.writeFile('output.txt', `Доходи, усього:${result['Доходи, усього']}\nВитрати, усього:${result['Витрати, усього']}`, (err) => {
        if (err) {
          console.error('Помилка запису у файл:', err);
          return;
        }
        console.log('Результати записано у файл output.txt');
      });      
  } catch (error) {
    console.error('Помилка обробки JSON:', error);
  }
});
