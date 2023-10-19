
import { Container } from "./styles"
import { Chart as ChartJs, ArcElement } from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import 'chartjs-plugin-outerlabels';
import { useTranslation } from "react-i18next";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../services/context";
import { get_tasklists_summ } from "@/lib/apicalls";
import { getXY } from "@/lib/charts";
import indicatorLeft from '../../assets/icons/IndicatorLeft.svg'
import indicatorRight from '../../assets/icons/IndicatorRight.svg'
import indicatorCenter from '../../assets/icons/IndicatorCenter.svg'
/*##########################################################
***Component***
    GraphicTasks
***Description***
    Shows the number of user's tasks on active projects
##########################################################*/

ChartJs.register(ArcElement, ChartDataLabels);
interface Props {
  tasklists_archived: string;
  tasklists_created: string;
}

const screenSize = typeof window !== 'undefined' && typeof window.navigator !== 'undefined' ? window.innerWidth: 1080;
export function ChartTasklist() {
  const { t } = useTranslation();
  const [dataGraphic, setDataGraphic] = useState<Props>({
    tasklists_archived: "0",
    tasklists_created: "0",
  });


    async function get_data() {
       const temp = await get_tasklists_summ();
        
      // console.log(temp[0].total_archived);
      setDataGraphic({tasklists_created: temp[0].total_active, tasklists_archived: temp[0].total_archived}); 
    
        
      
    }
    function get_data_total() {
      return (get_data_real(Number(dataGraphic.tasklists_created))+get_data_real(Number(dataGraphic.tasklists_archived)));
    }
    function get_data_real(data: number)
    {
      return  data==0?0:(data/(Number(dataGraphic.tasklists_created)+Number(dataGraphic.tasklists_archived)))>=0.139? data: (Number(dataGraphic.tasklists_created)+Number(dataGraphic.tasklists_archived))*0.14
      
    }
  useEffect(() => {
    get_data();
  }, []);

   
  const data1 = {
    labels: ["Created","Archived"],
    datasets: [
      {
        data: [
          get_data_real(Number(dataGraphic.tasklists_created)),
          get_data_real( Number(dataGraphic.tasklists_archived)),
          


        ],
        borderRadius: [{
            outerStart: Number(dataGraphic.tasklists_created)==0||Number(dataGraphic.tasklists_archived)==0?0:3,
            innerStart: Number(dataGraphic.tasklists_created)==0||Number(dataGraphic.tasklists_archived)==0?0:3,
            outerEnd:  Number(dataGraphic.tasklists_created)==0||Number(dataGraphic.tasklists_archived)==0?0:3 ,
            innerEnd: Number(dataGraphic.tasklists_created)==0||Number(dataGraphic.tasklists_archived)==0?0:3 ,
          }],
        backgroundColor: ["#024089","#d1d1d1"],
        
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
    spacing: Number(dataGraphic.tasklists_created)==0||Number(dataGraphic.tasklists_archived)==0?0:2,
    cutout: "60%",
   
  };
  

  return (
    <Container>
      <div className="doughnut-container">
      <div className="doughnut-graph"> <Doughnut data={data1} options={options1}></Doughnut> </div>
      <div className="doughnut-pointer-container">
      {Number(dataGraphic.tasklists_created)!=0?(
      <div className="doughnut-pointer1" style={{
        marginTop: (getXY( Number(dataGraphic.tasklists_created)/2, get_data_total(),screenSize>720?6.375: 5)[1] *16),
        marginLeft: (get_data_real(Number(dataGraphic.tasklists_created))/2)/get_data_total()>=(0.5)?getXY( get_data_real(Number(dataGraphic.tasklists_created))/2, get_data_total(),screenSize>720?6.375: 5)[0] *32 -122:getXY( get_data_real(Number(dataGraphic.tasklists_created))/2, get_data_total(),screenSize>720?6.375: 5)[0] *32
        }}> 
         {(get_data_real(Number(dataGraphic.tasklists_created))/2/get_data_total())>=0.5?(
            (get_data_real(Number(dataGraphic.tasklists_created))/2/get_data_total())<0.75  ?
                 <>
                   <img src={indicatorRight.src} style={{marginLeft:'0', marginTop: '0px', transform: `scale(-1, 1)`, gridRow:1, gridColumn:1}}/>
                   <h1 className="leftdown1">{t("Created")}</h1>
                   <h1 className="leftdown2">{Number(dataGraphic.tasklists_created)+" " + t("TaskLists")}</h1>
                 </>:
                  <>
                    <img src={indicatorLeft.src} style={{marginLeft:'0', marginTop: '0px', gridRow:1, gridColumn:1}}/>
                    <h1 className="left1">{t("Created")}</h1>
                <h1 className="left2">{Number(dataGraphic.tasklists_created)+" " + t("TaskLists")}</h1>
                   </>):
                 ((get_data_real(Number(dataGraphic.tasklists_created))/2)/get_data_total())>0.25?
                 (
                 <>
                  <img src={indicatorRight.src} style={{marginLeft:'122px',marginTop: '0px', gridRow:1, gridColumn:1}}/>
                  <h1 className="rightdown1">{t("Created")}</h1>
                <h1 className="rightdown2" >{Number(dataGraphic.tasklists_created)+" " + t("TaskLists")}</h1>
                 </>): 
                 (<>
                  <img src={indicatorLeft.src} style={{marginLeft:'122px',marginTop: '0px', transform: `scale(-1, 1)`, gridRow:1, gridColumn:1}}/>
                  <h1 className="right1">{t("Created")}</h1>
                <h1 className="right2">{Number(dataGraphic.tasklists_created)+" " + t("TaskLists")}</h1>
                  </>
                 )} 
         </div>):null}
         {Number(dataGraphic.tasklists_archived)!=0?(
         <div className="doughnut-pointer1" style={{
        marginTop: (getXY( get_data_real(Number(dataGraphic.tasklists_archived))/2+ get_data_real(Number(dataGraphic.tasklists_created)), get_data_total(),screenSize>720?6.375: 5 )[1] *16),
        marginLeft: (get_data_real(Number(dataGraphic.tasklists_archived))/2+ get_data_real(Number(dataGraphic.tasklists_created)))/get_data_total()>=(0.5) ?(getXY( get_data_real(Number(dataGraphic.tasklists_archived))/2+ get_data_real(Number(dataGraphic.tasklists_created)), get_data_total(),screenSize>720?6.375: 5)[0] *32) -122:getXY( get_data_real(Number(dataGraphic.tasklists_archived))/2+ get_data_real(Number(dataGraphic.tasklists_created)), get_data_total(),screenSize>720?6.375: 5)[0] *32
        }}> 
         {((get_data_real(Number(dataGraphic.tasklists_archived))/2 + get_data_real((Number(dataGraphic.tasklists_created))))/get_data_total())>=0.5?(
            ((get_data_real(Number(dataGraphic.tasklists_archived))/2+ get_data_real((Number(dataGraphic.tasklists_created))))/get_data_total())<0.75  ?
                 <>
                   <img src={indicatorRight.src} style={{marginLeft:'0', marginTop: '0px', transform: `scale(-1, 1)`, gridRow:1, gridColumn:1}}/>
                   <h1 className="leftdown1">{t("Archived")}</h1>
                   <h1 className="leftdown2">{Number(dataGraphic.tasklists_archived)+" " + t("TaskLists")}</h1>
                 </>:
                  <>
                    <img src={indicatorLeft.src} style={{marginLeft:'0', marginTop: '0px', gridRow:1, gridColumn:1}}/>
                    <h1 className="left1">{t("Archived")}</h1>
                <h1 className="left2">{Number(dataGraphic.tasklists_archived)+" " + t("TaskLists")}</h1>
                   </>):
                 ((get_data_real(Number(dataGraphic.tasklists_archived))/2+ get_data_real((Number(dataGraphic.tasklists_created))))/get_data_total())>0.25?
                 (
                 <>
                  <img src={indicatorRight.src} style={{marginLeft:'122px',marginTop: '0px', gridRow:1, gridColumn:1}}/>
                  <h1 className="rightdown1">{t("Archived")}</h1>
                <h1 className="rightdown2" >{Number(dataGraphic.tasklists_archived)+" " + t("TaskLists")}</h1>
                 </>): 
                 (<>
                  <img src={indicatorLeft.src} style={{marginLeft:'122px',marginTop: '0px', transform: `scale(-1, 1)`, gridRow:1, gridColumn:1}}/>
                  <h1 className="right1">{t("Archived")}</h1>
                <h1 className="right2">{Number(dataGraphic.tasklists_archived)+" " + t("TaskLists")}</h1>
                  </>
                 )} 
         </div>):null
         }
      </div>
      </div> 
      {/* <h2>{t("TaskList in the last 30 days")}</h2> */}
      <footer>
      <div
          className={
            Number(dataGraphic.tasklists_created) > 0 ? "legend show" : "legend"
          }
        >
          <span className="color created"></span>
          <h4>{t("Created")}</h4>
        </div>
        <div
          className={
            Number(dataGraphic.tasklists_archived) > 0 ? "legend show" : "legend"
          }
        >
          <span className="color archived"></span>
          <h4>{t("Archived")}</h4>
        </div>
        
        
      </footer>
    </Container>
  );
}
