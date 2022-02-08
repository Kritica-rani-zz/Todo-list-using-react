import React from 'react';

class TodoList extends React.Component {

    constructor() {
        super()
        this.state = { inputText: "", listItems: [] }

    }

    handleChange = (event) => {
        // if(this.state.inputText.length<1){
        //     return;
        // }
        //  console.log(event.target.value);
        this.setState({ inputText: event.target.value })

        // console.log(this.state.inputText,"setstate")

    }

    Additon = (e) => {
        //console.log("button clicked")
        // if(this.state.inputText.length===0){
        //     return;
        // }
        e.preventDefault();
        const { listItems } = this.state;

        const inputValue = this.state.inputText

        if (this.state.inputText !== '') {
            // console.log("");
            const items = [...listItems, inputValue];
            this.setState({ listItems: items, inputText: " " })
        }
    }
 Delete= (index)=>{
     console.log(index,"this is index")
     const {listItems}= this.state;
    
    const filteredItems= listItems.filter((listItem,index) =>
        // console.log("listItem",listItem.index)
        listItem
        
        !==index
       );
        console.log(filteredItems,"filtered")
        this.setState({listItems:filteredItems});
        // console.log(listItems,"filtering")
 }

    render() {

    //    console.log("filtered listitems",this.state.listItems)
        return (
            <div className='Main'>


                <div className='Center'>

                    <input type='text' id="input" placeholder='Add Items' onChange={this.handleChange} value={this.state.inputText} ></input>

                    <button onClick={this.Additon}>Add</button>
                    {this.state.listItems.map((item,index) => {

                        return ( <div >
                            
                        <li >{item}</li>
                              <button onClick={()=>this.Delete(index)}>Delete</button>
                           </div> )
                           
                    })}
                    {/* <button onClick={this.Delete}>Delete</button> */}
                </div>
            </div>
        )
    }



}

export default TodoList;