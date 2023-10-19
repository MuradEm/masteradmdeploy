import {createRef, useContext, useState} from "react";
import { Container } from "./styles";
import { CardDetails } from "@/shared/CardDetails";
import { Row } from "@/shared/Row";
import { ToolTipButton } from "@/shared/ToolTipButton";
import DownArrow from "@/assets/icons/FiChevronDown.svg";
import { SectionSeparator } from "@/shared/SectionSeparator";
import { Label } from "@/shared/Label";
import { ButtonSwitch } from "@/shared/ButtonSwitch";
import { Checkbox } from "@/shared/CheckBox";
import { RadioButton } from "@/shared/RadioButton";
import { Col } from "@/shared/Col";
import {Cropper, ReactCropperElement} from "react-cropper";

import "cropperjs/dist/cropper.css";
import {DEBUG} from "@/lib/utils";
import { Session} from "next-auth";
import {getSession} from "next-auth/react";
import { useTranslation } from "react-i18next";
import {Button} from "@/shared/Button";
import {get_portals, update_portal} from "@/lib/apicalls";
import {AppContext} from "@/services/context";
export interface Props {
  actions?: ("close" | "save" | "delete")[];
  deleteAction: (e: boolean) => void;
  closeAction: (e: boolean) => void;
  width?: string;
  height?: string;
  currentPortal: Portal;
  setCurrentPortal: (portal: Portal) => void;
}

export interface Portal {
  client_id: string;
  portal: string;
  owner_user_id: string;
  name: string;
  company: string;
  register: string;
  address: string;
  number: string;
  district: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  password: string;
  contact: string;
  mail: string;
  logo_report: string;
  logo_screen: string;
  inactive: string;
  primary_color: string;
  secundary_color: string; // Yes, it's spelled wrong in the database
  payment_method: string;
  access_tasklist: string;
  access_timesheet: string;
}

export const  CardDetailsPortal = ({
  actions,
  currentPortal,
  setCurrentPortal,
    deleteAction,
    closeAction,
}: Props) => {
  //Validation states
  const [errorCompanyEmpty, setErrorCompanyEmpty] = useState<boolean>(false);
  const [errorPortalEmpty, setErrorPortalEmpty] = useState<boolean>(false);
  const [errorResponsibleNameEmpty, setErrorResponsibleNameEmpty] =
    useState<boolean>(false);
  const [errorResponsibleEmailEmpty, setErrorResponsibleEmailEmpty] =
    useState<boolean>(false);
  const [isInactivated, setIsInactivated] = useState<boolean>(false);
  const [isTimeSheetChecked, setIsTimeSheetChecked] = useState<boolean>(false);
  const [isTaskListChecked, setIsTaskListChecked] = useState<boolean>(false);
  const { headerSearchText, setPortals } = useContext(AppContext);

  const {t} = useTranslation();

//Image Cropper
  const [image, setImage] = useState(null);
  const cropperRef = createRef<ReactCropperElement>();
  const [currentImage, setCurrentImage] = useState("1");

  const getPortals = async ()=>{
    /*
    get portals from database
    */
    const data = await get_portals(headerSearchText,true)
    if (data) {
      setPortals(data)
    }
  }

  async function salvarPortal() {
    if (currentPortal.company == "") {
      setErrorCompanyEmpty(true);
    }
    if (currentPortal.portal == "") {
      setErrorPortalEmpty(true);
    }
    if (currentPortal.contact == "") {
      setErrorResponsibleNameEmpty(true);
    }
    if (currentPortal.mail == "") {
      setErrorResponsibleEmailEmpty(true);
    }
    // Return if any of above is true
    if (
      errorCompanyEmpty ||
      errorPortalEmpty ||
      errorResponsibleNameEmpty ||
      errorResponsibleEmailEmpty
    ) {
      return;
    }
    // Save portal
    await update_portal(currentPortal);
    await getPortals();
    closeAction(false);
  }

  const onChange = (e: any) => {
    e.preventDefault();
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result as any);
    };
    reader.readAsDataURL(files[0]);
    e.target.value = '';
  };

  function getRoundedCanvas(sourceCanvas: HTMLCanvasElement) {
    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');
    var width = sourceCanvas.width;
    var height = sourceCanvas.height;

    canvas.width = width;
    canvas.height = height;
    if (context != null) {
      context.imageSmoothingEnabled = true;
      context.drawImage(sourceCanvas, 0, 0, width, height);
      context.globalCompositeOperation = 'destination-in';
      context.beginPath();
      context.arc(width / 2, height / 2, Math.min(width, height) / 2, 0, 2 * Math.PI, true);
      context.fill();
    }
    return canvas;
  }

  const getCropData = () => {

    if (typeof cropperRef.current?.cropper !== "undefined") {
      currentImage == "1" ?
      setCurrentPortal({
        ...currentPortal,
        logo_report: getRoundedCanvas(cropperRef.current?.cropper.getCroppedCanvas()).toDataURL().replace("data:image/png;base64,",""),
      }) : setCurrentPortal({
            ...currentPortal,
            logo_screen: getRoundedCanvas(cropperRef.current?.cropper.getCroppedCanvas()).toDataURL().replace("data:image/png;base64,",""),
          });
      setImage(null);
    }
  };

  return (
    <Container translation={t}>
      <CardDetails
        saveFunction={() => {
          salvarPortal();
        }}
        actions={actions}
        deleteFunction={() => {deleteAction(true)}}
        closeFunction={() => {closeAction(false)}}
        height={"828px"}
      >
        <Col
          padding={"0 2.13rem 0 1.44rem"}
          paddingMobile={"0 0.625rem"}
          gap={"1.25rem"}
        >
          {/*Images and colors*/}
          <Row gap={"1.44rem"} alignItems={"center"}>
            {/*  Images */}
            <Row
              flexWrap={"nowrap"}
              gap={"1.88rem"}
              alignItems={"center"}
              flexGrow={"1 !important"}
              justifyContent={"space-around"}
            >
              {/*  Big Image */}
              <Col alignItems={"center"} gap={"0"}>
                <div className={"bigImageBorderStyle"}>
                  <img
                    className={"ImageStyle"}
                    src={`data:image/png;base64, ${currentPortal.logo_report}`}
                    alt={""}
                  ></img>
                </div>
                <Row flexWrap={"nowrap"} alignItems={"center"} gap={"0.5rem"}>
                  <label
                    htmlFor={"largeLogoInput"}
                    className={"imageEditButtonStyle"}
                    onClick={() => {setCurrentImage("1");}}
                  >
                    {currentPortal.client_id == "0"
                      ? t("Add Large Logo")
                      : t("Edit Large Logo")}
                  </label>
                  <input
                    style={{ display: "none" }}
                    accept="image/*"
                    id={"largeLogoInput"}
                    type={"file"}
                    onChange={onChange}

                  />
                  <ToolTipButton
                    toolTipText={
                      t("The Large Logo Will Appear On The Login Screen")
                    }
                    alignment="right"
                  />
                </Row>
              </Col>
              {/*  Small Image */}
              <Col alignItems={"center"} height={"7.75rem"} gap={"0"}>
                <div className={"smallImageContainerStyle"}>
                  <div className={"smallImageBorderStyle"}>
                    <img
                      className={"ImageStyle"}
                      src={`data:image/png;base64, ${currentPortal.logo_screen}`}
                        alt={""}
                    ></img>
                  </div>
                </div>
                <Row flexWrap={"nowrap"} alignItems={"center"} gap={"0.5rem"}>
                  <label
                    htmlFor={"smallLogoInput"}
                    className={"imageEditButtonStyle"}
                    onClick={() => {setCurrentImage("2");}}
                  >
                    {currentPortal.client_id == "0"
                      ? t("Add Small Logo")
                      : t("Edit Small Logo")}
                  </label>
                  <input
                    style={{ display: "none" }}
                    accept="image/*"
                    id={"smallLogoInput"}
                    type={"file"}
                    onChange={onChange}
                  />
                  <ToolTipButton
                    toolTipText={t("The Small Logo Will Appear On The Headers")}
                    alignment="left"
                  />
                </Row>
              </Col>
            </Row>
            {/* Colors*/}
            <Row
              flexWrap={"nowrap"}
              gap={"3.75rem"}
              gapMobile={"1.94rem"}
              flexGrow={"1 !important"}
              justifyContent={"space-around"}
            >
              {/*  Primary Color */}
              <label style={{ cursor: "pointer" }}>
                <div
                  className={"colorInputBorderStyle"}
                  style={{ width: "10rem" }}
                >
                  <div className={"colorInputLegendBackStyle"}>
                    <h2 className={"colorInputLegendStyle"}>{t("Primary Color")}</h2>
                  </div>
                  <div className={"colorInputContainerStyle"}>
                    <Row
                      alignItems={"center"}
                      justifyContent={"space-between"}
                      height={"100%"}
                      padding={"0 0.44rem 0 0"}
                    >
                      <div className={"colorContainer"}>
                        <input
                          className={"colorInputStyle"}
                          value={currentPortal.primary_color}
                          onChange={(event) => {
                            setCurrentPortal({
                              ...currentPortal,
                              primary_color: event.target.value,
                            });
                          }}
                          type={"color"}
                        />
                      </div>
                      <img src={DownArrow.src} alt={"down arrow"}/>
                    </Row>
                  </div>
                </div>
              </label>
              {/*  Secondary Color */}
              <label style={{ cursor: "pointer" }}>
                <div
                  className={"colorInputBorderStyle"}
                  style={{ width: "10rem" }}
                >
                  <div className={"colorInputLegendBackStyle"}>
                    <h2 className={"colorInputLegendStyle"}>{t("Secondary Color")}</h2>
                  </div>
                  <div className={"colorInputContainerStyle"}>
                    <Row
                      alignItems={"center"}
                      justifyContent={"space-between"}
                      height={"100%"}
                      padding={"0 0.44rem 0 0"}
                    >
                      <div className={"colorContainer"}>
                        <input
                          className={"colorInputStyle"}
                          value={currentPortal.secundary_color}
                          onChange={(event) => {
                            setCurrentPortal({
                              ...currentPortal,
                              secundary_color: event.target.value,
                            });
                          }}
                          type={"color"}
                        />
                      </div>
                      <img src={DownArrow.src} alt={"down arrow"}/>
                    </Row>
                  </div>
                </div>
              </label>
            </Row>
          </Row>
          {/*  General Information */}
          <Col width={"100%"} gap={"1.81rem"}>
            <SectionSeparator
              widthMobile={"auto"}
              width={"100%"}
              lineColor={"var(--color-gray-tertiary)"}
              separatorDistance={"2.5rem"}
            >
              {t("General Information")}
            </SectionSeparator>
            {/* Grid */}
            <Row height={"212px"} gap={"1.875rem"} alignItems={"flex-end"}>
              <Row minWidth={"39.375rem"} gap={"1.875rem"} flexWrap={"wrap"}>
                <div
                  className={`bigGeneralInputField ${
                    errorCompanyEmpty && "requiredFields"
                  }`}
                >
                  <Label
                    onChange={(e) => {
                      setErrorCompanyEmpty(false);
                      setCurrentPortal({ ...currentPortal, company: e });
                    }}
                    type={"input"}
                    label={t("Company Name") + " *"}
                    defaultValue={currentPortal.company}
                  ></Label>
                </div>
                <div
                  className={`bigGeneralInputField ${
                    errorPortalEmpty && "requiredFields"
                  }`}
                >
                  <Label
                    onChange={(e) => {
                      setErrorPortalEmpty(false);
                      setCurrentPortal({ ...currentPortal, portal: e });
                    }}
                    type={"input"}
                    label={t("Portal Name") + " *"}
                    defaultValue={currentPortal.portal}
                  ></Label>
                </div>
                <div className={"bigGeneralInputField"}>
                  <Label
                    type={"input"}
                    label={t("Address")}
                    defaultValue={currentPortal.address}
                    onChange={(e) => {
                      setCurrentPortal({ ...currentPortal, address: e });
                    }}
                  ></Label>
                </div>
                <Row
                  flexWrap={"nowrap"}
                  gap={"1.875rem"}
                  minWidthMobile={"90dvw"}
                >
                  <div className={"smallGeneralInputField"}>
                    <Label
                      type={"input"}
                      label={t("Number")}
                      defaultValue={currentPortal.number}
                      onChange={(e) => {
                        setCurrentPortal({ ...currentPortal, number: e });
                      }}
                    ></Label>
                  </div>
                  <div className={"smallGeneralInputField"}>
                    <Label
                      type={"input"}
                      label={t("District")}
                      defaultValue={currentPortal.district}
                      onChange={(e) => {
                        setCurrentPortal({ ...currentPortal, district: e });
                      }}
                    ></Label>
                  </div>
                </Row>
                <div className={"bigGeneralInputField"}>
                  <Label
                    type={"input"}
                    label={t("City")}
                    defaultValue={currentPortal.city}
                    onChange={(e) => {
                      setCurrentPortal({ ...currentPortal, city: e });
                    }}
                  ></Label>
                </div>
                <div className={"bigGeneralInputField"}>
                  <Label
                    type={"input"}
                    label={t("State")}
                    defaultValue={currentPortal.state}
                    onChange={(e) => {
                      setCurrentPortal({ ...currentPortal, state: e });
                    }}
                  ></Label>
                </div>
              </Row>
              <Row
                flex={"1"}
                gapMobile={"1.94rem"}
                gap={"1.813rem"}
                flexWrap={"wrap"}
                maxWidth={"90dvw"}
              >
                <div className={"smallGeneralInputField"}>
                  <Label
                    type={"input"}
                    label={t("Zip Code")}
                    defaultValue={currentPortal.zip}
                    onChange={(e) => {
                      setCurrentPortal({ ...currentPortal, zip: e });
                    }}
                  ></Label>
                </div>
                <div className={"smallGeneralInputField"}>
                  <Label
                    type={"input"}
                    label={t("Phone Number")}
                    defaultValue={currentPortal.phone}
                    onChange={(e) => {
                      setCurrentPortal({ ...currentPortal, phone: e });
                    }}
                  ></Label>
                </div>
              </Row>
            </Row>
          </Col>
          {/*  Administration */}
          <Col width={"100%"} gap={"1.25rem"}>
            <SectionSeparator
              widthMobile={"auto"}
              width={"100%"}
              lineColor={"var(--color-gray-tertiary)"}
              separatorDistance={"2.5rem"}
            >
              {t("Administration")}
            </SectionSeparator>
            <Row gap={"1.88rem"} flexWrap={"wrap"} alignItems={"center"}>
              <div
                className={`administrationInputFieldStyle ${
                  errorResponsibleNameEmpty && "requiredFields"
                }`}
              >
                <Label
                  onChange={(e) => {
                    setErrorResponsibleNameEmpty(false);
                    setCurrentPortal({ ...currentPortal, contact: e });
                  }}
                  type={"input"}
                  label={t("Responsible Name") + " *"}
                  defaultValue={currentPortal.contact}
                ></Label>
              </div>
              <div
                id={"ResponsibleEmailField"}
                className={`administrationInputFieldStyle ${
                  errorResponsibleEmailEmpty && "requiredFields"
                }`}
              >
                <Label
                  onChange={(e) => {
                    setErrorResponsibleEmailEmpty(false);
                    setCurrentPortal({ ...currentPortal, mail: e });
                  }}
                  type={"input"}
                  label={t("Responsible E-Mail") + " *"}
                  defaultValue={currentPortal.mail}
                ></Label>
                <h6 className={"textButton"}>{t("Resend E-Mail")}</h6>
              </div>
              <div className={"administrationInputFieldStyle"}>
                <Label
                  type={"input"}
                  label={t("Set Password")}
                  defaultValue={currentPortal.password}
                  onChange={(e) =>
                    setCurrentPortal({ ...currentPortal, password: e })
                  }
                ></Label>
              </div>
              <div
                className={"inputField"}
              >
                <Row alignItems={"center"} gap={"0.62rem"}>
                  <ButtonSwitch
                    checked={currentPortal.inactive == "true"}
                    functionButtonSwitch={() => {
                      setIsInactivated(!isInactivated);
                      setCurrentPortal({
                        ...currentPortal,
                        inactive: String(!isInactivated),
                      });
                    }}
                    color="blue"
                  ></ButtonSwitch>
                  <p>{t("Inactivated")}</p>
                </Row>
              </div>
            </Row>
          </Col>
          {/*  Access To Aplication*/}
          <Col width={"100%"} gap={"1.25rem"}>
            <SectionSeparator
              width={"100%"}
              widthMobile={"auto"}
              separatorDistance={"2.5rem"}
            >
              {t("Access To Applications")}
            </SectionSeparator>
            <div className={"rowColAccess"}>
              <Row gap={"0.62rem"} flexWrap={"nowrap"} alignItems={"center"}>
                <Checkbox
                  onChange={() => {
                    setIsTimeSheetChecked(!isTimeSheetChecked);
                    setCurrentPortal({
                      ...currentPortal,
                      access_timesheet: String(!isTimeSheetChecked),
                    });
                  }}
                  // isChecked={isTimeSheetChecked}
                  isChecked={currentPortal.access_timesheet == "true"}
                />
                <label>TimeSheet</label>
              </Row>
              <Row gap={"0.62rem"} flexWrap={"nowrap"} alignItems={"center"}>
                <Checkbox
                  onChange={() => {
                    setIsTaskListChecked(!isTaskListChecked);
                    setCurrentPortal({
                      ...currentPortal,
                      access_tasklist: String(!isTaskListChecked),
                    });
                  }}
                  // isChecked={isTaskListChecked}
                  isChecked={currentPortal.access_tasklist == "true"}
                />
                <label>TaskList</label>
              </Row>
            </div>
          </Col>
          {/* Payment Method*/}
          <Col width={"100%"} gap={"1.25rem"}>
            <SectionSeparator
              width={"100%"}
              widthMobile={"auto"}
              separatorDistance={"2.5rem"}
            >
              {t("Payment Method")}
            </SectionSeparator>
            <div
              onChange={(event) => {
                // @ts-ignore event.target.value exists in this case
                setCurrentPortal({...currentPortal,payment_method: event.target.value,
                });
              }}
            >
              <div className={"rowColAccess"}>
                <RadioButton
                  name={"payment"}
                  text={t("Credit Card")}
                  value={"1"}
                  $checked={currentPortal.payment_method == "1"}
                />
                <RadioButton
                  name={"payment"}
                  text={t("Ticket")}
                  value={"2"}
                  $checked={currentPortal.payment_method == "2"}
                />
              </div>
            </div>
          </Col>
        </Col>
      </CardDetails>
      {/*Modal for cropping the image*/}
      {!!image && (
          <>
        <div className={"modalCropImage"}>
          <Cropper
              ref={cropperRef}
              className={"cropper"}
              style={{ height: 600, width: 600 }}
              zoomTo={0.5}
              initialAspectRatio={1}
                aspectRatio={1}
              preview=".img-preview"
              src={image}
              viewMode={1}
              minCropBoxHeight={100}
              minCropBoxWidth={100}
              background={false}
              responsive={true}
              autoCropArea={1}
              checkOrientation={false} // https://github.com/fengyuanchen/cropperjs/issues/671
              guides={true}
          />
          <Row justifyContent={"flex-end"}>
            <Button variant={"red"}  functionButton={event => {setImage(null)}}>{t("Cancel")}</Button>
            <Button variant={"green"}  functionButton={event => {getCropData()}}>{t("Save")}</Button>
          </Row>

        </div>
            <div className={"backgroundFocus"}></div>
          </>
      )}

    </Container>
  );
};
