export const getStockDetailsFromApi = async (stockData) => {
  const endPoint = "http://localhost:8000/getDirStructure";
  const fetchStatus = false;
  console.log(stockData);
  try {
    if (stockData) {
      const response = await fetch(endPoint + stockData.symbol, {
        mode: "cors",
        headers: {
          // limit the origin to company specific domain
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "*",
          "Access-Control-Allow-Headers": "*",
        },
      });
      console.log(response);
      const data = await response.json();
      if (response.status === 200) {
        console.log(data);
        return data;
      } else {
        console.log("Error: response with invalid status code");
        console.log(response);
      }
    } else {
      console.log("Valid stockData is required to fetch the stock details");
    }
  } catch (error) {
    console.log(error);
  }
  return fetchStatus;
};
