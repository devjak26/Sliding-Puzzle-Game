const buttons=document.querySelectorAll('button');

buttons.forEach(btn => {
    btn.addEventListener('click', function(e) {
        let x= e.clientX -e.target.offsetLeft;
        let y= e.clientY -e.target.offsetTop;

        let ripples =document.createElement('span');
        ripples.style.left= x + 'px';
        ripples.style.top= y + 'px';
        this.appendChild(ripples);

        setTimeout(() => {
            ripples.remove();
        }, 1000);
    })
})
 

const cls="empty";
var arr=[0,0,0,0,0,0,0,0,0];

// random box generate
for(let i=1;i<9;i++)
{
     var cr=Math.floor(Math.random() * 9);

    while(arr[cr]==1 || cr==0){
         cr=Math.floor(Math.random() * 9);
    }

    arr[cr]=1;    
    document.getElementById(i).innerHTML=cr;
   
 }

var flag=0;

for(var i=1;i<9;i++)
{
    var check=document.getElementById(i).innerHTML;
        
    if(check!=i){
        flag=1;
        break;
    }
        
}
if(flag==0)
{
    // alert(`You Won in ${document.getElementById("moves").innerHTML} moves`);
    var vc=document.getElementById('ttt');
    console.log(vc);
    vc.classList.remove("total");
    vc.classList.add("update");
   vc.classList.add("update");
    vc.innerHTML=`You complete the game in ${document.getElementById("moves").innerHTML} moves`;
}


var re=document.getElementById('btn1');

re.addEventListener("click", function(){
    location.reload();
});


let List=0;

let data = localStorage.getItem("score");

loadList(data);
 
function loadList(val)
{
    document.getElementById('btn3').innerHTML=val;
}

function fun(){
   

    const onClick = function() {
    var v1=this.id;

    if(this.innerHTML !=" ")
    {
        if(v1%3!=1)
        {
            var cc= parseInt(v1)-1;
            var v2=document.getElementById(cc);

            if(v2.innerHTML=== " ")
            {
               var cc1=document.getElementById("btn2").innerHTML;
                var dev=parseInt(cc1)+1;
                document.getElementById("btn2").innerHTML=dev;
                v2.innerHTML=this.innerHTML;
                this.innerHTML=" ";
                this.classList.toggle(cls);
                v2.classList.toggle(cls);
            }
        }

        if(v1%3!=0)
        {
            var cc= parseInt(v1)+1;
            var v2=document.getElementById(cc);
            // console.log( v2.innerHTML);

            if(v2.innerHTML=== " ")
            {
               var cc1=document.getElementById("btn2").innerHTML;
                var dev=parseInt(cc1)+1;
                document.getElementById("btn2").innerHTML=dev;
                v2.innerHTML=this.innerHTML;
                this.innerHTML=" ";
                this.classList.toggle(cls);
                v2.classList.toggle(cls);
            }
        }

        if(v1>3)
        {
            var cc= parseInt(v1)-3;
            var v2=document.getElementById(cc);
            // console.log( v2.innerHTML);

            if(v2.innerHTML=== " ")
            {
               var cc1=document.getElementById("btn2").innerHTML;
                var dev=parseInt(cc1)+1;
                document.getElementById("btn2").innerHTML=dev;
                v2.innerHTML=this.innerHTML;
                this.innerHTML=" ";
                this.classList.toggle(cls);
                v2.classList.toggle(cls);
 
            }
        }

        if(v1<7)
        {
            var cc= parseInt(v1)+3;
            var v2=document.getElementById(cc);
            // console.log( v2.innerHTML);

            if(v2.innerHTML=== " ")
            {
               var cc1=document.getElementById("btn2").innerHTML;
                var dev=parseInt(cc1)+1;
                document.getElementById("btn2").innerHTML=dev;
                v2.innerHTML=this.innerHTML;
                this.innerHTML=" ";
                this.classList.toggle(cls);
                v2.classList.toggle(cls);               
            }
        }

    // console.log(this.id, this.innerHTML);
    var flag=0;

    for(var i=1;i<9;i++)
    {
        var check=document.getElementById(i).innerHTML;
            
        if(check!=i){
            flag=1;
            break;
        }
            
    }
    if(flag==0)
    {
        // alert(`You Won in ${document.getElementById("moves").innerHTML} moves`);
        var vc=document.getElementById('ttt');
        console.log(vc);
        vc.classList.remove("total");
        vc.classList.add("update");
        var score=document.getElementById("btn2").innerHTML;
        vc.innerHTML=`You complete the game in ${document.getElementById("btn2").innerHTML} moves`;
        document.getElementById("btn2").id='ccc';

        var best=document.getElementById('btn3').innerHTML;

        if(best==0 || best>score)
        {
            document.getElementById('btn3').innerHTML=score;
            List= parseInt(score);
            localStorage.setItem("score", JSON.stringify(List));
        }
    }
    }
  }

  document.getElementById('1').onclick = onClick;
  document.getElementById('2').onclick = onClick;
  document.getElementById('3').onclick = onClick;
  document.getElementById('4').onclick = onClick;
  document.getElementById('5').onclick = onClick;
  document.getElementById('6').onclick = onClick;
  document.getElementById('7').onclick = onClick;
  document.getElementById('8').onclick = onClick;
  document.getElementById('9').onclick = onClick;
  
}
