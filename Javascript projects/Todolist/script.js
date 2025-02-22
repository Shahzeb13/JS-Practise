let toDoArray = JSON.parse(localStorage.getItem('ArrayOfObjects')) || [];
        let html = '';
        iterateArrayAndGenerateHtml();
        // let html = localStorage.getItem('html') || '';
        // selectDivElemAndLoadFromLocalStorage(html);
        console.log(toDoArray);
        function convertIntoObject(value1 , value2) {
            let toDoObject = {};
            toDoObject['toDo'] = value1;
            toDoObject['date'] = value2; 
            return toDoObject;
        }

        function addIntoArray(object) {
            toDoArray.push(object);
            return toDoArray;
            
        }


        // function iterateArrayAndGenerateHtml(array) {
        //     let html = '';
        //     for(let i = 0; i < array.length; i++) {
        //         html += `<div> ${(array[i].toDo)} </div>
        //              <div> ${(array[i].date)}</div> 
        //              <div>
        //              <button class= "js-del-btn" onclick ="
        //              toDoArray.splice(${i}, 1);
        //              iterateArrayAndGenerateHtml(toDoArray);
        //              ">Delete</button>
        //              </div>`;
                     
        //     }
        //     // localStorage.setItem('html', html);
        //     console.log(html);
            
        //    selectDivElemAndLoadFromLocalStorage(html);
        // } 

        //fprEach loop nahi ha ya array object ka method ha js ma
        
        function iterateArrayAndGenerateHtml(array) {
            let html = '';
            toDoArray.forEach(function(toDotask , index) {
                html += `<div> ${(toDotask.toDo)} </div>
                     <div> ${(toDotask.date)}</div> 
                     <div>
                     <button class= "js-del-btn del-btn" 
                     ">Delete</button>
                     </div>`;
            })
            // localStorage.setItem('html', html);
            console.log(html);
            
           selectDivElemAndLoadFromLocalStorage(html);
        } 
        
      
        //local storage kam nai kar raha ha ?????
        
        function selectDivElemAndLoadFromLocalStorage(html) {
            let divElem = document.querySelector('.js-todo-div');
            divElem.innerHTML = /*localStorage.getItem('html') ||*/ html ;

            let deleteButton = document.querySelectorAll('.js-del-btn')
                .forEach((deleteButton , index) => {
                    deleteButton.addEventListener('click' , () => {
                        toDoArray.splice(index , 1);
                        //Note: jab b ma local storage ma jis form sa data ja raha ha i.e. array or objects aur us ma add/delete karun ga tho muja localStorage ko b update karna ho ga add karta waqt aur delete karta waqt b
                        localStorage.setItem('ArrayOfObjects' , JSON.stringify(toDoArray));
                        iterateArrayAndGenerateHtml();
                    });
                });
        }
        
        // function ShowLocalStoragehtmlELem(){
        //     let divElem = document.querySelector('.js-todo-div');
        //     divElem.innerHTML = html;
        // }


        let AddButton = document.querySelector('.js-add-btn');
        AddButton.addEventListener('click' , () => {
            addToDo();
        });

        function addToDo() {
            let toDo = document.querySelector('.js-todo');
            let toDodate = document.querySelector('.js-date-todo');

            let toDoValue = toDo.value;
            let toDodateValue = toDodate.value;
            
            // console.log(toDoValue);
            // console.log(toDodateValue);
            //function call kya jis na input fields ki values ko object ma convert kar dya
            let toDoObject = convertIntoObject(toDoValue , toDodateValue);
            // console.log(toDoObject);
            //abi ma s  object ko array ma addd karun ga
            let toDoArray  = addIntoArray(toDoObject);  
            localStorage.setItem('ArrayOfObjects' , JSON.stringify(toDoArray));
            console.log(toDoArray);
            iterateArrayAndGenerateHtml(toDoArray);
            
            
        }
        