import React, { Component } from 'react';

class Todo extends Component {
    state = {
        task:"",
        lists:[]
    }
    getTask = (ev) =>{
        this.setState({task:ev.target.value})
    }

    newTask = () =>{
        this.state.lists.push(this.state.task)
        this.setState({ lists: this.state.lists})
        this.setState({ task: this.state.task})
    }

    deleteItem(index){
         this.state.lists.splice(index,1)
         this.setState({lists:this.state.lists})
    }

    
    render() {
        return <div className="container mx-auto">
            <div className="mt-20">
                <div className="mx-auto">
                    <div className="mx-32">
                        <div>
                            <div>
                                <div className="font-bold text-2xl my-4 text-white">
                                    Task Title
                               </div>
                                <input onChange={ this.getTask } className="px-2 py-2 w-full" />
                                <button className="bg-white my-4 py-2 px-1 font-bold rounded" onClick={this.newTask}>ADD NEW</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="my-4 container mx-auto">
             <div className="mx-32">
                  {this.state.lists.map((list,index)=>(
                      <ul>
                          <div key={index} className="w-full bg-white p-4 rounded-md shadow-md my-1 flex justify-between items-center">
                              <li>
                                  {list}
                              </li>
                              <button onClick={() => this.deleteItem(index)}  className="font-bold text-2xl">x</button>
                          </div>
                      </ul>
                  ))}  
             </div>
            </div>
        </div>;
    }
}

export default Todo;
