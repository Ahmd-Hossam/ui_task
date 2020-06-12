

//show section
let tab=document.getElementById('show');
let sec=document.getElementById('submittal');
tab.addEventListener('mouseover',()=>{
    sec.style.display="block";
});


//select inputs 
let no=document.querySelector('.no'), //select no input 
    sub=document.querySelector('.sub'), //select sub input
    name=document.querySelector('.name'); //select name input

//select button and tbody 
let add_btn=document.querySelector('.add'),
    table_body=document.querySelector('tbody');


///////////////////////////////////////// function button
add_btn.addEventListener("click",()=>{
    //create textNode and get value from all inputs
    let value_no=document.createTextNode(no.value),
        value_sub=document.createTextNode(sub.value),
        value_name=document.createTextNode(name.value);

        //get data from all radio buttons 
        let  All_radio=document.querySelectorAll('.radio');
        let  foreah_val=[];
        All_radio.forEach(radio => {
            if(radio.checked == true){
                foreah_val.push(radio.value);
            }
        });
        let to_string=foreah_val.join(""),//catch radio buttons values
            value_status=document.createTextNode(to_string);//add values to TextNode

    //create td elemnts
    let td_no=document.createElement('td'),
        td_sub=document.createElement('td'),
        td_status=document.createElement('td');
        td_name=document.createElement('td');


    //append values to td
    td_no.appendChild(value_no);
    td_sub.appendChild(value_sub);
    td_status.appendChild(value_status);
    td_name.appendChild(value_name);

    //create row and append td elements in it
    if(!no.value=="" && !sub.value=="" &&!name.value==""){//if all inputs are have values
        let trow=document.createElement('tr');//////////create row
            trow.appendChild(td_no);
            trow.appendChild(td_sub);//append td to row
            trow.appendChild(td_status);
            trow.appendChild(td_name);
        table_body.appendChild(trow);//add row into table
    }

    //after process
    //delet all values in inputs
    no.value="";
    sub.value="";
    name.value="";
});



let to_top=document.getElementById('top');
window.onscroll=()=>{
    if(document.body.scrollTop >100 || document.documentElement.scrollTop > 100){
        to_top.style.opacity='1';
    }else{
        to_top.style.opacity='0';
    }
};
to_top.addEventListener('click',()=>{
    document.body.scrollTo=0;
    document.documentElement.scrollTop=0;
})
// end scroll to top  
