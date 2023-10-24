

import { Container } from "./styles"
import { Chart as ChartJs, ArcElement } from "chart.js/auto";
import { Line, Bar, Chart } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { useTranslation } from "react-i18next";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../services/context";
import { get_new_users, get_projects_by_portals, get_reports_by_month, get_reports_by_portals, get_tasklists_by_portals, get_tasklists_summ, get_users_by_portals } from "@/lib/apicalls";

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
export function ChartTasklistDetailed() {
  const { t } = useTranslation();
  
  const [gotData, setGotData] = useState<boolean>(false);
  const [labels, setLabels] = useState<Array<string>>([]);
  const [tempLabels, setTempLabels] = useState<Array<string>>([]);
  const [chartHeight, setChartHeight] = useState<string>("");
  const [informationCreated, setInformationCreated] = useState<Array<number>>([]);
  const [informationArchived, setInformationArchived] = useState<Array<number>>([]);
 
  const [newData, setNewData] = useState<any>({
     labels: [],
    datasets: [{
      barThickness: 20,
    categoryPercentage: 0.35  , 
    label: 'Easy as', 
    data: [],
  }],  

  } );
  
  const [lineOptions, setLineOptions]   = useState<any>({
    indexAxis: 'y', // <-- here
    responsive: true,
    scales: {
      yAxes: [{
          barThickness: 6,  // number (pixels) or 'flex'
          maxBarThickness: 6 // number (pixels)
      }]
    }, 
    plugins: {
      legend: {
        display: false
    },
    }
  });
  
     async function get_data() {
        if(!gotData)
        {
          setGotData(true);
          const temp = await get_tasklists_by_portals();//year_month total
          setInformationCreated([]);
          setInformationArchived([]);
          setLabels([]);
          setTempLabels([]);
          temp.map((info: { portal: string; total_active: any; total_archived: any;}, index: number)=> {
            
            if(info.portal==tempLabels[index])
            {
              return
            }
            else{
              labels.push(info.portal);
              tempLabels.push(info.portal);
              informationCreated.push(info.total_active);
              informationArchived.push(info.total_archived);
              
              

              setChartHeight((informationCreated.length * 70).toString() + "px");
            }
            
          });
          
          
            setNewData({
              
              labels: labels,
              borderColor : "#0000",
              legend:{display:false},
              datasets: [{
                barThickness: 30,
                barPercentage: 0.5, 
                label: `${t("Created")}`,
                type: 'bar' as const,
                data: informationCreated,  
                legend:{display:false},
                backgroundColor: [  
                  '#024089',
                  
                ],
                borderColor: [
                  '#024089',
                  
                ],
              },
              {
                barThickness: 30,
                barPercentage: 0.5, 
                label: `${t("Archived")}`,
                type: 'bar' as const,
                data: informationArchived,  
                legend:{display:false},
                backgroundColor: [  
                  '#D1D1D1',
                  
                ],
                borderColor: [
                  '#D1D1D1',
                  
                ],
              },
            ]
            });
            setLineOptions(
              {
                responsive: true,
                maintainAspectRatio: false,
                indexAxis: 'y', // <-- here
                legend:{
                  display:false,
                },
                scales: {
                  yAxes: [{
                      barThickness: 6,  // number (pixels) or 'flex'
                      maxBarThickness: 6 // number (pixels)
                  }],
                  x: {
                    stacked: true,
                  },
                  y: {
                    gridlines:{
                      display: false,
                    },
                    grid:{
                      display:false,
                    },
                    stacked: true,
                    ticks:{
                      font:{
                        color: '#2F3640',
                        family: 'Inter',
                        size: 16,
                        style: 'normal',
                        weight: 400,
                        height: 20,
                      }  
                      
                    
                  }
                  }
                  
              },
              plugins: {
                datalabels: {
                  display: false
                },
                legend: {
                  display: false
              },
              },
               }
            );
          
        }   
     }
     function getRandomColor(){
      const precolor = (Math.floor(Math.random()*16777215).toString(16))
      const color ='#' +( (precolor.length== 6)? precolor: '0' + precolor)
      console.log(color)
      return  color
     }
     function getLabels(){
      console.log(labels)
      return labels.map((label) => (
          
        <div key = {label} className={ "legend show"  }>
        <span className="color projects"></span>
        <h4>{label}</h4>
        </div>
      
      
    ))
     }

  useEffect(() => {
    get_data();
  }, []);
 
  

  return (
    <Container>
      <div className="bar-container">
      <div className="bargraph" style={{height: `${chartHeight}` }} > <Chart data={newData} options={lineOptions} type={"bar"} ></Chart> </div>
        
      </div>
      
      {/* <h2>{t("TaskList in the last 30 days")}</h2> */}
      <footer>
        <div className={ "legend show"  }>
        <span className="color reports" ></span>
        <h4>{t("Created")}</h4>  
        </div>
        <div className={ "legend show"  }>
        <span className="color hours" ></span>
        <h4>{t("Archived")}</h4>  
        </div>
      </footer>
    </Container>
  );
}
