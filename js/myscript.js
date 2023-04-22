var shoeV, sizeV, numberV, nameV;

function readFom() {
  shoeV = document.getElementById("shoe").value;
  sizeV = document.getElementById("size").value;
  numberV = document.getElementById("number").value;
  nameV = document.getElementById("name").value;
  console.log(shoeV, sizeV, numberV, nameV);
}

document.getElementById("insert").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("user/" + shoeV)
    .set({
      Shoe: shoeV,
      Size: sizeV,
      Number: numberV,
      Name: nameV,
    });
  alert("Data Inserted");
  document.getElementById("shoe").value = "";
  document.getElementById("size").value = "";
  document.getElementById("number").value = "";
  document.getElementById("name").value = "";
};

document.getElementById("read").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("user/" + shoeV)
    .on("value", function (snap) {
      document.getElementById("shoe").value = snap.val().Shoe;
      document.getElementById("size").value = snap.val().Size;
      document.getElementById("number").value = snap.val().Number;
      document.getElementById("name").value = snap.val().Name;
    });
};

document.getElementById("update").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("user/" + shoeV)
    .update({
      //   rollNo: rollV,
      size: sizeV,
      Number: numberV,
      Name: nameV,
    });
  alert("Data Update");
  document.getElementById("shoe").value = "";
  document.getElementById("size").value = "";
  document.getElementById("number").value = "";
  document.getElementById("name").value = "";
};
document.getElementById("delete").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("user/" + shoeV)
    .remove();
  alert("Data Deleted");
  document.getElementById("shoe").value = "";
  document.getElementById("size").value = "";
  document.getElementById("number").value = "";
  document.getElementById("name").value = "";
};