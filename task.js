// // A.
// // 1. Bir 'value' adlı dəyişən tanımlayın. Bu dəyişkənə dəyər mənimsədin.
// // 2. Döngüleri istifadə edərək 0'dan girilən ədədə qədər olan bütün sayları toplayın.
// // 3. Total sayını ekrana yazdırın.
// // Example:
// //  if value equals 5 => print 15 (1+2+3+4+5)
// let value=7;
// let cem=0; //ilk once cem=0 edirik dongunun icerisinde herdefe uzerine gelib sonda neticeni ekrana cixaracam
// while(value>=0){
//     cem+=value;
//     value-=1;
// }
// console.log(cem) //Total cem   
// //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// //do while ile yazaq
// let value=7;
// let cem=0;
// do{
//     cem+=value;
//     value-=1;
// }
// while(value>=0)
// console.log(cem) //Total cem
// //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// //Eyni tapsirigi for-la yazaq
// let value=7;
// let cem=0;
// for(let i=0;i<=value;i++){
//     cem+=i;
// }
// console.log(cem) //Total cem
// //----------------------------------------------------------------------------------------------------------
// //  B.  
// // Döngüleri istifadə edərək 1'dən 1000'ə qədər olan saylar arasından 9'a və 11'ə bölünənləri ekrana yazdırın.
// let eded=1;
// while(eded<=1000){
//     if(eded%9==0 && eded%11==0){ //ve ya sadece 99 a bolunenleri de yaza bilerdik
//         console.log(eded)
//     }
//     eded+=1;
// }
// //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// // forla yazaq
// for(let i=1;i<=1000;i++){
//     if (i%9==0 && i%11==0){
//         console.log(i)
//     }
// }
// // do while ile yazaq
// //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// let eded=1;
// do{
//     if (eded%9==0 && eded%11==0){
//         console.log(eded)
//     }
//     eded+=1;
// }
//     while(eded<=1000)
// //-----------------------------------------------------------------------------------------------------
// // C.
// // 1. 'from' və 'to' adlı iki dəyişən təyin edin. Bu dəyişkənlərə dəyər mənimsədin.
// // 2.  Döngüleri istifadə edərək verilən aralıqda olan bütün cüt ədədləri ekrana yazdırın.
// // Example:
// // if 'from' equals 3 and 'to' equals 12 => print '4 6 8 10 12' 
// //while ile
// let from=10;
// let to=20;
// while(to>=from){
//     if(from%2==0){
//         console.log(from)
//     }
//     from+=1;
// }
// //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// //do-while ile
// let from=10;
// let to=20;
// do{
//     if(from%2==0){
//         console.log(from)
//     }
//     from+=1;
// }while(to>=from)
// //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// //for-la
// let from=10;
// let to=30;
// for(let i=from;i>=from && i<=to; i++){
//     if(i%2==0){
//         console.log(i)
//     }
// }
// //-------------------------------------------------------------------------------------------------------------------------------------
// // D.
// // 1. 'from' və 'to' adlı iki dəyişən təyin edin. Bu dəyişkənlərə dəyər mənimsədin.
// // 2.  Döngüleri istifadə edərək verilən aralıqda olan bütün tək ədədlərin cəmini ekrana yazdırın.
// // Example:
// // if 'from' equals 4 and 'to' equals 8 => print '18'
// // while ile
// let from=1;
// let to=10;
// let cem=0
// while(to>=from){
//     if(from%2!=0){
//         cem+=from;
//     }
//     from+=1;
// }
// console.log(cem)
// //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// // do-while ile
// let from=1;
// let to=10;
// let cem=0
// do{
//     if(from%2!=0){
//         cem+=from;
//     }
//     from+=1;
// }while(to>=from)
// console.log(cem)
// //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// // for-la
// let from=10;
// let to=15;
// let cem=0
// for(let i=from;i>=from && i<=to;i++){
//     if (i%2!=0){
//         cem+=i;
//     }
// }
// console.log(cem)
// //------------------------------------------------------------------------------------------------------------------
