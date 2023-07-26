import Knock from "@knocklabs/client";
const knockClient = new Knock(
  process.env.NEXT_PUBLIC_KNOCK_PUBLIC_API_KEY ?? ""
);