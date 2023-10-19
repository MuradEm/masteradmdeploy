
import Creatable from "react-select/creatable";
import React from "react";
import Select, { components } from "react-select";
import { useTranslation } from "react-i18next";

import { Container } from "./styles";
import { InputText } from "../InputText";

import { GroupedOption, SelectOption } from "../../util/interfaces";
import userAdd from "../../assets/icons/userAdd.svg";


/*##################################################
***Component***
    Label
***Description***
    implementation example:
        <Label
          label={t("Project")}
          type="input"
          options={projectOptions}
          defaultValue={"63"}
          placeholder={t("SelectOption")}
        />
***Props***
    iconType        name of the icon for input
    iconRight       if icon right or left for input
    placeholder     show placeholder in input or select
    inputType       type in the input
    onKeyDown       function to press keybord
    onChange        function to listen changes
    iconFunction    function to icon in input
    defaultValue    defautValue for both componets
    options         options for select
    label           label text
    type            flag for select or input
###################################################*/

interface Props {
  autoFocus?: boolean;
  iconType?: string;
  iconRight?: boolean;
  placeholder?: string;
  inputType?:
    | "text"
    | "password"
    | "email"
    | "number"
    | "date"
    | "file[]"
    | "time"
    | "breakTime"
    | "color";
  disabled?: boolean;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  onChange?: (e: string) => void;
  iconFunction?: () => void;
  defaultValue?: any;
  options?: Array<SelectOption>;
  label: string;
  multi?: boolean;
  filterName?: string;
  type:
    | "input"
    | "select"
    | "creatable"
    | "textarea"
    | "file[]"
    | "time"
    | "breakTime"
    | "color";
}

const DropdownIndicator = (props: any) => {
  // const { countAssined } = useContext(AppContext);

  return (
    <components.DropdownIndicator {...props}>
      <>
        <img src={userAdd.src} />
        <h3
          style={{
            fontSize: "1.25rem",
            color: "var(--color-black-primary)",
            fontWeight: "400",
          }}
        >
          {/* ({countAssined}) */}
        </h3>
      </>
    </components.DropdownIndicator>
  );
};

export function Label({
  autoFocus = false,
  iconType,
  iconRight,
  placeholder,
  inputType = "text",
  onKeyDown,
  onChange,
  iconFunction,
  options,
  type,
  defaultValue,
  label,
  disabled = false,
  multi = false,
  filterName,
}: Props) {
  const { t } = useTranslation();

  // const { missingDescription } = useContext(AppContext);
  const NoOptionsMessage = (props: any) => {
    return (
      <components.NoOptionsMessage {...props}>
        <span className="custom-css-class">{t("NoOptions")}</span>
      </components.NoOptionsMessage>
    );
  };

  const groupedOptions: GroupedOption[] = [];

  // Here the options are grouped by the group property
  if (type == "select") {
    options?.map((option) => {
      const group = groupedOptions.find(
        (group) => group.label === option.group,
      );
      if (group) {
        group.options.push(option);
      } else {
        groupedOptions.push({
          label: option.group,
          options: [option],
        });
      }
    });
  }

  return (
    <Container
      // missingDescription={missingDescription}
      $isinput={type == "input" ? "1" : "0"}
    >
      <div className="labelHeader">
        <p>{label}</p>
      </div>
      {type == "input" ? (
        <InputText
          autoFocus={autoFocus}
          typeInput={inputType}
          onChange={onChange}
          iconType={iconType}
          $iconRight={iconRight}
          placeholder={placeholder}
          onKeyDown={onKeyDown}
          $iconFunction={iconFunction}
          disabled={disabled}
          visibility={false}
          value={defaultValue}
          options={options}
          filterName={filterName}
        />
      ) : type == "select" ? (
        <Select
          isMulti={multi}
          components={{ NoOptionsMessage }}
          formatGroupLabel={(data) => (
            <div className="groupStyles">
              <h4 className="headerstyle">{data.label}</h4>
            </div>
          )}
          defaultValue={defaultValue}
          // placeholder={"placeholder}"}
          options={groupedOptions}
          onChange={onChange}
          styles={{
            indicatorSeparator: (baseStyles: any) => ({
              // ...baseStyles,
              display: "none",
            }),
            control: (baseStyles: any) => ({
              ...baseStyles,
              marginTop: "-0.5rem",
              height: "2.375rem",
              width: "100%",
            }),
            option: (baseStyles: any) => ({
              ...baseStyles,
              paddingLeft: "2.5rem",
              fontSize: "1rem",
              fontFamily: "Inter",
              fontWeight: "400",
            }),
            menu: (base) => ({
              ...base,
              marginTop: "2px",
              zIndex: "200",
            }),
          }}
        />
      ) : type == "creatable" ? (
        <Creatable
          components={{ NoOptionsMessage }}
          autoFocus={autoFocus}
          formatGroupLabel={(data) => (
            <div className="groupStyles">
              <h4 className="headerstyle">{data.label}</h4>
            </div>
          )}
          value={defaultValue}
          placeholder={placeholder}
          options={groupedOptions}
          onChange={onChange}
          styles={{
            indicatorSeparator: (baseStyles: any) => ({
              ...baseStyles,
              display: "none",
            }),
            option: (baseStyles: any) => ({
              ...baseStyles,
              paddingLeft: "2.5rem",
              fontSize: "1rem",
              fontFamily: "Inter",
              fontWeight: "400",
            }),
            control: (baseStyles: any) => ({
              ...baseStyles,

              marginTop: "-0.5rem",
              height: "2.375rem",
              width: "100%",
            }),
            menu: (base) => ({
              ...base,
              marginTop: "2px",
              zIndex: "200",
            }),
          }}
        />
      ) : (
        onChange && (
          <textarea
            disabled={disabled}
            placeholder={placeholder}
            autoFocus={autoFocus}
            onChange={(e) => onChange(e.target.value)}
            value={defaultValue}
            rows={4}
            cols={30}
          />
        )
      )}
    </Container>
  );
}
