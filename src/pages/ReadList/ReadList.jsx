import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoreBook } from '../../utilities/addToDB';
import Book from '../BOOKS/Book/Book';

const ReadList = () => {
    const [readList, setReadList] = useState([])
    const data = useLoaderData()

    const [sort, setSort] = useState("")


    useEffect(() => {
        const storeBookData = getStoreBook()
        const convertedStoredData = storeBookData.map(id => parseInt(id))
        const myReadData = data.filter(book => convertedStoredData.includes(book.bookId))
        setReadList(myReadData)
    }, [])

    const handleSort = (type) => {
        setSort(type)
    }
    return (
        <div>
            <details className="dropdown">
                <summary className="btn m-1">sort by: {sort ? sort : ""}</summary>
                <ul className="menu dropdown-content bg-base-200 rounded-box z-1 w-52 p-2 text-red-500 shadow-sm">
                    <li ><a onClick={() => handleSort("pages")}>pages</a></li>
                    <li><a onClick={() => handleSort("Rating")}> Rating</a></li>
                </ul>
            </details>



            <Tabs className="mt-8">
                <TabList>
                    <Tab>Read list</Tab>
                    <Tab>Wish List</Tab>
                </TabList>

                <TabPanel>
                    <h2>I read list {readList.length}</h2>
                    {readList.map(b => <Book key={b.bookId} singleBook={b}></Book>)}
                </TabPanel>
                <TabPanel>
                    <h2>wish list</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ReadList;