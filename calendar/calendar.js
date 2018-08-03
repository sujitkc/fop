function MyDate(d, m, y) {
  if(d > days_in_month(m, y)) {
    throw "Unreal date: {d = " + d + ", m = " + m + ", y = " + y + "}";
  }

  this.day   = d;
  this.month = m;
  this.year  = y;

  this.equals = function(d) {
    return (this.day == d.day) && (this.month == d.month) && (this.year == d.year);
  }
}

const January   =  1;
const February  =  2;
const March     =  3;
const April     =  4;
const May       =  5;
const June      =  6;
const July      =  7;
const August    =  8;
const September =  9;
const October   = 10;
const November  = 11;
const December  = 12;

const Sunday    = 1;
const Monday    = 2;
const Tuesday   = 3;
const Wednesday = 4;
const Thursday  = 5;
const Friday    = 6;
const Saturday  = 7;

/*
Given a weekday wd, gives the next weekday.
weekday -> weekday
Example:
  Monday   --> Tuesday
  Saturday --> Sunday
*/
function next_week_day(wd) {
  if(wd == Sunday)     return Monday;
  if(wd == Monday)    return Tuesday;
  if(wd == Tuesday)   return Wednesday;
  if(wd == Wednesday) return Thursday;
  if(wd == Thursday)  return Friday;
  if(wd == Friday)    return Saturday;
  if(wd == Saturday)  return Sunday;
}

/*
Given a weekday wd, gives the previous weekday.
weekday -> weekday
Example:
  Monday --> Sunday
  Sunday --> Saturday
*/
function prev_week_day(wd){
  if(wd == Sunday )   return Saturday;
  if(wd == Monday)    return Sunday;
  if(wd == Tuesday)   return Monday;
  if(wd == Wednesday) return Tuesday;
  if(wd == Thursday)  return Wednesday;
  if(wd == Friday)    return Thursday;
  if(wd == Saturday)  return Friday;
}

/*
Given a weekday wd, gives the string representation of the same.
weekday -> string
Example:
  Monday --> "Monday"
  Sunday --> "Sunday"
*/
function string_of_weekday(wd) {
  if(wd == Sunday)    return "Sunday";
  if(wd == Monday)    return "Monday";
  if(wd == Tuesday)   return "Tuesday";
  if(wd == Wednesday) return "Wednesday";
  if(wd == Thursday)  return "Thursday";
  if(wd == Friday)    return "Friday";
  if(wd == Saturday)  return "Saturday";
}

/*
  Given a year y, return true if y is a leap year; false otherwise.
  year -> boolean
  Example:
    2000 --> true
    2001 --> false
    2012 --> true
    1900 --> false
*/
function is_leap_year(y) {
  if((y % 100) == 0)
    return (y % 400) == 0;
  else
    return (y % 4) == 0;
}

/*
  Given a month m and a year y, return the number of days in m.
  month * year -> int
  Example:
    February, 2000 --> 29
    February, 2001 --> 28
    February, 2012 --> 29
    February, 1900 --> 28
*/
function days_in_month(m, y) {
  if(m == January)   return 31;
  if(m == February)
    if(is_leap_year(y)) return 29;
    else              return 28;
  if(m == March)     return 31;
  if(m == April)     return 30;
  if(m == May)       return 31;
  if(m == June)      return 30;
  if(m == July)      return 31;
  if(m == August)    return 31;
  if(m == September) return 30;
  if(m == October)   return 31;
  if(m == November)  return 30;
  if(m == December)  return 31;
}

function next_month(m) {
  if(m == January)   return February;
  if(m == February)  return March;
  if(m == March)     return April;
  if(m == April)     return May;
  if(m == May)       return June;
  if(m == June)      return July;
  if(m == July)      return August;
  if(m == August)    return September;
  if(m == September) return October;
  if(m == October)   return November;
  if(m == November)  return December;
  if(m == December)  return January;
}

/*
Given a month m, gives the string representation of the same.
month -> string
Example:
  January  --> "January"
  February --> "February"
*/
function string_of_month(m) {
  if(m == January)   return "January";
  if(m == February)  return "February";
  if(m == March)     return "March";
  if(m == April)     return "April";
  if(m == May)       return  "May";
  if(m == June)      return "June";
  if(m == July)      return "July";
  if(m == August)    return "August";
  if(m == September) return "September";
  if(m == October)   return "October";
  if(m == November)  return "November";
  if(m == December)  return "December";
}

function month_of_string(m) {
  if(m == "January")   return January;
  if(m == "February")  return February;
  if(m == "March")     return March;
  if(m == "April")     return April;
  if(m == "May")       return May;
  if(m == "June")      return June;
  if(m == "July")      return July;
  if(m == "August")    return August;
  if(m == "September") return September;
  if(m == "October")   return October;
  if(m == "November")  return November;
  if(m == "December")  return December;

  throw m + " can't be converted to a month.";
}

/*
Given a date (d, m, y), gives the string representation of the same.
month -> string
Example:
  (18, September, 2014)  --> "September 18, 2014"
*/
function string_of_date(dt) {
  return string_of_month(dt.month) + " " + dt.day + ", " + dt.year;
}

/*
  Given a date, return its next date.
  date -> date
  Example:
    (1, January, 2014)   --> (2, January, 2014)
    (31, December, 2013) --> (1, January, 2014)
    (28, February, 2013 --> (1, March, 2013)
    (28, February, 2012) --> (29, February, 2012)
*/
function next_date(dt) {
  if(dt.day == days_in_month(dt.month, dt.year)) {
    if(dt.month == December)
      return new MyDate(1, January, dt.year + 1);
    else
      return new MyDate(1, next_month(dt.month), dt.year);
  }
  else {
    return new MyDate(dt.day + 1, dt.month, dt.year);
  }
}

/*
  Given two dates dd1 and dd2, return true if dd1 is strictly later than dd2
  date * date -> boolean
  Example:
    (1, January, 2014) (1, January, 2014)   --> false
    (1, January, 2014) (2, January, 2014)   --> false
    (1, January, 2014) (31, December, 2013) --> false
*/
function is_later(dt1, dt2) {
  if(dt1.year == dt2.year) {
    if(dt1.month == dt2.month) {
      return dt1.day > dt2.day;
    }
    else if(dt1.month > dt2.month) {
      return true; // Bad design!
    }
    else {
      return false;
    }
  }
  else if(dt1.year > dt2.year) {
    return true;
  }
  else {
    return false;
  }
}

/*
  Given two dates d1 and d2, count how many days elapse between the two.
  Whether d1 occurs later than d2 shouldn't matter.
  date * date -> int
  Example:
    (1, January, 2014) (1, January, 2014)   -->  0
    (1, January, 2014) (2, January, 2014)   -->  1
    (1, January, 2014) (31, December, 2013) --> -1
*/
function days_in_between(dt1, dt2) {
  if(is_later(dt1, dt2)) {
    return -1 * days_in_between(dt2, dt1);
  }
  else {
    var dt = dt1;
    var count = 0;
    while(is_later(dt2, dt)) {
      dt = next_date(dt);
      count += 1;
    }
    return count;
  }
}

/*
  Given a weekday wd and a number n, return the weekday of the date
  n days after a wd.
  weekday * int -> weekday
*/
function count_week_days(wd, n) {
  wd1 = wd;
  while(n != 0) {
    if(n > 0) {
      wd1 = next_week_day(wd1);
      n -= 1;
    }
    else {
      wd1 = prev_week_day(wd1);
      n += 1;
    }
  }
  return wd1;
}

/*
  Given a date d, return the weekday of the date.
  date -> weekday
*/
function get_week_day(d) {
  ref_date = new MyDate(25, July, 2018);
  ref_week_day = Wednesday;
  delta = days_in_between(ref_date, d);
  delta_week_day = delta % 7;
  return count_week_days(ref_week_day, delta_week_day);
}

/*
  Given two dates d1 and d2, return the list of all dates from d1 to d2, d1 and d2 included.
  date * date -> date list
  Example:
    (1, January, 2014) (5, January, 2014) -->
      [(1, January, 2014), (2, January, 2014), (3, January, 2014),
       (4, January, 2014), (5, January, 2014)]
*/
function date_range(d1, d2) {
  if(is_later(d1, d2)) {
    return date_range(d2, d1);
  }
  r = [];
  d = d1;
  while(!d.equals(d2)) {
    r.push(d);
    d = next_date(d);
  }
  return r;
}

function stringlist_of_datelist(dlist) {
  return dlist.map(string_of_date);
}

/* test cases */
function t1() {
  var dib = days_in_between(new MyDate(1, January, 2014), new MyDate(2, January, 2014));
  if(dib == 1) {
    console.log("t1 passed");
  }
  else {
    console.log("t1 failed, dib = " + dib);
  }
}

function t2() {
  dlist = date_range(new MyDate(4, August, 2014), new MyDate(13, December, 2014));
  console.log(stringlist_of_datelist(dlist));
}

function t3() {
  console.log(string_of_date(new MyDate(4, August, 2014)));
}

// t1();
// t2();
// t3();
