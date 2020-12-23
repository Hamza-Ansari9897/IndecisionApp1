class Counter extends React.Component{
    constructor(props) {
        super(props)
        this.handleaddone=this.handleaddone.bind(this)
        this.handleminusone=this.handleminusone.bind(this)
        this.handleresetone=this.handleresetone.bind(this)
        this.state={
            count:props.count

        }

    }
    handleaddone(){
       
       this.setState((prevstate)=>{
           return{
               count: prevstate.count+1
           }
       })
    }
    handleminusone(){
        this.setState((prevstate)=>{
            return{
                count: prevstate.count-1
            }
        })
    }
    handleresetone(){
        this.setState(()=>{
            return{
                count:0
            }
        })
    }
    render(){
        return(
            <div>
            <h1>Count :{this.state.count}</h1>
            <button onClick={this.handleaddone}>+1</button>
            <button onClick={this.handleminusone}>-1</button>
            <button onClick={this.handleresetone}>Remove</button>
            </div>
        )
    }
}
Counter.defaultProps={
    count:0
}
ReactDOM.render(<Counter count={-2}/>, document.getElementById('app'))