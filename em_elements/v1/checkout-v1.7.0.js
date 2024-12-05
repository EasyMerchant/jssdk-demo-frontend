(function (window) {
  const countries = [{name:'Afghanistan',code:'AF'},{name:'land Islands',code:'AX'},{name:'Albania',code:'AL'},{name:'Algeria',code:'DZ'},{name:'American Samoa',code:'AS'},{name:'AndorrA',code:'AD'},{name:'Angola',code:'AO'},{name:'Anguilla',code:'AI'},{name:'Antarctica',code:'AQ'},{name:'Antigua and Barbuda',code:'AG'},{name:'Argentina',code:'AR'},{name:'Armenia',code:'AM'},{name:'Aruba',code:'AW'},{name:'Australia',code:'AU'},{name:'Austria',code:'AT'},{name:'Azerbaijan',code:'AZ'},{name:'Bahamas',code:'BS'},{name:'Bahrain',code:'BH'},{name:'Bangladesh',code:'BD'},{name:'Barbados',code:'BB'},{name:'Belarus',code:'BY'},{name:'Belgium',code:'BE'},{name:'Belize',code:'BZ'},{name:'Benin',code:'BJ'},{name:'Bermuda',code:'BM'},{name:'Bhutan',code:'BT'},{name:'Bolivia',code:'BO'},{name:'Bosnia and Herzegovina',code:'BA'},{name:'Botswana',code:'BW'},{name:'Bouvet Island',code:'BV'},{name:'Brazil',code:'BR'},{name:'British Indian Ocean Territory',code:'IO'},{name:'Brunei Darussalam',code:'BN'},{name:'Bulgaria',code:'BG'},{name:'Burkina Faso',code:'BF'},{name:'Burundi',code:'BI'},{name:'Cambodia',code:'KH'},{name:'Cameroon',code:'CM'},{name:'Canada',code:'CA'},{name:'Cape Verde',code:'CV'},{name:'Cayman Islands',code:'KY'},{name:'Central African Republic',code:'CF'},{name:'Chad',code:'TD'},{name:'Chile',code:'CL'},{name:'China',code:'CN'},{name:'Christmas Island',code:'CX'},{name:'Cocos (Keeling) Islands',code:'CC'},{name:'Colombia',code:'CO'},{name:'Comoros',code:'KM'},{name:'Congo',code:'CG'},{name:'Congo, The Democratic Republic of the',code:'CD'},{name:'Cook Islands',code:'CK'},{name:'Costa Rica',code:'CR'},{name:'Cote DIvoire',code:'CI'},{name:'Croatia',code:'HR'},{name:'Cuba',code:'CU'},{name:'Cyprus',code:'CY'},{name:'Czech Republic',code:'CZ'},{name:'Denmark',code:'DK'},{name:'Djibouti',code:'DJ'},{name:'Dominica',code:'DM'},{name:'Dominican Republic',code:'DO'},{name:'Ecuador',code:'EC'},{name:'Egypt',code:'EG'},{name:'El Salvador',code:'SV'},{name:'Equatorial Guinea',code:'GQ'},{name:'Eritrea',code:'ER'},{name:'Estonia',code:'EE'},{name:'Ethiopia',code:'ET'},{name:'Falkland Islands (Malvinas)',code:'FK'},{name:'Faroe Islands',code:'FO'},{name:'Fiji',code:'FJ'},{name:'Finland',code:'FI'},{name:'France',code:'FR'},{name:'French Guiana',code:'GF'},{name:'French Polynesia',code:'PF'},{name:'French Southern Territories',code:'TF'},{name:'Gabon',code:'GA'},{name:'Gambia',code:'GM'},{name:'Georgia',code:'GE'},{name:'Germany',code:'DE'},{name:'Ghana',code:'GH'},{name:'Gibraltar',code:'GI'},{name:'Greece',code:'GR'},{name:'Greenland',code:'GL'},{name:'Grenada',code:'GD'},{name:'Guadeloupe',code:'GP'},{name:'Guam',code:'GU'},{name:'Guatemala',code:'GT'},{name:'Guernsey',code:'GG'},{name:'Guinea',code:'GN'},{name:'Guinea-Bissau',code:'GW'},{name:'Guyana',code:'GY'},{name:'Haiti',code:'HT'},{name:'Heard Island and Mcdonald Islands',code:'HM'},{name:'Holy See (Vatican City State)',code:'VA'},{name:'Honduras',code:'HN'},{name:'Hong Kong',code:'HK'},{name:'Hungary',code:'HU'},{name:'Iceland',code:'IS'},{name:'India',code:'IN'},{name:'Indonesia',code:'ID'},{name:'Iran, Islamic Republic Of',code:'IR'},{name:'Iraq',code:'IQ'},{name:'Ireland',code:'IE'},{name:'Isle of Man',code:'IM'},{name:'Israel',code:'IL'},{name:'Italy',code:'IT'},{name:'Jamaica',code:'JM'},{name:'Japan',code:'JP'},{name:'Jersey',code:'JE'},{name:'Jordan',code:'JO'},{name:'Kazakhstan',code:'KZ'},{name:'Kenya',code:'KE'},{name:'Kiribati',code:'KI'},{name:'Korea, Democratic People Republic of',code:'KP'},{name:'Korea, Republic of',code:'KR'},{name:'Kuwait',code:'KW'},{name:'Kyrgyzstan',code:'KG'},{name:'Lao PeopleS Democratic Republic',code:'LA'},{name:'Latvia',code:'LV'},{name:'Lebanon',code:'LB'},{name:'Lesotho',code:'LS'},{name:'Liberia',code:'LR'},{name:'Libyan Arab Jamahiriya',code:'LY'},{name:'Liechtenstein',code:'LI'},{name:'Lithuania',code:'LT'},{name:'Luxembourg',code:'LU'},{name:'Macao',code:'MO'},{name:'Macedonia, The Former Yugoslav Republic of',code:'MK'},{name:'Madagascar',code:'MG'},{name:'Malawi',code:'MW'},{name:'Malaysia',code:'MY'},{name:'Maldives',code:'MV'},{name:'Mali',code:'ML'},{name:'Malta',code:'MT'},{name:'Marshall Islands',code:'MH'},{name:'Martinique',code:'MQ'},{name:'Mauritania',code:'MR'},{name:'Mauritius',code:'MU'},{name:'Mayotte',code:'YT'},{name:'Mexico',code:'MX'},{name:'Micronesia, Federated States of',code:'FM'},{name:'Moldova, Republic of',code:'MD'},{name:'Monaco',code:'MC'},{name:'Mongolia',code:'MN'},{name:'Montenegro',code:'ME'},{name:'Montserrat',code:'MS'},{name:'Morocco',code:'MA'},{name:'Mozambique',code:'MZ'},{name:'Myanmar',code:'MM'},{name:'Namibia',code:'NA'},{name:'Nauru',code:'NR'},{name:'Nepal',code:'NP'},{name:'Netherlands',code:'NL'},{name:'Netherlands Antilles',code:'AN'},{name:'New Caledonia',code:'NC'},{name:'New Zealand',code:'NZ'},{name:'Nicaragua',code:'NI'},{name:'Niger',code:'NE'},{name:'Nigeria',code:'NG'},{name:'Niue',code:'NU'},{name:'Norfolk Island',code:'NF'},{name:'Northern Mariana Islands',code:'MP'},{name:'Norway',code:'NO'},{name:'Oman',code:'OM'},{name:'Pakistan',code:'PK'},{name:'Palau',code:'PW'},{name:'Palestinian Territory, Occupied',code:'PS'},{name:'Panama',code:'PA'},{name:'Papua New Guinea',code:'PG'},{name:'Paraguay',code:'PY'},{name:'Peru',code:'PE'},{name:'Philippines',code:'PH'},{name:'Pitcairn',code:'PN'},{name:'Poland',code:'PL'},{name:'Portugal',code:'PT'},{name:'Puerto Rico',code:'PR'},{name:'Qatar',code:'QA'},{name:'Reunion',code:'RE'},{name:'Romania',code:'RO'},{name:'Russian Federation',code:'RU'},{name:'RWANDA',code:'RW'},{name:'Saint Helena',code:'SH'},{name:'Saint Kitts and Nevis',code:'KN'},{name:'Saint Lucia',code:'LC'},{name:'Saint Pierre and Miquelon',code:'PM'},{name:'Saint Vincent and the Grenadines',code:'VC'},{name:'Samoa',code:'WS'},{name:'San Marino',code:'SM'},{name:'Sao Tome and Principe',code:'ST'},{name:'Saudi Arabia',code:'SA'},{name:'Senegal',code:'SN'},{name:'Serbia',code:'RS'},{name:'Seychelles',code:'SC'},{name:'Sierra Leone',code:'SL'},{name:'Singapore',code:'SG'},{name:'Slovakia',code:'SK'},{name:'Slovenia',code:'SI'},{name:'Solomon Islands',code:'SB'},{name:'Somalia',code:'SO'},{name:'South Africa',code:'ZA'},{name:'South Georgia and the South Sandwich Islands',code:'GS'},{name:'Spain',code:'ES'},{name:'Sri Lanka',code:'LK'},{name:'Sudan',code:'SD'},{name:'Suriname',code:'SR'},{name:'Svalbard and Jan Mayen',code:'SJ'},{name:'Swaziland',code:'SZ'},{name:'Sweden',code:'SE'},{name:'Switzerland',code:'CH'},{name:'Syrian Arab Republic',code:'SY'},{name:'Taiwan, Province of China',code:'TW'},{name:'Tajikistan',code:'TJ'},{name:'Tanzania, United Republic of',code:'TZ'},{name:'Thailand',code:'TH'},{name:'Timor-Leste',code:'TL'},{name:'Togo',code:'TG'},{name:'Tokelau',code:'TK'},{name:'Tonga',code:'TO'},{name:'Trinidad and Tobago',code:'TT'},{name:'Tunisia',code:'TN'},{name:'Turkey',code:'TR'},{name:'Turkmenistan',code:'TM'},{name:'Turks and Caicos Islands',code:'TC'},{name:'Tuvalu',code:'TV'},{name:'Uganda',code:'UG'},{name:'Ukraine',code:'UA'},{name:'United Arab Emirates',code:'AE'},{name:'United Kingdom',code:'GB'},{name:'United States',code:'US'},{name:'United States Minor Outlying Islands',code:'UM'},{name:'Uruguay',code:'UY'},{name:'Uzbekistan',code:'UZ'},{name:'Vanuatu',code:'VU'},{name:'Venezuela',code:'VE'},{name:'Viet Nam',code:'VN'},{name:'Virgin Islands, British',code:'VG'},{name:'Virgin Islands, U.S.',code:'VI'},{name:'Wallis and Futuna',code:'WF'},{name:'Western Sahara',code:'EH'},{name:'Yemen',code:'YE'},{name:'Zambia',code:'ZM'},{name:'Zimbabwe',code:'ZW'}]
  const usStates=[{name:'ALABAMA',code:'AL'},{name:'ALASKA',code:'AK'},{name:'AMERICAN SAMOA',code:'AS'},{name:'ARIZONA',code:'AZ'},{name:'ARKANSAS',code:'AR'},{name:'CALIFORNIA',code:'CA'},{name:'COLORADO',code:'CO'},{name:'CONNECTICUT',code:'CT'},{name:'DELAWARE',code:'DE'},{name:'DISTRICT OF COLUMBIA',code:'DC'},{name:'FEDERATED STATES OF MICRONESIA',code:'FM'},{name:'FLORIDA',code:'FL'},{name:'GEORGIA',code:'GA'},{name:'GUAM',code:'GU'},{name:'HAWAII',code:'HI'},{name:'IDAHO',code:'ID'},{name:'ILLINOIS',code:'IL'},{name:'INDIANA',code:'IN'},{name:'IOWA',code:'IA'},{name:'KANSAS',code:'KS'},{name:'KENTUCKY',code:'KY'},{name:'LOUISIANA',code:'LA'},{name:'MAINE',code:'ME'},{name:'MARSHALL ISLANDS',code:'MH'},{name:'MARYLAND',code:'MD'},{name:'MASSACHUSETTS',code:'MA'},{name:'MICHIGAN',code:'MI'},{name:'MINNESOTA',code:'MN'},{name:'MISSISSIPPI',code:'MS'},{name:'MISSOURI',code:'MO'},{name:'MONTANA',code:'MT'},{name:'NEBRASKA',code:'NE'},{name:'NEVADA',code:'NV'},{name:'NEW HAMPSHIRE',code:'NH'},{name:'NEW JERSEY',code:'NJ'},{name:'NEW MEXICO',code:'NM'},{name:'NEW YORK',code:'NY'},{name:'NORTH CAROLINA',code:'NC'},{name:'NORTH DAKOTA',code:'ND'},{name:'NORTHERN MARIANA ISLANDS',code:'MP'},{name:'OHIO',code:'OH'},{name:'OKLAHOMA',code:'OK'},{name:'OREGON',code:'OR'},{name:'PALAU',code:'PW'},{name:'PENNSYLVANIA',code:'PA'},{name:'PUERTO RICO',code:'PR'},{name:'RHODE ISLAND',code:'RI'},{name:'SOUTH CAROLINA',code:'SC'},{name:'SOUTH DAKOTA',code:'SD'},{name:'TENNESSEE',code:'TN'},{name:'TEXAS',code:'TX'},{name:'UTAH',code:'UT'},{name:'VERMONT',code:'VT'},{name:'VIRGIN ISLANDS',code:'VI'},{name:'VIRGINIA',code:'VA'},{name:'WASHINGTON',code:'WA'},{name:'WEST VIRGINIA',code:'WV'},{name:'WISCONSIN',code:'WI'},{name:'WYOMING',code:'WY'}]
  const candaStates = [{name:'Alberta',code:'AB'},{name:'British Columbia',code:'BC'},{name:'Manitoba',code:'MB'},{name:'New Brunswick',code:'NB'},{name:'Newfoundland and Labrador',code:'NL'},{name:'Northwest Territories',code:'NT'},{name:'Nova Scotia',code:'NS'},{name:'Nunavut',code:'NU'},{name:'Ontario',code:'ON'},{name:'Prince Edward Island',code:'PE'},{name:'Quebec',code:'QC'},{name:'Saskatchewan',code:'SK'},{name:'Yukon Territory',code:'YT'}];
  const versionNumber = "v1";
  const version ="-"+versionNumber+".0.75";
  //var appUrl = "https://cdn.lyfepay.io/js-sdk/"+ versionNumber; // Prod APP URL
  var appUrl = "http://em-cdn.test/js-sdk/"+ versionNumber ; // Prod APP URL
  var domainUrl = "https://api.lyfepay.io";
  var apiUrl = domainUrl+"/api/v1"; // Prod API URL

  const mainCss = appUrl + "/css/main"+version+".min.css?v=1"; // Main css url
  //const tailCss = appUrl + "/css/build.css?v=4"; // Main css url
  const intelCss = appUrl + "/css/intel.css?v=7"; // Main css url
  // const qrCodeJs = appUrl + "/js/qrcode.min.js?v=3"; // QR Code JS url
  // const polyfillJs = appUrl + "/js/polyfills.min.js?v=5"; //intel phone JS url
  const mainJs = appUrl + "/js/main"+version+".min.js"; // Main css url
  var billingFields =    [{ name: 'address', required: true, value: '1234 Street' },
  { name: 'country', required: true, value: 'US' },
  { name: 'state', required: true, value: 'AL' },
  { name: 'city', required: false },
  { name: 'postal_code', required: true }];
  const additionalFields =    ["name",'email_address','phone_number','description'];
  var initSettings = {
    container: "payments",
    amount:0,
    currency:"usd",
    theme: "default",
    tokenOnly:false,
    showReceipt: false,
    showTotal: true,
    showSubmitButton: true, 
    saveCard:true,
    saveAccount:true,
    submitButtonText:"Pay Now",
    paymentMethods: ['card', 'ach','crypto','wallet'],
    fields:{
      billing:[
     ],
      additional: [
      
       
      ]
    },
    apperanceSettings:{

    }
  }
  var activeTab = "";
  var clientToken = "";
  var paymentMethodData = {};
  var paymentMethods = [];
  var iframeContainer = {};
  var eventMap = new Map();
  var loading = '';
  var submitBtn = '';
  var errorDiv = '';
  let successDiv = '';
  var cryptoPaymentAccount = "";
  var cryptoChanrgeId = "";
  var timeoutHandle="";
  var pageDiv = "";
  var merchantName = "";
  var companyName = "";
  var merchantEmail = "";
  var apperanceSettings = {};
  var containerDiv = "";
  var formContainer = "";
  var intel=''
  let selectedSavedCards = {};
  let selectedSavedAccounts = {};
  let cardSearchKey = "";
  let cardSearchValue = "";
  let chargeTriggered = false;
  let chargeFormData = {};
  let save_new_checkbox = "";
  let authNoSaved = false;
  let  inlineLoading = "";
  let inlineAuthForm = false;
  let  customerMainAuthForm = "";
  let  customerInlineAuthForm = "";
  let confirmModalMsg = "Are you sure want to delete this?";
  let confirModalTitle = "Confirmation !!";
  let tokenOnlyCharge = false;
  var customer={};
  // Get Payment Methods from api 
  var resizeIframe = function() {
    // mainFrame.removeAttribute("height");
    // mainFrame.height = iframeContainer.body.scrollHeight + 10+"px";
   
    
  }
  function adjustModalStyle() {
    let setting = iframeContainer.querySelector("#setting");
    const screenWidth = window.innerWidth;
  if (screenWidth <= 430){
    setting.style.width = "92.9%";
    setting.style.left = "3.7%";
    setting.style.bottom = "6.9%";
  }
   else if (screenWidth <= 769) {
      // Styles for very small screens (like mobile phones)
      setting.style.width = "95.9%";
      setting.style.left = "2.1%";
      setting.style.bottom = "6.9%";
      setting.style.maxWidth = "unset";
      setting.style.margin="0";
    } else if (screenWidth <= 1023) {
      // Styles for medium screens (like tablets)
      setting.style.width = "96.8%";
      setting.style.left = "1.6%";
      setting.style.bottom = "6.9%";
      setting.style.maxWidth = "uset";
      setting.style.margin="0";
    } else {
      // Styles for larger screens (like desktops)
      setting.style.width = "100%";
      // setting.style.left = "27.75%";
      setting.style.left="0";
      setting.style.right="0";
      setting.style.maxWidth = "640px";
      setting.style.margin="0 auto";
      setting.style.bottom = "7%";
    }
  }
  
  function toggleModal() {
    var setting =  iframeContainer.querySelector("#setting");
    var closesetting =  iframeContainer.querySelector("#close-setting");
    var overlay =  iframeContainer.querySelector("#overlay");
    adjustModalStyle(); // Apply responsive styles
  
    closesetting.addEventListener("click", (e) => {
      e.preventDefault();
      setting.style.transition = "opacity 0.3s ease-in-out, bottom 0.3s ease-in-out"; // Add transitions
      setting.style.opacity = "0"; // Fade out the modal
      setting.style.pointerEvents = "none"; // Disable pointer events during transition
      setting.style.bottom = '-27%'; // Slide modal downwards
  
      overlay.style.opacity = "0"; // Fade out the overlay
  
      setTimeout(() => {
        setting.style.display = "none"; // Hide the modal after the transition
        setting.style.opacity = "1"; // Reset opacity
        setting.style.pointerEvents = "auto"; // Re-enable pointer events
  
        overlay.style.display = "none"; // Hide the overlay
      }, 300); // Match the timeout with the transition duration
    });
  
    if (setting.style.display === "block") {
      // Logic to handle when the modal is already open
    } else {
      setting.style.display = "block";
      overlay.style.display = "block"; // Show the overlay
      overlay.style.opacity = "1"; // Fade in the overlay
  
      setting.style.transition = "opacity 0.3s ease-in-out, bottom 0.3s ease-in-out"; // Add transitions
      setting.style.opacity = "0"; // Start with zero opacity
      setting.style.pointerEvents = "none"; // Disable pointer events during transition
      // setting.style.bottom = '0px'; // Slide modal upwards
  
      setTimeout(() => {
        setting.style.opacity = "1"; // Fade in the modal
        setting.style.pointerEvents = "auto"; // Re-enable pointer events
      }, 100);
    }
  }

  
  var isAuth = function() {
    
    let customer_token = localStorage.getItem('customer_token');
    let is_auth = false;
    if(customer_token && customer_token!="" && customer_token!=undefined){
      is_auth = true
    }
    return is_auth;
  }
  var displayLabel = function(string) {
    let str = string.replaceAll(/_/g," ");
    return  str.charAt(0).toUpperCase() +  str.slice(1);
  }

  
  // Send OTP to Customer

  const sendCustomerOTP = async (parentElem,resend=false,inlineParent=false) => {
    if(resend!=true){
    let elements = iframeContainer.forms.saved_card_auth_form.elements;
    if(!checkRequiredValidation(elements)){
      return false;
    }
    cardSearchValue = elements['email_or_phone'].value;
    cardSearchKey = validateEmail(cardSearchValue)?'email':'phone';
    }
    let formData = new FormData();
    formData.append('card_search_value',cardSearchValue);
    formData.append('card_search_key', cardSearchKey);
    parentElem.innerHTML = "";
    renderInlineLoading(parentElem);
    fetch(apiUrl + '/customer/send_otp', {
      method: 'POST',
      headers: {
        'Client-Token': clientToken
      },
      body: formData
    })
      .then(async response => {
        let result = await response.json();
        if ([200, 201].includes(response.status)) {
         inlineLoading.remove();
         
          renderCustomerOTPForm(inlineParent)
          }
        else{
          inlineLoading.remove();
          renderCustomerAuth(inlineParent);
          let inline_error = iframeContainer.querySelector('#inline_error');
        
          inline_error.innerHTML =result.message && result.message!=""?result.message:"Send OTP Failed!!. Please try again later."
        }


      }).catch((error) => {
        inlineLoading.remove();
        console.error('Error:', error);
      });
    return;
  }
// Delete the saveinfo

const deleteSavedInfo = async () => {
  let confirm_modal = iframeContainer.getElementById("confirm_modal");
  confirm_modal.style.display = "none";
  errorDiv.innerHTML = '<div class="flex flex-col justify-center items-center mt-5"><img src="'+appUrl+'/img/Loading.svg" class="loader  text-center" alt="loader"  height=16 width=16/></div>';
  let deleteSavedUrl = activeTab =="card"?  'card/'+selectedSavedCards.card_id: 'ach/account/'+selectedSavedAccounts.account_id
  fetch(apiUrl +"/"+deleteSavedUrl, {
    method: 'DELETE',
    headers: {
   'Customer-Token': localStorage.getItem("customer_token"),
    },
    body: JSON.stringify({"card_id":selectedSavedCards.card_id}) 
  })
    .then(async response => {
      let result = await response.json();
      if ([200, 201].includes(response.status)) {
        errorDiv.innerHTML = "";
        showToastMessage("Deleted successfully!!","success");
        let formElemDiv = iframeContainer.querySelector("#payment_info");
       formElemDiv.innerHTML = "";
        await getCustomerSaved(formElemDiv,true)
        }
      else{
       errorDiv.innerHTML = "";
        let msg = result.message && result.message!=""?result.message:"Something went wrong.Please try again later.";
        showToastMessage(msg,"error");
      }

  
    }).catch((error) => {
       errorDiv.innerHTML = "";
      let msg  = "Something went wrong.Please try again later.";
      showToastMessage(msg,"error");
    });
  return;

}




  // update saved card/ account

  const updateSaved = async (parentElem,params) => {

    let elements = iframeContainer.forms[params.form].elements;
    if(!checkRequiredValidation(elements)){
      return false;
    }
    let formData = await getUpdateSavedCardParams(elements)
    let update_btn = iframeContainer.querySelector(".update_btn"); 
   
    update_btn.disabled="disabled";
    update_btn.innerHTML = '<img src="'+appUrl+'/img/Loading_sm.png" class="loader" alt="loader"  height=16 width=16/>';
    fetch(apiUrl + '/card/'+params.card_id, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
     'Customer-Token': localStorage.getItem("customer_token"),
      },
      body: JSON.stringify(formData) 
    })
      .then(async response => {
        let result = await response.json();
        update_btn.removeAttribute("disabled");
        update_btn.innerHTML ="Update";
        if ([200, 201].includes(response.status)) {
        showToastMessage("Updated successfully!!","success");
       let formElemDiv = iframeContainer.querySelector("#payment_info");
       formElemDiv.innerHTML = "";
        await getCustomerSaved(formElemDiv,true)
       
          }
        else{
          update_btn.removeAttribute("disabled");
          update_btn.innerHTML ="Update";
         let msg = result.message && result.message!=""?result.message:"Invalid card id.Please try again later.";
         showToastMessage(msg,"error");
         
        }

    
      }).catch((error) => {
        update_btn.removeAttribute("disabled");
        update_btn.innerHTML ="Update";
        let msg ="Something went wrong.Please try again later.";
        showToastMessage(msg,"error");
      });
    return;


  }

  // get update saved card params

  const getUpdateSavedCardParams = async (elements) => {
    let expDataArr =  elements.expiry.value.split("/");
    return ({'exp_month': expDataArr[0],
          'exp_year':expDataArr[1],
          'card_id':selectedSavedCards.card_id, 
          'cvc':elements.cvv.value,
          'cardholder_name':elements.cardName.value
        });
  }

  //Check OTP Vaidation

  const otpRequireValidation = async () => {
    let ele = iframeContainer.querySelectorAll('.otp');
    let otp_err = 0;  
    ele.forEach(el => {

      if(el.value==''){
        otp_err++
        el.classList.add("input-error");
      }
      else{
        el.classList.remove("input-error"); 
      }
    });
    if(otp_err >0){
      return false;
    }
    
  }


    //Verify Customer OTP

  const verifyCustomerOTP = async (parentElem,inlineParent) => {
    let elements = iframeContainer.forms.saved_card_otp_form.elements;
  
    if(!otpRequireValidation(elements)){
      return false;
    }
    let formData = new FormData();
    let customerOTP = elements['customer_otp'].value;
    formData.append('card_search_value',cardSearchValue);
    formData.append('card_search_key', cardSearchKey);
    formData.append('otp',customerOTP);
    parentElem.innerHTML = "";
    renderInlineLoading(parentElem);
    fetch(apiUrl + '/customer/verify_otp', {
      method: 'POST',
      headers: {
       'Client-Token': clientToken
      },
      body: formData
    })
      .then(async response => {
        let result = await response.json();
        if ([200, 201].includes(response.status)) {
          inlineLoading.remove();
          localStorage.setItem("customer_token",result.data.data.customer_token);
          localStorage.setItem("customer_id",result.data.data.customer_id);
          localStorage.setItem('card_search_value',cardSearchValue);
          localStorage.setItem('card_search_key', cardSearchKey);
          if(chargeTriggered){
            charges(elements)
          }
          else{
            formContainer.innerHTML = "";
            renderForm(formContainer);
          }
        } else{
          inlineLoading.remove();
          renderCustomerOTPForm(inlineParent);
          let msg =result.message && result.message!=""?result.message:"Send OTP Failed!!. Please try again later."
          showToastMessage(msg,"error");
        }

      }).catch((error) => {
        inlineLoading.remove();
        console.error('Error:', error);
      });
    return;
  }

  const getCustomerSaved = async (parentElem,isUpdate=false) => {
    renderLoading(parentElem);
    //activeTab ="card";
    let savedUrl = activeTab=="ach"?"/ach/account":'/card';
    fetch(apiUrl + savedUrl, {
      method: 'GET',
      headers: {
       //'Client-Token': clientToken,
       'Customer-Token': localStorage.getItem("customer_token"),
      }
    })
      .then(async response => {
        if ([200, 201].includes(response.status)) {
          let res = await response.json();
          loading.style.display ="none";
          authNoSaved=false;
          if(activeTab=="ach"){
            if(res.accounts && res.accounts.length>0){
              localStorage.setItem("customer_id",res.accounts[0].customer_id);
              renderCustomerSaved(parentElem,res.accounts);
              if(isUpdate){
                let save_change_other = iframeContainer.querySelector(".save_change_other");
                save_change_other.click();
                let save_change_other_all = iframeContainer.querySelectorAll(".save_change_other");
                      save_change_other_all.forEach(el => {
                el.classList.add("hidden");
              });
        
               }
            }
            else{
              renderACHElements(parentElem); 
            }
            
          }
          else{
            if(res.Cards && res.Cards.length>0){
              localStorage.setItem("customer_id",res.Cards[0].customer_id);
             renderCustomerSaved(parentElem,res.Cards);
             if(isUpdate){
              let save_change_other = iframeContainer.querySelector(".save_change_other");
              save_change_other.click();
              let save_change_other_all = iframeContainer.querySelectorAll(".save_change_other");
                    save_change_other_all.forEach(el => {
              el.classList.add("hidden");
            });
      
             }
            
            }
            else{
              renderCardElements(parentElem); 
            }
           
          }
        }
        else{
          loading.style.display ="none";
          authNoSaved=true;
          renderPaymentInfoForm();
        }


      }).catch((error) => {
        console.log(error);
        loading.style.display ="none";
        //renderPaymentInfoForm();
        
      });
    return;
  }
  // render payment Form for auth user but not have saved list

  var renderPaymentInfoForm = function (){
    var formElemDiv = iframeContainer.querySelector("#easyload"); 
    formElemDiv.innerHTML = "";
    let paymentForm = document.createElement('form');
    paymentForm.id = "payment_info";
    paymentForm.name = "payment_info";
    if(activeTab=="card")
      renderCardElements(paymentForm);
    else
      renderACHElements(paymentForm)
    
    formElemDiv.appendChild(paymentForm);
  }

  // Get Saved New Card Params 

  var getSavedNewParams = function (formData){
    let username = cardSearchValue;
    if(username!="" && username!=undefined){
    if(cardSearchValue.indexOf("@")>0){
      let unsplit = cardSearchValue.split("@");
      username =unsplit[0];
    }
    formData.append('username', username); // Need to remove that
    if(activeTab=="card")
      formData.append('save_card', 1);
    else    
      formData.append('save_account', 1);
    formData.append('is_default', 1);
    }
    return formData;
  }

 // Get saved card charge params

  var getSavedCardChargeParams = function (elements,formData){
    if(selectedSavedCards.card_id && selectedSavedCards.card_id!=undefined){
      formData.append('card_id',selectedSavedCards.card_id);
    }
      formData.append('cvc',elements.cvv.value);
      formData.append('description',"Saved card payment");
      formData.append('currency',initSettings.currency);
      formData.append('name', merchantName); // Need to remove that

    return formData;
    
  }
 // Get saved ACH prams
  var getSavedACHChargeParams = function (elements,formData){
    formData.append('account_id',selectedSavedAccounts.account_id);
    formData.append('description',"Saved account payment");
    formData.append('currency',initSettings.currency);
    formData.append('name', merchantName); // Need to remove that
  return formData;
  
}
  
  
  const getPaymentMethods = async (parentElem) => {
    showLoading();
    let formData = new FormData();
    let customer_id = localStorage.getItem('customer_id');
    if(customer_id!="" && customer_id!=null && customer_id!="null"){
      formData.append('customer_id',customer_id);
      
    }
  
    fetch(apiUrl + '/hostedcheckouts', {
      method: 'POST',
      headers: {
       'Client-Token': clientToken
      },
      body: formData
    })
      .then(async response => {
        if ([200, 201].includes(response.status)) {
          let res = await response.json();
          merchantName = res.data.merchant_name;
          companyName = res.data.company_name;
          merchantEmail = res.data.merchant_email;
          paymentMethodData = res.data.payment_methods;
          apperanceSettings = res.data.apperance_settings;
          if(customer_id!="" && customer_id!=null && customer_id!="null" &&  res.data?.customer){
            customer = res.data?.customer;
          }
         
          if (paymentMethodData.card && paymentMethodData.card != "null" && paymentMethodData.card.name) {
            paymentMethods.push("card")
          }
          if (paymentMethodData.crypto && paymentMethodData.crypto != "null" && paymentMethodData.crypto.name) {
            paymentMethods.push("crypto");
            cryptoPaymentAccount =  paymentMethodData.crypto.payment_account;
          }
          if (paymentMethodData.ach && paymentMethodData.ach != "null" && paymentMethodData.ach) {
            paymentMethods.push("ach");
          }
        
        
          paymentMethods.push("wallet");
          hideLoading();
          renderForm(parentElem);
        }


      }).catch((error) => {
        console.error('Error:', error);
      });
    return;
  }
  var expDateValid = function(expDate){
    const curr_date = new Date();
    let curr_year = parseInt(curr_date.getFullYear());
    let curr_month = parseInt(curr_date.getMonth())+1;
    const expData_arr =  expDate.split("/")
    if(parseInt(expData_arr[0])<=0 || parseInt(expData_arr[0])>12){
      return false;
    }

    if(expData_arr.length>0 && ((parseInt(expData_arr[1])==curr_year && parseInt(expData_arr[0])>curr_month) || parseInt(expData_arr[1])>curr_year)){
       return true;
    }
    else{
      return false;
    }
  }
  const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };
  const validatePhoneNumber = (num) =>{
    var mob=/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;
    if (mob.test(num) == false) {
        return false;
    }
     if (num.length > 15) {
        return false;
    }
    return true;
  }
  
  var checkRequiredValidation = function (elements){
    let  errCount = 0;
    for(let ele in elements)
      {
        if(elements[ele].required){
         if(elements[ele].value==""){
           elements[ele].classList.add("input-error");
          iframeContainer.getElementById(elements[ele].id+"Help").innerHTML=displayLabel(elements[ele].id)+" is required field";
          errCount++;
       }
       else{
         elements[ele].classList.remove("input-error");
         iframeContainer.getElementById(elements[ele].id+"Help").innerHTML="";
       }
       }
       if(elements[ele].name=="email_or_phone" && elements[ele].value!=""){
            if(!validateEmail(elements[ele].value) && !validatePhoneNumber(elements[ele].value)){
              elements[ele].classList.add("input-error");
              iframeContainer.getElementById(elements[ele].id+"Help").innerHTML=displayLabel(elements[ele].id)+" is invalid";
              errCount++;
            }

       }
       if(elements[ele].name=="customer_otp" && elements[ele].value!=""){
        if(elements[ele].value.length!=6){
          elements[ele].classList.add("input-error");
          iframeContainer.getElementById(elements[ele].id+"Help").innerHTML="Invalid OTP. OTP number should be 6 digit";
          errCount++;
        }

      }

      if(elements[ele].name=="expiry" && elements[ele].value!=""){
        if(!expDateValid(elements[ele].value)){
          elements[ele].classList.add("input-error");
          iframeContainer.getElementById(elements[ele].id+"Help").innerHTML="Invalid expire date";
          errCount++;
        }
       
      }
      


      }
      if(errCount>0){
        return false;
      }
      else{
        return true;
      }
  }

  var chargeValidation = function (elements){
    let errCount = 0
    for(let ele in  elements)
   {
      if(elements[ele].required){
      if(elements[ele].value==""){
        elements[ele].classList.add("input-error");
       iframeContainer.getElementById(elements[ele].id+"Help").innerHTML=displayLabel(elements[ele].id)+" is required field";
       errCount++;
    }
    else{
      elements[ele].classList.remove("input-error");
      iframeContainer.getElementById(elements[ele].id+"Help").innerHTML="";
    }
    }
      if(elements[ele].name=="phone_number" && elements[ele].value!=""){
        if(intel.isValidNumber()==false){
          elements[ele].classList.add("input-error");
          iframeContainer.getElementById(elements[ele].id+"Help").innerHTML="Invalid phone number";
          errCount++;
        }
      
      }
      if(elements[ele].name=="cvv" && elements[ele].value!=""){
        if(elements[ele].value.length<3){
          elements[ele].classList.add("input-error");
          iframeContainer.getElementById(elements[ele].id+"Help").innerHTML="Invalid cvv";
          errCount++;
        }
       
      }
      if(elements[ele].name=="expiry" && elements[ele].value!=""){
        if(!expDateValid(elements[ele].value)){
          elements[ele].classList.add("input-error");
          iframeContainer.getElementById(elements[ele].id+"Help").innerHTML="Invalid expire date";
          errCount++;
        }
       
      }
      
    }
    // if(activeTab=="card" && elements.expiry && ((isAuth() && elements.saved && elements.saved.value=="new_card") || !isAuth()) ){
    // if(!expDateValid(elements.expiry.value)){
    //   elements.expiry.classList.add("input-error");
    //   iframeContainer.getElementById("expiryHelp").innerHTML="Invalid expire date";
    //   errCount++;
    // }
    // }
    if(errCount>0){
      return false;
    }
    else{
      return true;
    }

  }
  var getNewCardChargeParams= function (elements,formData){
      formData.append('cardholder_name', elements.cardName.value.trim());
      formData.append('name', merchantName);
      let expDataArr =  elements.expiry.value.split("/");
      formData.append('card_number', elements.cardNumber.value.replaceAll(' ','').trim());
      formData.append('exp_month',expDataArr[0]);
      formData.append('exp_year',expDataArr[1]);
      formData.append('cvc',elements.cvv.value);
      formData.append('currency',initSettings.currency);
      return formData;
  }
 
  var getNewACHChargeParams= function (elements,formData){
    formData.append('name', elements.bankAccountName.value.trim());
    formData.append('routing_number', elements.routingNumber.value.trim());
    formData.append('account_number', elements.accountNumber.value.trim());
    formData.append('account_type', elements.accountType.value);
    formData.append('currency',initSettings.currency);
    return formData;
}
  var getChargeParams = function (elements){
    tokenOnlyCharge = false;
    let formData = new FormData();
    if(activeTab == "card"){
      if((isAuth() && elements.cardNumber && elements.cardNumber!="" ) || (isAuth() && authNoSaved==true) || !isAuth()){
        formData = getNewCardChargeParams(elements,formData);
      }
      else{
        if(initSettings.tokenOnly && isAuth()){
          tokenOnlyCharge = true;
        }
        formData =getSavedCardChargeParams(elements,formData);
       
      }
     
      save_new_checkbox = elements.save_new_checkbox && elements.save_new_checkbox.checked ? elements.save_new_checkbox.value:"";
    }
    else if(activeTab == "ach"){
      if((isAuth() && elements.routingNumber && elements.routingNumberr!="" ) || (isAuth() && authNoSaved==true) || !isAuth()){
        formData = getNewACHChargeParams(elements,formData)
      }
      else{
        if(initSettings.tokenOnly && isAuth()){
          tokenOnlyCharge = true;
        }
        formData =getSavedACHChargeParams(elements,formData)
      }
      save_new_checkbox = elements.save_new_checkbox && elements.save_new_checkbox.checked ? elements.save_new_checkbox.value:"";
    }
    if(initSettings.fields.billing.length>0){
     let billing_elements = iframeContainer.forms.billing_info.elements;
      let billing_info = {
        'address':billing_elements.address.value,
        'country':billing_elements.country.value,
        'state':billing_elements.state.value,
        'city':billing_elements.city.value,
        'postal_code':billing_elements.postal_code.value
      }
      formData.delete('address');
      formData.append('address', billing_elements.address.value && billing_elements.address.value!=""?billing_elements.address.value:"Test ACH Address");
      formData.append("billing_info", JSON.stringify(billing_info));

    }
    if(initSettings.fields.additional.length>0){
      let additional_elements = iframeContainer.forms.additional_info.elements;
      let additional_info = {
        'name':additional_elements.name?additional_elements.name.value:"",
        'email':additional_elements.email_address?additional_elements.email_address.value:"",
        'phone_number':additional_elements.phone_number?additional_elements.phone_number.value:"",
        'description':additional_elements.description?additional_elements.description.value:""
      }
     
      formData.append('description', additional_elements.description && additional_elements.description!=""?additional_elements.description.value:"Hosted payment checkout");
      formData.append('email', additional_elements.email_address?additional_elements.email_address.value:merchantEmail); // Need to remove that
      formData.append("additional_info", JSON.stringify(additional_info));
    }
    else{
      formData.append('description', "Hosted payment checkout");
      formData.append('email', merchantEmail); // Need to remove that
    }
    return formData;
  }

// Get crypto details
  const getCryptoDetails = async (parentElem) => {
    renderLoading(parentElem);
    let formData = new FormData();
    formData.append('name',merchantName);
    formData.append('email', merchantEmail);
    formData.append('description', "Payment checkout ");
    formData.append('amount', Number(initSettings.amount).toFixed(2));
    formData.append('currency', 'satoshi');
    formData.append('payment_account', cryptoPaymentAccount);
    formData.append('success_url', domainUrl+"/webhook/crypto");
    formData.append('callback_url', domainUrl+"/webhook/crypto");

    fetch(apiUrl+'/charges', {
      method: 'POST',
      headers: {
        'Client-Token': clientToken
      },
      body: formData,
    }).then(async response => {
        if ([200,201].includes(response.status)) {
          let result = await response.json();
          cryptoChanrgeId = result.charge_id;
          renderCryptoElements(parentElem,result.data);
          loading.style.display ="none";
        }

      }).catch((error) => {
        console.log('Error:', error);
      });
    return;
  }

  // charge with save card for unverified user
  const chargeWithSaved = async (elements) => {
    const emitter = new lyfPayCheckout(clientToken);
    errorDiv.innerHTML ="";
    if(!chargeValidation(elements)){
      emitter.emit('error', {
        "type":"error",
        "data":{"message":"Validation Error.."}
      }); 
      return false;
    }
   chargeFormData = getChargeParams(elements);
   chargeTriggered =true;
   renderCustomerAuth(); 
  }


  // Charge api call
  
  const charges = async (elements) => {
    const emitter = new lyfPayCheckout(clientToken);
    errorDiv.innerHTML ="";
    let formData;
    if(!chargeTriggered){
    if(!chargeValidation(elements)){
      emitter.emit('error', {
        "type":"error",
        "data":{"message":"Validation Error.."}
      }); 
      return false;
    }
      formData = getChargeParams(elements);
    }
    else{
      formData =chargeFormData;
    }
    if(save_new_checkbox=="save_new"){
      formData = getSavedNewParams(formData); 
      
    }
    if(isAuth()){
      let customer_id = localStorage.getItem('customer_id');
      formData.delete('email');
      if(customer_id!="" && customer_id!=null && customer_id!="null"){
        formData.append('customer',customer_id);
        formData.append('customer_id',customer_id);
        formData.delete('username');
      }
      else{
        formData.append('email',localStorage.getItem('card_search_value'));
      }
     
    }
    formData.append("payment_method",activeTab);
   
    emitter.emit('process', {
      "type":"process",
      "data":{"message":"Processing.."}
    }); 
    emitter.emit('process', "processing"); 
   
   
    let chargeApiUrl = activeTab=="card"?"/charges":"/ach/charges"
    if(initSettings.tokenOnly){
      chargeApiUrl =  activeTab=="card"?"/card":"/ach/account";
      formData.append("single_use",true);
      if(tokenOnlyCharge){
        let returnParams = activeTab=="card"?selectedSavedCards:selectedSavedAccounts;

        emitter.emit('done', {
          "type":"success",
          "data":{...returnParams,"cvc":elements.cvv.value}
        }); 
        return;
      }
    }

    showLoading();
    fetch(apiUrl+chargeApiUrl, {
      method: 'POST',
      headers: {
        'Client-Token': clientToken
      },
      body: formData,
    }).then(async response => {
      let result = await response.json();
      if ([200, 201].includes(response.status) && result.status==true) {
        emitter.emit('done', {
          "type":"success",
          "data":result
        }); 
        hideLoading();
        chargeFormData = {};
        chargeTriggered =false;
        if(!initSettings.tokenOnly){
          renderPaymentReceipt(result);
        }
        else{
          skipToContinue();
        }
        
       
      }
      else{
        hideLoading();
        chargeFormData = {};
        chargeTriggered =false;
        let msg =result.message && result.message!=""?result.message:"Payment Failed!!. Please try again later.";
        renderErrorPage(msg);
        emitter.emit('error', {
          "type":"error",
          "data":result
        }); 
      
      }
       
      resizeIframe();
      }).catch((error) => {
        hideLoading();
        emitter.emit('error', {
          "type":"error",
          "data":error
        }); 
        console.error('Error:', error);
      });
    return;
  }

  // Load css inside iframe head tag

  var loadJs = async function (src, parentElem) {
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.src = src;
    parentElem.getElementsByTagName("head")[0].appendChild(s);
  }

  var loadMainJs = async function (src) {
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.src = src;
    document.head.appendChild(s);

  }

  var loadMainCss = async function (src) {
    var cssLink = document.createElement("link")
    cssLink.href = src;
    cssLink.rel = "stylesheet";
    cssLink.type = "text/css";
    document.head.appendChild(cssLink);

  }


  // Load css inside iframe head tag

  var loadCss = function (src, parentElem) {
    var cssLink = document.createElement("link")
    cssLink.href = src;
    cssLink.rel = "stylesheet";
    cssLink.type = "text/css";
    parentElem.getElementsByTagName("head")[0].appendChild(cssLink);
  }

  //Create Iframe & append iframe to merchant's div container

  var createIframe = function (parentElem) {
    var iframe = document.createElement('iframe');
    iframe.style = "top:0px; left:0px; bottom:0px; height:96vh;right:0px; width:100%;border:none; margin:0; padding:0;  z-index:999999;"
    //iframe.src = 'about:';
    iframe.src ="javascript:";

    var body = document.getElementById(parentElem);
    //body.innerHTML="";
    body.appendChild(iframe);
    return iframe.contentWindow.document
  }

/* Rendering payment receipt */
var renderPaymentReceipt = function(data){
  if(initSettings.showReceipt && initSettings.showReceipt==true){
  var parentElem = iframeContainer.getElementById('container');
  containerDiv.classList.add("h-screen");
  parentElem.innerHTML = ' <div class="max-w-xl w-[350px] h-fit md:w-[544px] mx-auto px-8 py-12 rounded-lg mt-[104px] bg-white flex justify-center items-center">'+
                  '<div class="flex flex-col w-full md:w-[350px]">'+
                    '<div class="bg-success-200 h-[160px] w-[160px] rounded-full flex justify-center items-center self-center"><img src="'+appUrl+'/img/dick.svg" width="67" height="50"> </div>'+
                    '<div class="mt-5 w-full flex flex-col gap-4">'+
                        '<div class="flex items-center justify-between text-sm font-normal"><p class="opacity-60">Date</p><p>'+new Date().toLocaleString()+'</p> </div>'+
                        '<div class="flex items-center justify-between text-sm font-normal"><p class="opacity-60">Transaction Id</p><p>'+data.charge_id+'</p> </div>'+
                        '<div class="flex items-center justify-between text-sm font-normal"><p class="opacity-60">Payment Method</p><p>'+activeTab+'</p> </div>'+
                        '<div class="flex items-center justify-between text-sm font-normal"><p class="opacity-60">Total</p><p>'+getAmount()+'</p> </div>'+
                      '</div>'+
                    '<button onclick="parent.window.location.reload()" class="bg-primary-300 hover:bg-primary-200 font-normal text-base leading-[19px] flex items-center justify-center cursor-pointer p-4 rounded-lg border-[none] text-white mt-8">Done</button>'+
                    '</div>'+
                    '</div>'
  }
} 

/* Rendering payment receipt */
var renderErrorPage = function(msg){
  var parentElem = iframeContainer.getElementById('container');
  containerDiv.classList.add("h-screen");
  parentElem.innerHTML = ' <div class="max-w-xl w-[350px] h-fit md:w-[544px] mx-auto px-8 py-12 rounded-lg mt-[104px] bg-white flex justify-center items-center">'+
                  '<div class="flex flex-col w-full md:w-[350px]">'+
                    '<div class="bg-red h-[160px] w-[160px] rounded-full flex justify-center items-center self-center"><img src="'+appUrl+'/img/wrong.svg" width="67" height="50"> </div>'+
                    '<div class="mt-5 w-full flex flex-col gap-4">'+
                        '<div class="flex items-center justify-between text-sm font-normal "><p class="text-[16] font-medium error">'+msg+'</p> </div>'+
                        
                      '</div>'+
                    '<button onclick="parent.window.location.reload()" class="bg-primary-300 hover:bg-primary-200 font-normal text-base leading-[19px] flex items-center justify-center cursor-pointer p-4 rounded-lg border-[none] text-white mt-8">Done</button>'+
                    '</div>'+
                    '</div>'
}

/* On Change Country  */

var onChangeCountry = function(val){
  
  var stateSelectSpan = iframeContainer.querySelector("#state_span");
  stateSelectSpan.innerHTML ="";
  let filterState= initSettings.fields.billing.filter(s_ele => s_ele.name==="state");
  let stateRequired = filterState.length>0 && (filterState[0].required==true || filterState[0].required==false)?filterState[0].required:billingFields[2].required;
  let stateValue = filterState.length>0 && (filterState[0].value!="")?filterState[0].value:billingFields[2].value;
 
  if(val=="US" || val=="CA"){
    var input = document.createElement("select");
    input.name ="state";
    input.id = "state";
    input.required = stateRequired ;
    input.classList.add('form-control');
    input.classList.add('select-box');
    let options = val=="US" ?usStates :candaStates;
    options.forEach(function (opt) {
      var option = document.createElement("option");
      option.value = opt.code?opt.code:opt;
      option.text = opt.name?opt.name:opt;
      if(stateValue== option.value)
       option.selected = "selected"; 
      input.appendChild(option);
    });
    stateSelectSpan.appendChild(input)
  } 
  else{
   
    var input = document.createElement('input');
    input.type = "text";
    input.name ="state";
    input.id = "state";
    input.value = stateValue;
    input.required = stateRequired ;
    input.placeholder = "State";
    input.classList.add('form-control');
    stateSelectSpan.appendChild(input);
  }

}

var digitValidate = function(ele){
  console.log(ele.value);
  ele.value = ele.value.replace(/[^0-9]/g, '');
  if (ele.value !== '') {
    ele.style.backgroundColor = "#0000000a"; 
    ele.style.fontColor="#000000 !important" // Change to your desired color
  } else {
    ele.style.backgroundColor = "";
    ele.style.fontColor=""  // Reset background color if input is empty
  }
}

var tabChange = function(val,parentElem,inline,inlineParent){
    let ele = iframeContainer.querySelectorAll('.otp');
   
    if(ele[val] && ele[val-1].value != ''){
      ele[val].focus();
    }else if(ele[val] && ele[val-1].value == ''){
      ele[val-2].focus();
    } 
    let otp_val = "";  
    let otp_count = 0;  
    ele.forEach(el => {

      if(el.value!=''){
        otp_count++
        otp_val = otp_val+el.value;
      }
    });
    let otp_elem = iframeContainer.querySelector("#customer_otp");
    otp_elem.value= otp_val;
    if(otp_count==6 && inline){
      verifyCustomerOTP(parentElem,inlineParent);
    }

}

var formatExpireDate = function (event,input){
  if(isNaN(event.key) && event.key !== 'Backspace' && event.key !== 'Tab') {
    event.preventDefault();
  }
  if(input.value.length==2 && event.key !== 'Backspace' && event.key !== 'Tab'){
    input.value = input.value+"/"
  }
}


var formatCardNumber = function (event,input){
  if(isNaN(event.key) && event.key !== 'Backspace' && event.key !== 'Tab') {
    event.preventDefault();
  }
  if(input.value.length<19 && input.value.length%5==0 && event.key !== 'Backspace' && event.key !== 'Tab'){
    input.value = input.value+" "
  }
}

  /* Rendering dynamic Form Elements  */

  var renderFormElements = async function (params, type, parentElem) {
    switch (type) {
      case 'tel':
      case 'text':
      case 'number':  
      var formFieldDiv = document.createElement('div');
      formFieldDiv.classList.add('form-field',"flex","flex-col","gap-2","w-full");
        var label = document.createElement('p');
        label.classList.add('label',"capitalize","font-semibold","text-sm");
        var textNode = document.createTextNode(displayLabel(params.label));
        label.appendChild(textNode)
        if(params.required){
          var reqSpan = document.createElement('span');
          reqSpan.innerHTML = " *"
          reqSpan.classList.add('required');
          label.appendChild(reqSpan);
        }
        formFieldDiv.appendChild(label);
        var input = document.createElement('input');
        input.type = type=='tel'?'tel':'text';
      
        if(type=="number"){
          input.addEventListener("keydown", function (event) {
            if(isNaN(event.key) && event.key !== 'Backspace' && event.key !== 'Tab') {
              event.preventDefault();
            }
          })
        }
        if(params.maxLength)
          input.maxLength = params.maxLength;
        if(params.value)
         input.value = params.value; 
        input.name = params.id;
        input.id = params.id;
        if(params.id=="expiry"){
          input.addEventListener("keydown", function (event) {
            formatExpireDate(event,input)
          })
        }
        if(params.id=="cardNumber"){
          input.addEventListener("keydown", function (event) {
            formatCardNumber(event,input)
          })
        }
        input.required = params.required;
        if(params.pattern)
          input.pattern = params.pattern; 
        if(type!="tel")
          input.placeholder = params.placeHolder?params.placeHolder:displayLabel(params.label);
        input.classList.add('form-control',"border","border-light-300","text-base","font-normal","leading-[19px]","p-4","rounded-lg","border-solid");
        formFieldDiv.appendChild(input);
        var span = document.createElement('span');
        span.classList.add('helper-text');
        span.id = params.id+"Help";
        formFieldDiv.appendChild(span);
        parentElem.appendChild(formFieldDiv);
        if(type=='tel'){
          setTimeout(function(){
            intel =window.intlTelInput(input, {
              initialCountry: "us",
              strictMode: true,
             });
        }, 910);
  
        }
        break;
      case 'select':
        var formFieldDiv = document.createElement('div');
        formFieldDiv.classList.add('form-field',"flex","flex-col","gap-2","w-full");
        var label = document.createElement('p');
        label.classList.add('label',"capitalize","font-semibold","text-sm");
        var textNode = document.createTextNode(displayLabel(params.label));
        label.appendChild(textNode);
        if(params.required){
          var reqSpan = document.createElement('span');
          reqSpan.innerHTML = " *"
          reqSpan.classList.add('required');
          label.appendChild(reqSpan);
        }
        formFieldDiv.appendChild(label);
        var selectSpan = document.createElement('span');
        selectSpan.id = params.id+"_span";
      
        var input = document.createElement("select");
        input.name = params.id;
        input.id = params.id;
        input.required = params.required;
        input.classList.add('form-control',"w-full","border","border-[color:var(--gray-light)]","text-base","font-normal","leading-[19px]","bg-[white]","p-4","rounded-lg","border-solid");
       
        var options = params.options
        options.forEach(function (opt) {
          var option = document.createElement("option");
          option.value = opt.code?opt.code:opt;
          option.text = opt.name?opt.name:opt;
          if(params.value== option.value)
            option.selected = "selected"; 
          input.appendChild(option);
        });
        if(params.id=="country"){
          input.addEventListener("change", function () {
            onChangeCountry(this.value);
          })
        }
        selectSpan.appendChild(input);
        formFieldDiv.appendChild(selectSpan);
        var span = document.createElement('span');
        span.classList.add('helper-text');
        span.id = params.id+"Help";
        formFieldDiv.appendChild(span);
        parentElem.appendChild(formFieldDiv);
        
        break;
      case 'otp_text_box':
        var formFieldDiv = document.createElement('div');
        formFieldDiv.classList.add('form-field',"flex","flex-row","justify-center","gap-2");
        if(params.box_count>0){
          for(let i=1; i<=params.box_count;i++){
            let input = document.createElement("input");
            input.name = params.id+"_"+i;
            input.autocomplete = "off";
            input.id = params.id+"_"+i;
            input.required = params.required;
            input.maxLength = 1;
            input.classList.add("w-12","h-[52px]","border","border-light-200","text-base","font-normal","leading-[19px]","p-4","rounded-lg","border-solid","placeholder:text-light-400","text-black","otp");
            input.addEventListener("input", function (event) {
              digitValidate(input)
            })
            input.addEventListener("keyup", function (event) {
              tabChange(i,parentElem,params.inline,params.inline_parent)
            })
            formFieldDiv.appendChild(input);
           
          }
          let input = document.createElement("input");
          input.type = "hidden";
          input.name = params.id;
          input.id = params.id;
          formFieldDiv.appendChild(input);

        }
        parentElem.appendChild(formFieldDiv);
        break;
      case 'radio':
        // code block
        break;
      default:
      // code block
    }
  }


  // Render input elements of customer saved 
  var renderEditSavedCardElements = function (parentElem,params) {
    let editSavedCardForm = document.createElement('form');
    editSavedCardForm.id = "edit_saved_card";
    editSavedCardForm.name = "edit_saved_card";
    var twoFieldDiv = document.createElement('div');
    twoFieldDiv.classList.add("two-fields","flex","justify-between","items-center","gap-4");
    renderFormElements({ "label": "Expiry", "id": "expiry","required":true,"placeHolder":"MM/YYYY","pattern":'[0-9]{1,2}/[0-9]{4}',"maxLength":7}, 'text', twoFieldDiv);
    renderFormElements({ "label": "CVV","required":true, "id": "cvv","maxLength":4 }, 'number', twoFieldDiv);
    editSavedCardForm.appendChild(twoFieldDiv);
    renderFormElements({ "label": "Name on Card", "id": "cardName","required":false}, 'text', editSavedCardForm);
    renderButton("Update","primary", editSavedCardForm,updateSaved,{"class":"update_btn","form":"edit_saved_card","card_id":params.card_id});
    let update_msg = document.createElement("div");
    update_msg.id = "update_msg";
    editSavedCardForm.appendChild(update_msg);
    parentElem.appendChild(editSavedCardForm);

    
  }

 
  // Render input elements of cards 
  var renderCardInputElements = async function (parentElem) {
   
    renderFormElements({ "label": "Card Number", "id": "cardNumber","required":true,"placeHolder":"4111 1111 1111 1111","maxLength":20  }, 'text', parentElem);
    var twoFieldDiv = document.createElement('div');
    twoFieldDiv.classList.add("two-fields","flex","justify-between","items-center","gap-4");
    renderFormElements({ "label": "Expiry", "id": "expiry","required":true,"placeHolder":"MM/YYYY","pattern":'[0-9]{1,2}/[0-9]{4}',"maxLength":7}, 'text', twoFieldDiv);
    renderFormElements({ "label": "CVV","required":true, "id": "cvv","maxLength":4 }, 'number', twoFieldDiv);
    parentElem.appendChild(twoFieldDiv);
    renderFormElements({ "label": "Name on Card", "id": "cardName","required":true}, 'text', parentElem);
    if(initSettings.saveCard){
    let saveCardCheck = document.createElement("div");
    saveCardCheck.classList.add("tnc","flex","items-center","gap-4");
    let def_checked = isAuth()?"checked":"";
    saveCardCheck.innerHTML = 
    '<input class="border border-light-300 text-base font-normal leading-[19px] rounded-lg border-solid" type="checkbox" value="save_new" name="save_new_checkbox" '+def_checked+'>'+
    '<p class="uppercase font-medium text-xs"> Save card securely for future payment</p>';
    parentElem.appendChild(saveCardCheck);
    }
  }
// Render new card Elements with buttons inside boxDiv
var renderCardElements = async function (parentElem) {
  activeTab ="card";
  if(!isAuth() && initSettings.saveCard){
    //renderButton("Show Saved Cards","secondary",parentElem,renderSavedCardsAuth); 
    let savedCardLink = document.createElement("div");

    savedCardLink.classList.add("cursor","bg-bright-gray","rounded-lg","flex","justify-center","items-center","gap-2","py-4");
    savedCardLink.innerHTML =  '<img src="'+appUrl+'/img/lock.svg"   width="16" height="17"/><p class="text-sm font-inter text-primary-300 font-medium">Show Saved Cards</p>';
    parentElem.appendChild(savedCardLink);
    customerInlineAuthForm = document.createElement("div");
    customerInlineAuthForm.classList.add("gap-4","mt-5");
    customerInlineAuthForm.id = "customer_inline_auth_form";
    savedCardLink.addEventListener("click", function () {
      renderCustomerAuth(customerInlineAuthForm);
      inlineAuthForm=true;
     })
     parentElem.appendChild(customerInlineAuthForm);

  }
  let boxDiv =  document.createElement("div");
  boxDiv.classList.add("clearfix","mt-5","mb-9");
  renderCardInputElements(boxDiv);
  parentElem.appendChild(boxDiv);
  renderPaymentInfoButtons(parentElem);
  
}

var renderPaymentInfoButtons =  function(parentElem){
  let btnDiv =  document.createElement('div');
  btnDiv.classList.add("clearfix",'action-btn');
  if(initSettings.fields.billing.length>0){
    submitBtn = renderButton("Next (Billing Info)",activeTab=="ach"?"disabled":"primary",btnDiv,handlePrevNext,{"type":"billing_info","current_page":"payment_info","action":"next"}); 
  }
  else if(initSettings.fields.additional.length>0){
    submitBtn = renderButton("Next (Additional Info)",activeTab=="ach"?"disabled":"primary",btnDiv,handlePrevNext,{"type":"additional_info","current_page":"payment_info","action":"next"}); 
  }
  else if(initSettings.showSubmitButton){
    let btn_value = initSettings.showTotal? initSettings.submitButtonText+" ("+getAmount()+")":initSettings.submitButtonText;
    submitBtn = renderButton(btn_value,activeTab=="ach"?"disabled":"primary",btnDiv,handlePayNow,{"type":"payment_info"}); 
  }
  parentElem.appendChild(btnDiv);

}

var handlePrevNext = function(parentElem,params){
  let type = params.type;
  let current_page = params.current_page;
  let action = params.action;
  let payment_info = iframeContainer.getElementById("payment_info");
  let billing_info = iframeContainer.getElementById("billing_info");
  let additional_info = iframeContainer.getElementById("additional_info");
  if(action=="next"){
  let elements =  iframeContainer.forms[current_page].elements;
  if(!chargeValidation(elements)){
      return false;
  }
  }
  if(type=="billing_info"){
    pageDiv.classList.add("hidden");
    billing_info.classList.remove("hidden");
    payment_info.classList.add("hidden");
    additional_info.classList.add("hidden");
  }
  else if(type=="additional_info"){
    pageDiv.classList.add("hidden");
    additional_info.classList.remove("hidden");
    payment_info.classList.add("hidden");
    billing_info.classList.add("hidden");
   
  }
  else if(type=="payment_info"){
    pageDiv.classList.remove("hidden");
    payment_info.classList.remove("hidden");
    additional_info.classList.add("hidden");
    billing_info.classList.add("hidden");
  }
}

var handlePayNow = function(parentElem,params){
  let current_page = params.type;
  let elem =  iframeContainer.forms[current_page].elements;
  if(!chargeValidation(elem)){
      return false;
  }
  let elements = iframeContainer.forms.payment_info.elements;
      errorDiv.innerHTML ="";
      if(elements.save_new_checkbox && elements.save_new_checkbox.checked && elements.save_new_checkbox.value=="save_new" && !isAuth()){
        let payment_info = iframeContainer.getElementById("payment_info");
  let billing_info = iframeContainer.getElementById("billing_info");
  let additional_info = iframeContainer.getElementById("additional_info");
        if(initSettings.fields.billing.length>0){
          billing_info.classList.add("hidden");
        }
        if(initSettings.fields.additional.length>0){
          additional_info.classList.add("hidden");
        }
        if(payment_info){
          payment_info.classList.add("hidden");
        }
        pageDiv.classList.remove("hidden");
        chargeWithSaved(elements)
      }
      else{
        charges(elements);
      }
}



  // Rendering Card Form Elements

  var renderPaymentInfoElements = async function (parentElem,currentTab) {
    let paymentForm = document.createElement('form');
    paymentForm.id = "payment_info";
    paymentForm.name = "payment_info";
    parentElem.appendChild(paymentForm);
      if(isAuth()){
        activeTab = currentTab; 
        getCustomerSaved(paymentForm);
      }
      else{
        activeTab = currentTab; 
        if(currentTab=="ach")
          renderACHElements(paymentForm);
        else  
          renderCardElements(paymentForm);
      }
     
  }

  var renderButton =  function (val,type,parentElem,callback,args={},eventCall=true) {
    let btnDiv =  document.createElement('div');
    btnDiv.classList.add("mt-5","w-full","flex","flex-col","gap-2");
    let button = document.createElement('button');
    button.type ="button";
    if(activeTab=="ach" && type=="disabled"){
      button.disabled="disabled";
    }
    let class_arg = args?.class && args?.class!=""?args?.class:"primary_btn";
    if(type=="primary" || type=="disabled")
      button.classList.add(class_arg,"btn-primary","pay-now","bg-primary-300","hover:bg-primary-200","font-normal","text-base","leading-[19px]","flex","items-center","justify-center","cursor-pointer","p-4","rounded-lg","border-[none]","text-white","w-full");
    else
       button.classList.add("btn-secondaryy","bg-white","hover:bg-primary-200","hover:text-white","font-normal","text-base","leading-[19px]","flex","items-center","justify-center","cursor-pointer","p-4","rounded-lg","border","border-primary-300","text-primary-300");
    button.innerHTML = val;
    if(eventCall){
    button.addEventListener("click", function () {
      args.button = button;
      callback(parentElem,args);
    })
    }
    btnDiv.appendChild(button)
    parentElem.appendChild(btnDiv);
    return button;
  }

  // Skip Button Action

  var skipToContinue  = function () {
    let payment_info = iframeContainer.getElementById("payment_info");
    pageDiv.classList.remove("hidden");
    payment_info.classList.remove("hidden");
    customerMainAuthForm.innerHTML="";
    errorDiv.innerHTML = "";
    chargeTriggered = false;
    //renderPaymentInfo();
    //resizeIframe();
  }
  
  // Render Customer Auth 

  var renderCustomerAuth = function (parent_elem ="") {
    let mainDiv = document.createElement('div');
    mainDiv.classList.add("flex","flex-col","gap-2");
    let parentElem = customerAuthHeader(parent_elem,mainDiv,"auth");
   let savedCardAuthForm = document.createElement('form');
    savedCardAuthForm.id = "saved_card_auth_form";
    savedCardAuthForm.name = "saved_card_auth_form";
    renderFormElements({ "label": "Email", "id": "email_or_phone","required":true,"value":""}, 'text',savedCardAuthForm);
    if(parent_elem && parent_elem!=""){
      let inlineErrorDiv = document.createElement('div');
      inlineErrorDiv.setAttribute("id", "inline_error");
      inlineErrorDiv.classList.add("error");
      savedCardAuthForm.appendChild(inlineErrorDiv);
      mainDiv.appendChild(savedCardAuthForm);
      
      parentElem.appendChild(mainDiv);
      let emailElem = iframeContainer.getElementById("email_or_phone");
      emailElem.addEventListener("blur", function () {
        sendCustomerOTP(savedCardAuthForm,false,parent_elem);
      })
    }
    else{ 
     let getOtpBtn = renderButton("Get OTP","primary", savedCardAuthForm,'',{},false);
     let inlineErrorDiv = document.createElement('div');
     inlineErrorDiv.setAttribute("id", "inline_error");
     inlineErrorDiv.classList.add("error");
     savedCardAuthForm.appendChild(inlineErrorDiv);
     mainDiv.appendChild(savedCardAuthForm);
     parentElem.appendChild(mainDiv);
     getOtpBtn.addEventListener("click", function () {
      sendCustomerOTP(savedCardAuthForm);
    })
   
    }

  }

  //Customer auth header

  var customerAuthHeader = function (parent_elem,mainDiv,type="") {
    let parentElem = customerMainAuthForm;
    if(parent_elem && parent_elem!=""){
      parentElem = parent_elem;
    }
    else{
      pageDiv.classList.add("hidden");
    }
    parentElem.innerHTML = "";
    let modalTitleDiv =  document.createElement('div');
    modalTitleDiv.classList.add("flex","flex-row","justify-between","w-full");
    let titleDiv =  document.createElement('div');
    titleDiv.classList.add("flex","flex-col","gap-2");
    let title =  document.createElement('p');
    title.classList.add("label","capitalize","font-semibold","text-sm");
    title.innerHTML = "Use Your Saved Info";
    titleDiv.appendChild(title);
    let ptag = document.createElement('p');
    ptag.classList.add("font-inter","text-sm","text-light-400");
    ptag.innerHTML = type=="otp"?"Enter OTP sent to your email/ mobile no.":"Securely pay with your saved info for faster checkout next time."
    titleDiv.appendChild(ptag);

    modalTitleDiv.appendChild(titleDiv);
    let closeDiv =  document.createElement('span');
    closeDiv.classList.add("cursor");
    closeDiv.innerHTML = '<img src="'+appUrl+'/img/close.svg?v=1" width="32" height="30"/>'
    closeDiv.addEventListener("click", function () {
      if(parent_elem && parent_elem!=""){
        parentElem.innerHTML = "";
        inlineAuthForm=false;
      }
      else{
        skipToContinue()
      }
    })
    modalTitleDiv.appendChild(closeDiv);
  
    mainDiv.appendChild(modalTitleDiv);
    return parentElem;


  }

  // Render Customer OTP Form
  var renderCustomerOTPForm = function (parent_elem ="") {
   
    let mainDiv = document.createElement('div');
    mainDiv.classList.add("flex","flex-col","gap-2");
    let parentElem = customerAuthHeader(parent_elem,mainDiv,"otp");
   

    let savedCardOtpForm = document.createElement('form');
    savedCardOtpForm.id = "saved_card_otp_form";
    savedCardOtpForm.name = "saved_card_otp_form";

    let itemDiv = document.createElement('div');
    itemDiv.classList.add("flex","flex-col","justify-center","items-center","gap-4"); 
    
    renderFormElements({ "label": "OTP", "id": "customer_otp","required":true,"maxLength":1,"placeHolder":"" ,"box_count":6,"inline": parent_elem && parent_elem!=""?true:false,"inline_parent": parent_elem}, 'otp_text_box',itemDiv);
    let resendDiv = document.createElement("div");
    let resendText =  document.createElement("p");
    resendText.id = "resend_text";
    resendText.classList.add("flex","gap-1","font-inter","text-sm","leading-16-94","font-normal","text-light-400");
    let timerDiv = document.createElement("div");
    timerDiv.id ="otp_timer"
    timerDiv.classList.add("flex");
    timerDiv.innerHTML =  '<img src="'+appUrl+'/img/info.svg"  width="16" height="17"/>&nbsp;'+
                        '<span id="timer" class="font-inter text-sm leading-16-94 font-normal text-deep-carmine-pink"></span>&nbsp; until Resend OTP';
    resendText.appendChild(timerDiv);  
    resendDiv.appendChild(resendText);
   
    itemDiv.appendChild(resendDiv);
    if(!parent_elem || parent_elem==""){
      let confirmCodeBtn = renderButton("Confirm Code","primary",itemDiv,'',{},false);
    confirmCodeBtn.addEventListener("click", function () {
      verifyCustomerOTP(savedCardOtpForm,parent_elem);
   })
   itemDiv.appendChild(confirmCodeBtn);
    }
   
    let inlineErrorDiv = document.createElement('div');
    inlineErrorDiv.setAttribute("id", "inline_error");
    inlineErrorDiv.classList.add("error");
    itemDiv.appendChild(inlineErrorDiv);
    savedCardOtpForm.appendChild(itemDiv);
  mainDiv.appendChild(savedCardOtpForm);
  parentElem.appendChild(mainDiv);
    clearTimeout(timeoutHandle);
    countdown(3);
   
  }

  
  // Render Customer Saved Cards / accounts
  var renderCustomerSaved = function (parentElem,data) {
   
    let firstParent = document.createElement("div");
    firstParent.classList.add("flex","flex-col","gap-8","hidden","change_other_title");
    let titleContainer = document.createElement("div");
    titleContainer.classList.add("flex","flex-row","justify-between","w-full");
    let savedTitle = activeTab=="card"?'Change Card':"Change Account";
    let savedDesc = activeTab=="card"?'Change primary card for future payment':"Change primary account for future payment";
    
    let titleDiv = document.createElement("div");
    titleDiv.classList.add("flex","flex-col","gap-2"); 
    titleDiv.innerHTML='<p class="label capitalize font-semibold text-sm saved-info-title">'+
                      savedTitle +
                      '</p>'+
                      '<p class="font-inter text-sm text-light-400 saved-info-desc">'+ savedDesc+'</p>';
    titleContainer.appendChild(titleDiv);                  
    let closeDiv =  document.createElement('span');
    closeDiv.classList.add("cursor");
    closeDiv.innerHTML = '<img src="'+appUrl+'/img/close.svg?v=1" width="32" height="30"/>'
    closeDiv.addEventListener("click", function () {
      parentElem.innerHTML = "";
      renderCustomerSaved(parentElem,data);
    })                  
    titleContainer.appendChild(closeDiv);
    firstParent.appendChild( titleContainer);
    parentElem.appendChild(firstParent);
    let formDiv = document.createElement("div");
    formDiv.classList.add("mt-5","flex","flex-col","gap-4");
    let isDefailtExist = data.filter(function(itm){
      return itm.is_default==1;
    });
    
    data.forEach(function (param,idx) {
      renderSavedElements(formDiv,param,isDefailtExist,idx ) 
    })
    renderSavedNewElements(formDiv); 
    parentElem.appendChild(formDiv);
   
    
  //  renderSavedCard(parentElem,{card_id:"new_card"},"new_card",true); 
   
    
  }

  // render saved new card / account

  var renderSavedNewElements  =  function(parentElem){
    let newElemDiv =  document.createElement("div");
    newElemDiv.classList.add("cursor","hidden","bg-bright-gray","rounded-lg","p-4","save_new_info");
    let aTag =  document.createElement("a");
    aTag.classList.add("cusrsor","flex","gap-2");
    let aTagText = activeTab=="card"?"New Card":"New Account"
    aTag.innerHTML = '<img src="'+appUrl+'/img/plus_icon.svg" height="17" width="16" />'+
                    ' <p class="text-sm leading-16-94 font-medium font-inter text-primary-300">'+aTagText+'</p>';
    newElemDiv.appendChild(aTag);
    let newElemItemDiv =  document.createElement("div");
    newElemItemDiv.classList.add("hidden","p-4");
    newElemDiv.addEventListener("click", function () {
      hideSavedOther();
      newElemDiv.classList.add("hidden");
      let savedInfoTitle =  iframeContainer.querySelector(".saved-info-title");
      savedInfoTitle.innerHTML = activeTab=="card"?"New Card":"New Account";
      let savedInfoDesc =  iframeContainer.querySelector(".saved-info-desc");
      savedInfoDesc.innerHTML = activeTab=="card"?"Create new card":"Create new account";
      let save_change_other = iframeContainer.querySelectorAll(".save_change_other");
      save_change_other.forEach(el => {
        el.classList.add("hidden");
      });
      
      let menuIcons= iframeContainer.querySelectorAll(".main_action");
      menuIcons.forEach(el => {
        el.classList.add("hidden");
      });
      let optionData= iframeContainer.querySelectorAll(".option-data");
      optionData.forEach(el => {
        el.classList.add("hidden");
      });
      newElemItemDiv.classList.remove("hidden");
      if(activeTab=="card")
        renderCardInputElements(newElemItemDiv);
      else
        renderACHInputElements(newElemItemDiv);
      
      renderPaymentInfoButtons(newElemItemDiv);

    })
    parentElem.appendChild(newElemDiv);
    parentElem.appendChild(newElemItemDiv);
  }

  //Hide saved other cards / accounts
  var hideSavedOther  =  function(){
    let allSavedCVV = iframeContainer.querySelectorAll(".selected_saved_elem");
    allSavedCVV.forEach(el => {
      el.innerHTML = "";
      el.classList.add("hidden");
    });
    let allSavedCards = iframeContainer.querySelectorAll(".saved_info_list");
     allSavedCards.forEach(el => {
        el.classList.add("hidden");
      });
  }


  // Change Other for saved card / account

  var handleSavedOther  =  function(){
    let allSavedCards = iframeContainer.querySelectorAll(".saved_info_list");
    allSavedCards.forEach(el => {
       el.classList.remove("hidden");
     });
     let allSavedCVV = iframeContainer.querySelectorAll(".selected_saved_elem");
     allSavedCVV.forEach(el => {
       el.innerHTML = "";
       el.classList.add("hidden");
     });
     let changeOtherTitle= iframeContainer.querySelector(".change_other_title");
     changeOtherTitle.classList.remove("hidden");
     let menuIcons= iframeContainer.querySelectorAll(".main_action");
     menuIcons.forEach(el => {
       el.classList.remove("hidden");
     });
     let saveNewInfo= iframeContainer.querySelector(".save_new_info");
     saveNewInfo.classList.remove("hidden");
  }

  // Edit Saved Card / Account
  
  var editSavedItems = function(){
    hideSavedOther();
    let savedInfoTitle =  iframeContainer.querySelector(".saved-info-title");
    savedInfoTitle.innerHTML = activeTab=="card"?"Update Card":"Update Account";
    let savedInfoDesc =  iframeContainer.querySelector(".saved-info-desc");
    savedInfoDesc.innerHTML = activeTab=="card"?"Update existing card details":"Update existing account details";
    let saveNewInfo= iframeContainer.querySelector(".save_new_info");
    saveNewInfo.classList.add("hidden");
  }


  // delete saved card

  var deleteSavedItems = function(){
    let savedInfoTitle =  iframeContainer.querySelector(".saved-info-title");
    savedInfoTitle.innerHTML =  activeTab=="card"?"Delete Card":"Delete Account";
    let savedInfoDesc =  iframeContainer.querySelector(".saved-info-desc");
    savedInfoDesc.innerHTML =  activeTab=="card"?"Delete existing card & details":"Delete existing account & details";
  
  }

  // Default card selected

  var selectedSavedInfo = function(){
      hideSavedOther();
      let save_change_other = iframeContainer.querySelectorAll(".save_change_other");
      save_change_other.forEach(el => {
        el.classList.add("hidden");
      });
      
      let menuIcons= iframeContainer.querySelectorAll(".main_action");
      menuIcons.forEach(el => {
        el.classList.add("hidden");
      });
      let optionData= iframeContainer.querySelectorAll(".option-data");
      optionData.forEach(el => {
        el.classList.add("hidden");
      });
      let changeOtherTitle= iframeContainer.querySelector(".change_other_title");
      changeOtherTitle.classList.add("hidden");
      let saveNewInfo= iframeContainer.querySelector(".save_new_info");
      saveNewInfo.classList.add("hidden");

  }



  //Render Card Details 

  var renderSavedElements =  function (parentElem,params,isDefailtExist,idx) {
    let boxDiv =  document.createElement("div");
    boxDiv.classList.add("bg-bright-gray","rounded-lg","p-4","flex","justify-between","saved_info_list","gap-8");
    if(params.is_default!="1"){
       boxDiv.classList.add("hidden");
    }
    if(isDefailtExist<=0 && idx==0){
      boxDiv.classList.remove("hidden");
    }
    let savedInfoDiv =  document.createElement("div");
    savedInfoDiv.classList.add("flex","gap-8");
    let input = document.createElement("input");
    input.type = "radio";
    input.name = "saved";
    input.value = params.card_id;
    input.classList.add("focus:!ring-0");
    savedInfoDiv.appendChild(input);
    
    let savedItemDiv = document.createElement("div");
    savedItemDiv.classList.add("flex","gap-4","items-start");
    let img =  document.createElement("img");
    img.classList.add("ma-w-full","inline-block","align-middle");
    if(activeTab=="card"){
      let card_brand_img =["AMEX",'Carte Blanche','Diners Club','Discover','Insta Payment','JCB','Maestro','Master','Visa'];
      let card_brand = params?.card_brand_name?params?.card_brand_name.replace(/ /g,"_"):"Unknown"
      let card_img =card_brand_img.includes(params.card_brand_name)?card_brand:"general_card";
      img.src = appUrl+'/img/'+card_img+'.svg';
    }
    else{
      img.src = appUrl+'/img/bank.svg';
    }
    savedItemDiv.appendChild(img);
    
    let savedMiscInfo = document.createElement("div");
    savedMiscInfo.classList.add("flex","flex-col","gap-2");
    let saveMiscInfoOne = activeTab=="card"?params.cc_last_4:params.account_number_last_4;
    let saveMiscInfoTwo = activeTab=="card"?'Exp: '+params.cc_valid_thru:'Type: '+params.account_type;
    
    savedMiscInfo.innerHTML = ' <p class="font-inter text-sm leading-16-94 text-charleston-green">••••'+saveMiscInfoOne+'</p>'+
                              '<p class="font-inter text-xs leading-3 text-light-400">'+saveMiscInfoTwo+'</p>';

    savedItemDiv.appendChild(savedMiscInfo);
    savedInfoDiv.appendChild(savedItemDiv);
    boxDiv.appendChild(savedInfoDiv);
    let saveChangeOther = document.createElement("a");
    saveChangeOther.classList.add("cursor","font-inter","text-sm","leading-16-94","font-medium","text-primary-300","save_change_other");
    if(params.is_default!="1"){
      saveChangeOther.classList.add("hidden");
    }
    if(isDefailtExist<=0 && idx==0){
      saveChangeOther.classList.remove("hidden");
    }

    saveChangeOther.innerHTML = "Change";
    saveChangeOther.addEventListener("click", function () {
      saveChangeOther.classList.add("hidden");
      handleSavedOther();
    })
    boxDiv.appendChild(saveChangeOther);  
    let actionDiv = document.createElement("div");
    actionDiv.classList.add("flex","justify-center","hidden","items-center","gap-4","main_action");
    let optionDiv =  document.createElement("div");
    optionDiv.classList.add("flex","gap-4","hidden","option-data");
    
    let editOpt =  document.createElement("p");
    editOpt.classList.add("cursor","text-sm","leading-16-94","font-medium","font-inter","text-primary-300");
    editOpt.innerHTML = "Update"
    editOpt.addEventListener("click", function () {
      if(activeTab=="card")
        selectedSavedCards = params;
      else
        selectedSavedAccounts = params;
      editSavedItems();
      boxDiv.classList.remove("hidden");  
      selectedSavedInputElem.classList.remove("hidden");
      if(activeTab=="card"){
        renderEditSavedCardElements(selectedSavedInputElem,params);
      }

    })

    let removeOpt =  document.createElement("p");
    removeOpt.classList.add("cursor","text-sm","leading-16-94","font-medium","font-inter","text-deep-carmine-pink");
    removeOpt.innerHTML = "Remove"
    removeOpt.addEventListener("click", function () {
      if(activeTab=="card")
        selectedSavedCards = params;
      else
        selectedSavedAccounts = params;
      deleteSavedItems(); 
      boxDiv.classList.remove("hidden");  
      // selectedSavedInputElem.classList.remove("hidden");
      // let delete_msg = document.createElement("div");
      // delete_msg.classList.add("flex","items-center","gap-4")
      // delete_msg.id = "delete_msg";
      // selectedSavedInputElem.appendChild(delete_msg);
      showConfirmModal();

    })
    let menuDot =  document.createElement("a");
    menuDot.classList.add("cursor","option","font-inter","text-sm","leading-16-94","font-medium","text-primary-300");   
    menuDot.innerHTML = '<img src="'+appUrl+'/img/menu-icon.svg" height="24" width="24" />'
    menuDot.addEventListener('click', function(event) {
      event.preventDefault();
      optionDiv.classList.toggle('hidden');
    });
    optionDiv.appendChild(removeOpt);
    if(activeTab=="card")
        optionDiv.appendChild(editOpt);
    actionDiv.appendChild(optionDiv);
    actionDiv.appendChild(menuDot);

    boxDiv.appendChild(actionDiv);
    parentElem.appendChild(boxDiv);
    
    let selectedSavedInputElem = document.createElement("div");
    selectedSavedInputElem.classList.add("p-4","selected_saved_elem","hidden");
    parentElem.appendChild(selectedSavedInputElem);
     input.addEventListener("change", function () {
      if(activeTab=="card")
        selectedSavedCards = params;
      else
        selectedSavedAccounts = params;
      selectedSavedInfo();
      saveChangeOther.classList.remove("hidden");
      boxDiv.classList.remove("hidden");  
      selectedSavedInputElem.classList.remove("hidden");
      if(activeTab=="card")
        renderFormElements({ "label": "CVV","required":true, "id": "cvv","maxLength":4 }, 'number', selectedSavedInputElem);
      else
        renderACHTerms(selectedSavedInputElem);
      renderPaymentInfoButtons(selectedSavedInputElem);
    })
    
   
    // if(newCard){
    //   input.click();
    // }
  }

  // Render delete confrimation modal
  var renderConfirmModal = function(){
    var confimModal = document.createElement("div");
    confimModal.innerHTML = '<div id="confirm_modal" class="modal" style="top:40%">'+
    '<div class="p-4 w-screen flex justify-center">'+
    '<div class="bg-white p-6 lg:p-8 max-h-[95%] overflow-y-auto h-fit w-full lg:w-[544px] rounded-br-lg rounded-bl-lg ">'+
    '<div class="flex justify-between items-center">'+
    ' <p class="text-[16] font-medium">'+confirModalTitle+'</p>'+
    '<span class="close" id="close_confirm_modal"><img src="'+appUrl+'/img/close.svg" height="24" width="24"/></span>'+
    '</div>'+
    '<div class="mt-4 flex flex-col gap-2">'+
    '<div class="flex flex-col gap-2 text-sm font-normal">'+confirmModalMsg+'</div>'+
    '</div>'+
    '<div id="confirm_modal_footer"></div>'+
    '</div>'+
    '</div>'+
    '</div>';
iframeContainer.body.appendChild(confimModal); 
let confirm_modal = iframeContainer.getElementById("confirm_modal");
let confirm_modal_footer = iframeContainer.getElementById("confirm_modal_footer");
confirm_modal_footer.innerHTML = "";
var twoFieldDiv = document.createElement('div');
  twoFieldDiv.classList.add("two-fields","flex","justify-between","items-center","gap-4");
    let cancelConfirm = renderButton("Cancel","secondary",twoFieldDiv,'',{},false); 
    cancelConfirm.addEventListener("click", function () {
      confirm_modal.style.display = "none";
    })
    let okConfirm = renderButton("Confirm","primary",twoFieldDiv,'',{},false);
    okConfirm.addEventListener("click", function () {
    deleteSavedInfo();
  })
  confirm_modal_footer.appendChild(twoFieldDiv);
iframeContainer.onclick = function(event) {
  if (event.target == confirm_modal) {
    confirm_modal.style.display = "none";
  }
}  
let close = iframeContainer.getElementById("close_confirm_modal");
close.addEventListener("click", function () {
  confirm_modal.style.display = "none"; 
})

  }


  // Render ACH Agree Modal

  var renderACHAgreeModal = function(){
    var achAgreeModal = document.createElement("div");
    achAgreeModal.innerHTML = '<div id="ach_terms_modal" class="modal">'+
                            '<div class="p-4  w-screen flex justify-center bg-[#00000014]">'+
                            '<div class="bg-white p-6 lg:p-8 max-h-[95%] overflow-y-auto h-fit w-full lg:w-[544px] rounded-lg">'+
                            '<div class="flex justify-between items-center">'+
                            ' <p class="text-[16] font-medium">Terms & Conditions</p>'+
                            '<span class="close" id="close_ach_modal"><img src="'+appUrl+'/img/close.svg" height="24" width="24"/></span>'+
                            '</div>'+
                            '<div class="mt-4 flex flex-col gap-2">'+
                            '<div class="flex flex-col gap-2 text-sm font-normal"> <p class="opacity-60">ACH Authorization Language</p><p>'+paymentMethodData.ach.ach_authorization_language+'</p></div>'+
                            '<div class="flex flex-col gap-2 text-sm font-normal"> <p class="opacity-60">ACH Revocation Language</p><p>'+paymentMethodData.ach.ach_revocation_language+'</p></div>'+
                            '<div class="flex flex-col gap-2 text-sm font-normal"> <p class="opacity-60">ACH Terms & Conditions</p><p>'+paymentMethodData.ach.ach_terms_condition+'</p></div>'+
                            '</div>'+
                            '</div>'+
                            '</div>'+
                            '</div>';
        iframeContainer.body.appendChild(achAgreeModal); 
        let termsModal = iframeContainer.getElementById("ach_terms_modal");
        iframeContainer.onclick = function(event) {
          if (event.target == termsModal) {
            termsModal.style.display = "none";
          }
        }  
        let close = iframeContainer.getElementById("close_ach_modal");
        close.addEventListener("click", function () {
          termsModal.style.display = "none"; 
        })                    
  }
  // Show ACH Modal Popuo
  var showACHTermsModal = function () {
    let termsModal = iframeContainer.getElementById("ach_terms_modal");
      termsModal.style.display = "block"; 
      window.scroll({
        top: 0, 
        left: 0, 
        behavior: 'smooth' 
       });
  }
  

    // Show confirm Modal Popuo
    var showConfirmModal = function () {
      let confirmModal = iframeContainer.getElementById("confirm_modal");
      confirmModal.style.display = "block"; 
        window.scroll({
          top: 0, 
          left: 0, 
          behavior: 'smooth' 
         });
    }
  // Render ACH Terms 

  var renderACHTerms = function (parentElem) {
    var achAgree = document.createElement("div");
    achAgree.classList.add("tnc","flex","items-center","gap-4");
    let achCheckbox = document.createElement("input");
    achCheckbox.setAttribute("type", "checkbox");
    achCheckbox.classList.add("border","border-light-300","text-base","font-normal","leading-[19px]","p-4","rounded-lg","border-solid");
    achCheckbox.addEventListener("change", function () {
      if(achCheckbox.checked)
        submitBtn.removeAttribute("disabled");
      else
         submitBtn.disabled ="disabled";
    })
    achAgree.appendChild(achCheckbox);
    let achAgreeSpan = document.createElement("p");
    achAgreeSpan.classList.add("uppercase","font-medium","text-xs");
    achAgreeSpan.innerHTML = "I AGREE TO THE ";

    var achTerms = document.createElement("a");
    achTerms.classList.add("text-primary-300");
    achTerms.innerHTML = "TERMS & CONDITIONS";
    achTerms.addEventListener("click", function () {
      showACHTermsModal();
    })
    
    
    achAgreeSpan.appendChild(achTerms);
    achAgree.appendChild(achAgreeSpan);
    parentElem.appendChild(achAgree);

  }
  // Render ACH input elements

  var renderACHInputElements = function (parentElem) {
    renderFormElements({ "label": "Bank Account Name","required":true, "id": "bankAccountName" }, 'text', parentElem);
    renderFormElements({ "label": "Routing Number","required":true, "id": "routingNumber" }, 'text', parentElem);
    var accountTypes = ["saving", "checking"];
    renderFormElements({ "label": "Account Type", "required":true,"id": "accountType", "options": accountTypes }, 'select',parentElem);
    renderFormElements({ "label": "Account Number","required":true, "id": "accountNumber" }, 'text', parentElem);
   if(initSettings.saveAccount){
    let saveCardCheck = document.createElement("div");
    saveCardCheck.classList.add("tnc","flex","items-center","gap-4");
    saveCardCheck.innerHTML = 
    '<input class="border border-light-300 text-base font-normal leading-[19px] rounded-lg border-solid" type="checkbox" value="save_new" name="save_new_checkbox"/>'+
    '<p class="uppercase font-medium text-xs"> Save account securely for future payment</p>';
    parentElem.appendChild(saveCardCheck);
   }
  }


  //Render New ACH Elements
  var renderACHElements = function (parentElem) {
    if(!isAuth() && initSettings.saveAccount){
      let savedAccLink = document.createElement("div");

      savedAccLink.classList.add("tnc","flex","items-center","gap-4","mt-5");
      savedAccLink.innerHTML =  '<p class="uppercase font-medium text-xs primary-font cursor flex"><img src="'+appUrl+'/img/lock.svg"  class="primary-font" width="10" height="12"/>&nbsp; Use saved accounts</p>';
      parentElem.appendChild(savedAccLink);
      let customerAuthForm = document.createElement("div");
      customerAuthForm.classList.add("gap-4","mt-5");
      customerAuthForm.id = "customer_auth_form";
      savedAccLink.addEventListener("click", function () {
        renderCustomerAuth(customerAuthForm);
       
       })
       parentElem.appendChild(customerAuthForm); 
    }
    let boxDiv =  document.createElement("div");
    boxDiv.classList.add("mt-5","mb-9","p-4","rounded-lg","border","border-light-100");
    renderACHInputElements(boxDiv)
    parentElem.appendChild(boxDiv);
    renderACHTerms(parentElem);
    renderPaymentInfoButtons(parentElem);
  }


 
  // Render Wallet Elements

  var renderWalletElements = function (parentElem) {
    var fieldsDiv = document.createElement("div");
    fieldsDiv.classList.add("mt-5","fields","flex","flex-col","gap-4");

    renderEachWallets(fieldsDiv,{type:"apple"});
    renderEachWallets(fieldsDiv,{type:"gpay"});
    parentElem.appendChild(fieldsDiv);

  }


  var renderEachWallets =  function (parentElem,params) {
    let boxDiv =  document.createElement("div");
    boxDiv.classList.add("p-4","rounded-lg","border","border-light-100");

    let colDiv =  document.createElement("div");
    colDiv.classList.add("flex","flex-col","gap-6");
   
    let itemDiv =  document.createElement("div");
    itemDiv.classList.add("flex","items-center","gap-4");
    let input = document.createElement("input");
    input.type = "radio";
    input.name = "wallet_method";
    input.value = params.type;
    input.classList.add("w-4","h-4");
    itemDiv.appendChild(input);

    let img =  document.createElement("img");
    img.src = appUrl+'/img/'+params.type+'.png';
    itemDiv.appendChild(img);

    let button = document.createElement("button");
    button.type = "button";
    button.classList.add("wallet-btn","hidden","w-full","rounded-md","bg-black","hover:bg-opacity-90","p-4","flex","justify-center","items-center");
    button.innerHTML = '<img src="'+appUrl+'/img/'+params.type+'_light.png" />'
    
    colDiv.appendChild(itemDiv);
    colDiv.appendChild(button);
     boxDiv.appendChild(colDiv);
     input.addEventListener("change", function () {
      let walletBtns = iframeContainer.querySelectorAll(".wallet-btn");
      walletBtns.forEach(el => {
        el.classList.add("hidden");
      });
      button.classList.remove("hidden");
    })
    parentElem.appendChild(boxDiv);
  }

  var showToastMessage = function (msg,type){
    var snackbar = iframeContainer.getElementById("snackbar");
    snackbar.innerHTML = msg;
    snackbar.classList.add("show");
    if(type=="error"){
      snackbar.style.backgroundColor = "#e93143"
    }
    else{
       snackbar.style.backgroundColor = "#393"
    }

    setTimeout(function(){  
      snackbar.classList.remove("show");
      snackbar.innerHTML=""; 
      snackbar.removeAttribute("style");
    }, 3000);
  }

  //Copy to clipboard

  var copyToClipboard = function (str){
    const el = document.createElement('textarea');
    el.value = str;
    iframeContainer.body.appendChild(el);
    el.select();
    iframeContainer.execCommand('copy');
    iframeContainer.body.removeChild(el);
    var snackbar = iframeContainer.getElementById("snackbar");
    snackbar.removeAttribute("style");
    snackbar.innerHTML = "Copied to clipboard!!";
    snackbar.classList.add("show");
    setTimeout(function(){  snackbar.classList.remove("show"); }, 3000);
  }

  // Render Crypto Elements

  var renderCryptoElements = function (parentElem,data) {
    var fieldsDiv = document.createElement("div");
    fieldsDiv.classList.add("fields","flex","flex-col","gap-4");
   
    var cryptoDiv = document.createElement("div");
    cryptoDiv.classList.add("flex","flex-col","gap-8");

    var cryptoDiv1 = document.createElement("div");
    cryptoDiv1.classList.add("flex","flex-col","gap-2");
    
    let ptag = document.createElement("p");
    ptag.classList.add("text-[16px]","font-medium");
    ptag.innerHTML = parseFloat(parseInt(data.amount) / 100000000).toFixed(8) + " BTC = $" + Number(initSettings.amount).toFixed(2) + " USD"
    cryptoDiv1.appendChild(ptag);

   let timerDiv = document.createElement("div");
   timerDiv.classList.add("flex","items-center","gap-2");
   timerDiv.innerHTML =  '<img src="'+appUrl+'/img/info.svg"  width="16" height="17"/>'+
                        '<p class="text-sm font-normal">'+
                        '<span id="timer" class="text-error"></span>'+
                        '<span class="opacity-60"> until the next BTC price change</span>'+
                        '</p>';
   cryptoDiv1.appendChild(timerDiv);

   let cryptoDiv2 = document.createElement("div");
    cryptoDiv2.id = "crypto_container";
    cryptoDiv2.classList.add("w-full","mx-auto","flex","flex-col","gap-4","items-center");

    var cryptoChainMain = document.createElement("div");
    cryptoChainMain.id = "crypto_chain";

    var cryptoChain = document.createElement("div");
    cryptoChain.classList.add("w-[320]","h-[320]");
    new QRCode(cryptoChain, {
      text:   data.chain_invoice.address,
      width:320,
      height: 320,
      colorDark: "#000000",
      colorLight: "#ffffff"
    });

    cryptoChainMain.appendChild(cryptoChain);
    var chainAddr =  document.createElement("div");
    chainAddr.classList.add("flex","items-center","gap-1","mt-5");
    let chaiAddrP =  document.createElement("p");
    chaiAddrP.classList.add("text-sm","opacity-60");
    chaiAddrP.innerHTML = 'BTC ADDRESS : '+data.chain_invoice.address.substring(0, 20) + " ...";
    let chainClipboard = document.createElement("img");
    chainClipboard.width = "16";
    chainClipboard.height = "17";
    chainClipboard.style.cursor = "pointer";
    chainClipboard.src = appUrl+'/img/clipboard.svg';
    chainClipboard.addEventListener("click", function () {
      copyToClipboard(data.chain_invoice.address) 
    })
    chainAddr.appendChild(chaiAddrP)
    chainAddr.appendChild(chainClipboard)
    cryptoChainMain.appendChild(chainAddr);
    
    cryptoDiv2.appendChild(cryptoChainMain);

    var cryptoLightningMain = document.createElement("div");
    cryptoLightningMain.classList.add("hidden");
    cryptoLightningMain.id = "crypto_lightning";
    
    var cryptoLightning = document.createElement("div");
    cryptoLightning.classList.add("w-[320]","h-[320]");
    new QRCode(cryptoLightning, {
      text: data.lightning_invoice.payreq,
      width:320,
      height: 320,
      colorDark: "#000000",
      colorLight: "#ffffff"
    });
    cryptoLightningMain.appendChild(cryptoLightning);
  
    var lightningAddr =  document.createElement("div");
    lightningAddr.classList.add("flex","items-center","gap-1","mt-5");
    let lightningAddrP =  document.createElement("p");
    lightningAddrP .classList.add("text-sm","opacity-60");
    lightningAddrP.innerHTML = 'BTC ADDRESS : '+data.lightning_invoice.payreq.substring(0, 20) + " ...";
    let lightningClipboard = document.createElement("img");
    lightningClipboard.width = "16";
    lightningClipboard.height = "17";
    lightningClipboard.style.cursor = "pointer";
    lightningClipboard.src = appUrl+'/img/clipboard.svg';
    lightningClipboard.addEventListener("click", function () {
      copyToClipboard(data.lightning_invoice.payreq) 
    })
    lightningAddr.appendChild(lightningAddrP)
    lightningAddr.appendChild(lightningClipboard)

    cryptoLightningMain.appendChild(lightningAddr);
    cryptoDiv2.appendChild(cryptoLightningMain);

    let cryptoButtonDiv =  document.createElement("div");
    cryptoButtonDiv.classList.add("flex");

    var onChainBtn = document.createElement("button");
    onChainBtn.type="button";
    onChainBtn.id = "bitcoin_onchain";
    onChainBtn.classList.add("qr-type-btn","bg-primary-300","hover:bg-primary-200","rounded-l-lg","font-medium","text-base","leading-[19px]","flex","items-center","justify-center","cursor-pointer","py-4","px-6","border-[none]","text-white");
    onChainBtn.innerHTML = "OnChain" 
    cryptoButtonDiv.appendChild(onChainBtn);

    var onLightingBtn = document.createElement("button");
    onLightingBtn.type = "button";
    onLightingBtn.id = "bitcoin_lightning";
    onLightingBtn.innerHTML = "Lightning"
    onLightingBtn.classList.add("qr-type-btn","bg-white","hover:bg-primary-200","hover:text-white","rounded-r-lg","font-medium","text-base","leading-[19px]","flex","items-center","justify-center","cursor-pointer","py-4","px-6","border","border-light-300");
    cryptoButtonDiv.appendChild(onLightingBtn);
    cryptoDiv2.appendChild(cryptoButtonDiv);
    cryptoDiv.appendChild(cryptoDiv1);
    cryptoDiv.appendChild(cryptoDiv2);
    fieldsDiv.appendChild(cryptoDiv);
    onChainBtn.addEventListener("click", function () {
      onChainBtn.classList.add("bg-primary-300","hover:bg-primary-200","text-white");
      onChainBtn.classList.remove("bg-white","hover:bg-primary-200","hover:text-white");
      onLightingBtn.classList.remove("bg-primary-300","hover:bg-primary-200","text-white")
      onLightingBtn.classList.add("bg-white","hover:bg-primary-200","hover:text-white");
      cryptoChainMain.classList.remove("hidden")
      cryptoLightningMain.classList.add("hidden")
    })

    onLightingBtn.addEventListener("click", function () {
      onLightingBtn.classList.add("bg-primary-300","hover:bg-primary-200","text-white");
      onLightingBtn.classList.remove("bg-white","hover:bg-primary-200","hover:text-white");
      onChainBtn.classList.remove("bg-primary-300","hover:bg-primary-200","text-white")
      onChainBtn.classList.add("bg-white","hover:bg-primary-200","hover:text-white");
      cryptoChainMain.classList.add("hidden");
      cryptoLightningMain.classList.remove("hidden");
    })
    
    parentElem.appendChild(cryptoDiv);

    clearTimeout(timeoutHandle);
    countdown(5);

    resizeIframe();
  }

  // Crypto Timeout
  var cryptoTimeOut = function () {
    let parentElem = iframeContainer.getElementById("crypto_container");
      parentElem.innerHTML=""
      var timeoutDiv = document.createElement("div");
      timeoutDiv.classList.add("flex","flex-col","gap-2");
      timeoutDiv.innerHTML = '<p class="text-base font-medium">Price Changed!</p>'+
                      '<p class="opacity-60 text-sm">It appears that the time limit for the price change has expired on the transaction.</p>';
                   
      var tryAgainBtn = document.createElement("button");
      tryAgainBtn.type = "button";
      tryAgainBtn.classList.add("bg-primary-300","hover:bg-primary-200","font-normal","text-base","mt-2","leading-[19px]","flex","items-center","justify-center","cursor-pointer","p-4","rounded-lg","border-[none]","text-white");
      tryAgainBtn.innerHTML = "Try Again"
      tryAgainBtn.addEventListener("click", function () {
      clearTimeout(timeoutHandle);
      var formElemDiv = iframeContainer.querySelector("#easyload");
      formElemDiv.innerHTML = "";
      getCryptoDetails(formElemDiv);
      resizeIframe();
      })
      timeoutDiv.appendChild(tryAgainBtn);
      parentElem.appendChild(timeoutDiv);

  }


 // Crypto Timer

 var countdown = function (minutes) {
  var seconds = 60;
  var mins = minutes

  function tick() {
    var counter = iframeContainer.getElementById("timer");
    if(counter){
    var current_minutes = mins - 1
    seconds--;
    counter.innerHTML =
      current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
    if (current_minutes <= 0 && seconds <= 0) {
      if(activeTab=="crypto"){
        cryptoTimeOut();
      }
      else if(activeTab=="card"){
       
        let resend_text = iframeContainer.getElementById("resend_text");
        iframeContainer.getElementById("otp_timer").innerHTML="";
        resend_text.classList.remove("secondary-font","text-light-50");
        resend_text.classList.add("cursor-pointer");
        resend_text.innerHTML = "<a class='text-primary-300'>Resend</a>"
        resend_text.addEventListener("click", function () {
          if(inlineAuthForm){
            console.log("customerInlineAuthForm",customerInlineAuthForm)
            sendCustomerOTP(customerInlineAuthForm,true,customerInlineAuthForm);
          }
          else{
            sendCustomerOTP(pageDiv,true);
          }
        });
      }
      
      }
    if (seconds > 0) {
      timeoutHandle = setTimeout(tick, 1000);
    } else {
      if (mins > 1) {
        console.log("mins",mins);
        console.log("activeTab",activeTab)
        if(activeTab=="crypto"){
          isCryptoPaymentSuccess();
        }
        setTimeout(function () {
          countdown(mins - 1);
        }, 1000);

      }
    }
  }
  else{
    clearTimeout(timeoutHandle);
  }
  }
  tick();
  
}

// Check crypto payment success or not 

const isCryptoPaymentSuccess  = async () => {
  var cryptoEmitter = new lyfPayCheckout(clientToken);
  cryptoEmitter.emit('process', {
    "type":"process",
    "data":{"message":"Processing.."}
  }); 
  fetch(apiUrl+'/charges/'+cryptoChanrgeId, {
    method: 'GET',
    headers: {
      'Client-Token': clientToken
    }
  }).then(response => response.json())
    .then(result => {
      if(result.status==true && result.data.status=="Paid"){
        cryptoEmitter.emit('done', {
          "type":"success",
          "data":result
        }); 
        hideLoading();
        chargeFormData = {};
        chargeTriggered =false;
        renderPaymentReceipt({"charge_id": result.data.transaction_id});

      }
    }).catch((error) => {
      cryptoEmitter.emit('error', {
        "type":"error",
        "data":error
      }); 
      //console.log('Error:', error);
    });
  return;
} 

  // Render Billing Fields

  var renderBillingElements = function (parentElem) {
    let billingForm =document.createElement('form');
    billingForm.classList.add("hidden");
    billingForm.id="billing_info";
    billingForm.name="billing_info";
    let h3 =  document.createElement('h2');
    h3.classList.add("text-base","font-bold");
    h3.innerHTML = "Billing Information";
    billingForm.appendChild(h3);
    let boxDiv =  document.createElement("div");
  boxDiv.classList.add("clearfix","mt-5","mb-9");
    let filterCountry= initSettings.fields.billing.filter(s_ele => s_ele.name==="country");
    let countryVal = filterCountry.length>0 && filterCountry[0].value!=""?filterCountry[0].value:customer['country'] && customer['country']!=null? customer['country'].toUpperCase():billingFields[1].value
    
    billingFields.forEach(function (ele) {
      let filterBilling= initSettings.fields.billing.filter(s_ele => s_ele.name===ele.name);
      let params ={
        "label":  ele.name, "id": ele.name,
         "required":filterBilling.length>0 && (filterBilling[0].required==true || filterBilling[0].required==false )?filterBilling[0].required:ele.required,
         "value":filterBilling.length>0 && filterBilling[0].value!=""?filterBilling[0].value:customer[ele.name] && customer[ele.name]!=null? customer[ele.name]:ele.value
       }
       let type = 'text';
       if(ele.name=="country"){
        params.options = countries;
        type = 'select';
       }
       if(ele.name=="state"){
        if(countryVal=="US"){
          params.options = usStates;
          type = 'select';
        } 
        else if(countryVal=="CA"){
          params.options = candaStates;
          type = 'select';
        }
       }

      renderFormElements(params,type, boxDiv);
    });
    billingForm.appendChild(boxDiv);
    var twoFieldDiv = document.createElement('div');
    twoFieldDiv.classList.add("two-fields","flex","justify-between","items-center","gap-4");
    renderButton("Prev (Payment Info)","secondary", twoFieldDiv,handlePrevNext,{"type":"payment_info","current_page":"billing_info","action":"prev"}); 
    if(initSettings.fields.additional.length>0){
      renderButton("Next (Additional Info)","primary", twoFieldDiv,handlePrevNext,{"type":"additional_info","current_page":"billing_info","action":"next"}); 
    }
    else if(initSettings.showSubmitButton){
      let btn_value = initSettings.showTotal?"Pay Now ("+getAmount()+")":"Pay Now"
      renderButton(btn_value,"primary",twoFieldDiv,handlePayNow,{"type":"billing_info"}); 
    }
    billingForm.appendChild(twoFieldDiv)
    parentElem.appendChild(billingForm);
  }

    // Render Additional Fields

    var renderAdditionalElements = function (parentElem) {
      let additionalForm =document.createElement('form'); 
      additionalForm.classList.add("hidden");
      additionalForm.id="additional_info";
      let h3 =  document.createElement('h2');
      h3.classList.add("text-base","font-bold");
      h3.innerHTML = "Additional Information";
      additionalForm.appendChild(h3);
      let boxDiv =  document.createElement("div");
      boxDiv.classList.add("clearfix","mt-5","mb-9");
      initSettings.fields.additional.forEach(function (ele) {
        if(additionalFields.includes(ele.name)){
          if(ele.name=="phone_number")
          renderFormElements({ "label": ele.name, "id": ele.name,"required":ele.required,'value':ele.value?ele.value:customer[ele.name] && customer[ele.name]!=null? customer[ele.name]:"","maxLength":20}, 'tel',  boxDiv);
          else 
            renderFormElements({ "label": ele.name, "id": ele.name,"required":ele.required,'value':ele.value?ele.value:customer[ele.name] && customer[ele.name]!=null? customer[ele.name]:""}, 'text', boxDiv);
        }
      });
      additionalForm.appendChild(boxDiv);
    var twoFieldDiv = document.createElement('div');
    twoFieldDiv.classList.add("two-fields","flex","justify-between","items-center","gap-4");
    renderButton("Prev (Billing Info)","secondary", twoFieldDiv,handlePrevNext,{"type":"billing_info","current_page":"additional_info","action":"prev"}); 
    if(initSettings.showSubmitButton){
      let btn_value = initSettings.showTotal?initSettings.submitButtonText+" ("+getAmount()+")":initSettings.submitButtonText;
      renderButton(btn_value,"primary",twoFieldDiv,handlePayNow,{"type":"additional_info"}); 
    }
    
      additionalForm.appendChild(twoFieldDiv);
      parentElem.appendChild(additionalForm);

    }

  // Render Payment Method Elements Based on Setting


  var renderPaymentMethods = function (tabParent, superParent) {
    var tabDiv = document.createElement('div');
    tabDiv.id = "tabs"
    tabDiv.classList.add("methods","flex", "gap-3","overflow-y-auto");
    if (paymentMethods.includes('card') && initSettings.paymentMethods.includes('card')) {
      var cardTab = document.createElement('div');
      cardTab.classList.add("method-card","group","lex","flex-col","gap-1","rounded-lg","border-2","border-light-200","hover:border-primary-300","cursor-pointer","min-w-[120px]","p-3");
      cardTab.innerHTML = '<img src="'+appUrl+'/img/card.svg"  width="24" height="24"/><p class="card-label secondary-font  text-sm font-medium text-light-400 group-hover:text-primary-300">Card</p>';
      tabDiv.appendChild(cardTab);
      if(activeTab=="" || activeTab=="card"){
        activeTab = 'card';
        cardTab.classList.add("selected");
      }
      cardTab.addEventListener("click", function () {
        tabDiv.querySelector(".selected").classList.remove('selected');
        errorDiv.innerHTML = "";
        activeTab = 'card';
        cardTab.classList.add("selected");
        var formElemDiv = superParent.querySelector("#easyload");
        formElemDiv.innerHTML = "";
        renderPaymentInfoElements(formElemDiv,'card');
        resizeIframe();
      });
    }
    if (paymentMethods.includes('ach') && initSettings.paymentMethods.includes('ach')) {
      var achTab = document.createElement('div');
      achTab.classList.add("method-card","group","lex","flex-col","gap-1","rounded-lg","border-2","border-light-200","hover:border-primary-300","cursor-pointer","min-w-[120px]","p-3");
      achTab.innerHTML = '<img src="'+appUrl+'/img/bank.svg"  width="24" height="24"/><p class="card-label secondary-font text-sm font-medium text-light-400 group-hover:text-primary-300">Bank</p>';
     
      if(activeTab=="" || activeTab=="ach"){
        activeTab = "ach"
        achTab.classList.add("selected");
      }
      tabDiv.appendChild(achTab);
      achTab.addEventListener("click", function () {
        tabDiv.querySelector(".selected").classList.remove('selected');
        errorDiv.innerHTML = "";
        activeTab = "ach"
        achTab.classList.add("selected");
        var formElemDiv = superParent.querySelector("#easyload");
        formElemDiv.innerHTML = "";
        renderPaymentInfoElements(formElemDiv,'ach');
        resizeIframe();
      });
    }
    if (paymentMethods.includes('crypto') && initSettings.paymentMethods.includes('crypto')) {
      var cryptoTab = document.createElement('div');
      cryptoTab.classList.add("method-card","group","lex","flex-col","gap-1","rounded-lg","border-2","border-light-200","hover:border-primary-300","cursor-pointer","min-w-[120px]","p-3");
      cryptoTab.innerHTML = '<img src="'+appUrl+'/img/crypto.svg"  width="24" height="24"/><p class="card-label secondary-font text-sm font-medium text-light-400 group-hover:text-primary-300">Crypto</p>';
      if(activeTab=="" || activeTab == "crypto"){
        activeTab = "crypto"
        cryptoTab.classList.add("selected");
      }
      tabDiv.appendChild(cryptoTab);
      cryptoTab.addEventListener("click", function () {
        tabDiv.querySelector(".selected").classList.remove('selected');
        errorDiv.innerHTML = "";
        cryptoTab.classList.add("selected");
        activeTab = "crypto"
        var formElemDiv = superParent.querySelector("#easyload");
        formElemDiv.innerHTML = "";
        getCryptoDetails(formElemDiv);
        resizeIframe();
      });
    }
    // if (paymentMethods.includes('wallet') && initSettings.paymentMethods.includes('wallet')) {
    //   var walletTab = document.createElement('div');
    //   walletTab.classList.add("method-card","group","lex","flex-col","gap-1","rounded-lg","border-2","border-light-200","hover:border-primary-300","cursor-pointer","min-w-[120px]","p-3");
    //   walletTab.innerHTML = '<img src="'+appUrl+'/img/wallet.svg"  width="24" height="24"/><p class="card-label secondary-font text-sm font-medium text-light-400 group-hover:text-primary-300">Wallet</p>';
     
    //   if(activeTab == "wallet"){
    //     activeTab = "wallet"
    //     walletTab.classList.add("selected");
    //   }
    //   tabDiv.appendChild(walletTab);
    //   walletTab.addEventListener("click", function () {
    //     tabDiv.querySelector(".selected").classList.remove('selected');
    //     walletTab.classList.add("selected");
    //     errorDiv.innerHTML = "";
    //     activeTab = "wallet"
    //     var formElemDiv = superParent.querySelector("#easyload");
    //     formElemDiv.innerHTML = "";
    //     //renderWalletElements(formElemDiv);
    //     resizeIframe();
    //   });

    // }
    tabParent.appendChild(tabDiv);

  }

  var showLoading = function(){
    //containerDiv.classList.add("h-screen");
    renderLoading(containerDiv);
    formContainer.classList.add("hidden");
    loading.classList.remove("hidden")
    //resizeIframe();
  }

  var hideLoading =  function(){
    formContainer.classList.remove("hidden");
    loading.classList.add("hidden");
   
  }

  // Render Loading image 
  var renderLoading = function (parentElem) {
  if(loading){
    loading.remove();
  }
   loading = document.createElement('div');
   loading.classList.add("mt-5","loading","flex","flex-col","justify-center","items-center");
   loading.innerHTML = '<div>'+
   '<img src="'+appUrl+'/img/Loading_sm.png" class="loader" alt="loader" />'+
   '<p class="text-[16px] font-medium mt-5">Processing...'+
   '</p>'+
   '</div>'+
   '</div>';
    parentElem.appendChild(loading);
   
  }

  // Renderinline Loading
  var renderInlineLoading = function (parentElem) {
   inlineLoading = document.createElement('div');
   inlineLoading.classList.add("mt-5","loading","flex","justify-center","items-center");
   inlineLoading.innerHTML ='<img src="'+appUrl+'/img/inline_loading.svg" class="loader" alt="loader" />';
   
    parentElem.appendChild(inlineLoading);
   
  }

  // get Amount 

  var getAmount = function(){
    return '$'+Number(initSettings.amount).toFixed(2);
  }


  // set Apperance settings 

  var setApperanceSettings = function (){
      let root_theme =  iframeContainer.querySelector(':root');
      let secondaryFontColor =  iframeContainer.querySelectorAll(".secondary-font");
      let btnPrimary =  iframeContainer.querySelectorAll(".btn-primary");
      let btnSecondary =  iframeContainer.querySelectorAll(".btn-secondary");
      let initApperanceSettings = initSettings.apperanceSettings;
      let intSettingsLength = Object.keys(initApperanceSettings).length;
      let apiSettingsLength = Object.keys(apperanceSettings).length;
      if(intSettingsLength>0 && initApperanceSettings.bodyBackgroundColor && initApperanceSettings.bodyBackgroundColor!=""){
        containerDiv.style.backgroundColor = initApperanceSettings.bodyBackgroundColor;
      }
      else if(apiSettingsLength>0){
        containerDiv.style.backgroundColor =apperanceSettings.body_bg_col;
      }

      if(intSettingsLength>0 && initApperanceSettings.containerBackgroundColor && initApperanceSettings.containerBackgroundColor!=""){
        formContainer.style.backgroundColor =initApperanceSettings.containerBackgroundColor;
      }
      else if(apiSettingsLength>0){
        formContainer.style.backgroundColor =apperanceSettings.container_bg_col;
      }

      if(intSettingsLength>0 && initApperanceSettings.primaryFontColor && initApperanceSettings.primaryFontColor!=""){
        iframeContainer.body.style.color =initApperanceSettings.primaryFontColor;
      }
      else if(apiSettingsLength>0){
        iframeContainer.body.style.color =apperanceSettings.primary_font_col;
      }

      if(intSettingsLength>0 && initApperanceSettings.secondaryFontColor && initApperanceSettings.secondaryFontColor!=""){
        secondaryFontColor.forEach(el => {
          el.style.color =initApperanceSettings.secondaryFontColor;
        });
      
      }
      else if(apiSettingsLength>0){
        secondaryFontColor.forEach(el => {
          el.style.color =apperanceSettings.secondary_font_col;
        });
       
      }

      
      if(intSettingsLength>0 && initApperanceSettings.primaryButtonBackgroundColor && initApperanceSettings.primaryButtonBackgroundColor!=""){
        root_theme.style.setProperty('--primary-color', initApperanceSettings.primaryButtonBackgroundColor); 
      
      }
      else if(apiSettingsLength>0){
        root_theme.style.setProperty('--primary-color', apperanceSettings.primary_btn_bg_col);  
      
      }

      if(intSettingsLength>0 && initApperanceSettings.secondaryButtonFontColor && initApperanceSettings.secondaryButtonBackgroundColor!=""){
        root_theme.style.setProperty('--secondary-color', initApperanceSettings.secondaryButtonBackgroundColor); 
      
      }
      else if(apiSettingsLength>0){
        root_theme.style.setProperty('--secondary-color', apperanceSettings.secondary_btn_bg_col);  
      
      }
      if(intSettingsLength>0 && initApperanceSettings.primaryButtonFontColor && initApperanceSettings.primaryButtonFontColor!=""){
        btnPrimary.forEach(el => {
          el.style.color = initApperanceSettings.primaryButtonFontColor;
        });
      }
      else if(apiSettingsLength>0){
        btnPrimary.forEach(el => {
          el.style.color = apperanceSettings.primary_btn_font_col;
        });
      }

      if(intSettingsLength>0 && initApperanceSettings.secondaryButtonFontColor && initApperanceSettings.secondaryButtonFontColor!=""){
        btnSecondary.forEach(el => {
          el.style.color = initApperanceSettings.secondaryButtonFontColor;
        });
      }
      else if(apiSettingsLength>0){
        btnSecondary.forEach(el => {
          el.style.color = apperanceSettings.secondary_btn_font_col;
        });
      }
      
      if(intSettingsLength>0 && initApperanceSettings.primaryButtonHoverColor && initApperanceSettings.primaryButtonHoverColor!=""){
        root_theme.style.setProperty('--primary-hover', initApperanceSettings.primaryButtonHoverColor); 
      }
      else if(apiSettingsLength>0){
        root_theme.style.setProperty('--primary-hover', apperanceSettings.primary_btn_hover_col);
      }

      if(intSettingsLength>0 && initApperanceSettings.secondaryButtonHoverColor && initApperanceSettings.secondaryButtonHoverColor!=""){
        root_theme.style.setProperty('--secondary-hover', initApperanceSettings.secondaryButtonHoverColor); 
      }
      else if(apiSettingsLength>0){
        root_theme.style.setProperty('--secondary-hover', apperanceSettings.secondary_btn_hover_col);
      }

      if(intSettingsLength>0 && initApperanceSettings.borderRadious && initApperanceSettings.borderRadious!=""){
        root_theme.style.setProperty('--border-radious', initApperanceSettings.borderRadious+"px"); 
      }
      else if(apiSettingsLength>0){
      root_theme.style.setProperty('--border-radious', apperanceSettings.border_radious+"px");
      }
    
  }
  var renderPaymentInfo = function (){
    pageDiv.innerHTML = "";
    
    if (paymentMethods.length>1 && initSettings.paymentMethods.length>1) {
    let paymentMethodDiv =  document.createElement('div');
    paymentMethodDiv.classList.add("payment-method","flex","flex-col","gap-2");

    var labelP = document.createElement("p");
    labelP.innerHTML ="Choose your payment method";
    labelP.classList.add("label","capitalize","font-semibold","text-sm");
    paymentMethodDiv.appendChild(labelP);
    renderPaymentMethods(paymentMethodDiv, iframeContainer);
    pageDiv.appendChild(paymentMethodDiv);
    }
  
    // Form Elements Div
    var formElemDiv = document.createElement('div');
    formElemDiv.classList.add("fields","flex","flex-col","gap-4","pt-8");
    formElemDiv.setAttribute("id", "easyload");
    formElemDiv.style.display = 'block';
    if (paymentMethods.includes('card') && initSettings.paymentMethods.includes('card')) {
   
      renderPaymentInfoElements(formElemDiv,'card');
    }
    else if(paymentMethods.includes('ach') && initSettings.paymentMethods.includes('ach')) {
      renderPaymentInfoElements(formElemDiv,'ach');
    }
    else if(paymentMethods.includes('crypto') && initSettings.paymentMethods.includes('crypto')) {
      getCryptoDetails(formElemDiv);
    }
    else if (paymentMethods.includes('wallet') && initSettings.paymentMethods.includes('wallet')) {
      //renderWalletElements(formElemDiv);
    }
    pageDiv.appendChild(formElemDiv);
    
  }

  var renderSettingMenu = function (parentElem) {
    let head = document.createElement('div');
    head.id="setting";
    head.classList.add("bg-white","absolute","py-10","w-full","lg:w-[640px]","px-6","hidden","rounded-br-lg","rounded-bl-lg","fixed","z-1000");
   let flexColDiv =  document.createElement('div');
   flexColDiv.classList.add("flex","flex-col","gap-4");
   let flexJustifyDiv =  document.createElement('div');
   flexJustifyDiv.classList.add("flex","justify-between");
    let pTag =  document.createElement('p');
    pTag.classList.add("text-base","font-semibold","text-light-500","leading-5");
    pTag.innerHTML = "Settings";
    flexJustifyDiv.appendChild(pTag);

    let aTag =  document.createElement('a');
    aTag.classList.add("cursor");
    aTag.id = "close-setting";
    aTag.innerHTML =  '<img src="'+appUrl+'/img/close.svg"  alt="close" />';
    flexJustifyDiv.appendChild(aTag);
    flexColDiv.appendChild(flexJustifyDiv);

    let changeLang = document.createElement('p');
    changeLang.classList.add("cursor","text-base","font-medium","text-light-500","leading-5");
    changeLang.innerHTML = "Change Language";
    flexColDiv.appendChild(changeLang);

    let logoutTag = document.createElement('p');
    logoutTag.classList.add("cursor","text-base","font-medium","text-light-500","leading-5");
    logoutTag.innerHTML = "Logout";
    logoutTag.addEventListener("click", function () {
        parentElem.classList.toggle("close");
        errorDiv.innerHTML = "";
        localStorage.setItem("customer_token","");
        localStorage.setItem("customer_id","");
        cardSearchKey ="";
        cardSearchValue ="";
        formContainer.innerHTML = "";
        activeTab="";
        renderForm(formContainer);
      });
    flexColDiv.appendChild(logoutTag);
    head.appendChild(flexColDiv);
    parentElem.appendChild(head);
    
  }

  var renderForm = function (parentElem) {
    let form = document.createElement('div');
    form.classList.add("flex","flex-col");
    customerMainAuthForm  =  document.createElement('div');
    customerMainAuthForm.id = "customer_auth_form";
    pageDiv =  document.createElement('div');
    pageDiv.id = "page_container";
    renderPaymentInfo();
    form.appendChild(customerMainAuthForm);
    form.appendChild(pageDiv);
    renderBillingElements(form);
  renderAdditionalElements(form);
  
    
    // Error Div
    errorDiv = document.createElement('div');
    errorDiv.setAttribute("id", "error");
    errorDiv.classList.add("error");
    form.appendChild(errorDiv);

     // Success Div
     successDiv = document.createElement('div');
     successDiv.setAttribute("id", "success");
     successDiv.style.textAlign = "center";
     successDiv.classList.add("success");
     form.appendChild(successDiv);

    parentElem.appendChild(form);
    let snackBarDiv =  document.createElement("div");
    snackBarDiv.id ="snackbar"
    form.appendChild(snackBarDiv);
    let footer = document.createElement("div");
    footer.classList.add("mt-8","text-center","uppercase","font-medium","text-xs","text-light-50","flex","justify-between","items-center");
    let companyNameDiv = document.createElement("p");
    companyNameDiv.classList.add("text-left");
    companyNameDiv.innerHTML = "POWERED BY "+companyName;
    footer.appendChild(companyNameDiv);
    if(isAuth()){
      let settingMenu = document.createElement("div");
      settingMenu.id ="overlay";
      settingMenu.classList.add("fixed","top-0","left-0","h-full","w-full","bg-light-14","opacity-0","pointer-events-none","transition-opacity","duration-300","ease-in-out","z-999"); 
      let settingIcon = document.createElement("a");
      settingIcon.id = "setting-menu";
      settingIcon.classList.add("cursor");
      settingIcon.innerHTML = '<img src="'+appUrl+'/img/settings.svg?v=9"  alt="settings" />';
      settingIcon.addEventListener("click", function () {
        //settingMenu.classList.toggle("close");
        toggleModal();
      })
      footer.appendChild(settingIcon)
      footer.appendChild(settingMenu);
      renderSettingMenu(parentElem);
    }
    renderACHAgreeModal();
    renderConfirmModal();
    parentElem.appendChild(footer);
    if(isAuth()){
      window.onclick = function (event) {
        var setting =  iframeContainer.querySelector("#setting");
         var overlay =  iframeContainer.querySelector("#overlay");
        if (event.target == setting) {
          setting.style.display = "none";
          overlay.style.display = "none";
        }
      };
      
      window.onresize = function () {
        adjustModalStyle();
      };
      setTimeout(() => {
        adjustModalStyle();
      }, 300); 
   
      
     
      
    }
    setApperanceSettings();
    const emitter = new lyfPayCheckout(clientToken);
    emitter.emit('ready', {
      "type":"ready",
      "data":{"message":"Elements rendered successfully.."}
    }); 
    resizeIframe()
    
  }


  var renderMainContainer = function (parentElem) {
    containerDiv = parentElem.createElement('div');
    containerDiv.classList.add("h-screen","flex","justify-center","items-center","p-4","bg-background");
    containerDiv.id = 'container';
    formContainer = document.createElement('div');
    formContainer.classList.add("p-relative","form-container","max-h-[90%]","h-fit","overflow-y-scroll","p-8","w-full","lg:w-[640px]","bg-white","rounded-lg");
    renderLoading(containerDiv);
    getPaymentMethods(formContainer);
   
    containerDiv.appendChild(formContainer);
    parentElem.body.appendChild(containerDiv);
   
  }

  class lyfPayCheckout {
    constructor(token) {
        this.eventMap = eventMap;
        this.clientToken = token;
        this.iframeContainer = iframeContainer;
        this.initSettings = initSettings;
        cardSearchKey = localStorage.getItem('card_search_key');
        cardSearchValue = localStorage.getItem('card_search_value');
    }
    setSettings(){
      initSettings =this.initSettings;
    }
    setFrameContainer(){
      iframeContainer =  this.iframeContainer;
    }
   setClientToken(){
      clientToken= this.clientToken;
    }

    setEnvironment(){
     if(this.initSettings.environment=="stage"){
      domainUrl= "https://stage-api.stage-easymerchant.io";
     }
     else if(this.initSettings.environment=="sandbox"){
      domainUrl = "https://sandbox-api.sandbox-lyfepay.io";
     }
     else if(this.initSettings.environment=="local"){
      domainUrl = "http://em-api.test";
     }
     apiUrl = domainUrl+"/api/v1";
    }
    create(params){
     
      this.initSettings = { ...initSettings, ...params }
      this.setSettings();
      this.setClientToken();
      this.setEnvironment();
      this.iframeContainer = createIframe(this.initSettings.container);
      this.setFrameContainer();
      loadCss(mainCss, this.iframeContainer);
      // loadCss(tailCss, this.iframeContainer);
      // loadCss(intelCss, this.iframeContainer);
      loadMainCss(intelCss, this.initSettings.container);
      loadMainJs(mainJs);
      //loadMainJs(polyfillJs);
      setTimeout(function(){
        renderMainContainer(iframeContainer);
    }, 100);
    
      
    }
    submit(){
      charges(this.iframeContainer.forms.payment_info.elements);
    }
   
    on(event, callback) {
        if (!this.eventMap.has(event)) {
            this.eventMap.set(event, []);
        }
        this.eventMap.get(event).push(callback);
    }

    off(event, callback) {
        if (this.eventMap.has(event)) {
            const callbacks = this.eventMap.get(event).filter(cb => cb !== callback);
            this.eventMap.set(event, callbacks);
        }
    }

    emit(event, ...data) {
        if (this.eventMap.has(event)) {
            this.eventMap.get(event).forEach(callback => {
                setTimeout(() => callback(...data), 0);
            });
        }
    }
}

  window.lyfPayCheckout = lyfPayCheckout;
  

})(window);
