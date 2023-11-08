
import './app.css'
import History from '../history/history';
import PlayerList from '../playersList/playerList';
import Menu from '../menu/menu';
import Player from '../player/player';
import { useState,useEffect } from 'react';



function App(){


    const [players,setPlayers] = useState([])
    const [history,setHistory] = useState([])
    
    const array = []




    var historyId;
    console.log(localStorage)


    

    useEffect(()=>{
        historyId = localStorage.getItem('historyId')
        console.log(historyId)
        if(historyId!=0&&historyId!=NaN&&historyId!=undefined){
            const jsonPlayers = localStorage.getItem('players')
            const jsonHistory = localStorage.getItem('history')
            console.log(jsonPlayers)
            const jsonPlayersParsed = JSON.parse(jsonPlayers)
            console.log('first')
            setPlayers(jsonPlayersParsed)
            console.log('second') 
        }else{
            if(historyId==NaN){
                historyId=0;
            }
            const jsonPlayers = JSON.stringify(players)
            const jsonHistory = JSON.stringify(history)
            localStorage.setItem('players',jsonPlayers)
            localStorage.setItem('history',jsonHistory)
            localStorage.setItem('historyId',historyId)
        }
        console.log('Effect')
        console.log(players)     
    },[historyId])
    const addPlayer = (name,points,id)=>{
        let player = {name:name,points:points,id:id}
        let newPlayers = [...players,player]
        setPlayers(newPlayers)
        setHistory([...history],player)
        if(historyId){
            historyId++;
        }else{
            historyId=0;
        }
        console.log(players)
        console.log('historyId '+ historyId )
        const jsonPlayers = JSON.stringify(players)
        const jsonHistory = JSON.stringify(history)
        localStorage.setItem('players',jsonPlayers)
        localStorage.setItem('history',jsonHistory)
        localStorage.setItem('historyId',historyId)
        console.log('AP')
        console.log(localStorage)
    }

    const deletePlayer=(id)=>{
        setPlayers(players.filter(item=>item.id!==id))
        const jsonPlayers = JSON.stringify(players)
        const jsonHistory = JSON.stringify(history)
        localStorage.setItem('players',jsonPlayers)
        localStorage.setItem('history',jsonHistory)
        localStorage.setItem('historyId',historyId)
    }
    const changePoints =(id,points)=>{
        let p = players
        for(let i of p){
            if(i.id===id){
                i.points+=points
            }
            console.log(i)
        }
        setHistory([...history],p)
        historyId++;
        setPlayers(p)
        console.log('players')
        console.log(players)
        const jsonPlayers = JSON.stringify(players)
        const jsonHistory = JSON.stringify(history)
        localStorage.setItem('players',jsonPlayers)
        localStorage.setItem('history',jsonHistory)
        localStorage.setItem('historyId',historyId)
    }
    const clear = ()=>{
        let result = window.confirm('Clear the board?')
        if(result){
            setPlayers([])
            setHistory([])
            historyId=0;
        }
        const jsonPlayers = JSON.stringify(players)
        const jsonHistory = JSON.stringify(history)
        localStorage.setItem('players',jsonPlayers)
        localStorage.setItem('history',jsonHistory)
        localStorage.setItem('historyId',historyId) 
    }

    return(
        <div className="app" >
            <Menu addPlayer={addPlayer} clear={clear}/>
            <PlayerList  players={players}  deletePlayer={deletePlayer} changePoints={changePoints} />
        </div>

    )
}

export default App;