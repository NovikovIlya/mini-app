import React from 'react';
import PropTypes from 'prop-types';
import bridge from '@vkontakte/vk-bridge';

import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar } from '@vkontakte/vkui';

import './../assets/styles/global.css'
import {useContext, useEffect, useMemo, useState}  from 'react';
import CarItem from './../panels/home/car-item/CarItem';
import CreateCarForm from './home/create-car/CreateCarForm';

function Home(){
    const [cars,setCars] = useState([

	  ])
	  const [isLoading,setLoading] = useState(true)
	  const [open,setOpen] = useState(true)
	  const [pokazivay,setPoazivay] = useState()

	  const smenaVida = ()=>{
		setOpen(false);
	  }
	  

	const load=()=>{
		setLoading(false);
		console.log(isLoading);
	  }
	  history.pushState(null, null, null);

	  window.addEventListener("popstate", (event) => {
		event.preventDefault();
		if (open === true){
			setOpen(false);
		}
		if (open === false)
			setOpen(true);
		}
	  );
	
	  return (
		<>
		<div className={`modale animated ${open ? 'showed' : ''} `}>
			<CreateCarForm setCars={setCars} smenaVida={smenaVida}  load={load} />
		</div> 
		<div className={open ? '' : 'main1'}>
	

		
		<div className='main'>
		{/* <button className='btn1 btnSign2'> </button> */}
		<button className=' btnSign2'> </button>
		  <button onClick={()=>{
			setOpen(true);
			}}  className='btn btnSign'>Выбрать другой знак</button>
			
			{/* <div>
				{pokazivay? pokazivay : ''}
			</div> */}
			

  
		  <div className='batya' >
		 
			  {isLoading? 
			  <div className='zagzag'>
				<h1 className='zagryzka'>Идет загрузка</h1>
				<div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
			  </div>
			   : 
				
				cars.length 
			  ? cars.map(car => (
				<div key={car.id} className="flip-card">
				  <div className="flip-card-inner">
					<div className="flip-card-front">
					  <img className='images' src='https://i.ibb.co/PDKtVXX/image.jpg' alt="Avatar" />

					</div>
					<div key={car.id} className="flip-card-back">
					  <CarItem key={car.id} car={car}/>
					  
					</div>
				  </div>
				</div>
				  
			  ))
			  : 
			  <p className='textHome'>Попробуйте выбрать знак через несколько минут</p> 
			  }
		  </div>
		</div>
		</div>
		</>
	  );
	  
	}

export default Home;
