// pages/api/post/index.ts

import { getSession } from 'next-auth/react';
import prisma from '../../../lib/prisma';

export default async function handle(req, res) {
  const { title, content } = req.body;

  const session = await getSession({ req });
  const result = await prisma.floppe.create({
    data: {
      title: title,
      content: content,
      poster: { connect: { email: session?.user?.email } },
    },
  });
  res.json(result);
}
