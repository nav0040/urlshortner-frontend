import React from 'react'
import { Link } from 'react-router-dom';
import { serverUrl } from '../../helpers/constants';
import { Copy } from 'lucide-react';
import toast from 'react-hot-toast';

const DataTable = ({ data }) => {
    // console.log(data);

    const copyToClipboard = async (url) => {
        try {
            await navigator.clipboard.writeText(`${serverUrl}/url/${url}`)
            toast.success(`URL Copied to clipboard : ${serverUrl}/url/${url}`)
        } catch (error) {
            console.log(error);

        }
    }

    const renderTableData = () => {
        return data.map((item) => {
            return (
                <tr
                    key={item._id}
                    className='border-b text-white bg-gray-600 hover:bg-white hover:text-gray-800'>
                    <td className='px-6 py-3 break-words'>
                        <Link to={item.originalUrl} target='_blank' rel='noreferrer noopener'>
                            {item.originalUrl}
                        </Link>
                    </td>
                    <td className='px-6 py-3'>
                        <Link to={`${serverUrl}/url/${item.shortCode}`} target='_blank' rel='noreferrer noopener'>
                            {item.shortCode}
                        </Link>
                    </td>
                    <td className='px-6 py-3 '>
                        <div onClick={()=>copyToClipboard(item.shortCode)}>
                            <Copy className='cursor-pointer' />

                        </div>
                    </td>
                </tr>
            )
        })
    }

    return (
        <div className='container mx-auto pt-2 pb-10'>
            <div className='relative overflow-x-auto shadow-sm sm:rounded-lg'>
                <table className='w-full table-fixed text-sm text-left rtl:text-right text-gray-500'>
                    <thead className='text-md uppercase text-gray-50 bg-gray-700'>
                        <tr>
                            <th scope='col' className='px-6 py-3 w-6/12'>
                                Full URL
                            </th>
                            <th scope='col' className='px-6 py-3 w-3/12'>
                                Short URL
                            </th>

                            <th scope='col' className='px-6 py-3 w-6/12'>
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderTableData()}

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default DataTable