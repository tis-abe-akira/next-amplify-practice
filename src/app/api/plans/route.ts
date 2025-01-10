import { NextResponse } from "next/server";

export async function GET() {
  console.log("GET /api/plans is called!!!");
  
  // 遅延を追加
  await new Promise(resolve => setTimeout(resolve, 7000));
  // await new Promise(resolve => setTimeout(resolve, 30000));
  
  // プランのモックデータ
  const plans = [
    { id: 1, name: "ベーシック" },
    { id: 2, name: "アドバンスド" },
    { id: 3, name: "エンタープライズ" },
  ];

  return NextResponse.json(plans);
}
