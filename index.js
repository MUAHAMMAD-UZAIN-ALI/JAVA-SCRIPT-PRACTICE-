

var marks = 50
if(marks > 80){
    console.log("Mithai")
}else if(marks > 60){
    console.log("AMMA NE BACHA LIA")
}else{
    console.log("AMMA ABBA DONO SE DHULAI")
}


var a = +prompt("Enter Your Math Marks")
var b = +prompt("Enter Your Urdu Marks")
var c = +prompt("Enter Your Computer Marks")
var d = +prompt("Enter Your Biology Marks")
var e = +prompt("Enter Your Pakistan Studies Marks")

 console.log(a,b,c,d,e)

var sum = (a+b+c+d+e)
console.log(sum)

var total = sum / 500 * 100

if(total > 90){
    alert("Excellent! You Got 100% A+ Grade")
}else if(total > 80){
    alert("Congratulation! You Got 80% A Grade")
}else if(total > 70){
    alert("Congratulation! You Got 70% B Grade")
}else if(total > 50){
    alert("Congraulation! You Got 60% and C Grade")
}else{
    alert("Sorry! You Got 50% and Failed")
}

var student = true
var batch = 19

if(student == true){
    if(batch == "19"){
        console.log("Allow")
    }else{
        console.log("Not Allowed")
    }
}else{
    console.log("Not Allowed")
}
if ( student == true && batch =="19"){
    console.log("Allowed")
}else{
    console.log("Not Allowed")
}

var student =["ALI","UZAIN","UMER" ]
student[5]= "ASAD"
student.push("ali")
student.pop()
student.unshift("KASHAN")
student.unshift()
console.log(student)

