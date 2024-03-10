import React from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router';

const Tabs = () => {
  const router = useRouter();
  return (
    <>
    <div className='d-flex justify-content-center pt-2'>
          <ul className="nav nav-tabs" id="myTab" role="tablist ">
            <li className="nav-item" role="presentation ">
                <Link href="/tasks/task-list/active" className='text-decoration-none'>
                <button className={`nav-link text-black ${router.pathname === '/tasks/task-list/active' && 'active'} `}>
                  Active
                </button>
                </Link>
              </li>
              <li className="nav-item" role="presentation ">
                <Link href="/tasks/task-list/complete" className='text-decoration-none'>
                <button className={`nav-link text-black ${router.pathname === '/tasks/task-list/complete' && 'active'}`}>
                  Completed
                </button>
                </Link>
            </li>
          </ul>
        </div>
        </>       
  )
}

export default Tabs
