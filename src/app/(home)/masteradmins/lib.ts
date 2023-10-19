import { useTranslation } from "react-i18next";

export function filterRows(
  data:any[],
  searchText:string,
  ) {
    /*
    => obj list
    */
   const rows:any = []


  data.forEach((d) => {

    // evaluates searchText
    if (
      (d.name.toLowerCase().indexOf(searchText.toLowerCase()) === -1)
      &&
      (d.email.toLowerCase().indexOf(searchText.toLowerCase()) === -1)
      ) {
        return;
      }
      
      // // build obj
      // const row:any = {}
      // row.col1 = d.name
      // row.col2 = d.email
      // row.inactive = "false"
      
      // add to the list
      rows.push(d)
    });
    
    return rows
  }
  
  export function filteredText(
    percentage_done:string,
    ) {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const {t} = useTranslation();
      /*
  => string
  */
  if (percentage_done == "NaN%" || percentage_done == "0%" || percentage_done == "100%") {
    return ""
  } else {
    return " - " + t("filtered")
  }
}
