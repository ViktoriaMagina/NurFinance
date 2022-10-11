const amountRange = document.querySelector('.calculate-popup-big__amount-line');
const termRange = document.querySelector('.calculate-popup-big__term-line');
const refillRange = document.querySelector('.calculate-popup-big__refill-line');

const totalCount = document.querySelector('#calculate-popup-big-result-count')
const totalIncome = document.querySelector('#calculate-popup-big-result-income')
const totalIPercent = document.querySelector('#calculate-popup-big-result-perc')

const ctx = document.getElementById('calculate-popup-big-chart')
const calculateChecks = document.querySelectorAll('.calculate-check')

let amountInitial = 0, termInitial =0, refillInitial =0, initialPercent = "12.5%";
let labels = []
let data = []

totalIPercent.innerHTML = initialPercent

const calculateAccComChart = new Chart(ctx, {
  type: 'line',
  data: {
      labels: labels,
      datasets: [{
          label: 'График дохода за указанный период',
          data: data,
          backgroundColor: ['rgba(255, 255, 255, 1)'],
          borderColor: ['rgba(0, 0, 222, 1)'],
          borderWidth: 1,
          tension: 0.5
      }]
  },
  options: {

      scales: {
          y: {
              beginAtZero: true
          }
      }
  },
});
function updateChart(){
  labels.length=0;
  data.length=0;
  for(let i = 0; i < termInitial; i++){
    const formulaPerc = (parseFloat(initialPercent.slice(0, -1), 10)) / 100
    let actualData = (parseInt(amountInitial) + (i * parseInt(refillInitial))) * formulaPerc / i;

    labels.push(i)
    data.push(actualData)
  }
  calculateAccComChart.update();
}

function updateResult(){
  const formulaPerc = (parseFloat(initialPercent.slice(0, -1), 10)) / 100
  const formulaTotal = ((parseInt(amountInitial) + parseInt(termInitial) * parseInt(refillInitial)) * (formulaPerc + 1))
  const formulaIncome = ((parseInt(amountInitial) + parseInt(termInitial) * parseInt(refillInitial)) * formulaPerc)

  totalCount.innerHTML = Math.round(formulaTotal) + ' ₽'
  totalIncome.innerHTML = Math.round(formulaIncome) + ' ₽'
}

calculateChecks.forEach(item => {
  item.checked? item.closest('.calculate-check-box').classList.add('active') :item.closest('.calculate-check-box').classList.remove('active')
  item.onchange = () => {
    calculateChecks.forEach(check => {
      check.checked? check.closest('.calculate-check-box').classList.add('active') :check.closest('.calculate-check-box').classList.remove('active')
    })
    if(item.checked){
      initialPercent = item.value
      totalIPercent.innerHTML = initialPercent
    }
    updateResult()
    updateChart()
  }
})

if(amountRange){
    const nodes = [document.querySelector('.calculate-popup-big__amount-count')];
    noUiSlider.create(amountRange, {
      start: 1000000,
      connect: "lower",
      step: 1000,
      range: {
          min: 10000,
          max: 3000000
      }
    });

    amountRange.noUiSlider.on('update', function (values, handle) {
        nodes[handle].innerHTML = parseInt(values[handle]).toFixed(0) + " ₽";
        amountInitial = values[0]
        updateResult()
        updateChart()
    });
}
if(termRange){
    const nodes = [document.querySelector('.calculate-popup-big__term-count')];
    noUiSlider.create(termRange, {
      start: 24,
      connect: "lower",
      step: 1,
      range: {
          min: 3,
          max: 36
      }
    });

    termRange.noUiSlider.on('update', function (values, handle) {
        nodes[handle].innerHTML = parseInt(values[handle]).toFixed(0)+ " месяца";
        termInitial = values[0]
        updateResult()
        updateChart()
    });
}
if(refillRange){
  const nodes = [document.querySelector('.calculate-popup-big__refill-count').querySelector('b')];
  noUiSlider.create(refillRange, {
    start: 30000,
    connect: "lower",
    step: 1000,
    range: {
        min: 1000,
        max: 300000
    }
  });

  refillRange.noUiSlider.on('update', function (values, handle) {
      nodes[handle].innerHTML = parseInt(values[handle]).toFixed(0)+ " ₽";
      refillInitial = values[0]
      updateResult()
      updateChart()
  });
}
updateChart()

Fancybox.bind([{ src: "#calculate-popup-big", type: "inline" }]);



