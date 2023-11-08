
import { useState } from 'react';
import './menu.css'



function Menu(props){

    const [name,setName] = useState('')
    const [maxId,setMaxId] = useState(0)
    const onNameChange = (e)=>{
        setName(e.target.value)
    }
    const submitName=(e)=>{
        e.preventDefault()
        //alert(name)
        if(name){
           props.addPlayer(name,0,maxId);
            setMaxId(maxId+1)
            setName('')
         
        }
        
        
    }


    return(
        <div className="menu">
            <form className="menu-form" onSubmit={submitName} name="menu">
                <div className="menu-form-left">
                    
                    <input className="menu-name" value={name} onChange={onNameChange}
                
                
                
                    ></input>
                    
                    <button type="submit" className="button submit" >
                        Add player
                    </button>
                </div>
                
                
                




            </form>
            
            <div className="menu-form-right">
                    <button  className="button clear" onClick={props.clear}>
                        Clear
                    </button>
                </div>
        </div>

    )
}

export default Menu;