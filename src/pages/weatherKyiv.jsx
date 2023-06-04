import Component1 from "@/components/component1/Component1"
import Link from "next/link"
const WeatherKyiv=()=>{
    return (    
    <>
        <h1>Погода в Киеве сегодня</h1>
        <Component1 prop1="Пропс 1" prop2="Пропс 2" prop3="Пропс 3"/>
        <Link href='/'>Вернуться на домашнюю страницу</Link>
     </>
     )
        
 
 
}

export default WeatherKyiv