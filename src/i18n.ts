// src/i18n.ts
import { createI18n } from 'vue-i18n';

const messages = {
  en: {
    title: 'Loan Calculator',
    loanAmount: 'Loan Amount',
    annualRate: 'Annual Interest Rate (%)',
    loanTerm: 'Loan Term (years)',
    repaymentMethod: 'Repayment Method',
    calculate: 'Calculate',
    month: 'Month',
    principal: 'Principal',
    interest: 'Interest',
    totalPayment: 'Total Payment',
    remainingPrincipal: 'Remaining Principal',
    methods: {
      equalPrincipalAndInterest: 'Equal Principal and Interest',
      interestOnly: 'Interest Only',
      equalPrincipal: 'Equal Principal'
    }
  },
  zh: {
    title: '贷款计算器',
    loanAmount: '贷款金额',
    annualRate: '年利率 (%)',
    loanTerm: '贷款期限 (年)',
    repaymentMethod: '还款方式',
    calculate: '计算',
    month: '月份',
    principal: '本金',
    interest: '利息',
    totalPayment: '总还款额',
    remainingPrincipal: '剩余本金',
    methods: {
      equalPrincipalAndInterest: '等额本息',
      interestOnly: '先息后本',
      equalPrincipal: '等额本金'
    }
  }
};

const i18n = createI18n({
  locale: 'zh', // 设置默认语言
  fallbackLocale: 'en',
  messages
});

export default i18n;
