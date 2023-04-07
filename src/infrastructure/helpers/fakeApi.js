export const fakeExamplesToDashboardPage = new Promise((resolve, reject) => {
  console.log("Inicial");
  const data = [
    {
      name: "Daily Views",
      numbers: "1,504",
      icon: "eye-outline",
    },
    {
      name: "Sales",
      numbers: "80",
      icon: "cart-outline",
    },
    {
      name: "Comments",
      numbers: "284",
      icon: "chatbubbles-outline",
    },
    {
      name: "Earning",
      numbers: "$7,800",
      icon: "cash-outline",
    },
  ];
  setTimeout(() => {
    resolve(data);
  }, 1000);
});
