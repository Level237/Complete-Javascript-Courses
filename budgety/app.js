// Budget Controller
var budgetController=(function(){
    // Some code
})();



// UI Controller
var UIController=(function(){

        return {
            getInput:function(){

                return {
                    type:document.querySelector('.add__type').value,// will be either inc or exp
                    description:document.querySelector('.add__description').value,
                    value:document.querySelector('.add__value').value,
                }
            }
        }

})();


// Global Controller
var controller=(function(budgetCtrl,UICtrl){

    var ctrlAddItem=function(){
         // 1.Get the  field input data
        var input=UICtrl.getInput();
        console.log(input);
        //2. Add the item to the budget controller

        // 3. add the item to the UI

        //4. Calculate the budget

        //5.display the budget on the UI
        
    }

    document.querySelector('.add__btn').addEventListener('click',ctrlAddItem)
    document.addEventListener('keypress',function(event){
        if(event.key==='Enter'){
            
            ctrlAddItem();
            
        }
        
    });
})(budgetController,UIController);