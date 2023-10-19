/* eslint-disable react/jsx-key */
import { useTranslation } from "react-i18next";
import { ModalSettingsUser } from "../../components/ModalSettingsUser";
import { AppContext } from "../../services/context";
import { ModalGeneric } from "../../shared/ModalGeneric";

import { Container } from "./styles";
import { useContext, useEffect, useState } from "react";
import { ModalPassword } from "../../components/ModalPassword";
import { Header } from "../../components/Header";
import { Col } from "@/shared/Col";
import { SectionSeparator } from "@/shared/SectionSeparator";
import { Row } from "@/shared/Row";
import { DashboardCard } from "@/shared/DashboardCard";
import OfficeBuilding from "../../assets/icons/HiOutlineOfficeBuilding.svg";
import UserGroup from "@/assets/icons/HiOutlineUserGroup.svg";
import NetworkChart from "@/assets/icons/BiNetworkChart.svg";
import ReportQty from "@/assets/icons/HiOutlineDocumentDuplicate.svg";
import ClockIcon from "@/assets/icons/FiClock.svg";
import { SideBarMenu } from "../SideBarMenu";
import { MoreOptionsButton } from "@/shared/MoreOptionsButton";
import { ChartTasklist } from "../TasklistChart";
import { ChartTasks } from "../TasksChart";

import { FiDisc } from "react-icons/fi";
import { FiMinusCircle } from "react-icons/fi";
import { HiOutlinePlusSm } from "react-icons/hi";
import { ChartTimesheet } from "../TimesheetChart";
import { ChartUsers } from "../UsersChart";
import {
  get_clients,
  get_projects_summ,
  get_reports_summ,
  get_users_summ,
} from "@/lib/apicalls";
/*################################################## 
***Page***
    Home
***Description***
    Controls the most of the modals
***Props***
    none
###################################################*/

export function Home() {
  const {
    showModalUser,
    setShowModalUser,
    showModalPassword,
    setShowModalPassword,
    isMastersAdminsActive,
    isShowInactive,
    setShowInactive
  } = useContext(AppContext);
  const { t } = useTranslation();
  useState<boolean>(false);
  const [employesNumber, setEmployesNumber] = useState(0);
  const [companyNumber, setCompanyNumber] = useState(0);
  const [projectsNumber, setProjectsNumber] = useState(0);
  const [subProjectsNumber, setSubProjectsNumber] = useState(0);
  const [reportsNumber, setReportsNumber] = useState(0);
  const [reportsHours, setReportsHours] = useState(0);

  // Data for Cards
  async function get_data() {
    // Data for portal Cards
    const portalCardInformations = await get_users_summ();
    // Data for NUmber of Active Projects
    const projectsCardInformations = await get_projects_summ();
    //Data for reports released in the last 30 days
    const reportsCardInformations = await get_reports_summ();

    setCompanyNumber(portalCardInformations[0].total_portals);
    setEmployesNumber(portalCardInformations[0].total_users);
    setProjectsNumber(projectsCardInformations[0].tot_projects);
    setSubProjectsNumber(projectsCardInformations[0].tot_subprojects);
    setReportsNumber(reportsCardInformations[0].total_reports);
    setReportsHours(reportsCardInformations[0].total_hours);
  }
  useEffect(() => {
    get_data();
  }, []);


  return (
    <>

      <Container>
        
        {/* <Header></Header> */}
        <Col
          padding={"0 1.25rem"}
          gap={"0.63rem"}
          flex={"1"}
          flexWrap={"nowrap"}
          overflowY={"auto"}
          margin={"0 0 0 0"}
          marginMobile={"0"}
        >
          <Col width={"100%"}>
            <SectionSeparator width={"100%"}>{t("Portals")}</SectionSeparator>
            <Row gap={"1.25rem"} width={"100%"}>
              <DashboardCard title="Portal">
                <Row justifyContent={"space-around"} flex={"1"}>
                  <Col
                    alignItems={"center"}
                    flex={"1"}
                    gap={"0.62rem"}
                    gapMobile={"0.375rem"}
                  >
                    <img
                      className={"DashboardCardIconStyle"}
                      src={OfficeBuilding.src}
                    />
                    <h3 className={"DashboardCardQtyStyle"}>{companyNumber}</h3>
                    <p className={"DashboardCardLegendStyle"}>{t("Client")}</p>
                  </Col>
                  <Col
                    alignItems={"center"}
                    flex={"1"}
                    gap={"0.62rem"}
                    gapMobile={"0.375rem"}
                  >
                    <img
                      className={"DashboardCardIconStyle"}
                      src={UserGroup.src}
                    />
                    <h3 className={"DashboardCardQtyStyle"}>
                      {employesNumber}
                    </h3>
                    <p className={"DashboardCardLegendStyle"}>
                    {t("ActiveEmployees")}
                    </p>
                  </Col>
                </Row>
              </DashboardCard>
              <DashboardCard title={t("New Users In The Last 12 Months")}>
                {<ChartUsers></ChartUsers>}
              </DashboardCard>
              <DashboardCard
                title={t("Number Of Active Projects")}
                padding={"0.62rem 0 0 0"}
              >
                <Row
                  justifyContent={"center"}
                  flex={"1"}
                  alignItems={"center"}
                  padding={"0 7rem"}
                  paddingMobile={"0 3.75rem"}
                  gap={"4.75rem"}
                  gapMobile={"3.94rem"}
                >
                  <Col alignItems={"center"} justifyContent={"center"}>
                    <div>
                      <img
                        className={"DashboardCardIconStyle"}
                        src={NetworkChart.src}
                      />
                    </div>
                  </Col>
                  <Col
                    alignItems={"center"}
                    gap={"2.06rem"}
                    gapMobile={"0.38rem"}
                  >
                    <Col gapMobile={"0.38rem"} alignItems={"center"}>
                      <h3 className={"DashboardCardQtyStyle"}>
                        {projectsNumber}
                      </h3>
                      <p className={"DashboardCardLegendStyle"}>{t("Projects")}</p>
                    </Col>
                    <Col gapMobile={"0.38rem"} alignItems={"center"}>
                      <h3 className={"DashboardCardQtyStyle"}>
                        {subProjectsNumber}
                      </h3>
                      <p className={"DashboardCardLegendStyle"}>{t("SubProjects")}</p>
                    </Col>
                  </Col>
                </Row>
              </DashboardCard>
            </Row>
          </Col>
          <Col width={"100%"}>
            <SectionSeparator width={"100%"}>TimeSheet</SectionSeparator>
            <Row gap={"1.25rem"} width={"100%"}>
              <DashboardCard title={t("Reports Released in the last 30 Days")}>
                <Row
                  justifyContent={"space-around"}
                  flex={"1"}
                  alignItems={"center"}
                >
                  <Row
                    alignItems={"center"}
                    flex={"1"}
                    justifyContent={"center"}
                  >
                    <img
                      className={"DashboardCardIconStyle"}
                      src={ReportQty.src}
                    />
                    <Col alignItems={"center"} gapMobile={"0.38rem"}>
                      <h3 className={"DashboardCardQtyStyle"}>{reportsNumber}</h3>
                      <p className={"DashboardCardLegendStyle"}>{t("Reports")}</p>
                    </Col>
                  </Row>
                  <Col alignItems={"center"} flex={"1"}>
                    <img
                      className={"DashboardCardIconStyle"}
                      src={ClockIcon.src}
                    />
                    <h3 className={"DashboardCardQtyStyle"}>{`${reportsHours} h`}</h3>
                  </Col>
                </Row>
              </DashboardCard>
              <DashboardCard title={t("Reports Launched Per Month")}>
                {<ChartTimesheet></ChartTimesheet>}
              </DashboardCard>
            </Row>
          </Col>
          <Col width={"100%"}>
            <SectionSeparator width={"100%"}>TaskList</SectionSeparator>
            <Row gap={"1.25rem"} width={"100%"}>
              <DashboardCard title={t("TaskList In The Last 30 Days")}>
                {<ChartTasklist></ChartTasklist>}
              </DashboardCard>
              <DashboardCard title={t("Tasks In The Last 30 Days")}>
                {<ChartTasks></ChartTasks>}
              </DashboardCard>
            </Row>
          </Col>
        </Col>
        
       
      </Container>
      
      
    </>
  );
}

