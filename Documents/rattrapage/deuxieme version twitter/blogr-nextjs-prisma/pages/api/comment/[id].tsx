import { GetStaticProps } from 'next';
import { getSession } from 'next-auth/react';
import Router from 'next/router';
import prisma from '../../../lib/prisma';

// POST /api/post
// Required fields in body: title
// Optional fields in body: content
export default async function handle(req, res) {
    const { id, message } = req.body;

    const session = await getSession({ req });
    const result = await prisma.comment.create({
      data: {
        message: message,
        commentateur: { connect: { email: session?.user?.email } }, 
        IdPost: { connect: { id: id}}
      },
    });
    if(result){
      res.status(209).json(result);
    }else {
      res.status(500).json({message: "Server Error"})
    }
  }
