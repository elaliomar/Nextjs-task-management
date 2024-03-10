import React from 'react'
import Image from 'next/legacy/image'
import Layout from '@/components/Layout/Layout'

interface TaskDetails {
  data: {
    result: {
      id: string;
      image: string;
      title: string;
    }
  }
}

const index = ({ taskDetails }: { taskDetails: TaskDetails}) => {
  return (
    <>
    <Layout>
    {taskDetails && (
        <div className='d-flex justify-content-center p-3'>
            <div className="card" style={{ width: "18rem" }} key={taskDetails.data.result.id}>
              <Image
              src={taskDetails.data.result.image}
              className="card-img-top" 
              width={200} 
              height={200} 
              alt="Picture of the Task" 
              priority />
              <div className="card-body">
                <h1 className="card-text">{taskDetails.data.result.title}</h1>
              </div>
            </div>
        </div>
    )}
    </Layout>
    </>
  )
}
export const getServerSideProps = async () =>{
  try {
    const query = await fetch(`https://dev-api.almashhad.tv/api/videos/detailsElastic/182622880654874`)
    const response = await query.json()

    if (!response) {
      return {
        notFound: true
      }
    }

    return {
      props:{
          taskDetails: response
      }
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        taskDetails: null,
        error: "Failed to fetch data. Please try again later."
      }
    }
  }
}


export default index