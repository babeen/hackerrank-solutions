



class NotesStore {
    //add your code here
    constructor(){
        this.notes = [];
    }
    
    addNote(noteName,noteState){
        if(!['completed','active','others'].includes(noteState)){
            throw new Error("Invalid note state");
        }
        this.notes.push({name:noteName,state:noteState});
    }
    
    getNotes(state){
        if(!['completed','active','others'].includes(state)){
            throw new Error("Invalid note state");
        }
        return this.notes.filter((note)=>note.state==state).map((note)=>note.name);
    }
    
    getAllNotes(){
        return this.notes.map((note)=>note.name);
    }
}
const store = new NotesStore();

store.addNote("shopping list","active");
store.addNote("pay bills","completed");
store.addNote("call mom","others");

console.log(store.getNotes("active"));
console.log(store.getNotes("completed"));
console.log(store.getNotes("others"));
console.log(store.getAllNotes());
