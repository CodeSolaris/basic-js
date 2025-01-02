const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */

function getDNSStats(domains) {
  const dnsStats = {};

  domains.forEach(domain => {
    // Разделяем домен на части и инвертируем порядок
    const levels = domain.split('.').reverse();

    let dns = '';
    levels.forEach(level => {
      // Создаём текущий уровень домена
      dns += `.${level}`;
      // Если уровень уже есть в объекте, увеличиваем его счётчик
      if (dnsStats[dns]) {
        dnsStats[dns]++;
      } else {
        // Если уровня нет, добавляем его с начальным значением 1
        dnsStats[dns] = 1;
      }
    });
  });

  return dnsStats;
}




module.exports = {
  getDNSStats
};

