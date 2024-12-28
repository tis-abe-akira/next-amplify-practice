'use client';

import { Customer } from '../types';

interface CustomerListProps {
  customers: Customer[];
}

export default function CustomerList({ customers }: CustomerListProps) {
  console.log('CustomerList component is rendered!!! :', customers );
  return (
    <div className="mt-8">
      <h2 className="text-lg font-semibold mb-4">顧客一覧</h2>
      {customers.length === 0 ? (
        <p className="text-gray-500">登録された顧客はいません</p>
      ) : (
        <div className="bg-white shadow overflow-hidden rounded-md">
          <ul className="divide-y divide-gray-200">
            {customers.map((customer) => (
              <li key={customer.id} className="px-6 py-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-900">{customer.nickname}</p>
                    <p className="text-sm text-gray-500">{customer.email}</p>
                  </div>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {customer.plan}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
