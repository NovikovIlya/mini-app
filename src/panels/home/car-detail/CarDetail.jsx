
import { Link, useParams } from 'react-router-dom'

import CarItem from '../car-item/CarItem'




const CarDetail = ({car}) => {
    const {id} = useParams()

    

    return (
        <div className='main'>
            <Link className='linka' to='/'> ← Назад</Link>
            <CarItem car={car}/>
            
            
            
        </div>
    )
    
}

export default CarDetail