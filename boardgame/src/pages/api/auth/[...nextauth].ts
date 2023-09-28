import NextAuth from "next-auth";

import { authOptions } from "boardgame/server/auth";

export default NextAuth(authOptions);
