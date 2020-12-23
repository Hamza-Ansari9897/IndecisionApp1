// var tempelate=(
// <div>
//     <h1>Indecision app </h1>
//     <p>This is some info</p>
//     <ol>
//        <li>Item one</li>    
//        <li>Item two</li>
//     </ol>
//   </div>
// );
// var user={
//     'name':'Ansari',
//     'age':'3',
//     'location': 'Delhi'
// }
// var UserName='HAmza'; 
// var age=21; 
// var ocation='Gaziabad';
// var object={
//     'title':'DON',
//     'subtitle':'ShahrukhKhan Movie'
// }
// function getLocation(L){
//     if(L){
//         return <p>Location : {L}</p>;
//     }
// }


// var tempelatetwo=(
//     <div>
//     <h1>{user.name? user.name:'anonimous'}</h1> 
//     {user.age>=18 && <p>Age : {user.age}</p>}
//     {getLocation(user.locatio)}

//     </div>
// );

// var tempelatethree=(
//     <div>
//     <h1>{object.title}</h1>
//     {(object.subtile) && <p>{object.subtitle}</p>}
//     <p>{(object.option.length>0?"Her is your paragraph":"No option")}</p>
//     </div>
// ); 
// let count=0
// let minusone=()=>{
//     count--;
//     render()
// }


// var appRoot=document.getElementById('app');
// const render=()=>{
//     const button=(
//         <div>
//         <h1> count: {count}</h1>
//         <button onClick={minusone}>-1</button>
//         </div>
//     )
//     ReactDOM.render(button,appRoot)   

// }
// render()
const formsubmit=(e)=>{
    e.preventDefault();
    const option=e.target.elements.option.value;
    if(option){
        object.options.push(option);
        e.target.elements.option.value=' ';
        render()
    }
    

}
const remove=()=>{
    object.options=[];
   
        render()
    }
    


var object={
    'title': 'Indecision App',
    'subtitle':'This is my first Aap',
    'options': ['one','two','three']
}

var appRoot=document.getElementById('app');

const render=()=>{
    const tempelate=(
        <div>
        <h1>{object.title}</h1>
        <p>{object.options.length}</p>
        <form onSubmit={formsubmit}>
        <input type="text" name="option"/>
        <button>submit</button>
        <button onClick={remove}>Remove All</button>
        </form>
        </div>
    )
    ReactDOM.render(tempelate,appRoot)   
}
render()
