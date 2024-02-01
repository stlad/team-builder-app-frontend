
import ReactECharts from 'echarts-for-react'; 
import { useState, useEffect } from 'react';
import {getBaseScoreOption, getScoreChartOption} from './charts';

const BelbinResultCharts =(props)=>{

    const [option, setOption] = useState(getBaseScoreOption())

    const handleUpdateChart = (e) =>{
        let inst =  e?.getEchartsInstance();
        // console.log(e)
    }


    //useEffect(()=>{setOption()},[props])
    useEffect(()=>{
        setOption(getScoreChartOption(props.scores))
    }
    ,[props])

    return(
        <div>
            <ReactECharts
            option={option}
            notMerge={true}
            lazyUpdate={true}
            theme={"theme_name"}  
            ref={(e) => { handleUpdateChart(e) }}
            style={{height: '800px', width: '100%'}}
            />
        </div>
    )
}

export default BelbinResultCharts