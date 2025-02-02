'use client';

import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import CustomerForm from '../components/CustomerForm';
import CustomerList from '../components/CustomerList';
import { Customer } from '../types';

export default function Home() {
  const [customers, setCustomers] = useState<Customer[]>([]);

  const handleAddCustomer = (customerData: Omit<Customer, 'id'>) => {
    const newCustomer: Customer = {
      ...customerData,
      id: uuidv4(),
    };
    setCustomers([...customers, newCustomer]);
  };

  return (
    <main className="container mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold mb-8 text-center">顧客管理システム</h1>
      <CustomerForm onSubmit={handleAddCustomer} />
      <CustomerList customers={customers} />
    </main>
  );
}
