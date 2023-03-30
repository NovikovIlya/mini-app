import React, { useState,useEffect } from 'react'
import bridge from '@vkontakte/vk-bridge';
import axios from 'axios';



const CreateCarForm = ({setCars,smenaVida,oven1,load}) => {
  const [zad,setZad] = useState(false)
  const [telec,setTelec] = useState(false)

  // function Recomend(){
  //   bridge.send('VKWebAppRecommend')
  //   .then((data) => { 
  //     if (data.result) {
  //     // Мини-приложение порекомендовано
  //     }
  //     console.log(data)
  //   })
  //   .catch((error) => {
  //     // Ошибка
  //     console.log(error);
  //   });
  // }



  bridge.send('VKWebAppCheckNativeAds', { ad_format: 'interstitial' })
  .then((data) => {
    if (data.result) {
      // Предзагруженная реклама есть.

      // Теперь можно создать кнопку
      // "Посмотрите рекламу".   
      // ...
            
    } else {
      console.log('Рекламные материалы не найдены.');
    }
  })
  .catch((error) => { console.log(error); /* Ошибка */  });

// Обработчик нажатия кнопки "Посмотрите рекламу"
function fooButtonClick()
{
  // Показать рекламу
  bridge.send('VKWebAppShowNativeAds', { ad_format: 'interstitial' })
    .then((data) => {
      if (data.result) // Успех
        console.log('Реклама показана');
      else // Ошибка 
        console.log('Ошибка при показе');
    })
    .catch((error) => { console.log(error); /* Ошибка */ });
}

  const [value,setValue] = useState('')



  const createCar = (event,data,dataName) =>{
    event.preventDefault()
    

    // setCars(prev => [{
    //   id:prev.length + 1, data,dataName
    //   },...prev])
    setCars(prev => [{
      id:prev.length + 1, data,dataName
      }])

 
  }

  const handleChange = (event)=>{
    setValue(event.target.value);
    console.log(value);
  }


  

  const MDAs = ()=>{
    console.log(value);
  }

  const handleSubmitKozerog = (event) => {
    event.preventDefault();
    setTimeout(load,2000)
    async function ha(){
      smenaVida();
      const response = await axios.get(`https://api.allorigins.win/raw?url=https://horoscopes.rambler.ru/api/front/v3/horoscope/love/capricorn/today/`)
      const data = response.data.content.text[0].content
      const dataName = 'Козерог'
      createCar(event,data,dataName)
      if (zad === false){
         setTimeout(fooButtonClick,1000)
      } 

      console.log(data);
      console.log(value);
      setZad(true);
    }
    ha()

    
  };
  const handleSubmitOven = (event) => {
    event.preventDefault();
    setTimeout(load,2000)
    async function ha(){
      smenaVida();
      const response = await axios.get(`https://api.allorigins.win/raw?url=https://horoscopes.rambler.ru/api/front/v3/horoscope/love/aries/today/`)
      const data = response.data.content.text[0].content
      const dataName = 'Овен'
      createCar(event,data,dataName)
      if (zad === false){
         setTimeout(fooButtonClick,1000)
      } 

      console.log(data);
      console.log(value);
      setZad(true);
    }
    ha()

  };
  const handleSubmitTaurus = (event) => {

    event.preventDefault();
    setTimeout(load,2000)
    async function ha(){
      smenaVida();
      const response = await axios.get(`https://api.allorigins.win/raw?url=https://horoscopes.rambler.ru/api/front/v3/horoscope/love/taurus/today/`)
      const data = response.data.content.text[0].content
      const dataName = 'Телец'
      createCar(event,data,dataName)

      if (zad === false){
        setTimeout(fooButtonClick,1000)
      } 


      console.log(data);
      console.log(value);
      setZad(true);
    }
    ha()

    
  };
  const handleSubmitGemini = (event) => {
    event.preventDefault();
    setTimeout(load,2000)
    async function ha(){
      smenaVida();
      const response = await axios.get(`https://api.allorigins.win/raw?url=https://horoscopes.rambler.ru/api/front/v3/horoscope/love/gemini/today/`)
      const data = response.data.content.text[0].content
      const dataName = 'Близнецы'
      createCar(event,data,dataName)
      if (zad === false){
         setTimeout(fooButtonClick,1000)
      } 

      console.log(data);
      console.log(value);
      setZad(true);
    }
    ha()

    
  };
  const handleSubmitCancer = (event) => {
    event.preventDefault();
    setTimeout(load,2000)
    async function ha(){
      smenaVida();
      const response = await axios.get(`https://api.allorigins.win/raw?url=https://horoscopes.rambler.ru/api/front/v3/horoscope/love/cancer/today/`)
      const data = response.data.content.text[0].content
      const dataName = 'Рак'
      createCar(event,data,dataName)
      if (zad === false){
         setTimeout(fooButtonClick,1000)
      } 

      console.log(data);
      console.log(value);
      setZad(true);
    }
    ha()

    
  };
  const handleSubmitLeo = (event) => {
    event.preventDefault();
    setTimeout(load,2000)
    async function ha(){
      smenaVida();
      const response = await axios.get(`https://api.allorigins.win/raw?url=https://horoscopes.rambler.ru/api/front/v3/horoscope/love/leo/today/`)
      const data = response.data.content.text[0].content
      const dataName = 'Лев'
      createCar(event,data,dataName)
      if (zad === false){
         setTimeout(fooButtonClick,1000)
      } 

      console.log(data);
      console.log(value);
      setZad(true);
    }
    ha()

    
  };
  const handleSubmitVirgio = (event) => {
    event.preventDefault();
    setTimeout(load,2000)
    async function ha(){
      smenaVida();
      const response = await axios.get(`https://api.allorigins.win/raw?url=https://horoscopes.rambler.ru/api/front/v3/horoscope/love/virgo/today/`)
      const data = response.data.content.text[0].content
      const dataName = 'Дева'
      createCar(event,data,dataName)
      if (zad === false){
         setTimeout(fooButtonClick,1000)
      } 

      console.log(data);
      console.log(value);
      setZad(true);
    }
    ha()

    
  };
  const handleSubmitLibra = (event) => {
    event.preventDefault();
    setTimeout(load,2000)
    async function ha(){
      smenaVida();
      const response = await axios.get(`https://api.allorigins.win/raw?url=https://horoscopes.rambler.ru/api/front/v3/horoscope/love/libra/today/`)
      const data = response.data.content.text[0].content
      const dataName = 'Весы'
      createCar(event,data,dataName)
      if (zad === false){
         setTimeout(fooButtonClick,1000)
      } 

      console.log(data);
      console.log(value);
      setZad(true);
    }
    ha()

    
  };
  const handleSubmitScorpio = (event) => {
    event.preventDefault();
    setTimeout(load,2000)
    async function ha(){
      smenaVida();
      const response = await axios.get(`https://api.allorigins.win/raw?url=https://horoscopes.rambler.ru/api/front/v3/horoscope/love/scorpio/today/`)
      const data = response.data.content.text[0].content
      const dataName = 'Скорпион'
      createCar(event,data,dataName)
      if (zad === false){
         setTimeout(fooButtonClick,1000)
      } 

      console.log(data);
      console.log(value);
      setZad(true);
    }
    ha()

    
  };
  const handleSubmitSagittarius = (event) => {
    event.preventDefault();
    setTimeout(load,2000)
    async function ha(){
      smenaVida();
      const response = await axios.get(`https://api.allorigins.win/raw?url=https://horoscopes.rambler.ru/api/front/v3/horoscope/love/sagittarius/today/`)
      const data = response.data.content.text[0].content
      const dataName = 'Стрелец'
      createCar(event,data,dataName)
      if (zad === false){
         setTimeout(fooButtonClick,1000)
      } 

      console.log(data);
      console.log(value);
      setZad(true);
    }
    ha()

    
  };
  const handleSubmitAquarius = (event) => {
    event.preventDefault();
    setTimeout(load,2000)
    async function ha(){
      smenaVida();
      const response = await axios.get(`https://api.allorigins.win/raw?url=https://horoscopes.rambler.ru/api/front/v3/horoscope/love/aquarius/today/`)
      const data = response.data.content.text[0].content
      const dataName = 'Водолей'
      createCar(event,data,dataName)


      if (zad === false){
         setTimeout(fooButtonClick,1000)
      } 

      console.log(data);
      console.log(value);
      setZad(true);
    }
    ha()

    
  };
  const handleSubmitPisces = (event) => {
    event.preventDefault();
    setTimeout(load,2000)
    async function ha(){
      smenaVida();
      const response = await axios.get(`https://api.allorigins.win/raw?url=https://horoscopes.rambler.ru/api/front/v3/horoscope/love/pisces/today/`)
      const data = response.data.content.text[0].content
      const dataName = 'Рыбы'
      createCar(event,data,dataName)

      if (zad === false){
         setTimeout(fooButtonClick,1000)
      } 

      console.log(data);
      console.log(value);
      setZad(true);
    }
    ha()

    
  };

  

  return (
    <>
    <div className={`modalochka  ${zad ? 'modalochka2' : ''}`}>
        

        <form  id='formElem' > 

          <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
                <h3 className="animate-charcter"> Любовный гороскоп</h3>
              </div>
          </div>
          </div>
        
            
            
            <p className={`nazad ${zad ? 'pokazatZad' : 'scrytZad'}`}  onClick={()=>{
            smenaVida()
            // Recomend()

            }}>←Назад</p>
            <div className='modaleBtn'>
            <div className='textNaz'>{zad? '' : `Выбери свой знак`}</div>
             
              
              <button className='btn1'  onClick={handleSubmitOven}>
                <div className='obolon'>
                  <img className='imageZod' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Aries_symbol_%28fixed_width%29.svg/80px-Aries_symbol_%28fixed_width%29.svg.png'></img>
                  <div>
                    <div className='textObolon'>Овен</div>
                    <div className='textZodiac'>21 марта - 20 апреля</div>
                  </div>
                </div>
              </button>
              <button className='btn1'  onClick={handleSubmitTaurus}>
              <div className='obolon'>
                  <img className='imageZod' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Taurus_symbol_%28fixed_width%29.svg/80px-Taurus_symbol_%28fixed_width%29.svg.png'></img>
                  <div>
                    <div className='textObolon'>Телец</div>
                    <div className='textZodiac'>21 апреля - 21 мая</div>
                  </div>
                </div>
              </button>
              <button className='btn1'  onClick={handleSubmitGemini}>
               <div className='obolon'>
                  <img className='imageZod' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Gemini_symbol_%28fixed_width%29.svg/80px-Gemini_symbol_%28fixed_width%29.svg.png'></img>
                  <div className='shirina'>
                    <div className='textObolon'>Близнецы</div>
                    <div className='textZodiac'>22 мая - 21 июня</div>
                  </div>
                </div>
              </button>
              <button className='btn1'  onClick={handleSubmitCancer}>
                <div className='obolon'>
                  <img className='imageZod' src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Cancer_symbol_%28fixed_width%29.svg/80px-Cancer_symbol_%28fixed_width%29.svg.png'></img>
                  <div className='shirina'>
                    <div className='textObolon'>Рак</div>
                    <div className='textZodiac'>22 июня - 22 июля</div>
                  </div>
                </div>
              </button>
              <button className='btn1'  onClick={handleSubmitLeo}>
                <div className='obolon'>
                  <img className='imageZod' src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Leo_symbol_%28fixed_width%29.svg/80px-Leo_symbol_%28fixed_width%29.svg.png'></img>
                  <div className='shirina'>
                    <div className='textObolon'>Лев</div>
                    <div className='textZodiac'>23 июля - 23 августа</div>
                  </div>
                </div>
              </button>
              <button className='btn1'  onClick={handleSubmitVirgio}>
                <div className='obolon'>
                  <img className='imageZod' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Virgo_symbol_%28fixed_width%29.svg/80px-Virgo_symbol_%28fixed_width%29.svg.png'></img>
                  <div className='shirina'>
                    <div className='textObolon'>Дева</div>
                    <div className='textZodiac'>23 августа - 22 сентября</div>
                  </div>
                </div>
              </button>
              <button className='btn1'  onClick={handleSubmitLibra}>
                <div className='obolon'>
                  <img className='imageZod' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Libra_symbol_%28fixed_width%29.svg/80px-Libra_symbol_%28fixed_width%29.svg.png'></img>
                  <div className='shirina'>
                    <div className='textObolon'>Весы</div>
                    <div className='textZodiac'>23 сентября - 22 октября</div>
                  </div>
                </div>
              </button>
              <button className='btn1'  onClick={handleSubmitScorpio}>
                <div className='obolon'>
                  <img className='imageZod' src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Scorpius_symbol_%28fixed_width%29.svg/80px-Scorpius_symbol_%28fixed_width%29.svg.png'></img>
                  <div className='shirina'>
                    <div className='textObolon'>Скорпион</div>
                    <div className='textZodiac'>23 октября - 21 ноября</div>
                  </div>
                </div>
              </button>
              <button className='btn1'  onClick={handleSubmitSagittarius}>
               <div className='obolon'>
                  <img className='imageZod' src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Sagittarius_symbol_%28fixed_width%29.svg/80px-Sagittarius_symbol_%28fixed_width%29.svg.png'></img>
                  <div className='shirina'>
                    <div className='textObolon'>Стрелец</div>
                    <div className='textZodiac'>22 ноября - 21 декабря</div>
                  </div>
                </div>
              </button>
              <button className='btn1'  onClick={handleSubmitKozerog}>
               <div className='obolon'>
                  <img className='imageZod' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Capricornus_symbol_%28fixed_width%29.svg/80px-Capricornus_symbol_%28fixed_width%29.svg.png'></img>
                  <div className='shirina'>
                    <div className='textObolon'>Козерог</div>
                    <div className='textZodiac'>22 декабря - 19 января</div>
                  </div>
                </div>
              </button>
              <button className='btn1'  onClick={handleSubmitAquarius}>
               <div className='obolon'>
                  <img className='imageZod' src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Aquarius_symbol_%28fixed_width%29.svg/80px-Aquarius_symbol_%28fixed_width%29.svg.png'></img>
                  <div className='shirina'>
                    <div className='textObolon'>Водолей</div>
                    <div className='textZodiac'>20 января - 18 февраля</div>
                  </div>
                </div>
              </button>
              <button className='btn1'  onClick={handleSubmitPisces}>
               <div className='obolon'>
                  <img className='imageZod' src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Pisces_symbol_%28fixed_width%29.svg/80px-Pisces_symbol_%28fixed_width%29.svg.png'></img>
                  <div className='shirina'>
                    <div className='textObolon'>Рыбы</div>
                    <div className='textZodiac'>19 февраля - 20 марта</div>
                  </div>
                </div>
              </button>
            </div>
            
            

        </form>
    </div>
    </>
  )
}

export default CreateCarForm