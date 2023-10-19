// export { default } from "next-auth/middleware"



//--
import { withAuth } from "next-auth/middleware";

export default withAuth({
    pages: {
        signIn: "/MasterAdm2.0/auth",
        error: "/MasterAdm2.0/auth",
    },

});

 export const config = { matcher: ["/MasterAdm2.0","/MasterAdm2.0/portals","/MasterAdm2.0/masteradmins", "/","/portals","/masteradmins"] }