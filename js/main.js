'use strict'

// console.clear();
{
  let year = 2020;
  let month = 4; //5月

  function getCalendarHead() {
    const dates = [];
    const d = new Date(year,month,0).getDate();
    //5月0日（4月の最終日）の日にち
    const n = new Date(year,month,1).getDay();
    //5月1日の曜日を0~6の数字で表示

    for(let i=0;i < n;i++) {
      // dates.unshift(d - i);
      //dates配列の戦闘から入れていく 28,29,30 と入る
      dates.unshift({
        date:d - i,
        isToday:false,
        isDisabled:true,
      })
    }
    return dates;
  }

  function getCalendarBody() {
    const dates = [];
    //date:日付 ,day:曜日

    // getFullYear()	日付の「年」を取得する（4桁）
    // getMonth()	日付の「月」を取得する（0 - 11）
    // getDate()	日付の「日」を取得する（1 - 31）
    // getDay()	日付の「曜日」を取得する（0 - 6）
    // getHours()	日付の「時」を取得する（0 - 23）
    // getMinutes()	日付の「分」を取得する（0 - 59）
    // getSeconds()	日付の「秒」を取得する（0 - 59）
    const lastDate = new Date(year,month+1,0).getDate();
    //2020年6月0日（5月の最終日）の日にち（31日）を取得
    for (let i=1;i <= lastDate; i++) {
      // dates.push(i);
      //datesの最後に追加していく
      dates.push({
        date:i,
        isToday:false,
        isDisabled:false,
      });
      //オブジェクト配列にする
    }
    return dates;
  }

  function getCalendarTail() {
    const dates = [];
    const lastDay = new Date(year,month + 1,0).getDay();
    for (let i=1;i<7 - lastDay;i++) {
      // dates.push(i);
      dates.push({
        date:i,
        isToday:false,
        isDisabled:true,
      })
    }
    return dates;
  }
  
  function createCalendar() {
    const tbody = document.querySelector('tbody');
    while(tbody.firstChild) {
      tbody.removeChild(tbody.firstChild);
    }

    const title = `${year}/${String(month + 1).padStart(2,'0')}`;
    //padstart(2,'0') 2桁で表示しそれに満たなかったら0を表示 文字列限定
    document.getElementById('title').textContent = title;
    //tbodyに最初の要素がある限り、その要素を削除してね

    // const dates = [
    //   getCalendarHead(),
    //   getCalendarBody(),
    //   getCalendarTail(),
    // ];
    //配列（オブジェクト）をまとめられていない。
    const dates = [
      ...getCalendarHead(),
      ...getCalendarBody(),
      ...getCalendarTail(),
    ];
    //スプレット構文

    const weeks = [];
    const weeksCount = dates.length / 7;

    for(let i=0;i < weeksCount;i++) {
      weeks.push(dates.splice(0,7));
    }

    weeks.forEach(week => {
      const tr = document.createElement('tr');
      week.forEach(date => {
        const td = document.createElement('td');

        td.textContent = date.date;
        if (date.isToday) {
          td.classList.add('today');
        }
        if (date.isDisabled) {
          td.classList.add('disabled');
        }
        tr.appendChild(td);
      });
      tbody.appendChild(tr);
    });

    // console.log(dates);
    // console.log(weeks);
  }

  document.getElementById('prev').addEventListener('click',() => {
    month --;
    if (month < 0) {
      year --;
      month = 11;
    }
    createCalendar();
  })

  document.getElementById('next').addEventListener('click',() => {
    month ++;
    if (month > 11) {
      year ++;
      month = 0;
    }
    createCalendar();
  })

  createCalendar();

  // getCalendarHead();
  // getCalendarBody();
  // getCalendarTail();
  
}