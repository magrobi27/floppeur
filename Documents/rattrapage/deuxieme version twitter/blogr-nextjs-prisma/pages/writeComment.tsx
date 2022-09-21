import React, { useState } from 'react';
import Layout from '../components/Layout';
import Router from 'next/router';
import { GetServerSideProps } from 'next';
import { useSession, getSession } from 'next-auth/react';
import prisma from '../lib/prisma';

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
    const session = await getSession({ req });
    if (!session) {
      res.statusCode = 403;
      return { props: { drafts: [] } };
    }

    const comments = await prisma.comments.findMany({
        where: {
            commentateur : {name : session.user.name}
        },
        include:{
            commentateur:{
                select:{name : true}
            }
        }
    })
    return {
        props : {comments}
    }
  
}

// type Props = {
//     comments: PostProps[];
//   };


const WriteComment: React.FC = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
  
    const submitData = async (e: React.SyntheticEvent) => {
      e.preventDefault();
      // TODO
      // You will implement this next ...
    };

    
    return(
        <Layout>
            <div>
                <form onSubmit={submitData}>
                    <h1>commenter  : </h1>

                </form>
            </div>
        </Layout>
    )



}

export default WriteComment;