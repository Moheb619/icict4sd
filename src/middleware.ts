import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/Admin",
  },
});

export const config = {
  matcher: ["/UserMessages"],
};
