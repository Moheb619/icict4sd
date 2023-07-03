import { prisma } from "@/app/libs/prismadb";
import { NextResponse } from "next/server";
interface IParams {
  contactId?: string;
}

export async function PUT(request: Request, { params }: { params: IParams }) {
  try {
    const { contactId } = params;
    const body = await request.json();
    const res = await prisma.contact.update({
      where: {
        id: contactId,
      },
      data: {
        markedAsOkay: body.markedAsOkay,
      },
    });
    return NextResponse.json(
      {
        status: "success",
        message: "Contact Form Updated Successfully",
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

export const DELETE = async (request: Request, { params }: { params: IParams }) => {
  try {
    const { contactId } = params;
    const res = await prisma.contact.delete({ where: { id: contactId } });
    return NextResponse.json(
      {
        message: "Contact deleted successfully",
        data: res,
      },
      { status: 200 }
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
};
