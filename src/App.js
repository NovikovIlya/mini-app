import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import { View, ScreenSpinner, AdaptivityProvider, AppRoot, ConfigProvider, SplitLayout, SplitCol } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import Persik from './panels/Persik';

const App = () => {
	useEffect(()=>{
		async function hahaha(){
			if(window.localStorage.getItem('dataKey') === '1'){
				return
			
			}else {
				const pushii = await bridge.send('VKWebAppAllowNotifications')
				const res = pushii.result
				window.localStorage.setItem('dataKey', '1')
				if (res !== true){
					console.log(pushii);
				}else {
					return console.log(pushii);
				}
			}
		}
		setTimeout(hahaha,2000)
  		
  
	},[])
	


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
	const [popout, setPopout] = useState(<ScreenSpinner size='large' />);

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
					<SplitLayout >
						<SplitCol>
							<View activePanel={activePanel}>
								<Home id='home' fetchedUser={fetchedUser} go={go} />
								<Persik id='persik' go={go} />
							</View>
						</SplitCol>
					</SplitLayout>
				</AppRoot>
			</AdaptivityProvider>
		</ConfigProvider>
	);
}

export default App;
