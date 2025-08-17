import { NextResponse } from "next/server";
import {
  getAccounts,
  getFormSubmissions,
  getInventory,
  getOrders,
} from "@/utils/FetchDashboardData";
import { GetTokenPayload, VerifyUser } from "@/utils/Auth/";

export const GET = async () => {
  const payload = await GetTokenPayload(true);
  if (!payload) {
    return NextResponse.json(
      {
        message: "Unauthorized",
      },
      {
        status: 402,
      }
    );
  }
  const data = await VerifyUser(payload.email);
  if (!data.exists) {
    return NextResponse.json(
      {
        message: "Admin not found",
      },
      {
        status: 404,
      }
    );
  }

  if (data.user?.isAdmin) {
    const accounts = await getAccounts();
    const formSubmissions = await getFormSubmissions();
    const orders = await getOrders();
    const products = await getInventory();

    return NextResponse.json(
      {
        accounts,
        formSubmissions,
        orders,
        products,
      },
      {
        status: 200,
      }
    );
  }
};
