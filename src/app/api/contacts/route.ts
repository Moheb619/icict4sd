import { prisma } from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const contacts = await prisma.contact.findMany({});
    return NextResponse.json(
      {
        contacts,
      },
      { status: 200 }
    );
  } catch (error: any) {
    return new NextResponse(
      JSON.stringify({
        status: "error",
        message: "Form Data Invalid",
      }),
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const res = await prisma.contact.create({
      data: {
        fullname: body.fullname,
        email: body.email,
        message: body.message,
        markedAsOkay: false,
      },
    });
    return NextResponse.json(
      {
        status: "success",
        message: "Contact Form Submitted Successfully",
        data: res,
      },
      { status: 201 }
    );
  } catch (error: any) {
    return new NextResponse(
      JSON.stringify({
        status: "error",
        message: error,
      }),
      { status: 500 }
    );
  }
}
