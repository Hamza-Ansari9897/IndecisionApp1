class Visibility extends React.Component{
  constructor(props){
     super(props)
     this.handleToggleVisibility=this.handleToggleVisibility.bind(this)
      this.state={
        visibility:false
      }

  }
  handleToggleVisibility(){
     this.setState((p)=>{
     return{ visibility:!p.visibility}})
  }
  render(){
    return(
      <div>
      <h1>Visibility Toggle</h1>
      <button onClick={this.handleToggleVisibility}>
          {this.state.visibility ? 'Hide Detail': 'Show Detail'}
      </button>
      {
        this.state.visibility && (
            <div>
            <p>Here is somethingn new</p> 
            </div>
        )
      }   
      </div>
    

    
    )}
}
ReactDOM.render(<Visibility/>,document.getElementById('app'))
























// const visiblity=false
// const show=()=>{
//   visiblity=!visiblity;
//    render()
// }
// const render=()=>{
// const tempelate=(
    // <div>
    // <h1>Visibility Toggle</h1>
    // <button onClick={show}>
    //     {visiblity ? 'Hide Detail': 'Show Detail'}
    // </button>
    // {
    //   visiblity && (
    //       <div>
    //       <p>Here is somethingn new</p> 
    //       </div>
    //   )
    // }   
    // </div>
// )
// ReactDOM.render(tempelate,appRoot)  
// }
// var appRoot=document.getElementById('app');
// render()