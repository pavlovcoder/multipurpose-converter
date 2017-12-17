Mathematical formulas for converter-app:

1) From pounds to others:
    1) kg=lb/2.2046;
    2) t=lb/2204.6;
    3) gr=lb/0.002046;
    4) oz=lb*16;
    5) st=lb*0.071429;
    6) sl=lb*0.03108095;

2) From kilograms to others:
    1) lb=kg*2.2046;
    2) t=kg/1000;
    3) gr=kg*1000;
    4) oz=kg*35.274;
    5) st=kg*0.1574;
    6) sl=kg/14.59390;
    
3) From tonnes to others:
    1) lb=t*0.0005;
    2) kg=t/1000;
    3) gr=t/1000000;
    4) oz=t/32000;
    5) st=t/0.00625;
    6) sl=t*68.521765561961;
    
4) From grams to others:
    1) lb=gr/453.59237;
    2) kg=gr/1000;
    3) t=gr*1000000;
    4) oz=28.34952313*gr;
    5) st=gr/6350.29318;
    6) sl=gr/14593.90;
    
5) From ounces to others:
    1) lb=oz/16;
    2) kg=oz/35.274;
    3) t=oz*32000;
    4) gr=oz/0.035274;
    5) st=oz*0.0044643;
    6) sl=oz/514.7848;
    
6) From stones to others:
    1) lb=st*14.00;
    2) kg=st/0.15747;
    3) t=st/157.47;
    4) gr=st/0.00015747;
    5) oz=st*224;
    6) sl=st*0.43513330052968;
    
7) From slugs to others:
    1) lb=sl*32.174048556;
    2) kg=sl*14.5939029;
    3) t=sl*0.0145939;
    4) gr=sl*14593.9029;
    5) oz=sl*514.78477;
    6) st=sl*2.29814;
    
Example conversion to other SI-prefixes:
1) x = 35.46(kPa); = 35.46*10^3(Pa); = 0.03546(Pa) =>
=> tera(T) = 10^12 => 35.46(10^3-10^12) => 35.46*(10^(3-12));
2) y = 123.90(gV) = 123.90*10^9(V) = 123 900 000 000(V) =>
=> mili(m) = 10^-3 => 123.90(10^9-(10^-3)) => 123.90*(10^(9+3)) =>

Formula of conversion between different default si-prefixes:
A*10^n - default statement;
10^m - necessary conversion prefix;
<!--
======CONVERSTION FORMULA=======
B = A*10^n-10^m => A*10^(n-m);
================================

Additional testing:
Ex-1: A = 3567.34(nm), B = A(fm) - ?
Solving: B = 3567.34*10^(-9-(-15)) = 3567.34*10^(-9+15) = 3567.34*10^6 = 3 567 340 000(fm);

Ex-2: A = 0.0056(ms), B = A(es) - ?
Solving: B = 0.0056*10^(-3-18) = 0.0056*10^(-21) = .....
It's OK! Good results!
-->