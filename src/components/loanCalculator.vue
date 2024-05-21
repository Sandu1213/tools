<template>
  <div class="loan-calculator">
    <h1>{{ $t('title') }}</h1>
    <div>
      <label>
        {{ $t('loanAmount') }}:
        <input v-model.number="loanAmount" type="number" />
      </label>
    </div>
    <div>
      <label>
        {{ $t('annualRate') }}:
        <input v-model.number="annualRate" type="number" step="0.01" />
      </label>
    </div>
    <div>
      <label>
        {{ $t('loanTerm') }}:
        <input v-model.number="loanTerm" type="number" />
      </label>
    </div>
    <div>
      <label>
        {{ $t('repaymentMethod') }}:
        <select v-model="repaymentMethod">
          <option value="equalPrincipalAndInterest">{{ $t('methods.equalPrincipalAndInterest') }}</option>
          <option value="interestOnly">{{ $t('methods.interestOnly') }}</option>
          <option value="equalPrincipal">{{ $t('methods.equalPrincipal') }}</option>
        </select>
      </label>
    </div>
    <button @click="calculateRepayment">{{ $t('calculate') }}</button>
    <table v-if="repaymentSchedule.length">
      <thead>
        <tr>
          <th>{{ $t('month') }}</th>
          <th>{{ $t('principal') }}</th>
          <th>{{ $t('interest') }}</th>
          <th>{{ $t('totalPayment') }}</th>
          <th>{{ $t('remainingPrincipal') }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(payment, index) in repaymentSchedule" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ payment.principal.toFixed(2) }}</td>
          <td>{{ payment.interest.toFixed(2) }}</td>
          <td>{{ payment.total.toFixed(2) }}</td>
          <td>{{ payment.remainingPrincipal.toFixed(2) }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

interface Payment {
  principal: number;
  interest: number;
  total: number;
  remainingPrincipal: number;
}

export default defineComponent({
  data() {
    return {
      loanAmount: 3000000,
      annualRate: 3.85,
      loanTerm: 20,
      repaymentMethod: 'equalPrincipalAndInterest',
      repaymentSchedule: [] as Payment[]
    };
  },
  methods: {
    calculateRepayment() {
      const principal = this.loanAmount;
      const monthlyRate = this.annualRate / 12 / 100;
      const totalMonths = this.loanTerm * 12;

      this.repaymentSchedule = [];

      if (this.repaymentMethod === 'equalPrincipalAndInterest') {
        this.calculateEqualPrincipalAndInterest(principal, monthlyRate, totalMonths);
      } else if (this.repaymentMethod === 'interestOnly') {
        this.calculateInterestOnly(principal, monthlyRate, totalMonths);
      } else if (this.repaymentMethod === 'equalPrincipal') {
        this.calculateEqualPrincipal(principal, monthlyRate, totalMonths);
      }
    },
    calculateEqualPrincipalAndInterest(principal: number, monthlyRate: number, totalMonths: number) {
      const monthlyPayment = principal * (monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) / (Math.pow(1 + monthlyRate, totalMonths) - 1);

      let remainingPrincipal = principal;

      for (let i = 0; i < totalMonths; i++) {
        const interestPayment = remainingPrincipal * monthlyRate;
        const principalPayment = monthlyPayment - interestPayment;

        remainingPrincipal -= principalPayment;

        this.repaymentSchedule.push({
          principal: principalPayment,
          interest: interestPayment,
          total: monthlyPayment,
          remainingPrincipal: remainingPrincipal
        });
      }
    },
    calculateInterestOnly(principal: number, monthlyRate: number, totalMonths: number) {
      const interestPayment = principal * monthlyRate;

      for (let i = 0; i < totalMonths; i++) {
        this.repaymentSchedule.push({
          principal: i === totalMonths - 1 ? principal : 0,
          interest: interestPayment,
          total: i === totalMonths - 1 ? principal + interestPayment : interestPayment,
          remainingPrincipal: i === totalMonths - 1 ? 0 : principal
        });
      }
    },
    calculateEqualPrincipal(principal: number, monthlyRate: number, totalMonths: number) {
      const monthlyPrincipalPayment = principal / totalMonths;

      let remainingPrincipal = principal;

      for (let i = 0; i < totalMonths; i++) {
        const interestPayment = remainingPrincipal * monthlyRate;
        const totalPayment = monthlyPrincipalPayment + interestPayment;

        remainingPrincipal -= monthlyPrincipalPayment;

        this.repaymentSchedule.push({
          principal: monthlyPrincipalPayment,
          interest: interestPayment,
          total: totalPayment,
          remainingPrincipal: remainingPrincipal
        });
      }
    }
  }
});
</script>

<style scoped>
.loan-calculator {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
}

.loan-calculator h1 {
  text-align: center;
}

.loan-calculator label {
  display: block;
  margin: 10px 0;
}

.loan-calculator input,
.loan-calculator select {
  width: 100%;
  padding: 8px;
  margin: 5px 0;
  box-sizing: border-box;
}

.loan-calculator button {
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 20px;
}

.loan-calculator button:hover {
  background-color: #0056b3;
}

.loan-calculator table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

.loan-calculator th,
.loan-calculator td {
  border: 1px solid #ccc;
  padding: 8px;
  text-align: center;
}

.loan-calculator th {
  background-color: #f2f2f2;
}
</style>
