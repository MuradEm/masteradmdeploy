
import { Container } from "./styles"
import { Chart as ChartJs, ArcElement } from "chart.js/auto";
import { Line, Bar, Chart } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { useTranslation } from "react-i18next";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../services/context";
import { get_new_users, get_reports_by_month, get_tasklists_summ, get_users_by_portals } from "@/lib/apicalls";

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
export function ChartPortalsDetails() {
  const { t } = useTranslation();
  
  const [gotData, setGotData] = useState<boolean>(false);

  const [labels, setLabels] = useState<Array<string>>([]);
  const [tempLabels, setTempLabels] = useState<Array<string>>([]);
  const [chartHeight, setChartHeight] = useState<string>("");
  const [information, setInformation] = useState<Array<number>>([]);
  const [newData, setNewData] = useState<any>({
     labels: [],
    datasets: [{
      barThickness: 20,
    categoryPercentage: 0.35  , 
    label: 'Easy as', 
    data: [],
  }],  

  } );
  const [linewData, setLineData] = useState<any>({
    labels: "",
    datasets: [{
      label: {display:false},
      data: "",
      backgroundColor: [
        '#024089',
        
      ],
      borderColor: [
        '#024089',
        
      ],
    }]
  });
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
          const temp = await get_users_by_portals();//year_month total
          setInformation([]);
          setLabels([]);
          setTempLabels([]);
          temp.map((info: { portal: string; total_users: any; }, index: number)=> {
            
            if(info.portal==tempLabels[index])
            {
              return
            }
            else{
              labels.push(info.portal);
              tempLabels.push(info.portal);
              information.push(info.total_users);
              
              setChartHeight((information.length * 70).toString() + "px");
            }
            
          });
          
          
            setNewData({
              
              labels: labels,
              borderColor : "#0000",
              legend:{display:false},
              datasets: [{
                barThickness: 30,
                barPercentage: 0.5, 
                label: `${t("Users")}`,
                type: 'bar' as const,
                data: information,  
                legend:{display:false},
                backgroundColor: [  
                  '#024089',
                  
                ],
                borderColor: [
                  '#024089',
                  
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
                  y:{
                    gridlines:{
                      display: false,
                    },
                    grid:{
                      display:false,
                    },
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

  useEffect(() => {
    get_data();
  }, []);
 
  

  return (
    <Container>
      <div className="bar-container">
      <div className="bargraph" style={{height: `${chartHeight}` }} > <Chart data={newData} options={lineOptions} type={"bar"} ></Chart> </div>
        
      </div>
      
      {/* <h2>{t("TaskList in the last 30 days")}</h2> */}
      
    </Container>
  );
}
