const headers = {
    "Content-Type": "application/json",
          Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3Y2I1NjRjNjFjYzI2MzJhOWNmZWI1OCIsImVtYWlsIjoibXlhcHBAdGVzdC5jb20iLCJuYW1lIjoibmV4dG15YXBwIiwiaWF0IjoxNzQxMzc5Mjc0fQ.kyWHhQh3dnoV6uHPh5NyHpq4hlNoVJbphMuDTBBjcBE"
};

export const fetchCardData = async () => {
    try {
      const [getCustomerCount, getInvoicesCount, getInvoicesStatusCount] = await Promise.all([
        fetch(`${process.env.BACKEND_URL}/customer/count`, { headers }),
        fetch(`${process.env.BACKEND_URL}/invoices/count`, { headers }),
        fetch(`${process.env.BACKEND_URL}/invoices/status-count`, { headers })
      ]);
  
      const resultCustomerCount = await getCustomerCount.json();
      const resultInvoicesCount = await getInvoicesCount.json();
      const resultInvoicesStatusCount = await getInvoicesStatusCount.json();
  
      const numberOfInvoices = Number(resultInvoicesCount ?? "0");
      const numberOfCustomers = Number(resultCustomerCount ?? "0");
      const totalPaidInvoices = resultInvoicesStatusCount.paid ?? "0";
      const totalPendingInvoices = resultInvoicesStatusCount.pending ?? "0";
  
      return {
        numberOfCustomers,
        numberOfInvoices,
        totalPaidInvoices,
        totalPendingInvoices
      };
    } catch (error) {
      console.log("error :>> ", error);
      throw new Error("Failed to fetch card data.");
    }
};

export const fetchRevenue = async () => {
    try {
      const fetchRevenue = await fetch(`${process.env.BACKEND_URL}/revenues`, { headers });
      const revenueResult = await fetchRevenue.json();
  
      return revenueResult;
    } catch (error) {
      console.log("error :>> ", error);
      throw new Error("Failed to fetch fetchRevenue data.");
    }
};

export const fetchLatestInvoices = async () => {
    try {
      const fetchInvoices = await fetch(`${process.env.BACKEND_URL}/invoices`, { headers });
      const resultFetchInvoices = await fetchInvoices.json();
  
      return resultFetchInvoices;
    } catch (error) {
      console.log("error :>> ", error);
      throw new Error("Failed to fetch fetchLatestInvoices data.");
    }
};
  
  

  