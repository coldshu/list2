const API = 'http://sample.bmaster.kro.kr/contacts';

function getPageno() {
  const params = new URLSearchParams(location.search);
  return params.get('pageno')===null? 1 : params.get('pageno');
}

async function fetch(pageno, pagesize=10) {
  const url=`${API}?pageno=${pageno}&pagesize=${pagesize}`;
  try {
  return await $.ajax(url);
  } catch(err) {
    console.log(err);
    return null;
  } 
}

function printContact(contacts) {
  const $tbody = $('#tbody');
  for(const c of contacts) {
    const html = `
      <tr>
        <td>${c.no}</td>
        <td>${c.name}</td>
        <td>${c.address}</td>
        <td>${c.tel}</td>
      </tr>
    `;
    $tbody.append(html);
  };
}

function getPagination(pageno, pagesize, totalcount, blockSize=5) {
  // pageno    이전으로   start   end   다음으로
  // 1            0         1      5       6
  // 2            0         1      5       6
  // 3            0         1      5       6
  // 4            0         1      5       6 
  // 5            0         1      5       6  
  // 6            5         6      10      11
  // 7            5         6      10      11
  // 8            5         6      10      11
  // 9            5         6      10      11
  // 10           5         6      10      11
  // 11           10        11     12      0
  // 12           10        11     12      0

  for(let i = 1; i <= 12; i++) {
    const prev = i / 5;
  }

}

function printPagination() { 

}