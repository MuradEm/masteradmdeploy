
import { Container } from "./styles"
import { Chart as ChartJs, ArcElement } from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import indicatorLeft from '../../assets/icons/IndicatorLeft.svg'
import indicatorRight from '../../assets/icons/IndicatorRight.svg'
import indicatorCenter from '../../assets/icons/IndicatorCenter.svg'
import { useTranslation } from "react-i18next";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../services/context";
import { get_tasks_summ } from "@/lib/apicalls";
import { getXY } from "@/lib/charts";

/*##########################################################
***Component***
    GraphicTasks
***Description***
    Shows the number of user's tasks on active projects
##########################################################*/

ChartJs.register(ArcElement, ChartDataLabels);

interface Props {
  tasks_deleted: string;
  tasks_created: string;
  tasks_closed: string;
}
export function ChartTasks() {
  const { t } = useTranslation();
  const [dataGraphic, setDataGraphic] = useState<Props>({
    tasks_deleted: "0",
    tasks_created: "0",
    tasks_closed: "0",
  });
  const screenSize = typeof window !== 'undefined' && typeof window.navigator !== 'undefined' ? window.innerWidth: 1080;
  
  async function get_data() {
    const temp = await get_tasks_summ();
      
    setDataGraphic({tasks_created: temp[0].total_created, tasks_deleted: temp[0].total_deleted, tasks_closed: temp[0].total_closed});
  }
  function get_data_total() {
    return (get_data_real(Number(dataGraphic.tasks_created))+get_data_real(Number(dataGraphic.tasks_closed))+get_data_real(Number(dataGraphic.tasks_deleted)));
  }
  function get_data_real(data: number)
  {
    return  data==0?0:(data/(Number(dataGraphic.tasks_closed)+Number(dataGraphic.tasks_created)+Number(dataGraphic.tasks_deleted)))>=0.139? data: (Number(dataGraphic.tasks_closed)+Number(dataGraphic.tasks_created)+Number(dataGraphic.tasks_deleted))*0.14
    
  }
useEffect(() => {
  get_data();
}, []);

   
  const data1 = {
    labels: ["Closed","Created","Deleted" ],
    datasets: [
      {
        
        data: [
          get_data_real(Number(dataGraphic.tasks_closed)) ,
          get_data_real(Number(dataGraphic.tasks_created)),
          get_data_real(Number(dataGraphic.tasks_deleted)),
         
          


        ],
        borderRadius: [{
            outerStart: get_data_total()== get_data_real(Number(dataGraphic.tasks_closed))||get_data_total()== get_data_real(Number(dataGraphic.tasks_created))||get_data_total()== get_data_real(Number(dataGraphic.tasks_deleted))?0:3,
            innerStart: get_data_total()== get_data_real(Number(dataGraphic.tasks_closed))||get_data_total()== get_data_real(Number(dataGraphic.tasks_created))||get_data_total()== get_data_real(Number(dataGraphic.tasks_deleted))?0:3,
            outerEnd:  get_data_total()== get_data_real(Number(dataGraphic.tasks_closed))||get_data_total()== get_data_real(Number(dataGraphic.tasks_created))||get_data_total()== get_data_real(Number(dataGraphic.tasks_deleted))?0:3 ,
            innerEnd: get_data_total()== get_data_real(Number(dataGraphic.tasks_closed))||get_data_total()== get_data_real(Number(dataGraphic.tasks_created))||get_data_total()== get_data_real(Number(dataGraphic.tasks_deleted))?0:3 ,
          }],
        backgroundColor: ["#44BD32","#D1D1D1","#F5F5F5",],
        
      },
    ],
  };
 
  const options1 = {
    plugins: {
      legend: {
          display: false
      },
      datalabels: {
        display: false
      }
    },
      
    elements: {
      arc: {
        borderWidth: 0, //Vocês aí
        
      },
    },
    spacing: get_data_total()== get_data_real(Number(dataGraphic.tasks_closed))||get_data_total()== get_data_real(Number(dataGraphic.tasks_created))||get_data_total()== get_data_real(Number(dataGraphic.tasks_deleted))?0:2,
    cutout: "60%",
   
  };
  

  return (
    <Container>
      <div className="doughnut-container">
      <div className="doughnut-graph"> <Doughnut data={data1} options={options1}></Doughnut> </div>
      <div className="doughnut-pointer-container">
      {Number(dataGraphic.tasks_closed)!=0?(
        <div className="doughnut-pointer1" style={{
          marginTop: (getXY( get_data_real( Number(dataGraphic.tasks_closed))/2, get_data_total(),screenSize>720?6.375: 5)[1] *16),
          marginLeft: (get_data_real(Number(dataGraphic.tasks_closed))/2)/get_data_total()>=(0.5)?getXY( get_data_real(Number(dataGraphic.tasks_closed))/2, get_data_total(),screenSize>720?6.375: 5)[0] *32 -122:getXY( get_data_real(Number(dataGraphic.tasks_closed))/2, get_data_total(),screenSize>720?6.375: 5)[0] *32
          }}> 
            {(get_data_real(Number(dataGraphic.tasks_closed))/2/get_data_total())>=0.5?(
            (get_data_real(Number(dataGraphic.tasks_closed))/2/get_data_total())<0.75  ?
                 <>
                   <img src={indicatorRight.src} style={{marginLeft:'0', marginTop: '0px', transform: `scale(-1, 1)`, gridRow:1, gridColumn:1}}/>
                   <h1 className="leftdown1">{t("Closed")}</h1>
                   <h1 className="leftdown2">{Number(dataGraphic.tasks_closed)+" " + t("Tasks")}</h1>
                 </>:
                  <>
                    <img src={indicatorLeft.src} style={{marginLeft:'0', marginTop: '0px', gridRow:1, gridColumn:1}}/>
                    <h1 className="left1">{t("Closed")}</h1>
                <h1 className="left2">{Number(dataGraphic.tasks_closed)+" " + t("Tasks")}</h1>
                   </>):
                 ((get_data_real(Number(dataGraphic.tasks_closed))/2)/get_data_total())>0.25?
                 (
                 <>
                  <img src={indicatorRight.src} style={{marginLeft:'122px',marginTop: '0px', gridRow:1, gridColumn:1}}/>
                  <h1 className="rightdown1">{t("Closed")}</h1>
                <h1 className="rightdown2" >{Number(dataGraphic.tasks_closed)+" " + t("Tasks")}</h1>
                 </>): 
                 (<>
                  <img src={indicatorLeft.src} style={{marginLeft:'122px',marginTop: '0px', transform: `scale(-1, 1)`, gridRow:1, gridColumn:1}}/>
                  <h1 className="right1">{t("Closed")}</h1>
                <h1 className="right2">{Number(dataGraphic.tasks_closed)+" " + t("Tasks")}</h1>
                  </>
                 )}
                
          </div>):null}
          {Number(dataGraphic.tasks_created)!=0?(
          <div className="doughnut-pointer1" style={{
          marginTop: (getXY( get_data_real(Number(dataGraphic.tasks_created))/2+get_data_real(Number(dataGraphic.tasks_closed)), get_data_total(),screenSize>720?6.375: 5)[1] *16),
          marginLeft: ((get_data_real(Number(dataGraphic.tasks_created))/2+get_data_real(Number(dataGraphic.tasks_closed)))/get_data_total())>=(0.5)? (getXY( get_data_real(Number(dataGraphic.tasks_created))/2+get_data_real(Number(dataGraphic.tasks_closed)), get_data_total(),screenSize>720?6.375: 5)[0] *32)-122  :(getXY( get_data_real(Number(dataGraphic.tasks_created))/2+get_data_real(Number(dataGraphic.tasks_closed)), get_data_total(),screenSize>720?6.375: 5)[0] *32)
          }}> 
          {(((get_data_real(Number(dataGraphic.tasks_created))/2)+get_data_real(Number(dataGraphic.tasks_closed)))/get_data_total())>=0.5?(
            (((get_data_real(Number(dataGraphic.tasks_created))/2)+get_data_real(Number(dataGraphic.tasks_closed)))/get_data_total())<0.75  ?
                <>
                <img src={indicatorRight.src} style={{marginLeft:'0', marginTop: '0px', transform: `scale(-1, 1)`, gridRow:1, gridColumn:1}}/>
                <h1 className="leftdown1">{t("Created")}</h1>
                <h1 className="leftdown2">{Number(dataGraphic.tasks_created)+" " + t("Tasks")}</h1>
              </>:
                 <>
                 <img src={indicatorLeft.src} style={{marginLeft:'0', marginTop: '0px', gridRow:1, gridColumn:1}}/>
                 <h1 className="left1">{t("Created")}</h1>
                 <h1 className="left2">{Number(dataGraphic.tasks_created)+" " + t("Tasks")}</h1>
                </>):
                 (((get_data_real(Number(dataGraphic.tasks_created))/2)+get_data_real(Number(dataGraphic.tasks_closed)))/get_data_total())>0.25?
                 (<>
                  <img src={indicatorRight.src} style={{marginLeft:'122px',marginTop: '0px', gridRow:1, gridColumn:1}}/>
                  <h1 className="rightdown1">{t("Created")}</h1>
                  <h1 className="rightdown2" >{Number(dataGraphic.tasks_created)+" " + t("Tasks")}</h1>
                 </>): 
                 (<>
                  <img src={indicatorLeft.src} style={{marginLeft:'122px',marginTop: '0px', transform: `scale(-1, 1)`, gridRow:1, gridColumn:1}}/>
                  <h1 className="right1">{t("Created")}</h1>
                  <h1 className="right2">{Number(dataGraphic.tasks_created)+" " + t("Tasks")}</h1>
                  </>)}
                 
          </div>):null
          }
          {Number(dataGraphic.tasks_deleted)!=0?(
          <div className="doughnut-pointer1" style={{
          marginTop: (getXY( get_data_real(Number(dataGraphic.tasks_deleted))/2+get_data_real(Number(dataGraphic.tasks_created))+get_data_real(Number(dataGraphic.tasks_closed)), get_data_total(),screenSize>720?6.375: 5)[1] *16),
          marginLeft: (((get_data_real(Number(dataGraphic.tasks_deleted))/2)+get_data_real(Number(dataGraphic.tasks_created))+get_data_real(Number(dataGraphic.tasks_closed)))/get_data_total())>=(0.5)? (getXY( get_data_real(Number(dataGraphic.tasks_deleted))/2+get_data_real(Number(dataGraphic.tasks_created))+get_data_real(Number(dataGraphic.tasks_closed)), get_data_total(),screenSize>720?6.375: 5)[0] *32)-122: (getXY( (get_data_real(Number(dataGraphic.tasks_deleted))/2)+Number(dataGraphic.tasks_created)+Number(dataGraphic.tasks_closed), get_data_total(),screenSize>720?6.375: 5)[0] *32)
          }}> 
                {(((get_data_real(Number(dataGraphic.tasks_deleted))/2)+get_data_real(Number(dataGraphic.tasks_created))+get_data_real(Number(dataGraphic.tasks_closed)))/get_data_total())>=0.5?(
            (((get_data_real(Number(dataGraphic.tasks_deleted))/2)+get_data_real(Number(dataGraphic.tasks_created))+get_data_real(Number(dataGraphic.tasks_closed)))/get_data_total())<0.75  ?
                <>
                <img src={indicatorRight.src} style={{marginLeft:'', marginTop: '0px', transform: `scale(-1, 1)`, gridRow:1, gridColumn:1}}/>
                <h1 className="leftdown1">{t("Deleted")}</h1>
                <h1 className="leftdown2">{Number(dataGraphic.tasks_deleted)+" " + t("Tasks")}</h1>
                </>
                 :
                 <>
                 <img src={indicatorLeft.src} style={{marginLeft:'', marginTop: '0px', gridRow:1, gridColumn:1}}/>
                 <h1 className="left1">{t("Deleted")}</h1>
                 <h1 className="left2">{Number(dataGraphic.tasks_deleted)+" " + t("Tasks")}</h1>
                </>):
                 (((get_data_real(Number(dataGraphic.tasks_deleted))/2)+get_data_real(Number(dataGraphic.tasks_created))+get_data_real(Number(dataGraphic.tasks_closed)))/get_data_total())>0.25?
                 (<>
                  <img src={indicatorRight.src} style={{marginLeft:'122px',marginTop: '0px', gridRow:1, gridColumn:1}}/>
                  <h1 className="rightdown1">{t("Deleted")}</h1>
                  <h1 className="rightdown2" >{Number(dataGraphic.tasks_deleted)+" " + t("Tasks")}</h1>
                 </>): 
                 (<>
                  <img src={indicatorLeft.src} style={{marginLeft:'122px',marginTop: '0px', transform: `scale(-1, 1)`, gridRow:1, gridColumn:1}}/>
                  <h1 className="right1">{t("Deleted")}</h1>
                  <h1 className="right2">{Number(dataGraphic.tasks_deleted)+" " + t("Tasks")}</h1>
                  </>)}
          </div>):null
          }
        </div>
      </div>
      {/* <h2>{t("TaskList in the last 30 days")}</h2> */}
      <footer>
      <div
          className={
            Number(dataGraphic.tasks_closed) > 0 ? "legend show" : "legend"
          }
        >
          <span className="color closed"></span>
          <h4>{t("Closed")}</h4>
        </div>

        <div
          className={
            Number(dataGraphic.tasks_created) > 0 ? "legend show" : "legend"
          }
        >
          <span className="color created"></span>
          <h4>{t("Created")}</h4>
        </div>

        <div
          className={
            Number(dataGraphic.tasks_deleted) > 0 ? "legend show" : "legend"
          }
        >
          <span className="color excluded"></span>
          <h4>{t("Deleted")}</h4>
        </div>
        
        
        
      </footer>
    </Container>
  );
}
