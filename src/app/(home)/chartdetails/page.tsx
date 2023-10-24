/* eslint-disable react/jsx-key */
"use client";
import { useContext, useEffect, useState } from "react"
import { SessionProvider } from "next-auth/react"
import {get_master_users} from "@/lib/apicalls"
import { AppContext } from "@/services/context";
import { Container } from "./styles";
import { MasterTable } from "@/components/MasterTable";
import { useTranslation } from "react-i18next";
import { ProgressBar } from "@/components/ProgressBar";
import {CardDetailsPortal} from "@/components/CardDetailsPortal";
import {CardDetailsMasters, MasterUser} from "@/components/CardDetailsMasters";
import {emptyPortal} from "@/app/(home)/portals/lib";
import { CardDetailedCharts } from "@/shared/CardDetailedCharts";
import { ChartPortalsDetails } from "@/components/PortalsDetailedChart";
import {  useRouter, usePathname, useSearchParams } from 'next/navigation'
import { ChartTimesheetDetailed } from "@/components/DetailedTimesheetChart";
import { ChartActiveProjects } from "@/components/ActiveProjectsChart";
import { ChartTaskDetailed } from "@/components/DetailedTaskChart";
import { ChartTasklistDetailed } from "@/components/DetailedTasklistChart";
export default function MasterAdmins() {
  const {t} = useTranslation();
  const {
   detailedChart,
   setDetailedChart,
   chartDetailedTitle,
   setChartDetailedTitle,
   setHeaderLocation,
   setHeaderHideSearch,
   setHeaderShowAdd,
   chartDetailedHeader,
   setChartDetailedHeader
  } = useContext(AppContext);

  const [filteredUsers, setFilteredUsers] = useState<MasterUser[]>([])
  const {
    users,
    setUsers
  } = useContext(AppContext);
  const router = useRouter();
  const path = usePathname();
  const searchParams = useSearchParams();
  const chart = searchParams.get('chart')
  function getChart(){
    switch (chart){
      case '1':
        setChartDetailedHeader("Portals");
        setChartDetailedTitle("Active Users");
        setDetailedChart(<ChartPortalsDetails></ChartPortalsDetails>)
        break;
      case '2':
        setChartDetailedHeader("Portals");  
        setChartDetailedTitle("Number of active projects");
        setDetailedChart(<ChartActiveProjects></ChartActiveProjects>)
        break
      case '3':
        setChartDetailedHeader("Timesheet");
        setChartDetailedTitle("Reports released in the last 30 days");
        setDetailedChart(<ChartTimesheetDetailed></ChartTimesheetDetailed>)
        break
      case '4':
        setChartDetailedHeader("Tasklist");
        setChartDetailedTitle("Tasklists in the last 30 days");
        setDetailedChart(<ChartTasklistDetailed></ChartTasklistDetailed>)
        break  
      case '5':
        setChartDetailedHeader("Tasklist");
        setChartDetailedTitle("Tasks from the last 30 days per portal");
        setDetailedChart(<ChartTaskDetailed></ChartTaskDetailed>)
        break  
    }
    
  }

  useEffect(()=>{
    /*
    on users, searchText  
    */
  }, )

  useEffect(()=>{
   getChart();
    setHeaderLocation(t(chartDetailedHeader))
    setHeaderHideSearch(true)
    setHeaderShowAdd(false)
    
    
    /*
    on load
    */
    
  }, [])

  return (
    <SessionProvider>
      <Container>
        <div className="distance">
          <CardDetailedCharts  title={chartDetailedTitle}>
            {detailedChart}
          </CardDetailedCharts>
        </div>

      </Container>
    </SessionProvider>
  )
}
