import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
    try{
        const projects = await prisma.project.findMany()
        return NextResponse.json(projects)        
    } catch (error) {
            console.error(error);
            return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
        }
    }

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const project = await prisma.project.create({
            data: {
                title: body.title,
                slug: body.slug,
                description: body.description,
                image: body.image,
                tech: body.tech,
            }
        });

        return NextResponse.json(project, 
            {status: 201});
    } catch (error) {
        console.error (error);
        return NextResponse.json({ message: 'Failed to create project' }, { status: 500 });
    }
}