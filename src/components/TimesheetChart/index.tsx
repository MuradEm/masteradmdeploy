
import { Container } from "./styles"
import { Chart as ChartJs, ArcElement } from "chart.js/auto";
import { Line, Bar, Chart } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { useTranslation } from "react-i18next";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../services/context";
import { get_reports_by_month, get_tasklists_summ } from "@/lib/apicalls";

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
export function ChartTimesheet() {
  const { t } = useTranslation();
  const [dataGraphic, setDataGraphic] = useState<Props>({
    tasklists_archived: "0",
    tasklists_created: "0",
  });
  const [gotData, setGotData] = useState<boolean>(false);

  const [labels, setLabels] = useState<Array<string>>([]);
  const [tempLabels, setTempLabels] = useState<Array<string>>([]);
  const [information, setInformation] = useState<Array<number>>([]);
  const [maxLine, setMaxLine] = useState<number>(50);
  const [maxBar, setMaxBar] = useState<number>(50);
  const [informationLine, setInformationLine] = useState<Array<number>>([]);
  const [newData, setNewData] = useState<any>({
    labels: "",
    datasets: [{
      label: {display:false},
      data: "",
      backgroundColor: [
        '#024089',
        
      ],
      borderColor: [
        'red',
        
      ],
      borderWidth: 1
    }]
  });
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
  const [lineOptions, setLineOptions] = useState<any>({
    reponsive: false,
    maintainAspectRatio: false,
    legend:{
      display:false,
    },
    elements: {
      point:{
          radius: 0
        }
    },
    
    plugins: {
      datalabels: {
        display: false
      }
    },
    scales: {

        x: {
          gridlines:{
            display: false,
          },
          grid:{
            display:false,
          },
            
        },
        y: {
          display:false,
          grid:{
            display:false,
          },
            
        },
        xAxes: [{
          ticks: {
            autoSkip: false
          }
        }],
        A:{
          type: 'linear',
          position: 'right',
          ticksStepSize: 512,
          
        }, 
        B:{
          type: 'linear',
          position: 'left',
          ticks:{
            stepSize: '50',
            autoSkip: false,
          }
        }
      
    }
  });
  function labelsPush(month: string, year:string){
    
    switch (Number(month)){
      case 1: 
      labels.push(t("jan")+"/"+year);
      break;
      case 2: 
      labels.push(t("feb")+"/"+year);
      break;
      case 3: 
      labels.push(t("mar")+"/"+year);
      break;
      case 4: 
      labels.push(t("apr")+"/"+year);
      break;
      case 5: 
      labels.push(t("may")+"/"+year);
      break;
      case 6:
      labels.push(t("jun")+"/"+year);
      break;   
      case 7: 
      labels.push(t("jul")+"/"+year);
      break;
      case 8:
      labels.push(t("aug")+"/"+year); 
      break;
      case 9: 
      labels.push(t("sep")+"/"+year);
      break;
      case 10: 
      labels.push(t("oct")+"/"+year);
      break;
      case 11: 
      labels.push(t("nov")+"/"+year);
      break;
      case 12: 
      labels.push(t("dec")+"/"+year);
      break;
    }
  }
     async function get_data() {
        if(!gotData)
        {
          setGotData(true);
          const temp = await get_reports_by_month();
          setInformation([]);
          setLabels([]);
          setTempLabels([]);
          temp.map((info: { year_month: string; total_reports: any; total_hours: any; }, index: number)=> {
            if(info.year_month==tempLabels[index])
            {
              return
            }
            else{
              if(index>1)
              {
                if(Number(info.year_month.toString().split('0')[1].split('_')[0])>Number(tempLabels[index-1].toString().split('0')[1].split('_')[0])){
                  
                  if(((Number(info.year_month.toString().split('_')[1])+12)- Number(tempLabels[index-1].toString().split('_')[1]))>1){
                   
                    for(let num=0;num<((Number(info.year_month.toString().split('_')[1])+12)-1- Number(tempLabels[index-1].toString().split('_')[1]));num++){
                      const tempMonth = Number(tempLabels[index-1].toString().split('_')[1])+(num+1);
                      
                      if(tempMonth>12)
                        labelsPush((tempMonth-12).toString(),info.year_month.toString().split('0')[1].split('_')[0]);
                      else
                        labelsPush((tempMonth).toString(),tempLabels[index-1].toString().split('0')[1].split('_')[0]);
                      information.push(0);
                      informationLine.push(0);
                    }
                  }
                }
                else{
                  if((Number(info.year_month.toString().split('_')[1])- Number(tempLabels[index-1].toString().split('_')[1]))>1){
                    
                    for(let num=0;num<(Number(info.year_month.toString().split('_')[1])-1- Number(tempLabels[index-1].toString().split('_')[1]));num++){
                      const tempMonth = Number(tempLabels[index-1].toString().split('_')[1])+(num+1);
                      
                      if(tempMonth>12)
                        labelsPush((tempMonth-12).toString(),info.year_month.toString().split('0')[1].split('_')[0]);
                      else
                        labelsPush((tempMonth).toString(),tempLabels[index-1].toString().split('0')[1].split('_')[0]);
                      information.push(0);
                      informationLine.push(0);
                    }
                  }
                }
              }
                tempLabels.push(info.year_month);
                const templabel : string = info.year_month.toString();
                labelsPush(templabel.split('_')[1],templabel.split('0')[1].split('_')[0]);
                information.push(Number(info.total_reports));
                informationLine.push(Number(info.total_hours));
                if(Number(info.total_reports)>Number(maxBar))
                  setMaxBar(Number(info.total_reports));
                if(Number(info.total_hours)>Number(maxLine))
                  setMaxLine(Number(info.total_hours));
            }
            
          });
          
          
            setNewData({
              labels: labels,
              datasets: [{
                yAxisID: 'A',
                label: 'line',
                type: 'line' as const,
                data: informationLine,
                
                legend:{display:false},
                backgroundColor: [  
                  '#FFA500',
                  
                ],
                borderColor: [
                  '#FFA500',
                  
                ],
              },
              {
                yAxisID: 'B',
                label: 'bar',
                type: 'bar' as const,
                data: information,
                backgroundColor: [
                  '#024089',
                  
                ],
                legend:{display:false},
                borderColor: [
                  '#024089',
                  
                ],
              }
            ]
            });
            setLineOptions(
              {
                reponsive: false,
                maintainAspectRatio: false,
                
                elements: {
                  point:{
                      radius: 0
                    }
                },
                
                plugins: {
                  datalabels: {
                    display: false
                  },
                  legend:{
                    display:false,
                  },
                },
                scales: {
            
                    x: {
                      ticks: {
                        autoSkip: true,
                        padding: -1,
                        maxRotation: 45,
                        minRotation: 45,
                        font: function(context: { chart: { width: any; }; }) {
                          var width = context.chart.width;
                          var size = Math.round(width / 40);
                           return {
                             size: size,
                            weight: 500
                          };
                        },
                      },
                      gridlines:{
                        display: false,
                      },
                      grid:{
                        display:false,
                      },
                        
                    },
                    y: {
                      display:false,
                      grid:{
                        display:false,
                      },
                        
                    },
                    xAxes: [{
                      ticks: {
                        autoSkip: false,
                        padding: 10,
                        
                      }
                    }],
                    A:{
                      type: 'linear',
                      position: 'right',
                      ticks:{
                        stepSize: Math.round((Math.max(...informationLine)/6)),
                        autoSkip: false,
                        callback: function(value:number) {
                          var ranges = [
                             { divider: 1e6, suffix: 'M' },
                             { divider: 1e3, suffix: 'k' }
                          ];
                          function formatNumber(n:number) {
                             for (var i = 0; i < ranges.length; i++) {
                                if (n >= ranges[i].divider) {
                                   return (n / ranges[i].divider).toString() + ranges[i].suffix;
                                }
                             }
                             return n;
                          }
                          return  formatNumber(value);
                       },
                       font: function(context: { chart: { width: any; }; }) {
                        var width = context.chart.width;
                        var size = Math.round(width / 40);
                         return {
                           size: size,
                          weight: 500
                        };
                      },
                      }
                    
                    }, 
                    B:{
                      type: 'linear',
                      position: 'left',
                      ticks:{
                        stepSize:Math.round((Math.max(...information)/6)),
                        autoSkip: false,
                        callback: function(value:number) {
                          var ranges = [
                             { divider: 1e6, suffix: 'M' },
                             { divider: 1e3, suffix: 'k' }
                          ];
                          function formatNumber(n:number) {
                             for (var i = 0; i < ranges.length; i++) {
                                if (n >= ranges[i].divider) {
                                   return (n / ranges[i].divider).toString() + ranges[i].suffix;
                                }
                             }
                             return n;
                          }
                          return  formatNumber(value);
                       },
                       font: function(context: { chart: { width: any; }; }) {
                        var width = context.chart.width;
                        var size = Math.round(width / 40);
                         return {
                           size: size,
                          weight: 500
                        };
                      },
                      }
                    }
                  
                }
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
      <div className="bargraph"> <Chart data={newData} options={lineOptions} type={"bar"}></Chart> </div>
        
      </div>

      {/* <h2>{t("TaskList in the last 30 days")}</h2> */}
      <footer>
        <div
          className={ "legend show" 
          }
        >
          <span className="color quantity"></span>
          <h4>{t("Reports Launched by Month Quantity")}</h4>
        </div>
        <div
          className={"legend show" }
        >
          <span className="color hours"></span>
          <h4>{t("Reports Launched by Month Hours")}</h4>
        </div>
        
      </footer>
    </Container>
  );
}
