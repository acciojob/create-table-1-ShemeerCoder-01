function insert_Row() {
    //Write your code here
  let row = document.getElementById("sampleTable");
	row.innerHTML = `<tr><td>New Cell 1</td><td>New Cell 2</td></tr>`+ document.getElementById("sampleTable").innerHTML;
}
