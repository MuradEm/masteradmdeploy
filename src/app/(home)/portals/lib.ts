import {Portal} from "@/components/CardDetailsPortal";

export const emptyPortal: Portal = {
  client_id: "0",
  portal: "",
  company: "",
  logo_screen: "",
  access_tasklist: "0",
  address: "",
  city: "",
  access_timesheet: "0",
  contact: "",
  district: "",
  inactive: "0",
  logo_report: "",
  mail: "",
  name: "",
  number: "",
  owner_user_id: "0",
  password: "",
  phone: "",
  payment_method: "1",
  primary_color: "",
  register: "",
  zip: "",
  state: "",
  secundary_color: ""
}
export function filterRows(
  portals:Portal[],
  searchText:string,
  cbShowInactive:boolean,
) {
  /*
  => obj list
  */
  const rows:Portal[] = []

  portals.forEach((portal) => {

    // evaluates searchText
    if (
      (portal.portal.toLowerCase().indexOf(searchText.toLowerCase()) === -1)
      &&
      (portal.company.toLowerCase().indexOf(searchText.toLowerCase()) === -1)
    ) {
      return;
    }

    // evaluates inactive
    if (portal.inactive && !cbShowInactive) {
      return;
    }

    // // build obj
    // const row:any = {}
    // row.col1 = portal.company
    // row.col2 = portal.portal
    // row.inactive = portal.inactive

    // add to the list
    rows.push(portal)
  });

  return rows
}
