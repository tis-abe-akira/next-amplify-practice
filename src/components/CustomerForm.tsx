'use client';

import { useState, useEffect } from 'react';
import { Customer, Plan } from '../types';

interface CustomerFormProps {
  onSubmit: (customer: Omit<Customer, 'id'>) => void;
}

export default function CustomerForm({ onSubmit }: CustomerFormProps) {
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [selectedPlan, setSelectedPlan] = useState('');
  const [plans, setPlans] = useState<Plan[]>([]);

  useEffect(() => {
    const fetchPlans = async () => {
      const response = await fetch('/api/plans');
      const data = await response.json();
      setPlans(data);
    };
    fetchPlans();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      nickname,
      email,
      plan: selectedPlan,
    });
    setNickname('');
    setEmail('');
    setSelectedPlan('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto p-4">
      <div>
        <label htmlFor="nickname" className="block text-sm font-medium text-gray-700">
          ニックネーム
        </label>
        <input
          type="text"
          id="nickname"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 focus:cursor-text"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          メールアドレス
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 focus:cursor-text"
        />
      </div>

      <div>
        <label htmlFor="plan" className="block text-sm font-medium text-gray-700">
          プラン
        </label>
        <select
          id="plan"
          value={selectedPlan}
          onChange={(e) => setSelectedPlan(e.target.value)}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        >
          <option value="">プランを選択してください</option>
          {plans.map((plan) => (
            <option key={plan.id} value={plan.name}>
              {plan.name}
            </option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        登録
      </button>
    </form>
  );
}
