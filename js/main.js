'use strict'

// console.clear();
{
  const year = 2020;
  const month = 4; //5月

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
    console.log(dates);
  
  }
  getCalendarBody();
  
}