function insert_Row() {
    //Write your code here
  let row = document.getElementById("sampleTable");
	row.innerHTML = `<tr><td>New Cell1</td><td>New Cell2</td></tr>`+ document.getElementById("sampleTable").innerHTML;
}
