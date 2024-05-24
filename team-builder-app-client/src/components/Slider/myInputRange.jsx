import { useState } from 'react'
import style from './myInputRange.module.css'



const MyInputRange = (props) => {


    const [score, setScore] = useState(0)


    const getBlock = (sumScore, score, num) => {

        if ((num - (10 - sumScore + score)) > 0) { return 'red' }
        return 'green'


    }


    const ticket = (sumScore) => {

        let d = []
        for (let t = 0; t < 11; t++) {
            d.push(<span key={t} className={style.ticket} style={{ color: getBlock(sumScore, score, t) }}>{t}</span>)
        }
        return (
            <div className={style.tickets}>
                {d}
            </div>

        )

    }


    const onchange = (event) => {



        if (((10 - props.sumScore + score) - +event.target.value) < 0) {
            return
        }
        setScore(+event.target.value)
        // console.log('onchange', event.target.value, props.name)
        props.setValue(props.name, +event.target.value)


    }


    // const getOffset = () => {
    //     const width = refa.current?.offsetWidth
    //     console.log('width', width)
    //     const step = width / 10

    //     console.log('RETURN', step, score)
    //     return step * score || 0
    // }


    return (<div className={style.myInput}>

        <input className={style.input} type="range" onChange={(e) => onchange(e)} min="0" max="10" step="1" value={score} />


        {
            ticket(props.sumScore)
        }

        <div className={style.shoiceValue} style={{ left: `calc(${(score) * 10 * 0.98}%)` }}>{score}</div>

    </div >)
}

export default MyInputRange