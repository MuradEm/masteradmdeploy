
import { Container } from "./styles";

import arrowRightIcon from "../assets/icons/arrowRightIcon.svg";
import attachGrayIcon from "../../assets/icons/attachGrayIcon.svg";
import closeIcon from "../../assets/icons/closeIcon.svg";
import deleteIcon from "../../assets/icons/deleteIcon.svg";
import searchIcon from "../../assets/icons/searchIcon.svg";
import eyeClosed from "../../assets/icons/eyeClosed.svg";
import eyeOpen from "../../assets/icons/eyeOpen.svg";

/*################################################## 
***Component***
    InputText
***Description***
    Allows to insert data 
***Props***
    iconType        name of the icon
    iconRight       if icon right or left
    placeholder?:   ...
    typeInput:      ...
    disabled?:      ...
    value?:         ...
    filterName?:    ...
    onKeyDown?:     ...
    onChange?:      ...
    iconFunction?:  ...
###################################################*/

interface Props {
  autoFocus?: boolean;
  iconType?: string;
  iconTypeL?: string;
  $iconRight?: boolean;
  $iconLeft?: boolean;
  placeholder?: string;
  typeInput: string;
  disabled?: boolean;
  value?: string;
  filterName?: string;
  options?: Array<any>;
  visibility?: boolean;
  onClick?: () => void;
  onSelect?: (e?: any) => void;
  onKeyDown?: (e?: any) => void;
  onChange?: (e: string) => void;
  $iconFunction?: () => void;
  $iconFunctionL?: () => void;
  
}

export function InputText({
  autoFocus = false,
  iconType,
  $iconRight = false,
  placeholder,
  typeInput,
  disabled = false,
  value,
  filterName,
  options = [],
  visibility = true,
  onClick,
  onChange,
  onSelect,
  $iconFunction,
  onKeyDown,
  
}: Props) {
  const handleChange = (e: any) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };
  return (
    <Container
      $iconRight={$iconRight}
      $iconFunction={$iconFunction ? true : false}
      $isVisibility={visibility}
      $iconLeft={!$iconRight}
      $iconFunctionL={false}
    >
      {iconType || filterName ? (
        iconType == "search" ? (
          $iconRight ? (
            <>
              <input
                type={typeInput}
                placeholder={placeholder}
                onChange={(e) => handleChange(e)}
                onKeyDown={onKeyDown}
                disabled={disabled}
                value={value}
                
              />
              {$iconFunction ? (
                <img src={searchIcon.src} onClick={$iconFunction} />
              ) : (
                <img src={searchIcon.src} />
              )}
            </>
          ) : (
            <>
              {$iconFunction ? (
                <img src={searchIcon.src} onClick={$iconFunction} />
              ) : (
                <img src={searchIcon.src} />
              )}
              <input
                placeholder={placeholder}
                type={typeInput}
                onChange={(e) => handleChange(e)}
                onKeyDown={onKeyDown}
                disabled={disabled}
                
              />
            </>
          )
        ) : iconType == "arrowRight" ||
          iconType == "eyeOpen" ||
          iconType == "eyeClosed" ? (
            $iconRight ? (
            <>
              <input
                type={typeInput}
                placeholder={placeholder}
                onChange={(e) => handleChange(e)}
                onKeyDown={onKeyDown}
                disabled={disabled}
                
              />
              {$iconFunction ? (
                <img
                  src={iconType == "eyeOpen" ? eyeOpen.src : eyeClosed.src}
                  onClick={$iconFunction}
                />
              ) : (
                <img src={iconType == "eyeOpen" ? eyeOpen.src : eyeClosed.src} />
              )}
            </>
          ) : (
            ""
          )
        ) : filterName ? (
          <>
            <input
              type={typeInput}
              placeholder={placeholder}
              onChange={(e) => handleChange(e)}
              disabled={disabled}
              list={filterName}
              value={value}
              onKeyDown={onKeyDown}
              onClick={onClick}
              onSelect={onSelect}
            />
            {options ? (
              <datalist id={filterName}>
                {options.map((option, key) => (
                  <option key={key} value={option.value} />
                ))}
              </datalist>
            ) : null}
            <img src={closeIcon.src} onClick={$iconFunction} />
          </>
        ) : null
      ) : (
        <input
          autoFocus={autoFocus}
          type={typeInput}
          placeholder={placeholder}
          onChange={handleChange}
          onKeyDown={onKeyDown}
          disabled={disabled}
          value={value}
        />
      )}
    </Container>
  );
}

export function InputTwoIcons({
  iconType,
  $iconRight = false,
  $iconLeft = false,
  placeholder,
  typeInput,
  disabled = false,
  value,
  visibility = true,
  onChange,
  $iconFunction,
  $iconFunctionL,
  onKeyDown,
}: Props) {
  const handleChange = (e: any) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <Container
      $iconRight={$iconRight}
      $iconLeft={$iconLeft}
      $iconFunction={$iconFunction ? true : false}
      $iconFunctionL={$iconFunctionL ? true : false}
      $isVisibility={visibility}
    >
      {iconType == "delete" ? (
        <>
          {$iconFunctionL ? (
            <img src={attachGrayIcon.src} onClick={$iconFunctionL} />
          ) : (
            <img src={attachGrayIcon.src} />
          )}

          <input
            onClick={$iconFunctionL}
            type={typeInput}
            placeholder={placeholder}
            onChange={(e) => handleChange(e)}
            onKeyDown={onKeyDown}
            disabled={disabled}
            value={value}
          />
          {$iconFunction ? (
            <img src={deleteIcon.src} onClick={$iconFunction} />
          ) : (
            <img src={deleteIcon.src} />
          )}
        </>
      ) : (
        ""
      )}
    </Container>
  );
}
