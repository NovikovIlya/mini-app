import styles from './../Home.module.css'







function CarItem({car}){
 
    console.log(car)
    return(
        <div className={styles.item}>
            {/* <Link className='linka' to='/'> ← Назад</Link> */}
            {/* <div className={styles.image} style={{backgroundImage:`url(${car.image})`}}></div> */}
            <div className={styles.info}>
            <img className='imageHead' src='https://i.ibb.co/StMymcp/A4k-H2n-gr-transformed.png'></img>
            <h1 className='highText'>{car.dataName}</h1>
            <div>
            
                <img className='imageZodiac'   src={
                car.dataName === 'Близнецы'? 'https://i.ibb.co/BccN1Xj/image.png': 
                car.dataName === 'Овен'? 'https://i.ibb.co/WBwN4Fg/image.png': 
                car.dataName === 'Телец'? 'https://i.ibb.co/Npy32cv/image.png': 
                car.dataName === 'Рак'? 'https://i.ibb.co/bFxhsnR/image.png': 
                car.dataName === 'Лев'? 'https://i.ibb.co/gdD6Pvc/image.png': 
                car.dataName === 'Дева'? 'https://i.ibb.co/Yk58mVH/image.png': 
                car.dataName === 'Весы'? 'https://upload.wikimedia.org/wikipedia/commons/7/74/RR5110-0042R_%D0%92%D0%B5%D1%81%D1%8B.gif': 
                car.dataName === 'Скорпион'? 'https://upload.wikimedia.org/wikipedia/commons/1/11/RR5110-0043R_%D0%A1%D0%BA%D0%BE%D1%80%D0%BF%D0%B8%D0%BE%D0%BD.gif': 
                car.dataName === 'Стрелец'? 'https://i.ibb.co/YP6FTvB/image.png': 
                car.dataName === 'Козерог'? 'https://i.ibb.co/ZfCPJvd/image.png': 
                car.dataName === 'Водолей'? 'https://i.ibb.co/5xzMgHM/image.png': 
                car.dataName === 'Рыбы'? 'https://i.ibb.co/K2hcJd1/image.png': 
                ''} alt="" />
            </div>
            {/* {/person/ig.test(window.location.href)? <img className='images' src="https://img.freepik.com/premium-vector/occult-esoteric-tarot-card-symbol-baphomet-skull_8071-24482.jpg" alt="Avatar" /> : '' } */}
            {/* <h2>Узнайте</h2> */}
            {/* {/person/ig.test(window.location.href)? '' : <Link to={`person/${car.id}`} className='btn'>Узнать больше</Link> } */}
            <p className='para'>{car.data}</p>
            <img className='imageHead imageHead__two' src='https://i.ibb.co/StMymcp/A4k-H2n-gr-transformed.png'></img>
       
            </div>
        </div>
    )
}

export default CarItem;