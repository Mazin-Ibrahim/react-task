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

    restTasks = () => {
        this.state.lists = []
        this.setState({lists:this.state.lists})
    }

    
    render() {
        return (
          <div className="mt-10 mx-auto container">
              <div className="md:w-full">
                   <div className="p-4 rounded">
                        <div className="text-center">
                     <span className="font-semibold text-gray-700 text-2xl">Todo</span>
                        </div>
                        <div className="mt-4 p-4 shadow-md rounded md:w-3/4 w-full mx-auto">
                                <div className="flex justify-between items-center my-8">
                                <input onChange={this.getTask} className="bg-white px-2 py-1 border-gray-700 focus:border-indigo-400 focus:shadow-none focus:bg-white mt-1 block w-full" type="text"/>
                                <button onClick={this.newTask} className="px-2 py-1 h-10 w-14 bg-green-500 hover:bg-green-600 text-white text-sm font-medium rounded mx-2">Add</button>
                               </div>

                            {this.state.lists.map((list, index) => (
                                <div key={index} className="bg-white rounded hover:shadow-lg p-2 flex justify-between items-center mt-2">
                                    <span className="font-semibold text-gray-500">{list}</span>
                                    <button onClick={() => this.deleteItem(index)} className="font-semibold text-2xl">x</button>
                                </div>
                            ))} 
                        </div>

                        <div className="text-center mt-4">
                            <button onClick={this.restTasks} className="px-2 py-1 bg-red-300 shadow-md rounded text-white">Rest</button>
                        </div>
                        
                   </div>
              </div>
          </div>
        );
        
    }
}

export default Todo;
