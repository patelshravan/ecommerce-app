//Javascript Code
//Client Side Javascript Code

var fetchData = () => {
  // alert("button is clicked.....");
  let url = "http://localhost:7000/api/products";
  //use Ajax mechanism to fetch data from  rest api
  //it is inbuilt function of jQuery Library
  $.ajax({
    dataType: "json",
    url: url,
    type: "GET",
    success: (data) => {
      console.log(data);
      // let strData = JSON.stringify(data);
      //alert(strData);
      /* let para1=document.getElementById("para");
              para1.innerHTML=strData;
              */
      //DOM tree Manipulation Code at Client Side
      let productList = document.getElementById("productList");
      for (var i = 0; i < data.products.length; i++) {
        const node = document.createElement("li");
        const textnode = document.createTextNode(data.products[i].title);
        node.appendChild(textnode);
        productList.appendChild(node);
      }
    },
  });
  //on receive data dynamically append products names to existing HTML page
  //DOM Manipulation
  console.log("Button is Clicked......");
};

var fetchProductDetails = () => {
  let apiError;
  let result;

  fetch("//localhost:7000/api/products/2", {
    // NEW - add a Content-Type header
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(async (response) => {
      if (response.ok) {
        apiError = false;
        result = await response.json();
        console.log(result);
      } else {
        apiError = true;
      }
    })
    .catch(() => (apiError = true));
};

var onCustomerLogin = () => {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let credential = {};
  credential.email = email;
  credential.password = password;
  let loginUrl = "http://localhost:7000/api/customer/login";
  $.ajax({
    url: loginUrl,
    type: "POST",
    data: credential,
    success: (data, status) => {
      console.log(data);
      localStorage.setItem("receivedtoken", data.token); //browsers cache memory
      location.replace("./home.html");
    },
  });
};

var fetchOrders = () => {
  let apiError;
  let result;
  let token = localStorage.getItem("receivedtoken");
  console.log(token);
  fetch("//localhost:7000/api/orders", {
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  })
    .then(async (response) => {
      if (response.ok) {
        apiError = false;
        result = await response.json();
        console.log(result);
        let ordersList = document.getElementById("lstOrders");
        for (var i = 0; i < result.length; i++) {
          const node = document.createElement("li");
          const textnode = document.createTextNode(
            result[i].customer_id + " " + result[i].status
          );
          node.appendChild(textnode);
          ordersList.appendChild(node);
        }
      } else {
        apiError = true;
      }
    })
    .catch(() => (apiError = true));
};

var fetchProducts = () => {
  let apiError;
  let result;
  let token = localStorage.getItem("receivedtoken");
  console.log(token);
  fetch("//localhost:7000/api/products", {
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(async (response) => {
      if (response.ok) {
        apiError = false;
        result = await response.json();
        console.log(result);
        let ordersList = document.getElementById("lstProducts");
        for (var i = 0; i < result.length; i++) {
          const node = document.createElement("li");
          const textnode = document.createTextNode(
            result[i].title +
              " " +
              result[i].description +
              " " +
              result[i].image_url +
              " " +
              result[i].quantity +
              " " +
              result[i].price
          );
          node.appendChild(textnode);
          ordersList.appendChild(node);
        }
      } else {
        apiError = true;
      }
    })
    .catch(() => (apiError = true));
};

var onCustomerRegister = () => {
  let firstname = document.getElementById("firstname").value;
  let lastname = document.getElementById("lastname").value;
  let email = document.getElementById("email").value;
  let contact_no = document.getElementById("contact_no").value;
  let password = document.getElementById("password").value;
  let location = document.getElementById("location").value;
  let credential = {};
  credential.firstname = firstname;
  credential.lastname = lastname;
  credential.email = email;
  credential.contact_no = contact_no;
  credential.password = password;
  credential.location = location;
  let registerUrl = "http://localhost:7000/api/customer/register";
  $.ajax({
    url: registerUrl,
    type: "POST",
    data: credential,
    success: (data, status) => {
      console.log(data);
      console.log(status);
      // localStorage.setItem("receivedtoken", data); //browsers cache memory
    },
  });
};

var updatePassword = () => {
  let updatedPassword = document.getElementById("password").value;
  let token = localStorage.getItem("receivedtoken");
  console.log("JWT TOKEN", token);
  fetch("//localhost:7000/api/updatepassword/customer", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify({ password: updatedPassword }),
  })
    .then(async (response) => {
      if (response.ok) {
        alert("Password Updated Successfully!");
      }
      location.replace("/login.html");
    })
    .catch(() => (apiError = true));
};
