import { NextResponse } from "next/server";
import { BetaAnalyticsDataClient } from "@google-analytics/data";

const enviroments = {
    propertyId: process.env.GOOGLE_ANALYTICS_PROPERTY_ID,
    privateKey: process.env.GOOGLE_ANALYTICS_PRIVATE_KEY,
    client_email: process.env.GOOGLE_ANALYTICS_CLIENT_EMAIL,
}

const analyticsDataClient = new BetaAnalyticsDataClient({
    credentials: {
        client_email: enviroments.client_email,
        private_key: enviroments.privateKey,
    },
});

export const GET = async () => {
    try {
        const [response] = await analyticsDataClient.runReport({
            property: `properties/${enviroments.propertyId}`,
            dateRanges: [{ "startDate": "7daysAgo", "endDate": "today" }],
            dimensions: [{ "name": "date" }],
            metrics: [
                {
                    "name": "activeUsers"
                },
                {
                    "name": "newUsers"
                },
                {
                    "name": "totalRevenue"
                }
            ],
            //   dateRanges: [
            //     {
            //       startDate: "30daysAgo",
            //       endDate: "today",
            //     },
            //   ],
            //   dimensions: [
            //     { name: "country" },
            //     { name: "browser" },
            //     // { name: "city" },
            //     // { name: "deviceCategory" },
            //     // { name: "pagePath" },
            //     // { name: "sourceMedium" },
            //   ],
            //   metrics: [
            //     { name: "activeUsers" },
            //     { name: "newUsers" },
            //     { name: "sessions" },
            //     { name: "engagementRate" },
            //     { name: "averageSessionDuration" },
            //     { name: "screenPageViews" },
            //     { name: "totalRevenue" },
            //     // { name: "purchaseQuantity" },
            //     { name: "transactions" },
            //   ],

        });

        return NextResponse.json({ response });
    } catch (error) {
        console.error("GA Error:", error);
        return NextResponse.json({ error: "Failed to fetch analytics data." }, { status: 500 });
    }
};


// !.replace(/\n/gm, "\n")