import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

export async function POST(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get('secret');

  if (secret !== process.env.MY_SECRET_TOKEN) {
    return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
  }

  try {
    console.log('Revalidating...');

    revalidatePath('/');

    console.log('Revalidation completed.');
    return NextResponse.json({ revalidated: true });
  } catch (err: any) {
    console.error('Error revalidating:', err);
    return NextResponse.json(
      { message: 'Error revalidating' },
      { status: 500 },
    );
  }
}
