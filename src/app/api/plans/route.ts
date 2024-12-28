import { NextResponse } from 'next/server';

export async function GET() {
  // プランのモックデータ
  const plans = [
    { id: 1, name: 'ベーシック' },
    { id: 2, name: 'アドバンスド' },
    { id: 3, name: 'エンタープライズ' }
  ];

  return NextResponse.json(plans);
}
