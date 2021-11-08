import Link from 'next/link';
import { gql } from "@apollo/client";
import client from '../../apollo-client'
import Layout from '../../components/layout'
import IndexRow from './IndexRow';
import cookies from 'next-cookies'
//
function Index(props) {
//console.log(props);
  const items = props.items
  return (
    <Layout>
      <div className="container">
        <Link href="/tasks/create">
          <a className="btn btn-primary mt-2">New</a>
        </Link>  
        <hr className="mt-2 mb-2" />        
        <h3>Tasks - index</h3>
        <table className="table table-hover">
          <thead>
          <tr>
            <th>Title</th>
            <th>Actions</th>
          </tr>
          </thead>
          <tbody>
          {items.map((item, index) => {
            return (<IndexRow key={index}
                  id={item.id} title={item.title} date={item.createdAt} />       
            )
          })}
          </tbody>
        </table>
      </div>
    </Layout>
    )
}

export const getServerSideProps = async (ctx) => {
  //  console.log("uid=", cookies(ctx).user_id)
  const data = await client.query({
    query: gql`
    query {
      tasks {
        id
        title
        createdAt
      }
    }
    `,
    fetchPolicy: "network-only"
  });
//console.log(data.data.tasks); 
  const items = data.data.tasks; 
  const user_id = cookies(ctx).user_id || ''
  return {
    props: { items, user_id } 
  }
}

export default Index
