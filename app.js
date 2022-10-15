const ctx = document.getElementById("myChart").getContext("2d");

const myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: [
      "Aug1",
      "Aug1",
      "Aug1",
      "Aug1",
      "Aug1",
      "Aug1",
      "Aug1",
      "Aug1",
      "Aug1",
      "Aug1",
      "Aug1",
      "Aug1",
      "Aug1",
      "Aug1",
      "Aug1",
    ],
    datasets: [
      {
        label: "Estimated Price Rate",
        data: [
          14050000, 15000000, 16000000, 17000000, 18000000, 18050000, 19000000,
          18000000, 17000000, 16000000, 22000000, 25000000, 24500000, 22505000,
          22000000,
        ],

        borderColor: [" rgba(1, 33, 115, 0.8)"],
        borderWidth: 2,
        lineTension: 0.4,
        radius: 5,
        fill: false,
        pointBackgroundColor: [" rgba(1, 33, 115, 1)"],
        pointBorderColor: ["rgba(248, 253, 249,1)"],
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        display: false,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  },
});

const accountBtns = document.querySelectorAll(".account-btn");
const accountTabs = document.querySelectorAll(".account-info");
accountBtns.forEach((accountBtn) => {
  accountBtn.classList.remove("active-account-btn");
  accountBtn.addEventListener("click", selectAccount);
});

function selectAccount(e) {
  removeBtnStyle();
  removeTabs();
  e.currentTarget.classList.add("active-account-btn");

  const accountContent = document.getElementById(
    `${e.currentTarget.id}-content`
  );
  accountContent.classList.add("active-info");
}
const removeTabs = () => {
  accountTabs.forEach((btn) => btn.classList.remove("active-info"));
};
const removeBtnStyle = () => {
  accountBtns.forEach((btn) => btn.classList.remove("active-account-btn"));
};
window.addEventListener("DOMContentLoaded", () => {
  const accountContent1 = document.getElementById("account-btn1-content");
  const accountBtn1 = document.getElementById("account-btn1");
  console.log(accountContent1);
  accountContent1.classList.add("active-info");
  accountBtn1.classList.add("active-account-btn");
});
const sidebarLinks = document.querySelectorAll(".sidebar-link");

sidebarLinks.forEach((link) => {
  const baseUrl = document.baseURI;

  if (baseUrl.includes("index.html")) {
    sidebarLinks[0].classList.add("active-sidelink");
  }

  if (baseUrl.includes("account.html")) {
    sidebarLinks[1].classList.add("active-sidelink");
  }
  if (baseUrl.includes("transaction.html")) {
    sidebarLinks[2].classList.add("active-sidelink");
  }
  if (baseUrl.includes("beneficiaries.html")) {
    sidebarLinks[3].classList.add("active-sidelink");
  }
  if (baseUrl.includes("currency-exchange.html")) {
    sidebarLinks[4].classList.add("active-sidelink");
  }
  if (baseUrl.includes("settings.html")) {
    sidebarLinks[5].classList.add("active-sidelink");
  }
});

console.log(`${window.location}/`);
