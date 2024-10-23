import React from 'react'
import './ExplorerMenu.css'
import { menu_list } from '../../assets/assets'
const ExplorerMenu = ({category,setCategory}  ) => {
  return (
    <div className='explorer' id='explorer-menu'>
        <h1>Explore our Menu</h1>
        <p className='explore-text'>Choose from a diverse menu featuring a delectable array of dishes craffed with the finest ingredients and culinary expertise. Our mission is satisfy your cravings and elevate your dining experience, one delicius meal at a time.</p>
        <div className="explore-list">
            {menu_list.map((item,index)=>{
                return (<div onClick={()=>setCategory(prev=> prev=== item.menu_name? "All": item.menu_name) } key={index} className="explore-list-item">  <img className={category=== item.menu_name?"Active":"" }  src={item.menu_image} alt="" />
                <p>{item.menu_name} </p>
                </div> )
            }  )}
        </div>
        <hr/>
      </div>
  )
}

export default ExplorerMenu