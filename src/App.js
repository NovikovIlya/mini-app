import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import {Alert , View, ScreenSpinner, AdaptivityProvider, AppRoot, ConfigProvider, SplitLayout, SplitCol } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import Persik from './panels/Persik';

const App = () => {
	
	const [actionsLog, setActionsLog] = React.useState([]);
	useEffect(()=>{
		async function hahaha(){
			if(window.localStorage.getItem('dataKey') === '1'){
				return;
			
			}else if (window.localStorage.getItem('dataKey') === '2'){
				const d = new Date();
				let day = d.getDate();
				if(day === 1){
					localStorage.removeItem('dataKey')
				}
				return;
			}
			
			else {
				openDeletion()
				
			}
		}
		setTimeout(hahaha,2000)
		
  		
  
	},[])

	const otpravka = () =>{
		try {
			async function mde(){
				const pushii = await bridge.send('VKWebAppAllowNotifications')
				const res = pushii.result
				// window.localStorage.setItem('dataKey', '1')
				console.log(res);
				
				if (res === true){
					window.localStorage.setItem('dataKey', '1')
				}else {
					window.localStorage.setItem('dataKey', '2')
				}
			}
			mde()
			
		} catch (error) {
			window.localStorage.setItem('dataKey', '2')
		}
	}

	const closePopout = () => {
		setPopout(null);
	  };

	const openDeletion = () => {
		setPopout(
		  <Alert
			actions={[
			  {
				title: 'Отказаться',
				autoClose: true,
				mode: 'cancel',
				action: ()=>{
					window.localStorage.setItem('dataKey', '2')
				}
			  },
			  {
				title: 'Подписаться',
				autoClose: true,
				mode: 'destructive',
				action: () => otpravka(),
			  },
			]}
			actionsLayout="horizontal"
			onClose={()=>{
				window.localStorage.setItem('dataKey', '2')
				closePopout()}}
			header="Подпишитесь на уведомления!"
			text="Подписавшись, Вы сможете получать уведомления о новых предсказаниях!"
		  />,
		);
	  };

	//   React.useEffect(() => {
	// 	openDeletion();
	//   }, []);
	


	bridge.send('VKWebAppResizeWindow', {
		width: 800,
		// height: 1370
		height: 1126
		})
		.then((data) => { 
		  if (data.width) {
			// Ширина и высота элемента iframe изменены
		  }
		})
		.catch((error) => {
		  // Ошибка
		  console.log(error);
		});

	const [activePanel, setActivePanel] = useState('home');
	const [fetchedUser, setUser] = useState(null);
	const [popout, setPopout] = useState();

	useEffect(() => {
		async function fetchData() {
			// bridge.send("VKWebAppAllowNotifications");
			const user = await bridge.send('VKWebAppGetUserInfo');
			console.log(user)
			setUser(user);
			setPopout(null);
		}
		fetchData();
	}, []);

	const go = e => {
		setActivePanel(e.currentTarget.dataset.to);
	};

	return (
		<ConfigProvider>
			<AdaptivityProvider>
				<AppRoot>
					<SplitLayout popout={popout} >
						<SplitCol>
							<View activePanel={activePanel}>
								<Home id='home' fetchedUser={fetchedUser} go={go} />
								<Persik id='persik' go={go} />
								{actionsLog.map((value, i) => (
									<Div key={i}>{value}</Div>
								))}
							</View>
						</SplitCol>
					</SplitLayout>
				</AppRoot>
			</AdaptivityProvider>
		</ConfigProvider>
	);
}

export default App;
