export default class Student {
    constructor(_parent,_item,_index,_delStudent) {
        this.parent = _parent;
        this.index = _index
        this.name = _item.name;
        this.score = _item.score;
        this.subject = _item.subject;
        this.delStudent = _delStudent

    }

    render(){
        let newTr = document.createElement('tr');
        document.querySelector(this.parent).append(newTr);
        newTr.innerHTML += 
        `
                    <td>${this.index+1}</td>
                    <td>${this.name }</td>
                    <td>${this.score }</td>
                    <td>${this.subject }</td>
                    <td><button class="btn btn-danger del-btn">Delete</button></td>
        `
        let delBtn  = newTr.querySelector(".del-btn");
        delBtn.addEventListener("click", () =>{
            this.delStudent(this.index)
            alert("student deleted successfully")
        })
    }
    
}