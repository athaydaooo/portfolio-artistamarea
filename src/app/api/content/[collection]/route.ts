import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(request: Request, { params }: { params: { collection: string } }) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ error: 'Não autorizado' }, { status: 401 });
  }

  const { collection } = params;
  const contentPath = path.join(process.cwd(), `content/${collection}/index.json`);

  try {
    const content = fs.readFileSync(contentPath, 'utf8');
    return NextResponse.json(JSON.parse(content));
  } catch (error) {
    return NextResponse.json({ error: 'Conteúdo não encontrado' }, { status: 404 });
  }
}

export async function POST(request: Request, { params }: { params: { collection: string } }) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ error: 'Não autorizado' }, { status: 401 });
  }

  const { collection } = params;
  const contentPath = path.join(process.cwd(), `content/${collection}/index.json`);

  try {
    const body = await request.json();
    fs.writeFileSync(contentPath, JSON.stringify(body, null, 2));
    return NextResponse.json({ message: 'Conteúdo salvo com sucesso!' });
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao salvar o conteúdo' }, { status: 500 });
  }
}