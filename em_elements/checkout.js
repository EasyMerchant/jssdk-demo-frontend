let elements;
(function() {
    initialize();

    async function initialize() {
     try{
     //   const {client_token,amount} = await fetch("./create.php", {
      const { client_token, amount } = await fetch("http://localhost:5000/create.php", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
        }).then((r) => r.json());
        elements = new lyfPayCheckout(client_token);
        elements.create({
              container: 'payments',
              environment:'local', //sandbox || production
              amount:amount ,
              tokenOnly:true,
              currency:"usd", 
              saveCard:true, 
              saveAccount:true,
              submitButtonText:"Submit",
              showReceipt:true, // true || false
                showTotal:false, // true || false
                showSubmitButton:true, // true || false
                paymentMethods:['card',"ach"], //'card', 'ach','crypto'
          //       fields: {
          //           billing: [
                   
          //   { name: 'country', required: true, value: '' },
          //   { name: 'state', required: true, value: '' },
          //   { name: 'city', required: false,value: '' },
          //   { name: 'postal_code', required: true ,value: '' },
         
          // ],
          // additional: [
          // { name: 'name', required: true,value: '' },
          // { name: 'email_address', required: true ,value: ''},
          // { name: 'phone_number', required: false ,value: '' },
          // { name: 'description', required: true ,value: '' }
           
          // ]
          //   },
             
        apperanceSettings:{
            bodyBackgroundColor: "#eeeff2",
            containerBackgroundColor: "#ffffff",
            primaryFontColor: "#000000",
            secondaryFontColor: "#666666",
            primaryButtonBackgroundColor: "#1757d9",
            primaryButtonHoverColor: "#3a70df",
            primaryButtonFontColor: "#ffffff",
            secondaryButtonBackgroundColor: "#ffffff",
            secondaryButtonHoverColor: "#1757d9",
            secondaryButtonFontColor: "#1757d9",
            
            borderRadius: "8"
        }
              
    });

     // On Ready Event -  it will trigger once all elements render successfully

     elements.on('ready', (event)=>{
          console.log("Ready",event)
     });
 
 
     // On Done Event - it will trigger once payment successfully done
    
     elements.on('done', (event)=>{
          console.log("Done",event)

     });
 
 
     // On Donde Event - it will trigger once payment successfully done
 
     elements.on('error', (event)=>{
          console.log("Error",event)
     });
 
     elements.on('processing', (event)=>{
          console.log("Processing",event)
     });
     }
catch(err) {
     console.log("Javascript Errror",err)
   }
       // On Ready Event -  it will trigger once all elements render successfully
       
    }
})();

function formSubmit() {
    elements.submit();
}
