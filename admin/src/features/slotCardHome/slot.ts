import {apiSlice}from"../../app/api/apiSlice";

interface Income{
start?:number
end?:number
status?:string
lastDate?:number
}

interface Return{
    data:[{todayIncome:number,percent:number}]
    message:string
}

const slotSlice=apiSlice.injectEndpoints({
    endpoints:(build)=>({
        getDailyIncome:build.query<Return,Income>({
            query:({status}:Income)=>({url:`/order/income?status=${status}`})
        }),
        getSevenDaysIncome:build.query<Return,Income>({
            query:({start,lastDate,status}:Income)=>({url:`/order/income?start=${start}&lastDate=${lastDate}&status=${status}`})
        }),
        getThirtyDaysIncome:build.query<Return,Income>({
            query:({start,lastDate,status}:Income)=>({url:`/order/income?start=${start}&lastDate=${lastDate}&status=${status}`})
        }),
        getTotalRevenue:build.query<Return,Income>({
            query:({start,lastDate,status}:Income)=>({url:`/order/income?start=${start}&lastDate=${lastDate}&status=${status}`})
        }),

    }),
})

export const {useGetDailyIncomeQuery,useGetSevenDaysIncomeQuery,useGetThirtyDaysIncomeQuery,useGetTotalRevenueQuery}=slotSlice